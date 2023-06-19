
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cinnamondesktop-3.0-import.d.ts';
/**
 * CinnamonDesktop-3.0
 */

import type Gtk from './gtk-3.0.js';
import type xlib from './xlib-2.0.js';
import type Gdk from './gdk-3.0.js';
import type cairo from './cairo-1.0.js';
import type Pango from './pango-1.0.js';
import type HarfBuzz from './harfbuzz-0.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type Gio from './gio-2.0.js';
import type GdkPixbuf from './gdkpixbuf-2.0.js';
import type GModule from './gmodule-2.0.js';
import type Atk from './atk-1.0.js';
import type CDesktopEnums from './cdesktopenums-3.0.js';

export namespace CinnamonDesktop {

enum DesktopThumbnailSize {
    NORMAL,
    LARGE,
}
enum RRDpmsMode {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    DISABLED,
    UNKNOWN,
}
enum RRError {
    UNKNOWN,
    NO_RANDR_EXTENSION,
    RANDR_ERROR,
    BOUNDS_ERROR,
    CRTC_ASSIGNMENT,
    NO_MATCHING_CONFIG,
    NO_DPMS_EXTENSION,
}
enum RRRotation {
    ROTATION_NEXT,
    ROTATION_0,
    ROTATION_90,
    ROTATION_180,
    ROTATION_270,
    REFLECT_X,
    REFLECT_Y,
}
const RR_CONNECTOR_TYPE_PANEL: string | null
/**
 * Returns the GSettings key string of the
 * given media key type.
 * @param type The CDesktopMediaKeyType
 * @returns the string corresponding to the provided media key type or %NULL
 */
function desktop_get_media_key_string(type: number): string | null
/**
 * Prepends a terminal (either the one configured as default in
 * the user's GNOME setup, or one of the common xterm emulators) to the passed
 * in vector, modifying it in the process.  The vector should be allocated with
 * #g_malloc, as this will #g_free the original vector.  Also all elements must
 * have been allocated separately.  That is the standard glib/GNOME way of
 * doing vectors however.  If the integer that `argc` points to is negative, the
 * size will first be computed.  Also note that passing in pointers to a vector
 * that is empty, will just create a new vector for you.
 * @param argc a pointer to the vector size
 * @param argv a pointer to the vector
 */
function desktop_prepend_terminal_to_vector(argc: number, argv: string | null): void
function desktop_thumbnail_cache_check_permissions(factory: DesktopThumbnailFactory, quick: boolean): boolean
function desktop_thumbnail_cache_fix_permissions(): void
/**
 * Returns whether the thumbnail has the correct uri embedded in the
 * Thumb::URI option in the png.
 * @param pixbuf an loaded thumbnail pixbuf
 * @param uri a uri
 * @returns TRUE if the thumbnail is for @uri
 */
function desktop_thumbnail_has_uri(pixbuf: GdkPixbuf.Pixbuf, uri: string | null): boolean
/**
 * Returns whether the thumbnail has the correct uri and mtime embedded in the
 * png options.
 * @param pixbuf an loaded thumbnail #GdkPixbuf
 * @param uri a uri
 * @param mtime the mtime
 * @returns TRUE if the thumbnail has the right @uri and @mtime
 */
function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string | null, mtime: number): boolean
/**
 * Calculates the MD5 checksum of the uri. This can be useful
 * if you want to manually handle thumbnail files.
 * @param uri an uri
 * @returns A string with the MD5 digest of the uri string.
 */
function desktop_thumbnail_md5(uri: string | null): string | null
/**
 * Returns the filename that a thumbnail of size `size` for `uri` would have.
 * @param uri an uri
 * @param size a thumbnail size
 * @returns an absolute filename
 */
function desktop_thumbnail_path_for_uri(uri: string | null, size: DesktopThumbnailSize): string | null
/**
 * Scales the pixbuf to the desired size. This function
 * is a lot faster than gdk-pixbuf when scaling down by
 * large amounts.
 * @param pixbuf a #GdkPixbuf
 * @param dest_width the desired new width
 * @param dest_height the desired new height
 * @returns a scaled pixbuf
 */
function desktop_thumbnail_scale_down_pixbuf(pixbuf: GdkPixbuf.Pixbuf, dest_width: number, dest_height: number): GdkPixbuf.Pixbuf
/**
 * Uses packagekit to check if provided package names are installed.
 * @param packages a null-terminated array of package names
 * @param callback the callback to run for the result
 */
function installer_check_for_packages(packages: string[], callback: InstallerClientCallback): void
/**
 * Uses packagekit to install the provided list of packages.
 * @param packages a null-terminated array of package names
 * @param callback the callback to run for the result
 */
function installer_install_packages(packages: string[], callback: InstallerClientCallback): void
/**
 * Returns the #GQuark that will be used for #GError values returned by the
 * GnomeRR API.
 * @returns a #GQuark used to identify errors coming from the GnomeRR API.
 */
function rr_error_quark(): GLib.Quark
interface InstallerClientCallback {
    (success: boolean): void
}
module BG {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: BG): void
    }

    /**
     * Signal callback interface for `transitioned`
     */
    interface TransitionedSignalCallback {
        ($obj: BG): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface BG {

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.BG

    changes_with_time(): boolean
    create_and_set_gtk_image(image: Gtk.Image, width: number, height: number): void
    create_and_set_surface_as_root(root_window: Gdk.Window, screen: Gdk.Screen): void
    /**
     * Creates a thumbnail for a certain frame, where 'frame' is somewhat
     * vaguely defined as 'suitable point to show while single-stepping
     * through the slideshow'.
     * @param factory 
     * @param screen 
     * @param dest_width 
     * @param dest_height 
     * @param frame_num 
     * @returns the newly created thumbnail or or NULL if frame_num is out of bounds.
     */
    create_frame_thumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number, frame_num: number): GdkPixbuf.Pixbuf
    /**
     * Create a surface that can be set as background for `window`. If `is_root` is
     * TRUE, the surface created will be created by a temporary X server connection
     * so that if someone calls XKillClient on it, it won't affect the application
     * who created it.
     * @param window 
     * @param width 
     * @param height 
     * @param root 
     * @returns %NULL on error (e.g. out of X connections)
     */
    create_surface(window: Gdk.Window, width: number, height: number, root: boolean): cairo.Surface
    create_thumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number): GdkPixbuf.Pixbuf
    draw(dest: GdkPixbuf.Pixbuf, screen: Gdk.Screen, is_root: boolean): void
    get_color(type: CDesktopEnums.BackgroundShading, primary: Gdk.Color, secondary: Gdk.Color): void
    get_filename(): string | null
    get_image_size(factory: DesktopThumbnailFactory, best_width: number, best_height: number, width: number, height: number): boolean
    get_placement(): CDesktopEnums.BackgroundStyle
    has_multiple_sizes(): boolean
    is_dark(dest_width: number, dest_height: number): boolean
    load_from_preferences(settings: Gio.Settings): void
    save_to_preferences(settings: Gio.Settings): void
    set_color(type: CDesktopEnums.BackgroundShading, primary: Gdk.Color, secondary: Gdk.Color): void
    set_filename(filename: string | null): void
    set_placement(placement: CDesktopEnums.BackgroundStyle): void

    // Own signals of CinnamonDesktop-3.0.CinnamonDesktop.BG

    connect(sigName: "changed", callback: BG.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: BG.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "transitioned", callback: BG.TransitionedSignalCallback): number
    connect_after(sigName: "transitioned", callback: BG.TransitionedSignalCallback): number
    emit(sigName: "transitioned", ...args: any[]): void

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.BG

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BG extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.BG

    static name: string
    static $gtype: GObject.GType<BG>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.BG

    constructor(config?: BG.ConstructorProperties) 
    constructor() 
    static new(): BG
    _init(config?: BG.ConstructorProperties): void
    /**
     * This function queries the _XROOTPMAP_ID property from
     * the root window associated with `screen` to determine
     * the current root window background pixmap and returns
     * a copy of it. If the _XROOTPMAP_ID is not set, then
     * a black surface is returned.
     * @param screen a #GdkScreen
     * @returns a #cairo_surface_t if successful or %NULL
     */
    static get_surface_from_root(screen: Gdk.Screen): cairo.Surface
    static set_accountsservice_background(background: string | null): void
    /**
     * Set the root pixmap, and properties pointing to it. We
     * do this atomically with a server grab to make sure that
     * we won't leak the pixmap if somebody else it setting
     * it at the same time. (This assumes that they follow the
     * same conventions we do).  `surface` should come from a call
     * to gnome_bg_create_surface().
     * @param screen the #GdkScreen to change root background on
     * @param surface the #cairo_surface_t to set root background from.   Must be an xlib surface backing a pixmap.
     */
    static set_surface_as_root(screen: Gdk.Screen, surface: cairo.Surface): void
    /**
     * Set the root pixmap, and properties pointing to it.
     * This function differs from gnome_bg_set_surface_as_root()
     * in that it adds a subtle crossfade animation from the
     * current root pixmap to the new one.
     * @param screen the #GdkScreen to change root background on
     * @param surface the cairo xlib surface to set root background from
     * @returns a #GnomeBGCrossfade object
     */
    static set_surface_as_root_with_crossfade(screen: Gdk.Screen, surface: cairo.Surface): BGCrossfade
}

module BGCrossfade {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: BGCrossfade, window: GObject.Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfade

        /**
         * When a crossfade is running, this is height of the fading
         * surface.
         */
        height?: number | null
        /**
         * When a crossfade is running, this is width of the fading
         * surface.
         */
        width?: number | null
    }

}

interface BGCrossfade {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfade

    /**
     * When a crossfade is running, this is height of the fading
     * surface.
     */
    readonly height: number
    /**
     * When a crossfade is running, this is width of the fading
     * surface.
     */
    readonly width: number

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfade

    parent_object: GObject.Object
    priv: BGCrossfadePrivate

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfade

    /**
     * This function reveals whether or not `fade` is currently
     * running on a window.  See gnome_bg_crossfade_start() for
     * information on how to initiate a crossfade.
     * @returns %TRUE if fading, or %FALSE if not fading
     */
    is_started(): boolean
    /**
     * Before initiating a crossfade with gnome_bg_crossfade_start()
     * a start and end surface have to be set.  This function sets
     * the surface shown at the end of the crossfade effect.
     * @param surface The cairo surface to fade to
     * @returns %TRUE if successful, or %FALSE if the surface could not be copied.
     */
    set_end_surface(surface: cairo.Surface): boolean
    /**
     * Before initiating a crossfade with gnome_bg_crossfade_start()
     * a start and end surface have to be set.  This function sets
     * the surface shown at the beginning of the crossfade effect.
     * @param surface The cairo surface to fade from
     * @returns %TRUE if successful, or %FALSE if the surface could not be copied.
     */
    set_start_surface(surface: cairo.Surface): boolean
    /**
     * This function initiates a quick crossfade between two surfaces on
     * the background of `window`.  Before initiating the crossfade both
     * gnome_bg_crossfade_start() and gnome_bg_crossfade_end() need to
     * be called. If animations are disabled, the crossfade is skipped,
     * and the window background is set immediately to the end surface.
     * @param window The #GdkWindow to draw crossfade on
     */
    start(window: Gdk.Window): void
    /**
     * This function stops any in progress crossfades that may be
     * happening.  It's harmless to call this function if `fade` is
     * already stopped.
     */
    stop(): void

    // Own virtual methods of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfade

    vfunc_finished(window: Gdk.Window): void

    // Own signals of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfade

    connect(sigName: "finished", callback: BGCrossfade.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: BGCrossfade.FinishedSignalCallback): number
    emit(sigName: "finished", window: GObject.Object, ...args: any[]): void

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfade

    connect(sigName: "notify::height", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BGCrossfade extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfade

    static name: string
    static $gtype: GObject.GType<BGCrossfade>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfade

    constructor(config?: BGCrossfade.ConstructorProperties) 
    /**
     * Creates a new object to manage crossfading a
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param width The width of the crossfading window
     * @param height The height of the crossfading window
     * @returns the new #GnomeBGCrossfade
     */
    constructor(width: number, height: number) 
    /**
     * Creates a new object to manage crossfading a
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param width The width of the crossfading window
     * @param height The height of the crossfading window
     * @returns the new #GnomeBGCrossfade
     */
    static new(width: number, height: number): BGCrossfade
    _init(config?: BGCrossfade.ConstructorProperties): void
}

module DesktopThumbnailFactory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DesktopThumbnailFactory {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.DesktopThumbnailFactory

    parent: GObject.Object
    priv: DesktopThumbnailFactoryPrivate

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.DesktopThumbnailFactory

    /**
     * Returns TRUE if this GnomeIconFactory can (at least try) to thumbnail
     * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
     * 
     * Usage of this function is threadsafe.
     * @param uri the uri of a file
     * @param mime_type the mime type of the file
     * @param mtime the mtime of the file
     * @returns TRUE if the file can be thumbnailed.
     */
    can_thumbnail(uri: string | null, mime_type: string | null, mtime: number): boolean
    /**
     * Creates a failed thumbnail for the file so that we don't try
     * to re-thumbnail the file later.
     * 
     * Usage of this function is threadsafe.
     * @param uri the uri of a file
     * @param mtime the modification time of the file
     */
    create_failed_thumbnail(uri: string | null, mtime: number): void
    /**
     * Tries to generate a thumbnail for the specified file. If it succeeds
     * it returns a pixbuf that can be used as a thumbnail.
     * 
     * Usage of this function is threadsafe.
     * @param uri the uri of a file
     * @param mime_type the mime type of the file
     * @returns thumbnail pixbuf if thumbnailing succeeded, %NULL otherwise.
     */
    generate_thumbnail(uri: string | null, mime_type: string | null): GdkPixbuf.Pixbuf
    /**
     * Tries to locate an failed thumbnail for the file specified. Writing
     * and looking for failed thumbnails is important to avoid to try to
     * thumbnail e.g. broken images several times.
     * 
     * Usage of this function is threadsafe.
     * @param uri the uri of a file
     * @param mtime the mtime of the file
     * @returns TRUE if there is a failed thumbnail for the file.
     */
    has_valid_failed_thumbnail(uri: string | null, mtime: number): boolean
    /**
     * Tries to locate an existing thumbnail for the file specified.
     * 
     * Usage of this function is threadsafe.
     * @param uri the uri of a file
     * @param mtime the mtime of the file
     * @returns The absolute path of the thumbnail, or %NULL if none exist.
     */
    lookup(uri: string | null, mtime: number): string | null
    /**
     * Saves `thumbnail` at the right place. If the save fails a
     * failed thumbnail is written.
     * 
     * Usage of this function is threadsafe.
     * @param thumbnail the thumbnail as a pixbuf
     * @param uri the uri of a file
     * @param original_mtime the modification time of the original file
     */
    save_thumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string | null, original_mtime: number): void

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.DesktopThumbnailFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DesktopThumbnailFactory extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.DesktopThumbnailFactory

    static name: string
    static $gtype: GObject.GType<DesktopThumbnailFactory>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.DesktopThumbnailFactory

    constructor(config?: DesktopThumbnailFactory.ConstructorProperties) 
    /**
     * Creates a new #GnomeDesktopThumbnailFactory.
     * 
     * This function must be called on the main thread.
     * @constructor 
     * @param size The thumbnail size to use
     * @returns a new #GnomeDesktopThumbnailFactory
     */
    constructor(size: DesktopThumbnailSize) 
    /**
     * Creates a new #GnomeDesktopThumbnailFactory.
     * 
     * This function must be called on the main thread.
     * @constructor 
     * @param size The thumbnail size to use
     * @returns a new #GnomeDesktopThumbnailFactory
     */
    static new(size: DesktopThumbnailSize): DesktopThumbnailFactory
    _init(config?: DesktopThumbnailFactory.ConstructorProperties): void
}

module PnpIds {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PnpIds {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.PnpIds

    parent: GObject.Object
    priv: PnpIdsPrivate

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.PnpIds

    /**
     * Find the full manufacturer name for the given PNP ID.
     * @param pnp_id the PNP ID to look for
     * @returns a new string representing the manufacturer name, or %NULL when not found.
     */
    get_pnp_id(pnp_id: string | null): string | null

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.PnpIds

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PnpIds extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.PnpIds

    static name: string
    static $gtype: GObject.GType<PnpIds>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.PnpIds

    constructor(config?: PnpIds.ConstructorProperties) 
    /**
     * Returns a reference to a #GnomePnpIds object, or creates
     * a new one if none have been created.
     * @constructor 
     * @returns a #GnomePnpIds object.
     */
    constructor() 
    /**
     * Returns a reference to a #GnomePnpIds object, or creates
     * a new one if none have been created.
     * @constructor 
     * @returns a #GnomePnpIds object.
     */
    static new(): PnpIds
    _init(config?: PnpIds.ConstructorProperties): void
}

module RRConfig {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CinnamonDesktop-3.0.CinnamonDesktop.RRConfig

        screen?: RRScreen | null
    }

}

interface RRConfig {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRConfig

    readonly screen: RRScreen

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.RRConfig

    parent: GObject.Object

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.RRConfig

    applicable(screen: RRScreen): boolean
    apply_with_time(screen: RRScreen, timestamp: number): boolean
    ensure_primary(): boolean
    equal(config2: RRConfig): boolean
    get_auto_scale(): boolean
    get_base_scale(): number
    get_clone(): boolean
    get_outputs(): RROutputInfo[]
    load_current(): boolean
    load_filename(filename: string | null): boolean
    match(config2: RRConfig): boolean
    sanitize(): void
    save(): boolean
    set_auto_scale(auto_scale: boolean): void
    set_base_scale(base_scale: number): void
    set_clone(clone: boolean): void

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.RRConfig

    connect(sigName: "notify::screen", callback: (($obj: RRConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: RRConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RRConfig extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRConfig

    static name: string
    static $gtype: GObject.GType<RRConfig>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.RRConfig

    constructor(config?: RRConfig.ConstructorProperties) 
    static new_current(screen: RRScreen): RRConfig
    static new_stored(screen: RRScreen): RRConfig
    _init(config?: RRConfig.ConstructorProperties): void
    static apply_from_filename_with_time(screen: RRScreen, filename: string | null, timestamp: number): boolean
    static get_backup_filename(): string | null
    static get_intended_filename(): string | null
    static get_legacy_filename(): string | null
}

module RRLabeler {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CinnamonDesktop-3.0.CinnamonDesktop.RRLabeler

        config?: RRConfig | null
    }

}

interface RRLabeler {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRLabeler

    readonly config: RRConfig

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.RRLabeler

    parent: GObject.Object

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.RRLabeler

    /**
     * Get the color used for the label on a given output (monitor).
     * @param output Output device (i.e. monitor) to query
     */
    get_rgba_for_output(output: RROutputInfo): /* rgba_out */ Gdk.RGBA
    /**
     * Hide ouput labels.
     */
    hide(): void
    /**
     * Show the labels.
     */
    show(): void

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.RRLabeler

    connect(sigName: "notify::config", callback: (($obj: RRLabeler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: RRLabeler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RRLabeler extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRLabeler

    static name: string
    static $gtype: GObject.GType<RRLabeler>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.RRLabeler

    constructor(config?: RRLabeler.ConstructorProperties) 
    /**
     * Create a GUI element that will display colored labels on each connected monitor.
     * This is useful when users are required to identify which monitor is which, e.g. for
     * for configuring multiple monitors.
     * The labels will be shown by default, use gnome_rr_labeler_hide to hide them.
     * @constructor 
     * @param config Configuration of the screens to label
     * @returns A new #GnomeRRLabeler
     */
    constructor(config: RRConfig) 
    /**
     * Create a GUI element that will display colored labels on each connected monitor.
     * This is useful when users are required to identify which monitor is which, e.g. for
     * for configuring multiple monitors.
     * The labels will be shown by default, use gnome_rr_labeler_hide to hide them.
     * @constructor 
     * @param config Configuration of the screens to label
     * @returns A new #GnomeRRLabeler
     */
    static new(config: RRConfig): RRLabeler
    _init(config?: RRLabeler.ConstructorProperties): void
}

module RROutputInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RROutputInfo {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.RROutputInfo

    parent: GObject.Object

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.RROutputInfo

    get_aspect_ratio(): number
    get_display_name(): string | null
    get_flags(doublescan: boolean, interlaced: boolean, vsync: boolean): void
    get_geometry(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    get_name(): string | null
    get_preferred_height(): number
    get_preferred_width(): number
    get_primary(): boolean
    get_product(): number
    get_refresh_rate(): number
    get_refresh_rate_f(): number
    get_rotation(): RRRotation
    get_scale(): number
    get_serial(): number
    get_vendor(): /* vendor */ string[]
    is_active(): boolean
    is_connected(): boolean
    set_active(active: boolean): void
    set_flags(doublescan: boolean, interlaced: boolean, vsync: boolean): void
    set_geometry(x: number, y: number, width: number, height: number): void
    set_primary(primary: boolean): void
    set_refresh_rate(rate: number): void
    set_refresh_rate_f(rate: number): void
    set_rotation(rotation: RRRotation): void
    set_scale(scale: number): void

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.RROutputInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RROutputInfo extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RROutputInfo

    static name: string
    static $gtype: GObject.GType<RROutputInfo>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.RROutputInfo

    constructor(config?: RROutputInfo.ConstructorProperties) 
    _init(config?: RROutputInfo.ConstructorProperties): void
}

module RRScreen {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: RRScreen): void
    }

    /**
     * Signal callback interface for `output-connected`
     */
    interface OutputConnectedSignalCallback {
        ($obj: RRScreen, output: any | null): void
    }

    /**
     * Signal callback interface for `output-disconnected`
     */
    interface OutputDisconnectedSignalCallback {
        ($obj: RRScreen, output: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of CinnamonDesktop-3.0.CinnamonDesktop.RRScreen

        gdk_screen?: Gdk.Screen | null
    }

}

interface RRScreen extends Gio.Initable {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRScreen

    readonly gdk_screen: Gdk.Screen

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.RRScreen

    parent: GObject.Object
    priv: RRScreenPrivate

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.RRScreen

    calculate_best_global_scale(index: number): number
    calculate_supported_scales(width: number, height: number, n_supported_scales: number): number
    create_clone_modes(): RRMode
    get_crtc_by_id(id: number): RRCrtc
    get_dpms_mode(mode: RRDpmsMode): boolean
    get_global_scale(): number
    get_global_scale_setting(): number
    get_output_by_id(id: number): RROutput
    get_output_by_name(name: string | null): RROutput
    /**
     * Get the ranges of the screen
     */
    get_ranges(): [ /* min_width */ number, /* max_width */ number, /* min_height */ number, /* max_height */ number ]
    /**
     * Queries the two timestamps that the X RANDR extension maintains.  The X
     * server will prevent change requests for stale configurations, those whose
     * timestamp is not equal to that of the latest request for configuration.  The
     * X server will also prevent change requests that have an older timestamp to
     * the latest change request.
     */
    get_timestamps(): [ /* change_timestamp_ret */ number, /* config_timestamp_ret */ number ]
    get_use_upscaling(): boolean
    /**
     * List available XRandR clone modes
     */
    list_clone_modes(): RRMode[]
    /**
     * List all CRTCs
     */
    list_crtcs(): RRCrtc[]
    /**
     * List available XRandR modes
     */
    list_modes(): RRMode[]
    /**
     * List all outputs
     */
    list_outputs(): RROutput[]
    /**
     * Refreshes the screen configuration, and calls the screen's callback if it
     * exists and if the screen's configuration changed.
     * @returns TRUE if the screen's configuration changed; otherwise, the function returns FALSE and a NULL error if the configuration didn't change, or FALSE and a non-NULL error if there was an error while refreshing the configuration.
     */
    refresh(): boolean
    /**
     * This method also disables the DPMS timeouts.
     * @param mode 
     */
    set_dpms_mode(mode: RRDpmsMode): boolean
    set_global_scale_setting(scale_factor: number): void
    set_primary_output(output: RROutput): void
    set_size(width: number, height: number, mm_width: number, mm_height: number): void

    // Own signals of CinnamonDesktop-3.0.CinnamonDesktop.RRScreen

    connect(sigName: "changed", callback: RRScreen.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: RRScreen.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "output-connected", callback: RRScreen.OutputConnectedSignalCallback): number
    connect_after(sigName: "output-connected", callback: RRScreen.OutputConnectedSignalCallback): number
    emit(sigName: "output-connected", output: any | null, ...args: any[]): void
    connect(sigName: "output-disconnected", callback: RRScreen.OutputDisconnectedSignalCallback): number
    connect_after(sigName: "output-disconnected", callback: RRScreen.OutputDisconnectedSignalCallback): number
    emit(sigName: "output-disconnected", output: any | null, ...args: any[]): void

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.RRScreen

    connect(sigName: "notify::gdk-screen", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gdk-screen", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gdk-screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RRScreen extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRScreen

    static name: string
    static $gtype: GObject.GType<RRScreen>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.RRScreen

    constructor(config?: RRScreen.ConstructorProperties) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `screen`.
     * @constructor 
     * @param screen the #GdkScreen on which to operate
     * @returns a unique #GnomeRRScreen instance, specific to the @screen, or NULL if this could not be created, for instance if the driver does not support Xrandr 1.2.  Each #GdkScreen thus has a single instance of #GnomeRRScreen.
     */
    constructor(screen: Gdk.Screen) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `screen`.
     * @constructor 
     * @param screen the #GdkScreen on which to operate
     * @returns a unique #GnomeRRScreen instance, specific to the @screen, or NULL if this could not be created, for instance if the driver does not support Xrandr 1.2.  Each #GdkScreen thus has a single instance of #GnomeRRScreen.
     */
    static new(screen: Gdk.Screen): RRScreen
    _init(config?: RRScreen.ConstructorProperties): void
}

module WallClock {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CinnamonDesktop-3.0.CinnamonDesktop.WallClock

        /**
         * If not NULL, the wall clock will format the time/date according to
         * this format string.  If the format string is invalid, the default string
         * will be used instead.
         */
        format_string?: string | null
    }

}

interface WallClock {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.WallClock

    /**
     * A formatted string representing the current clock display.
     */
    readonly clock: string | null
    /**
     * If not NULL, the wall clock will format the time/date according to
     * this format string.  If the format string is invalid, the default string
     * will be used instead.
     */
    format_string: string | null

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.WallClock

    parent_object: GObject.Object
    priv: WallClockPrivate

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.WallClock

    /**
     * Returns a formatted date and time based on either default format
     * settings, or via a custom-set format string.
     * 
     * The returned string should be ready to be set on a label.
     * @returns The formatted date/time string.
     */
    get_clock(): string | null
    /**
     * Returns a formatted date and time based on the provided format string.
     * The returned string should be ready to be set on a label.
     * @param format_string 
     * @returns The formatted date/time string, or NULL if there was a problem with the format string.
     */
    get_clock_for_format(format_string: string | null): string | null
    /**
     * Returns the current date-only format based on current locale
     * defaults and clock settings.
     * @returns The default date format string.
     */
    get_default_date_format(): string | null
    /**
     * Returns the current time-only format based on current locale
     * defaults and clock settings.
     * @returns The default time format string.
     */
    get_default_time_format(): string | null
    /**
     * Sets the wall clock to use the provided format string for any
     * subsequent updates.  Passing NULL will un-set any custom format,
     * and rely on a default locale format.
     * 
     * Any invalid format string passed will cause it to be ignored,
     * and the default locale format used instead.
     * @param format_string 
     * @returns Whether or not the format string was valid and accepted.
     */
    set_format_string(format_string: string | null): boolean

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.WallClock

    connect(sigName: "notify::clock", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::format-string", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-string", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format-string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WallClock extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.WallClock

    static name: string
    static $gtype: GObject.GType<WallClock>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.WallClock

    constructor(config?: WallClock.ConstructorProperties) 
    /**
     * Returns a new GnomeWallClock instance
     * @constructor 
     * @returns A pointer to a new GnomeWallClock instance.
     */
    constructor() 
    /**
     * Returns a new GnomeWallClock instance
     * @constructor 
     * @returns A pointer to a new GnomeWallClock instance.
     */
    static new(): WallClock
    _init(config?: WallClock.ConstructorProperties): void
    /**
     * Returns the translation of the format string according to
     * the LC_TIME locale.
     * @param gettext_domain 
     * @param format_string 
     * @returns The translated format string.
     */
    static lctime_format(gettext_domain: string | null, format_string: string | null): string | null
}

module XkbInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface XkbInfo {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.XkbInfo

    parent_object: GObject.Object
    priv: XkbInfoPrivate

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.XkbInfo

    description_for_option(group_id: string | null, id: string | null): string | null
    /**
     * Returns a list of all layout identifiers we know about.
     * @returns the list of layout names. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
     */
    get_all_layouts(): string[]
    /**
     * Returns a list of all option group identifiers we know about.
     * @returns the list of option group ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
     */
    get_all_option_groups(): string[]
    /**
     * Retrieves information about a layout. Both `display_name` and
     * `short_name` are suitable to show in UIs and might be localized if
     * translations are available.
     * 
     * Some layouts don't provide a short name (2 or 3 letters) or don't
     * specify a XKB variant, in those cases `short_name` or `xkb_variant`
     * are empty strings, i.e. "".
     * 
     * If the given layout doesn't exist the return value is %FALSE and
     * all the (out) parameters are set to %NULL.
     * @param id layout's identifier about which to retrieve the info
     * @returns %TRUE if the layout exists or %FALSE otherwise.
     */
    get_layout_info(id: string | null): [ /* returnType */ boolean, /* display_name */ string | null, /* short_name */ string | null, /* xkb_layout */ string | null, /* xkb_variant */ string | null ]
    /**
     * Retrieves the layout that better fits `language`. It also fetches
     * information about that layout like gnome_xkb_info_get_layout_info().
     * 
     * If a layout can't be found the return value is %FALSE and all the
     * (out) parameters are set to %NULL.
     * @param language an ISO 639 code
     * @returns %TRUE if a layout exists or %FALSE otherwise.
     */
    get_layout_info_for_language(language: string | null): [ /* returnType */ boolean, /* id */ string | null, /* display_name */ string | null, /* short_name */ string | null, /* xkb_layout */ string | null, /* xkb_variant */ string | null ]
    /**
     * Returns a list of all option identifiers we know about for group
     * `group_id`.
     * @param group_id group's identifier about which to retrieve the options
     * @returns the list of option ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
     */
    get_options_for_group(group_id: string | null): string[]

    // Class property signals of CinnamonDesktop-3.0.CinnamonDesktop.XkbInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XkbInfo extends GObject.Object {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.XkbInfo

    static name: string
    static $gtype: GObject.GType<XkbInfo>

    // Constructors of CinnamonDesktop-3.0.CinnamonDesktop.XkbInfo

    constructor(config?: XkbInfo.ConstructorProperties) 
    constructor() 
    static new(): XkbInfo
    _init(config?: XkbInfo.ConstructorProperties): void
}

interface BGClass {
}

abstract class BGClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.BGClass

    static name: string
}

interface BGCrossfadeClass {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfadeClass

    parent_class: GObject.ObjectClass
    finished: (fade: BGCrossfade, window: Gdk.Window) => void
}

abstract class BGCrossfadeClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfadeClass

    static name: string
}

interface BGCrossfadePrivate {
}

class BGCrossfadePrivate {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.BGCrossfadePrivate

    static name: string
}

interface DesktopThumbnailFactoryClass {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.DesktopThumbnailFactoryClass

    parent: GObject.ObjectClass
}

abstract class DesktopThumbnailFactoryClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.DesktopThumbnailFactoryClass

    static name: string
}

interface DesktopThumbnailFactoryPrivate {
}

class DesktopThumbnailFactoryPrivate {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.DesktopThumbnailFactoryPrivate

    static name: string
}

interface PnpIdsClass {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.PnpIdsClass

    parent_class: GObject.ObjectClass
}

abstract class PnpIdsClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.PnpIdsClass

    static name: string
}

interface PnpIdsPrivate {
}

class PnpIdsPrivate {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.PnpIdsPrivate

    static name: string
}

interface RRConfigClass {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.RRConfigClass

    parent_class: GObject.ObjectClass
}

abstract class RRConfigClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRConfigClass

    static name: string
}

interface RRConfigPrivate {
}

class RRConfigPrivate {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRConfigPrivate

    static name: string
}

interface RRCrtc {

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.RRCrtc

    can_drive_output(output: RROutput): boolean
    get_current_mode(): RRMode
    get_current_rotation(): RRRotation
    get_gamma(size: number, red: number, green: number, blue: number): boolean
    get_id(): number
    get_position(x: number, y: number): void
    get_rotations(): RRRotation
    get_scale(): number
    set_config_with_time(timestamp: number, x: number, y: number, mode: RRMode, rotation: RRRotation, outputs: RROutput, n_outputs: number, scale: number, global_scale: number): boolean
    set_gamma(size: number, red: number, green: number, blue: number): void
    supports_rotation(rotation: RRRotation): boolean
}

class RRCrtc {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRCrtc

    static name: string
}

interface RRLabelerClass {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.RRLabelerClass

    parent_class: GObject.ObjectClass
}

abstract class RRLabelerClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRLabelerClass

    static name: string
}

interface RRLabelerPrivate {
}

class RRLabelerPrivate {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRLabelerPrivate

    static name: string
}

interface RRMode {

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.RRMode

    get_flags(doublescan: boolean, interlaced: boolean, vsync: boolean): void
    get_freq(): number
    get_freq_f(): number
    get_height(): number
    get_id(): number
    get_width(): number
}

class RRMode {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRMode

    static name: string
}

interface RROutput {

    // Owm methods of CinnamonDesktop-3.0.CinnamonDesktop.RROutput

    can_clone(clone: RROutput): boolean
    get_backlight(): number
    get_backlight_max(): number
    get_backlight_min(): number
    get_connector_type(): string | null
    get_crtc(): RRCrtc
    get_current_mode(): RRMode
    get_edid_data(size: number): number
    get_height_mm(): number
    get_id(): number
    get_ids_from_edid(vendor: string | null, product: number, serial: number): boolean
    get_is_primary(): boolean
    get_name(): string | null
    get_position(x: number, y: number): void
    get_possible_crtcs(): RRCrtc
    get_preferred_mode(): RRMode
    get_size_inches(): number
    get_width_mm(): number
    is_connected(): boolean
    is_laptop(): boolean
    list_modes(): RRMode
    set_backlight(value: number): boolean
    supports_mode(mode: RRMode): boolean
}

class RROutput {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RROutput

    static name: string
}

interface RROutputInfoClass {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.RROutputInfoClass

    parent_class: GObject.ObjectClass
}

abstract class RROutputInfoClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RROutputInfoClass

    static name: string
}

interface RROutputInfoPrivate {
}

class RROutputInfoPrivate {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RROutputInfoPrivate

    static name: string
}

interface RRScreenClass {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.RRScreenClass

    parent_class: GObject.ObjectClass
    changed: () => void
    output_connected: (output: RROutput) => void
    output_disconnected: (output: RROutput) => void
}

abstract class RRScreenClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRScreenClass

    static name: string
}

interface RRScreenPrivate {
}

class RRScreenPrivate {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.RRScreenPrivate

    static name: string
}

interface WallClockClass {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.WallClockClass

    parent_class: GObject.ObjectClass
}

abstract class WallClockClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.WallClockClass

    static name: string
}

interface WallClockPrivate {
}

class WallClockPrivate {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.WallClockPrivate

    static name: string
}

interface XkbInfoClass {

    // Own fields of CinnamonDesktop-3.0.CinnamonDesktop.XkbInfoClass

    parent_class: GObject.ObjectClass
}

abstract class XkbInfoClass {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.XkbInfoClass

    static name: string
}

interface XkbInfoPrivate {
}

class XkbInfoPrivate {

    // Own properties of CinnamonDesktop-3.0.CinnamonDesktop.XkbInfoPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default CinnamonDesktop;
// END