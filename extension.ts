/*
* Watermark - Cinnamon desktop extension
* Place a watermark on the desktop
* Copyright (C) 2018  Germán Franco Dorca
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import { misc, ui, ExtensionMetadata } from '@girs/gnome-shell';
import { Monitor } from '@girs/gnome-shell/src/ui/layout';


const Clutter = imports.gi.Clutter;
const Cogl = imports.gi.Cogl;
const GdkPixbuf = imports.gi.GdkPixbuf;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Main = ui.main;
const { PanelLoc } = ui.panel;
const Settings = ui.settings;
const SignalManager = misc.signalManager;
const St = imports.gi.St;
const Util = misc.util;
const Mainloop = imports.mainloop;

const ERROR_ICON_NAME = 'face-sad-symbolic';
const DEFAULT_ICON_SIZE = 128;


class DesktopShaderExtension {

	meta: ExtensionMetadata;
	watermarks: Shader[];
	_signals: SignalManager.SignalManager;
	_timeoutid: number;
	settings: any;
	first_launch: boolean;
	icon: any;

	constructor ( meta: ExtensionMetadata ) {
		this.meta = meta;
		this.watermarks = [];
		this._signals = new SignalManager.SignalManager( null );
		this._timeoutid = 0;
	}



	enable () {
		this.settings = new Settings.ExtensionSettings( this, this.meta.uuid );
		this.settings.bind( 'icon', 'icon', this.on_settings_updated );
		this.settings.bind( 'custom-icon', 'custom_icon', this.on_settings_updated );
		this.settings.bind( 'alpha', 'alpha', this.on_settings_updated );
		this.settings.bind( 'invert', 'invert', this.on_settings_updated );
		this.settings.bind( 'position-x', 'position_x', this.on_desktop_size_changed );
		this.settings.bind( 'position-y', 'position_y', this.on_desktop_size_changed );
		this.settings.bind( 'margin-x', 'margin_x', this.on_desktop_size_changed );
		this.settings.bind( 'margin-y', 'margin_y', this.on_desktop_size_changed );
		this.settings.bind( 'use-custom-size', 'use_custom_size', this.on_settings_updated );
		this.settings.bind( 'size', 'size', this.on_settings_updated );
		this.settings.bind( 'first-launch', 'first_launch', () => this._detect_os( true ) );

		this._signals.connect( global.screen, 'monitors-changed', () => {
			this._clear_watermarks();
			this._init_watermarks();
		} );

		let on_desktop_size_changed = this.on_desktop_size_changed.bind( this );
		for ( let prop of [ 'enabled', 'height', 'resizable', 'autohide' ] ) {
			this._signals.connect( global.settings, 'changed::panels-' + prop, on_desktop_size_changed );
		}

		this._init_watermarks();
		this._detect_os();
	}

	_init_watermarks () {
		for ( let i = global.screen.get_n_monitors() - 1; i >= 0; i-- ) {
			let monitor = Main.layoutManager.monitors[ i ];
			this.watermarks.push( new Shader( monitor, this ) );
		}
	}

	_clear_watermarks () {
		for ( let wm of this.watermarks ) {
			wm.destroy();
		}
		this.watermarks = [];
	}

	disable () {
		this._clear_watermarks();
		this._signals.disconnectAllSignals();
	}

	on_desktop_size_changed () {
		for ( let wm of this.watermarks )
			wm.update_position();
	}

	on_settings_updated () {
		if ( this._timeoutid ) {
			Mainloop.source_remove( this._timeoutid );
			this._timeoutid = 0;
		}

		for ( let wm of this.watermarks )
			wm.update();
	}

	// Detect the running os and set the icon value. Does nothing on failure.
	_detect_os ( is_reset?: boolean ) {
		if ( !this.first_launch )
			return;

		// this.settings.setValue('first-launch', false);
		Util.spawn_async( [ 'cat', '/etc/os-release' ], content => {
			let match = content.match( /^ID=(\w+)$/m );
			if ( !match )
				return;
			let os_name = match[ 1 ];

			// If we have an icon for this os name
			let icon_path = this.meta.path + '/icons/' + os_name + '.svg';
			if ( GLib.file_test( icon_path, GLib.FileTest.IS_REGULAR ) ) {
				this._on_os_detected( os_name, is_reset );
			}
		} );
	}

	_on_os_detected ( os_name, is_reset ) {
		if ( this._timeoutid ) {
			Mainloop.source_remove( this._timeoutid );
			this._timeoutid = 0;
		}

		if ( is_reset ) {
			/* We need to wait more than 2000ms, that is the time the
				settings module wait to start listening to changes to the
				json settings file after a write from its part. Otherwise
				any changes made from here are ignored and overwritten in
				future updates. See this line: https://github.com/linuxmint/Cinnamon/blob/2499b0920ddbc86692f89cb54777486005add497/files/usr/share/cinnamon/cinnamon-settings/bin/JsonSettingsWidgets.py#L165
			*/
			this._timeoutid = Mainloop.timeout_add( 2100, () => {
				this._on_os_detected( os_name, false );
				return false; // Stop repeating
			} );
		} else {
			this.first_launch = false;
			this.icon = os_name;
			// The handler is not automatically called
			this.on_settings_updated();
		}

	}

}

class Shader {
	manager: any;
	monitor: Monitor;
	actor: St.Bin;
	watermark: any;

	constructor ( monitor: Monitor, manager ) {
		this.manager = manager;
		this.monitor = monitor;

		this.actor = new St.Bin();
		this.watermark = null;

		global.background_actor.add_actor( this.actor );

		/* Position can't be calculated until size is set, and that is async */
		this.actor.connect( 'queue-redraw', () => this.update_position() );
		this.update();
	}


	update () {
		if ( this.watermark ) {
			this.watermark.destroy();
		}

		this.watermark = this.get_watermark();
		this.actor.set_child( this.watermark );

		this.actor.set_opacity( this.manager.alpha * 255 / 100 );
		this.actor.style = this.manager.invert ? 'color: black' : 'color: white';
	}

	get_desktop_geometry () {
		let { x, y, width, height } = this.monitor;

		let margin_x = this.manager.margin_x;
		let margin_y = this.manager.margin_y;
		x += margin_x;
		y += margin_y;
		width -= 2 * margin_x;
		height -= 2 * margin_y;

		for ( let panel of Main.getPanels() ) {
			if ( !panel || panel.monitorIndex !== this.monitor.index )
				continue;

			if ( panel._autohideSettings == "true" )
				continue;

			switch ( panel.panelPosition ) {
				case PanelLoc.top:
					y += panel.actor.height;
				case PanelLoc.bottom:
					height -= panel.actor.height;
					break;
				case PanelLoc.left:
					x += panel.actor.width;
				case PanelLoc.right:
					width -= panel.actor.width;
					break;
			}
		}
		return { x, y, width, height };
	}

	update_position () {
		let desktop = this.get_desktop_geometry();
		let box;

		box = this.manager.position_x === 50 ? this.monitor : desktop;
		let x = box.x + ( box.width - this.actor.width ) * this.manager.position_x / 100;
		box = this.manager.position_y === 50 ? this.monitor : desktop;
		let y = box.y + ( box.height - this.actor.height ) * this.manager.position_y / 100;

		this.actor.set_position( Math.floor( x + Math.random() * 100 ), Math.floor( y ) );
	}

	get_watermark () {
		let size = this.manager.size * global.ui_scale;
		let path_or_name = this.manager.icon != 'other' ? this.manager.icon : this.manager.custom_icon;

		if ( GLib.file_test( path_or_name, GLib.FileTest.IS_REGULAR ) ) {
			let image = this.get_image( path_or_name, size );
			if ( image ) return image;
		}

		let xlet_path = this.manager.meta.path + '/icons/' + path_or_name + '.svg';
		if ( GLib.file_test( xlet_path, GLib.FileTest.IS_REGULAR ) ) {
			let image = this.get_image( xlet_path, size );
			if ( image ) return image;
		}

		let icon_name = path_or_name.endsWith( '-symbolic' ) ? path_or_name : path_or_name + '-symbolic';
		if ( Gtk.IconTheme.get_default().has_icon( icon_name ) ) { // Icon name
			let icon_size = this.manager.use_custom_size ? size : DEFAULT_ICON_SIZE;
			return new St.Icon( { icon_name, icon_size, icon_type: St.IconType.SYMBOLIC } );
		}

		global.logError( this.manager.meta.uuid + ": watermark file not found (" + path_or_name + ")" );
		return new St.Icon( { icon_name: ERROR_ICON_NAME, icon_size: DEFAULT_ICON_SIZE, icon_type: St.IconType.SYMBOLIC } );
	}

	get_image ( path, size ) {
		let pixbuf;
		try {
			if ( this.manager.use_custom_size )
				pixbuf = GdkPixbuf.Pixbuf.new_from_file_at_size( path, size, size );
			else
				pixbuf = GdkPixbuf.Pixbuf.new_from_file( path );
		} catch ( e ) {
			return null;
		}

		let image = new Clutter.Image();
		image.set_data( this.manager.invert ? this.invert_pixels( pixbuf ) : pixbuf.get_pixels(),
			pixbuf.get_has_alpha() ? Cogl.PixelFormat.RGBA_8888 : Cogl.PixelFormat.RGB_888,
			pixbuf.get_width(),
			pixbuf.get_height(),
			pixbuf.get_rowstride() );

		return new Clutter.Actor( {
			content: image,
			width: pixbuf.get_width(),
			height: pixbuf.get_height()
		} );
	}

	invert_pixels ( pixbuf ) {
		let pixels = pixbuf.get_pixels();
		let bps = pixbuf.get_has_alpha() ? 4 : 3;

		for ( let i = 0; i < pixels.length; i += bps ) {
			pixels[ i ] = 0xff - pixels[ i ];
			pixels[ i + 1 ] = 0xff - pixels[ i + 1 ];
			pixels[ i + 2 ] = 0xff - pixels[ i + 2 ];
		}
		return pixels;
	}

	destroy () {
		this.actor.destroy();
		this.actor = null;
		this.manager = null;
	}
}

let extension = null;
function enable () {
	extension.enable();
}

function disable () {
	extension.disable();
	extension = null;
}

function init ( metadata ) {
	if ( !extension ) {
		extension = new DesktopShaderExtension( metadata );
	}
}
