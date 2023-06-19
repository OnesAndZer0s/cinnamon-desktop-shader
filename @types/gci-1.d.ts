
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gci-1-import.d.ts';
/**
 * GCi-1
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

export namespace GCi {

module EntryController {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCi-1.GCi.EntryController

        entry?: Gtk.Entry | null
    }

}

interface EntryController {

    // Own properties of GCi-1.GCi.EntryController

    entry: Gtk.Entry

    // Owm methods of GCi-1.GCi.EntryController

    get_entry(): Gtk.Entry
    set_entry(value: Gtk.Entry): void

    // Class property signals of GCi-1.GCi.EntryController

    connect(sigName: "notify::entry", callback: (($obj: EntryController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry", callback: (($obj: EntryController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryController extends GObject.Object {

    // Own properties of GCi-1.GCi.EntryController

    static name: string
    static $gtype: GObject.GType<EntryController>

    // Constructors of GCi-1.GCi.EntryController

    constructor(config?: EntryController.ConstructorProperties) 
    static for_entry(entry: Gtk.Entry): EntryController
    constructor() 
    static new(): EntryController
    _init(config?: EntryController.ConstructorProperties): void
}

interface EntryControllerClass {
}

abstract class EntryControllerClass {

    // Own properties of GCi-1.GCi.EntryControllerClass

    static name: string
}

interface EntryControllerPrivate {
}

class EntryControllerPrivate {

    // Own properties of GCi-1.GCi.EntryControllerPrivate

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

export default GCi;
// END