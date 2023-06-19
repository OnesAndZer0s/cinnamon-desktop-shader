
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cscreensaver-1.0-import.d.ts';
/**
 * CScreensaver-1.0
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

export namespace CScreensaver {

/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-Cinnamon.top_of_page">org.Cinnamon</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function cinnamon_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsCinnamon interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function cinnamon_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Manager.top_of_page">org.freedesktop.ConsoleKit.Manager</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function console_kit_manager_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsConsoleKitManager interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function console_kit_manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Session.top_of_page">org.freedesktop.ConsoleKit.Session</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function console_kit_session_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsConsoleKitSession interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function console_kit_session_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-cinnamon-SettingsDaemon-KeybindingHandler.top_of_page">org.cinnamon.SettingsDaemon.KeybindingHandler</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function keybinding_handler_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsKeybindingHandler interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function keybinding_handler_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-login1-Manager.top_of_page">org.freedesktop.login1.Manager</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function logind_manager_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsLogindManager interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function logind_manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-login1-Session.top_of_page">org.freedesktop.login1.Session</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function logind_session_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsLogindSession interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function logind_session_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-mpris-MediaPlayer2-Player.top_of_page">org.mpris.MediaPlayer2.Player</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function media_player_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsMediaPlayer interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function media_player_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-cinnamon-Muffin-DisplayConfig.top_of_page">org.cinnamon.Muffin.DisplayConfig</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function muffin_display_config_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsMuffinDisplayConfig interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function muffin_display_config_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-cinnamon-ScreenSaver.top_of_page">org.cinnamon.ScreenSaver</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function screen_saver_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsScreenSaver interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function screen_saver_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-SessionManager-Presence.top_of_page">org.gnome.SessionManager.Presence</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function session_presence_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsSessionPresence interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function session_presence_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function upower_device_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsUPowerDevice interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function upower_device_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function upower_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CsUPower interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function upower_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
module Cinnamon {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CScreensaver-1.0.CScreensaver.Cinnamon

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-Cinnamon.ExpoActive">"ExpoActive"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        expo_active?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-Cinnamon.OverviewActive">"OverviewActive"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        overview_active?: boolean | null
    }

}

interface Cinnamon {

    // Own properties of CScreensaver-1.0.CScreensaver.Cinnamon

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-Cinnamon.ExpoActive">"ExpoActive"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    expo_active: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-Cinnamon.OverviewActive">"OverviewActive"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    overview_active: boolean

    // Class property signals of CScreensaver-1.0.CScreensaver.Cinnamon

    connect(sigName: "notify::expo-active", callback: (($obj: Cinnamon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expo-active", callback: (($obj: Cinnamon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expo-active", ...args: any[]): void
    connect(sigName: "notify::overview-active", callback: (($obj: Cinnamon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overview-active", callback: (($obj: Cinnamon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overview-active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-Cinnamon.top_of_page">org.Cinnamon</link>.
 * @interface 
 */
class Cinnamon extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.Cinnamon

    static name: string
    static $gtype: GObject.GType<Cinnamon>

    // Constructors of CScreensaver-1.0.CScreensaver.Cinnamon

    constructor(config?: Cinnamon.ConstructorProperties) 
    _init(config?: Cinnamon.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-Cinnamon.top_of_page">org.Cinnamon</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsCinnamon interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module ConsoleKitManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-current-session`
     */
    interface HandleGetCurrentSessionSignalCallback {
        ($obj: ConsoleKitManager, invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ConsoleKitManager {

    // Owm methods of CScreensaver-1.0.CScreensaver.ConsoleKitManager

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-ConsoleKit-Manager.GetCurrentSession">GetCurrentSession()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_console_kit_manager_call_get_current_session_finish() to get the result of the operation.
     * 
     * See cs_console_kit_manager_call_get_current_session_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_current_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_console_kit_manager_call_get_current_session().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_console_kit_manager_call_get_current_session().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_current_session_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_ssid */ string | null ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-ConsoleKit-Manager.GetCurrentSession">GetCurrentSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_console_kit_manager_call_get_current_session() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_current_session_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ssid */ string | null ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-ConsoleKit-Manager.GetCurrentSession">GetCurrentSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param ssid Parameter to return.
     */
    complete_get_current_session(invocation: Gio.DBusMethodInvocation, ssid: string | null): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.ConsoleKitManager

    vfunc_handle_get_current_session(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of CScreensaver-1.0.CScreensaver.ConsoleKitManager

    connect(sigName: "handle-get-current-session", callback: ConsoleKitManager.HandleGetCurrentSessionSignalCallback): number
    connect_after(sigName: "handle-get-current-session", callback: ConsoleKitManager.HandleGetCurrentSessionSignalCallback): number
    emit(sigName: "handle-get-current-session", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.ConsoleKitManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Manager.top_of_page">org.freedesktop.ConsoleKit.Manager</link>.
 * @interface 
 */
class ConsoleKitManager extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitManager

    static name: string
    static $gtype: GObject.GType<ConsoleKitManager>

    // Constructors of CScreensaver-1.0.CScreensaver.ConsoleKitManager

    constructor(config?: ConsoleKitManager.ConstructorProperties) 
    _init(config?: ConsoleKitManager.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Manager.top_of_page">org.freedesktop.ConsoleKit.Manager</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsConsoleKitManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module ConsoleKitSession {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-changed`
     */
    interface ActiveChangedSignalCallback {
        ($obj: ConsoleKitSession, arg_is_active: boolean): void
    }

    /**
     * Signal callback interface for `handle-lock`
     */
    interface HandleLockSignalCallback {
        ($obj: ConsoleKitSession, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-unlock`
     */
    interface HandleUnlockSignalCallback {
        ($obj: ConsoleKitSession, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `lock`
     */
    interface LockSignalCallback {
        ($obj: ConsoleKitSession): void
    }

    /**
     * Signal callback interface for `unlock`
     */
    interface UnlockSignalCallback {
        ($obj: ConsoleKitSession): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ConsoleKitSession {

    // Owm methods of CScreensaver-1.0.CScreensaver.ConsoleKitSession

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-ConsoleKit-Session.Lock">Lock()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_console_kit_session_call_lock_finish() to get the result of the operation.
     * 
     * See cs_console_kit_session_call_lock_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_lock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_console_kit_session_call_lock().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_console_kit_session_call_lock().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_lock_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-ConsoleKit-Session.Lock">Lock()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_console_kit_session_call_lock() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_lock_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-ConsoleKit-Session.Unlock">Unlock()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_console_kit_session_call_unlock_finish() to get the result of the operation.
     * 
     * See cs_console_kit_session_call_unlock_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_unlock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_console_kit_session_call_unlock().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_console_kit_session_call_unlock().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_unlock_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-ConsoleKit-Session.Unlock">Unlock()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_console_kit_session_call_unlock() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_unlock_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-ConsoleKit-Session.Lock">Lock()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_lock(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-ConsoleKit-Session.Unlock">Unlock()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_unlock(invocation: Gio.DBusMethodInvocation): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-ConsoleKit-Session.ActiveChanged">"ActiveChanged"</link> D-Bus signal.
     * @param arg_is_active Argument to pass with the signal.
     */
    emit_active_changed(arg_is_active: boolean): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-ConsoleKit-Session.Lock">"Lock"</link> D-Bus signal.
     */
    emit_lock(): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-ConsoleKit-Session.Unlock">"Unlock"</link> D-Bus signal.
     */
    emit_unlock(): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.ConsoleKitSession

    vfunc_active_changed(arg_is_active: boolean): void
    vfunc_handle_lock(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_unlock(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_lock(): void
    vfunc_unlock(): void

    // Own signals of CScreensaver-1.0.CScreensaver.ConsoleKitSession

    connect(sigName: "active-changed", callback: ConsoleKitSession.ActiveChangedSignalCallback): number
    connect_after(sigName: "active-changed", callback: ConsoleKitSession.ActiveChangedSignalCallback): number
    emit(sigName: "active-changed", arg_is_active: boolean, ...args: any[]): void
    connect(sigName: "handle-lock", callback: ConsoleKitSession.HandleLockSignalCallback): number
    connect_after(sigName: "handle-lock", callback: ConsoleKitSession.HandleLockSignalCallback): number
    emit(sigName: "handle-lock", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-unlock", callback: ConsoleKitSession.HandleUnlockSignalCallback): number
    connect_after(sigName: "handle-unlock", callback: ConsoleKitSession.HandleUnlockSignalCallback): number
    emit(sigName: "handle-unlock", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "lock", callback: ConsoleKitSession.LockSignalCallback): number
    connect_after(sigName: "lock", callback: ConsoleKitSession.LockSignalCallback): number
    emit(sigName: "lock", ...args: any[]): void
    connect(sigName: "unlock", callback: ConsoleKitSession.UnlockSignalCallback): number
    connect_after(sigName: "unlock", callback: ConsoleKitSession.UnlockSignalCallback): number
    emit(sigName: "unlock", ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.ConsoleKitSession

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Session.top_of_page">org.freedesktop.ConsoleKit.Session</link>.
 * @interface 
 */
class ConsoleKitSession extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitSession

    static name: string
    static $gtype: GObject.GType<ConsoleKitSession>

    // Constructors of CScreensaver-1.0.CScreensaver.ConsoleKitSession

    constructor(config?: ConsoleKitSession.ConstructorProperties) 
    _init(config?: ConsoleKitSession.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Session.top_of_page">org.freedesktop.ConsoleKit.Session</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsConsoleKitSession interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module KeybindingHandler {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-handle-keybinding`
     */
    interface HandleHandleKeybindingSignalCallback {
        ($obj: KeybindingHandler, invocation: Gio.DBusMethodInvocation, arg_type: number): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface KeybindingHandler {

    // Owm methods of CScreensaver-1.0.CScreensaver.KeybindingHandler

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-cinnamon-SettingsDaemon-KeybindingHandler.HandleKeybinding">HandleKeybinding()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_keybinding_handler_call_handle_keybinding_finish() to get the result of the operation.
     * 
     * See cs_keybinding_handler_call_handle_keybinding_sync() for the synchronous, blocking version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_handle_keybinding(arg_type: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_keybinding_handler_call_handle_keybinding().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_keybinding_handler_call_handle_keybinding().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_handle_keybinding_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-cinnamon-SettingsDaemon-KeybindingHandler.HandleKeybinding">HandleKeybinding()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_keybinding_handler_call_handle_keybinding() for the asynchronous version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_handle_keybinding_sync(arg_type: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-cinnamon-SettingsDaemon-KeybindingHandler.HandleKeybinding">HandleKeybinding()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_handle_keybinding(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.KeybindingHandler

    vfunc_handle_handle_keybinding(invocation: Gio.DBusMethodInvocation, arg_type: number): boolean

    // Own signals of CScreensaver-1.0.CScreensaver.KeybindingHandler

    connect(sigName: "handle-handle-keybinding", callback: KeybindingHandler.HandleHandleKeybindingSignalCallback): number
    connect_after(sigName: "handle-handle-keybinding", callback: KeybindingHandler.HandleHandleKeybindingSignalCallback): number
    emit(sigName: "handle-handle-keybinding", invocation: Gio.DBusMethodInvocation, arg_type: number, ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.KeybindingHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-SettingsDaemon-KeybindingHandler.top_of_page">org.cinnamon.SettingsDaemon.KeybindingHandler</link>.
 * @interface 
 */
class KeybindingHandler extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.KeybindingHandler

    static name: string
    static $gtype: GObject.GType<KeybindingHandler>

    // Constructors of CScreensaver-1.0.CScreensaver.KeybindingHandler

    constructor(config?: KeybindingHandler.ConstructorProperties) 
    _init(config?: KeybindingHandler.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-cinnamon-SettingsDaemon-KeybindingHandler.top_of_page">org.cinnamon.SettingsDaemon.KeybindingHandler</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsKeybindingHandler interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module LogindManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-session`
     */
    interface HandleGetSessionSignalCallback {
        ($obj: LogindManager, invocation: Gio.DBusMethodInvocation, arg_session_id: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface LogindManager {

    // Owm methods of CScreensaver-1.0.CScreensaver.LogindManager

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-login1-Manager.GetSession">GetSession()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_logind_manager_call_get_session_finish() to get the result of the operation.
     * 
     * See cs_logind_manager_call_get_session_sync() for the synchronous, blocking version of this method.
     * @param arg_session_id Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_session(arg_session_id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_logind_manager_call_get_session().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_logind_manager_call_get_session().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_session_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_object_path */ string | null ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-login1-Manager.GetSession">GetSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_logind_manager_call_get_session() for the asynchronous version of this method.
     * @param arg_session_id Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_session_sync(arg_session_id: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_object_path */ string | null ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-login1-Manager.GetSession">GetSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param object_path Parameter to return.
     */
    complete_get_session(invocation: Gio.DBusMethodInvocation, object_path: string | null): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.LogindManager

    vfunc_handle_get_session(invocation: Gio.DBusMethodInvocation, arg_session_id: string | null): boolean

    // Own signals of CScreensaver-1.0.CScreensaver.LogindManager

    connect(sigName: "handle-get-session", callback: LogindManager.HandleGetSessionSignalCallback): number
    connect_after(sigName: "handle-get-session", callback: LogindManager.HandleGetSessionSignalCallback): number
    emit(sigName: "handle-get-session", invocation: Gio.DBusMethodInvocation, arg_session_id: string | null, ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.LogindManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Manager.top_of_page">org.freedesktop.login1.Manager</link>.
 * @interface 
 */
class LogindManager extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindManager

    static name: string
    static $gtype: GObject.GType<LogindManager>

    // Constructors of CScreensaver-1.0.CScreensaver.LogindManager

    constructor(config?: LogindManager.ConstructorProperties) 
    _init(config?: LogindManager.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-login1-Manager.top_of_page">org.freedesktop.login1.Manager</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsLogindManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module LogindSession {

    // Signal callback interfaces

    /**
     * Signal callback interface for `lock`
     */
    interface LockSignalCallback {
        ($obj: LogindSession): void
    }

    /**
     * Signal callback interface for `unlock`
     */
    interface UnlockSignalCallback {
        ($obj: LogindSession): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CScreensaver-1.0.CScreensaver.LogindSession

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-login1-Session.Active">"Active"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        active?: boolean | null
    }

}

interface LogindSession {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindSession

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-login1-Session.Active">"Active"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    active: boolean

    // Owm methods of CScreensaver-1.0.CScreensaver.LogindSession

    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-login1-Session.Lock">"Lock"</link> D-Bus signal.
     */
    emit_lock(): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-login1-Session.Unlock">"Unlock"</link> D-Bus signal.
     */
    emit_unlock(): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.LogindSession

    vfunc_lock(): void
    vfunc_unlock(): void

    // Own signals of CScreensaver-1.0.CScreensaver.LogindSession

    connect(sigName: "lock", callback: LogindSession.LockSignalCallback): number
    connect_after(sigName: "lock", callback: LogindSession.LockSignalCallback): number
    emit(sigName: "lock", ...args: any[]): void
    connect(sigName: "unlock", callback: LogindSession.UnlockSignalCallback): number
    connect_after(sigName: "unlock", callback: LogindSession.UnlockSignalCallback): number
    emit(sigName: "unlock", ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.LogindSession

    connect(sigName: "notify::active", callback: (($obj: LogindSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: LogindSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Session.top_of_page">org.freedesktop.login1.Session</link>.
 * @interface 
 */
class LogindSession extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindSession

    static name: string
    static $gtype: GObject.GType<LogindSession>

    // Constructors of CScreensaver-1.0.CScreensaver.LogindSession

    constructor(config?: LogindSession.ConstructorProperties) 
    _init(config?: LogindSession.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-login1-Session.top_of_page">org.freedesktop.login1.Session</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsLogindSession interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module MediaPlayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-next`
     */
    interface HandleNextSignalCallback {
        ($obj: MediaPlayer, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-open-uri`
     */
    interface HandleOpenUriSignalCallback {
        ($obj: MediaPlayer, invocation: Gio.DBusMethodInvocation, arg_Uri: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-pause`
     */
    interface HandlePauseSignalCallback {
        ($obj: MediaPlayer, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-play`
     */
    interface HandlePlaySignalCallback {
        ($obj: MediaPlayer, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-play-pause`
     */
    interface HandlePlayPauseSignalCallback {
        ($obj: MediaPlayer, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-previous`
     */
    interface HandlePreviousSignalCallback {
        ($obj: MediaPlayer, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-seek`
     */
    interface HandleSeekSignalCallback {
        ($obj: MediaPlayer, invocation: Gio.DBusMethodInvocation, arg_Offset: number): boolean
    }

    /**
     * Signal callback interface for `handle-set-position`
     */
    interface HandleSetPositionSignalCallback {
        ($obj: MediaPlayer, invocation: Gio.DBusMethodInvocation, arg_TrackId: string | null, arg_Position: number): boolean
    }

    /**
     * Signal callback interface for `handle-stop`
     */
    interface HandleStopSignalCallback {
        ($obj: MediaPlayer, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `seeked`
     */
    interface SeekedSignalCallback {
        ($obj: MediaPlayer, arg_Position: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CScreensaver-1.0.CScreensaver.MediaPlayer

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanControl">"CanControl"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        can_control?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanGoNext">"CanGoNext"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        can_go_next?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanGoPrevious">"CanGoPrevious"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        can_go_previous?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanPause">"CanPause"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        can_pause?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanPlay">"CanPlay"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        can_play?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanSeek">"CanSeek"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        can_seek?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.LoopStatus">"LoopStatus"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        loop_status?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.MaximumRate">"MaximumRate"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        maximum_rate?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Metadata">"Metadata"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        metadata?: GLib.Variant | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.MinimumRate">"MinimumRate"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        minimum_rate?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.PlaybackStatus">"PlaybackStatus"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        playback_status?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Position">"Position"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        position?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Rate">"Rate"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        rate?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Shuffle">"Shuffle"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        shuffle?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Volume">"Volume"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        volume?: number | null
    }

}

interface MediaPlayer {

    // Own properties of CScreensaver-1.0.CScreensaver.MediaPlayer

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanControl">"CanControl"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    can_control: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanGoNext">"CanGoNext"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    can_go_next: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanGoPrevious">"CanGoPrevious"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    can_go_previous: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanPause">"CanPause"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    can_pause: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanPlay">"CanPlay"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    can_play: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.CanSeek">"CanSeek"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    can_seek: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.LoopStatus">"LoopStatus"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    loop_status: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.MaximumRate">"MaximumRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    maximum_rate: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Metadata">"Metadata"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    metadata: GLib.Variant
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.MinimumRate">"MinimumRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    minimum_rate: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.PlaybackStatus">"PlaybackStatus"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    playback_status: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Position">"Position"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    position: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Rate">"Rate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    rate: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Shuffle">"Shuffle"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    shuffle: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-mpris-MediaPlayer2-Player.Volume">"Volume"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    volume: number

    // Owm methods of CScreensaver-1.0.CScreensaver.MediaPlayer

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Next">Next()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_call_next_finish() to get the result of the operation.
     * 
     * See cs_media_player_call_next_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_next(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_media_player_call_next().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_call_next().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_next_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Next">Next()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_call_next() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_next_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.OpenUri">OpenUri()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_call_open_uri_finish() to get the result of the operation.
     * 
     * See cs_media_player_call_open_uri_sync() for the synchronous, blocking version of this method.
     * @param arg_Uri Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_open_uri(arg_Uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_media_player_call_open_uri().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_call_open_uri().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_open_uri_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.OpenUri">OpenUri()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_call_open_uri() for the asynchronous version of this method.
     * @param arg_Uri Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_open_uri_sync(arg_Uri: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Pause">Pause()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_call_pause_finish() to get the result of the operation.
     * 
     * See cs_media_player_call_pause_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_pause(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_media_player_call_pause().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_call_pause().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_pause_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Pause">Pause()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_call_pause() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_pause_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Play">Play()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_call_play_finish() to get the result of the operation.
     * 
     * See cs_media_player_call_play_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_play(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_media_player_call_play().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_call_play().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_play_finish(res: Gio.AsyncResult): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.PlayPause">PlayPause()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_call_play_pause_finish() to get the result of the operation.
     * 
     * See cs_media_player_call_play_pause_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_play_pause(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_media_player_call_play_pause().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_call_play_pause().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_play_pause_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.PlayPause">PlayPause()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_call_play_pause() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_play_pause_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Play">Play()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_call_play() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_play_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Previous">Previous()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_call_previous_finish() to get the result of the operation.
     * 
     * See cs_media_player_call_previous_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_previous(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_media_player_call_previous().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_call_previous().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_previous_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Previous">Previous()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_call_previous() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_previous_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Seek">Seek()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_call_seek_finish() to get the result of the operation.
     * 
     * See cs_media_player_call_seek_sync() for the synchronous, blocking version of this method.
     * @param arg_Offset Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_seek(arg_Offset: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_media_player_call_seek().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_call_seek().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_seek_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Seek">Seek()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_call_seek() for the asynchronous version of this method.
     * @param arg_Offset Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_seek_sync(arg_Offset: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.SetPosition">SetPosition()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_call_set_position_finish() to get the result of the operation.
     * 
     * See cs_media_player_call_set_position_sync() for the synchronous, blocking version of this method.
     * @param arg_TrackId Argument to pass with the method invocation.
     * @param arg_Position Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_set_position(arg_TrackId: string | null, arg_Position: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_media_player_call_set_position().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_call_set_position().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_set_position_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.SetPosition">SetPosition()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_call_set_position() for the asynchronous version of this method.
     * @param arg_TrackId Argument to pass with the method invocation.
     * @param arg_Position Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_set_position_sync(arg_TrackId: string | null, arg_Position: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Stop">Stop()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_call_stop_finish() to get the result of the operation.
     * 
     * See cs_media_player_call_stop_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_media_player_call_stop().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_call_stop().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_stop_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_call_stop() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_stop_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Next">Next()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_next(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.OpenUri">OpenUri()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_open_uri(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Pause">Pause()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_pause(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Play">Play()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_play(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.PlayPause">PlayPause()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_play_pause(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Previous">Previous()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_previous(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Seek">Seek()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_seek(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.SetPosition">SetPosition()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_set_position(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-mpris-MediaPlayer2-Player.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    /**
     * Emits the <link linkend="gdbus-signal-org-mpris-MediaPlayer2-Player.Seeked">"Seeked"</link> D-Bus signal.
     * @param arg_Position Argument to pass with the signal.
     */
    emit_seeked(arg_Position: number): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.MediaPlayer

    vfunc_handle_next(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_open_uri(invocation: Gio.DBusMethodInvocation, arg_Uri: string | null): boolean
    vfunc_handle_pause(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_play(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_play_pause(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_previous(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_seek(invocation: Gio.DBusMethodInvocation, arg_Offset: number): boolean
    vfunc_handle_set_position(invocation: Gio.DBusMethodInvocation, arg_TrackId: string | null, arg_Position: number): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_seeked(arg_Position: number): void

    // Own signals of CScreensaver-1.0.CScreensaver.MediaPlayer

    connect(sigName: "handle-next", callback: MediaPlayer.HandleNextSignalCallback): number
    connect_after(sigName: "handle-next", callback: MediaPlayer.HandleNextSignalCallback): number
    emit(sigName: "handle-next", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-open-uri", callback: MediaPlayer.HandleOpenUriSignalCallback): number
    connect_after(sigName: "handle-open-uri", callback: MediaPlayer.HandleOpenUriSignalCallback): number
    emit(sigName: "handle-open-uri", invocation: Gio.DBusMethodInvocation, arg_Uri: string | null, ...args: any[]): void
    connect(sigName: "handle-pause", callback: MediaPlayer.HandlePauseSignalCallback): number
    connect_after(sigName: "handle-pause", callback: MediaPlayer.HandlePauseSignalCallback): number
    emit(sigName: "handle-pause", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-play", callback: MediaPlayer.HandlePlaySignalCallback): number
    connect_after(sigName: "handle-play", callback: MediaPlayer.HandlePlaySignalCallback): number
    emit(sigName: "handle-play", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-play-pause", callback: MediaPlayer.HandlePlayPauseSignalCallback): number
    connect_after(sigName: "handle-play-pause", callback: MediaPlayer.HandlePlayPauseSignalCallback): number
    emit(sigName: "handle-play-pause", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-previous", callback: MediaPlayer.HandlePreviousSignalCallback): number
    connect_after(sigName: "handle-previous", callback: MediaPlayer.HandlePreviousSignalCallback): number
    emit(sigName: "handle-previous", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-seek", callback: MediaPlayer.HandleSeekSignalCallback): number
    connect_after(sigName: "handle-seek", callback: MediaPlayer.HandleSeekSignalCallback): number
    emit(sigName: "handle-seek", invocation: Gio.DBusMethodInvocation, arg_Offset: number, ...args: any[]): void
    connect(sigName: "handle-set-position", callback: MediaPlayer.HandleSetPositionSignalCallback): number
    connect_after(sigName: "handle-set-position", callback: MediaPlayer.HandleSetPositionSignalCallback): number
    emit(sigName: "handle-set-position", invocation: Gio.DBusMethodInvocation, arg_TrackId: string | null, arg_Position: number, ...args: any[]): void
    connect(sigName: "handle-stop", callback: MediaPlayer.HandleStopSignalCallback): number
    connect_after(sigName: "handle-stop", callback: MediaPlayer.HandleStopSignalCallback): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "seeked", callback: MediaPlayer.SeekedSignalCallback): number
    connect_after(sigName: "seeked", callback: MediaPlayer.SeekedSignalCallback): number
    emit(sigName: "seeked", arg_Position: number, ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.MediaPlayer

    connect(sigName: "notify::can-control", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-control", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-control", ...args: any[]): void
    connect(sigName: "notify::can-go-next", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-next", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-go-next", ...args: any[]): void
    connect(sigName: "notify::can-go-previous", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-previous", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-go-previous", ...args: any[]): void
    connect(sigName: "notify::can-pause", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-pause", ...args: any[]): void
    connect(sigName: "notify::can-play", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-play", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-play", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::loop-status", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop-status", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loop-status", ...args: any[]): void
    connect(sigName: "notify::maximum-rate", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximum-rate", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximum-rate", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::minimum-rate", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-rate", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimum-rate", ...args: any[]): void
    connect(sigName: "notify::playback-status", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-status", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-status", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::shuffle", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shuffle", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shuffle", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-mpris-MediaPlayer2-Player.top_of_page">org.mpris.MediaPlayer2.Player</link>.
 * @interface 
 */
class MediaPlayer extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.MediaPlayer

    static name: string
    static $gtype: GObject.GType<MediaPlayer>

    // Constructors of CScreensaver-1.0.CScreensaver.MediaPlayer

    constructor(config?: MediaPlayer.ConstructorProperties) 
    _init(config?: MediaPlayer.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-mpris-MediaPlayer2-Player.top_of_page">org.mpris.MediaPlayer2.Player</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsMediaPlayer interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module MuffinDisplayConfig {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-current-state`
     */
    interface HandleGetCurrentStateSignalCallback {
        ($obj: MuffinDisplayConfig, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `monitors-changed`
     */
    interface MonitorsChangedSignalCallback {
        ($obj: MuffinDisplayConfig): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MuffinDisplayConfig {

    // Owm methods of CScreensaver-1.0.CScreensaver.MuffinDisplayConfig

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-cinnamon-Muffin-DisplayConfig.GetCurrentState">GetCurrentState()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_muffin_display_config_call_get_current_state_finish() to get the result of the operation.
     * 
     * See cs_muffin_display_config_call_get_current_state_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_current_state(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_muffin_display_config_call_get_current_state().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_muffin_display_config_call_get_current_state().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_current_state_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_serial */ number, /* out_monitors */ GLib.Variant, /* out_logical_monitors */ GLib.Variant, /* out_properties */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-cinnamon-Muffin-DisplayConfig.GetCurrentState">GetCurrentState()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_muffin_display_config_call_get_current_state() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_current_state_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_serial */ number, /* out_monitors */ GLib.Variant, /* out_logical_monitors */ GLib.Variant, /* out_properties */ GLib.Variant ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-cinnamon-Muffin-DisplayConfig.GetCurrentState">GetCurrentState()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param serial Parameter to return.
     * @param monitors Parameter to return.
     * @param logical_monitors Parameter to return.
     * @param properties Parameter to return.
     */
    complete_get_current_state(invocation: Gio.DBusMethodInvocation, serial: number, monitors: GLib.Variant, logical_monitors: GLib.Variant, properties: GLib.Variant): void
    /**
     * Emits the <link linkend="gdbus-signal-org-cinnamon-Muffin-DisplayConfig.MonitorsChanged">"MonitorsChanged"</link> D-Bus signal.
     */
    emit_monitors_changed(): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.MuffinDisplayConfig

    vfunc_handle_get_current_state(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_monitors_changed(): void

    // Own signals of CScreensaver-1.0.CScreensaver.MuffinDisplayConfig

    connect(sigName: "handle-get-current-state", callback: MuffinDisplayConfig.HandleGetCurrentStateSignalCallback): number
    connect_after(sigName: "handle-get-current-state", callback: MuffinDisplayConfig.HandleGetCurrentStateSignalCallback): number
    emit(sigName: "handle-get-current-state", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "monitors-changed", callback: MuffinDisplayConfig.MonitorsChangedSignalCallback): number
    connect_after(sigName: "monitors-changed", callback: MuffinDisplayConfig.MonitorsChangedSignalCallback): number
    emit(sigName: "monitors-changed", ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.MuffinDisplayConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-Muffin-DisplayConfig.top_of_page">org.cinnamon.Muffin.DisplayConfig</link>.
 * @interface 
 */
class MuffinDisplayConfig extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.MuffinDisplayConfig

    static name: string
    static $gtype: GObject.GType<MuffinDisplayConfig>

    // Constructors of CScreensaver-1.0.CScreensaver.MuffinDisplayConfig

    constructor(config?: MuffinDisplayConfig.ConstructorProperties) 
    _init(config?: MuffinDisplayConfig.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-cinnamon-Muffin-DisplayConfig.top_of_page">org.cinnamon.Muffin.DisplayConfig</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsMuffinDisplayConfig interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module ScreenSaver {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-changed`
     */
    interface ActiveChangedSignalCallback {
        ($obj: ScreenSaver, arg_arg_0: boolean): void
    }

    /**
     * Signal callback interface for `handle-get-active`
     */
    interface HandleGetActiveSignalCallback {
        ($obj: ScreenSaver, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-get-active-time`
     */
    interface HandleGetActiveTimeSignalCallback {
        ($obj: ScreenSaver, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-get-session-idle-time`
     */
    interface HandleGetSessionIdleTimeSignalCallback {
        ($obj: ScreenSaver, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-lock`
     */
    interface HandleLockSignalCallback {
        ($obj: ScreenSaver, invocation: Gio.DBusMethodInvocation, arg_message: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-quit`
     */
    interface HandleQuitSignalCallback {
        ($obj: ScreenSaver, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-set-active`
     */
    interface HandleSetActiveSignalCallback {
        ($obj: ScreenSaver, invocation: Gio.DBusMethodInvocation, arg_e: boolean): boolean
    }

    /**
     * Signal callback interface for `handle-simulate-user-activity`
     */
    interface HandleSimulateUserActivitySignalCallback {
        ($obj: ScreenSaver, invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ScreenSaver {

    // Owm methods of CScreensaver-1.0.CScreensaver.ScreenSaver

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.GetActive">GetActive()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_screen_saver_call_get_active_finish() to get the result of the operation.
     * 
     * See cs_screen_saver_call_get_active_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_active(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_screen_saver_call_get_active().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_screen_saver_call_get_active().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_active_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_arg_0 */ boolean ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.GetActive">GetActive()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_screen_saver_call_get_active() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_active_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_arg_0 */ boolean ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.GetActiveTime">GetActiveTime()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_screen_saver_call_get_active_time_finish() to get the result of the operation.
     * 
     * See cs_screen_saver_call_get_active_time_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_active_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_screen_saver_call_get_active_time().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_screen_saver_call_get_active_time().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_active_time_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_seconds */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.GetActiveTime">GetActiveTime()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_screen_saver_call_get_active_time() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_active_time_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_seconds */ number ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.GetSessionIdleTime">GetSessionIdleTime()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_screen_saver_call_get_session_idle_time_finish() to get the result of the operation.
     * 
     * See cs_screen_saver_call_get_session_idle_time_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_session_idle_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_screen_saver_call_get_session_idle_time().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_screen_saver_call_get_session_idle_time().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_session_idle_time_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_seconds */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.GetSessionIdleTime">GetSessionIdleTime()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_screen_saver_call_get_session_idle_time() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_session_idle_time_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_seconds */ number ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.Lock">Lock()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_screen_saver_call_lock_finish() to get the result of the operation.
     * 
     * See cs_screen_saver_call_lock_sync() for the synchronous, blocking version of this method.
     * @param arg_message Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_lock(arg_message: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_screen_saver_call_lock().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_screen_saver_call_lock().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_lock_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.Lock">Lock()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_screen_saver_call_lock() for the asynchronous version of this method.
     * @param arg_message Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_lock_sync(arg_message: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.Quit">Quit()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_screen_saver_call_quit_finish() to get the result of the operation.
     * 
     * See cs_screen_saver_call_quit_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_quit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_screen_saver_call_quit().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_screen_saver_call_quit().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_quit_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.Quit">Quit()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_screen_saver_call_quit() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_quit_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.SetActive">SetActive()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_screen_saver_call_set_active_finish() to get the result of the operation.
     * 
     * See cs_screen_saver_call_set_active_sync() for the synchronous, blocking version of this method.
     * @param arg_e Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_set_active(arg_e: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_screen_saver_call_set_active().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_screen_saver_call_set_active().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_set_active_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.SetActive">SetActive()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_screen_saver_call_set_active() for the asynchronous version of this method.
     * @param arg_e Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_set_active_sync(arg_e: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.SimulateUserActivity">SimulateUserActivity()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_screen_saver_call_simulate_user_activity_finish() to get the result of the operation.
     * 
     * See cs_screen_saver_call_simulate_user_activity_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_simulate_user_activity(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_screen_saver_call_simulate_user_activity().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_screen_saver_call_simulate_user_activity().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_simulate_user_activity_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.SimulateUserActivity">SimulateUserActivity()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_screen_saver_call_simulate_user_activity() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_simulate_user_activity_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.GetActive">GetActive()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param arg_0 Parameter to return.
     */
    complete_get_active(invocation: Gio.DBusMethodInvocation, arg_0: boolean): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.GetActiveTime">GetActiveTime()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param seconds Parameter to return.
     */
    complete_get_active_time(invocation: Gio.DBusMethodInvocation, seconds: number): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.GetSessionIdleTime">GetSessionIdleTime()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param seconds Parameter to return.
     */
    complete_get_session_idle_time(invocation: Gio.DBusMethodInvocation, seconds: number): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.Lock">Lock()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_lock(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.Quit">Quit()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_quit(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.SetActive">SetActive()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_set_active(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-cinnamon-ScreenSaver.SimulateUserActivity">SimulateUserActivity()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_simulate_user_activity(invocation: Gio.DBusMethodInvocation): void
    /**
     * Emits the <link linkend="gdbus-signal-org-cinnamon-ScreenSaver.ActiveChanged">"ActiveChanged"</link> D-Bus signal.
     * @param arg_arg_0 Argument to pass with the signal.
     */
    emit_active_changed(arg_arg_0: boolean): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.ScreenSaver

    vfunc_active_changed(arg_arg_0: boolean): void
    vfunc_handle_get_active(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_active_time(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_session_idle_time(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_lock(invocation: Gio.DBusMethodInvocation, arg_message: string | null): boolean
    vfunc_handle_quit(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_active(invocation: Gio.DBusMethodInvocation, arg_e: boolean): boolean
    vfunc_handle_simulate_user_activity(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of CScreensaver-1.0.CScreensaver.ScreenSaver

    connect(sigName: "active-changed", callback: ScreenSaver.ActiveChangedSignalCallback): number
    connect_after(sigName: "active-changed", callback: ScreenSaver.ActiveChangedSignalCallback): number
    emit(sigName: "active-changed", arg_arg_0: boolean, ...args: any[]): void
    connect(sigName: "handle-get-active", callback: ScreenSaver.HandleGetActiveSignalCallback): number
    connect_after(sigName: "handle-get-active", callback: ScreenSaver.HandleGetActiveSignalCallback): number
    emit(sigName: "handle-get-active", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-get-active-time", callback: ScreenSaver.HandleGetActiveTimeSignalCallback): number
    connect_after(sigName: "handle-get-active-time", callback: ScreenSaver.HandleGetActiveTimeSignalCallback): number
    emit(sigName: "handle-get-active-time", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-get-session-idle-time", callback: ScreenSaver.HandleGetSessionIdleTimeSignalCallback): number
    connect_after(sigName: "handle-get-session-idle-time", callback: ScreenSaver.HandleGetSessionIdleTimeSignalCallback): number
    emit(sigName: "handle-get-session-idle-time", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-lock", callback: ScreenSaver.HandleLockSignalCallback): number
    connect_after(sigName: "handle-lock", callback: ScreenSaver.HandleLockSignalCallback): number
    emit(sigName: "handle-lock", invocation: Gio.DBusMethodInvocation, arg_message: string | null, ...args: any[]): void
    connect(sigName: "handle-quit", callback: ScreenSaver.HandleQuitSignalCallback): number
    connect_after(sigName: "handle-quit", callback: ScreenSaver.HandleQuitSignalCallback): number
    emit(sigName: "handle-quit", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-set-active", callback: ScreenSaver.HandleSetActiveSignalCallback): number
    connect_after(sigName: "handle-set-active", callback: ScreenSaver.HandleSetActiveSignalCallback): number
    emit(sigName: "handle-set-active", invocation: Gio.DBusMethodInvocation, arg_e: boolean, ...args: any[]): void
    connect(sigName: "handle-simulate-user-activity", callback: ScreenSaver.HandleSimulateUserActivitySignalCallback): number
    connect_after(sigName: "handle-simulate-user-activity", callback: ScreenSaver.HandleSimulateUserActivitySignalCallback): number
    emit(sigName: "handle-simulate-user-activity", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.ScreenSaver

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-ScreenSaver.top_of_page">org.cinnamon.ScreenSaver</link>.
 * @interface 
 */
class ScreenSaver extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.ScreenSaver

    static name: string
    static $gtype: GObject.GType<ScreenSaver>

    // Constructors of CScreensaver-1.0.CScreensaver.ScreenSaver

    constructor(config?: ScreenSaver.ConstructorProperties) 
    _init(config?: ScreenSaver.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-cinnamon-ScreenSaver.top_of_page">org.cinnamon.ScreenSaver</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsScreenSaver interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module SessionPresence {

    // Signal callback interfaces

    /**
     * Signal callback interface for `status-changed`
     */
    interface StatusChangedSignalCallback {
        ($obj: SessionPresence, arg_status: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CScreensaver-1.0.CScreensaver.SessionPresence

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-SessionManager-Presence.status">"status"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        status?: number | null
    }

}

interface SessionPresence {

    // Own properties of CScreensaver-1.0.CScreensaver.SessionPresence

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-SessionManager-Presence.status">"status"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    status: number

    // Owm methods of CScreensaver-1.0.CScreensaver.SessionPresence

    /**
     * Emits the <link linkend="gdbus-signal-org-gnome-SessionManager-Presence.StatusChanged">"StatusChanged"</link> D-Bus signal.
     * @param arg_status Argument to pass with the signal.
     */
    emit_status_changed(arg_status: number): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.SessionPresence

    vfunc_status_changed(arg_status: number): void

    // Own signals of CScreensaver-1.0.CScreensaver.SessionPresence

    connect(sigName: "status-changed", callback: SessionPresence.StatusChangedSignalCallback): number
    connect_after(sigName: "status-changed", callback: SessionPresence.StatusChangedSignalCallback): number
    emit(sigName: "status-changed", arg_status: number, ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.SessionPresence

    connect(sigName: "notify::status", callback: (($obj: SessionPresence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: SessionPresence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-SessionManager-Presence.top_of_page">org.gnome.SessionManager.Presence</link>.
 * @interface 
 */
class SessionPresence extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.SessionPresence

    static name: string
    static $gtype: GObject.GType<SessionPresence>

    // Constructors of CScreensaver-1.0.CScreensaver.SessionPresence

    constructor(config?: SessionPresence.ConstructorProperties) 
    _init(config?: SessionPresence.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-SessionManager-Presence.top_of_page">org.gnome.SessionManager.Presence</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsSessionPresence interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module UPower {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-added`
     */
    interface DeviceAddedSignalCallback {
        ($obj: UPower, arg_device: string | null): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    interface DeviceRemovedSignalCallback {
        ($obj: UPower, arg_device: string | null): void
    }

    /**
     * Signal callback interface for `handle-enumerate-devices`
     */
    interface HandleEnumerateDevicesSignalCallback {
        ($obj: UPower, invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CScreensaver-1.0.CScreensaver.UPower

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        on_battery?: boolean | null
    }

}

interface UPower {

    // Own properties of CScreensaver-1.0.CScreensaver.UPower

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    on_battery: boolean

    // Owm methods of CScreensaver-1.0.CScreensaver.UPower

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_upower_call_enumerate_devices_finish() to get the result of the operation.
     * 
     * See cs_upower_call_enumerate_devices_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_enumerate_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with cs_upower_call_enumerate_devices().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_upower_call_enumerate_devices().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_enumerate_devices_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_devices */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See cs_upower_call_enumerate_devices() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_enumerate_devices_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_devices */ GLib.Variant ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param devices Parameter to return.
     */
    complete_enumerate_devices(invocation: Gio.DBusMethodInvocation, devices: GLib.Variant): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceAdded">"DeviceAdded"</link> D-Bus signal.
     * @param arg_device Argument to pass with the signal.
     */
    emit_device_added(arg_device: string | null): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceRemoved">"DeviceRemoved"</link> D-Bus signal.
     * @param arg_device Argument to pass with the signal.
     */
    emit_device_removed(arg_device: string | null): void

    // Own virtual methods of CScreensaver-1.0.CScreensaver.UPower

    vfunc_device_added(arg_device: string | null): void
    vfunc_device_removed(arg_device: string | null): void
    vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of CScreensaver-1.0.CScreensaver.UPower

    connect(sigName: "device-added", callback: UPower.DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: UPower.DeviceAddedSignalCallback): number
    emit(sigName: "device-added", arg_device: string | null, ...args: any[]): void
    connect(sigName: "device-removed", callback: UPower.DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: UPower.DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", arg_device: string | null, ...args: any[]): void
    connect(sigName: "handle-enumerate-devices", callback: UPower.HandleEnumerateDevicesSignalCallback): number
    connect_after(sigName: "handle-enumerate-devices", callback: UPower.HandleEnumerateDevicesSignalCallback): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.UPower

    connect(sigName: "notify::on-battery", callback: (($obj: UPower, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: UPower, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>.
 * @interface 
 */
class UPower extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.UPower

    static name: string
    static $gtype: GObject.GType<UPower>

    // Constructors of CScreensaver-1.0.CScreensaver.UPower

    constructor(config?: UPower.ConstructorProperties) 
    _init(config?: UPower.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsUPower interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module UPowerDevice {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CScreensaver-1.0.CScreensaver.UPowerDevice

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        icon_name?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        online?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        percentage?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        state?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        type?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        warning_level?: number | null
    }

}

interface UPowerDevice {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerDevice

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    icon_name: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    online: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    percentage: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    state: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    type: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    warning_level: number

    // Class property signals of CScreensaver-1.0.CScreensaver.UPowerDevice

    connect(sigName: "notify::icon-name", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: UPowerDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>.
 * @interface 
 */
class UPowerDevice extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerDevice

    static name: string
    static $gtype: GObject.GType<UPowerDevice>

    // Constructors of CScreensaver-1.0.CScreensaver.UPowerDevice

    constructor(config?: UPowerDevice.ConstructorProperties) 
    _init(config?: UPowerDevice.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CsUPowerDevice interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module CinnamonProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Cinnamon.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface CinnamonProxy extends Cinnamon, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.CinnamonProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::expo-active", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expo-active", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expo-active", ...args: any[]): void
    connect(sigName: "notify::overview-active", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overview-active", callback: (($obj: CinnamonProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overview-active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsCinnamonProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class CinnamonProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.CinnamonProxy

    static name: string
    static $gtype: GObject.GType<CinnamonProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.CinnamonProxy

    constructor(config?: CinnamonProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_cinnamon_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_cinnamon_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): CinnamonProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_cinnamon_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_cinnamon_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): CinnamonProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_cinnamon_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_cinnamon_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): CinnamonProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-Cinnamon.top_of_page">org.Cinnamon</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_cinnamon_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): CinnamonProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: CinnamonProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-Cinnamon.top_of_page">org.Cinnamon</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_cinnamon_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_cinnamon_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<CinnamonProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_cinnamon_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_cinnamon_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_cinnamon_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<CinnamonProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module CinnamonSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Cinnamon.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface CinnamonSkeleton extends Cinnamon, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.CinnamonSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: CinnamonSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: CinnamonSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::expo-active", callback: (($obj: CinnamonSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expo-active", callback: (($obj: CinnamonSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expo-active", ...args: any[]): void
    connect(sigName: "notify::overview-active", callback: (($obj: CinnamonSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overview-active", callback: (($obj: CinnamonSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overview-active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsCinnamonSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class CinnamonSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.CinnamonSkeleton

    static name: string
    static $gtype: GObject.GType<CinnamonSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.CinnamonSkeleton

    constructor(config?: CinnamonSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-Cinnamon.top_of_page">org.Cinnamon</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-Cinnamon.top_of_page">org.Cinnamon</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): CinnamonSkeleton
    _init(config?: CinnamonSkeleton.ConstructorProperties): void
}

module ConsoleKitManagerProxy {

    // Constructor properties interface

    interface ConstructorProperties extends ConsoleKitManager.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ConsoleKitManagerProxy extends ConsoleKitManager, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.ConsoleKitManagerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ConsoleKitManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsConsoleKitManagerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ConsoleKitManagerProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitManagerProxy

    static name: string
    static $gtype: GObject.GType<ConsoleKitManagerProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.ConsoleKitManagerProxy

    constructor(config?: ConsoleKitManagerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_console_kit_manager_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_console_kit_manager_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ConsoleKitManagerProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_console_kit_manager_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_console_kit_manager_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ConsoleKitManagerProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_console_kit_manager_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_console_kit_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ConsoleKitManagerProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Manager.top_of_page">org.freedesktop.ConsoleKit.Manager</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_console_kit_manager_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ConsoleKitManagerProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ConsoleKitManagerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Manager.top_of_page">org.freedesktop.ConsoleKit.Manager</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_console_kit_manager_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_console_kit_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ConsoleKitManagerProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_console_kit_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_console_kit_manager_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_console_kit_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ConsoleKitManagerProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ConsoleKitManagerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends ConsoleKitManager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ConsoleKitManagerSkeleton extends ConsoleKitManager, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.ConsoleKitManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ConsoleKitManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ConsoleKitManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsConsoleKitManagerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ConsoleKitManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitManagerSkeleton

    static name: string
    static $gtype: GObject.GType<ConsoleKitManagerSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.ConsoleKitManagerSkeleton

    constructor(config?: ConsoleKitManagerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Manager.top_of_page">org.freedesktop.ConsoleKit.Manager</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Manager.top_of_page">org.freedesktop.ConsoleKit.Manager</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ConsoleKitManagerSkeleton
    _init(config?: ConsoleKitManagerSkeleton.ConstructorProperties): void
}

module ConsoleKitSessionProxy {

    // Constructor properties interface

    interface ConstructorProperties extends ConsoleKitSession.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ConsoleKitSessionProxy extends ConsoleKitSession, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.ConsoleKitSessionProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ConsoleKitSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsConsoleKitSessionProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ConsoleKitSessionProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitSessionProxy

    static name: string
    static $gtype: GObject.GType<ConsoleKitSessionProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.ConsoleKitSessionProxy

    constructor(config?: ConsoleKitSessionProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_console_kit_session_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_console_kit_session_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ConsoleKitSessionProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_console_kit_session_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_console_kit_session_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ConsoleKitSessionProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_console_kit_session_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_console_kit_session_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ConsoleKitSessionProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Session.top_of_page">org.freedesktop.ConsoleKit.Session</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_console_kit_session_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ConsoleKitSessionProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ConsoleKitSessionProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Session.top_of_page">org.freedesktop.ConsoleKit.Session</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_console_kit_session_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_console_kit_session_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ConsoleKitSessionProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_console_kit_session_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_console_kit_session_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_console_kit_session_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ConsoleKitSessionProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ConsoleKitSessionSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends ConsoleKitSession.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ConsoleKitSessionSkeleton extends ConsoleKitSession, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.ConsoleKitSessionSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ConsoleKitSessionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ConsoleKitSessionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsConsoleKitSessionSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ConsoleKitSessionSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitSessionSkeleton

    static name: string
    static $gtype: GObject.GType<ConsoleKitSessionSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.ConsoleKitSessionSkeleton

    constructor(config?: ConsoleKitSessionSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Session.top_of_page">org.freedesktop.ConsoleKit.Session</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Session.top_of_page">org.freedesktop.ConsoleKit.Session</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ConsoleKitSessionSkeleton
    _init(config?: ConsoleKitSessionSkeleton.ConstructorProperties): void
}

module EventGrabber {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface EventGrabber {

    // Owm methods of CScreensaver-1.0.CScreensaver.EventGrabber

    grab_offscreen(hide_cursor: boolean): boolean
    grab_root(hide_cursor: boolean): boolean
    grab_window(window: Gdk.Window, screen: Gdk.Screen, hide_cursor: boolean): boolean
    keyboard_reset(): void
    mouse_reset(): void
    move_to_window(window: Gdk.Window, screen: Gdk.Screen, hide_cursor: boolean): void
    release(): void
    release_mouse(): boolean

    // Class property signals of CScreensaver-1.0.CScreensaver.EventGrabber

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EventGrabber extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.EventGrabber

    static name: string
    static $gtype: GObject.GType<EventGrabber>

    // Constructors of CScreensaver-1.0.CScreensaver.EventGrabber

    constructor(config?: EventGrabber.ConstructorProperties) 
    constructor(debug: boolean) 
    static new(debug: boolean): EventGrabber
    _init(config?: EventGrabber.ConstructorProperties): void
}

module GdkEventFilter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `screensaver-window-changed`
     */
    interface ScreensaverWindowChangedSignalCallback {
        ($obj: GdkEventFilter, object: number): void
    }

    /**
     * Signal callback interface for `xscreen-size`
     */
    interface XscreenSizeSignalCallback {
        ($obj: GdkEventFilter): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface GdkEventFilter {

    // Own fields of CScreensaver-1.0.CScreensaver.GdkEventFilter

    obj: GObject.Object
    display: Gdk.Display
    managed_window: Gtk.Widget
    my_xid: number
    pretty_xid: number
    we_are_backup_window: boolean
    shape_event_base: number

    // Owm methods of CScreensaver-1.0.CScreensaver.GdkEventFilter

    start(fractional_scaling: boolean, debug: boolean): void
    stop(): void

    // Own signals of CScreensaver-1.0.CScreensaver.GdkEventFilter

    connect(sigName: "screensaver-window-changed", callback: GdkEventFilter.ScreensaverWindowChangedSignalCallback): number
    connect_after(sigName: "screensaver-window-changed", callback: GdkEventFilter.ScreensaverWindowChangedSignalCallback): number
    emit(sigName: "screensaver-window-changed", object: number, ...args: any[]): void
    connect(sigName: "xscreen-size", callback: GdkEventFilter.XscreenSizeSignalCallback): number
    connect_after(sigName: "xscreen-size", callback: GdkEventFilter.XscreenSizeSignalCallback): number
    emit(sigName: "xscreen-size", ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.GdkEventFilter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GdkEventFilter extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.GdkEventFilter

    static name: string
    static $gtype: GObject.GType<GdkEventFilter>

    // Constructors of CScreensaver-1.0.CScreensaver.GdkEventFilter

    constructor(config?: GdkEventFilter.ConstructorProperties) 
    constructor(managed_window: Gtk.Widget, pretty_xid: number) 
    static new(managed_window: Gtk.Widget, pretty_xid: number): GdkEventFilter
    _init(config?: GdkEventFilter.ConstructorProperties): void
}

module KeybindingHandlerProxy {

    // Constructor properties interface

    interface ConstructorProperties extends KeybindingHandler.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface KeybindingHandlerProxy extends KeybindingHandler, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.KeybindingHandlerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: KeybindingHandlerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsKeybindingHandlerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class KeybindingHandlerProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.KeybindingHandlerProxy

    static name: string
    static $gtype: GObject.GType<KeybindingHandlerProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.KeybindingHandlerProxy

    constructor(config?: KeybindingHandlerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_keybinding_handler_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_keybinding_handler_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): KeybindingHandlerProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_keybinding_handler_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_keybinding_handler_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): KeybindingHandlerProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_keybinding_handler_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_keybinding_handler_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): KeybindingHandlerProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-SettingsDaemon-KeybindingHandler.top_of_page">org.cinnamon.SettingsDaemon.KeybindingHandler</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_keybinding_handler_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): KeybindingHandlerProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: KeybindingHandlerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-SettingsDaemon-KeybindingHandler.top_of_page">org.cinnamon.SettingsDaemon.KeybindingHandler</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_keybinding_handler_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_keybinding_handler_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<KeybindingHandlerProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_keybinding_handler_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_keybinding_handler_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_keybinding_handler_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<KeybindingHandlerProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module KeybindingHandlerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends KeybindingHandler.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface KeybindingHandlerSkeleton extends KeybindingHandler, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.KeybindingHandlerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: KeybindingHandlerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: KeybindingHandlerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsKeybindingHandlerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class KeybindingHandlerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.KeybindingHandlerSkeleton

    static name: string
    static $gtype: GObject.GType<KeybindingHandlerSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.KeybindingHandlerSkeleton

    constructor(config?: KeybindingHandlerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-SettingsDaemon-KeybindingHandler.top_of_page">org.cinnamon.SettingsDaemon.KeybindingHandler</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-SettingsDaemon-KeybindingHandler.top_of_page">org.cinnamon.SettingsDaemon.KeybindingHandler</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): KeybindingHandlerSkeleton
    _init(config?: KeybindingHandlerSkeleton.ConstructorProperties): void
}

module LogindManagerProxy {

    // Constructor properties interface

    interface ConstructorProperties extends LogindManager.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface LogindManagerProxy extends LogindManager, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.LogindManagerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: LogindManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsLogindManagerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class LogindManagerProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindManagerProxy

    static name: string
    static $gtype: GObject.GType<LogindManagerProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.LogindManagerProxy

    constructor(config?: LogindManagerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_logind_manager_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_logind_manager_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): LogindManagerProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_logind_manager_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_logind_manager_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): LogindManagerProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_logind_manager_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_logind_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): LogindManagerProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Manager.top_of_page">org.freedesktop.login1.Manager</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_logind_manager_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): LogindManagerProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: LogindManagerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Manager.top_of_page">org.freedesktop.login1.Manager</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_logind_manager_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_logind_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<LogindManagerProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_logind_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_logind_manager_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_logind_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<LogindManagerProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module LogindManagerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends LogindManager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface LogindManagerSkeleton extends LogindManager, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.LogindManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: LogindManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LogindManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsLogindManagerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class LogindManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindManagerSkeleton

    static name: string
    static $gtype: GObject.GType<LogindManagerSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.LogindManagerSkeleton

    constructor(config?: LogindManagerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Manager.top_of_page">org.freedesktop.login1.Manager</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Manager.top_of_page">org.freedesktop.login1.Manager</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): LogindManagerSkeleton
    _init(config?: LogindManagerSkeleton.ConstructorProperties): void
}

module LogindSessionProxy {

    // Constructor properties interface

    interface ConstructorProperties extends LogindSession.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface LogindSessionProxy extends LogindSession, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.LogindSessionProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: LogindSessionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsLogindSessionProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class LogindSessionProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindSessionProxy

    static name: string
    static $gtype: GObject.GType<LogindSessionProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.LogindSessionProxy

    constructor(config?: LogindSessionProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_logind_session_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_logind_session_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): LogindSessionProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_logind_session_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_logind_session_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): LogindSessionProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_logind_session_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_logind_session_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): LogindSessionProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Session.top_of_page">org.freedesktop.login1.Session</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_logind_session_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): LogindSessionProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: LogindSessionProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Session.top_of_page">org.freedesktop.login1.Session</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_logind_session_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_logind_session_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<LogindSessionProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_logind_session_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_logind_session_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_logind_session_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<LogindSessionProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module LogindSessionSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends LogindSession.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface LogindSessionSkeleton extends LogindSession, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.LogindSessionSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: LogindSessionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LogindSessionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: LogindSessionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: LogindSessionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsLogindSessionSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class LogindSessionSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindSessionSkeleton

    static name: string
    static $gtype: GObject.GType<LogindSessionSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.LogindSessionSkeleton

    constructor(config?: LogindSessionSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Session.top_of_page">org.freedesktop.login1.Session</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Session.top_of_page">org.freedesktop.login1.Session</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): LogindSessionSkeleton
    _init(config?: LogindSessionSkeleton.ConstructorProperties): void
}

module MediaPlayerProxy {

    // Constructor properties interface

    interface ConstructorProperties extends MediaPlayer.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface MediaPlayerProxy extends MediaPlayer, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.MediaPlayerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::can-control", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-control", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-control", ...args: any[]): void
    connect(sigName: "notify::can-go-next", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-next", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-go-next", ...args: any[]): void
    connect(sigName: "notify::can-go-previous", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-previous", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-go-previous", ...args: any[]): void
    connect(sigName: "notify::can-pause", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-pause", ...args: any[]): void
    connect(sigName: "notify::can-play", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-play", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-play", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::loop-status", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop-status", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loop-status", ...args: any[]): void
    connect(sigName: "notify::maximum-rate", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximum-rate", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximum-rate", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::minimum-rate", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-rate", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimum-rate", ...args: any[]): void
    connect(sigName: "notify::playback-status", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-status", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-status", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::shuffle", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shuffle", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shuffle", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MediaPlayerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsMediaPlayerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MediaPlayerProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.MediaPlayerProxy

    static name: string
    static $gtype: GObject.GType<MediaPlayerProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.MediaPlayerProxy

    constructor(config?: MediaPlayerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_media_player_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): MediaPlayerProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_media_player_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_media_player_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): MediaPlayerProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_media_player_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MediaPlayerProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-mpris-MediaPlayer2-Player.top_of_page">org.mpris.MediaPlayer2.Player</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_media_player_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MediaPlayerProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: MediaPlayerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-mpris-MediaPlayer2-Player.top_of_page">org.mpris.MediaPlayer2.Player</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_media_player_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MediaPlayerProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_media_player_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_media_player_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_media_player_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MediaPlayerProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module MediaPlayerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends MediaPlayer.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MediaPlayerSkeleton extends MediaPlayer, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.MediaPlayerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::can-control", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-control", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-control", ...args: any[]): void
    connect(sigName: "notify::can-go-next", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-next", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-go-next", ...args: any[]): void
    connect(sigName: "notify::can-go-previous", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-previous", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-go-previous", ...args: any[]): void
    connect(sigName: "notify::can-pause", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-pause", ...args: any[]): void
    connect(sigName: "notify::can-play", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-play", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-play", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::loop-status", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop-status", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loop-status", ...args: any[]): void
    connect(sigName: "notify::maximum-rate", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximum-rate", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximum-rate", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::minimum-rate", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-rate", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimum-rate", ...args: any[]): void
    connect(sigName: "notify::playback-status", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-status", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-status", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::shuffle", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shuffle", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shuffle", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MediaPlayerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsMediaPlayerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MediaPlayerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.MediaPlayerSkeleton

    static name: string
    static $gtype: GObject.GType<MediaPlayerSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.MediaPlayerSkeleton

    constructor(config?: MediaPlayerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-mpris-MediaPlayer2-Player.top_of_page">org.mpris.MediaPlayer2.Player</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-mpris-MediaPlayer2-Player.top_of_page">org.mpris.MediaPlayer2.Player</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): MediaPlayerSkeleton
    _init(config?: MediaPlayerSkeleton.ConstructorProperties): void
}

module MuffinDisplayConfigProxy {

    // Constructor properties interface

    interface ConstructorProperties extends MuffinDisplayConfig.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface MuffinDisplayConfigProxy extends MuffinDisplayConfig, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: MuffinDisplayConfigProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsMuffinDisplayConfigProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MuffinDisplayConfigProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigProxy

    static name: string
    static $gtype: GObject.GType<MuffinDisplayConfigProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigProxy

    constructor(config?: MuffinDisplayConfigProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_muffin_display_config_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_muffin_display_config_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): MuffinDisplayConfigProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_muffin_display_config_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_muffin_display_config_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): MuffinDisplayConfigProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_muffin_display_config_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_muffin_display_config_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MuffinDisplayConfigProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-Muffin-DisplayConfig.top_of_page">org.cinnamon.Muffin.DisplayConfig</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_muffin_display_config_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MuffinDisplayConfigProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: MuffinDisplayConfigProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-Muffin-DisplayConfig.top_of_page">org.cinnamon.Muffin.DisplayConfig</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_muffin_display_config_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_muffin_display_config_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MuffinDisplayConfigProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_muffin_display_config_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_muffin_display_config_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_muffin_display_config_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MuffinDisplayConfigProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module MuffinDisplayConfigSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends MuffinDisplayConfig.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MuffinDisplayConfigSkeleton extends MuffinDisplayConfig, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: MuffinDisplayConfigSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MuffinDisplayConfigSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsMuffinDisplayConfigSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MuffinDisplayConfigSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigSkeleton

    static name: string
    static $gtype: GObject.GType<MuffinDisplayConfigSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigSkeleton

    constructor(config?: MuffinDisplayConfigSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-Muffin-DisplayConfig.top_of_page">org.cinnamon.Muffin.DisplayConfig</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-Muffin-DisplayConfig.top_of_page">org.cinnamon.Muffin.DisplayConfig</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): MuffinDisplayConfigSkeleton
    _init(config?: MuffinDisplayConfigSkeleton.ConstructorProperties): void
}

module NotificationWatcher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `notification-received`
     */
    interface NotificationReceivedSignalCallback {
        ($obj: NotificationWatcher, object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface NotificationWatcher {

    // Own fields of CScreensaver-1.0.CScreensaver.NotificationWatcher

    obj: GObject.Object
    connection: Gio.DBusConnection
    filter_id: number
    debug: boolean

    // Own virtual methods of CScreensaver-1.0.CScreensaver.NotificationWatcher

    vfunc_notification_received(sender: string | null): void

    // Own signals of CScreensaver-1.0.CScreensaver.NotificationWatcher

    connect(sigName: "notification-received", callback: NotificationWatcher.NotificationReceivedSignalCallback): number
    connect_after(sigName: "notification-received", callback: NotificationWatcher.NotificationReceivedSignalCallback): number
    emit(sigName: "notification-received", object: string | null, ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.NotificationWatcher

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NotificationWatcher extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.NotificationWatcher

    static name: string
    static $gtype: GObject.GType<NotificationWatcher>

    // Constructors of CScreensaver-1.0.CScreensaver.NotificationWatcher

    constructor(config?: NotificationWatcher.ConstructorProperties) 
    constructor(debug: boolean) 
    static new(debug: boolean): NotificationWatcher
    _init(config?: NotificationWatcher.ConstructorProperties): void
}

module Screen {

    // Signal callback interfaces

    /**
     * Signal callback interface for `composited-changed`
     */
    interface CompositedChangedSignalCallback {
        ($obj: Screen): void
    }

    /**
     * Signal callback interface for `monitors-changed`
     */
    interface MonitorsChangedSignalCallback {
        ($obj: Screen): void
    }

    /**
     * Signal callback interface for `size-changed`
     */
    interface SizeChangedSignalCallback {
        ($obj: Screen): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Screen {

    // Own fields of CScreensaver-1.0.CScreensaver.Screen

    obj: GObject.Object
    rect: Gdk.Rectangle
    gdk_screen: Gdk.Screen
    monitor_infos: MonitorInfo
    primary_monitor_index: number
    n_monitor_infos: number
    monitors_changed_id: number
    screen_size_changed_id: number
    composited_changed_id: number
    low_res: boolean
    smallest_width: number
    smallest_height: number

    // Owm methods of CScreensaver-1.0.CScreensaver.Screen

    /**
     * Gets whether or not one of our monitors falls below the low res threshold (1200 wide).
     * This lets us display certain things at smaller sizes to prevent truncating of images, etc.
     * @returns Whether or not to use low res mode.
     */
    get_low_res_mode(): boolean
    /**
     * Stores the location and size of the indicated monitor in `geometry`.
     * @param monitor the monitor number
     */
    get_monitor_geometry(monitor: number): /* geometry */ Gdk.Rectangle
    /**
     * Gets the index of the monitor that the mouse pointer currently
     * occupies.
     * @returns the monitor index for the pointer
     */
    get_mouse_monitor(): number
    /**
     * Gets the number of monitors that are joined together to form `screen`.
     * @returns the number of monitors
     */
    get_n_monitors(): number
    /**
     * Gets the index of the primary monitor on this `screen`.
     * @returns a monitor index
     */
    get_primary_monitor(): number
    /**
     * Stores the location and size of the screen in `geometry`.
     */
    get_screen_geometry(): /* geometry */ Gdk.Rectangle
    /**
     * Gets whether or not one of our monitors falls below the low res threshold (1200 wide).
     * This lets us display certain things at smaller sizes to prevent truncating of images, etc.
     */
    get_smallest_monitor_sizes(): [ /* width */ number, /* height */ number ]
    place_pointer_in_primary_monitor(): void

    // Own signals of CScreensaver-1.0.CScreensaver.Screen

    connect(sigName: "composited-changed", callback: Screen.CompositedChangedSignalCallback): number
    connect_after(sigName: "composited-changed", callback: Screen.CompositedChangedSignalCallback): number
    emit(sigName: "composited-changed", ...args: any[]): void
    connect(sigName: "monitors-changed", callback: Screen.MonitorsChangedSignalCallback): number
    connect_after(sigName: "monitors-changed", callback: Screen.MonitorsChangedSignalCallback): number
    emit(sigName: "monitors-changed", ...args: any[]): void
    connect(sigName: "size-changed", callback: Screen.SizeChangedSignalCallback): number
    connect_after(sigName: "size-changed", callback: Screen.SizeChangedSignalCallback): number
    emit(sigName: "size-changed", ...args: any[]): void

    // Class property signals of CScreensaver-1.0.CScreensaver.Screen

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Screen extends GObject.Object {

    // Own properties of CScreensaver-1.0.CScreensaver.Screen

    static name: string
    static $gtype: GObject.GType<Screen>

    // Constructors of CScreensaver-1.0.CScreensaver.Screen

    constructor(config?: Screen.ConstructorProperties) 
    constructor(debug: boolean) 
    static new(debug: boolean): Screen
    _init(config?: Screen.ConstructorProperties): void
    /**
     * Gets the NET_WM_NAME of xwindow
     * @param xwindow The Window (XID) to get the property from.
     * @returns The value of NET_WM_NAME.
     */
    static get_net_wm_name(xwindow: number): string | null
    /**
     * Resets the screensaver idle timer. If called when the screensaver is active
     * it will stop it.
     */
    static reset_screensaver(): void
    /**
     * Sets _NET_WM_NAME to name on window
     * @param window The #GdkWindow to set the property on
     * @param name The name.
     */
    static set_net_wm_name(window: Gdk.Window, name: string | null): void
}

module ScreenSaverProxy {

    // Constructor properties interface

    interface ConstructorProperties extends ScreenSaver.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ScreenSaverProxy extends ScreenSaver, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.ScreenSaverProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ScreenSaverProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsScreenSaverProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ScreenSaverProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.ScreenSaverProxy

    static name: string
    static $gtype: GObject.GType<ScreenSaverProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.ScreenSaverProxy

    constructor(config?: ScreenSaverProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_screen_saver_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_screen_saver_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ScreenSaverProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_screen_saver_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_screen_saver_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ScreenSaverProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_screen_saver_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_screen_saver_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ScreenSaverProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-ScreenSaver.top_of_page">org.cinnamon.ScreenSaver</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_screen_saver_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ScreenSaverProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ScreenSaverProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-ScreenSaver.top_of_page">org.cinnamon.ScreenSaver</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_screen_saver_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_screen_saver_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ScreenSaverProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_screen_saver_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_screen_saver_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_screen_saver_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ScreenSaverProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ScreenSaverSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends ScreenSaver.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ScreenSaverSkeleton extends ScreenSaver, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.ScreenSaverSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ScreenSaverSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ScreenSaverSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsScreenSaverSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ScreenSaverSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.ScreenSaverSkeleton

    static name: string
    static $gtype: GObject.GType<ScreenSaverSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.ScreenSaverSkeleton

    constructor(config?: ScreenSaverSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-ScreenSaver.top_of_page">org.cinnamon.ScreenSaver</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-ScreenSaver.top_of_page">org.cinnamon.ScreenSaver</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ScreenSaverSkeleton
    _init(config?: ScreenSaverSkeleton.ConstructorProperties): void
}

module SessionPresenceProxy {

    // Constructor properties interface

    interface ConstructorProperties extends SessionPresence.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface SessionPresenceProxy extends SessionPresence, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.SessionPresenceProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: SessionPresenceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsSessionPresenceProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class SessionPresenceProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.SessionPresenceProxy

    static name: string
    static $gtype: GObject.GType<SessionPresenceProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.SessionPresenceProxy

    constructor(config?: SessionPresenceProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_session_presence_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_session_presence_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): SessionPresenceProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_session_presence_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_session_presence_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): SessionPresenceProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_session_presence_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_session_presence_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): SessionPresenceProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-SessionManager-Presence.top_of_page">org.gnome.SessionManager.Presence</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_session_presence_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): SessionPresenceProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: SessionPresenceProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-SessionManager-Presence.top_of_page">org.gnome.SessionManager.Presence</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_session_presence_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_session_presence_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SessionPresenceProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_session_presence_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_session_presence_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_session_presence_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SessionPresenceProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module SessionPresenceSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends SessionPresence.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface SessionPresenceSkeleton extends SessionPresence, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.SessionPresenceSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: SessionPresenceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: SessionPresenceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: SessionPresenceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: SessionPresenceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsSessionPresenceSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class SessionPresenceSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.SessionPresenceSkeleton

    static name: string
    static $gtype: GObject.GType<SessionPresenceSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.SessionPresenceSkeleton

    constructor(config?: SessionPresenceSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-SessionManager-Presence.top_of_page">org.gnome.SessionManager.Presence</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-SessionManager-Presence.top_of_page">org.gnome.SessionManager.Presence</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): SessionPresenceSkeleton
    _init(config?: SessionPresenceSkeleton.ConstructorProperties): void
}

module UPowerDeviceProxy {

    // Constructor properties interface

    interface ConstructorProperties extends UPowerDevice.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface UPowerDeviceProxy extends UPowerDevice, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.UPowerDeviceProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: UPowerDeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsUPowerDeviceProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class UPowerDeviceProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerDeviceProxy

    static name: string
    static $gtype: GObject.GType<UPowerDeviceProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.UPowerDeviceProxy

    constructor(config?: UPowerDeviceProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_upower_device_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_upower_device_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): UPowerDeviceProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_upower_device_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_upower_device_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): UPowerDeviceProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_upower_device_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_upower_device_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): UPowerDeviceProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_upower_device_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): UPowerDeviceProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: UPowerDeviceProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_upower_device_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_upower_device_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<UPowerDeviceProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_upower_device_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_upower_device_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_upower_device_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<UPowerDeviceProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module UPowerDeviceSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends UPowerDevice.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface UPowerDeviceSkeleton extends UPowerDevice, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.UPowerDeviceSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: UPowerDeviceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsUPowerDeviceSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class UPowerDeviceSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerDeviceSkeleton

    static name: string
    static $gtype: GObject.GType<UPowerDeviceSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.UPowerDeviceSkeleton

    constructor(config?: UPowerDeviceSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): UPowerDeviceSkeleton
    _init(config?: UPowerDeviceSkeleton.ConstructorProperties): void
}

module UPowerProxy {

    // Constructor properties interface

    interface ConstructorProperties extends UPower.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface UPowerProxy extends UPower, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CScreensaver-1.0.CScreensaver.UPowerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: UPowerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsUPowerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class UPowerProxy extends Gio.DBusProxy {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerProxy

    static name: string
    static $gtype: GObject.GType<UPowerProxy>

    // Constructors of CScreensaver-1.0.CScreensaver.UPowerProxy

    constructor(config?: UPowerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cs_upower_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_upower_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): UPowerProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cs_upower_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cs_upower_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): UPowerProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cs_upower_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_upower_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): UPowerProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cs_upower_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): UPowerProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: UPowerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_upower_proxy_new_finish() to get the result of the operation.
     * 
     * See cs_upower_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<UPowerProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like cs_upower_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cs_upower_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cs_upower_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<UPowerProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module UPowerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends UPower.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface UPowerSkeleton extends UPower, Gio.DBusInterface {

    // Class property signals of CScreensaver-1.0.CScreensaver.UPowerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: UPowerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UPowerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (($obj: UPowerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: UPowerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CsUPowerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class UPowerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerSkeleton

    static name: string
    static $gtype: GObject.GType<UPowerSkeleton>

    // Constructors of CScreensaver-1.0.CScreensaver.UPowerSkeleton

    constructor(config?: UPowerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): UPowerSkeleton
    _init(config?: UPowerSkeleton.ConstructorProperties): void
}

interface CinnamonIface {

    // Own fields of CScreensaver-1.0.CScreensaver.CinnamonIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_expo_active: (object: Cinnamon) => boolean
    get_overview_active: (object: Cinnamon) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-Cinnamon.top_of_page">org.Cinnamon</link>.
 * @record 
 */
abstract class CinnamonIface {

    // Own properties of CScreensaver-1.0.CScreensaver.CinnamonIface

    static name: string
}

interface CinnamonProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.CinnamonProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsCinnamonProxy.
 * @record 
 */
abstract class CinnamonProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.CinnamonProxyClass

    static name: string
}

interface CinnamonProxyPrivate {
}

class CinnamonProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.CinnamonProxyPrivate

    static name: string
}

interface CinnamonSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.CinnamonSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsCinnamonSkeleton.
 * @record 
 */
abstract class CinnamonSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.CinnamonSkeletonClass

    static name: string
}

interface CinnamonSkeletonPrivate {
}

class CinnamonSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.CinnamonSkeletonPrivate

    static name: string
}

interface ConsoleKitManagerIface {

    // Own fields of CScreensaver-1.0.CScreensaver.ConsoleKitManagerIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_current_session: (object: ConsoleKitManager, invocation: Gio.DBusMethodInvocation) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Manager.top_of_page">org.freedesktop.ConsoleKit.Manager</link>.
 * @record 
 */
abstract class ConsoleKitManagerIface {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitManagerIface

    static name: string
}

interface ConsoleKitManagerProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.ConsoleKitManagerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsConsoleKitManagerProxy.
 * @record 
 */
abstract class ConsoleKitManagerProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitManagerProxyClass

    static name: string
}

interface ConsoleKitManagerProxyPrivate {
}

class ConsoleKitManagerProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitManagerProxyPrivate

    static name: string
}

interface ConsoleKitManagerSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.ConsoleKitManagerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsConsoleKitManagerSkeleton.
 * @record 
 */
abstract class ConsoleKitManagerSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitManagerSkeletonClass

    static name: string
}

interface ConsoleKitManagerSkeletonPrivate {
}

class ConsoleKitManagerSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitManagerSkeletonPrivate

    static name: string
}

interface ConsoleKitSessionIface {

    // Own fields of CScreensaver-1.0.CScreensaver.ConsoleKitSessionIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_lock: (object: ConsoleKitSession, invocation: Gio.DBusMethodInvocation) => boolean
    handle_unlock: (object: ConsoleKitSession, invocation: Gio.DBusMethodInvocation) => boolean
    active_changed: (object: ConsoleKitSession, arg_is_active: boolean) => void
    lock: (object: ConsoleKitSession) => void
    unlock: (object: ConsoleKitSession) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ConsoleKit-Session.top_of_page">org.freedesktop.ConsoleKit.Session</link>.
 * @record 
 */
abstract class ConsoleKitSessionIface {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitSessionIface

    static name: string
}

interface ConsoleKitSessionProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.ConsoleKitSessionProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsConsoleKitSessionProxy.
 * @record 
 */
abstract class ConsoleKitSessionProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitSessionProxyClass

    static name: string
}

interface ConsoleKitSessionProxyPrivate {
}

class ConsoleKitSessionProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitSessionProxyPrivate

    static name: string
}

interface ConsoleKitSessionSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.ConsoleKitSessionSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsConsoleKitSessionSkeleton.
 * @record 
 */
abstract class ConsoleKitSessionSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitSessionSkeletonClass

    static name: string
}

interface ConsoleKitSessionSkeletonPrivate {
}

class ConsoleKitSessionSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.ConsoleKitSessionSkeletonPrivate

    static name: string
}

interface EventGrabberClass {

    // Own fields of CScreensaver-1.0.CScreensaver.EventGrabberClass

    parent_class: GObject.ObjectClass
}

abstract class EventGrabberClass {

    // Own properties of CScreensaver-1.0.CScreensaver.EventGrabberClass

    static name: string
}

interface GdkEventFilterClass {

    // Own fields of CScreensaver-1.0.CScreensaver.GdkEventFilterClass

    parent_class: GObject.ObjectClass
}

abstract class GdkEventFilterClass {

    // Own properties of CScreensaver-1.0.CScreensaver.GdkEventFilterClass

    static name: string
}

interface KeybindingHandlerIface {

    // Own fields of CScreensaver-1.0.CScreensaver.KeybindingHandlerIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_handle_keybinding: (object: KeybindingHandler, invocation: Gio.DBusMethodInvocation, arg_type: number) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-SettingsDaemon-KeybindingHandler.top_of_page">org.cinnamon.SettingsDaemon.KeybindingHandler</link>.
 * @record 
 */
abstract class KeybindingHandlerIface {

    // Own properties of CScreensaver-1.0.CScreensaver.KeybindingHandlerIface

    static name: string
}

interface KeybindingHandlerProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.KeybindingHandlerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsKeybindingHandlerProxy.
 * @record 
 */
abstract class KeybindingHandlerProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.KeybindingHandlerProxyClass

    static name: string
}

interface KeybindingHandlerProxyPrivate {
}

class KeybindingHandlerProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.KeybindingHandlerProxyPrivate

    static name: string
}

interface KeybindingHandlerSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.KeybindingHandlerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsKeybindingHandlerSkeleton.
 * @record 
 */
abstract class KeybindingHandlerSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.KeybindingHandlerSkeletonClass

    static name: string
}

interface KeybindingHandlerSkeletonPrivate {
}

class KeybindingHandlerSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.KeybindingHandlerSkeletonPrivate

    static name: string
}

interface LogindManagerIface {

    // Own fields of CScreensaver-1.0.CScreensaver.LogindManagerIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_session: (object: LogindManager, invocation: Gio.DBusMethodInvocation, arg_session_id: string | null) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Manager.top_of_page">org.freedesktop.login1.Manager</link>.
 * @record 
 */
abstract class LogindManagerIface {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindManagerIface

    static name: string
}

interface LogindManagerProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.LogindManagerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsLogindManagerProxy.
 * @record 
 */
abstract class LogindManagerProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindManagerProxyClass

    static name: string
}

interface LogindManagerProxyPrivate {
}

class LogindManagerProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindManagerProxyPrivate

    static name: string
}

interface LogindManagerSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.LogindManagerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsLogindManagerSkeleton.
 * @record 
 */
abstract class LogindManagerSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindManagerSkeletonClass

    static name: string
}

interface LogindManagerSkeletonPrivate {
}

class LogindManagerSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindManagerSkeletonPrivate

    static name: string
}

interface LogindSessionIface {

    // Own fields of CScreensaver-1.0.CScreensaver.LogindSessionIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_active: (object: LogindSession) => boolean
    lock: (object: LogindSession) => void
    unlock: (object: LogindSession) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-login1-Session.top_of_page">org.freedesktop.login1.Session</link>.
 * @record 
 */
abstract class LogindSessionIface {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindSessionIface

    static name: string
}

interface LogindSessionProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.LogindSessionProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsLogindSessionProxy.
 * @record 
 */
abstract class LogindSessionProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindSessionProxyClass

    static name: string
}

interface LogindSessionProxyPrivate {
}

class LogindSessionProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindSessionProxyPrivate

    static name: string
}

interface LogindSessionSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.LogindSessionSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsLogindSessionSkeleton.
 * @record 
 */
abstract class LogindSessionSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindSessionSkeletonClass

    static name: string
}

interface LogindSessionSkeletonPrivate {
}

class LogindSessionSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.LogindSessionSkeletonPrivate

    static name: string
}

interface MediaPlayerIface {

    // Own fields of CScreensaver-1.0.CScreensaver.MediaPlayerIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_next: (object: MediaPlayer, invocation: Gio.DBusMethodInvocation) => boolean
    handle_open_uri: (object: MediaPlayer, invocation: Gio.DBusMethodInvocation, arg_Uri: string | null) => boolean
    handle_pause: (object: MediaPlayer, invocation: Gio.DBusMethodInvocation) => boolean
    handle_play: (object: MediaPlayer, invocation: Gio.DBusMethodInvocation) => boolean
    handle_play_pause: (object: MediaPlayer, invocation: Gio.DBusMethodInvocation) => boolean
    handle_previous: (object: MediaPlayer, invocation: Gio.DBusMethodInvocation) => boolean
    handle_seek: (object: MediaPlayer, invocation: Gio.DBusMethodInvocation, arg_Offset: number) => boolean
    handle_set_position: (object: MediaPlayer, invocation: Gio.DBusMethodInvocation, arg_TrackId: string | null, arg_Position: number) => boolean
    handle_stop: (object: MediaPlayer, invocation: Gio.DBusMethodInvocation) => boolean
    get_can_control: (object: MediaPlayer) => boolean
    get_can_go_next: (object: MediaPlayer) => boolean
    get_can_go_previous: (object: MediaPlayer) => boolean
    get_can_pause: (object: MediaPlayer) => boolean
    get_can_play: (object: MediaPlayer) => boolean
    get_can_seek: (object: MediaPlayer) => boolean
    get_loop_status: (object: MediaPlayer) => string | null
    get_maximum_rate: (object: MediaPlayer) => number
    get_metadata: (object: MediaPlayer) => GLib.Variant | null
    get_minimum_rate: (object: MediaPlayer) => number
    get_playback_status: (object: MediaPlayer) => string | null
    get_position: (object: MediaPlayer) => number
    get_rate: (object: MediaPlayer) => number
    get_shuffle: (object: MediaPlayer) => boolean
    get_volume: (object: MediaPlayer) => number
    seeked: (object: MediaPlayer, arg_Position: number) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-mpris-MediaPlayer2-Player.top_of_page">org.mpris.MediaPlayer2.Player</link>.
 * @record 
 */
abstract class MediaPlayerIface {

    // Own properties of CScreensaver-1.0.CScreensaver.MediaPlayerIface

    static name: string
}

interface MediaPlayerProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.MediaPlayerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsMediaPlayerProxy.
 * @record 
 */
abstract class MediaPlayerProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.MediaPlayerProxyClass

    static name: string
}

interface MediaPlayerProxyPrivate {
}

class MediaPlayerProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.MediaPlayerProxyPrivate

    static name: string
}

interface MediaPlayerSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.MediaPlayerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsMediaPlayerSkeleton.
 * @record 
 */
abstract class MediaPlayerSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.MediaPlayerSkeletonClass

    static name: string
}

interface MediaPlayerSkeletonPrivate {
}

class MediaPlayerSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.MediaPlayerSkeletonPrivate

    static name: string
}

interface MonitorInfo {

    // Own fields of CScreensaver-1.0.CScreensaver.MonitorInfo

    number: number
    rect: Gdk.Rectangle
    is_primary: boolean
    output: xlib.XID
}

class MonitorInfo {

    // Own properties of CScreensaver-1.0.CScreensaver.MonitorInfo

    static name: string
}

interface MuffinDisplayConfigIface {

    // Own fields of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_current_state: (object: MuffinDisplayConfig, invocation: Gio.DBusMethodInvocation) => boolean
    monitors_changed: (object: MuffinDisplayConfig) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-Muffin-DisplayConfig.top_of_page">org.cinnamon.Muffin.DisplayConfig</link>.
 * @record 
 */
abstract class MuffinDisplayConfigIface {

    // Own properties of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigIface

    static name: string
}

interface MuffinDisplayConfigProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsMuffinDisplayConfigProxy.
 * @record 
 */
abstract class MuffinDisplayConfigProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigProxyClass

    static name: string
}

interface MuffinDisplayConfigProxyPrivate {
}

class MuffinDisplayConfigProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigProxyPrivate

    static name: string
}

interface MuffinDisplayConfigSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsMuffinDisplayConfigSkeleton.
 * @record 
 */
abstract class MuffinDisplayConfigSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigSkeletonClass

    static name: string
}

interface MuffinDisplayConfigSkeletonPrivate {
}

class MuffinDisplayConfigSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.MuffinDisplayConfigSkeletonPrivate

    static name: string
}

interface NotificationWatcherClass {

    // Own fields of CScreensaver-1.0.CScreensaver.NotificationWatcherClass

    parent_class: GObject.ObjectClass
    notification_received: (watcher: NotificationWatcher, sender: string | null) => void
}

abstract class NotificationWatcherClass {

    // Own properties of CScreensaver-1.0.CScreensaver.NotificationWatcherClass

    static name: string
}

interface ScreenClass {

    // Own fields of CScreensaver-1.0.CScreensaver.ScreenClass

    parent_class: GObject.ObjectClass
}

abstract class ScreenClass {

    // Own properties of CScreensaver-1.0.CScreensaver.ScreenClass

    static name: string
}

interface ScreenSaverIface {

    // Own fields of CScreensaver-1.0.CScreensaver.ScreenSaverIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_active: (object: ScreenSaver, invocation: Gio.DBusMethodInvocation) => boolean
    handle_get_active_time: (object: ScreenSaver, invocation: Gio.DBusMethodInvocation) => boolean
    handle_get_session_idle_time: (object: ScreenSaver, invocation: Gio.DBusMethodInvocation) => boolean
    handle_lock: (object: ScreenSaver, invocation: Gio.DBusMethodInvocation, arg_message: string | null) => boolean
    handle_quit: (object: ScreenSaver, invocation: Gio.DBusMethodInvocation) => boolean
    handle_set_active: (object: ScreenSaver, invocation: Gio.DBusMethodInvocation, arg_e: boolean) => boolean
    handle_simulate_user_activity: (object: ScreenSaver, invocation: Gio.DBusMethodInvocation) => boolean
    active_changed: (object: ScreenSaver, arg_arg_0: boolean) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-cinnamon-ScreenSaver.top_of_page">org.cinnamon.ScreenSaver</link>.
 * @record 
 */
abstract class ScreenSaverIface {

    // Own properties of CScreensaver-1.0.CScreensaver.ScreenSaverIface

    static name: string
}

interface ScreenSaverProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.ScreenSaverProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsScreenSaverProxy.
 * @record 
 */
abstract class ScreenSaverProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.ScreenSaverProxyClass

    static name: string
}

interface ScreenSaverProxyPrivate {
}

class ScreenSaverProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.ScreenSaverProxyPrivate

    static name: string
}

interface ScreenSaverSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.ScreenSaverSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsScreenSaverSkeleton.
 * @record 
 */
abstract class ScreenSaverSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.ScreenSaverSkeletonClass

    static name: string
}

interface ScreenSaverSkeletonPrivate {
}

class ScreenSaverSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.ScreenSaverSkeletonPrivate

    static name: string
}

interface SessionPresenceIface {

    // Own fields of CScreensaver-1.0.CScreensaver.SessionPresenceIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_status: (object: SessionPresence) => number
    status_changed: (object: SessionPresence, arg_status: number) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-SessionManager-Presence.top_of_page">org.gnome.SessionManager.Presence</link>.
 * @record 
 */
abstract class SessionPresenceIface {

    // Own properties of CScreensaver-1.0.CScreensaver.SessionPresenceIface

    static name: string
}

interface SessionPresenceProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.SessionPresenceProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsSessionPresenceProxy.
 * @record 
 */
abstract class SessionPresenceProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.SessionPresenceProxyClass

    static name: string
}

interface SessionPresenceProxyPrivate {
}

class SessionPresenceProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.SessionPresenceProxyPrivate

    static name: string
}

interface SessionPresenceSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.SessionPresenceSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsSessionPresenceSkeleton.
 * @record 
 */
abstract class SessionPresenceSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.SessionPresenceSkeletonClass

    static name: string
}

interface SessionPresenceSkeletonPrivate {
}

class SessionPresenceSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.SessionPresenceSkeletonPrivate

    static name: string
}

interface UPowerDeviceIface {

    // Own fields of CScreensaver-1.0.CScreensaver.UPowerDeviceIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_icon_name: (object: UPowerDevice) => string | null
    get_online: (object: UPowerDevice) => boolean
    get_percentage: (object: UPowerDevice) => number
    get_state: (object: UPowerDevice) => number
    get_type_: (object: UPowerDevice) => number
    get_warning_level: (object: UPowerDevice) => number
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>.
 * @record 
 */
abstract class UPowerDeviceIface {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerDeviceIface

    static name: string
}

interface UPowerDeviceProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.UPowerDeviceProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsUPowerDeviceProxy.
 * @record 
 */
abstract class UPowerDeviceProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerDeviceProxyClass

    static name: string
}

interface UPowerDeviceProxyPrivate {
}

class UPowerDeviceProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerDeviceProxyPrivate

    static name: string
}

interface UPowerDeviceSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.UPowerDeviceSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsUPowerDeviceSkeleton.
 * @record 
 */
abstract class UPowerDeviceSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerDeviceSkeletonClass

    static name: string
}

interface UPowerDeviceSkeletonPrivate {
}

class UPowerDeviceSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerDeviceSkeletonPrivate

    static name: string
}

interface UPowerIface {

    // Own fields of CScreensaver-1.0.CScreensaver.UPowerIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_enumerate_devices: (object: UPower, invocation: Gio.DBusMethodInvocation) => boolean
    get_on_battery: (object: UPower) => boolean
    device_added: (object: UPower, arg_device: string | null) => void
    device_removed: (object: UPower, arg_device: string | null) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>.
 * @record 
 */
abstract class UPowerIface {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerIface

    static name: string
}

interface UPowerProxyClass {

    // Own fields of CScreensaver-1.0.CScreensaver.UPowerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CsUPowerProxy.
 * @record 
 */
abstract class UPowerProxyClass {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerProxyClass

    static name: string
}

interface UPowerProxyPrivate {
}

class UPowerProxyPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerProxyPrivate

    static name: string
}

interface UPowerSkeletonClass {

    // Own fields of CScreensaver-1.0.CScreensaver.UPowerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CsUPowerSkeleton.
 * @record 
 */
abstract class UPowerSkeletonClass {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerSkeletonClass

    static name: string
}

interface UPowerSkeletonPrivate {
}

class UPowerSkeletonPrivate {

    // Own properties of CScreensaver-1.0.CScreensaver.UPowerSkeletonPrivate

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

export default CScreensaver;
// END