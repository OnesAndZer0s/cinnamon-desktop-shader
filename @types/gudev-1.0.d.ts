
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gudev-1.0-import.d.ts';
/**
 * GUdev-1.0
 */

import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';

export namespace GUdev {

/**
 * Enumeration used to specify a the type of a device.
 */
enum DeviceType {
    /**
     * Device does not have a device file.
     */
    NONE,
    /**
     * Device is a block device.
     */
    BLOCK,
    /**
     * Device is a character device.
     */
    CHAR,
}
module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `uevent`
     */
    interface UeventSignalCallback {
        ($obj: Client, action: string | null, device: Device): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUdev-1.0.GUdev.Client

        /**
         * The subsystems to listen for uevents on.
         * 
         * To listen for only a specific DEVTYPE for a given SUBSYSTEM, use
         * "subsystem/devtype". For example, to only listen for uevents
         * where SUBSYSTEM is usb and DEVTYPE is usb_interface, use
         * "usb/usb_interface".
         * 
         * If this property is %NULL, then no events will be reported. If
         * it's the empty array, events from all subsystems will be
         * reported.
         */
        subsystems?: string[] | null
    }

}

interface Client {

    // Own properties of GUdev-1.0.GUdev.Client

    /**
     * The subsystems to listen for uevents on.
     * 
     * To listen for only a specific DEVTYPE for a given SUBSYSTEM, use
     * "subsystem/devtype". For example, to only listen for uevents
     * where SUBSYSTEM is usb and DEVTYPE is usb_interface, use
     * "usb/usb_interface".
     * 
     * If this property is %NULL, then no events will be reported. If
     * it's the empty array, events from all subsystems will be
     * reported.
     */
    readonly subsystems: string[]

    // Own fields of GUdev-1.0.GUdev.Client

    parent: GObject.Object

    // Owm methods of GUdev-1.0.GUdev.Client

    /**
     * Looks up a device for a device file.
     * @param device_file A device file.
     * @returns A #GUdevDevice object or %NULL if the device was not found. Free with g_object_unref().
     */
    query_by_device_file(device_file: string | null): Device | null
    /**
     * Looks up a device for a type and device number.
     * @param type A value from the #GUdevDeviceType enumeration.
     * @param number A device number.
     * @returns A #GUdevDevice object or %NULL if the device was not found. Free with g_object_unref().
     */
    query_by_device_number(type: DeviceType, number: DeviceNumber): Device | null
    /**
     * Gets all devices belonging to `subsystem`.
     * @param subsystem The subsystem to get devices for or %NULL to get all devices.
     * @returns A list of #GUdevDevice objects. The caller should free the result by using g_object_unref() on each element in the list and then g_list_free() on the list.
     */
    query_by_subsystem(subsystem: string | null): Device[] | null
    /**
     * Looks up a device for a subsystem and name.
     * @param subsystem A subsystem name.
     * @param name The name of the device.
     * @returns A #GUdevDevice object or %NULL if the device was not found. Free with g_object_unref().
     */
    query_by_subsystem_and_name(subsystem: string | null, name: string | null): Device | null
    /**
     * Looks up a device for a sysfs path.
     * @param sysfs_path A sysfs path.
     * @returns A #GUdevDevice object or %NULL if the device was not found. Free with g_object_unref().
     */
    query_by_sysfs_path(sysfs_path: string | null): Device | null

    // Own virtual methods of GUdev-1.0.GUdev.Client

    vfunc_uevent(action: string | null, device: Device): void

    // Own signals of GUdev-1.0.GUdev.Client

    connect(sigName: "uevent", callback: Client.UeventSignalCallback): number
    connect_after(sigName: "uevent", callback: Client.UeventSignalCallback): number
    emit(sigName: "uevent", action: string | null, device: Device, ...args: any[]): void

    // Class property signals of GUdev-1.0.GUdev.Client

    connect(sigName: "notify::subsystems", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subsystems", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subsystems", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GUdevClient is used to query information about devices on a Linux
 * system from the Linux kernel and the udev device
 * manager.
 * 
 * Device information is retrieved from the kernel (through the
 * <literal>sysfs</literal> filesystem) and the udev daemon (through a
 * <literal>tmpfs</literal> filesystem) and presented through
 * #GUdevDevice objects. This means that no blocking IO ever happens
 * (in both cases, we are essentially just reading data from kernel
 * memory) and as such there are no asynchronous versions of the
 * provided methods.
 * 
 * To get #GUdevDevice objects, use
 * g_udev_client_query_by_subsystem(),
 * g_udev_client_query_by_device_number(),
 * g_udev_client_query_by_device_file(),
 * g_udev_client_query_by_sysfs_path(),
 * g_udev_client_query_by_subsystem_and_name()
 * or the #GUdevEnumerator type.
 * 
 * To listen to uevents, connect to the #GUdevClient::uevent signal.
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of GUdev-1.0.GUdev.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of GUdev-1.0.GUdev.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Constructs a #GUdevClient object that can be used to query
     * information about devices. Connect to the #GUdevClient::uevent
     * signal to listen for uevents. Note that signals are emitted in the
     * <link linkend="g-main-context-push-thread-default">thread-default main loop</link>
     * of the thread that you call this constructor from.
     * @constructor 
     * @param subsystems A %NULL terminated string array of subsystems to listen for uevents on, %NULL to not listen on uevents at all, or an empty array to listen to uevents on all subsystems. See the documentation for the #GUdevClient:subsystems property for details on this parameter.
     * @returns A new #GUdevClient object. Free with g_object_unref().
     */
    constructor(subsystems: string[] | null) 
    /**
     * Constructs a #GUdevClient object that can be used to query
     * information about devices. Connect to the #GUdevClient::uevent
     * signal to listen for uevents. Note that signals are emitted in the
     * <link linkend="g-main-context-push-thread-default">thread-default main loop</link>
     * of the thread that you call this constructor from.
     * @constructor 
     * @param subsystems A %NULL terminated string array of subsystems to listen for uevents on, %NULL to not listen on uevents at all, or an empty array to listen to uevents on all subsystems. See the documentation for the #GUdevClient:subsystems property for details on this parameter.
     * @returns A new #GUdevClient object. Free with g_object_unref().
     */
    static new(subsystems: string[] | null): Client
    _init(config?: Client.ConstructorProperties): void
}

module Device {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Device {

    // Own fields of GUdev-1.0.GUdev.Device

    parent: GObject.Object

    // Owm methods of GUdev-1.0.GUdev.Device

    /**
     * Gets the most recent action (e.g. "add", "remove", "change", etc.) for `device`.
     * @returns An action string.
     */
    get_action(): string | null
    /**
     * Gets the device file for `device`.
     * @returns The device file for @device or %NULL if no device file exists.
     */
    get_device_file(): string | null
    /**
     * Gets a list of symlinks (in <literal>/dev</literal>) that points to
     * the device file for `device`.
     * @returns A %NULL terminated string array of symlinks. This array is owned by @device and should not be freed by the caller.
     */
    get_device_file_symlinks(): string[]
    /**
     * Gets the device number, if any, for `device`.
     * @returns The device number for @device or 0 if unknown.
     */
    get_device_number(): DeviceNumber
    /**
     * Gets the type of the device file, if any, for `device`.
     * @returns The device number for @device or #G_UDEV_DEVICE_TYPE_NONE if the device does not have a device file.
     */
    get_device_type(): DeviceType
    /**
     * Gets the device type for `device`.
     * @returns The devtype for @device.
     */
    get_devtype(): string | null
    /**
     * Gets the name of the driver used for `device`.
     * @returns The name of the driver for @device or %NULL if unknown.
     */
    get_driver(): string | null
    /**
     * Gets whether `device` has been initialized.
     * @returns Whether @device has been initialized.
     */
    get_is_initialized(): boolean
    /**
     * Gets the name of `device,` e.g. "sda3".
     * @returns The name of @device.
     */
    get_name(): string | null
    /**
     * Gets the number of `device,` e.g. "3" if g_udev_device_get_name() returns "sda3".
     * @returns The number of @device.
     */
    get_number(): string | null
    /**
     * Gets the immediate parent of `device,` if any.
     * @returns A #GUdevDevice or %NULL if @device has no parent. Free with g_object_unref().
     */
    get_parent(): Device | null
    /**
     * Walks up the chain of parents of `device` and returns the first
     * device encountered where `subsystem` and `devtype` matches, if any.
     * @param subsystem The subsystem of the parent to get.
     * @param devtype The devtype of the parent to get or %NULL.
     * @returns A #GUdevDevice or %NULL if @device has no parent with @subsystem and @devtype. Free with g_object_unref().
     */
    get_parent_with_subsystem(subsystem: string | null, devtype: string | null): Device | null
    /**
     * Look up the value for `key` on `device`.
     * @param key Name of property.
     * @returns The value for @key or %NULL if @key doesn't exist on @device. Do not free this string, it is owned by @device.
     */
    get_property(key: string | null): string | null

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string | null, value: any): void
    /**
     * Look up the value for `key` on `device` and convert it to an
     * boolean. This is done by doing a case-insensitive string comparison
     * on the string value against "1" and "true".
     * @param key Name of property.
     * @returns The value for @key or %FALSE if @key doesn't exist or isn't a #gboolean.
     */
    get_property_as_boolean(key: string | null): boolean
    /**
     * Look up the value for `key` on `device` and convert it to a double
     * precision floating point number using g_ascii_strtod().
     * @param key Name of property.
     * @returns The value for @key or 0.0 if @key doesn't exist or isn't a #gdouble.
     */
    get_property_as_double(key: string | null): number
    /**
     * Look up the value for `key` on `device` and convert it to an integer
     * using strtol().
     * @param key Name of property.
     * @returns The value for @key or 0 if @key doesn't exist or isn't an integer.
     */
    get_property_as_int(key: string | null): number
    /**
     * Look up the value for `key` on `device` and return the result of
     * splitting it into non-empty tokens split at white space (only space
     * (' '), form-feed ('\f'), newline ('\n'), carriage return ('\r'),
     * horizontal tab ('\t'), and vertical tab ('\v') are considered; the
     * locale is not taken into account).
     * @param key Name of property.
     * @returns  The value of @key on @device split into tokens or %NULL if @key doesn't exist. This array is owned by @device and should not be freed by the caller.
     */
    get_property_as_strv(key: string | null): string[] | null
    /**
     * Look up the value for `key` on `device` and convert it to an unsigned
     * 64-bit integer using g_ascii_strtoull().
     * @param key Name of property.
     * @returns The value  for @key or 0 if @key doesn't  exist or isn't a #guint64.
     */
    get_property_as_uint64(key: string | null): number
    /**
     * Gets all keys for properties on `device`.
     * @returns A %NULL terminated string array of property keys. This array is owned by @device and should not be freed by the caller.
     */
    get_property_keys(): string[]
    /**
     * Gets the most recent sequence number for `device`.
     * @returns A sequence number.
     */
    get_seqnum(): number
    /**
     * Gets the subsystem for `device`.
     * @returns The subsystem for @device.
     */
    get_subsystem(): string | null
    /**
     * Look up the sysfs attribute with `name` on `device`. The retrieved value
     * is cached in the device. Repeated calls will return the same value and
     * not open the attribute again, unless updated through one of the
     * "uncached" functions.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or %NULL if there is no such attribute. Do not free this string, it is owned by @device.
     */
    get_sysfs_attr(name: string | null): string | null
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an
     * boolean. This is done by doing a case-insensitive string comparison
     * on the string value against "1", "true", "Y" and "y". The retrieved value is
     * cached in the device. Repeated calls will return the same value and
     * not open the attribute again, unless updated through one of the
     * "uncached" functions.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or %FALSE if there is no such attribute.
     */
    get_sysfs_attr_as_boolean(name: string | null): boolean
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an
     * boolean. This is done by doing a case-insensitive string comparison
     * on the string value against "1", "true", "Y" and "y". This function does
     * blocking I/O, and updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or %FALSE if there is no such attribute.
     */
    get_sysfs_attr_as_boolean_uncached(name: string | null): boolean
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to a double
     * precision floating point number using g_ascii_strtod(). The retrieved value is cached
     * in the device. Repeated calls will return the same value and not open the
     * attribute again, unless updated through one of the "uncached" functions.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or 0.0 if there is no such attribute.
     */
    get_sysfs_attr_as_double(name: string | null): number
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to a double
     * precision floating point number using g_ascii_strtod(). This function does blocking
     * I/O, and updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or 0.0 if there is no such attribute.
     */
    get_sysfs_attr_as_double_uncached(name: string | null): number
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an integer
     * using strtol(). The retrieved value is cached in the device. Repeated calls
     * will return the same value and not open the attribute again, unless updated
     * through one of the "uncached" functions.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or 0 if there is no such attribute.
     */
    get_sysfs_attr_as_int(name: string | null): number
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an integer
     * using strtol(). This function does blocking I/O, and updates the sysfs
     * attributes cache.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or 0 if there is no such attribute.
     */
    get_sysfs_attr_as_int_uncached(name: string | null): number
    /**
     * Look up the sysfs attribute with `name` on `device` and return the result of
     * splitting it into non-empty tokens split at white space (only space (' '),
     * form-feed ('\f'), newline ('\n'), carriage return ('\r'), horizontal
     * tab ('\t'), and vertical tab ('\v') are considered; the locale is
     * not taken into account).
     * 
     * The retrieved value is cached in the device. Repeated calls will return
     * the same value and not open the attribute again, unless updated through
     * one of the "uncached" functions.
     * @param name Name of the sysfs attribute.
     * @returns  The value of the sysfs attribute split into tokens or %NULL if there is no such attribute. This array is owned by @device and should not be freed by the caller.
     */
    get_sysfs_attr_as_strv(name: string | null): string[] | null
    /**
     * Look up the sysfs attribute with `name` on `device` and return the result of
     * splitting it into non-empty tokens split at white space (only space (' '),
     * form-feed ('\f'), newline ('\n'), carriage return ('\r'), horizontal
     * tab ('\t'), and vertical tab ('\v') are considered; the locale is
     * not taken into account).
     * 
     * This function does blocking I/O, and updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     * @returns  The value of the sysfs attribute split into tokens or %NULL if there is no such attribute. This array is owned by @device and should not be freed by the caller.
     */
    get_sysfs_attr_as_strv_uncached(name: string | null): string[] | null
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an unsigned
     * 64-bit integer using g_ascii_strtoull(). The retrieved value is cached in the
     * device. Repeated calls will return the same value and not open the attribute
     * again, unless updated through one of the "uncached" functions.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or 0 if there is no such attribute.
     */
    get_sysfs_attr_as_uint64(name: string | null): number
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an unsigned
     * 64-bit integer using g_ascii_strtoull(). This function does blocking I/O, and
     * updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or 0 if there is no such attribute.
     */
    get_sysfs_attr_as_uint64_uncached(name: string | null): number
    /**
     * Gets all keys for sysfs attributes on `device`.
     * @returns A %NULL terminated string array of sysfs attribute keys. This array is owned by @device and should not be freed by the caller.
     */
    get_sysfs_attr_keys(): string[]
    /**
     * Look up the sysfs attribute with `name` on `device`. This function does
     * blocking I/O, and updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     * @returns The value of the sysfs attribute or %NULL if there is no such attribute. Do not free this string, it is owned by @device.
     */
    get_sysfs_attr_uncached(name: string | null): string | null
    /**
     * Gets the sysfs path for `device`.
     * @returns The sysfs path for @device.
     */
    get_sysfs_path(): string | null
    /**
     * Gets all tags for `device`.
     * @returns A %NULL terminated string array of tags. This array is owned by @device and should not be freed by the caller.
     */
    get_tags(): string[]
    /**
     * Gets number of micro-seconds since `device` was initialized.
     * 
     * This only works for devices with properties in the udev
     * database. All other devices return 0.
     * @returns Number of micro-seconds since @device was initialized or 0 if unknown.
     */
    get_usec_since_initialized(): number
    /**
     * Check if a the property with the given key exists.
     * @param key Name of property.
     * @returns %TRUE only if the value for @key exist.
     */
    has_property(key: string | null): boolean
    /**
     * Check if a the sysfs attribute with the given key exists. The
     * retrieved value is cached in the device. Repeated calls will
     * return the same result and not check for the presence of the
     * attribute again, unless updated through one of the "uncached"
     * functions.
     * @param key Name of sysfs attribute.
     * @returns %TRUE only if the value for @key exist.
     */
    has_sysfs_attr(key: string | null): boolean
    /**
     * Check if a the sysfs attribute with the given key exists. The
     * retrieved value is cached in the device. Repeated calls will
     * return the same result and not check for the presence of the
     * attribute again, unless updated through one of the "uncached"
     * functions.
     * @param key Name of sysfs attribute.
     * @returns %TRUE only if the value for @key exist.
     */
    has_sysfs_attr_uncached(key: string | null): boolean

    // Class property signals of GUdev-1.0.GUdev.Device

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GUdevDevice class is used to get information about a specific
 * device. Note that you cannot instantiate a #GUdevDevice object
 * yourself. Instead you must use #GUdevClient to obtain #GUdevDevice
 * objects.
 * 
 * To get basic information about a device, use
 * g_udev_device_get_subsystem(), g_udev_device_get_devtype(),
 * g_udev_device_get_name(), g_udev_device_get_number(),
 * g_udev_device_get_sysfs_path(), g_udev_device_get_driver(),
 * g_udev_device_get_action(), g_udev_device_get_seqnum(),
 * g_udev_device_get_device_type(), g_udev_device_get_device_number(),
 * g_udev_device_get_device_file(),
 * g_udev_device_get_device_file_symlinks().
 * 
 * To navigate the device tree, use g_udev_device_get_parent() and
 * g_udev_device_get_parent_with_subsystem().
 * 
 * To access udev properties for the device, use
 * g_udev_device_get_property_keys(),
 * g_udev_device_has_property(),
 * g_udev_device_get_property(),
 * g_udev_device_get_property_as_int(),
 * g_udev_device_get_property_as_uint64(),
 * g_udev_device_get_property_as_double(),
 * g_udev_device_get_property_as_boolean() and
 * g_udev_device_get_property_as_strv().
 * 
 * To access sysfs attributes for the device, use
 * g_udev_device_get_sysfs_attr_keys(),
 * g_udev_device_has_sysfs_attr(),
 * g_udev_device_get_sysfs_attr(),
 * g_udev_device_get_sysfs_attr_as_int(),
 * g_udev_device_get_sysfs_attr_as_uint64(),
 * g_udev_device_get_sysfs_attr_as_double(),
 * g_udev_device_get_sysfs_attr_as_boolean() and
 * g_udev_device_get_sysfs_attr_as_strv().
 * 
 * Note that all getters on #GUdevDevice are non-reffing – returned
 * values are owned by the object, should not be freed and are only
 * valid as long as the object is alive.
 * 
 * By design, #GUdevDevice will not react to changes for a device – it
 * only contains a snapshot of information when the #GUdevDevice
 * object was created. To work with changes, you typically connect to
 * the #GUdevClient::uevent signal on a #GUdevClient and get a new
 * #GUdevDevice whenever an event happens.
 * @class 
 */
class Device extends GObject.Object {

    // Own properties of GUdev-1.0.GUdev.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUdev-1.0.GUdev.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
}

module Enumerator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUdev-1.0.GUdev.Enumerator

        /**
         * The #GUdevClient to enumerate devices from.
         */
        client?: Client | null
    }

}

interface Enumerator {

    // Own properties of GUdev-1.0.GUdev.Enumerator

    /**
     * The #GUdevClient to enumerate devices from.
     */
    readonly client: Client

    // Own fields of GUdev-1.0.GUdev.Enumerator

    parent: GObject.Object

    // Owm methods of GUdev-1.0.GUdev.Enumerator

    /**
     * All returned devices will be initialized.
     * @returns The passed in @enumerator.
     */
    add_match_is_initialized(): Enumerator
    /**
     * All returned devices will match the given `name`.
     * @param name Wildcard filter for kernel name e.g. "sda*".
     * @returns The passed in @enumerator.
     */
    add_match_name(name: string | null): Enumerator
    /**
     * All returned devices will have a property matching the given `name` and `value`.
     * @param name Wildcard filter for property name.
     * @param value Wildcard filter for property value.
     * @returns The passed in @enumerator.
     */
    add_match_property(name: string | null, value: string | null): Enumerator
    /**
     * All returned devices will match the given `subsystem`.
     * @param subsystem Wildcard for subsystem name e.g. 'scsi' or 'a*'.
     * @returns The passed in @enumerator.
     */
    add_match_subsystem(subsystem: string | null): Enumerator
    /**
     * All returned devices will have a sysfs attribute matching the given `name` and `value`.
     * @param name Wildcard filter for sysfs attribute key.
     * @param value Wildcard filter for sysfs attribute value.
     * @returns The passed in @enumerator.
     */
    add_match_sysfs_attr(name: string | null, value: string | null): Enumerator
    /**
     * All returned devices will match the given `tag`.
     * @param tag A udev tag e.g. "udev-acl".
     * @returns The passed in @enumerator.
     */
    add_match_tag(tag: string | null): Enumerator
    /**
     * All returned devices will not match the given `subsystem`.
     * @param subsystem Wildcard for subsystem name e.g. 'scsi' or 'a*'.
     * @returns The passed in @enumerator.
     */
    add_nomatch_subsystem(subsystem: string | null): Enumerator
    /**
     * All returned devices will not have a sysfs attribute matching the given `name` and `value`.
     * @param name Wildcard filter for sysfs attribute key.
     * @param value Wildcard filter for sysfs attribute value.
     * @returns The passed in @enumerator.
     */
    add_nomatch_sysfs_attr(name: string | null, value: string | null): Enumerator
    /**
     * Add a device to the list of devices, to retrieve it back sorted in dependency order.
     * @param sysfs_path A sysfs path, e.g. "/sys/devices/pci0000:00/0000:00:1f.2/host0/target0:0:0/0:0:0:0/block/sda"
     * @returns The passed in @enumerator.
     */
    add_sysfs_path(sysfs_path: string | null): Enumerator
    /**
     * Executes the query in `enumerator`.
     * @returns A list of #GUdevDevice objects. The caller should free the result by using g_object_unref() on each element in the list and then g_list_free() on the list.
     */
    execute(): Device[]

    // Class property signals of GUdev-1.0.GUdev.Enumerator

    connect(sigName: "notify::client", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GUdevEnumerator is used to lookup and sort devices.
 * @class 
 */
class Enumerator extends GObject.Object {

    // Own properties of GUdev-1.0.GUdev.Enumerator

    static name: string
    static $gtype: GObject.GType<Enumerator>

    // Constructors of GUdev-1.0.GUdev.Enumerator

    constructor(config?: Enumerator.ConstructorProperties) 
    /**
     * Constructs a #GUdevEnumerator object that can be used to enumerate
     * and sort devices. Use the add_match_*() and add_nomatch_*() methods
     * and execute the query to get a list of devices with
     * g_udev_enumerator_execute().
     * @constructor 
     * @param client A #GUdevClient to enumerate devices from.
     * @returns A new #GUdevEnumerator object. Free with g_object_unref().
     */
    constructor(client: Client) 
    /**
     * Constructs a #GUdevEnumerator object that can be used to enumerate
     * and sort devices. Use the add_match_*() and add_nomatch_*() methods
     * and execute the query to get a list of devices with
     * g_udev_enumerator_execute().
     * @constructor 
     * @param client A #GUdevClient to enumerate devices from.
     * @returns A new #GUdevEnumerator object. Free with g_object_unref().
     */
    static new(client: Client): Enumerator
    _init(config?: Enumerator.ConstructorProperties): void
}

interface ClientClass {

    // Own fields of GUdev-1.0.GUdev.ClientClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    uevent: (client: Client, action: string | null, device: Device) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
}

/**
 * Class structure for #GUdevClient.
 * @record 
 */
abstract class ClientClass {

    // Own properties of GUdev-1.0.GUdev.ClientClass

    static name: string
}

interface ClientPrivate {
}

class ClientPrivate {

    // Own properties of GUdev-1.0.GUdev.ClientPrivate

    static name: string
}

interface DeviceClass {

    // Own fields of GUdev-1.0.GUdev.DeviceClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
}

/**
 * Class structure for #GUdevDevice.
 * @record 
 */
abstract class DeviceClass {

    // Own properties of GUdev-1.0.GUdev.DeviceClass

    static name: string
}

interface DevicePrivate {
}

class DevicePrivate {

    // Own properties of GUdev-1.0.GUdev.DevicePrivate

    static name: string
}

interface EnumeratorClass {

    // Own fields of GUdev-1.0.GUdev.EnumeratorClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
}

/**
 * Class structure for #GUdevEnumerator.
 * @record 
 */
abstract class EnumeratorClass {

    // Own properties of GUdev-1.0.GUdev.EnumeratorClass

    static name: string
}

interface EnumeratorPrivate {
}

class EnumeratorPrivate {

    // Own properties of GUdev-1.0.GUdev.EnumeratorPrivate

    static name: string
}

    type DeviceNumber = number
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

export default GUdev;
// END