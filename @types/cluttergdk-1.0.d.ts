
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cluttergdk-1.0-import.d.ts';
/**
 * ClutterGdk-1.0
 */

import type Gdk from './gdk-3.0.js';
import type cairo from './cairo-1.0.js';
import type Pango from './pango-1.0.js';
import type HarfBuzz from './harfbuzz-0.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type Gio from './gio-2.0.js';
import type GdkPixbuf from './gdkpixbuf-2.0.js';
import type GModule from './gmodule-2.0.js';
import type Clutter from './clutter-1.0.js';
import type Json from './json-1.0.js';
import type GL from './gl-1.0.js';
import type CoglPango from './coglpango-1.0.js';
import type PangoCairo from './pangocairo-1.0.js';
import type Cogl from './cogl-1.0.js';
import type Atk from './atk-1.0.js';

export namespace ClutterGdk {

/**
 * Disable the event retrieval in Clutter.
 * 
 * Callers of this function have to set up an event filter using the
 * GDK API, and call clutter_gdk_handle_event().
 * 
 * This function should only be used when embedding Clutter into
 * a GDK based toolkit.
 */
function disable_event_retrieval(): void
/**
 * Retrieves the pointer to the default display.
 * @returns the default display
 */
function get_default_display(): Gdk.Display
/**
 * Gets the stage for a particular X window.
 * @param window a #GtkWindow
 * @returns A #ClutterStage, or% NULL if a stage   does not exist for the window
 */
function get_stage_from_window(window: Gdk.Window): Clutter.Stage
/**
 * Gets the stages GdkWindow.
 * @param stage a #ClutterStage
 * @returns A GdkWindow* for the stage window.
 */
function get_stage_window(stage: Clutter.Stage): Gdk.Window
/**
 * Retrieves the #GdkVisual used by Clutter.
 * 
 * This function should be used when embedding Clutter inside GDK-based
 * foreign toolkits, to ensure that the visual applied to the #GdkWindow
 * used to render the #ClutterStage is the correct one.
 * @returns a #GdkVisual instance
 */
function get_visual(): Gdk.Visual
/**
 * This function processes a single GDK event; it can be used to hook
 * into external event processing
 * @param event a #GdkEvent
 * @returns #GdkFilterReturn. %GDK_FILTER_REMOVE indicates that  Clutter has internally handled the event and the caller should do  no further processing. %GDK_FILTER_CONTINUE indicates that Clutter  is either not interested in the event, or has used the event to  update internal state without taking any exclusive action.  %GDK_FILTER_TRANSLATE will not occur.
 */
function handle_event(event: Gdk.Event): Gdk.FilterReturn
/**
 * Sets the display connection Clutter should use; must be called
 * before clutter_init(), clutter_init_with_args() or other functions
 * pertaining Clutter's initialization process.
 * 
 * If you are parsing the command line arguments by retrieving Clutter's
 * #GOptionGroup with clutter_get_option_group() and calling
 * g_option_context_parse() yourself, you should also call
 * clutter_gdk_set_display() before g_option_context_parse().
 * @param display pointer to a GDK display connection.
 */
function set_display(display: Gdk.Display): void
/**
 * Target the #ClutterStage to use an existing external #GdkWindow
 * @param stage a #ClutterStage
 * @param window an existing #GdkWindow
 * @returns %TRUE if foreign window is valid
 */
function set_stage_foreign(stage: Clutter.Stage, window: Gdk.Window): boolean
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

export default ClutterGdk;
// END