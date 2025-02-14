
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './handy-1-import.d.ts';
/**
 * Handy-1
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

export namespace Handy {

/**
 * Describes title centering behavior of a [class`HeaderBar]` widget.
 */
enum CenteringPolicy {
    /**
     * Keep the title centered when possible
     */
    LOOSE,
    /**
     * Keep the title centered at all cost
     */
    STRICT,
}
/**
 * Application color schemes for [property`StyleManager:`color-scheme].
 */
enum ColorScheme {
    /**
     * Inherit the parent color-scheme. When set on the
     *   [class`StyleManager]` returned by [func`StyleManager`.get_default], it's
     *   equivalent to `HDY_COLOR_SCHEME_FORCE_LIGHT`.
     */
    DEFAULT,
    /**
     * Always use light appearance.
     */
    FORCE_LIGHT,
    /**
     * Use light appearance unless the system
     *   prefers dark colors.
     */
    PREFER_LIGHT,
    /**
     * Use dark appearance unless the system prefers
     *   light colors.
     */
    PREFER_DARK,
    /**
     * Always use dark appearance.
     */
    FORCE_DARK,
}
/**
 * Describes the possible transitions in a [class`Deck]` widget.
 * 
 * New values may be added to this enumeration over time.
 */
enum DeckTransitionType {
    /**
     * Cover the old page or uncover the new page,
     *   sliding from or towards the end according to orientation, text direction
     *   and children order
     */
    OVER,
    /**
     * Uncover the new page or cover the old page,
     *   sliding from or towards the start according to orientation, text direction
     *   and children order
     */
    UNDER,
    /**
     * Slide from left, right, up or down according
     *   to the orientation, text direction and the children order
     */
    SLIDE,
}
/**
 * Describes the possible folding behavior of a [class`Flap]` widget.
 */
enum FlapFoldPolicy {
    /**
     * Disable folding, the flap cannot reach narrow
     *   sizes.
     */
    NEVER,
    /**
     * Keep the flap always folded.
     */
    ALWAYS,
    /**
     * Fold and unfold the flap based on available
     *   space.
     */
    AUTO,
}
/**
 * Describes transitions types of a [class`Flap]` widget.
 * 
 * These enumeration values describe the possible transitions between children
 * in a [class`Flap]` widget, as well as which areas can be swiped via
 * [property`Flap:`swipe-to-open] and [property`Flap:`swipe-to-close].
 * 
 * New values may be added to this enum over time.
 */
enum FlapTransitionType {
    /**
     * The flap slides over the content, which is
     *   dimmed. When folded, only the flap can be swiped.
     */
    OVER,
    /**
     * The content slides over the flap. Only the
     *   content can be swiped.
     */
    UNDER,
    /**
     * The flap slides offscreen when hidden,
     *   neither the flap nor content overlap each other. Both widgets can be
     *   swiped.
     */
    SLIDE,
}
/**
 * Describes the child types handled by [class`HeaderGroup]`.
 * 
 * New values may be added to this enumeration over time.
 */
enum HeaderGroupChildType {
    /**
     * The child is a [class`HeaderBar]`
     */
    HEADER_BAR,
    /**
     * The child is a
     *   [class`Gtk`.HeaderBar]
     */
    GTK_HEADER_BAR,
    /**
     * The child is a
     *   [class`HeaderGroup]`
     */
    HEADER_GROUP,
}
/**
 * Describes the possible transitions in a [class`Leaflet]` widget.
 * 
 * New values may be added to this enumeration over time.
 */
enum LeafletTransitionType {
    /**
     * Cover the old page or uncover the new
     *   page, sliding from or towards the end according to orientation, text
     *   direction and children order
     */
    OVER,
    /**
     * Uncover the new page or cover the old
     *   page, sliding from or towards the start according to orientation, text
     *   direction and children order
     */
    UNDER,
    /**
     * Slide from left, right, up or down
     *   according to the orientation, text direction and the children order
     */
    SLIDE,
}
/**
 * Describes the direction of a swipe navigation gesture.
 */
enum NavigationDirection {
    /**
     * Corresponds to start or top, depending on
     *   orientation and text direction
     */
    BACK,
    /**
     * Corresponds to end or bottom, depending on
     *   orientation and text direction
     */
    FORWARD,
}
/**
 * Describes the possible transitions in a [class`Squeezer]` widget.
 */
enum SqueezerTransitionType {
    /**
     * No transition
     */
    NONE,
    /**
     * A cross-fade
     */
    CROSSFADE,
}
/**
 * Describes the adaptive modes of [class`ViewSwitcher]`.
 */
enum ViewSwitcherPolicy {
    /**
     * Automatically adapt to the best fitting mode
     */
    AUTO,
    /**
     * Force the narrow mode
     */
    NARROW,
    /**
     * Force the wide mode
     */
    WIDE,
}
/**
 * Computes the ease out for a value.
 * @param t the term
 * @returns the ease out for @t
 */
function ease_out_cubic(t: number): number
/**
 * Returns the name of a [class`EnumValueObject]`.
 * 
 * This is a default implementation of [callback`ComboRowGetEnumValueNameFunc]`
 * to be used with [method`ComboRow`.set_for_enum]. If the enumeration has a
 * nickname, it will return it, otherwise it will return its name.
 * @param value the value from the enum from which to get a name
 * @param user_data unused user data
 * @returns a displayable name that represents @value
 */
function enum_value_row_name(value: EnumValueObject, user_data: any | null): string | null
/**
 * Checks whether animations are enabled for `widget`.
 * 
 * This should be used when implementing an animated widget to know whether to
 * animate it or not.
 * @param widget a widget
 * @returns whether animations are enabled for @widget
 */
function get_enable_animations(widget: Gtk.Widget): boolean
/**
 * Initializes Libhandy.
 * 
 * Call this function just after initializing GTK, if you are using
 * [class`Gtk`.Application] it means it must be called when the
 * [signal`Gio`.Application::startup] signal is emitted.
 * 
 * If Libhandy has already been initialized, the function will simply return.
 * 
 * This makes sure translations, types, themes, and icons for the Handy library
 * are set up properly.
 */
function init(): void
/**
 * Callback for loading an [class`Avatar]`'s image.
 * 
 * The returned [class`GdkPixbuf`.Pixbuf] is expected to be square with width and
 * height set to `size`. The image is cropped to a circle without any scaling or
 * transformation.
 * @callback 
 * @param size the required size of the avatar
 * @returns the pixbuf to use as a custom avatar or   `NULL` to fallback to the generated avatar
 */
interface AvatarImageLoadFunc {
    (size: number): GdkPixbuf.Pixbuf | null
}
/**
 * Callback for getting the name of a row from an enum.
 * 
 * Called for combo rows that are bound to an enumeration with
 * [method`ComboRow`.set_for_enum] for each value from that enumeration.
 * 
 * See also: [func`enum_value_row_name]`.
 * @callback 
 * @param value the value from the enum from which to get a name
 * @returns a displayable name that represents @value
 */
interface ComboRowGetEnumValueNameFunc {
    (value: EnumValueObject): string | null
}
/**
 * Callback for getting the name of a row.
 * 
 * Called for combo rows that are bound to a [iface`Gio`.ListModel] with
 * [method`ComboRow`.bind_name_model] for each item that gets added to the model.
 * @callback 
 * @param item the item from the model from which to get a name
 * @returns a displayable name that represents @item
 */
interface ComboRowGetNameFunc {
    (item: GObject.Object): string | null
}
module Swipeable {

    // Signal callback interfaces

    /**
     * Signal callback interface for `child-switched`
     */
    interface ChildSwitchedSignalCallback {
        ($obj: Swipeable, index: number, duration: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Widget.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Swipeable extends Gtk.Widget {

    // Owm methods of Handy-1.Handy.Swipeable

    /**
     * Emits [signal`Swipeable:`:child-switched] signal.
     * 
     * This should be called when the widget switches visible child widget.
     * 
     * `duration` can be 0 if the child is switched without animation.
     * @param index the index of the child to switch to
     * @param duration animation duration, in milliseconds
     */
    emit_child_switched(index: number, duration: number): void
    /**
     * Gets the progress `self` will snap back to after the gesture is canceled.
     * @returns the cancel progress, unitless
     */
    get_cancel_progress(): number
    /**
     * Gets the swipe distance of `self`.
     * 
     * This corresponds to how many pixels 1 unit represents.
     * @returns the swipe distance in pixels
     */
    get_distance(): number
    /**
     * Gets the current progress of `self`.
     * @returns the current progress, unitless
     */
    get_progress(): number
    /**
     * Gets the snap points of `self`.
     * 
     * Each snap point represents a progress value that is considered acceptable to
     * end the swipe on.
     * @returns the snap points
     */
    get_snap_points(): number[]
    /**
     * Gets the area `self` can start a swipe from for the given direction and
     * gesture type.
     * 
     * This can be used to restrict swipes to only be possible from a certain area,
     * for example, to only allow edge swipes, or to have a draggable element and
     * ignore swipes elsewhere.
     * 
     * Swipe area is only considered for direct swipes (as in, not initiated by
     * [class`SwipeGroup]`).
     * 
     * If not implemented, the default implementation returns the allocation of
     * `self,` allowing swipes from anywhere.
     * @param navigation_direction the direction of the swipe
     * @param is_drag whether the swipe is caused by a dragging gesture
     */
    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): /* rect */ Gdk.Rectangle
    /**
     * Gets the [class`SwipeTracker]` used by this swipeable widget.
     * @returns the swipe tracker
     */
    get_swipe_tracker(): SwipeTracker
    /**
     * Switches to child with index `index`.
     * 
     * See [signal`Swipeable:`:child-switched].
     * @param index the index of the child to switch to
     * @param duration animation duration, in milliseconds
     */
    switch_child(index: number, duration: number): void

    // Own virtual methods of Handy-1.Handy.Swipeable

    /**
     * Gets the progress `self` will snap back to after the gesture is canceled.
     * @virtual 
     * @returns the cancel progress, unitless
     */
    vfunc_get_cancel_progress(): number
    /**
     * Gets the swipe distance of `self`.
     * 
     * This corresponds to how many pixels 1 unit represents.
     * @virtual 
     * @returns the swipe distance in pixels
     */
    vfunc_get_distance(): number
    /**
     * Gets the current progress of `self`.
     * @virtual 
     * @returns the current progress, unitless
     */
    vfunc_get_progress(): number
    /**
     * Gets the snap points of `self`.
     * 
     * Each snap point represents a progress value that is considered acceptable to
     * end the swipe on.
     * @virtual 
     * @returns the snap points
     */
    vfunc_get_snap_points(): number[]
    /**
     * Gets the area `self` can start a swipe from for the given direction and
     * gesture type.
     * 
     * This can be used to restrict swipes to only be possible from a certain area,
     * for example, to only allow edge swipes, or to have a draggable element and
     * ignore swipes elsewhere.
     * 
     * Swipe area is only considered for direct swipes (as in, not initiated by
     * [class`SwipeGroup]`).
     * 
     * If not implemented, the default implementation returns the allocation of
     * `self,` allowing swipes from anywhere.
     * @virtual 
     * @param navigation_direction the direction of the swipe
     * @param is_drag whether the swipe is caused by a dragging gesture
     */
    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): /* rect */ Gdk.Rectangle
    /**
     * Gets the [class`SwipeTracker]` used by this swipeable widget.
     * @virtual 
     * @returns the swipe tracker
     */
    vfunc_get_swipe_tracker(): SwipeTracker
    /**
     * Switches to child with index `index`.
     * 
     * See [signal`Swipeable:`:child-switched].
     * @virtual 
     * @param index the index of the child to switch to
     * @param duration animation duration, in milliseconds
     */
    vfunc_switch_child(index: number, duration: number): void

    // Own signals of Handy-1.Handy.Swipeable

    connect(sigName: "child-switched", callback: Swipeable.ChildSwitchedSignalCallback): number
    connect_after(sigName: "child-switched", callback: Swipeable.ChildSwitchedSignalCallback): number
    emit(sigName: "child-switched", index: number, duration: number, ...args: any[]): void

    // Class property signals of Handy-1.Handy.Swipeable

    connect(sigName: "notify::app-paintable", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An interface for swipeable widgets.
 * 
 * The `HdySwipeable` interface is implemented by all swipeable widgets. They
 * can be synced using [class`SwipeGroup]`.
 * 
 * See [class`SwipeTracker]` for details about implementing it.
 * @interface 
 */
class Swipeable extends GObject.Object {

    // Own properties of Handy-1.Handy.Swipeable

    static name: string
    static $gtype: GObject.GType<Swipeable>

    // Constructors of Handy-1.Handy.Swipeable

    constructor(config?: Swipeable.ConstructorProperties) 
    _init(config?: Swipeable.ConstructorProperties): void
}

module ActionRow {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    interface ActivatedSignalCallback {
        ($obj: ActionRow): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, PreferencesRow.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ActionRow

        /**
         * The activatable widget for this row.
         * 
         * The widget is activated, either by clicking on it, by calling
         * [method`ActionRow`.activate], or via mnemonics in the title or the subtitle.
         * See the [property`ActionRow:`use-underline] property to enable mnemonics.
         * 
         * The target widget will be activated by emitting the
         * [signal`Gtk`.Widget::mnemonic-activate] signal on it.
         */
        activatable_widget?: Gtk.Widget | null
        /**
         * The icon name for this row.
         */
        icon_name?: string | null
        /**
         * The subtitle for this row.
         */
        subtitle?: string | null
        /**
         * The number of lines at the end of which the subtitle label will be
         * ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         */
        subtitle_lines?: number | null
        /**
         * The number of lines at the end of which the title label will be ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         */
        title_lines?: number | null
        /**
         * Whether embedded underlines in the title or subtitle indicates a mnemonic.
         * 
         * If true, an underline in the text of the title or subtitle labels indicates
         * the next character should be used for the mnemonic accelerator key.
         */
        use_underline?: boolean | null
    }

}

interface ActionRow extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ActionRow

    /**
     * The activatable widget for this row.
     * 
     * The widget is activated, either by clicking on it, by calling
     * [method`ActionRow`.activate], or via mnemonics in the title or the subtitle.
     * See the [property`ActionRow:`use-underline] property to enable mnemonics.
     * 
     * The target widget will be activated by emitting the
     * [signal`Gtk`.Widget::mnemonic-activate] signal on it.
     */
    activatable_widget: Gtk.Widget
    /**
     * The icon name for this row.
     */
    icon_name: string | null
    /**
     * The subtitle for this row.
     */
    subtitle: string | null
    /**
     * The number of lines at the end of which the subtitle label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    subtitle_lines: number
    /**
     * The number of lines at the end of which the title label will be ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    title_lines: number
    /**
     * Whether embedded underlines in the title or subtitle indicates a mnemonic.
     * 
     * If true, an underline in the text of the title or subtitle labels indicates
     * the next character should be used for the mnemonic accelerator key.
     */
    use_underline: boolean

    // Own fields of Handy-1.Handy.ActionRow

    parent_instance: PreferencesRow & Gtk.ListBoxRow & Gtk.Bin & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.ActionRow

    /**
     * Activates `self`.
     */
    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     * @returns %TRUE if the widget was activatable
     */
    activate(): boolean
    /**
     * Adds a prefix widget to `self`.
     * @param widget the prefix widget
     */
    add_prefix(widget: Gtk.Widget): void
    /**
     * Gets the widget activated when `self` is activated.
     * @returns the activatable widget for @self
     */
    get_activatable_widget(): Gtk.Widget | null
    /**
     * Gets the icon name for `self`.
     * @returns the icon name for @self
     */
    get_icon_name(): string | null
    /**
     * Gets the subtitle for `self`.
     * @returns the subtitle for @self
     */
    get_subtitle(): string | null
    /**
     * Gets the number of lines at the end of which the subtitle label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     * @returns the number of lines at the end of which the subtitle label will be   ellipsized
     */
    get_subtitle_lines(): number
    /**
     * Gets the number of lines at the end of which the title label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     * @returns the number of lines at the end of which the title label will be   ellipsized
     */
    get_title_lines(): number
    /**
     * Gets whether an embedded underline in the title or subtitle indicates a
     * mnemonic.
     * @returns whether an embedded underline in the title or subtitle indicates a   mnemonic
     */
    get_use_underline(): boolean
    /**
     * Sets the widget to activate when `self` is activated.
     * @param widget the target widget
     */
    set_activatable_widget(widget: Gtk.Widget | null): void
    /**
     * Sets the icon name for `self`.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the subtitle for `self`.
     * @param subtitle the subtitle
     */
    set_subtitle(subtitle: string | null): void
    /**
     * Sets the number of lines at the end of which the subtitle label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     * @param subtitle_lines the number of lines at the end of which the subtitle label will be ellipsized
     */
    set_subtitle_lines(subtitle_lines: number): void
    /**
     * Sets the number of lines at the end of which the title label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     * @param title_lines the number of lines at the end of which the title label will be ellipsized
     */
    set_title_lines(title_lines: number): void
    /**
     * Sets whether an embedded underline in the title or subtitle indicates a
     * mnemonic.
     * @param use_underline `TRUE` if underlines in the text indicate mnemonics
     */
    set_use_underline(use_underline: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own virtual methods of Handy-1.Handy.ActionRow

    /**
     * Activates `self`.
     * @virtual 
     */
    vfunc_activate(): void

    // Own signals of Handy-1.Handy.ActionRow

    connect(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    emit(sigName: "activated", ...args: any[]): void

    // Class property signals of Handy-1.Handy.ActionRow

    connect(sigName: "notify::activatable-widget", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable-widget", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable-widget", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::subtitle-lines", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-lines", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-lines", ...args: any[]): void
    connect(sigName: "notify::title-lines", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-lines", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-lines", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to present actions.
 * 
 * The `HdyActionRow` widget can have a title, a subtitle and an icon. The row
 * can receive additional widgets at its end, or prefix widgets at its start.
 * 
 * It is convenient to present a preference and its related actions.
 * 
 * `HdyActionRow` is unactivatable by default, giving it an activatable widget
 * will automatically make it activatable, but unsetting it won't change the
 * row's activatability.
 * 
 * ## HdyActionRow as GtkBuildable
 * 
 * The `HdyActionRow` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding a child at its end by specifying “suffix” or omitting the
 * “type” attribute of a <child> element.
 * 
 * It also supports adding a child as a prefix widget by specifying “prefix” as
 * the “type” attribute of a <child> element.
 * 
 * ## CSS nodes
 * 
 * `HdyActionRow` has a main CSS node with name `row`.
 * 
 * It contains the subnode `box.header` for its main horizontal box, and
 * `box.title` for the vertical box containing the title and subtitle labels.
 * 
 * It contains subnodes `label.title` and `label.subtitle` representing
 * respectively the title label and subtitle label.
 * @class 
 */
class ActionRow extends PreferencesRow {

    // Own properties of Handy-1.Handy.ActionRow

    static name: string
    static $gtype: GObject.GType<ActionRow>

    // Constructors of Handy-1.Handy.ActionRow

    constructor(config?: ActionRow.ConstructorProperties) 
    /**
     * Creates a new `HdyActionRow`.
     * @constructor 
     * @returns the newly created `HdyActionRow`
     */
    constructor() 
    /**
     * Creates a new `HdyActionRow`.
     * @constructor 
     * @returns the newly created `HdyActionRow`
     */
    static new(): ActionRow
    _init(config?: ActionRow.ConstructorProperties): void
}

module ApplicationWindow {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ApplicationWindow.ConstructorProperties {
    }

}

interface ApplicationWindow extends Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {

    // Own fields of Handy-1.Handy.ApplicationWindow

    parent_instance: Gtk.ApplicationWindow & Gtk.Window & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.ApplicationWindow

    connect(sigName: "notify::show-menubar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-menubar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-menubar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A freeform application window.
 * 
 * `HdyApplicationWindow` is a [class`Gtk`.ApplicationWindow] subclass providing
 * the same features as [class`Window]`.
 * 
 * See [class`Window]` for details.
 * 
 * Using [method`Gtk`.Application.set_app_menu] and
 * [method`Gtk`.Application.set_menubar] is not supported and may result in
 * visual glitches.
 * @class 
 */
class ApplicationWindow extends Gtk.ApplicationWindow {

    // Own properties of Handy-1.Handy.ApplicationWindow

    static name: string
    static $gtype: GObject.GType<ApplicationWindow>

    // Constructors of Handy-1.Handy.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    /**
     * Creates a new `HdyApplicationWindow`.
     * @constructor 
     * @returns the newly created `HdyApplicationWindow`
     */
    constructor() 
    /**
     * Creates a new `HdyApplicationWindow`.
     * @constructor 
     * @returns the newly created `HdyApplicationWindow`
     */
    static new(): ApplicationWindow

    // Overloads of new

    /**
     * Creates a new #GtkApplicationWindow.
     * @constructor 
     * @param application a #GtkApplication
     * @returns a newly created #GtkApplicationWindow
     */
    static new(application: Gtk.Application): Gtk.ApplicationWindow
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: ApplicationWindow.ConstructorProperties): void
}

module Avatar {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Avatar

        /**
         * The name of an icon to use as a fallback.
         * 
         * If no name is set, the avatar-default-symbolic icon will be used. If the
         * name doesn't match a valid icon, it is an error and no icon will be
         * displayed. If the icon theme is changed, the image will be updated
         * automatically.
         */
        icon_name?: string | null
        /**
         * A [iface`Gio`.LoadableIcon] used to load the avatar.
         */
        loadable_icon?: Gio.LoadableIcon | null
        /**
         * Whether to show the initials or the fallback icon on the generated avatar.
         */
        show_initials?: boolean | null
        /**
         * The avatar size of the avatar.
         */
        size?: number | null
        /**
         * Sets the text used to generate the fallback initials and color.
         * 
         * It's only used to generate the color if [property`Avatar:`show-initials] is
         * `FALSE`.
         */
        text?: string | null
    }

}

interface Avatar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.Avatar

    /**
     * The name of an icon to use as a fallback.
     * 
     * If no name is set, the avatar-default-symbolic icon will be used. If the
     * name doesn't match a valid icon, it is an error and no icon will be
     * displayed. If the icon theme is changed, the image will be updated
     * automatically.
     */
    icon_name: string | null
    /**
     * A [iface`Gio`.LoadableIcon] used to load the avatar.
     */
    loadable_icon: Gio.LoadableIcon
    /**
     * Whether to show the initials or the fallback icon on the generated avatar.
     */
    show_initials: boolean
    /**
     * The avatar size of the avatar.
     */
    size: number
    /**
     * Sets the text used to generate the fallback initials and color.
     * 
     * It's only used to generate the color if [property`Avatar:`show-initials] is
     * `FALSE`.
     */
    text: string | null

    // Owm methods of Handy-1.Handy.Avatar

    /**
     * Renders `self` into a [class`GdkPixbuf`.Pixbuf] at `size` and `scale_factor`.
     * 
     * This can be used to export the fallback avatar.
     * @param size the size of the pixbuf
     * @param scale_factor the scale factor
     * @returns the pixbuf
     */
    draw_to_pixbuf(size: number, scale_factor: number): GdkPixbuf.Pixbuf
    /**
     * Renders asynchronously `self` into a pixbuf at `size` and `scale_factor`.
     * 
     * This can be used to export the fallback avatar.
     * @param size the size of the pixbuf
     * @param scale_factor the scale factor
     * @param cancellable a cancellable
     * @param callback a [callback`Gio`.AsyncReadyCallback] to call when   the avatar is generated
     */
    draw_to_pixbuf_async(size: number, scale_factor: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of draw_to_pixbuf_async

    /**
     * Promisified version of {@link draw_to_pixbuf_async}
     * 
     * Renders asynchronously `self` into a pixbuf at `size` and `scale_factor`.
     * 
     * This can be used to export the fallback avatar.
     * @param size the size of the pixbuf
     * @param scale_factor the scale factor
     * @param cancellable a cancellable
     * @returns A Promise of: the resulting pixbuf
     */
    draw_to_pixbuf_async(size: number, scale_factor: number, cancellable: Gio.Cancellable | null): globalThis.Promise<GdkPixbuf.Pixbuf>
    /**
     * Finishes an asynchronous draw of an avatar to a pixbuf.
     * @param async_result a [iface`Gio`.AsyncResult]
     * @returns the resulting pixbuf
     */
    draw_to_pixbuf_finish(async_result: Gio.AsyncResult): GdkPixbuf.Pixbuf
    /**
     * Gets the name of an icon to use as a fallback.
     * @returns the icon name
     */
    get_icon_name(): string | null
    /**
     * Gets the [iface`Gio`.LoadableIcon] set via [method`Avatar`.set_loadable_icon].
     * @returns the [iface@Gio.LoadableIcon]
     */
    get_loadable_icon(): Gio.LoadableIcon | null
    /**
     * Gets whether initials are used instead of an icon on the fallback avatar.
     * @returns whether initials are used instead of an icon as fallback
     */
    get_show_initials(): boolean
    /**
     * Gets the size of the avatar.
     * @returns the size of the avatar
     */
    get_size(): number
    /**
     * Gets the text used to generate the fallback initials and color.
     * @returns the text used to generate the fallback initials and   color
     */
    get_text(): string | null
    /**
     * Sets the name of an icon to use as a fallback.
     * 
     * If no name is set, `avatar-default-symbolic` will be used.
     * @param icon_name the name of the icon from the icon theme
     */
    set_icon_name(icon_name: string | null): void
    /**
     * A callback which is called when the custom image needs to be reloaded.
     * 
     * It will be called on [property`Avatar:`size] or
     * [property`Gtk`.Widget:scale-factor] changes.
     * @param load_image callback to set a custom image
     */
    set_image_load_func(load_image: AvatarImageLoadFunc | null): void
    /**
     * Sets the [iface`Gio`.LoadableIcon] to use as an avatar.
     * 
     * The previous avatar is displayed till the new avatar is loaded, to
     * immediately remove the custom avatar set the loadable-icon to `NULL`.
     * 
     * The [iface`Gio`.LoadableIcon] set via this function is preferred over a set
     * [callback`AvatarImageLoadFunc]`.
     * @param icon a [iface`Gio`.LoadableIcon]
     */
    set_loadable_icon(icon: Gio.LoadableIcon | null): void
    /**
     * Sets whether to use initials instead of an icon on the fallback avatar.
     * @param show_initials whether to use initials instead of an icon as fallback
     */
    set_show_initials(show_initials: boolean): void
    /**
     * Sets the size of the avatar.
     * @param size the size to be used for the avatar
     */
    set_size(size: number): void
    /**
     * Set the text used to generate the fallback initials color.
     * @param text the text used to get the initials and color
     */
    set_text(text: string | null): void

    // Class property signals of Handy-1.Handy.Avatar

    connect(sigName: "notify::icon-name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::loadable-icon", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loadable-icon", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loadable-icon", ...args: any[]): void
    connect(sigName: "notify::show-initials", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-initials", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-initials", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget displaying an image, with a generated fallback.
 * 
 * `HdyAvatar` is a widget to display a round avatar.
 * 
 * A provided image is made round before displaying, if no image is given this
 * widget generates a round fallback with the initials of the
 * [property`Avatar:`text] on top of a colored background.
 * 
 * The color is picked based on the hash of the [property`Avatar:`text].
 * 
 * If [property`Avatar:`show-initials] is set to `FALSE`,
 * `avatar-default-symbolic` is shown instead of the initials.
 * 
 * Use [method`Avatar`.set_loadable_icon] or [property`Avatar:`loadable-icon] to
 * set a custom image.
 * 
 * ## CSS nodes
 * 
 * `HdyAvatar` has a single CSS node with name `avatar`.
 * @class 
 */
class Avatar extends Gtk.DrawingArea {

    // Own properties of Handy-1.Handy.Avatar

    static name: string
    static $gtype: GObject.GType<Avatar>

    // Constructors of Handy-1.Handy.Avatar

    constructor(config?: Avatar.ConstructorProperties) 
    /**
     * Creates a new `HdyAvatar`.
     * @constructor 
     * @param size the size of the avatar
     * @param text the text used to get the initials and color
     * @param show_initials whether to use initials instead of an icon as fallback
     * @returns the newly created `HdyAvatar`
     */
    constructor(size: number, text: string | null, show_initials: boolean) 
    /**
     * Creates a new `HdyAvatar`.
     * @constructor 
     * @param size the size of the avatar
     * @param text the text used to get the initials and color
     * @param show_initials whether to use initials instead of an icon as fallback
     * @returns the newly created `HdyAvatar`
     */
    static new(size: number, text: string | null, show_initials: boolean): Avatar

    // Overloads of new

    /**
     * Creates a new drawing area.
     * @constructor 
     * @returns a new #GtkDrawingArea
     */
    static new(): Gtk.DrawingArea
    _init(config?: Avatar.ConstructorProperties): void
}

module Carousel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `page-changed`
     */
    interface PageChangedSignalCallback {
        ($obj: Carousel, index: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Swipeable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Carousel

        /**
         * Whether to allow swiping for more than one page at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent pages.
         */
        allow_long_swipes?: boolean | null
        /**
         * Sets whether the [class`Carousel]` can be dragged with mouse pointer.
         * 
         * If the value is `FALSE`, dragging is only available on touch.
         */
        allow_mouse_drag?: boolean | null
        /**
         * Whether the widget will respond to scroll wheel events.
         * 
         * If the value is `FALSE`, wheel events will be ignored.
         */
        allow_scroll_wheel?: boolean | null
        /**
         * Animation duration used by [method`Carousel`.scroll_to], in milliseconds.
         */
        animation_duration?: number | null
        /**
         * Whether the carousel can be navigated.
         * 
         * This can be used to temporarily disable a `HdyCarousel` to only allow
         * navigating it in a certain state.
         */
        interactive?: boolean | null
        /**
         * Page reveal duration, in milliseconds.
         */
        reveal_duration?: number | null
        /**
         * Spacing between pages in pixels.
         */
        spacing?: number | null
    }

}

interface Carousel extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {

    // Own properties of Handy-1.Handy.Carousel

    /**
     * Whether to allow swiping for more than one page at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent pages.
     */
    allow_long_swipes: boolean
    /**
     * Sets whether the [class`Carousel]` can be dragged with mouse pointer.
     * 
     * If the value is `FALSE`, dragging is only available on touch.
     */
    allow_mouse_drag: boolean
    /**
     * Whether the widget will respond to scroll wheel events.
     * 
     * If the value is `FALSE`, wheel events will be ignored.
     */
    allow_scroll_wheel: boolean
    /**
     * Animation duration used by [method`Carousel`.scroll_to], in milliseconds.
     */
    animation_duration: number
    /**
     * Whether the carousel can be navigated.
     * 
     * This can be used to temporarily disable a `HdyCarousel` to only allow
     * navigating it in a certain state.
     */
    interactive: boolean
    /**
     * The number of pages in a [class`Carousel]`.
     */
    readonly n_pages: number
    /**
     * Current scrolling position, unitless.
     * 
     * 1 matches 1 page. Use [method`Carousel`.scroll_to] for changing it.
     */
    readonly position: number
    /**
     * Page reveal duration, in milliseconds.
     */
    reveal_duration: number
    /**
     * Spacing between pages in pixels.
     */
    spacing: number

    // Owm methods of Handy-1.Handy.Carousel

    /**
     * Gets whether to allow swiping for more than one page at a time.
     * @returns `TRUE` if long swipes are allowed
     */
    get_allow_long_swipes(): boolean
    /**
     * Sets whether `self` can be dragged with mouse pointer.
     * @returns `TRUE` if @self can be dragged with mouse
     */
    get_allow_mouse_drag(): boolean
    /**
     * Gets whether `self` will respond to scroll wheel events.
     * @returns `TRUE` if @self will respond to scroll wheel events
     */
    get_allow_scroll_wheel(): boolean
    /**
     * Gets animation duration used by [method`Carousel`.scroll_to].
     * @returns animation duration, in milliseconds
     */
    get_animation_duration(): number
    /**
     * Gets whether `self` can be navigated.
     * @returns `TRUE` if @self can be swiped
     */
    get_interactive(): boolean
    /**
     * Gets the number of pages in `self`.
     * @returns the number of pages in @self
     */
    get_n_pages(): number
    /**
     * Gets current scroll position in `self`. It's unitless, 1 matches 1 page.
     * @returns the scroll position
     */
    get_position(): number
    /**
     * Gets duration of the animation used when adding or removing pages, in
     * milliseconds.
     * @returns the duration
     */
    get_reveal_duration(): number
    /**
     * Gets spacing between pages in pixels.
     * @returns spacing between pages
     */
    get_spacing(): number
    /**
     * Inserts `child` into `self` at position `position`.
     * 
     * If position is -1, or larger than the number of pages, `child` will be
     * appended to the end.
     * @param child a widget to add
     * @param position the position to insert `child` in
     */
    insert(child: Gtk.Widget, position: number): void
    /**
     * Prepends `child` to `self`.
     * @param child a widget to add
     */
    prepend(child: Gtk.Widget): void
    /**
     * Moves `child` into position `position`.
     * 
     * If position is -1, or larger than the number of pages, `child` will be moved
     * to the end.
     * @param child a widget to add
     * @param position the position to move `child` to
     */
    reorder(child: Gtk.Widget, position: number): void
    /**
     * Scrolls to `widget` position with an animation.
     * 
     * [property`Carousel:`animation-duration] property can be used for controlling
     * the duration.
     * @param widget a child of `self`
     */
    scroll_to(widget: Gtk.Widget): void
    /**
     * Scrolls to `widget` position with an animation.
     * @param widget a child of `self`
     * @param duration animation duration, in milliseconds
     */
    scroll_to_full(widget: Gtk.Widget, duration: number): void
    /**
     * Sets whether to allow swiping for more than one page at a time.
     * @param allow_long_swipes whether to allow long swipes
     */
    set_allow_long_swipes(allow_long_swipes: boolean): void
    /**
     * Sets whether `self` can be dragged with mouse pointer.
     * 
     * If `allow_mouse_drag` is `FALSE`, dragging is only available on touch.
     * @param allow_mouse_drag whether `self` can be dragged with mouse pointer
     */
    set_allow_mouse_drag(allow_mouse_drag: boolean): void
    /**
     * Sets whether `self` will respond to scroll wheel events.
     * @param allow_scroll_wheel whether `self` will respond to scroll wheel events
     */
    set_allow_scroll_wheel(allow_scroll_wheel: boolean): void
    /**
     * Sets animation duration used by [method`Carousel`.scroll_to].
     * @param duration animation duration, in milliseconds
     */
    set_animation_duration(duration: number): void
    /**
     * Sets whether `self` can be navigated.
     * 
     * This can be used to temporarily disable a [class`Carousel]` to only allow
     * swiping in a certain state.
     * @param interactive whether `self` can be swiped
     */
    set_interactive(interactive: boolean): void
    /**
     * Sets duration of the animation used when adding or removing pages, in
     * milliseconds.
     * @param reveal_duration the new reveal duration value
     */
    set_reveal_duration(reveal_duration: number): void
    /**
     * Sets spacing between pages in pixels.
     * @param spacing the new spacing value
     */
    set_spacing(spacing: number): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own signals of Handy-1.Handy.Carousel

    connect(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    connect_after(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    emit(sigName: "page-changed", index: number, ...args: any[]): void

    // Class property signals of Handy-1.Handy.Carousel

    connect(sigName: "notify::allow-long-swipes", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-long-swipes", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-long-swipes", ...args: any[]): void
    connect(sigName: "notify::allow-mouse-drag", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-mouse-drag", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-mouse-drag", ...args: any[]): void
    connect(sigName: "notify::allow-scroll-wheel", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-scroll-wheel", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-scroll-wheel", ...args: any[]): void
    connect(sigName: "notify::animation-duration", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::animation-duration", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::animation-duration", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::n-pages", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pages", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-pages", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reveal-duration", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-duration", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-duration", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A paginated scrolling widget.
 * 
 * The `HdyCarousel` widget can be used to display a set of pages with
 * swipe-based navigation between them.
 * 
 * [class`CarouselIndicatorDots]` and [class`CarouselIndicatorLines]` can be used
 * to provide page indicators for `HdyCarousel`.
 * 
 * ## CSS nodes
 * 
 * `HdyCarousel` has a single CSS node with name `carousel`.
 * @class 
 */
class Carousel extends Gtk.EventBox {

    // Own properties of Handy-1.Handy.Carousel

    static name: string
    static $gtype: GObject.GType<Carousel>

    // Constructors of Handy-1.Handy.Carousel

    constructor(config?: Carousel.ConstructorProperties) 
    /**
     * Creates a new `HdyCarousel`.
     * @constructor 
     * @returns the newly created `HdyCarousel`
     */
    constructor() 
    /**
     * Creates a new `HdyCarousel`.
     * @constructor 
     * @returns the newly created `HdyCarousel`
     */
    static new(): Carousel
    _init(config?: Carousel.ConstructorProperties): void
}

module CarouselIndicatorDots {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.CarouselIndicatorDots

        /**
         * The [class`Carousel]` the indicator uses.
         */
        carousel?: Carousel | null
    }

}

interface CarouselIndicatorDots extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Handy-1.Handy.CarouselIndicatorDots

    /**
     * The [class`Carousel]` the indicator uses.
     */
    carousel: Carousel

    // Owm methods of Handy-1.Handy.CarouselIndicatorDots

    /**
     * Get the [class`Carousel]` the indicator uses.
     * @returns the [class@Carousel]
     */
    get_carousel(): Carousel | null
    /**
     * Sets the [class`Carousel]` to use.
     * @param carousel a carousel
     */
    set_carousel(carousel: Carousel | null): void

    // Class property signals of Handy-1.Handy.CarouselIndicatorDots

    connect(sigName: "notify::carousel", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carousel", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::carousel", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A dots indicator for [class`Carousel]`.
 * 
 * The `HdyCarouselIndicatorDots` widget shows a set of dots for each page of a
 * given [class`Carousel]`. The dot representing the carousel's active page is
 * larger and more opaque than the others, the transition to the active and
 * inactive state is gradual to match the carousel's position.
 * 
 * See also [class`CarouselIndicatorLines]`.
 * 
 * ## CSS nodes
 * 
 * `HdyCarouselIndicatorDots` has a single CSS node with name
 * `carouselindicatordots`.
 * @class 
 */
class CarouselIndicatorDots extends Gtk.DrawingArea {

    // Own properties of Handy-1.Handy.CarouselIndicatorDots

    static name: string
    static $gtype: GObject.GType<CarouselIndicatorDots>

    // Constructors of Handy-1.Handy.CarouselIndicatorDots

    constructor(config?: CarouselIndicatorDots.ConstructorProperties) 
    /**
     * Creates a new `HdyCarouselIndicatorDots`.
     * @constructor 
     * @returns The newly created `HdyCarouselIndicatorDots`
     */
    constructor() 
    /**
     * Creates a new `HdyCarouselIndicatorDots`.
     * @constructor 
     * @returns The newly created `HdyCarouselIndicatorDots`
     */
    static new(): CarouselIndicatorDots
    _init(config?: CarouselIndicatorDots.ConstructorProperties): void
}

module CarouselIndicatorLines {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.CarouselIndicatorLines

        /**
         * The displayed carousel.
         */
        carousel?: Carousel | null
    }

}

interface CarouselIndicatorLines extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Handy-1.Handy.CarouselIndicatorLines

    /**
     * The displayed carousel.
     */
    carousel: Carousel

    // Owm methods of Handy-1.Handy.CarouselIndicatorLines

    /**
     * Gets the displayed carousel.
     * @returns the displayed carousel
     */
    get_carousel(): Carousel | null
    /**
     * Sets the [class`Carousel]` to use.
     * @param carousel a carousel
     */
    set_carousel(carousel: Carousel | null): void

    // Class property signals of Handy-1.Handy.CarouselIndicatorLines

    connect(sigName: "notify::carousel", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carousel", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::carousel", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A lines indicator for [class`Carousel]`.
 * 
 * The `HdyCarouselIndicatorLines` widget shows a set of lines for each page of
 * a given [class`Carousel]`. The carousel's active page is shown as another line
 * that moves between them to match the carousel's position.
 * 
 * See also [class`CarouselIndicatorDots]`.
 * 
 * ## CSS nodes
 * 
 * `HdyCarouselIndicatorLines` has a single CSS node with name
 * `carouselindicatorlines`.
 * @class 
 */
class CarouselIndicatorLines extends Gtk.DrawingArea {

    // Own properties of Handy-1.Handy.CarouselIndicatorLines

    static name: string
    static $gtype: GObject.GType<CarouselIndicatorLines>

    // Constructors of Handy-1.Handy.CarouselIndicatorLines

    constructor(config?: CarouselIndicatorLines.ConstructorProperties) 
    /**
     * Creates a new `HdyCarouselIndicatorLines`.
     * @constructor 
     * @returns the newly created `HdyCarouselIndicatorLines`
     */
    constructor() 
    /**
     * Creates a new `HdyCarouselIndicatorLines`.
     * @constructor 
     * @returns the newly created `HdyCarouselIndicatorLines`
     */
    static new(): CarouselIndicatorLines
    _init(config?: CarouselIndicatorLines.ConstructorProperties): void
}

module Clamp {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Clamp

        /**
         * The maximum size to allocate the children.
         * 
         * It is the width if the clamp is horizontal, or the height if it is
         * vertical.
         */
        maximum_size?: number | null
        /**
         * The size above which the child is clamped.
         * 
         * Starting from this size, the layout will tighten its grip on the children,
         * slowly allocating less and less of the available size up to the maximum
         * allocated size. Below that threshold and below the maximum size, the
         * children will be allocated all the available size.
         * 
         * If the threshold is greater than the maximum size to allocate to the
         * children, they will be allocated the whole size up to the maximum. If the
         * threshold is lower than the minimum size to allocate to the children, that
         * size will be used as the tightening threshold.
         * 
         * Effectively, tightening the grip on a child before it reaches its maximum
         * size makes transitions to and from the maximum size smoother when resizing.
         */
        tightening_threshold?: number | null
    }

}

interface Clamp extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Handy-1.Handy.Clamp

    /**
     * The maximum size to allocate the children.
     * 
     * It is the width if the clamp is horizontal, or the height if it is
     * vertical.
     */
    maximum_size: number
    /**
     * The size above which the child is clamped.
     * 
     * Starting from this size, the layout will tighten its grip on the children,
     * slowly allocating less and less of the available size up to the maximum
     * allocated size. Below that threshold and below the maximum size, the
     * children will be allocated all the available size.
     * 
     * If the threshold is greater than the maximum size to allocate to the
     * children, they will be allocated the whole size up to the maximum. If the
     * threshold is lower than the minimum size to allocate to the children, that
     * size will be used as the tightening threshold.
     * 
     * Effectively, tightening the grip on a child before it reaches its maximum
     * size makes transitions to and from the maximum size smoother when resizing.
     */
    tightening_threshold: number

    // Owm methods of Handy-1.Handy.Clamp

    /**
     * Gets the maximum size allocated to the children.
     * @returns the maximum size to allocate to the children
     */
    get_maximum_size(): number
    /**
     * Gets the size above which the children are clamped.
     * @returns the size above which the children are clamped
     */
    get_tightening_threshold(): number
    /**
     * Sets the maximum size allocated to the children.
     * @param maximum_size the maximum size
     */
    set_maximum_size(maximum_size: number): void
    /**
     * Sets the size above which the children are clamped.
     * @param tightening_threshold the tightening threshold
     */
    set_tightening_threshold(tightening_threshold: number): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.Clamp

    connect(sigName: "notify::maximum-size", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximum-size", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximum-size", ...args: any[]): void
    connect(sigName: "notify::tightening-threshold", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tightening-threshold", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tightening-threshold", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget constraining its child to a given size.
 * 
 * The `HdyClamp` widget constrains the size of the widget it contains to a
 * given maximum size. It will constrain the width if it is horizontal, or the
 * height if it is vertical. The expansion of the child from its minimum to its
 * maximum size is eased out for a smooth transition.
 * 
 * If the child requires more than the requested maximum size, it will be
 * allocated the minimum size it can fit in instead.
 * 
 * ## CSS nodes
 * 
 * `HdyClamp` has a single CSS node with name `clamp`.
 * 
 * The node will get the style classes `.large` when its child reached its
 * maximum size, `.small` when the clamp allocates its full size to its child,
 * `.medium` in-between, or none if it didn't compute its size yet.
 * @class 
 */
class Clamp extends Gtk.Bin {

    // Own properties of Handy-1.Handy.Clamp

    static name: string
    static $gtype: GObject.GType<Clamp>

    // Constructors of Handy-1.Handy.Clamp

    constructor(config?: Clamp.ConstructorProperties) 
    /**
     * Creates a new `HdyClamp`.
     * @constructor 
     * @returns the newly created `HdyClamp`
     */
    constructor() 
    /**
     * Creates a new `HdyClamp`.
     * @constructor 
     * @returns the newly created `HdyClamp`
     */
    static new(): Clamp
    _init(config?: Clamp.ConstructorProperties): void
}

module ComboRow {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, ActionRow.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ComboRow

        /**
         * The index of the selected item in its [iface`Gio`.ListModel].
         */
        selected_index?: number | null
        /**
         * Whether to use the current value as the subtitle.
         * 
         * If you use a custom widget creation function, you will need to give the row
         * a name conversion closure with [method`ComboRow`.set_get_name_func].
         * 
         * If `TRUE`, you should not access [property`ActionRow:`subtitle].
         */
        use_subtitle?: boolean | null
    }

}

interface ComboRow extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ComboRow

    /**
     * The index of the selected item in its [iface`Gio`.ListModel].
     */
    selected_index: number
    /**
     * Whether to use the current value as the subtitle.
     * 
     * If you use a custom widget creation function, you will need to give the row
     * a name conversion closure with [method`ComboRow`.set_get_name_func].
     * 
     * If `TRUE`, you should not access [property`ActionRow:`subtitle].
     */
    use_subtitle: boolean

    // Own fields of Handy-1.Handy.ComboRow

    parent_instance: ActionRow & PreferencesRow & Gtk.ListBoxRow & Gtk.Bin & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.ComboRow

    /**
     * Binds `model` to `self`.
     * 
     * If `self` was already bound to a model, that previous binding is destroyed.
     * 
     * The contents of `self` are cleared and then filled with widgets that represent
     * items from `model`. `self` is updated whenever `model` changes. If `model` is
     * `NULL`, `self` is left empty.
     * @param model the [iface`Gio`.ListModel] to be bound to `self`
     * @param create_list_widget_func a function that creates   widgets for items to display in the list, or `NULL` in case you also passed   `NULL` as `model`
     * @param create_current_widget_func a function that creates   widgets for items to display as the selected item, or `NULL` in case you   also passed `NULL` as `model`
     */
    bind_model(model: Gio.ListModel | null, create_list_widget_func: Gtk.ListBoxCreateWidgetFunc | null, create_current_widget_func: Gtk.ListBoxCreateWidgetFunc | null): void
    /**
     * Binds `model` to `self`.
     * 
     * If `self` was already bound to a model, that previous binding is destroyed.
     * 
     * The contents of `self` are cleared and then filled with widgets that represent
     * items from `model`. `self` is updated whenever `model` changes. If `model` is
     * `NULL`, `self` is left empty.
     * 
     * This is more convenient to use than [method`ComboRow`.bind_model] if you want
     * to represent items of the model with names.
     * @param model the [iface`Gio`.ListModel] to be bound to `self`
     * @param get_name_func a function that creates names for items, or   `NULL` in case you also passed `NULL` as `model`
     */
    bind_name_model(model: Gio.ListModel | null, get_name_func: ComboRowGetNameFunc | null): void
    /**
     * Gets the model bound to `self`.
     * @returns the [iface@Gio.ListModel] bound to @self
     */
    get_model(): Gio.ListModel | null
    /**
     * Gets the index of the selected item in its [iface`Gio`.ListModel].
     * @returns the index of the selected item, or -1 if no item is selected
     */
    get_selected_index(): number
    /**
     * Gets whether the current value of `self` should be displayed as its subtitle.
     * @returns whether the current value of @self should be displayed as its   subtitle
     */
    get_use_subtitle(): boolean
    /**
     * Creates a model for `enum_type` and binds it to `self`.
     * 
     * The items of the model will be [class`EnumValueObject]` objects.
     * 
     * If `self` was already bound to a model, that previous binding is destroyed.
     * 
     * The contents of `self` are cleared and then filled with widgets that represent
     * items from `model`. `self` is updated whenever `model` changes. If `model` is
     * `NULL`, `self` is left empty.
     * 
     * This is more convenient to use than [method`ComboRow`.bind_name_model] if you
     * want to represent values of an enumeration with names.
     * 
     * See [func`enum_value_row_name]`.
     * @param enum_type the enumeration [alias`GLib`.Type] to be bound to `self`
     * @param get_name_func a function that creates names for items, or   `NULL` in case you also passed `NULL` as `model`
     */
    set_for_enum(enum_type: GObject.GType, get_name_func: ComboRowGetEnumValueNameFunc | null): void
    /**
     * Sets a closure to convert items into names.
     * 
     * See [property`ComboRow:`use-subtitle].
     * @param get_name_func a function that creates names for items, or   `NULL` in case you also passed `NULL` as `model`
     */
    set_get_name_func(get_name_func: ComboRowGetNameFunc | null): void
    /**
     * Sets the index of the selected item in its [iface`Gio`.ListModel].
     * @param selected_index the index of the selected item
     */
    set_selected_index(selected_index: number): void
    /**
     * Sets whether the current value of `self` should be displayed as its subtitle.
     * 
     * If `TRUE`, you should not access [property`ActionRow:`subtitle].
     * @param use_subtitle `TRUE` to set the current value as the subtitle
     */
    set_use_subtitle(use_subtitle: boolean): void

    // Conflicting methods

    /**
     * Activates `self`.
     */
    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     * @returns %TRUE if the widget was activatable
     */
    activate(): boolean
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     * @returns %TRUE if the widget was activatable
     */
    activate(): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.ComboRow

    connect(sigName: "notify::selected-index", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-index", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected-index", ...args: any[]): void
    connect(sigName: "notify::use-subtitle", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-subtitle", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-subtitle", ...args: any[]): void
    connect(sigName: "notify::activatable-widget", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable-widget", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable-widget", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::subtitle-lines", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-lines", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-lines", ...args: any[]): void
    connect(sigName: "notify::title-lines", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-lines", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-lines", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to choose from a list of items.
 * 
 * The `HdyComboRow` widget allows the user to choose from a list of valid
 * choices. The row displays the selected choice. When activated, the row
 * displays a popover which allows the user to make a new choice.
 * 
 * The [class`ComboRow]` uses the model-view pattern; the list of valid choices
 * is specified in the form of a [iface`Gio`.ListModel], and the display of the
 * choices can be adapted to the data in the model via widget creation
 * functions.
 * 
 * `HdyComboRow` is [property`Gtk`.ListBoxRow:activatable] if a model is set.
 * 
 * ## CSS nodes
 * 
 * `HdyComboRow` has a main CSS node with name `row`.
 * 
 * Its popover has the node name popover with the `.combo` style class, it
 * contains a [class`Gtk`.ScrolledWindow], which in turn contains a
 * [class`Gtk`.ListBox], both are accessible via their regular nodes.
 * 
 * A checkmark of node and style class `image.checkmark` in the popover denotes
 * the current item.
 * @class 
 */
class ComboRow extends ActionRow {

    // Own properties of Handy-1.Handy.ComboRow

    static name: string
    static $gtype: GObject.GType<ComboRow>

    // Constructors of Handy-1.Handy.ComboRow

    constructor(config?: ComboRow.ConstructorProperties) 
    /**
     * Creates a new `HdyComboRow`.
     * @constructor 
     * @returns the newly created `HdyComboRow`
     */
    constructor() 
    /**
     * Creates a new `HdyComboRow`.
     * @constructor 
     * @returns the newly created `HdyComboRow`
     */
    static new(): ComboRow
    _init(config?: ComboRow.ConstructorProperties): void
}

module Deck {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Swipeable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Deck

        /**
         * Whether swipe gestures allow switching to the previous child.
         */
        can_swipe_back?: boolean | null
        /**
         * Whether swipe gestures allow switching to the next child.
         */
        can_swipe_forward?: boolean | null
        /**
         * Horizontally homogeneous sizing.
         */
        hhomogeneous?: boolean | null
        /**
         * Whether or not the size should smoothly change when changing between
         * differently sized children.
         */
        interpolate_size?: boolean | null
        /**
         * The transition animation duration, in milliseconds.
         */
        transition_duration?: number | null
        /**
         * The type of animation that will be used for transitions between children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         */
        transition_type?: DeckTransitionType | null
        /**
         * Vertically homogeneous sizing.
         */
        vhomogeneous?: boolean | null
        /**
         * The widget currently visible.
         * 
         * The transition is determined by [property`Deck:`transition-type] and
         * [property`Deck:`transition-duration]. The transition can be cancelled by the
         * user, in which case visible child will change back to the previously
         * visible child.
         */
        visible_child?: Gtk.Widget | null
        /**
         * The name of the widget currently visible.
         */
        visible_child_name?: string | null
    }

}

interface Deck extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {

    // Own properties of Handy-1.Handy.Deck

    /**
     * Whether swipe gestures allow switching to the previous child.
     */
    can_swipe_back: boolean
    /**
     * Whether swipe gestures allow switching to the next child.
     */
    can_swipe_forward: boolean
    /**
     * Horizontally homogeneous sizing.
     */
    hhomogeneous: boolean
    /**
     * Whether or not the size should smoothly change when changing between
     * differently sized children.
     */
    interpolate_size: boolean
    /**
     * The transition animation duration, in milliseconds.
     */
    transition_duration: number
    /**
     * Whether or not the transition is currently running.
     */
    readonly transition_running: boolean
    /**
     * The type of animation that will be used for transitions between children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the child that is about to become
     * current.
     */
    transition_type: DeckTransitionType
    /**
     * Vertically homogeneous sizing.
     */
    vhomogeneous: boolean
    /**
     * The widget currently visible.
     * 
     * The transition is determined by [property`Deck:`transition-type] and
     * [property`Deck:`transition-duration]. The transition can be cancelled by the
     * user, in which case visible child will change back to the previously
     * visible child.
     */
    visible_child: Gtk.Widget
    /**
     * The name of the widget currently visible.
     */
    visible_child_name: string | null

    // Own fields of Handy-1.Handy.Deck

    parent_instance: Gtk.Container & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.Deck

    /**
     * Finds the previous or next navigatable child.
     * 
     * Gets the previous or next child. This will be the same widget
     * [method`Deck`.navigate] will navigate to.
     * 
     * If there's no child to navigate to, `NULL` will be returned instead.
     * @param direction the direction
     * @returns the previous or next child
     */
    get_adjacent_child(direction: NavigationDirection): Gtk.Widget | null
    /**
     * Gets whether swipe gestures for navigating backward are enabled.
     * @returns Whether swipe gestures are enabled.
     */
    get_can_swipe_back(): boolean
    /**
     * Gets whether swipe gestures for navigating forward enabled.
     * @returns Whether swipe gestures are enabled.
     */
    get_can_swipe_forward(): boolean
    /**
     * Finds the child of `self` with `name`.
     * 
     * Returns `NULL` if there is no child with this name.
     * @param name the name of the child to find
     * @returns the requested child of @self
     */
    get_child_by_name(name: string | null): Gtk.Widget | null
    /**
     * Gets whether `self` is homogeneous for the given orientation.
     * @param orientation the orientation
     * @returns whether @self is homogeneous for the given orientation
     */
    get_homogeneous(orientation: Gtk.Orientation): boolean
    /**
     * Gets whether `self` will interpolate its size when changing the visible child.
     * @returns whether child sizes are interpolated
     */
    get_interpolate_size(): boolean
    /**
     * Gets the mode transition animation duration for `self`.
     * @returns the mode transition duration, in milliseconds.
     */
    get_transition_duration(): number
    /**
     * Gets whether a transition is currently running for `self`.
     * @returns whether a transition is currently running
     */
    get_transition_running(): boolean
    /**
     * Gets the type of animation used for transitions between children.
     * @returns the current transition type of @self
     */
    get_transition_type(): DeckTransitionType
    /**
     * Gets the visible child widget.
     * @returns the visible child widget
     */
    get_visible_child(): Gtk.Widget
    /**
     * Gets the name of the currently visible child widget.
     * @returns the name of the visible child
     */
    get_visible_child_name(): string | null
    /**
     * Inserts `child` in the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, inserts `child` at the first position.
     * @param child the widget to insert
     * @param sibling the sibling after which to insert `child`
     */
    insert_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Navigates to the previous or next child.
     * 
     * The switch is similar to performing a swipe gesture to go in `direction`.
     * @param direction the direction
     * @returns whether the visible child was changed
     */
    navigate(direction: NavigationDirection): boolean
    /**
     * Inserts `child` at the first position in `self`.
     * @param child the widget to prepend
     */
    prepend(child: Gtk.Widget): void
    /**
     * Moves `child` to the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, move `child` to the first position.
     * @param child the widget to move, must be a child of `self`
     * @param sibling the sibling to move `child` after
     */
    reorder_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Sets whether swipe gestures for navigating backward are enabled.
     * @param can_swipe_back the new value
     */
    set_can_swipe_back(can_swipe_back: boolean): void
    /**
     * Sets whether swipe gestures for navigating forward are enabled.
     * @param can_swipe_forward the new value
     */
    set_can_swipe_forward(can_swipe_forward: boolean): void
    /**
     * Sets whether `self` is homogeneous for a given orientation.
     * 
     * If set to `FALSE`, different children can have different size along the
     * opposite orientation.
     * @param orientation the orientation
     * @param homogeneous `TRUE` to make `self` homogeneous
     */
    set_homogeneous(orientation: Gtk.Orientation, homogeneous: boolean): void
    /**
     * Sets whether `self` will interpolate its size when changing the visible child.
     * 
     * `self` will interpolate its size between the current one and the one it'll
     * take after changing the visible child, according to the set transition
     * duration.
     * @param interpolate_size the new value
     */
    set_interpolate_size(interpolate_size: boolean): void
    /**
     * Sets the mode transition animation duration for `self`.
     * @param duration the new duration, in milliseconds
     */
    set_transition_duration(duration: number): void
    /**
     * Sets the type of animation used for transitions between children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the child that is about to become
     * current.
     * @param transition the new transition type
     */
    set_transition_type(transition: DeckTransitionType): void
    /**
     * Sets the currently visible widget.
     * @param visible_child the new child
     */
    set_visible_child(visible_child: Gtk.Widget): void
    /**
     * Makes the child with the name `name` visible.
     * 
     * See [method`Deck`.set_visible_child] for more details.
     * @param name the name of a child
     */
    set_visible_child_name(name: string | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.Deck

    connect(sigName: "notify::can-swipe-back", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-swipe-back", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-swipe-back", ...args: any[]): void
    connect(sigName: "notify::can-swipe-forward", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-swipe-forward", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-swipe-forward", ...args: any[]): void
    connect(sigName: "notify::hhomogeneous", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hhomogeneous", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hhomogeneous", ...args: any[]): void
    connect(sigName: "notify::interpolate-size", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpolate-size", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interpolate-size", ...args: any[]): void
    connect(sigName: "notify::transition-duration", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-duration", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-duration", ...args: any[]): void
    connect(sigName: "notify::transition-running", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-running", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-running", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::vhomogeneous", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vhomogeneous", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vhomogeneous", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
    connect(sigName: "notify::visible-child-name", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child-name", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child-name", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Deck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A swipeable widget showing one of the visible children at a time.
 * 
 * The `HdyDeck` widget displays one of the visible children, similar to a
 * [class`Gtk`.Stack]. The children are strictly ordered and can be navigated
 * using swipe gestures.
 * 
 * The “over” and “under” stack the children one on top of the other, while the
 * “slide” transition puts the children side by side. While navigating to a
 * child on the side or below can be performed by swiping the current child
 * away, navigating to an upper child requires dragging it from the edge where
 * it resides. This doesn't affect non-dragging swipes.
 * 
 * The “over” and “under” transitions can draw their shadow on top of the
 * window's transparent areas, like the rounded corners. This is a side-effect
 * of allowing shadows to be drawn on top of OpenGL areas. It can be mitigated
 * by using [class`Window]` or [class`ApplicationWindow]` as they will crop
 * anything drawn beyond the rounded corners.
 * 
 * The child property `navigatable` can be set on `HdyDeck` children to
 * determine whether they can be navigated to when folded. If `FALSE`, the child
 * will be ignored by [method`Deck`.get_adjacent_child], [method`Deck`.navigate],
 * and swipe gestures. This can be used used to prevent switching to widgets
 * like separators.
 * 
 * ## CSS nodes
 * 
 * `HdyDeck` has a single CSS node with name `deck`.
 * @class 
 */
class Deck extends Gtk.Container {

    // Own properties of Handy-1.Handy.Deck

    static name: string
    static $gtype: GObject.GType<Deck>

    // Constructors of Handy-1.Handy.Deck

    constructor(config?: Deck.ConstructorProperties) 
    /**
     * Creates a new `HdyDeck`.
     * @constructor 
     * @returns the newly created `HdyDeck`
     */
    constructor() 
    /**
     * Creates a new `HdyDeck`.
     * @constructor 
     * @returns the newly created `HdyDeck`
     */
    static new(): Deck
    _init(config?: Deck.ConstructorProperties): void
}

module EnumValueObject {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface EnumValueObject {

    // Owm methods of Handy-1.Handy.EnumValueObject

    /**
     * Gets the name of `self`.
     * @returns the name of @self
     */
    get_name(): string | null
    /**
     * Gets the nick of `self`.
     * @returns the nick of @self
     */
    get_nick(): string | null
    /**
     * Gets the value of `self`.
     * @returns the value of @self
     */
    get_value(): number

    // Class property signals of Handy-1.Handy.EnumValueObject

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing an [struct`GObject`.EnumValue].
 * 
 * The `HdyEnumValueObject` object represents a [struct`GObject`.EnumValue],
 * allowing it to be used with [iface`Gio`.ListModel].
 * @class 
 */
class EnumValueObject extends GObject.Object {

    // Own properties of Handy-1.Handy.EnumValueObject

    static name: string
    static $gtype: GObject.GType<EnumValueObject>

    // Constructors of Handy-1.Handy.EnumValueObject

    constructor(config?: EnumValueObject.ConstructorProperties) 
    /**
     * Creates a new `HdyEnumValueObject`.
     * @constructor 
     * @param enum_value 
     * @returns the newly created `HdyEnumValueObject`
     */
    constructor(enum_value: GObject.EnumValue) 
    /**
     * Creates a new `HdyEnumValueObject`.
     * @constructor 
     * @param enum_value 
     * @returns the newly created `HdyEnumValueObject`
     */
    static new(enum_value: GObject.EnumValue): EnumValueObject
    _init(config?: EnumValueObject.ConstructorProperties): void
}

module ExpanderRow {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, PreferencesRow.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ExpanderRow

        /**
         * Whether expansion is enabled.
         */
        enable_expansion?: boolean | null
        /**
         * Whether the row is expanded.
         */
        expanded?: boolean | null
        /**
         * The icon name for this row.
         */
        icon_name?: string | null
        /**
         * Whether the switch enabling the expansion is visible.
         */
        show_enable_switch?: boolean | null
        /**
         * The subtitle for this row.
         */
        subtitle?: string | null
        /**
         * Whether an embedded underline in the title or subtitle labels indicates a
         * mnemonic.
         */
        use_underline?: boolean | null
    }

}

interface ExpanderRow extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ExpanderRow

    /**
     * Whether expansion is enabled.
     */
    enable_expansion: boolean
    /**
     * Whether the row is expanded.
     */
    expanded: boolean
    /**
     * The icon name for this row.
     */
    icon_name: string | null
    /**
     * Whether the switch enabling the expansion is visible.
     */
    show_enable_switch: boolean
    /**
     * The subtitle for this row.
     */
    subtitle: string | null
    /**
     * Whether an embedded underline in the title or subtitle labels indicates a
     * mnemonic.
     */
    use_underline: boolean

    // Own fields of Handy-1.Handy.ExpanderRow

    parent_instance: PreferencesRow & Gtk.ListBoxRow & Gtk.Bin & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.ExpanderRow

    /**
     * Adds an action widget to `self`.
     * @param widget the action widget
     */
    add_action(widget: Gtk.Widget): void
    /**
     * Adds a prefix widget to `self`.
     * @param widget the prefix widget
     */
    add_prefix(widget: Gtk.Widget): void
    /**
     * Gets whether the expansion of `self` is enabled.
     * @returns whether the expansion of @self is enabled
     */
    get_enable_expansion(): boolean
    get_expanded(): boolean
    /**
     * Gets the icon name for `self`.
     * @returns the icon name for @self
     */
    get_icon_name(): string | null
    /**
     * Gets whether the switch enabling the expansion of `self` is visible.
     * @returns whether the switch enabling the expansion of @self is visible
     */
    get_show_enable_switch(): boolean
    /**
     * Gets the subtitle for `self`.
     * @returns the subtitle for @self
     */
    get_subtitle(): string | null
    /**
     * Gets whether an embedded underline in the title or subtitle labels indicates
     * a mnemonic.
     * @returns whether an embedded underlines indicates a mnemonic
     */
    get_use_underline(): boolean
    /**
     * Sets whether the expansion of `self` is enabled.
     * @param enable_expansion `TRUE` to enable the expansion
     */
    set_enable_expansion(enable_expansion: boolean): void
    set_expanded(expanded: boolean): void
    /**
     * Sets the icon name for `self`.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets whether the switch enabling the expansion of `self` is visible.
     * @param show_enable_switch `TRUE` to show the switch enabling the expansion
     */
    set_show_enable_switch(show_enable_switch: boolean): void
    /**
     * Sets the subtitle for `self`.
     * @param subtitle the subtitle
     */
    set_subtitle(subtitle: string | null): void
    /**
     * Sets whether an embedded underline in the title or subtitle labels indicates
     * a mnemonic.
     * @param use_underline `TRUE` if underlines in the text indicate mnemonics
     */
    set_use_underline(use_underline: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.ExpanderRow

    connect(sigName: "notify::enable-expansion", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-expansion", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-expansion", ...args: any[]): void
    connect(sigName: "notify::expanded", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expanded", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expanded", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::show-enable-switch", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-enable-switch", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-enable-switch", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to reveal widgets.
 * 
 * The `HdyExpanderRow` widget allows the user to reveal or hide widgets below
 * it. It also allows the user to enable the expansion of the row, allowing to
 * disable all that the row contains.
 * 
 * ## HdyExpanderRow as GtkBuildable
 * 
 * The `HdyExpanderRow` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding a child as an action widget by specifying “action” as the
 * “type” attribute of a <child> element.
 * 
 * It also supports adding it as a prefix widget by specifying “prefix” as the
 * “type” attribute of a <child> element.
 * 
 * ## CSS nodes
 * 
 * `HdyExpanderRow` has a main CSS node with name `row`, and the `.expander`
 * style class. It has the `.empty` style class when it contains no children.
 * 
 * It contains the subnodes `row.header` for its main embedded row,
 * `list.nested` for the list it can expand, and `image.expander-row-arrow` for
 * its arrow.
 * 
 * When expanded, `HdyExpanderRow` will add the
 * `.checked-expander-row-previous-sibling` style class to its previous sibling,
 * and remove it when retracted.
 * @class 
 */
class ExpanderRow extends PreferencesRow {

    // Own properties of Handy-1.Handy.ExpanderRow

    static name: string
    static $gtype: GObject.GType<ExpanderRow>

    // Constructors of Handy-1.Handy.ExpanderRow

    constructor(config?: ExpanderRow.ConstructorProperties) 
    /**
     * Creates a new `HdyExpanderRow`.
     * @constructor 
     * @returns the newly created `HdyExpanderRow`
     */
    constructor() 
    /**
     * Creates a new `HdyExpanderRow`.
     * @constructor 
     * @returns the newly created `HdyExpanderRow`
     */
    static new(): ExpanderRow
    _init(config?: ExpanderRow.ConstructorProperties): void
}

module Flap {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Swipeable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Flap

        /**
         * The content widget.
         * 
         * It's always displayed when unfolded, and partially visible
         * when folded.
         */
        content?: Gtk.Widget | null
        /**
         * The flap widget.
         * 
         * It's only visible when [property`Flap:`reveal-progress] is greater than 0.
         */
        flap?: Gtk.Widget | null
        /**
         * The flap position.
         * 
         * If `GTK_PACK_START`, the flap is displayed before the content, if
         * `GTK_PACK_END`, it's displayed after the content.
         */
        flap_position?: Gtk.PackType | null
        /**
         * The fold transition animation duration, in milliseconds.
         */
        fold_duration?: number | null
        /**
         * The current fold policy.
         * 
         * See [enum`FlapFoldPolicy]` for available policies.
         */
        fold_policy?: FlapFoldPolicy | null
        /**
         * Whether the flap is locked.
         * 
         * If `FALSE`, folding when the flap is revealed automatically closes it, and
         * unfolding it when the flap is not revealed opens it. If `TRUE`,
         * [property`Flap:`reveal-flap] value never changes on its own.
         */
        locked?: boolean | null
        /**
         * Whether the flap is modal.
         * 
         * If `TRUE`, clicking the content widget while flap is revealed, as well as
         * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks
         * are passed through to the content widget.
         */
        modal?: boolean | null
        /**
         * The reveal transition animation duration, in milliseconds.
         */
        reveal_duration?: number | null
        /**
         * Whether the flap widget is revealed.
         */
        reveal_flap?: boolean | null
        /**
         * The separator widget.
         * 
         * It's displayed between content and flap when there's no shadow to display.
         * When exactly it's visible depends on the [property`Flap:`transition-type]
         * value. If `NULL`, no separator will be used.
         */
        separator?: Gtk.Widget | null
        /**
         * Whether the flap can be closed with a swipe gesture.
         * 
         * The area that can be swiped depends on the [property`Flap:`transition-type]
         * value.
         */
        swipe_to_close?: boolean | null
        /**
         * Whether the flap can be opened with a swipe gesture.
         * 
         * The area that can be swiped depends on the [property`Flap:`transition-type]
         * value.
         */
        swipe_to_open?: boolean | null
        /**
         * the type of animation used for reveal and fold transitions.
         * 
         * [property`Flap:`flap] is transparent by default, which means the content
         * will be seen through it with `HDY_FLAP_TRANSITION_TYPE_OVER` transitions;
         * add the `.background` style class to it if this is unwanted.
         */
        transition_type?: FlapTransitionType | null
    }

}

interface Flap extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {

    // Own properties of Handy-1.Handy.Flap

    /**
     * The content widget.
     * 
     * It's always displayed when unfolded, and partially visible
     * when folded.
     */
    content: Gtk.Widget
    /**
     * The flap widget.
     * 
     * It's only visible when [property`Flap:`reveal-progress] is greater than 0.
     */
    flap: Gtk.Widget
    /**
     * The flap position.
     * 
     * If `GTK_PACK_START`, the flap is displayed before the content, if
     * `GTK_PACK_END`, it's displayed after the content.
     */
    flap_position: Gtk.PackType
    /**
     * The fold transition animation duration, in milliseconds.
     */
    fold_duration: number
    /**
     * The current fold policy.
     * 
     * See [enum`FlapFoldPolicy]` for available policies.
     */
    fold_policy: FlapFoldPolicy
    /**
     * Whether the flap is currently folded.
     * 
     * See [property`Flap:`fold-policy].
     */
    readonly folded: boolean
    /**
     * Whether the flap is locked.
     * 
     * If `FALSE`, folding when the flap is revealed automatically closes it, and
     * unfolding it when the flap is not revealed opens it. If `TRUE`,
     * [property`Flap:`reveal-flap] value never changes on its own.
     */
    locked: boolean
    /**
     * Whether the flap is modal.
     * 
     * If `TRUE`, clicking the content widget while flap is revealed, as well as
     * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks
     * are passed through to the content widget.
     */
    modal: boolean
    /**
     * The reveal transition animation duration, in milliseconds.
     */
    reveal_duration: number
    /**
     * Whether the flap widget is revealed.
     */
    reveal_flap: boolean
    /**
     * The current reveal transition progress.
     * 
     * 0 means fully hidden, 1 means fully revealed. See
     * [property`Flap:`reveal-flap].
     */
    readonly reveal_progress: number
    /**
     * The separator widget.
     * 
     * It's displayed between content and flap when there's no shadow to display.
     * When exactly it's visible depends on the [property`Flap:`transition-type]
     * value. If `NULL`, no separator will be used.
     */
    separator: Gtk.Widget
    /**
     * Whether the flap can be closed with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type]
     * value.
     */
    swipe_to_close: boolean
    /**
     * Whether the flap can be opened with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type]
     * value.
     */
    swipe_to_open: boolean
    /**
     * the type of animation used for reveal and fold transitions.
     * 
     * [property`Flap:`flap] is transparent by default, which means the content
     * will be seen through it with `HDY_FLAP_TRANSITION_TYPE_OVER` transitions;
     * add the `.background` style class to it if this is unwanted.
     */
    transition_type: FlapTransitionType

    // Owm methods of Handy-1.Handy.Flap

    /**
     * Gets the content widget for `self`
     * @returns the content widget for @self
     */
    get_content(): Gtk.Widget | null
    /**
     * Gets the flap widget for `self`
     * @returns the flap widget for @self
     */
    get_flap(): Gtk.Widget | null
    /**
     * Gets the flap position for `self`.
     * @returns the flap position for @self
     */
    get_flap_position(): Gtk.PackType
    /**
     * Gets the amount of time that fold transitions will take.
     * @returns the fold transition duration, in milliseconds
     */
    get_fold_duration(): number
    /**
     * Gets the current fold policy of `self`.
     * @returns the current fold policy of @self
     */
    get_fold_policy(): FlapFoldPolicy
    /**
     * Gets whether `self` is currently folded.
     * @returns `TRUE` if @self is currently folded
     */
    get_folded(): boolean
    /**
     * Gets whether `self` is locked.
     * @returns whether @self is locked
     */
    get_locked(): boolean
    /**
     * Gets whether the `self` is modal.
     * @returns whether @self is modal
     */
    get_modal(): boolean
    /**
     * Gets the amount of time that reveal transitions will take.
     * @returns the reveal transition duration, in milliseconds
     */
    get_reveal_duration(): number
    /**
     * Gets whether the flap widget is revealed for `self`.
     * @returns whether flap widget is revealed
     */
    get_reveal_flap(): boolean
    /**
     * Gets the current reveal transition progress for `self`.
     * @returns the current reveal progress for @self
     */
    get_reveal_progress(): number
    /**
     * Gets the separator widget for `self`.
     * @returns the separator widget for @self
     */
    get_separator(): Gtk.Widget | null
    /**
     * Gets whether `self` can be closed with a swipe gesture.
     * @returns `TRUE` if @self can be closed with a swipe gesture
     */
    get_swipe_to_close(): boolean
    /**
     * Gets whether `self` can be opened with a swipe gesture.
     * @returns `TRUE` if @self can be opened with a swipe gesture
     */
    get_swipe_to_open(): boolean
    /**
     * Gets the type of animation used for reveal and fold transitions in `self`.
     * @returns the current transition type of @self
     */
    get_transition_type(): FlapTransitionType
    /**
     * Sets the content widget for `self`.
     * 
     * It is always displayed when unfolded, and partially visible when folded.
     * @param content the content widget
     */
    set_content(content: Gtk.Widget | null): void
    /**
     * Sets the flap widget for `self`.
     * @param flap the flap widget
     */
    set_flap(flap: Gtk.Widget | null): void
    /**
     * Sets the flap position for `self`.
     * @param position the new value
     */
    set_flap_position(position: Gtk.PackType): void
    /**
     * Sets the duration that fold transitions will take.
     * @param duration the new duration, in milliseconds
     */
    set_fold_duration(duration: number): void
    /**
     * Sets the current fold policy for `self`.
     * @param policy a fold policy
     */
    set_fold_policy(policy: FlapFoldPolicy): void
    /**
     * Sets whether `self` is locked.
     * 
     * If `FALSE`, folding `self` when the flap is revealed automatically closes it,
     * and unfolding it when the flap is not revealed opens it. If `TRUE`,
     * [property`Flap:`reveal-flap] value never changes on its own.
     * @param locked the new value
     */
    set_locked(locked: boolean): void
    /**
     * Sets whether the `self` can be closed with a click.
     * 
     * If `modal` is `TRUE`, clicking the content widget while flap is revealed, or
     * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks are
     * passed through to the content widget.
     * @param modal whether `self` can be closed with a click
     */
    set_modal(modal: boolean): void
    /**
     * Sets the duration that reveal transitions in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    set_reveal_duration(duration: number): void
    /**
     * Sets whether the flap widget is revealed for `self`.
     * @param reveal_flap `TRUE` to reveal the flap widget, `FALSE` otherwise
     */
    set_reveal_flap(reveal_flap: boolean): void
    /**
     * Sets the separator widget for `self`.
     * @param separator the separator widget
     */
    set_separator(separator: Gtk.Widget | null): void
    /**
     * Sets whether `self` can be closed with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type] value.
     * @param swipe_to_close whether `self` can be closed with a swipe gesture
     */
    set_swipe_to_close(swipe_to_close: boolean): void
    /**
     * Sets whether `self` can be opened with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type]
     * value.
     * @param swipe_to_open whether `self` can be opened with a swipe gesture
     */
    set_swipe_to_open(swipe_to_open: boolean): void
    /**
     * Sets the type of animation used for reveal and fold transitions in `self`.
     * @param transition_type the new transition type
     */
    set_transition_type(transition_type: FlapTransitionType): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.Flap

    connect(sigName: "notify::content", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::flap", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flap", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flap", ...args: any[]): void
    connect(sigName: "notify::flap-position", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flap-position", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flap-position", ...args: any[]): void
    connect(sigName: "notify::fold-duration", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fold-duration", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fold-duration", ...args: any[]): void
    connect(sigName: "notify::fold-policy", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fold-policy", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fold-policy", ...args: any[]): void
    connect(sigName: "notify::folded", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folded", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::reveal-duration", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-duration", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-duration", ...args: any[]): void
    connect(sigName: "notify::reveal-flap", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-flap", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-flap", ...args: any[]): void
    connect(sigName: "notify::reveal-progress", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-progress", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-progress", ...args: any[]): void
    connect(sigName: "notify::separator", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::separator", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::separator", ...args: any[]): void
    connect(sigName: "notify::swipe-to-close", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swipe-to-close", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swipe-to-close", ...args: any[]): void
    connect(sigName: "notify::swipe-to-open", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swipe-to-open", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swipe-to-open", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An adaptive container acting like a box or an overlay.
 * 
 * The `HdyFlap` widget can display its children like a [class`Gtk`.Box] does or
 * like a [class`Gtk`.Overlay] does, according to the
 * [property`Flap:`fold-policy] value.
 * 
 * `HdyFlap` has at most three children: [property`Flap:`content],
 * [property`Flap:`flap] and [property`Flap:`separator]. Content is the primary
 * child, flap is displayed next to it when unfolded, or overlays it when
 * folded. Flap can be shown or hidden by changing the
 * [property`Flap:`reveal-flap] value, as well as via swipe gestures if
 * [property`Flap:`swipe-to-open] and/or [property`Flap:`swipe-to-close] are set
 * to `TRUE`.
 * 
 * Optionally, a separator can be provided, which would be displayed between the
 * content and the flap when there's no shadow to separate them, depending on
 * the transition type.
 * 
 * [property`Flap:`flap] is transparent by default; add the `.background` style
 * class to it if this is unwanted.
 * 
 * If [property`Flap:`modal] is set to `TRUE`, content becomes completely
 * inaccessible when the flap is revealed while folded.
 * 
 * The position of the flap and separator children relative to the content is
 * determined by orientation, as well as the [property`Flap:`flap-position]
 * value.
 * 
 * Folding the flap will automatically hide the flap widget, and unfolding it
 * will automatically reveal it. If this behavior is not desired, the
 * [property`Flap:`locked] property can be used to override it.
 * 
 * Common use cases include sidebars, header bars that need to be able to
 * overlap the window content (for example, in fullscreen mode) and bottom
 * sheets.
 * 
 * ## HdyFlap as GtkBuildable
 * 
 * The `HdyFlap` implementation of the [iface`Gtk`.Buildable] interface supports
 * setting the flap child by specifying “flap” as the “type” attribute of a
 * <child> element, and separator by specifying “separator”. Specifying
 * “content” child type or omitting it results in setting the content child.
 * 
 * ## CSS nodes
 * 
 * `HdyFlap` has a single CSS node with name `flap`. The node will get the style
 * classes `.folded` when it is folded, and `.unfolded` when it's not.
 * @class 
 */
class Flap extends Gtk.Container {

    // Own properties of Handy-1.Handy.Flap

    static name: string
    static $gtype: GObject.GType<Flap>

    // Constructors of Handy-1.Handy.Flap

    constructor(config?: Flap.ConstructorProperties) 
    /**
     * Creates a new `HdyFlap`.
     * @constructor 
     * @returns the newly created `HdyFlap`
     */
    constructor() 
    /**
     * Creates a new `HdyFlap`.
     * @constructor 
     * @returns the newly created `HdyFlap`
     */
    static new(): Flap
    _init(config?: Flap.ConstructorProperties): void
}

module HeaderBar {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.HeaderBar

        /**
         * The policy for aligning the center widget.
         */
        centering_policy?: CenteringPolicy | null
        /**
         * Custom title widget to display.
         */
        custom_title?: Gtk.Widget | null
        /**
         * The decoration layout for buttons.
         * 
         * If this property is not set, the
         * [property`Gtk`.Settings:gtk-decoration-layout] setting is used.
         * 
         * There can be valid reasons for overriding the setting, such as a header bar
         * design that does not allow for buttons to take room on the right, or only
         * offers room for a single close button. Split header bars are another example
         * for overriding the setting.
         * 
         * The format of the string is button names, separated by commas. A colon
         * separates the buttons that should appear on the start from those on the
         * end. Recognized button names are minimize, maximize, close, icon (the
         * window icon) and menu (a menu button for the fallback app menu).
         * 
         * For example, “menu:minimize,maximize,close” specifies a menu on the left, and
         * minimize, maximize and close buttons on the right.
         */
        decoration_layout?: string | null
        /**
         * Whether [property`HeaderBar:`decoration-layout] is set.
         */
        decoration_layout_set?: boolean | null
        /**
         * Whether to reserve space for a subtitle, even if none is currently set.
         */
        has_subtitle?: boolean | null
        /**
         * Whether the size should smoothly change when changing between children.
         * 
         * If `TRUE`, the header bar will interpolate its size between the one of the
         * previous visible child and the one of the new visible child, according to
         * the set transition duration and the orientation, e.g. if the orientation is
         * horizontal, it will interpolate the its height.
         */
        interpolate_size?: boolean | null
        /**
         * Whether to show window decorations.
         * 
         * Which buttons are actually shown and where is determined by the
         * [property`HeaderBar:`decoration-layout] property, and by the state of the
         * window (e.g. a close button will not be shown if the window can't be
         * closed).
         */
        show_close_button?: boolean | null
        /**
         * The amount of space between children.
         */
        spacing?: number | null
        /**
         * The subtitle to display.
         */
        subtitle?: string | null
        /**
         * The title to display.
         */
        title?: string | null
        /**
         * The transition duration, in milliseconds.
         */
        transition_duration?: number | null
    }

}

interface HeaderBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.HeaderBar

    /**
     * The policy for aligning the center widget.
     */
    centering_policy: CenteringPolicy
    /**
     * Custom title widget to display.
     */
    custom_title: Gtk.Widget
    /**
     * The decoration layout for buttons.
     * 
     * If this property is not set, the
     * [property`Gtk`.Settings:gtk-decoration-layout] setting is used.
     * 
     * There can be valid reasons for overriding the setting, such as a header bar
     * design that does not allow for buttons to take room on the right, or only
     * offers room for a single close button. Split header bars are another example
     * for overriding the setting.
     * 
     * The format of the string is button names, separated by commas. A colon
     * separates the buttons that should appear on the start from those on the
     * end. Recognized button names are minimize, maximize, close, icon (the
     * window icon) and menu (a menu button for the fallback app menu).
     * 
     * For example, “menu:minimize,maximize,close” specifies a menu on the left, and
     * minimize, maximize and close buttons on the right.
     */
    decoration_layout: string | null
    /**
     * Whether [property`HeaderBar:`decoration-layout] is set.
     */
    decoration_layout_set: boolean
    /**
     * Whether to reserve space for a subtitle, even if none is currently set.
     */
    has_subtitle: boolean
    /**
     * Whether the size should smoothly change when changing between children.
     * 
     * If `TRUE`, the header bar will interpolate its size between the one of the
     * previous visible child and the one of the new visible child, according to
     * the set transition duration and the orientation, e.g. if the orientation is
     * horizontal, it will interpolate the its height.
     */
    interpolate_size: boolean
    /**
     * Whether to show window decorations.
     * 
     * Which buttons are actually shown and where is determined by the
     * [property`HeaderBar:`decoration-layout] property, and by the state of the
     * window (e.g. a close button will not be shown if the window can't be
     * closed).
     */
    show_close_button: boolean
    /**
     * The amount of space between children.
     */
    spacing: number
    /**
     * The subtitle to display.
     */
    subtitle: string | null
    /**
     * The title to display.
     */
    title: string | null
    /**
     * The transition duration, in milliseconds.
     */
    transition_duration: number
    /**
     * Whether or not the transition is currently running.
     */
    readonly transition_running: boolean

    // Own fields of Handy-1.Handy.HeaderBar

    parent_instance: Gtk.Container & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.HeaderBar

    /**
     * Gets the policy `self` follows to horizontally align its center widget.
     * @returns the centering policy
     */
    get_centering_policy(): CenteringPolicy
    /**
     * Retrieves the custom title widget of the header.
     * @returns the custom title widget of the header
     */
    get_custom_title(): Gtk.Widget | null
    /**
     * Gets the decoration layout.
     * @returns the decoration layout
     */
    get_decoration_layout(): string | null
    /**
     * Gets whether space is reserved for a subtitle, regardless if one is currently
     * set or not.
     * @returns `TRUE` if the header bar reserves space for a subtitle
     */
    get_has_subtitle(): boolean
    /**
     * Gets whether `self` should interpolate its size on visible child change.
     * @returns whether @self interpolates its size on visible child change
     */
    get_interpolate_size(): boolean
    /**
     * Gets whether this header bar shows the standard window decorations.
     * @returns whether decorations are shown
     */
    get_show_close_button(): boolean
    /**
     * Gets the subtitle of the header.
     * @returns the subtitle of the header
     */
    get_subtitle(): string | null
    /**
     * Retrieves the title of the header.
     * @returns the title of the header.
     */
    get_title(): string | null
    /**
     * Gets the amount of time that transitions between pages will take.
     * @returns the transition duration, in milliseconds
     */
    get_transition_duration(): number
    /**
     * Gets whether the `self` is currently in a transition from one page to another.
     * @returns whether the transition is currently running
     */
    get_transition_running(): boolean
    /**
     * Adds `child` to `self,` packed with reference to the end of the `self`.
     * @param child the widget to be added to `self`
     */
    pack_end(child: Gtk.Widget): void
    /**
     * Adds `child` to `self,` packed with reference to the start of the `self`.
     * @param child the widget to be added to `self`
     */
    pack_start(child: Gtk.Widget): void
    /**
     * Sets the policy `self` must follow to horizontally align its center widget.
     * @param centering_policy the centering policy
     */
    set_centering_policy(centering_policy: CenteringPolicy): void
    /**
     * Sets a custom title for the header bar.
     * 
     * The title should help a user identify the current view. This supersedes any
     * title set by [method`HeaderBar`.set_title] or [method`HeaderBar`.set_subtitle].
     * To achieve the same style as the builtin title and subtitle, use the `.title`
     * and `.subtitle` style classes.
     * 
     * You should set the custom title to `NULL`, for the header title label to be
     * visible again.
     * @param title_widget a custom widget to use for a title
     */
    set_custom_title(title_widget: Gtk.Widget | null): void
    /**
     * Sets the decoration layout for this header bar.
     * @param layout a decoration layout
     */
    set_decoration_layout(layout: string | null): void
    /**
     * Sets whether space is reserved for a subtitle, even if none is currently set.
     * @param setting `TRUE` to reserve space for a subtitle
     */
    set_has_subtitle(setting: boolean): void
    /**
     * Sets whether `self` should interpolate its size on visible child change.
     * @param interpolate_size `TRUE` to interpolate the size
     */
    set_interpolate_size(interpolate_size: boolean): void
    /**
     * Sets whether this header bar shows the standard window decorations.
     * @param setting `TRUE` to show standard window decorations
     */
    set_show_close_button(setting: boolean): void
    /**
     * Sets the subtitle of the header bar.
     * 
     * The title should give a user an additional detail to help them identify the
     * current view.
     * 
     * Note that [class`HeaderBar]` by default reserves room for the subtitle, even
     * if none is currently set. If this is not desired, set the
     * [property`HeaderBar:`has-subtitle] property to `FALSE`.
     * @param subtitle a subtitle
     */
    set_subtitle(subtitle: string | null): void
    /**
     * Sets the title of the [class`HeaderBar]`.
     * 
     * The title should help a user identify the current view. A good title should
     * not include the application name.
     * @param title a title
     */
    set_title(title: string | null): void
    /**
     * Sets the duration that transitions between pages will take.
     * @param duration the new duration, in milliseconds
     */
    set_transition_duration(duration: number): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.HeaderBar

    connect(sigName: "notify::centering-policy", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::centering-policy", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::centering-policy", ...args: any[]): void
    connect(sigName: "notify::custom-title", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-title", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-title", ...args: any[]): void
    connect(sigName: "notify::decoration-layout", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decoration-layout", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decoration-layout", ...args: any[]): void
    connect(sigName: "notify::decoration-layout-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decoration-layout-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decoration-layout-set", ...args: any[]): void
    connect(sigName: "notify::has-subtitle", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-subtitle", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-subtitle", ...args: any[]): void
    connect(sigName: "notify::interpolate-size", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpolate-size", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interpolate-size", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-close-button", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transition-duration", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-duration", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-duration", ...args: any[]): void
    connect(sigName: "notify::transition-running", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-running", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-running", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A title bar widget.
 * 
 * `HdyHeaderBar` is similar to [class`Gtk`.HeaderBar] but is designed to fix
 * some of its shortcomings for adaptive applications.
 * 
 * `HdyHeaderBar` doesn't force the custom title widget to be vertically
 * centered, hence allowing it to fill up the whole height, which is e.g. needed
 * for [class`ViewSwitcher]`.
 * 
 * When used in a mobile dialog, `HdyHeaderBar` will replace its window
 * decorations by a back button allowing to close it. It doesn't have to be its
 * direct child and you can use any complex contraption you like as the dialog's
 * titlebar.
 * 
 * `HdyHeaderBar` can be used in window's content area rather than titlebar, and
 * will still be draggable and will handle right click, middle click and double
 * click as expected from a titlebar. This is particularly useful with
 * [class`Window]` or [class`ApplicationWindow]`.
 * 
 * ## CSS nodes
 * 
 * `HdyHeaderBar` has a single CSS node with name `headerbar`.
 * @class 
 */
class HeaderBar extends Gtk.Container {

    // Own properties of Handy-1.Handy.HeaderBar

    static name: string
    static $gtype: GObject.GType<HeaderBar>

    // Constructors of Handy-1.Handy.HeaderBar

    constructor(config?: HeaderBar.ConstructorProperties) 
    /**
     * Creates a new `HdyHeaderBar`.
     * @constructor 
     * @returns the newly created `HdyHeaderBar`.
     */
    constructor() 
    /**
     * Creates a new `HdyHeaderBar`.
     * @constructor 
     * @returns the newly created `HdyHeaderBar`.
     */
    static new(): HeaderBar
    _init(config?: HeaderBar.ConstructorProperties): void
}

module HeaderGroup {

    // Signal callback interfaces

    /**
     * Signal callback interface for `update-decoration-layouts`
     */
    interface UpdateDecorationLayoutsSignalCallback {
        ($obj: HeaderGroup): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.HeaderGroup

        /**
         * Whether the elements of the group should all receive the full decoration.
         * 
         * This is useful in conjunction with [property`Leaflet:`folded] when the
         * leaflet contains the header bars of the group, as you want them all to
         * display the complete decoration when the leaflet is folded.
         */
        decorate_all?: boolean | null
    }

}

interface HeaderGroup extends Gtk.Buildable {

    // Own properties of Handy-1.Handy.HeaderGroup

    /**
     * Whether the elements of the group should all receive the full decoration.
     * 
     * This is useful in conjunction with [property`Leaflet:`folded] when the
     * leaflet contains the header bars of the group, as you want them all to
     * display the complete decoration when the leaflet is folded.
     */
    decorate_all: boolean

    // Owm methods of Handy-1.Handy.HeaderGroup

    /**
     * Adds `header_bar` to `self`.
     * 
     * When the widget is destroyed or no longer referenced elsewhere, it will be
     * removed from the header group.
     * @param header_bar the header bar to add
     */
    add_gtk_header_bar(header_bar: Gtk.HeaderBar): void
    /**
     * Adds `header_bar` to `self`.
     * 
     * When the widget is destroyed or no longer referenced elsewhere, it will be
     * removed from the header group.
     * @param header_bar the header bar to add
     */
    add_header_bar(header_bar: HeaderBar): void
    /**
     * Adds `header_group` to `self`.
     * 
     * When the nested group is no longer referenced elsewhere, it will be removed
     * from the header group.
     * @param header_group the header group to add
     */
    add_header_group(header_group: HeaderGroup): void
    /**
     * Returns the list of children associated with `self`.
     * @returns the list of   children
     */
    get_children(): HeaderGroupChild[]
    /**
     * Gets whether the elements of the group should all receive the full
     * decoration.
     * @returns whether the elements of the group should all receive the full   decoration
     */
    get_decorate_all(): boolean
    /**
     * Removes `child` from `self`.
     * @param child the header group child to remove
     */
    remove_child(child: HeaderGroupChild): void
    /**
     * Removes `header_bar` from `self`.
     * @param header_bar the header bar to remove
     */
    remove_gtk_header_bar(header_bar: Gtk.HeaderBar): void
    /**
     * Removes `header_bar` from `self`.
     * @param header_bar the header bar to remove
     */
    remove_header_bar(header_bar: HeaderBar): void
    /**
     * Removes a nested `HdyHeaderGroup` from `self`.
     * @param header_group the header group to remove
     */
    remove_header_group(header_group: HeaderGroup): void
    /**
     * Sets whether the elements of the group should all receive the full
     * decoration.
     * @param decorate_all whether the elements of the group should all receive the full   decoration
     */
    set_decorate_all(decorate_all: boolean): void

    // Own signals of Handy-1.Handy.HeaderGroup

    connect(sigName: "update-decoration-layouts", callback: HeaderGroup.UpdateDecorationLayoutsSignalCallback): number
    connect_after(sigName: "update-decoration-layouts", callback: HeaderGroup.UpdateDecorationLayoutsSignalCallback): number
    emit(sigName: "update-decoration-layouts", ...args: any[]): void

    // Class property signals of Handy-1.Handy.HeaderGroup

    connect(sigName: "notify::decorate-all", callback: (($obj: HeaderGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorate-all", callback: (($obj: HeaderGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorate-all", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object handling composite title bars.
 * 
 * The `HdyHeaderGroup` object handles the header bars of a composite title bar.
 * It splits the window decoration across the header bars, giving the left side
 * of the decorations to the leftmost header bar, and the right side of the
 * decorations to the rightmost header bar. See
 * [method`HeaderBar`.set_decoration_layout].
 * 
 * The [property`HeaderGroup:`decorate-all] property can be used in conjunction
 * with [property`Leaflet:`folded] when the title bar is split across the pages
 * of a [class`Leaflet]` to automatically display the decorations on all the
 * pages when the leaflet is folded.
 * 
 * You can nest header groups, which is convenient when you nest leaflets too:
 * 
 * ```xml
 * <object class="HdyHeaderGroup" id="inner_header_group">
 *   <property name="decorate-all" bind-source="inner_leaflet" bind-property="folded" bind-flags="sync-create"/>
 *   <headerbars>
 *     <headerbar name="inner_header_bar_1"/>
 *     <headerbar name="inner_header_bar_2"/>
 *   </headerbars>
 * </object>
 * <object class="HdyHeaderGroup" id="outer_header_group">
 *   <property name="decorate-all" bind-source="outer_leaflet" bind-property="folded" bind-flags="sync-create"/>
 *   <headerbars>
 *     <headerbar name="inner_header_group"/>
 *     <headerbar name="outer_header_bar"/>
 *   </headerbars>
 * </object>
 * ```
 * @class 
 */
class HeaderGroup extends GObject.Object {

    // Own properties of Handy-1.Handy.HeaderGroup

    static name: string
    static $gtype: GObject.GType<HeaderGroup>

    // Constructors of Handy-1.Handy.HeaderGroup

    constructor(config?: HeaderGroup.ConstructorProperties) 
    /**
     * Creates a new `HdyHeaderGroup`.
     * @constructor 
     * @returns the newly created `HdyHeaderGroup`
     */
    constructor() 
    /**
     * Creates a new `HdyHeaderGroup`.
     * @constructor 
     * @returns the newly created `HdyHeaderGroup`
     */
    static new(): HeaderGroup
    _init(config?: HeaderGroup.ConstructorProperties): void
}

module HeaderGroupChild {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface HeaderGroupChild {

    // Owm methods of Handy-1.Handy.HeaderGroupChild

    /**
     * Gets the child type.
     * @returns the child type
     */
    get_child_type(): HeaderGroupChildType
    /**
     * Gets the child [class`Gtk`.HeaderBar].
     * 
     * Use [method`HeaderGroupChild`.get_child_type] to check the child type.
     * @returns the child header bar
     */
    get_gtk_header_bar(): Gtk.HeaderBar
    /**
     * Gets the child [class`HeaderBar]`.
     * 
     * Use [method`HeaderGroupChild`.get_child_type] to check the child type.
     * @returns the child headerbar
     */
    get_header_bar(): HeaderBar
    /**
     * Gets the child [class`HeaderGroup]`.
     * 
     * Use [method`HeaderGroupChild`.get_child_type] to check the child type.
     * @returns the child header bar
     */
    get_header_group(): HeaderGroup

    // Class property signals of Handy-1.Handy.HeaderGroupChild

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A child object for [class`HeaderGroup]`.
 * @class 
 */
class HeaderGroupChild extends GObject.Object {

    // Own properties of Handy-1.Handy.HeaderGroupChild

    static name: string
    static $gtype: GObject.GType<HeaderGroupChild>

    // Constructors of Handy-1.Handy.HeaderGroupChild

    constructor(config?: HeaderGroupChild.ConstructorProperties) 
    _init(config?: HeaderGroupChild.ConstructorProperties): void
}

module Keypad {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Keypad

        /**
         * The amount of space between two consecutive columns.
         */
        column_spacing?: number | null
        /**
         * The widget for the lower end corner of `self`.
         */
        end_action?: Gtk.Widget | null
        /**
         * The entry widget connected to the keypad.
         * 
         * The entry will block any input not possible to type with the keypad.
         */
        entry?: Gtk.Entry | null
        /**
         * Whether standard letters should be displayed below the digits on the
         * buttons.
         */
        letters_visible?: boolean | null
        /**
         * The amount of space between two consecutive rows.
         */
        row_spacing?: number | null
        /**
         * The widget for the lower start corner of `self`.
         */
        start_action?: Gtk.Widget | null
        /**
         * Whether to display symbols.
         * 
         * This includes hash and asterisk buttons, and the plus symbol at the bottom
         * of its 0 button.
         */
        symbols_visible?: boolean | null
    }

}

interface Keypad extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.Keypad

    /**
     * The amount of space between two consecutive columns.
     */
    column_spacing: number
    /**
     * The widget for the lower end corner of `self`.
     */
    end_action: Gtk.Widget
    /**
     * The entry widget connected to the keypad.
     * 
     * The entry will block any input not possible to type with the keypad.
     */
    entry: Gtk.Entry
    /**
     * Whether standard letters should be displayed below the digits on the
     * buttons.
     */
    letters_visible: boolean
    /**
     * The amount of space between two consecutive rows.
     */
    row_spacing: number
    /**
     * The widget for the lower start corner of `self`.
     */
    start_action: Gtk.Widget
    /**
     * Whether to display symbols.
     * 
     * This includes hash and asterisk buttons, and the plus symbol at the bottom
     * of its 0 button.
     */
    symbols_visible: boolean

    // Own fields of Handy-1.Handy.Keypad

    parent_instance: Gtk.Bin & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.Keypad

    /**
     * Returns the amount of space between the columns of `self`.
     * @returns the column spacing of @self
     */
    get_column_spacing(): number
    /**
     * Gets the widget for the lower right corner (or left, in RTL locales).
     * @returns the end action widget
     */
    get_end_action(): Gtk.Widget | null
    /**
     * Gets the connected entry.
     * @returns the entry set
     */
    get_entry(): Gtk.Entry
    /**
     * Gets whether standard letters are displayed below the digits on the buttons.
     * @returns whether the letters below the digits should be visible
     */
    get_letters_visible(): boolean
    /**
     * Returns the amount of space between the rows of `self`.
     * @returns the row spacing of @self
     */
    get_row_spacing(): number
    /**
     * Gets the widget for the lower left corner (or right, in RTL locales).
     * @returns the start action widget
     */
    get_start_action(): Gtk.Widget | null
    /**
     * Gets whether symbols are displayed.
     * @returns whether symboles are visible
     */
    get_symbols_visible(): boolean
    /**
     * Sets the amount of space between columns of `self`.
     * @param spacing the amount of space to insert between columns
     */
    set_column_spacing(spacing: number): void
    /**
     * Sets the widget for the lower right corner (or left, in RTL locales).
     * @param end_action the end action widget
     */
    set_end_action(end_action: Gtk.Widget | null): void
    /**
     * Binds `entry` to `self`.
     * @param entry an entry
     */
    set_entry(entry: Gtk.Entry | null): void
    /**
     * Sets whether standard letters are displayed below the digits on the buttons.
     * @param letters_visible whether the letters below the digits should be visible
     */
    set_letters_visible(letters_visible: boolean): void
    /**
     * Sets the amount of space between rows of `self`.
     * @param spacing the amount of space to insert between rows
     */
    set_row_spacing(spacing: number): void
    /**
     * Sets the widget for the lower left corner (or right, in RTL locales).
     * @param start_action the start action widget
     */
    set_start_action(start_action: Gtk.Widget | null): void
    /**
     * Sets whether standard letters are displayed below the digits on the buttons.
     * @param symbols_visible whether the hash, plus, and asterisk symbols should be visible
     */
    set_symbols_visible(symbols_visible: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.Keypad

    connect(sigName: "notify::column-spacing", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::end-action", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-action", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-action", ...args: any[]): void
    connect(sigName: "notify::entry", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry", ...args: any[]): void
    connect(sigName: "notify::letters-visible", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letters-visible", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::letters-visible", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::start-action", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-action", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-action", ...args: any[]): void
    connect(sigName: "notify::symbols-visible", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbols-visible", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symbols-visible", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Keypad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A keypad for dialing numbers
 * 
 * The `HdyKeypad` widget is a keypad for entering numbers such as phone numbers
 * or PIN codes.
 * 
 * ## CSS nodes
 * 
 * `HdyKeypad` has a single CSS node with name `keypad`.
 * @class 
 */
class Keypad extends Gtk.Bin {

    // Own properties of Handy-1.Handy.Keypad

    static name: string
    static $gtype: GObject.GType<Keypad>

    // Constructors of Handy-1.Handy.Keypad

    constructor(config?: Keypad.ConstructorProperties) 
    /**
     * Creates a new `HdyKeypad`.
     * @constructor 
     * @param symbols_visible whether the hash, plus, and asterisk symbols should be visible
     * @param letters_visible whether the letters below the digits should be visible
     * @returns the newly created `HdyKeypad`
     */
    constructor(symbols_visible: boolean, letters_visible: boolean) 
    /**
     * Creates a new `HdyKeypad`.
     * @constructor 
     * @param symbols_visible whether the hash, plus, and asterisk symbols should be visible
     * @param letters_visible whether the letters below the digits should be visible
     * @returns the newly created `HdyKeypad`
     */
    static new(symbols_visible: boolean, letters_visible: boolean): Keypad
    _init(config?: Keypad.ConstructorProperties): void
}

module Leaflet {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Swipeable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Leaflet

        /**
         * Whether swipe gestures allow switching to the previous navigatable child.
         */
        can_swipe_back?: boolean | null
        /**
         * Whether swipe gestures allow switching to the next navigatable child.
         */
        can_swipe_forward?: boolean | null
        /**
         * The child transition animation duration, in milliseconds.
         */
        child_transition_duration?: number | null
        /**
         * Whether to allocate the same width for all children when folded.
         */
        hhomogeneous_folded?: boolean | null
        /**
         * Whether to allocate the same width for all children when unfolded.
         */
        hhomogeneous_unfolded?: boolean | null
        /**
         * Whether the size should smoothly change when changing between children.
         */
        interpolate_size?: boolean | null
        /**
         * The mode transition animation duration, in milliseconds.
         */
        mode_transition_duration?: number | null
        /**
         * The animation type used for transitions between modes and children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         */
        transition_type?: LeafletTransitionType | null
        /**
         * Whether to allocates the same height for all children when folded.
         */
        vhomogeneous_folded?: boolean | null
        /**
         * Whether to allocate the same height for all children when unfolded.
         */
        vhomogeneous_unfolded?: boolean | null
        /**
         * The widget currently visible when the leaflet is folded.
         * 
         * The transition is determined by [property`Leaflet:`transition-type] and
         * [property`Leaflet:`child-transition-duration]. The transition can be
         * cancelled by the user, in which case visible child will change back to the
         * previously visible child.
         */
        visible_child?: Gtk.Widget | null
        /**
         * The name of the widget currently visible when the leaflet is folded.
         * 
         * See [property`Leaflet:`visible-child].
         */
        visible_child_name?: string | null
    }

}

interface Leaflet extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {

    // Own properties of Handy-1.Handy.Leaflet

    /**
     * Whether swipe gestures allow switching to the previous navigatable child.
     */
    can_swipe_back: boolean
    /**
     * Whether swipe gestures allow switching to the next navigatable child.
     */
    can_swipe_forward: boolean
    /**
     * The child transition animation duration, in milliseconds.
     */
    child_transition_duration: number
    /**
     * Whether a child transition is currently running.
     */
    readonly child_transition_running: boolean
    /**
     * Whether the leaflet is folded.
     * 
     * The leaflet will be folded if the size allocated to it is smaller than the
     * sum of the natural size of its children, it will be unfolded otherwise.
     */
    readonly folded: boolean
    /**
     * Whether to allocate the same width for all children when folded.
     */
    hhomogeneous_folded: boolean
    /**
     * Whether to allocate the same width for all children when unfolded.
     */
    hhomogeneous_unfolded: boolean
    /**
     * Whether the size should smoothly change when changing between children.
     */
    interpolate_size: boolean
    /**
     * The mode transition animation duration, in milliseconds.
     */
    mode_transition_duration: number
    /**
     * The animation type used for transitions between modes and children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the mode or child that is about
     * to become current.
     */
    transition_type: LeafletTransitionType
    /**
     * Whether to allocates the same height for all children when folded.
     */
    vhomogeneous_folded: boolean
    /**
     * Whether to allocate the same height for all children when unfolded.
     */
    vhomogeneous_unfolded: boolean
    /**
     * The widget currently visible when the leaflet is folded.
     * 
     * The transition is determined by [property`Leaflet:`transition-type] and
     * [property`Leaflet:`child-transition-duration]. The transition can be
     * cancelled by the user, in which case visible child will change back to the
     * previously visible child.
     */
    visible_child: Gtk.Widget
    /**
     * The name of the widget currently visible when the leaflet is folded.
     * 
     * See [property`Leaflet:`visible-child].
     */
    visible_child_name: string | null

    // Own fields of Handy-1.Handy.Leaflet

    parent_instance: Gtk.Container & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.Leaflet

    /**
     * Finds the previous or next navigatable child.
     * 
     * This will be the same widget [method`Leaflet`.navigate] will navigate to.
     * 
     * If there's no child to navigate to, `NULL` will be returned instead.
     * @param direction the direction
     * @returns the previous or next child
     */
    get_adjacent_child(direction: NavigationDirection): Gtk.Widget | null
    /**
     * Gets whether swipe gestures switch to the previous navigatable child.
     * @returns `TRUE` if back swipe is enabled
     */
    get_can_swipe_back(): boolean
    /**
     * Gets whether swipe gestures switch to the next navigatable child.
     * @returns `TRUE` if forward swipe is enabled
     */
    get_can_swipe_forward(): boolean
    /**
     * Finds the child of `self` with the name given as the argument.
     * 
     * Returns `NULL` if there is no child with this name.
     * @param name the name of the child to find
     * @returns the requested child of @self
     */
    get_child_by_name(name: string | null): Gtk.Widget | null
    /**
     * Gets the amount of time that transitions between children will take.
     * @returns the child transition duration, in milliseconds
     */
    get_child_transition_duration(): number
    /**
     * Returns whether `self` is currently in a transition from one page to another.
     * @returns whether a transition is currently running
     */
    get_child_transition_running(): boolean
    /**
     * Gets whether `self` is folded.
     * @returns whether @self is folded
     */
    get_folded(): boolean
    /**
     * Gets whether `self` is homogeneous for the given fold and orientation.
     * @param folded the fold
     * @param orientation the orientation
     * @returns whether @self is homogeneous for the given fold and orientation
     */
    get_homogeneous(folded: boolean, orientation: Gtk.Orientation): boolean
    /**
     * Gets whether to interpolate between the sizes of children on page switches.
     * @returns `TRUE` if child sizes are interpolated
     */
    get_interpolate_size(): boolean
    /**
     * Gets the amount of time that transitions between modes in `self` will take.
     * @returns the mode transition duration, in milliseconds
     */
    get_mode_transition_duration(): number
    /**
     * Gets the animation type that will be used for transitions between modes and
     * children.
     * @returns the current transition type of @self
     */
    get_transition_type(): LeafletTransitionType
    /**
     * Gets the visible child widget.
     * @returns the visible child widget
     */
    get_visible_child(): Gtk.Widget
    /**
     * Gets the name of the currently visible child widget.
     * @returns the name of the visible child
     */
    get_visible_child_name(): string | null
    /**
     * Inserts `child` in the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, inserts `child` at the first position.
     * @param child the widget to insert
     * @param sibling the sibling after which to insert `child`
     */
    insert_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Navigates to the previous or next navigatable child.
     * 
     * The switch is similar to performing a swipe gesture to go in `direction`.
     * @param direction the direction
     * @returns whether the visible child was changed
     */
    navigate(direction: NavigationDirection): boolean
    /**
     * Inserts `child` at the first position in `self`.
     * @param child the widget to prepend
     */
    prepend(child: Gtk.Widget): void
    /**
     * Moves `child` to the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, move `child` to the first position.
     * @param child the widget to move, must be a child of `self`
     * @param sibling the sibling to move `child` after
     */
    reorder_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Sets whether swipe gestures switch to the previous navigatable child.
     * @param can_swipe_back the new value
     */
    set_can_swipe_back(can_swipe_back: boolean): void
    /**
     * Sets whether swipe gestures switch to the next navigatable child.
     * @param can_swipe_forward the new value
     */
    set_can_swipe_forward(can_swipe_forward: boolean): void
    /**
     * Sets the duration that transitions between children in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    set_child_transition_duration(duration: number): void
    /**
     * Sets whether to be homogeneous for the given fold and orientation.
     * 
     * If it is homogeneous, the [class`Leaflet]` will request the same
     * width or height for all its children depending on the orientation. If it
     * isn't and it is folded, the leaflet may change width or height when a
     * different child becomes visible.
     * @param folded the fold
     * @param orientation the orientation
     * @param homogeneous `TRUE` to make `self` homogeneous
     */
    set_homogeneous(folded: boolean, orientation: Gtk.Orientation, homogeneous: boolean): void
    /**
     * Sets whether `self` will interpolate its size when changing the visible child.
     * 
     * If the [property`Leaflet:`interpolate-size] property is set to `TRUE`, `self`
     * will interpolate its size between the current one and the one it'll take
     * after changing the visible child, according to the set transition duration.
     * @param interpolate_size the new value
     */
    set_interpolate_size(interpolate_size: boolean): void
    /**
     * Sets the duration that transitions between modes in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    set_mode_transition_duration(duration: number): void
    /**
     * Sets the animation type that will be used for transitions between modes and
     * children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the mode or child that is about to
     * become current.
     * @param transition the new transition type
     */
    set_transition_type(transition: LeafletTransitionType): void
    /**
     * Sets the currently visible widget when the leaflet is folded.
     * @param visible_child the new child
     */
    set_visible_child(visible_child: Gtk.Widget): void
    /**
     * Makes the child with the name `name` visible.
     * 
     * See [method`Leaflet`.set_visible_child] for more details.
     * @param name the name of a child
     */
    set_visible_child_name(name: string | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.Leaflet

    connect(sigName: "notify::can-swipe-back", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-swipe-back", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-swipe-back", ...args: any[]): void
    connect(sigName: "notify::can-swipe-forward", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-swipe-forward", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-swipe-forward", ...args: any[]): void
    connect(sigName: "notify::child-transition-duration", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transition-duration", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transition-duration", ...args: any[]): void
    connect(sigName: "notify::child-transition-running", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transition-running", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transition-running", ...args: any[]): void
    connect(sigName: "notify::folded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: "notify::hhomogeneous-folded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hhomogeneous-folded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hhomogeneous-folded", ...args: any[]): void
    connect(sigName: "notify::hhomogeneous-unfolded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hhomogeneous-unfolded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hhomogeneous-unfolded", ...args: any[]): void
    connect(sigName: "notify::interpolate-size", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpolate-size", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interpolate-size", ...args: any[]): void
    connect(sigName: "notify::mode-transition-duration", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode-transition-duration", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode-transition-duration", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::vhomogeneous-folded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vhomogeneous-folded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vhomogeneous-folded", ...args: any[]): void
    connect(sigName: "notify::vhomogeneous-unfolded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vhomogeneous-unfolded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vhomogeneous-unfolded", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
    connect(sigName: "notify::visible-child-name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child-name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child-name", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An adaptive container acting like a box or a stack.
 * 
 * The `HdyLeaflet` widget can display its children like a [class`Gtk`.Box] does
 * or like a [class`Gtk`.Stack] does, adapting to size changes by switching
 * between the two modes.
 * 
 * When there is enough space the children are displayed side by side, otherwise
 * only one is displayed and the leaflet is said to be “folded”. The threshold
 * is dictated by the preferred minimum sizes of the children. When a leaflet is
 * folded, the children can be navigated using swipe gestures.
 * 
 * The “over” and “under” transition types stack the children one on top of the
 * other, while the “slide” transition puts the children side by side. While
 * navigating to a child on the side or below can be performed by swiping the
 * current child away, navigating to an upper child requires dragging it from
 * the edge where it resides. This doesn't affect non-dragging swipes.
 * 
 * The “over” and “under” transitions can draw their shadow on top of the
 * window's transparent areas, like the rounded corners. This is a side-effect
 * of allowing shadows to be drawn on top of OpenGL areas. It can be mitigated
 * by using [class`Window]` or [class`ApplicationWindow]` as they will crop
 * anything drawn beyond the rounded corners.
 * 
 * The child property `navigatable` can be set on `HdyLeaflet` children to
 * determine whether they can be navigated to when folded. If `FALSE`, the child
 * will be ignored by [method`Leaflet`.get_adjacent_child],
 * [method`Leaflet`.navigate], and swipe gestures. This can be used used to
 * prevent switching to widgets like separators.
 * 
 * ## CSS nodes
 * 
 * `HdyLeaflet` has a single CSS node with name `leaflet`. The node will get the
 * style classes `.folded` when it is folded, `.unfolded` when it's not, or none
 * if it didn't compute its fold yet.
 * @class 
 */
class Leaflet extends Gtk.Container {

    // Own properties of Handy-1.Handy.Leaflet

    static name: string
    static $gtype: GObject.GType<Leaflet>

    // Constructors of Handy-1.Handy.Leaflet

    constructor(config?: Leaflet.ConstructorProperties) 
    /**
     * Creates a new `HdyLeaflet`.
     * @constructor 
     * @returns the newly created `HdyLeaflet`
     */
    constructor() 
    /**
     * Creates a new `HdyLeaflet`.
     * @constructor 
     * @returns the newly created `HdyLeaflet`
     */
    static new(): Leaflet
    _init(config?: Leaflet.ConstructorProperties): void
}

module PreferencesGroup {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.PreferencesGroup

        /**
         * The description for this group of preferences.
         */
        description?: string | null
        /**
         * The title for this group of preferences.
         */
        title?: string | null
        /**
         * Whether to use markup for the title and description.
         */
        use_markup?: boolean | null
    }

}

interface PreferencesGroup extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.PreferencesGroup

    /**
     * The description for this group of preferences.
     */
    description: string | null
    /**
     * The title for this group of preferences.
     */
    title: string | null
    /**
     * Whether to use markup for the title and description.
     */
    use_markup: boolean

    // Own fields of Handy-1.Handy.PreferencesGroup

    parent_instance: Gtk.Bin & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.PreferencesGroup

    get_description(): string | null
    /**
     * Gets the title of `self`.
     * @returns the title of @self
     */
    get_title(): string | null
    /**
     * Gets whether `self` uses markup for the title and description.
     * @returns whether @self uses markup for its labels
     */
    get_use_markup(): boolean
    /**
     * Sets the description for `self`.
     * @param description the description
     */
    set_description(description: string | null): void
    /**
     * Sets the title for `self`.
     * @param title the title
     */
    set_title(title: string | null): void
    /**
     * Sets whether `self` uses markup for the title and description.
     * @param use_markup whether to use markup
     */
    set_use_markup(use_markup: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.PreferencesGroup

    connect(sigName: "notify::description", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A group of preference rows.
 * 
 * A `HdyPreferencesGroup` represents a group or tightly related preferences,
 * which in turn are represented by [class`PreferencesRow]`.
 * 
 * To summarize the role of the preferences it gathers, a group can have both a
 * title and a description. The title will be used by [class`PreferencesWindow]`
 * to let the user look for a preference.
 * 
 * ## CSS nodes
 * 
 * `HdyPreferencesGroup` has a single CSS node with name `preferencesgroup`.
 * @class 
 */
class PreferencesGroup extends Gtk.Bin {

    // Own properties of Handy-1.Handy.PreferencesGroup

    static name: string
    static $gtype: GObject.GType<PreferencesGroup>

    // Constructors of Handy-1.Handy.PreferencesGroup

    constructor(config?: PreferencesGroup.ConstructorProperties) 
    /**
     * Creates a new `HdyPreferencesGroup`.
     * @constructor 
     * @returns the newly created `HdyPreferencesGroup`
     */
    constructor() 
    /**
     * Creates a new `HdyPreferencesGroup`.
     * @constructor 
     * @returns the newly created `HdyPreferencesGroup`
     */
    static new(): PreferencesGroup
    _init(config?: PreferencesGroup.ConstructorProperties): void
}

module PreferencesPage {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.PreferencesPage

        /**
         * The icon name for this page of preferences.
         */
        icon_name?: string | null
        /**
         * The title for this page of preferences.
         */
        title?: string | null
    }

}

interface PreferencesPage extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.PreferencesPage

    /**
     * The icon name for this page of preferences.
     */
    icon_name: string | null
    /**
     * The title for this page of preferences.
     */
    title: string | null

    // Own fields of Handy-1.Handy.PreferencesPage

    parent_instance: Gtk.Bin & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.PreferencesPage

    /**
     * Gets the icon name for `self`.
     * @returns the icon name for @self
     */
    get_icon_name(): string | null
    /**
     * Gets the title of `self`.
     * @returns the title of the @self
     */
    get_title(): string | null
    /**
     * Sets the icon name for `self`.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the title of `self`.
     * @param title the title of the page
     */
    set_title(title: string | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.PreferencesPage

    connect(sigName: "notify::icon-name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A page from [class`PreferencesWindow]`.
 * 
 * The `HdyPreferencesPage` widget gathers preferences groups into a single page
 * of a preferences window.
 * 
 * ## CSS nodes
 * 
 * `HdyPreferencesPage` has a single CSS node with name `preferencespage`.
 * @class 
 */
class PreferencesPage extends Gtk.Bin {

    // Own properties of Handy-1.Handy.PreferencesPage

    static name: string
    static $gtype: GObject.GType<PreferencesPage>

    // Constructors of Handy-1.Handy.PreferencesPage

    constructor(config?: PreferencesPage.ConstructorProperties) 
    /**
     * Creates a new `HdyPreferencesPage`.
     * @constructor 
     * @returns the newly created `HdyPreferencesPage`
     */
    constructor() 
    /**
     * Creates a new `HdyPreferencesPage`.
     * @constructor 
     * @returns the newly created `HdyPreferencesPage`
     */
    static new(): PreferencesPage
    _init(config?: PreferencesPage.ConstructorProperties): void
}

module PreferencesRow {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ListBoxRow.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.PreferencesRow

        /**
         * The title of the preference represented by this row.
         */
        title?: string | null
        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         */
        use_underline?: boolean | null
    }

}

interface PreferencesRow extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {

    // Own properties of Handy-1.Handy.PreferencesRow

    /**
     * The title of the preference represented by this row.
     */
    title: string | null
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     */
    use_underline: boolean

    // Own fields of Handy-1.Handy.PreferencesRow

    parent_instance: Gtk.ListBoxRow & Gtk.Bin & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.PreferencesRow

    /**
     * Gets the title of the preference represented by `self`.
     * @returns the title of the preference represented   by @self
     */
    get_title(): string | null
    /**
     * Gets whether an embedded underline in the title indicates a mnemonic.
     * @returns whether an embedded underline in the title indicates a mnemonic
     */
    get_use_underline(): boolean
    /**
     * Sets the title of the preference represented by `self`.
     * @param title the title
     */
    set_title(title: string | null): void
    /**
     * Sets whether an embedded underline in the title indicates a mnemonic.
     * @param use_underline `TRUE` if underlines in the text indicate mnemonics
     */
    set_use_underline(use_underline: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.PreferencesRow

    connect(sigName: "notify::title", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to present preferences.
 * 
 * The `HdyPreferencesRow` widget has a title that [class`PreferencesWindow]`
 * will use to let the user look for a preference. It doesn't present the title
 * in any way and lets you present the preference as you please.
 * 
 * [class`ActionRow]` and its derivatives are convenient to use as preference
 * rows as they take care of presenting the preference's title while letting you
 * compose the inputs of the preference around it.
 * @class 
 */
class PreferencesRow extends Gtk.ListBoxRow {

    // Own properties of Handy-1.Handy.PreferencesRow

    static name: string
    static $gtype: GObject.GType<PreferencesRow>

    // Constructors of Handy-1.Handy.PreferencesRow

    constructor(config?: PreferencesRow.ConstructorProperties) 
    /**
     * Creates a new `HdyPreferencesRow`.
     * @constructor 
     * @returns the newly created `HdyPreferencesRow`
     */
    constructor() 
    /**
     * Creates a new `HdyPreferencesRow`.
     * @constructor 
     * @returns the newly created `HdyPreferencesRow`
     */
    static new(): PreferencesRow
    _init(config?: PreferencesRow.ConstructorProperties): void
}

module PreferencesWindow {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Window.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.PreferencesWindow

        /**
         * Whether the window allows closing the subpage via a swipe gesture.
         */
        can_swipe_back?: boolean | null
        /**
         * Whether search is enabled.
         */
        search_enabled?: boolean | null
    }

}

interface PreferencesWindow extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.PreferencesWindow

    /**
     * Whether the window allows closing the subpage via a swipe gesture.
     */
    can_swipe_back: boolean
    /**
     * Whether search is enabled.
     */
    search_enabled: boolean

    // Own fields of Handy-1.Handy.PreferencesWindow

    parent_instance: Window & Gtk.Window & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.PreferencesWindow

    /**
     * Closes the current subpage.
     * 
     * If there is no presented subpage, this does nothing.
     */
    close_subpage(): void
    /**
     * Gets whether swipe gestures allow switching from a subpage to the
     * preferences.
     * @returns `TRUE` if back swipe is enabled
     */
    get_can_swipe_back(): boolean
    /**
     * Gets whether search is enabled for `self`.
     * @returns whether search is enabled for @self
     */
    get_search_enabled(): boolean
    /**
     * Sets `subpage` as the window's subpage and opens it.
     * 
     * The transition can be cancelled by the user, in which case visible child will
     * change back to the previously visible child.
     * @param subpage the subpage
     */
    present_subpage(subpage: Gtk.Widget): void
    /**
     * Sets whether swipe gestures allow switching from a subpage to the
     * preferences.
     * @param can_swipe_back the new value
     */
    set_can_swipe_back(can_swipe_back: boolean): void
    /**
     * Sets whether search is enabled for `self`.
     * @param search_enabled `TRUE` to enable search, `FALSE` to disable it
     */
    set_search_enabled(search_enabled: boolean): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.PreferencesWindow

    connect(sigName: "notify::can-swipe-back", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-swipe-back", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-swipe-back", ...args: any[]): void
    connect(sigName: "notify::search-enabled", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-enabled", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-enabled", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A window to present an application's preferences.
 * 
 * The `HdyPreferencesWindow` widget presents an application's preferences
 * gathered into pages and groups. The preferences are searchable by the user.
 * 
 * ## CSS nodes
 * 
 * `HdyPreferencesWindow` has a main CSS node with the name `window` and the
 * style class `.preferences`.
 * @class 
 */
class PreferencesWindow extends Window {

    // Own properties of Handy-1.Handy.PreferencesWindow

    static name: string
    static $gtype: GObject.GType<PreferencesWindow>

    // Constructors of Handy-1.Handy.PreferencesWindow

    constructor(config?: PreferencesWindow.ConstructorProperties) 
    /**
     * Creates a new `HdyPreferencesWindow`.
     * @constructor 
     * @returns the newly created `HdyPreferencesWindow`
     */
    constructor() 
    /**
     * Creates a new `HdyPreferencesWindow`.
     * @constructor 
     * @returns the newly created `HdyPreferencesWindow`
     */
    static new(): PreferencesWindow

    // Overloads of new

    /**
     * Creates a new `HdyWindow`.
     * @constructor 
     * @returns the newly created `HdyWindow`
     */
    static new(): Window
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: PreferencesWindow.ConstructorProperties): void
}

module SearchBar {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.SearchBar

        /**
         * Whether the search mode is on and the search bar shown.
         */
        search_mode_enabled?: boolean | null
        /**
         * Whether to show the close button in the toolbar.
         */
        show_close_button?: boolean | null
    }

}

interface SearchBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.SearchBar

    /**
     * Whether the search mode is on and the search bar shown.
     */
    search_mode_enabled: boolean
    /**
     * Whether to show the close button in the toolbar.
     */
    show_close_button: boolean

    // Own fields of Handy-1.Handy.SearchBar

    parent_instance: Gtk.Bin & GObject.InitiallyUnowned

    // Owm methods of Handy-1.Handy.SearchBar

    /**
     * Sets the entry widget passed as the one to be used in this search bar.
     * 
     * The entry should be a descendant of the search bar. This is only required if
     * the entry isn’t the direct child of the search bar (as in our main example).
     * @param entry an entry
     */
    connect_entry(entry: Gtk.Entry): void
    /**
     * Gets whether the search mode is on.
     * @returns whether search mode is toggled on
     */
    get_search_mode(): boolean
    /**
     * Gets whether the close button is shown.
     * @returns whether the close button is shown
     */
    get_show_close_button(): boolean
    /**
     * Handles key press events.
     * 
     * This function should be called when the top-level window which contains the
     * search bar received a key event.
     * 
     * If the key event is handled by the search bar, the bar will be shown, the
     * entry populated with the entered text and `GDK_EVENT_STOP` will be returned.
     * The caller should ensure that events are not propagated further.
     * 
     * If no entry has been connected to the search bar, using
     * [method`SearchBar`.connect_entry], this function will return immediately with
     * a warning.
     * 
     * ## Showing the search bar on key presses
     * 
     * ```c
     * static gboolean
     * on_key_press_event (GtkWidget *widget,
     *                     GdkEvent  *event,
     *                     gpointer   user_data)
     * {
     *   HdySearchBar *bar = HDY_SEARCH_BAR (user_data);
     *   return hdy_search_bar_handle_event (self, event);
     * }
     * 
     * static void
     * create_toplevel (void)
     * {
     *   GtkWidget *window = gtk_window_new (GTK_WINDOW_TOPLEVEL);
     *   GtkWindow *search_bar = hdy_search_bar_new ();
     * 
     *   // Add more widgets to the window...
     * 
     *   g_signal_connect (window,
     *                    "key-press-event",
     *                     G_CALLBACK (on_key_press_event),
     *                     search_bar);
     * }
     * ```
     * @param event a [struct`Gdk`.Event] containing key press events
     * @returns `GDK_EVENT_STOP` if the key press event resulted in text being   entered in the search entry (and revealing the search bar if necessary),   `GDK_EVENT_PROPAGATE` otherwise.
     */
    handle_event(event: Gdk.Event): boolean
    /**
     * Switches the search mode on or off.
     * @param search_mode the new state of the search mode
     */
    set_search_mode(search_mode: boolean): void
    /**
     * Shows or hides the close button.
     * 
     * Applications that already have a “search” toggle button should not show a
     * close button in their search bar, as it duplicates the role of the toggle
     * button.
     * @param visible whether the close button will be shown or not
     */
    set_show_close_button(visible: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.SearchBar

    connect(sigName: "notify::search-mode-enabled", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-mode-enabled", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-close-button", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A toolbar to integrate a search entry with.
 * 
 * `HdySearchBar` is a container made to have a search entry (possibly with
 * additional connex widgets, such as drop-down menus, or buttons) built-in. The
 * search bar would appear when a search is started through typing on the
 * keyboard, or the application’s search mode is toggled on.
 * 
 * For keyboard presses to start a search, events will need to be forwarded from
 * the top-level window that contains the search bar. See
 * [method`SearchBar`.handle_event] for example code. Common shortcuts such as
 * <kbd>Ctrl</kbd>+<kbd>F</kbd> should be handled as an application action, or
 * through the menu items.
 * 
 * You will also need to tell the search bar about which entry you are using as
 * your search entry using [method`SearchBar`.connect_entry]. The following
 * example shows you how to create a more complex search entry.
 * 
 * `HdySearchBar` is very similar to [class`Gtk`.SearchBar], the main difference
 * being that it allows the search entry to fill all the available space. This
 * allows you to control your search entry's width with a [class`Clamp]`.
 * 
 * ## CSS nodes
 * 
 * `HdySearchBar` has a single CSS node with name `searchbar`.
 * @class 
 */
class SearchBar extends Gtk.Bin {

    // Own properties of Handy-1.Handy.SearchBar

    static name: string
    static $gtype: GObject.GType<SearchBar>

    // Constructors of Handy-1.Handy.SearchBar

    constructor(config?: SearchBar.ConstructorProperties) 
    /**
     * Creates a new `HdySearchBar.
     * 
     * You will need to tell it about which widget is going to be your text entry
     * using [method`SearchBar`.connect_entry].
     * @constructor 
     * @returns the newly created `HdySearchBar`
     */
    constructor() 
    /**
     * Creates a new `HdySearchBar.
     * 
     * You will need to tell it about which widget is going to be your text entry
     * using [method`SearchBar`.connect_entry].
     * @constructor 
     * @returns the newly created `HdySearchBar`
     */
    static new(): SearchBar
    _init(config?: SearchBar.ConstructorProperties): void
}

module Squeezer {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Squeezer

        /**
         * Whether all children have the same size for the opposite orientation.
         * 
         * For example, if a squeezer is horizontal and is homogeneous, it will request
         * the same height for all its children. If it isn't, the squeezer may change
         * size when a different child becomes visible.
         */
        homogeneous?: boolean | null
        /**
         * Whether the squeezer interpolates its size when changing the visible child.
         * 
         * If `TRUE`, the squeezer will interpolate its size between the one of the
         * previous visible child and the one of the new visible child, according to
         * the set transition duration and the orientation, e.g. if the squeezer is
         * horizontal, it will interpolate the its height.
         */
        interpolate_size?: boolean | null
        /**
         * The animation duration, in milliseconds.
         */
        transition_duration?: number | null
        /**
         * The type of animation used for transitions between children.
         * 
         * Available types include various kinds of fades and slides.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         */
        transition_type?: SqueezerTransitionType | null
        /**
         * The horizontal alignment, from 0 (start) to 1 (end).
         * 
         * The xalign property determines the horizontal alignment of the children
         * inside the squeezer's size allocation. Compare this to
         * [property`Gtk`.Widget:halign], which determines how the squeezer's size
         * allocation is positioned in the space available for the squeezer.
         * 
         * This will affect the position of children too wide to fit in the squeezer
         * as they are fading out.
         */
        xalign?: number | null
        /**
         * The vertical alignment, from 0 (start) to 1 (end).
         * 
         * The yalign property determines the vertical alignment of the children
         * inside the squeezer's size allocation. Compare this to
         * [property`Gtk`.Widget:valign], which determines how the squeezer's size
         * allocation is positioned in the space available for the squeezer.
         * 
         * This will affect the position of children too tall to fit in the squeezer
         * as they are fading out.
         */
        yalign?: number | null
    }

}

interface Squeezer extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Handy-1.Handy.Squeezer

    /**
     * Whether all children have the same size for the opposite orientation.
     * 
     * For example, if a squeezer is horizontal and is homogeneous, it will request
     * the same height for all its children. If it isn't, the squeezer may change
     * size when a different child becomes visible.
     */
    homogeneous: boolean
    /**
     * Whether the squeezer interpolates its size when changing the visible child.
     * 
     * If `TRUE`, the squeezer will interpolate its size between the one of the
     * previous visible child and the one of the new visible child, according to
     * the set transition duration and the orientation, e.g. if the squeezer is
     * horizontal, it will interpolate the its height.
     */
    interpolate_size: boolean
    /**
     * The animation duration, in milliseconds.
     */
    transition_duration: number
    /**
     * Whether a transition is currently running.
     */
    readonly transition_running: boolean
    /**
     * The type of animation used for transitions between children.
     * 
     * Available types include various kinds of fades and slides.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the child that is about to become
     * current.
     */
    transition_type: SqueezerTransitionType
    /**
     * The currently visible child.
     */
    readonly visible_child: Gtk.Widget
    /**
     * The horizontal alignment, from 0 (start) to 1 (end).
     * 
     * The xalign property determines the horizontal alignment of the children
     * inside the squeezer's size allocation. Compare this to
     * [property`Gtk`.Widget:halign], which determines how the squeezer's size
     * allocation is positioned in the space available for the squeezer.
     * 
     * This will affect the position of children too wide to fit in the squeezer
     * as they are fading out.
     */
    xalign: number
    /**
     * The vertical alignment, from 0 (start) to 1 (end).
     * 
     * The yalign property determines the vertical alignment of the children
     * inside the squeezer's size allocation. Compare this to
     * [property`Gtk`.Widget:valign], which determines how the squeezer's size
     * allocation is positioned in the space available for the squeezer.
     * 
     * This will affect the position of children too tall to fit in the squeezer
     * as they are fading out.
     */
    yalign: number

    // Owm methods of Handy-1.Handy.Squeezer

    /**
     * Gets whether `child` is enabled.
     * 
     * See [method`Squeezer`.set_child_enabled].
     * @param child a child of `self`
     * @returns whether @child is enabled
     */
    get_child_enabled(child: Gtk.Widget): boolean
    /**
     * Gets whether `self` is homogeneous.
     * @returns whether @self is homogeneous
     */
    get_homogeneous(): boolean
    /**
     * Gets whether `self` should interpolate its size on visible child change.
     * @returns whether @self interpolates its size on visible child change
     */
    get_interpolate_size(): boolean
    /**
     * Gets the amount of time that transitions between children will take.
     * @returns the transition duration, in milliseconds
     */
    get_transition_duration(): number
    /**
     * Gets whether a transition is currently running for `self`.
     * @returns whether a transition is currently running
     */
    get_transition_running(): boolean
    /**
     * Gets the animation type that will be used for transitions between children.
     * @returns the current transition type of @self
     */
    get_transition_type(): SqueezerTransitionType
    /**
     * Gets the currently visible child of `self`.
     * @returns the visible child
     */
    get_visible_child(): Gtk.Widget | null
    /**
     * Gets the horizontal alignment.
     * @returns the xalign property
     */
    get_xalign(): number
    /**
     * Gets the vertical alignment.
     * @returns the yalign property
     */
    get_yalign(): number
    /**
     * Sets whether `child` is enabled.
     * 
     * If a child is disabled, it will be ignored when looking for the child fitting
     * the available size best. This allows to programmatically and prematurely hide
     * a child of `self` even if it fits in the available space.
     * 
     * This can be used e.g. to ensure a certain child is hidden below a certain
     * window width, or any other constraint you find suitable.
     * @param child a child of `self`
     * @param enabled whether to enable the child
     */
    set_child_enabled(child: Gtk.Widget, enabled: boolean): void
    /**
     * Sets whether all children have the same size for the opposite orientation.
     * @param homogeneous `TRUE` to make `self` homogeneous
     */
    set_homogeneous(homogeneous: boolean): void
    /**
     * Sets whether `self` should interpolate its size on visible child change.
     * @param interpolate_size `TRUE` to interpolate the size
     */
    set_interpolate_size(interpolate_size: boolean): void
    /**
     * Sets the duration that transitions between children in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    set_transition_duration(duration: number): void
    /**
     * Sets the animation type that will be used for transitions between children.
     * @param transition the new transition type
     */
    set_transition_type(transition: SqueezerTransitionType): void
    /**
     * Sets the horizontal alignment.
     * @param xalign the new xalign value, between 0 and 1
     */
    set_xalign(xalign: number): void
    /**
     * Sets the vertical alignment.
     * @param yalign the new yalign value, between 0 and 1
     */
    set_yalign(yalign: number): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.Squeezer

    connect(sigName: "notify::homogeneous", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::interpolate-size", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpolate-size", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interpolate-size", ...args: any[]): void
    connect(sigName: "notify::transition-duration", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-duration", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-duration", ...args: any[]): void
    connect(sigName: "notify::transition-running", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-running", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-running", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A best fit container.
 * 
 * The `HdySqueezer` widget is a container which only shows the first of its
 * children that fits in the available size. It is convenient to offer different
 * widgets to represent the same data with different levels of detail, making
 * the widget seem to squeeze itself to fit in the available space.
 * 
 * Transitions between children can be animated as fades. This can be controlled
 * with [method`Squeezer`.set_transition_type].
 * 
 * ## CSS nodes
 * 
 * `HdySqueezer` has a single CSS node with name `squeezer`.
 * @class 
 */
class Squeezer extends Gtk.Container {

    // Own properties of Handy-1.Handy.Squeezer

    static name: string
    static $gtype: GObject.GType<Squeezer>

    // Constructors of Handy-1.Handy.Squeezer

    constructor(config?: Squeezer.ConstructorProperties) 
    /**
     * Creates a new `HdySqueezer`.
     * @constructor 
     * @returns the newly created `HdySqueezer`
     */
    constructor() 
    /**
     * Creates a new `HdySqueezer`.
     * @constructor 
     * @returns the newly created `HdySqueezer`
     */
    static new(): Squeezer
    _init(config?: Squeezer.ConstructorProperties): void
}

module StatusPage {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.StatusPage

        /**
         * The description to be displayed below the title.
         */
        description?: string | null
        /**
         * The name of the icon to be used.
         */
        icon_name?: string | null
        /**
         * The title to be displayed below the icon.
         */
        title?: string | null
    }

}

interface StatusPage extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.StatusPage

    /**
     * The description to be displayed below the title.
     */
    description: string | null
    /**
     * The name of the icon to be used.
     */
    icon_name: string | null
    /**
     * The title to be displayed below the icon.
     */
    title: string | null

    // Owm methods of Handy-1.Handy.StatusPage

    /**
     * Gets the description for `self`.
     * @returns the description for @self
     */
    get_description(): string | null
    /**
     * Gets the icon name for `self`.
     * @returns the icon name for @self
     */
    get_icon_name(): string | null
    /**
     * Gets the title for `self`.
     * @returns the title for @self
     */
    get_title(): string | null
    /**
     * Sets the description for `self`.
     * @param description the description
     */
    set_description(description: string | null): void
    /**
     * Sets the icon name for `self`.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the title for `self`.
     * @param title the title
     */
    set_title(title: string | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.StatusPage

    connect(sigName: "notify::description", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A page used for empty/error states and similar use-cases.
 * 
 * The `HdyStatusPage` widget can have an icon, a title, a description and a
 * custom widget which is displayed below them.
 * 
 * ## CSS nodes
 * 
 * `HdyStatusPage` has a main CSS node with name `statuspage`.
 * @class 
 */
class StatusPage extends Gtk.Bin {

    // Own properties of Handy-1.Handy.StatusPage

    static name: string
    static $gtype: GObject.GType<StatusPage>

    // Constructors of Handy-1.Handy.StatusPage

    constructor(config?: StatusPage.ConstructorProperties) 
    /**
     * Creates a new `HdyStatusPage`.
     * @constructor 
     * @returns the newly created `HdyStatusPage`
     */
    constructor() 
    /**
     * Creates a new `HdyStatusPage`.
     * @constructor 
     * @returns the newly created `HdyStatusPage`
     */
    static new(): StatusPage
    _init(config?: StatusPage.ConstructorProperties): void
}

module StyleManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.StyleManager

        /**
         * The requested application color scheme.
         * 
         * The effective appearance will be decided based on the application color
         * scheme and the system preferred color scheme. The
         * [property`StyleManager:`dark] property can be used to query the current
         * effective appearance.
         * 
         * The `HDY_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
         * using light appearance unless the system prefers dark colors. This is the
         * default value.
         * 
         * The `HDY_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
         * using dark appearance, but can still switch to the light appearance if the
         * system can prefers it, for example, when the high contrast preference is
         * enabled.
         * 
         * The `HDY_COLOR_SCHEME_FORCE_LIGHT` and `HDY_COLOR_SCHEME_FORCE_DARK` values
         * ignore the system preference entirely, they are useful if the application
         * wants to match its UI to its content or to provide a separate color scheme
         * switcher.
         * 
         * If a per-[class`Gdk`.Display] style manager has its color scheme set to
         * `HDY_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
         * default style manager.
         * 
         * For the default style manager, `HDY_COLOR_SCHEME_DEFAULT` is equivalent to
         * `HDY_COLOR_SCHEME_FORCE_LIGHT`.
         * 
         * The [property`StyleManager:`system-supports-color-schemes] property can be
         * used to check if the current environment provides a color scheme
         * dddpreference.
         */
        color_scheme?: ColorScheme | null
        /**
         * The display the style manager is associated with.
         * 
         * The display will be `NULL` for the style manager returned by
         * [func`StyleManager`.get_default].
         */
        display?: Gdk.Display | null
    }

}

interface StyleManager {

    // Own properties of Handy-1.Handy.StyleManager

    /**
     * The requested application color scheme.
     * 
     * The effective appearance will be decided based on the application color
     * scheme and the system preferred color scheme. The
     * [property`StyleManager:`dark] property can be used to query the current
     * effective appearance.
     * 
     * The `HDY_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
     * using light appearance unless the system prefers dark colors. This is the
     * default value.
     * 
     * The `HDY_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
     * using dark appearance, but can still switch to the light appearance if the
     * system can prefers it, for example, when the high contrast preference is
     * enabled.
     * 
     * The `HDY_COLOR_SCHEME_FORCE_LIGHT` and `HDY_COLOR_SCHEME_FORCE_DARK` values
     * ignore the system preference entirely, they are useful if the application
     * wants to match its UI to its content or to provide a separate color scheme
     * switcher.
     * 
     * If a per-[class`Gdk`.Display] style manager has its color scheme set to
     * `HDY_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
     * default style manager.
     * 
     * For the default style manager, `HDY_COLOR_SCHEME_DEFAULT` is equivalent to
     * `HDY_COLOR_SCHEME_FORCE_LIGHT`.
     * 
     * The [property`StyleManager:`system-supports-color-schemes] property can be
     * used to check if the current environment provides a color scheme
     * dddpreference.
     */
    color_scheme: ColorScheme
    /**
     * Whether the application is using dark appearance.
     * 
     * This property can be used to query the current appearance, as requested via
     * [property`StyleManager:`color-scheme].
     */
    readonly dark: boolean
    /**
     * The display the style manager is associated with.
     * 
     * The display will be `NULL` for the style manager returned by
     * [func`StyleManager`.get_default].
     */
    readonly display: Gdk.Display
    /**
     * Whether the application is using high contrast appearance.
     * 
     * This cannot be overridden by applications.
     */
    readonly high_contrast: boolean
    /**
     * Whether the system supports color schemes.
     * 
     * This property can be used to check if the current environment provides a
     * color scheme preference. For example, applications might want to show a
     * separate appearance switcher if it's set to `FALSE`.
     * 
     * It's only set at startup and cannot change its value later.
     * 
     * See [property`StyleManager:`color-scheme].
     */
    readonly system_supports_color_schemes: boolean

    // Owm methods of Handy-1.Handy.StyleManager

    /**
     * Gets the requested application color scheme.
     * @returns the color scheme
     */
    get_color_scheme(): ColorScheme
    /**
     * Gets whether the application is using dark appearance.
     * @returns whether the application is using dark appearance
     */
    get_dark(): boolean
    /**
     * Gets the display the style manager is associated with.
     * 
     * The display will be `NULL` for the style manager returned by
     * [func`StyleManager`.get_default].
     * @returns (nullable): the display
     */
    get_display(): Gdk.Display
    /**
     * Gets whether the application is using high contrast appearance.
     * @returns whether the application is using high contrast appearance
     */
    get_high_contrast(): boolean
    /**
     * Gets whether the system supports color schemes.
     * @returns whether the system supports color schemes
     */
    get_system_supports_color_schemes(): boolean
    /**
     * Sets the requested application color scheme.
     * 
     * The effective appearance will be decided based on the application color
     * scheme and the system preferred color scheme. The
     * [property`StyleManager:`dark] property can be used to query the current
     * effective appearance.
     * @param color_scheme the color scheme
     */
    set_color_scheme(color_scheme: ColorScheme): void

    // Class property signals of Handy-1.Handy.StyleManager

    connect(sigName: "notify::color-scheme", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-scheme", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-scheme", ...args: any[]): void
    connect(sigName: "notify::dark", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dark", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dark", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::high-contrast", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::high-contrast", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::high-contrast", ...args: any[]): void
    connect(sigName: "notify::system-supports-color-schemes", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-supports-color-schemes", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-supports-color-schemes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A class for managing application-wide styling.
 * 
 * `HdyStyleManager` provides a way to query and influence the application
 * styles, such as whether to use dark or high contrast appearance.
 * 
 * It allows to set the color scheme via the
 * [property`StyleManager:`color-scheme] property, and to query the current
 * appearance, as well as whether a system-wide color scheme preference exists.
 * 
 * Important: [property`Gtk`.Settings:gtk-application-prefer-dark-theme] should
 * not be used together with `HdyStyleManager` and will result in a warning.
 * Color schemes should be used instead.
 * @class 
 */
class StyleManager extends GObject.Object {

    // Own properties of Handy-1.Handy.StyleManager

    static name: string
    static $gtype: GObject.GType<StyleManager>

    // Constructors of Handy-1.Handy.StyleManager

    constructor(config?: StyleManager.ConstructorProperties) 
    _init(config?: StyleManager.ConstructorProperties): void
    /**
     * Gets the default [class`StyleManager]` instance.
     * 
     * It manages all [class`Gdk`.Display] instances unless the style manager for
     * that display has an override.
     * 
     * See [func`StyleManager`.get_for_display].
     * @returns the default style manager
     */
    static get_default(): StyleManager
    /**
     * Gets the [class`StyleManager]` instance managing `display`.
     * 
     * It can be used to override styles for that specific display instead of the
     * whole application.
     * 
     * Most applications should use [func`StyleManager`.get_default] instead.
     * @param display a display
     * @returns the style manager for @display
     */
    static get_for_display(display: Gdk.Display): StyleManager
}

module SwipeGroup {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface SwipeGroup extends Gtk.Buildable {

    // Owm methods of Handy-1.Handy.SwipeGroup

    /**
     * Adds a swipeable to `self`.
     * 
     * When the widget is destroyed or no longer referenced elsewhere, it will be
     * removed from the swipe group.
     * @param swipeable the [iface`Swipeable]` to add
     */
    add_swipeable(swipeable: Swipeable): void
    /**
     * Gets the list of swipeables associated with `self`.
     * @returns a list of swipeables
     */
    get_swipeables(): Swipeable[]
    /**
     * Removes a widget from a [class`SwipeGroup]`.
     * @param swipeable the [iface`Swipeable]` to remove
     */
    remove_swipeable(swipeable: Swipeable): void

    // Class property signals of Handy-1.Handy.SwipeGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object for syncing swipeable widgets.
 * 
 * The `HdySwipeGroup` object can be used to sync multiple swipeable widgets
 * that implement the [iface`Swipeable]` interface, such as [class`Carousel]`, so
 * that animating one of them also animates all the other widgets in the group.
 * 
 * This can be useful for syncing widgets between a window's titlebar and
 * content area.
 * 
 * ## HdySwipeGroup as GtkBuildable
 * 
 * `HdySwipeGroup` can be created in an UI definition. The list of swipeable
 * widgets is specified with a &lt;swipeables&gt; element containing multiple
 * &lt;swipeable&gt; elements with their ”name” attribute specifying the id of
 * the widgets.
 * 
 * ```xml
 * <object class="HdySwipeGroup">
 *   <swipeables>
 *     <swipeable name="carousel1"/>
 *     <swipeable name="carousel2"/>
 *   </swipeables>
 * </object>
 * ```
 * 
 * `HdySwipeGroup` has been deprecated, [class`Window]` and
 * [class`ApplicationWindow]` allow using a single leaflet for both content and
 * header bar, without the need to sync them.
 * @class 
 */
class SwipeGroup extends GObject.Object {

    // Own properties of Handy-1.Handy.SwipeGroup

    static name: string
    static $gtype: GObject.GType<SwipeGroup>

    // Constructors of Handy-1.Handy.SwipeGroup

    constructor(config?: SwipeGroup.ConstructorProperties) 
    /**
     * Creates a new `HdySwipeGroup`.
     * @constructor 
     * @returns the newly created `HdySwipeGroup`
     */
    constructor() 
    /**
     * Creates a new `HdySwipeGroup`.
     * @constructor 
     * @returns the newly created `HdySwipeGroup`
     */
    static new(): SwipeGroup
    _init(config?: SwipeGroup.ConstructorProperties): void
}

module SwipeTracker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-swipe`
     */
    interface BeginSwipeSignalCallback {
        ($obj: SwipeTracker, direction: NavigationDirection, direct: boolean): void
    }

    /**
     * Signal callback interface for `end-swipe`
     */
    interface EndSwipeSignalCallback {
        ($obj: SwipeTracker, duration: number, to: number): void
    }

    /**
     * Signal callback interface for `update-swipe`
     */
    interface UpdateSwipeSignalCallback {
        ($obj: SwipeTracker, progress: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Orientable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.SwipeTracker

        /**
         * Whether to allow swiping for more than one snap point at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent snap
         * points.
         */
        allow_long_swipes?: boolean | null
        /**
         * Whether to allow dragging with mouse pointer.
         * 
         * This should usually be `FALSE`.
         */
        allow_mouse_drag?: boolean | null
        /**
         * Whether the swipe tracker is enabled.
         * 
         * When it's not enabled, no events will be processed. Usually widgets will
         * want to expose this via a property.
         */
        enabled?: boolean | null
        /**
         * Whether to reverse the swipe direction.
         * 
         * If the swipe tracker is horizontal, it can be used for supporting RTL text
         * direction.
         */
        reversed?: boolean | null
        /**
         * The widget the swipe tracker is attached to. Must not be `NULL`.
         */
        swipeable?: Swipeable | null
    }

}

interface SwipeTracker extends Gtk.Orientable {

    // Own properties of Handy-1.Handy.SwipeTracker

    /**
     * Whether to allow swiping for more than one snap point at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent snap
     * points.
     */
    allow_long_swipes: boolean
    /**
     * Whether to allow dragging with mouse pointer.
     * 
     * This should usually be `FALSE`.
     */
    allow_mouse_drag: boolean
    /**
     * Whether the swipe tracker is enabled.
     * 
     * When it's not enabled, no events will be processed. Usually widgets will
     * want to expose this via a property.
     */
    enabled: boolean
    /**
     * Whether to reverse the swipe direction.
     * 
     * If the swipe tracker is horizontal, it can be used for supporting RTL text
     * direction.
     */
    reversed: boolean
    /**
     * The widget the swipe tracker is attached to. Must not be `NULL`.
     */
    readonly swipeable: Swipeable

    // Owm methods of Handy-1.Handy.SwipeTracker

    /**
     * Whether to allow swiping for more than one snap point at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent snap
     * points.
     * @returns whether long swipes are allowed
     */
    get_allow_long_swipes(): boolean
    /**
     * Get whether `self` can be dragged with mouse pointer.
     * @returns `TRUE` is mouse dragging is allowed
     */
    get_allow_mouse_drag(): boolean
    /**
     * Get whether `self` is enabled.
     * @returns `TRUE` if @self is enabled
     */
    get_enabled(): boolean
    /**
     * Get whether `self` is reversing the swipe direction.
     * @returns `TRUE` is the direction is reversed
     */
    get_reversed(): boolean
    /**
     * Get `self'`s swipeable widget.
     * @returns the swipeable widget
     */
    get_swipeable(): Swipeable
    /**
     * Sets whether to allow swiping for more than one snap point at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent snap
     * points.
     * @param allow_long_swipes whether to allow long swipes
     */
    set_allow_long_swipes(allow_long_swipes: boolean): void
    /**
     * Set whether `self` can be dragged with mouse pointer.
     * 
     * This should usually be `FALSE`.
     * @param allow_mouse_drag whether to allow mouse dragging
     */
    set_allow_mouse_drag(allow_mouse_drag: boolean): void
    /**
     * Set whether `self` is enabled.
     * @param enabled whether to enable to swipe tracker
     */
    set_enabled(enabled: boolean): void
    /**
     * Set whether to reverse the swipe direction.
     * 
     * If `self` is horizontal, can be used for supporting RTL text direction.
     * @param reversed whether to reverse the swipe direction
     */
    set_reversed(reversed: boolean): void
    /**
     * Move the current progress value by `delta`.
     * 
     * This can be used to adjust the current position if snap points move during
     * the gesture.
     * @param delta the position delta
     */
    shift_position(delta: number): void

    // Own signals of Handy-1.Handy.SwipeTracker

    connect(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    connect_after(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    emit(sigName: "begin-swipe", direction: NavigationDirection, direct: boolean, ...args: any[]): void
    connect(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    connect_after(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    emit(sigName: "end-swipe", duration: number, to: number, ...args: any[]): void
    connect(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    connect_after(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    emit(sigName: "update-swipe", progress: number, ...args: any[]): void

    // Class property signals of Handy-1.Handy.SwipeTracker

    connect(sigName: "notify::allow-long-swipes", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-long-swipes", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-long-swipes", ...args: any[]): void
    connect(sigName: "notify::allow-mouse-drag", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-mouse-drag", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-mouse-drag", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::reversed", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reversed", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reversed", ...args: any[]): void
    connect(sigName: "notify::swipeable", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swipeable", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swipeable", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Swipe tracker used in [class`Carousel]` and [class`Leaflet]`.
 * 
 * The `HdySwipeTracker` object can be used for implementing widgets with swipe
 * gestures. It supports touch-based swipes, pointer dragging, and touchpad
 * scrolling.
 * 
 * The widgets will probably want to expose [property`SwipeTracker:`enabled]
 * property. If they expect to use horizontal orientation,
 * [property`SwipeTracker:`reversed] property can be used for supporting RTL text
 * direction.
 * @class 
 */
class SwipeTracker extends GObject.Object {

    // Own properties of Handy-1.Handy.SwipeTracker

    static name: string
    static $gtype: GObject.GType<SwipeTracker>

    // Constructors of Handy-1.Handy.SwipeTracker

    constructor(config?: SwipeTracker.ConstructorProperties) 
    /**
     * Creates a new `HdySwipeTracker` object on `widget`.
     * @constructor 
     * @param swipeable a swipeable to add the tracker on
     * @returns the newly created `HdySwipeTracker`
     */
    constructor(swipeable: Swipeable) 
    /**
     * Creates a new `HdySwipeTracker` object on `widget`.
     * @constructor 
     * @param swipeable a swipeable to add the tracker on
     * @returns the newly created `HdySwipeTracker`
     */
    static new(swipeable: Swipeable): SwipeTracker
    _init(config?: SwipeTracker.ConstructorProperties): void
}

module TabBar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `extra-drag-data-received`
     */
    interface ExtraDragDataReceivedSignalCallback {
        ($obj: TabBar, page: TabPage, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.TabBar

        /**
         * Whether tabs automatically hide.
         * 
         * If set to `TRUE`, the tab bar disappears when the associated
         * [class`TabView]` has 0 or 1 tab, no pinned tabs, and no tab is being
         * transferred.
         * 
         * See [property`TabBar:`tabs-revealed].
         */
        autohide?: boolean | null
        /**
         * The widget shown after the tabs.
         */
        end_action_widget?: Gtk.Widget | null
        /**
         * Whether tabs should expand.
         * 
         * If set to `TRUE`, the tabs will always vary width filling the whole width
         * when possible, otherwise tabs will always have the minimum possible size.
         */
        expand_tabs?: boolean | null
        /**
         * Extra drag destination targets.
         * 
         * Allows to drag arbitrary content onto tabs, for example URLs in a web
         * browser.
         * 
         * If a tab is hovered for a certain period of time while dragging the
         * content, it will be automatically selected.
         * 
         * After content is dropped, the [signal`TabBar:`:extra-drag-data-received]
         * signal can be used to retrieve and process the drag data.
         */
        extra_drag_dest_targets?: Gtk.TargetList | null
        /**
         * Whether tabs use inverted layout.
         * 
         * If set to `TRUE`, non-pinned tabs will have the close button at the
         * beginning and the indicator at the end rather than the opposite.
         */
        inverted?: boolean | null
        /**
         * The widget shown before the tabs.
         */
        start_action_widget?: Gtk.Widget | null
        /**
         * The [class`TabView]` the tab bar controls.
         */
        view?: TabView | null
    }

}

interface TabBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.TabBar

    /**
     * Whether tabs automatically hide.
     * 
     * If set to `TRUE`, the tab bar disappears when the associated
     * [class`TabView]` has 0 or 1 tab, no pinned tabs, and no tab is being
     * transferred.
     * 
     * See [property`TabBar:`tabs-revealed].
     */
    autohide: boolean
    /**
     * The widget shown after the tabs.
     */
    end_action_widget: Gtk.Widget
    /**
     * Whether tabs should expand.
     * 
     * If set to `TRUE`, the tabs will always vary width filling the whole width
     * when possible, otherwise tabs will always have the minimum possible size.
     */
    expand_tabs: boolean
    /**
     * Extra drag destination targets.
     * 
     * Allows to drag arbitrary content onto tabs, for example URLs in a web
     * browser.
     * 
     * If a tab is hovered for a certain period of time while dragging the
     * content, it will be automatically selected.
     * 
     * After content is dropped, the [signal`TabBar:`:extra-drag-data-received]
     * signal can be used to retrieve and process the drag data.
     */
    extra_drag_dest_targets: Gtk.TargetList
    /**
     * Whether tabs use inverted layout.
     * 
     * If set to `TRUE`, non-pinned tabs will have the close button at the
     * beginning and the indicator at the end rather than the opposite.
     */
    inverted: boolean
    /**
     * Whether the tab bar is overflowing.
     * 
     * If set to `TRUE`, all tabs cannot be displayed at once and require
     * scrolling.
     */
    readonly is_overflowing: boolean
    /**
     * The widget shown before the tabs.
     */
    start_action_widget: Gtk.Widget
    /**
     * Whether tabs are currently revealed.
     * 
     * See [property`TabBar:`autohide].
     */
    readonly tabs_revealed: boolean
    /**
     * The [class`TabView]` the tab bar controls.
     */
    view: TabView

    // Owm methods of Handy-1.Handy.TabBar

    /**
     * Gets whether the tabs automatically hide.
     * @returns whether the tabs automatically hide
     */
    get_autohide(): boolean
    /**
     * Gets the widget shown after the tabs.
     * @returns the widget shown after the tabs
     */
    get_end_action_widget(): Gtk.Widget | null
    /**
     * Gets whether tabs should expand.
     * @returns whether tabs should expand
     */
    get_expand_tabs(): boolean
    /**
     * Gets extra drag destination targets.
     * @returns extra drag targets
     */
    get_extra_drag_dest_targets(): Gtk.TargetList | null
    /**
     * Gets whether tabs use inverted layout.
     * @returns whether tabs use inverted layout
     */
    get_inverted(): boolean
    /**
     * Gets whether `self` is overflowing.
     * @returns whether @self is overflowing
     */
    get_is_overflowing(): boolean
    /**
     * Gets the widget shown before the tabs.
     * @returns the widget shown before the tabs
     */
    get_start_action_widget(): Gtk.Widget | null
    /**
     * Gets the value of the [property`TabBar:`tabs-revealed] property.
     * @returns whether the tabs are current revealed
     */
    get_tabs_revealed(): boolean
    /**
     * Gets the [class`TabView]` `self` controls.
     * @returns the [class@TabView] @self controls
     */
    get_view(): TabView | null
    /**
     * Sets whether the tabs automatically hide.
     * 
     * If `autohide` is `TRUE`, the tab bar disappears when the associated
     * [class`TabView]` has 0 or 1 tab, no pinned tabs, and no tab is being
     * transferred.
     * 
     * Autohide is enabled by default.
     * 
     * See [property`TabBar:`tabs-revealed].
     * @param autohide whether the tabs automatically hide
     */
    set_autohide(autohide: boolean): void
    /**
     * Sets the widget to show after the tabs.
     * @param widget the widget to show after the tabs
     */
    set_end_action_widget(widget: Gtk.Widget | null): void
    /**
     * Sets whether tabs should expand.
     * 
     * If `expand_tabs` is `TRUE`, the tabs will always vary width filling the whole
     * width when possible, otherwise tabs will always have the minimum possible
     * size.
     * 
     * Expand is enabled by default.
     * @param expand_tabs whether to expand tabs
     */
    set_expand_tabs(expand_tabs: boolean): void
    /**
     * Sets extra drag destination targets.
     * 
     * This allows to drag arbitrary content onto tabs, for example URLs in a web
     * browser.
     * 
     * If a tab is hovered for a certain period of time while dragging the content,
     * it will be automatically selected.
     * 
     * After content is dropped, the [signal`TabBar:`:extra-drag-data-received]
     * signal can be used to retrieve and process the drag data.
     * @param extra_drag_dest_targets extra drag targets
     */
    set_extra_drag_dest_targets(extra_drag_dest_targets: Gtk.TargetList | null): void
    /**
     * Sets whether tabs tabs use inverted layout.
     * 
     * If `inverted` is `TRUE`, non-pinned tabs will have the close button at the
     * beginning and the indicator at the end rather than the opposite.
     * @param inverted whether tabs use inverted layout
     */
    set_inverted(inverted: boolean): void
    /**
     * Sets the widget to show before the tabs.
     * @param widget the widget to show before the tabs
     */
    set_start_action_widget(widget: Gtk.Widget | null): void
    /**
     * Sets the [class`TabView]` `self` controls.
     * @param view a tab view
     */
    set_view(view: TabView | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own signals of Handy-1.Handy.TabBar

    connect(sigName: "extra-drag-data-received", callback: TabBar.ExtraDragDataReceivedSignalCallback): number
    connect_after(sigName: "extra-drag-data-received", callback: TabBar.ExtraDragDataReceivedSignalCallback): number
    emit(sigName: "extra-drag-data-received", page: TabPage, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number, ...args: any[]): void

    // Class property signals of Handy-1.Handy.TabBar

    connect(sigName: "notify::autohide", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autohide", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autohide", ...args: any[]): void
    connect(sigName: "notify::end-action-widget", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-action-widget", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-action-widget", ...args: any[]): void
    connect(sigName: "notify::expand-tabs", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand-tabs", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand-tabs", ...args: any[]): void
    connect(sigName: "notify::extra-drag-dest-targets", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-drag-dest-targets", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extra-drag-dest-targets", ...args: any[]): void
    connect(sigName: "notify::inverted", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverted", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inverted", ...args: any[]): void
    connect(sigName: "notify::is-overflowing", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-overflowing", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-overflowing", ...args: any[]): void
    connect(sigName: "notify::start-action-widget", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-action-widget", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-action-widget", ...args: any[]): void
    connect(sigName: "notify::tabs-revealed", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs-revealed", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs-revealed", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A tab bar for [class`TabView]`.
 * 
 * The `HdyTabBar` widget is a tab bar that can be used with conjunction with
 * [class`TabView]`.
 * 
 * `HdyTabBar` can autohide and can optionally contain action widgets on both
 * sides of the tabs.
 * 
 * When there's not enough space to show all the tabs, `HdyTabBar` will scroll
 * them. Pinned tabs always stay visible and aren't a part of the scrollable
 * area.
 * 
 * ## CSS nodes
 * 
 * `HdyTabBar` has a single CSS node with name `tabbar`.
 * @class 
 */
class TabBar extends Gtk.Bin {

    // Own properties of Handy-1.Handy.TabBar

    static name: string
    static $gtype: GObject.GType<TabBar>

    // Constructors of Handy-1.Handy.TabBar

    constructor(config?: TabBar.ConstructorProperties) 
    /**
     * Creates a new `HdyTabBar` widget.
     * @constructor 
     * @returns a new `HdyTabBar`
     */
    constructor() 
    /**
     * Creates a new `HdyTabBar` widget.
     * @constructor 
     * @returns a new `HdyTabBar`
     */
    static new(): TabBar
    _init(config?: TabBar.ConstructorProperties): void
}

module TabPage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.TabPage

        /**
         * The child of the page.
         */
        child?: Gtk.Widget | null
        /**
         * The icon of the page.
         * 
         * [class`TabBar]` displays the icon next to the title.
         * 
         * It will not show the icon if [property`TabPage:`loading] is set to `TRUE`,
         * or if the page is pinned and [propertyTabPage:indicator-icon] is set.
         */
        icon?: Gio.Icon | null
        /**
         * Whether the indicator icon is activatable.
         * 
         * If set to `TRUE`, [signal`TabView:`:indicator-activated] will be emitted
         * when the indicator icon is clicked.
         * 
         * If [property`TabPage:`indicator-icon] is not set, does nothing.
         */
        indicator_activatable?: boolean | null
        /**
         * An indicator icon for the page.
         * 
         * A common use case is an audio or camera indicator in a web browser.
         * 
         * [class`TabPage]` will show it at the beginning of the tab, alongside icon
         * representing [property`TabPage:`icon] or loading spinner.
         * 
         * If the page is pinned, the indicator will be shown instead of icon or
         * spinner.
         * 
         * If [property`TabPage:`indicator-activatable] is set to `TRUE`, the indicator
         * icon can act as a button.
         */
        indicator_icon?: Gio.Icon | null
        /**
         * Whether the page is loading.
         * 
         * If set to `TRUE`, [class`TabBar]` will display a spinner in place of icon.
         * 
         * If the page is pinned and [property`TabPage:`indicator-icon] is set, the
         * loading status will not be visible.
         */
        loading?: boolean | null
        /**
         * Whether the page needs attention.
         * 
         * [class`TabBar]` will display a glow under the tab representing the page if
         * set to `TRUE`. If the tab is not visible, the corresponding edge of the tab
         * bar will be highlighted.
         */
        needs_attention?: boolean | null
        /**
         * The parent page of the page.
         * 
         * See [method`TabView`.add_page] and [method`TabView`.close_page].
         */
        parent?: TabPage | null
        /**
         * The title of the page.
         * 
         * [class`TabBar]` will display it in the center of the tab unless it's pinned,
         * and will use it as a tooltip unless [property`TabPage:`tooltip] is set.
         */
        title?: string | null
        /**
         * The tooltip of the page.
         * 
         * The tooltip can be marked up with the Pango text markup language.
         * 
         * If not set, [class`TabBar]` will use [property`TabPage:`title] as a tooltip
         * instead.
         */
        tooltip?: string | null
    }

}

interface TabPage {

    // Own properties of Handy-1.Handy.TabPage

    /**
     * The child of the page.
     */
    readonly child: Gtk.Widget
    /**
     * The icon of the page.
     * 
     * [class`TabBar]` displays the icon next to the title.
     * 
     * It will not show the icon if [property`TabPage:`loading] is set to `TRUE`,
     * or if the page is pinned and [propertyTabPage:indicator-icon] is set.
     */
    icon: Gio.Icon
    /**
     * Whether the indicator icon is activatable.
     * 
     * If set to `TRUE`, [signal`TabView:`:indicator-activated] will be emitted
     * when the indicator icon is clicked.
     * 
     * If [property`TabPage:`indicator-icon] is not set, does nothing.
     */
    indicator_activatable: boolean
    /**
     * An indicator icon for the page.
     * 
     * A common use case is an audio or camera indicator in a web browser.
     * 
     * [class`TabPage]` will show it at the beginning of the tab, alongside icon
     * representing [property`TabPage:`icon] or loading spinner.
     * 
     * If the page is pinned, the indicator will be shown instead of icon or
     * spinner.
     * 
     * If [property`TabPage:`indicator-activatable] is set to `TRUE`, the indicator
     * icon can act as a button.
     */
    indicator_icon: Gio.Icon
    /**
     * Whether the page is loading.
     * 
     * If set to `TRUE`, [class`TabBar]` will display a spinner in place of icon.
     * 
     * If the page is pinned and [property`TabPage:`indicator-icon] is set, the
     * loading status will not be visible.
     */
    loading: boolean
    /**
     * Whether the page needs attention.
     * 
     * [class`TabBar]` will display a glow under the tab representing the page if
     * set to `TRUE`. If the tab is not visible, the corresponding edge of the tab
     * bar will be highlighted.
     */
    needs_attention: boolean
    /**
     * The parent page of the page.
     * 
     * See [method`TabView`.add_page] and [method`TabView`.close_page].
     */
    readonly parent: TabPage
    /**
     * Whether the page is pinned.
     * 
     * See [method`TabView`.set_page_pinned].
     */
    readonly pinned: boolean
    /**
     * Whether the page is selected.
     */
    readonly selected: boolean
    /**
     * The title of the page.
     * 
     * [class`TabBar]` will display it in the center of the tab unless it's pinned,
     * and will use it as a tooltip unless [property`TabPage:`tooltip] is set.
     */
    title: string | null
    /**
     * The tooltip of the page.
     * 
     * The tooltip can be marked up with the Pango text markup language.
     * 
     * If not set, [class`TabBar]` will use [property`TabPage:`title] as a tooltip
     * instead.
     */
    tooltip: string | null

    // Owm methods of Handy-1.Handy.TabPage

    /**
     * Gets the child of `self`.
     * @returns the child of @self
     */
    get_child(): Gtk.Widget
    /**
     * Gets the icon of `self`.
     * @returns the icon of @self
     */
    get_icon(): Gio.Icon | null
    /**
     * Gets whether the indicator of `self` is activatable.
     * @returns whether the indicator is activatable
     */
    get_indicator_activatable(): boolean
    /**
     * Gets the indicator icon of `self`.
     * @returns the indicator icon of @self
     */
    get_indicator_icon(): Gio.Icon | null
    /**
     * Gets whether `self` is loading.
     * @returns whether @self is loading
     */
    get_loading(): boolean
    /**
     * Gets whether `self` needs attention.
     * @returns whether @self needs attention
     */
    get_needs_attention(): boolean
    /**
     * Gets the parent page of `self`.
     * @returns the parent page of @self
     */
    get_parent(): TabPage | null
    /**
     * Gets whether `self` is pinned.
     * @returns whether @self is pinned
     */
    get_pinned(): boolean
    /**
     * Gets whether `self` is selected.
     * @returns whether @self is selected
     */
    get_selected(): boolean
    /**
     * Gets the title of `self`.
     * @returns the title of @self
     */
    get_title(): string | null
    /**
     * Gets the tooltip of `self`.
     * @returns the tooltip of @self
     */
    get_tooltip(): string | null
    /**
     * Sets the icon of `self`.
     * @param icon the icon of `self`
     */
    set_icon(icon: Gio.Icon | null): void
    /**
     * Sets whether the indicator of `self` is activatable.
     * @param activatable whether the indicator is activatable
     */
    set_indicator_activatable(activatable: boolean): void
    /**
     * Sets the indicator icon of `self`.
     * @param indicator_icon the indicator icon of `self`
     */
    set_indicator_icon(indicator_icon: Gio.Icon | null): void
    /**
     * Sets wether `self` is loading.
     * @param loading whether `self` is loading
     */
    set_loading(loading: boolean): void
    /**
     * Sets whether `self` needs attention.
     * @param needs_attention whether `self` needs attention
     */
    set_needs_attention(needs_attention: boolean): void
    /**
     * Sets the title of `self`.
     * @param title the title of `self`
     */
    set_title(title: string | null): void
    /**
     * Sets the tooltip of `self`.
     * @param tooltip the tooltip of `self`
     */
    set_tooltip(tooltip: string | null): void

    // Class property signals of Handy-1.Handy.TabPage

    connect(sigName: "notify::child", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::indicator-activatable", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indicator-activatable", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indicator-activatable", ...args: any[]): void
    connect(sigName: "notify::indicator-icon", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indicator-icon", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indicator-icon", ...args: any[]): void
    connect(sigName: "notify::loading", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loading", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loading", ...args: any[]): void
    connect(sigName: "notify::needs-attention", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::needs-attention", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::needs-attention", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pinned", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pinned", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pinned", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An auxiliary class used by [class`TabView]`.
 * @class 
 */
class TabPage extends GObject.Object {

    // Own properties of Handy-1.Handy.TabPage

    static name: string
    static $gtype: GObject.GType<TabPage>

    // Constructors of Handy-1.Handy.TabPage

    constructor(config?: TabPage.ConstructorProperties) 
    _init(config?: TabPage.ConstructorProperties): void
}

module TabView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close-page`
     */
    interface ClosePageSignalCallback {
        ($obj: TabView, page: TabPage): boolean
    }

    /**
     * Signal callback interface for `create-window`
     */
    interface CreateWindowSignalCallback {
        ($obj: TabView): TabView | null
    }

    /**
     * Signal callback interface for `indicator-activated`
     */
    interface IndicatorActivatedSignalCallback {
        ($obj: TabView, page: TabPage): void
    }

    /**
     * Signal callback interface for `page-attached`
     */
    interface PageAttachedSignalCallback {
        ($obj: TabView, page: TabPage, position: number): void
    }

    /**
     * Signal callback interface for `page-detached`
     */
    interface PageDetachedSignalCallback {
        ($obj: TabView, page: TabPage, position: number): void
    }

    /**
     * Signal callback interface for `page-reordered`
     */
    interface PageReorderedSignalCallback {
        ($obj: TabView, page: TabPage, position: number): void
    }

    /**
     * Signal callback interface for `setup-menu`
     */
    interface SetupMenuSignalCallback {
        ($obj: TabView, page: TabPage): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.TabView

        /**
         * Default page icon.
         * 
         * If a page doesn't provide its own icon via [property`TabPage:`icon], default
         * icon may be used instead for contexts where having an icon is necessary.
         * 
         * [class`TabBar]` will use default icon for pinned tabs in case the page is
         * not loading, doesn't have an icon and an indicator. Default icon is never
         * used for tabs that aren't pinned.
         */
        default_icon?: Gio.Icon | null
        /**
         * Tab context menu model.
         * 
         * When a context menu is shown for a tab, it will be constructed from the
         * provided menu model. Use [signal`TabView:`:setup-menu] signal to set up the
         * menu actions for the particular tab.
         */
        menu_model?: Gio.MenuModel | null
        /**
         * The currently selected page.
         */
        selected_page?: TabPage | null
        /**
         * Tab shortcut widget.
         * 
         * Has the following shortcuts:
         * 
         * * <kbd>Ctrl</kbd>+<kbd>Page Up</kbd> - switch to the previous page
         * * <kbd>Ctrl</kbd>+<kbd>Page Down</kbd> - switch to the next page
         * * <kbd>Ctrl</kbd>+<kbd>Home</kbd> - switch to the first page
         * * <kbd>Ctrl</kbd>+<kbd>End</kbd> - switch to the last page
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Up</kbd> - move the current page
         *     backward
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Down</kbd> - move the current
         *     page forward
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Home</kbd> - move the current page at
         *     the start
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>End</kbd> - move the current page at
         *      the end
         * * <kbd>Ctrl</kbd>+<kbd>Tab</kbd> - switch to the next page, with looping
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Tab</kbd> - switch to the previous
         *     page, with looping
         * * <kbd>Alt</kbd>+<kbd>1</kbd>⋯<kbd>9</kbd> - switch to pages 1-9
         * * <kbd>Alt</kbd>+<kbd>0</kbd> - switch to page 10
         * 
         * These shortcuts are always available on `self,` this property is useful if
         * they should be available globally.
         */
        shortcut_widget?: Gtk.Widget | null
    }

}

interface TabView extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.TabView

    /**
     * Default page icon.
     * 
     * If a page doesn't provide its own icon via [property`TabPage:`icon], default
     * icon may be used instead for contexts where having an icon is necessary.
     * 
     * [class`TabBar]` will use default icon for pinned tabs in case the page is
     * not loading, doesn't have an icon and an indicator. Default icon is never
     * used for tabs that aren't pinned.
     */
    default_icon: Gio.Icon
    /**
     * Whether a page is being transferred.
     * 
     * This property will be set to `TRUE` when a drag-n-drop tab transfer starts
     * on any [class`TabView]`, and to `FALSE` after it ends.
     * 
     * During the transfer, children cannot receive pointer input and a tab can be
     * safely dropped on the tab view.
     */
    readonly is_transferring_page: boolean
    /**
     * Tab context menu model.
     * 
     * When a context menu is shown for a tab, it will be constructed from the
     * provided menu model. Use [signal`TabView:`:setup-menu] signal to set up the
     * menu actions for the particular tab.
     */
    menu_model: Gio.MenuModel
    /**
     * The number of pages in the tab view.
     */
    readonly n_pages: number
    /**
     * The number of pinned pages in the tab view.
     * 
     * See [method`TabView`.set_page_pinned].
     */
    readonly n_pinned_pages: number
    /**
     * The currently selected page.
     */
    selected_page: TabPage
    /**
     * Tab shortcut widget.
     * 
     * Has the following shortcuts:
     * 
     * * <kbd>Ctrl</kbd>+<kbd>Page Up</kbd> - switch to the previous page
     * * <kbd>Ctrl</kbd>+<kbd>Page Down</kbd> - switch to the next page
     * * <kbd>Ctrl</kbd>+<kbd>Home</kbd> - switch to the first page
     * * <kbd>Ctrl</kbd>+<kbd>End</kbd> - switch to the last page
     * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Up</kbd> - move the current page
     *     backward
     * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Down</kbd> - move the current
     *     page forward
     * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Home</kbd> - move the current page at
     *     the start
     * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>End</kbd> - move the current page at
     *      the end
     * * <kbd>Ctrl</kbd>+<kbd>Tab</kbd> - switch to the next page, with looping
     * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Tab</kbd> - switch to the previous
     *     page, with looping
     * * <kbd>Alt</kbd>+<kbd>1</kbd>⋯<kbd>9</kbd> - switch to pages 1-9
     * * <kbd>Alt</kbd>+<kbd>0</kbd> - switch to page 10
     * 
     * These shortcuts are always available on `self,` this property is useful if
     * they should be available globally.
     */
    shortcut_widget: Gtk.Widget

    // Owm methods of Handy-1.Handy.TabView

    /**
     * Adds `child` to `self` with `parent` as the parent.
     * 
     * This function can be used to automatically position new pages, and to select
     * the correct page when this page is closed while being selected (see
     * [method`TabView`.close_page].
     * 
     * If `parent` is `NULL`, this function is equivalent to [method`TabView`.append].
     * @param child a widget to add
     * @param parent a parent page for `child`
     * @returns the page object representing @child
     */
    add_page(child: Gtk.Widget, parent: TabPage | null): TabPage
    /**
     * Inserts `child` as the last non-pinned page.
     * @param child a widget to add
     * @returns the page object representing @child
     */
    append(child: Gtk.Widget): TabPage
    /**
     * Inserts `child` as the last pinned page.
     * @param child a widget to add
     * @returns the page object representing @child
     */
    append_pinned(child: Gtk.Widget): TabPage
    /**
     * Requests to close all pages other than `page`.
     * @param page a page of `self`
     */
    close_other_pages(page: TabPage): void
    /**
     * Requests to close `page`.
     * 
     * Calling this function will result in [signal`TabView:`:close-page] signal
     * being emitted for `page`. Closing the page can then be confirmed or denied via
     * [method`TabView`.close_page_finish].
     * 
     * If the page is waiting for a [method`TabView`.close_page_finish] call, this
     * function will do nothing.
     * 
     * The default handler for [signal`TabView:`:close-page] will immediately confirm
     * closing the page if it's non-pinned, or reject it if it's pinned. This
     * behavior can be changed by registering your own handler for that signal.
     * 
     * If `page` was selected, another page will be selected instead:
     * 
     * If the [property`TabPage:`parent] value is `NULL`, the next page will be
     * selected when possible, or if the page was already last, the previous page
     * will be selected instead.
     * 
     * If it's not `NULL`, the previous page will be selected if it's a descendant
     * (possibly indirect) of the parent. If both the previous page and the parent
     * are pinned, the parent will be selected instead.
     * @param page a page of `self`
     */
    close_page(page: TabPage): void
    /**
     * Completes a [method`TabView`.close_page] call for `page`.
     * 
     * If `confirm` is `TRUE`, `page` will be closed. If it's `FALSE`, ite will be
     * reverted to its previous state and [method`TabView`.close_page] can be called
     * for it again.
     * 
     * This function should not be called unless a custom handler for
     * [signal`TabView:`:close-page] is used.
     * @param page a page of `self`
     * @param confirm whether to confirm or deny closing `page`
     */
    close_page_finish(page: TabPage, confirm: boolean): void
    /**
     * Requests to close all pages after `page`.
     * @param page a page of `self`
     */
    close_pages_after(page: TabPage): void
    /**
     * Requests to close all pages before `page`.
     * @param page a page of `self`
     */
    close_pages_before(page: TabPage): void
    /**
     * Gets default icon of `self`.
     * @returns the default icon of @self
     */
    get_default_icon(): Gio.Icon
    /**
     * Whether a page is being transferred.
     * 
     * Gets the value of [property`TabView:`is-transferring-page] property.
     * @returns whether a page is being transferred
     */
    get_is_transferring_page(): boolean
    /**
     * Gets the tab context menu model for `self`.
     * @returns the tab context menu model for @self
     */
    get_menu_model(): Gio.MenuModel | null
    /**
     * Gets the number of pages in `self`.
     * @returns the number of pages in @self
     */
    get_n_pages(): number
    /**
     * Gets the number of pinned pages in `self`.
     * 
     * See [method`TabView`.set_page_pinned].
     * @returns the number of pinned pages in @self
     */
    get_n_pinned_pages(): number
    /**
     * Gets the [class`TabPage]` representing the child at `position`.
     * @param position the index of the page in `self,` starting from 0
     * @returns the page object at @position
     */
    get_nth_page(position: number): TabPage
    /**
     * Gets the [class`TabPage]` object representing `child`.
     * @param child a child in `self`
     * @returns the [class@TabPage] representing @child
     */
    get_page(child: Gtk.Widget): TabPage
    /**
     * Finds the position of `page` in `self,` starting from 0.
     * @param page a page of `self`
     * @returns the position of @page in @self
     */
    get_page_position(page: TabPage): number
    /**
     * Returns a [iface`Gio`.ListModel] containing the pages of `self`.
     * 
     * This model can be used to keep an up to date view of the pages.
     * @returns the model containing pages of @self
     */
    get_pages(): Gio.ListModel
    /**
     * Gets the currently selected page in `self`.
     * @returns the selected page in @self
     */
    get_selected_page(): TabPage | null
    /**
     * Gets the shortcut widget for `self`.
     * @returns the shortcut widget for @self
     */
    get_shortcut_widget(): Gtk.Widget | null
    /**
     * Inserts a non-pinned page at `position`.
     * 
     * It's an error to try to insert a page before a pinned page, in that case
     * [method`TabView`.insert_pinned] should be used instead.
     * @param child a widget to add
     * @param position the position to add `child` at, starting from 0
     * @returns the page object representing @child
     */
    insert(child: Gtk.Widget, position: number): TabPage
    /**
     * Inserts a pinned page at `position`.
     * 
     * It's an error to try to insert a pinned page after a non-pinned page, in that
     * case [method`TabView`.insert] should be used instead.
     * @param child a widget to add
     * @param position the position to add `child` at, starting from 0
     * @returns the page object representing @child
     */
    insert_pinned(child: Gtk.Widget, position: number): TabPage
    /**
     * Inserts `child` as the first non-pinned page.
     * @param child a widget to add
     * @returns the page object representing @child
     */
    prepend(child: Gtk.Widget): TabPage
    /**
     * Inserts `child` as the first pinned page.
     * @param child a widget to add
     * @returns the page object representing @child
     */
    prepend_pinned(child: Gtk.Widget): TabPage
    /**
     * Reorders `page` to before its previous page if possible.
     * @param page a page of `self`
     * @returns whether @page was moved
     */
    reorder_backward(page: TabPage): boolean
    /**
     * Reorders `page` to the first possible position.
     * @param page a page of `self`
     * @returns whether @page was moved
     */
    reorder_first(page: TabPage): boolean
    /**
     * Reorders `page` to after its next page if possible.
     * @param page a page of `self`
     * @returns whether @page was moved
     */
    reorder_forward(page: TabPage): boolean
    /**
     * Reorders `page` to the last possible position.
     * @param page a page of `self`
     * @returns whether @page was moved
     */
    reorder_last(page: TabPage): boolean
    /**
     * Reorders `page` to `position`.
     * 
     * It's a programmer error to try to reorder a pinned page after a non-pinned
     * one, or a non-pinned page before a pinned one.
     * @param page a page of `self`
     * @param position the position to insert the page at, starting at 0
     * @returns whether @page was moved
     */
    reorder_page(page: TabPage, position: number): boolean
    /**
     * Selects the page after the currently selected page.
     * 
     * If the last page was already selected, this function does nothing.
     * @returns whether the selected page was changed
     */
    select_next_page(): boolean
    /**
     * Selects the page before the currently selected page.
     * 
     * If the first page was already selected, this function does nothing.
     * @returns whether the selected page was changed
     */
    select_previous_page(): boolean
    /**
     * Sets default page icon for `self`.
     * 
     * If a page doesn't provide its own icon via [property`TabPage:`icon], default
     * icon may be used instead for contexts where having an icon is necessary.
     * 
     * [class`TabBar]` will use default icon for pinned tabs in case the page is not
     * loading, doesn't have an icon and an indicator. Default icon is never used
     * for tabs that aren't pinned.
     * 
     * By default, `hdy-tab-icon-missing-symbolic` icon is used.
     * @param default_icon the default icon
     */
    set_default_icon(default_icon: Gio.Icon): void
    /**
     * Sets the tab context menu model for `self`.
     * 
     * When a context menu is shown for a tab, it will be constructed from the
     * provided menu model. Use [signal`TabView:`:setup-menu] signal to set up the
     * menu actions for the particular tab.
     * @param menu_model a menu model
     */
    set_menu_model(menu_model: Gio.MenuModel | null): void
    /**
     * Pins or unpins `page`.
     * 
     * Pinned pages are guaranteed to be placed before all non-pinned pages; at any
     * given moment the first [property`TabView:`n-pinned-pages] pages in `self` are
     * guaranteed to be pinned.
     * 
     * When a page is pinned or unpinned, it's automatically reordered: pinning a
     * page moves it after other pinned pages; unpinning a page moves it before
     * other non-pinned pages.
     * 
     * Pinned pages can still be reordered between each other.
     * 
     * [class`TabBar]` will display pinned pages in a compact form, never showing the
     * title or close button, and only showing a single icon, selected in the
     * following order:
     * 
     * 1. [property`TabPage:`indicator-icon]
     * 2. A spinner if [property`TabPage:`loading] is `TRUE`
     * 3. [property`TabPage:`icon]
     * 4. [property`TabView:`default-icon]
     * 
     * Pinned pages cannot be closed by default, see [signal`TabView:`:close-page]
     * for how to override that behavior.
     * @param page a page of `self`
     * @param pinned whether `page` should be pinned
     */
    set_page_pinned(page: TabPage, pinned: boolean): void
    /**
     * Sets the currently selected page in `self`.
     * @param selected_page a page in `self`
     */
    set_selected_page(selected_page: TabPage): void
    /**
     * Sets the shortcut widget for `self`.
     * @param widget a shortcut widget
     */
    set_shortcut_widget(widget: Gtk.Widget | null): void
    /**
     * Transfers `page` from `self` to `other_view`.
     * 
     * The `page` object will be reused.
     * 
     * It's a programmer error to try to insert a pinned page after a non-pinned
     * one, or a non-pinned page before a pinned one.
     * @param page a page of `self`
     * @param other_view the tab view to transfer the page to
     * @param position the position to insert the page at, starting at 0
     */
    transfer_page(page: TabPage, other_view: TabView, position: number): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own signals of Handy-1.Handy.TabView

    connect(sigName: "close-page", callback: TabView.ClosePageSignalCallback): number
    connect_after(sigName: "close-page", callback: TabView.ClosePageSignalCallback): number
    emit(sigName: "close-page", page: TabPage, ...args: any[]): void
    connect(sigName: "create-window", callback: TabView.CreateWindowSignalCallback): number
    connect_after(sigName: "create-window", callback: TabView.CreateWindowSignalCallback): number
    emit(sigName: "create-window", ...args: any[]): void
    connect(sigName: "indicator-activated", callback: TabView.IndicatorActivatedSignalCallback): number
    connect_after(sigName: "indicator-activated", callback: TabView.IndicatorActivatedSignalCallback): number
    emit(sigName: "indicator-activated", page: TabPage, ...args: any[]): void
    connect(sigName: "page-attached", callback: TabView.PageAttachedSignalCallback): number
    connect_after(sigName: "page-attached", callback: TabView.PageAttachedSignalCallback): number
    emit(sigName: "page-attached", page: TabPage, position: number, ...args: any[]): void
    connect(sigName: "page-detached", callback: TabView.PageDetachedSignalCallback): number
    connect_after(sigName: "page-detached", callback: TabView.PageDetachedSignalCallback): number
    emit(sigName: "page-detached", page: TabPage, position: number, ...args: any[]): void
    connect(sigName: "page-reordered", callback: TabView.PageReorderedSignalCallback): number
    connect_after(sigName: "page-reordered", callback: TabView.PageReorderedSignalCallback): number
    emit(sigName: "page-reordered", page: TabPage, position: number, ...args: any[]): void
    connect(sigName: "setup-menu", callback: TabView.SetupMenuSignalCallback): number
    connect_after(sigName: "setup-menu", callback: TabView.SetupMenuSignalCallback): number
    emit(sigName: "setup-menu", page: TabPage, ...args: any[]): void

    // Class property signals of Handy-1.Handy.TabView

    connect(sigName: "notify::default-icon", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icon", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-icon", ...args: any[]): void
    connect(sigName: "notify::is-transferring-page", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-transferring-page", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-transferring-page", ...args: any[]): void
    connect(sigName: "notify::menu-model", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::n-pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-pages", ...args: any[]): void
    connect(sigName: "notify::n-pinned-pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pinned-pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-pinned-pages", ...args: any[]): void
    connect(sigName: "notify::selected-page", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-page", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected-page", ...args: any[]): void
    connect(sigName: "notify::shortcut-widget", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortcut-widget", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shortcut-widget", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A dynamic tabbed container.
 * 
 * `HdyTabView` is a container which shows one child at a time. While it
 * provides keyboard shortcuts for switching between pages, it does not provide
 * a visible tab bar and relies on external widgets for that, such as
 * [class`TabBar]`.
 * 
 * `HdyTabView` maintains a [class`TabPage]` object for each page,which holds
 * additional per-page properties. You can obtain the [class`TabPage]` for a page
 * with [method`TabView`.get_page], and as return value for
 * [method`TabView`.append] and other functions for adding children.
 * 
 * `HdyTabView` only aims to be useful for dynamic tabs in multi-window
 * document-based applications, such as web browsers, file managers, text
 * editors or terminals. It does not aim to replace [class`Gtk`.Notebook] for use
 * cases such as tabbed dialogs.
 * 
 * As such, it does not support disabling page reordering or detaching, or
 * adding children via [iface`Gtk`.Buildable].
 * 
 * ## CSS nodes
 * 
 * `HdyTabView` has a main CSS node with the name `tabview`.
 * 
 * It contains the subnode overlay, which contains subnodes stack and widget.
 * The stack subnode contains the added pages.
 * 
 * ```
 * tabview
 * ╰── overlay
 *     ├── stack
 *     │   ╰── [ Children ]
 *     ╰── widget
 * ```
 * @class 
 */
class TabView extends Gtk.Bin {

    // Own properties of Handy-1.Handy.TabView

    static name: string
    static $gtype: GObject.GType<TabView>

    // Constructors of Handy-1.Handy.TabView

    constructor(config?: TabView.ConstructorProperties) 
    /**
     * Creates a new `HdyTabView`.
     * @constructor 
     * @returns the newly created `HdyTabView`
     */
    constructor() 
    /**
     * Creates a new `HdyTabView`.
     * @constructor 
     * @returns the newly created `HdyTabView`
     */
    static new(): TabView
    _init(config?: TabView.ConstructorProperties): void
}

module TitleBar {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.TitleBar

        /**
         * Whether or not the title bar is in selection mode.
         */
        selection_mode?: boolean | null
    }

}

interface TitleBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.TitleBar

    /**
     * Whether or not the title bar is in selection mode.
     */
    selection_mode: boolean

    // Owm methods of Handy-1.Handy.TitleBar

    /**
     * Returns whether whether `self` is in selection mode.
     * @returns `TRUE` if the title bar is in selection mode
     */
    get_selection_mode(): boolean
    /**
     * Sets whether `self` is in selection mode.
     * @param selection_mode `TRUE` to enable the selection mode
     */
    set_selection_mode(selection_mode: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.TitleBar

    connect(sigName: "notify::selection-mode", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TitleBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A simple title bar container.
 * 
 * `HdyTitleBar` is meant to be used as the top-level widget of your window's
 * title bar. It will be drawn with the same style as a [class`Gtk`.HeaderBar]
 * but it won't force a widget layout on you: you can put whatever widget you
 * want in it, including a [class`Gtk`.HeaderBar].
 * 
 * `HdyTitleBar` becomes really useful when you want to animate header bars,
 * like an adaptive application using [class`Leaflet]` would do.
 * 
 * `HdyTitleBar` has been deprecated, header bars can be animated without it
 * when placed inside [class`Window]` or [class`ApplicationWindow]`.
 * 
 * ## CSS nodes
 * 
 * `HdyTitleBar` has a single CSS node with name `headerbar`.
 * @class 
 */
class TitleBar extends Gtk.Bin {

    // Own properties of Handy-1.Handy.TitleBar

    static name: string
    static $gtype: GObject.GType<TitleBar>

    // Constructors of Handy-1.Handy.TitleBar

    constructor(config?: TitleBar.ConstructorProperties) 
    /**
     * Creates a new `HdyTitleBar`.
     * @constructor 
     * @returns a new `HdyTitleBar`
     */
    constructor() 
    /**
     * Creates a new `HdyTitleBar`.
     * @constructor 
     * @returns a new `HdyTitleBar`
     */
    static new(): TitleBar
    _init(config?: TitleBar.ConstructorProperties): void
}

module ValueObject {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ValueObject

        /**
         * The contained value.
         */
        value?: any | null
    }

}

interface ValueObject {

    // Own properties of Handy-1.Handy.ValueObject

    /**
     * The contained value.
     */
    readonly value: any

    // Owm methods of Handy-1.Handy.ValueObject

    /**
     * Copy data from the contained [struct`GObject`.Value] into `dest`.
     * @param dest value with correct type to copy into
     */
    copy_value(dest: any): void
    /**
     * Gets a copy of the contained string if the value is of type `G_TYPE_STRING`.
     * @returns a copy of the contained string
     */
    dup_string(): string | null
    /**
     * Returns the contained string if the value is of type `G_TYPE_STRING`.
     * @returns the contained string
     */
    get_string(): string | null
    /**
     * Return the contained value.
     * @returns the contained [struct@GObject.Value]
     */
    get_value(): any

    // Class property signals of Handy-1.Handy.ValueObject

    connect(sigName: "notify::value", callback: (($obj: ValueObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ValueObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing a [struct`GObject`.Value].
 * 
 * The `HdyValueObject` object represents a [struct`GObject`.Value], allowing it
 * to be used with [iface`Gio`.ListModel].
 * @class 
 */
class ValueObject extends GObject.Object {

    // Own properties of Handy-1.Handy.ValueObject

    static name: string
    static $gtype: GObject.GType<ValueObject>

    // Constructors of Handy-1.Handy.ValueObject

    constructor(config?: ValueObject.ConstructorProperties) 
    /**
     * Creates a new `HdyValueObject`.
     * @constructor 
     * @param value the value to store
     * @returns a new `HdyValueObject`
     */
    constructor(value: any) 
    /**
     * Creates a new `HdyValueObject`.
     * @constructor 
     * @param value the value to store
     * @returns a new `HdyValueObject`
     */
    static new(value: any): ValueObject
    _init(config?: ValueObject.ConstructorProperties): void
}

module ViewSwitcher {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ViewSwitcher

        /**
         * The preferred place to ellipsize the string.
         * 
         * If the narrow mode label does not have enough room to display the entire
         * string, specified as a [enum`Pango`.EllipsizeMode].
         * 
         * Note that setting this property to a value other than
         * `PANGO_ELLIPSIZE_NONE` has the side-effect that the label requests only
         * enough space to display the ellipsis.
         */
        narrow_ellipsize?: Pango.EllipsizeMode | null
        /**
         * The policy to determine which mode to use.
         */
        policy?: ViewSwitcherPolicy | null
        /**
         * The [class`Gtk`.Stack] the view switcher controls.
         */
        stack?: Gtk.Stack | null
    }

}

interface ViewSwitcher extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ViewSwitcher

    /**
     * The preferred place to ellipsize the string.
     * 
     * If the narrow mode label does not have enough room to display the entire
     * string, specified as a [enum`Pango`.EllipsizeMode].
     * 
     * Note that setting this property to a value other than
     * `PANGO_ELLIPSIZE_NONE` has the side-effect that the label requests only
     * enough space to display the ellipsis.
     */
    narrow_ellipsize: Pango.EllipsizeMode
    /**
     * The policy to determine which mode to use.
     */
    policy: ViewSwitcherPolicy
    /**
     * The [class`Gtk`.Stack] the view switcher controls.
     */
    stack: Gtk.Stack

    // Owm methods of Handy-1.Handy.ViewSwitcher

    /**
     * Get the ellipsizing position of the narrow mode label.
     * @returns a [enum@Pango.EllipsizeMode]
     */
    get_narrow_ellipsize(): Pango.EllipsizeMode
    /**
     * Gets the policy of `self`.
     * @returns the policy of @self
     */
    get_policy(): ViewSwitcherPolicy
    /**
     * Gets the stack controlled by `self`.
     * @returns the stack
     */
    get_stack(): Gtk.Stack | null
    /**
     * Sets the mode used to ellipsize the text in narrow mode.
     * @param mode a [enum`Pango`.EllipsizeMode]
     */
    set_narrow_ellipsize(mode: Pango.EllipsizeMode): void
    /**
     * Sets the policy of `self`.
     * @param policy the new policy
     */
    set_policy(policy: ViewSwitcherPolicy): void
    /**
     * Sets the [class`Gtk`.Stack] to control.
     * @param stack a stack
     */
    set_stack(stack: Gtk.Stack | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.ViewSwitcher

    connect(sigName: "notify::narrow-ellipsize", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::narrow-ellipsize", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::narrow-ellipsize", ...args: any[]): void
    connect(sigName: "notify::policy", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::policy", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::policy", ...args: any[]): void
    connect(sigName: "notify::stack", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stack", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An adaptive view switcher.
 * 
 * An adaptive view switcher, designed to switch between multiple views in a
 * similar fashion than a [class`Gtk`.StackSwitcher].
 * 
 * Depending on the available width, the view switcher can adapt from a wide
 * mode showing the view's icon and title side by side, to a narrow mode showing
 * the view's icon and title one on top of the other, in a more compact way.
 * This can be controlled via the policy property.
 * 
 * To look good in a header bar, an `HdyViewSwitcher` requires to fill its full
 * height. Contrary to [class`Gtk`.HeaderBar], [class`HeaderBar]` doesn't force a
 * vertical alignment on its title widget, so we recommend it over
 * [class`Gtk`.HeaderBar].
 * 
 * ## CSS nodes
 * 
 * `HdyViewSwitcher` has a single CSS node with name `viewswitcher`.
 * @class 
 */
class ViewSwitcher extends Gtk.Bin {

    // Own properties of Handy-1.Handy.ViewSwitcher

    static name: string
    static $gtype: GObject.GType<ViewSwitcher>

    // Constructors of Handy-1.Handy.ViewSwitcher

    constructor(config?: ViewSwitcher.ConstructorProperties) 
    /**
     * Creates a new `HdyViewSwitcher`.
     * @constructor 
     * @returns the newly created `HdyViewSwitcher`
     */
    constructor() 
    /**
     * Creates a new `HdyViewSwitcher`.
     * @constructor 
     * @returns the newly created `HdyViewSwitcher`
     */
    static new(): ViewSwitcher
    _init(config?: ViewSwitcher.ConstructorProperties): void
}

module ViewSwitcherBar {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ViewSwitcherBar

        /**
         * The policy used to determine which mode to use.
         */
        policy?: ViewSwitcherPolicy | null
        /**
         * Whether the bar should be revealed or hidden.
         */
        reveal?: boolean | null
        /**
         * The [class`Gtk`.Stack] the [class`ViewSwitcher]` controls.
         */
        stack?: Gtk.Stack | null
    }

}

interface ViewSwitcherBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ViewSwitcherBar

    /**
     * The policy used to determine which mode to use.
     */
    policy: ViewSwitcherPolicy
    /**
     * Whether the bar should be revealed or hidden.
     */
    reveal: boolean
    /**
     * The [class`Gtk`.Stack] the [class`ViewSwitcher]` controls.
     */
    stack: Gtk.Stack

    // Owm methods of Handy-1.Handy.ViewSwitcherBar

    /**
     * Gets the policy of `self`.
     * @returns the policy of @self
     */
    get_policy(): ViewSwitcherPolicy
    /**
     * Gets whether `self` should be revealed or hidden.
     * @returns whether @self is revealed
     */
    get_reveal(): boolean
    /**
     * Get the [class`Gtk`.Stack] being controlled by the [class`ViewSwitcher]`.
     * @returns the stack
     */
    get_stack(): Gtk.Stack | null
    /**
     * Sets the policy of `self`.
     * @param policy the new policy
     */
    set_policy(policy: ViewSwitcherPolicy): void
    /**
     * Sets whether `self` should be revealed or not.
     * @param reveal `TRUE` to reveal `self`
     */
    set_reveal(reveal: boolean): void
    /**
     * Sets the [class`Gtk`.Stack] to control.
     * @param stack a stack
     */
    set_stack(stack: Gtk.Stack | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.ViewSwitcherBar

    connect(sigName: "notify::policy", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::policy", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::policy", ...args: any[]): void
    connect(sigName: "notify::reveal", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal", ...args: any[]): void
    connect(sigName: "notify::stack", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stack", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A view switcher action bar.
 * 
 * An action bar letting you switch between multiple views offered by a
 * [class`Gtk`.Stack], via an [class`ViewSwitcher]`. It is designed to be put at
 * the bottom of a window and to be revealed only on really narrow windows e.g.
 * on mobile phones. It can't be revealed if there are less than two pages.
 * 
 * `HdyViewSwitcherBar` is intended to be used together with
 * [class`ViewSwitcherTitle]`.
 * 
 * A common use case is to bind the [property`ViewSwitcherBar:`reveal] property
 * to [property`ViewSwitcherTitle:`title-visible] to automatically reveal the
 * view switcher bar when the title label is displayed in place of the view
 * switcher, as follows:
 * 
 * ```xml
 * <object class="GtkWindow"/>
 *   <child type="titlebar">
 *     <object class="HdyHeaderBar">
 *       <property name="centering-policy">strict</property>
 *       <child type="title">
 *         <object class="HdyViewSwitcherTitle"
 *                 id="view_switcher_title">
 *           <property name="stack">stack</property>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 *   <child>
 *     <object class="GtkBox">
 *       <child>
 *         <object class="GtkStack" id="stack"/>
 *       </child>
 *       <child>
 *         <object class="HdyViewSwitcherBar">
 *           <property name="stack">stack</property>
 *           <property name="reveal"
 *                     bind-source="view_switcher_title"
 *                     bind-property="title-visible"
 *                     bind-flags="sync-create"/>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `HdyViewSwitcherBar` has a single CSS node with name `viewswitcherbar`.
 * @class 
 */
class ViewSwitcherBar extends Gtk.Bin {

    // Own properties of Handy-1.Handy.ViewSwitcherBar

    static name: string
    static $gtype: GObject.GType<ViewSwitcherBar>

    // Constructors of Handy-1.Handy.ViewSwitcherBar

    constructor(config?: ViewSwitcherBar.ConstructorProperties) 
    /**
     * Creates a new `HdyViewSwitcherBar`.
     * @constructor 
     * @returns the newly created `HdyViewSwitcherBar`
     */
    constructor() 
    /**
     * Creates a new `HdyViewSwitcherBar`.
     * @constructor 
     * @returns the newly created `HdyViewSwitcherBar`
     */
    static new(): ViewSwitcherBar
    _init(config?: ViewSwitcherBar.ConstructorProperties): void
}

module ViewSwitcherTitle {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ViewSwitcherTitle

        /**
         * The policy used to determine which mode to use.
         */
        policy?: ViewSwitcherPolicy | null
        /**
         * The [class`Gtk`.Stack] the [class`ViewSwitcher]` controls.
         */
        stack?: Gtk.Stack | null
        /**
         * The subtitle of the [class`ViewSwitcher]`.
         * 
         * The subtitle should give a user additional details.
         */
        subtitle?: string | null
        /**
         * The title of the [class`ViewSwitcher]`.
         * 
         * The title should give a user additional details. A good title should not
         * include the application name.
         */
        title?: string | null
        /**
         * Whether the bar should be revealed or hidden.
         * 
         * If it is disabled, the title will be displayed instead. This allows to
         * programmatically hide the view switcher even if it fits in the available
         * space.
         * 
         * This can be used e.g. to ensure the view switcher is hidden below a certain
         * window width, or any other constraint you find suitable.
         */
        view_switcher_enabled?: boolean | null
    }

}

interface ViewSwitcherTitle extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ViewSwitcherTitle

    /**
     * The policy used to determine which mode to use.
     */
    policy: ViewSwitcherPolicy
    /**
     * The [class`Gtk`.Stack] the [class`ViewSwitcher]` controls.
     */
    stack: Gtk.Stack
    /**
     * The subtitle of the [class`ViewSwitcher]`.
     * 
     * The subtitle should give a user additional details.
     */
    subtitle: string | null
    /**
     * The title of the [class`ViewSwitcher]`.
     * 
     * The title should give a user additional details. A good title should not
     * include the application name.
     */
    title: string | null
    /**
     * Whether the bar should be revealed or hidden.
     */
    readonly title_visible: boolean
    /**
     * Whether the bar should be revealed or hidden.
     * 
     * If it is disabled, the title will be displayed instead. This allows to
     * programmatically hide the view switcher even if it fits in the available
     * space.
     * 
     * This can be used e.g. to ensure the view switcher is hidden below a certain
     * window width, or any other constraint you find suitable.
     */
    view_switcher_enabled: boolean

    // Owm methods of Handy-1.Handy.ViewSwitcherTitle

    /**
     * Gets the policy of `self`.
     * @returns the policy of @self
     */
    get_policy(): ViewSwitcherPolicy
    /**
     * Gets the stack controlled by `self`.
     * @returns the stack
     */
    get_stack(): Gtk.Stack | null
    /**
     * Gets the subtitle of `self`.
     * @returns the subtitle of @self
     */
    get_subtitle(): string | null
    /**
     * Gets the title of `self`.
     * @returns the title of @self
     */
    get_title(): string | null
    /**
     * Gets whether the title of `self` is currently visible.
     * @returns whether the title of @self is currently visible
     */
    get_title_visible(): boolean
    /**
     * Gets whether `self'`s view switcher is enabled.
     * @returns whether the view switcher is enabled
     */
    get_view_switcher_enabled(): boolean
    /**
     * Sets the policy of `self`.
     * @param policy the new policy
     */
    set_policy(policy: ViewSwitcherPolicy): void
    /**
     * Sets the [class`Gtk`.Stack] to control.
     * @param stack a stack
     */
    set_stack(stack: Gtk.Stack | null): void
    /**
     * Sets the subtitle of `self`.
     * @param subtitle a subtitle
     */
    set_subtitle(subtitle: string | null): void
    /**
     * Sets the title of `self`.
     * @param title a title
     */
    set_title(title: string | null): void
    /**
     * Sets whether `self'`s view switcher is enabled.
     * @param enabled `TRUE` to enable the view switcher, `FALSE` to disable it
     */
    set_view_switcher_enabled(enabled: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.ViewSwitcherTitle

    connect(sigName: "notify::policy", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::policy", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::policy", ...args: any[]): void
    connect(sigName: "notify::stack", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stack", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-visible", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-visible", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-visible", ...args: any[]): void
    connect(sigName: "notify::view-switcher-enabled", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view-switcher-enabled", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view-switcher-enabled", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A view switcher title.
 * 
 * A widget letting you switch between multiple views contained by a
 * [class`Gtk`.Stack], via an [class`ViewSwitcher]`.
 * 
 * It is designed to be used as the title widget of a [class`HeaderBar]`, and
 * will display the window's title when the window is too narrow to fit the view
 * switcher e.g. on mobile phones, or if there are less than two views.
 * 
 * `HdyViewSwitcherTitle` is intended to be used together with
 * [class`ViewSwitcherBar]`.
 * 
 * A common use case is to bind the [property`ViewSwitcherBar:`reveal] property
 * to [property`ViewSwitcherTitle:`title-visible] to automatically reveal the
 * view switcher bar when the title label is displayed in place of the view
 * switcher, as follows:
 * 
 * ```xml
 * <object class="GtkWindow"/>
 *   <child type="titlebar">
 *     <object class="HdyHeaderBar">
 *       <property name="centering-policy">strict</property>
 *       <child type="title">
 *         <object class="HdyViewSwitcherTitle"
 *                 id="view_switcher_title">
 *           <property name="stack">stack</property>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 *   <child>
 *     <object class="GtkBox">
 *       <child>
 *         <object class="GtkStack" id="stack"/>
 *       </child>
 *       <child>
 *         <object class="HdyViewSwitcherBar">
 *           <property name="stack">stack</property>
 *           <property name="reveal"
 *                     bind-source="view_switcher_title"
 *                     bind-property="title-visible"
 *                     bind-flags="sync-create"/>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `HdyViewSwitcherTitle` has a single CSS node with name `viewswitchertitle`.
 * @class 
 */
class ViewSwitcherTitle extends Gtk.Bin {

    // Own properties of Handy-1.Handy.ViewSwitcherTitle

    static name: string
    static $gtype: GObject.GType<ViewSwitcherTitle>

    // Constructors of Handy-1.Handy.ViewSwitcherTitle

    constructor(config?: ViewSwitcherTitle.ConstructorProperties) 
    /**
     * Creates a new `HdyViewSwitcherTitle`.
     * @constructor 
     * @returns the newly created `HdyViewSwitcherTitle`
     */
    constructor() 
    /**
     * Creates a new `HdyViewSwitcherTitle`.
     * @constructor 
     * @returns the newly created `HdyViewSwitcherTitle`
     */
    static new(): ViewSwitcherTitle
    _init(config?: ViewSwitcherTitle.ConstructorProperties): void
}

module Window {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Window.ConstructorProperties {
    }

}

interface Window extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Handy-1.Handy.Window

    parent_instance: Gtk.Window & GObject.InitiallyUnowned

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.Window

    connect(sigName: "notify::accept-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A freeform window.
 * 
 * The `HdyWindow` widget is a subclass of [class`Gtk`.Window] which has no
 * titlebar area and provides rounded corners on all sides, ensuring they can
 * never be overlapped by the content. This makes it safe to use headerbars in
 * the content area as follows:
 * 
 * ```xml
 * <object class="HdyWindow"/>
 *   <child>
 *     <object class="GtkBox">
 *       <property name="visible">True</property>
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="HdyHeaderBar">
 *           <property name="visible">True</property>
 *           <property name="show-close-button">True</property>
 *         </object>
 *       </child>
 *       <child>
 *         <!-- ... -->
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * It's recommended to use [class`HeaderBar]` with `HdyWindow`, as unlike
 * [class`Gtk`.HeaderBar] it remains draggable inside the window. Otherwise,
 * [class`WindowHandle]` can be used.
 * 
 * `HdyWindow` allows to easily implement titlebar autohiding by putting the
 * headerbar inside a [class`Gtk`.Revealer], and to show titlebar above content
 * by putting it into a [class`Gtk`.Overlay] instead of [class`Gtk`.Box].
 * 
 * If the window has a [class`Gtk`.GLArea], it may bring a slight performance
 * regression when the window is not fullscreen, tiled or maximized.
 * 
 * Using [method`Gtk`.Window.get_titlebar] and [method`Gtk`.Window.set_titlebar]
 * is not supported and will result in a crash.
 * 
 * ## CSS nodes
 * 
 * `HdyWindow` has a main CSS node with the name `window` and style classes
 * `.background`, `.csd` and `.unified`.
 * 
 * The `.solid-csd` style class on the main node is used for client-side
 * decorations without invisible borders.
 * 
 * `HdyWindow` also represents window states with the following style classes on
 * the main node: `.tiled`, `.maximized`, `.fullscreen`.
 * 
 * It contains the subnodes decoration for window shadow and/or border,
 * decoration-overlay for the sheen on top of the window, `widget.titlebar`, and
 * deck, which contains the child inside the window.
 * @class 
 */
class Window extends Gtk.Window {

    // Own properties of Handy-1.Handy.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Handy-1.Handy.Window

    constructor(config?: Window.ConstructorProperties) 
    /**
     * Creates a new `HdyWindow`.
     * @constructor 
     * @returns the newly created `HdyWindow`
     */
    constructor() 
    /**
     * Creates a new `HdyWindow`.
     * @constructor 
     * @returns the newly created `HdyWindow`
     */
    static new(): Window

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: Window.ConstructorProperties): void
}

module WindowHandle {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {
    }

}

interface WindowHandle extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Handy-1.Handy.WindowHandle

    connect(sigName: "notify::above-child", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WindowHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A bin that acts like a titlebar.
 * 
 * `HdyWindowHandle` is a [class`Gtk`.Bin] subclass that can be dragged to move
 * its [class`Gtk`.Window], and handles right click, middle click and double
 * click as expected from a titlebar. This is particularly useful with
 * [class`Window]` or [class`ApplicationWindow]`.
 * 
 * It isn't necessary to use `HdyWindowHandle` if you use [class`HeaderBar]`.
 * 
 * It can be safely nested or used in the actual window titlebar.
 * 
 * ## CSS nodes
 * 
 * `HdyWindowHandle` has a single CSS node with name `windowhandle`.
 * @class 
 */
class WindowHandle extends Gtk.EventBox {

    // Own properties of Handy-1.Handy.WindowHandle

    static name: string
    static $gtype: GObject.GType<WindowHandle>

    // Constructors of Handy-1.Handy.WindowHandle

    constructor(config?: WindowHandle.ConstructorProperties) 
    /**
     * Creates a new `HdyWindowHandle`.
     * @constructor 
     * @returns the newly created `HdyWindowHandle`
     */
    constructor() 
    /**
     * Creates a new `HdyWindowHandle`.
     * @constructor 
     * @returns the newly created `HdyWindowHandle`
     */
    static new(): WindowHandle
    _init(config?: WindowHandle.ConstructorProperties): void
}

interface ActionRowClass {

    // Own fields of Handy-1.Handy.ActionRowClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gtk.ListBoxRowClass
    activate: (self: ActionRow) => void
}

abstract class ActionRowClass {

    // Own properties of Handy-1.Handy.ActionRowClass

    static name: string
}

interface ApplicationWindowClass {

    // Own fields of Handy-1.Handy.ApplicationWindowClass

    parent_class: Gtk.ApplicationWindowClass
}

abstract class ApplicationWindowClass {

    // Own properties of Handy-1.Handy.ApplicationWindowClass

    static name: string
}

interface AvatarClass {

    // Own fields of Handy-1.Handy.AvatarClass

    parent_class: Gtk.DrawingAreaClass
}

abstract class AvatarClass {

    // Own properties of Handy-1.Handy.AvatarClass

    static name: string
}

interface CarouselClass {

    // Own fields of Handy-1.Handy.CarouselClass

    parent_class: Gtk.EventBoxClass
}

abstract class CarouselClass {

    // Own properties of Handy-1.Handy.CarouselClass

    static name: string
}

interface CarouselIndicatorDotsClass {

    // Own fields of Handy-1.Handy.CarouselIndicatorDotsClass

    parent_class: Gtk.DrawingAreaClass
}

abstract class CarouselIndicatorDotsClass {

    // Own properties of Handy-1.Handy.CarouselIndicatorDotsClass

    static name: string
}

interface CarouselIndicatorLinesClass {

    // Own fields of Handy-1.Handy.CarouselIndicatorLinesClass

    parent_class: Gtk.DrawingAreaClass
}

abstract class CarouselIndicatorLinesClass {

    // Own properties of Handy-1.Handy.CarouselIndicatorLinesClass

    static name: string
}

interface ClampClass {

    // Own fields of Handy-1.Handy.ClampClass

    parent_class: Gtk.BinClass
}

abstract class ClampClass {

    // Own properties of Handy-1.Handy.ClampClass

    static name: string
}

interface ComboRowClass {

    // Own fields of Handy-1.Handy.ComboRowClass

    /**
     * the parent class
     * @field 
     */
    parent_class: ActionRowClass
}

abstract class ComboRowClass {

    // Own properties of Handy-1.Handy.ComboRowClass

    static name: string
}

interface DeckClass {

    // Own fields of Handy-1.Handy.DeckClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gtk.ContainerClass
}

abstract class DeckClass {

    // Own properties of Handy-1.Handy.DeckClass

    static name: string
}

interface EnumValueObjectClass {

    // Own fields of Handy-1.Handy.EnumValueObjectClass

    parent_class: GObject.ObjectClass
}

abstract class EnumValueObjectClass {

    // Own properties of Handy-1.Handy.EnumValueObjectClass

    static name: string
}

interface ExpanderRowClass {

    // Own fields of Handy-1.Handy.ExpanderRowClass

    /**
     * the parent class
     * @field 
     */
    parent_class: PreferencesRowClass
}

abstract class ExpanderRowClass {

    // Own properties of Handy-1.Handy.ExpanderRowClass

    static name: string
}

interface FlapClass {

    // Own fields of Handy-1.Handy.FlapClass

    parent_class: Gtk.ContainerClass
}

abstract class FlapClass {

    // Own properties of Handy-1.Handy.FlapClass

    static name: string
}

interface HeaderBarClass {

    // Own fields of Handy-1.Handy.HeaderBarClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gtk.ContainerClass
}

abstract class HeaderBarClass {

    // Own properties of Handy-1.Handy.HeaderBarClass

    static name: string
}

interface HeaderGroupChildClass {

    // Own fields of Handy-1.Handy.HeaderGroupChildClass

    parent_class: GObject.ObjectClass
}

abstract class HeaderGroupChildClass {

    // Own properties of Handy-1.Handy.HeaderGroupChildClass

    static name: string
}

interface HeaderGroupClass {

    // Own fields of Handy-1.Handy.HeaderGroupClass

    parent_class: GObject.ObjectClass
}

abstract class HeaderGroupClass {

    // Own properties of Handy-1.Handy.HeaderGroupClass

    static name: string
}

interface KeypadClass {

    // Own fields of Handy-1.Handy.KeypadClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gtk.BinClass
}

abstract class KeypadClass {

    // Own properties of Handy-1.Handy.KeypadClass

    static name: string
}

interface LeafletClass {

    // Own fields of Handy-1.Handy.LeafletClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gtk.ContainerClass
}

abstract class LeafletClass {

    // Own properties of Handy-1.Handy.LeafletClass

    static name: string
}

interface PreferencesGroupClass {

    // Own fields of Handy-1.Handy.PreferencesGroupClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gtk.BinClass
}

abstract class PreferencesGroupClass {

    // Own properties of Handy-1.Handy.PreferencesGroupClass

    static name: string
}

interface PreferencesPageClass {

    // Own fields of Handy-1.Handy.PreferencesPageClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gtk.BinClass
}

abstract class PreferencesPageClass {

    // Own properties of Handy-1.Handy.PreferencesPageClass

    static name: string
}

interface PreferencesRowClass {

    // Own fields of Handy-1.Handy.PreferencesRowClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gtk.ListBoxRowClass
}

abstract class PreferencesRowClass {

    // Own properties of Handy-1.Handy.PreferencesRowClass

    static name: string
}

interface PreferencesWindowClass {

    // Own fields of Handy-1.Handy.PreferencesWindowClass

    /**
     * the parent class
     * @field 
     */
    parent_class: WindowClass
}

abstract class PreferencesWindowClass {

    // Own properties of Handy-1.Handy.PreferencesWindowClass

    static name: string
}

interface SearchBarClass {

    // Own fields of Handy-1.Handy.SearchBarClass

    parent_class: Gtk.BinClass
}

abstract class SearchBarClass {

    // Own properties of Handy-1.Handy.SearchBarClass

    static name: string
}

interface SqueezerClass {

    // Own fields of Handy-1.Handy.SqueezerClass

    parent_class: Gtk.ContainerClass
}

abstract class SqueezerClass {

    // Own properties of Handy-1.Handy.SqueezerClass

    static name: string
}

interface StatusPageClass {

    // Own fields of Handy-1.Handy.StatusPageClass

    parent_class: Gtk.BinClass
}

abstract class StatusPageClass {

    // Own properties of Handy-1.Handy.StatusPageClass

    static name: string
}

interface StyleManagerClass {

    // Own fields of Handy-1.Handy.StyleManagerClass

    parent_class: GObject.ObjectClass
}

abstract class StyleManagerClass {

    // Own properties of Handy-1.Handy.StyleManagerClass

    static name: string
}

interface SwipeGroupClass {

    // Own fields of Handy-1.Handy.SwipeGroupClass

    parent_class: GObject.ObjectClass
}

abstract class SwipeGroupClass {

    // Own properties of Handy-1.Handy.SwipeGroupClass

    static name: string
}

interface SwipeTrackerClass {

    // Own fields of Handy-1.Handy.SwipeTrackerClass

    parent_class: GObject.ObjectClass
}

abstract class SwipeTrackerClass {

    // Own properties of Handy-1.Handy.SwipeTrackerClass

    static name: string
}

interface SwipeableInterface {

    // Own fields of Handy-1.Handy.SwipeableInterface

    /**
     * the parent interface
     * @field 
     */
    parent: GObject.TypeInterface
    switch_child: (self: Swipeable, index: number, duration: number) => void
    get_swipe_tracker: (self: Swipeable) => SwipeTracker
    get_distance: (self: Swipeable) => number
    get_snap_points: (self: Swipeable) => number[]
    get_progress: (self: Swipeable) => number
    get_cancel_progress: (self: Swipeable) => number
    get_swipe_area: (self: Swipeable, navigation_direction: NavigationDirection, is_drag: boolean) => /* rect */ Gdk.Rectangle
}

/**
 * An interface for swipeable widgets.
 * @record 
 */
abstract class SwipeableInterface {

    // Own properties of Handy-1.Handy.SwipeableInterface

    static name: string
}

interface TabBarClass {

    // Own fields of Handy-1.Handy.TabBarClass

    parent_class: Gtk.BinClass
}

abstract class TabBarClass {

    // Own properties of Handy-1.Handy.TabBarClass

    static name: string
}

interface TabPageClass {

    // Own fields of Handy-1.Handy.TabPageClass

    parent_class: GObject.ObjectClass
}

abstract class TabPageClass {

    // Own properties of Handy-1.Handy.TabPageClass

    static name: string
}

interface TabViewClass {

    // Own fields of Handy-1.Handy.TabViewClass

    parent_class: Gtk.BinClass
}

abstract class TabViewClass {

    // Own properties of Handy-1.Handy.TabViewClass

    static name: string
}

interface TitleBarClass {

    // Own fields of Handy-1.Handy.TitleBarClass

    parent_class: Gtk.BinClass
}

abstract class TitleBarClass {

    // Own properties of Handy-1.Handy.TitleBarClass

    static name: string
}

interface ValueObjectClass {

    // Own fields of Handy-1.Handy.ValueObjectClass

    parent_class: GObject.ObjectClass
}

abstract class ValueObjectClass {

    // Own properties of Handy-1.Handy.ValueObjectClass

    static name: string
}

interface ViewSwitcherBarClass {

    // Own fields of Handy-1.Handy.ViewSwitcherBarClass

    parent_class: Gtk.BinClass
}

abstract class ViewSwitcherBarClass {

    // Own properties of Handy-1.Handy.ViewSwitcherBarClass

    static name: string
}

interface ViewSwitcherClass {

    // Own fields of Handy-1.Handy.ViewSwitcherClass

    parent_class: Gtk.BinClass
}

abstract class ViewSwitcherClass {

    // Own properties of Handy-1.Handy.ViewSwitcherClass

    static name: string
}

interface ViewSwitcherTitleClass {

    // Own fields of Handy-1.Handy.ViewSwitcherTitleClass

    parent_class: Gtk.BinClass
}

abstract class ViewSwitcherTitleClass {

    // Own properties of Handy-1.Handy.ViewSwitcherTitleClass

    static name: string
}

interface WindowClass {

    // Own fields of Handy-1.Handy.WindowClass

    parent_class: Gtk.WindowClass
}

abstract class WindowClass {

    // Own properties of Handy-1.Handy.WindowClass

    static name: string
}

interface WindowHandleClass {

    // Own fields of Handy-1.Handy.WindowHandleClass

    parent_class: Gtk.EventBoxClass
}

abstract class WindowHandleClass {

    // Own properties of Handy-1.Handy.WindowHandleClass

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

export default Handy;
// END