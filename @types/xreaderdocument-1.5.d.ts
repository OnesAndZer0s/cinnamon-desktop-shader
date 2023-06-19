
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './xreaderdocument-1.5-import.d.ts';
/**
 * XreaderDocument-1.5
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

export namespace XreaderDocument {

enum AnnotationTextIcon {
    NOTE,
    COMMENT,
    KEY,
    HELP,
    NEW_PARAGRAPH,
    PARAGRAPH,
    INSERT,
    CROSS,
    CIRCLE,
    UNKNOWN,
}
enum AnnotationTextMarkupType {
    HIGHLIGHT,
    STRIKE_OUT,
    UNDERLINE,
    SQUIGGLY,
}
enum AnnotationType {
    UNKNOWN,
    TEXT,
    ATTACHMENT,
    TEXT_MARKUP,
}
enum CompressionType {
    NONE,
    BZIP2,
    GZIP,
    LZMA,
}
enum DocumentError {
    INVALID,
    ENCRYPTED,
}
enum DocumentLayout {
    SINGLE_PAGE,
    ONE_COLUMN,
    TWO_COLUMN_LEFT,
    TWO_COLUMN_RIGHT,
    TWO_PAGE_LEFT,
    TWO_PAGE_RIGHT,
}
enum DocumentMode {
    NONE,
    USE_OC,
    USE_THUMBS,
    FULL_SCREEN,
    USE_ATTACHMENTS,
    PRESENTATION,
}
enum FileExporterFormat {
    UNKNOWN,
    PS,
    PDF,
}
enum FormFieldButtonType {
    PUSH,
    CHECK,
    RADIO,
}
enum FormFieldChoiceType {
    COMBO,
    LIST,
}
enum FormFieldTextType {
    NORMAL,
    MULTILINE,
    FILE_SELECT,
}
enum LinkActionType {
    GOTO_DEST,
    GOTO_REMOTE,
    EXTERNAL_URI,
    LAUNCH,
    NAMED,
    LAYERS_STATE,
}
enum LinkDestType {
    PAGE,
    XYZ,
    FIT,
    FITH,
    FITV,
    FITR,
    NAMED,
    PAGE_LABEL,
    HLINK,
    UNKNOWN,
}
enum SelectionStyle {
    GLYPH,
    WORD,
    LINE,
}
enum TransitionEffectAlignment {
    HORIZONTAL,
    VERTICAL,
}
enum TransitionEffectDirection {
    INWARD,
    OUTWARD,
}
enum TransitionEffectType {
    REPLACE,
    SPLIT,
    BLINDS,
    BOX,
    WIPE,
    DISSOLVE,
    GLITTER,
    FLY,
    PUSH,
    COVER,
    UNCOVER,
    FADE,
}
enum AnnotationsSaveMask {
    NONE,
    CONTENTS,
    COLOR,
    AREA,
    LABEL,
    OPACITY,
    POPUP_RECT,
    POPUP_IS_OPEN,
    TEXT_IS_OPEN,
    TEXT_ICON,
    ATTACHMENT,
    TEXT_MARKUP_TYPE,
    ALL,
}
enum DocumentInfoFields {
    TITLE,
    FORMAT,
    AUTHOR,
    SUBJECT,
    KEYWORDS,
    LAYOUT,
    CREATOR,
    PRODUCER,
    CREATION_DATE,
    MOD_DATE,
    LINEARIZED,
    START_MODE,
    UI_HINTS,
    PERMISSIONS,
    N_PAGES,
    SECURITY,
    PAPER_SIZE,
    LICENSE,
}
enum DocumentPermissions {
    OK_TO_PRINT,
    OK_TO_MODIFY,
    OK_TO_COPY,
    OK_TO_ADD_NOTES,
    FULL,
}
enum DocumentUIHints {
    HIDE_TOOLBAR,
    HIDE_MENUBAR,
    HIDE_WINDOWUI,
    FIT_WINDOW,
    CENTER_WINDOW,
    DISPLAY_DOC_TITLE,
    DIRECTION_RTL,
}
enum FileExporterCapabilities {
    PAGE_SET,
    COPIES,
    COLLATE,
    REVERSE,
    SCALE,
    GENERATE_PDF,
    GENERATE_PS,
    PREVIEW,
    NUMBER_UP,
}
/**
 * The major version number of the EV library
 * (e.g. in version 3.1.4 this is 3).
 */
const MAJOR_VERSION: number
/**
 * The micro version number of the EV library
 * (e.g. in version 3.1.4 this is 4).
 */
const MICRO_VERSION: number
/**
 * The minor version number of the EV library
 * (e.g. in version 3.1.4 this is 1).
 */
const MINOR_VERSION: number
function backends_manager_get_backends_dir(): string | null
function backends_manager_get_document_module_name(document: Document): string | null
function document_error_quark(): GLib.Quark
/**
 * Compresses the file at `uri`.
 *  
 * If `type` is %EV_COMPRESSION_NONE, it does nothing and returns %NULL.
 * 
 * Otherwise, it returns the filename of a
 * temporary file containing the compressed data from the file at `uri`.
 * 
 * On error it returns %NULL and fills in `error`.
 * 
 * It is the caller's responsibility to unlink the temp file after use.
 * @param uri a file URI
 * @param type the compression type
 * @returns a newly allocated string URI, or %NULL on error
 */
function file_compress(uri: string | null, type: CompressionType): string | null
/**
 * Note: on unknown MIME types, this may return NULL without `error`
 * being filled in.
 * @param uri the URI
 * @param fast whether to use fast MIME type detection
 * @returns a newly allocated string with the MIME type of the file at   @uri, or %NULL on error or if the MIME type could not be determined
 */
function file_get_mime_type(uri: string | null, fast: boolean): string | null
function file_is_temp(file: Gio.File): boolean
/**
 * Uncompresses the file at `uri`.
 * 
 * If `type` is %EV_COMPRESSION_NONE, it does nothing and returns %NULL.
 * 
 * Otherwise, it returns the filename of a
 * temporary file containing the decompressed data from the file at `uri`.
 * On error it returns %NULL and fills in `error`.
 * 
 * It is the caller's responsibility to unlink the temp file after use.
 * @param uri a file URI
 * @param type the compression type
 * @returns a newly allocated string URI, or %NULL on error
 */
function file_uncompress(uri: string | null, type: CompressionType): string | null
/**
 * Initializes the xreader document library, and binds the xreader
 * gettext domain.
 * 
 * You must call this before calling any other function in the xreader
 * document library.
 * @returns %TRUE if any backends were found; %FALSE otherwise
 */
function init(): boolean
/**
 * Creates a temp directory in the xreader temp directory.
 * @param template a template string; must end in 'XXXXXX'
 * @returns a newly allocated string with the temp directory name, or %NULL   on error with @error filled in
 */
function mkdtemp(template: string | null): string | null
/**
 * Creates a temp file in the xreader temp directory.
 * @param template a template string; must contain 'XXXXXX', but not necessarily as a suffix
 * @param file_name a location to store the filename of the temp file
 * @returns a file descriptor to the newly created temp file name, or %-1   on error with @error filled in
 */
function mkstemp(template: string | null, file_name: string | null): number
function rect_cmp(a: Rectangle, b: Rectangle): number
/**
 * Shuts the xreader document library down.
 */
function shutdown(): void
function tmp_file_unlink(file: Gio.File): void
function tmp_filename_unlink(filename: string | null): void
function tmp_uri_unlink(uri: string | null): void
/**
 * Performs a g_file_copy() from `from` to `to`.
 * @param from the source URI
 * @param to the target URI
 * @returns %TRUE on success, or %FALSE on error with @error filled in
 */
function xfer_uri_simple(from: string | null, to: string | null): boolean
module AnnotationMarkup {

    // Constructor properties interface

    interface ConstructorProperties extends Annotation.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.AnnotationMarkup

        can_have_popup?: boolean | null
        has_popup?: boolean | null
        label?: string | null
        opacity?: number | null
        popup_is_open?: boolean | null
        rectangle?: Rectangle | null
    }

}

interface AnnotationMarkup extends Annotation {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationMarkup

    can_have_popup: boolean
    has_popup: boolean
    label: string | null
    opacity: number
    popup_is_open: boolean
    rectangle: Rectangle

    // Owm methods of XreaderDocument-1.5.XreaderDocument.AnnotationMarkup

    get_label(): string | null
    get_opacity(): number
    get_popup_is_open(): boolean
    get_rectangle(ev_rect: Rectangle): void
    set_has_popup(has_popup: boolean): boolean
    set_label(label: string | null): boolean
    set_opacity(opacity: number): boolean
    set_popup_is_open(is_open: boolean): boolean
    set_rectangle(ev_rect: Rectangle): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.AnnotationMarkup

    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: "notify::area", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotationMarkup extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationMarkup

    static name: string
    static $gtype: GObject.GType<AnnotationMarkup>

    // Constructors of XreaderDocument-1.5.XreaderDocument.AnnotationMarkup

    constructor(config?: AnnotationMarkup.ConstructorProperties) 
    _init(config?: AnnotationMarkup.ConstructorProperties): void
}

module AsyncRenderer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `render-finished`
     */
    interface RenderFinishedSignalCallback {
        ($obj: AsyncRenderer, object: GdkPixbuf.Pixbuf): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AsyncRenderer {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.AsyncRenderer

    render_pixbuf(page: number, scale: number, rotation: number): void

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.AsyncRenderer

    vfunc_render_finished(pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_render_pixbuf(page: number, scale: number, rotation: number): void

    // Own signals of XreaderDocument-1.5.XreaderDocument.AsyncRenderer

    connect(sigName: "render-finished", callback: AsyncRenderer.RenderFinishedSignalCallback): number
    connect_after(sigName: "render-finished", callback: AsyncRenderer.RenderFinishedSignalCallback): number
    emit(sigName: "render-finished", object: GdkPixbuf.Pixbuf, ...args: any[]): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.AsyncRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AsyncRenderer extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AsyncRenderer

    static name: string
    static $gtype: GObject.GType<AsyncRenderer>

    // Constructors of XreaderDocument-1.5.XreaderDocument.AsyncRenderer

    constructor(config?: AsyncRenderer.ConstructorProperties) 
    _init(config?: AsyncRenderer.ConstructorProperties): void
}

module DocumentAnnotations {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentAnnotations {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentAnnotations

    add_annotation(annot: Annotation, rect: Rectangle): void
    can_add_annotation(): boolean
    can_remove_annotation(): boolean
    document_is_modified(): boolean
    remove_annotation(annot: Annotation): void
    save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentAnnotations

    vfunc_add_annotation(annot: Annotation, rect: Rectangle): void
    vfunc_document_is_modified(): boolean
    vfunc_remove_annotation(annot: Annotation): void
    vfunc_save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentAnnotations

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentAnnotations extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentAnnotations

    static name: string
    static $gtype: GObject.GType<DocumentAnnotations>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentAnnotations

    constructor(config?: DocumentAnnotations.ConstructorProperties) 
    _init(config?: DocumentAnnotations.ConstructorProperties): void
}

module DocumentAttachments {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentAttachments {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentAttachments

    has_attachments(): boolean

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentAttachments

    vfunc_has_attachments(): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentAttachments

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentAttachments extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentAttachments

    static name: string
    static $gtype: GObject.GType<DocumentAttachments>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentAttachments

    constructor(config?: DocumentAttachments.ConstructorProperties) 
    _init(config?: DocumentAttachments.ConstructorProperties): void
}

module DocumentFind {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentFind {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentFind

    check_for_hits(page: Page, text: string | null, case_sensitive: boolean): number

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentFind

    vfunc_check_for_hits(page: Page, text: string | null, case_sensitive: boolean): number

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentFind

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentFind extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentFind

    static name: string
    static $gtype: GObject.GType<DocumentFind>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentFind

    constructor(config?: DocumentFind.ConstructorProperties) 
    _init(config?: DocumentFind.ConstructorProperties): void
}

module DocumentFonts {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentFonts {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentFonts

    fill_model(model: Gtk.TreeModel): void
    get_progress(): number
    scan(n_pages: number): boolean

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentFonts

    vfunc_fill_model(model: Gtk.TreeModel): void
    vfunc_get_progress(): number
    vfunc_scan(n_pages: number): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentFonts

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentFonts extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentFonts

    static name: string
    static $gtype: GObject.GType<DocumentFonts>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentFonts

    constructor(config?: DocumentFonts.ConstructorProperties) 
    _init(config?: DocumentFonts.ConstructorProperties): void
}

module DocumentForms {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentForms {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentForms

    document_is_modified(): boolean
    form_field_button_get_state(field: FormField): boolean
    form_field_button_set_state(field: FormField, state: boolean): void
    form_field_choice_get_item(field: FormField, index: number): string | null
    form_field_choice_get_n_items(field: FormField): number
    form_field_choice_get_text(field: FormField): string | null
    form_field_choice_is_item_selected(field: FormField, index: number): boolean
    form_field_choice_select_item(field: FormField, index: number): void
    form_field_choice_set_text(field: FormField, text: string | null): void
    form_field_choice_toggle_item(field: FormField, index: number): void
    form_field_choice_unselect_all(field: FormField): void
    form_field_text_get_text(field: FormField): string | null
    form_field_text_set_text(field: FormField, text: string | null): void

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentForms

    vfunc_document_is_modified(): boolean
    vfunc_form_field_button_get_state(field: FormField): boolean
    vfunc_form_field_button_set_state(field: FormField, state: boolean): void
    vfunc_form_field_choice_get_item(field: FormField, index: number): string | null
    vfunc_form_field_choice_get_n_items(field: FormField): number
    vfunc_form_field_choice_get_text(field: FormField): string | null
    vfunc_form_field_choice_is_item_selected(field: FormField, index: number): boolean
    vfunc_form_field_choice_select_item(field: FormField, index: number): void
    vfunc_form_field_choice_set_text(field: FormField, text: string | null): void
    vfunc_form_field_choice_toggle_item(field: FormField, index: number): void
    vfunc_form_field_choice_unselect_all(field: FormField): void
    vfunc_form_field_text_get_text(field: FormField): string | null
    vfunc_form_field_text_set_text(field: FormField, text: string | null): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentForms

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentForms extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentForms

    static name: string
    static $gtype: GObject.GType<DocumentForms>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentForms

    constructor(config?: DocumentForms.ConstructorProperties) 
    _init(config?: DocumentForms.ConstructorProperties): void
}

module DocumentImages {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentImages {

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentImages

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentImages extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentImages

    static name: string
    static $gtype: GObject.GType<DocumentImages>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentImages

    constructor(config?: DocumentImages.ConstructorProperties) 
    _init(config?: DocumentImages.ConstructorProperties): void
}

module DocumentLayers {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentLayers {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentLayers

    has_layers(): boolean
    hide_layer(layer: Layer): void
    layer_is_visible(layer: Layer): boolean
    show_layer(layer: Layer): void

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentLayers

    vfunc_has_layers(): boolean
    vfunc_hide_layer(layer: Layer): void
    vfunc_layer_is_visible(layer: Layer): boolean
    vfunc_show_layer(layer: Layer): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentLayers

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentLayers extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentLayers

    static name: string
    static $gtype: GObject.GType<DocumentLayers>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentLayers

    constructor(config?: DocumentLayers.ConstructorProperties) 
    _init(config?: DocumentLayers.ConstructorProperties): void
}

module DocumentLinks {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentLinks {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentLinks

    find_link_page(link_name: string | null): number
    get_dest_page(dest: LinkDest): number
    get_dest_page_label(dest: LinkDest): string | null
    get_link_page(link: Link): number
    get_link_page_label(link: Link): string | null
    has_document_links(): boolean

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentLinks

    vfunc_find_link_page(link_name: string | null): number
    vfunc_has_document_links(): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentLinks

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentLinks extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentLinks

    static name: string
    static $gtype: GObject.GType<DocumentLinks>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentLinks

    constructor(config?: DocumentLinks.ConstructorProperties) 
    _init(config?: DocumentLinks.ConstructorProperties): void
}

module DocumentPrint {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentPrint {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentPrint

    print_page(page: Page, cr: cairo.Context): void

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentPrint

    vfunc_print_page(page: Page, cr: cairo.Context): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentPrint

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentPrint extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentPrint

    static name: string
    static $gtype: GObject.GType<DocumentPrint>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentPrint

    constructor(config?: DocumentPrint.ConstructorProperties) 
    _init(config?: DocumentPrint.ConstructorProperties): void
}

module DocumentSecurity {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentSecurity {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentSecurity

    has_document_security(): boolean
    set_password(password: string | null): void

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentSecurity

    vfunc_has_document_security(): boolean
    vfunc_set_password(password: string | null): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentSecurity

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentSecurity extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentSecurity

    static name: string
    static $gtype: GObject.GType<DocumentSecurity>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentSecurity

    constructor(config?: DocumentSecurity.ConstructorProperties) 
    _init(config?: DocumentSecurity.ConstructorProperties): void
}

module DocumentText {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentText {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentText

    get_text(page: Page): string | null
    get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean
    get_text_mapping(page: Page): cairo.Region

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentText

    vfunc_get_text(page: Page): string | null
    vfunc_get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean
    vfunc_get_text_mapping(page: Page): cairo.Region

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentText

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentText extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentText

    static name: string
    static $gtype: GObject.GType<DocumentText>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentText

    constructor(config?: DocumentText.ConstructorProperties) 
    _init(config?: DocumentText.ConstructorProperties): void
}

module DocumentThumbnails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentThumbnails {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentThumbnails

    get_dimensions(rc: RenderContext, width: number, height: number): void

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentThumbnails

    vfunc_get_dimensions(rc: RenderContext, width: number, height: number): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentThumbnails

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentThumbnails extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentThumbnails

    static name: string
    static $gtype: GObject.GType<DocumentThumbnails>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentThumbnails

    constructor(config?: DocumentThumbnails.ConstructorProperties) 
    _init(config?: DocumentThumbnails.ConstructorProperties): void
}

module DocumentTransition {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DocumentTransition {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentTransition

    get_page_duration(page: number): number

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.DocumentTransition

    vfunc_get_page_duration(page: number): number

    // Class property signals of XreaderDocument-1.5.XreaderDocument.DocumentTransition

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentTransition extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentTransition

    static name: string
    static $gtype: GObject.GType<DocumentTransition>

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentTransition

    constructor(config?: DocumentTransition.ConstructorProperties) 
    _init(config?: DocumentTransition.ConstructorProperties): void
}

module FileExporter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FileExporter {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.FileExporter

    begin(fc: FileExporterContext): void
    begin_page(): void
    do_page(rc: RenderContext): void
    end(): void
    end_page(): void
    get_capabilities(): FileExporterCapabilities

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.FileExporter

    vfunc_begin(fc: FileExporterContext): void
    vfunc_begin_page(): void
    vfunc_do_page(rc: RenderContext): void
    vfunc_end(): void
    vfunc_end_page(): void
    vfunc_get_capabilities(): FileExporterCapabilities

    // Class property signals of XreaderDocument-1.5.XreaderDocument.FileExporter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileExporter extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FileExporter

    static name: string
    static $gtype: GObject.GType<FileExporter>

    // Constructors of XreaderDocument-1.5.XreaderDocument.FileExporter

    constructor(config?: FileExporter.ConstructorProperties) 
    _init(config?: FileExporter.ConstructorProperties): void
}

module Selection {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Selection {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.Selection

    get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string | null
    get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    render_selection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.Selection

    vfunc_get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string | null
    vfunc_get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    vfunc_render_selection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.Selection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Selection extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Selection

    static name: string
    static $gtype: GObject.GType<Selection>

    // Constructors of XreaderDocument-1.5.XreaderDocument.Selection

    constructor(config?: Selection.ConstructorProperties) 
    _init(config?: Selection.ConstructorProperties): void
}

module Annotation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.Annotation

        /**
         * The area of the page where the annotation is placed.
         * 
         * Since 2.0.2
         */
        area?: Rectangle | null
        /**
         * The colour of the annotation as a #GdkColor.
         */
        color?: any | null
        contents?: string | null
        modified?: string | null
        name?: string | null
        page?: Page | null
        /**
         * The colour of the annotation as a #GdkRGBA.
         */
        rgba?: Gdk.RGBA | null
    }

}

interface Annotation {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Annotation

    /**
     * The area of the page where the annotation is placed.
     * 
     * Since 2.0.2
     */
    area: Rectangle
    /**
     * The colour of the annotation as a #GdkColor.
     */
    color: any
    contents: string | null
    modified: string | null
    name: string | null
    readonly page: Page
    /**
     * The colour of the annotation as a #GdkRGBA.
     */
    rgba: Gdk.RGBA

    // Owm methods of XreaderDocument-1.5.XreaderDocument.Annotation

    /**
     * Compare `annot` and `other`.
     * @param other another #EvAnnotation
     * @returns %TRUE if @annot is equal to @other, %FALSE otherwise
     */
    equal(other: Annotation): boolean
    get_annotation_type(): AnnotationType
    get_area(area: Rectangle): void
    /**
     * Get the color of `annot`.
     */
    get_color(): /* color */ Gdk.Color
    /**
     * Get the contents of `annot`. The contents of
     * `annot` is the text that is displayed in the annotation, or an
     * alternate description of the annotation's content for non-text annotations
     * @returns a string with the contents of the annotation or %NULL if @annot has no contents.
     */
    get_contents(): string | null
    /**
     * Get the last modification date of `annot`.
     * @returns A string containing the last modification date.
     */
    get_modified(): string | null
    /**
     * Get the name of `annot`. The name of the annotation is a string
     * that uniquely indenftifies `annot` amongs all the annotations
     * in the same page.
     * @returns the string with the annotation's name.
     */
    get_name(): string | null
    /**
     * Get the page where `annot` appears.
     * @returns the #EvPage where @annot appears
     */
    get_page(): Page
    /**
     * Get the index of the page where `annot` appears. Note that the index
     * is 0 based.
     * @returns the page index.
     */
    get_page_index(): number
    /**
     * Gets the color of `annot`.
     */
    get_rgba(): /* rgba */ Gdk.RGBA
    /**
     * Set the area of the annotation to `area`.
     * @param area a #EvRectangle
     * @returns %TRUE if the area has been changed, %FALSE otherwise
     */
    set_area(area: Rectangle): boolean
    /**
     * Set the color of the annotation to `color`. You can monitor
     * changes to the annotation's color by connecting to
     * notify::color signal on `annot`.
     * @param color a #GdkColor
     * @returns %TRUE  when the color has been changed, %FALSE otherwise.
     */
    set_color(color: Gdk.Color): boolean
    /**
     * Set the contents of `annot`. You can monitor
     * changes in the annotation's  contents by connecting to
     * notify::contents signal of `annot`.
     * @param contents 
     * @returns %TRUE if the contents have been changed, %FALSE otherwise.
     */
    set_contents(contents: string | null): boolean
    /**
     * Set the last modification date of `annot` to `modified`. To
     * set the last modification date using a #GTime, use
     * ev_annotation_set_modified_from_time() instead. You can monitor
     * changes to the last modification date by connecting to the
     * notify::modified signal on `annot`.
     * @param modified string with the last modification date.
     * @returns %TRUE if the last modification date has been updated, %FALSE otherwise.
     */
    set_modified(modified: string | null): boolean
    /**
     * Set the last modification date of `annot` to `utime`.  You can
     * monitor changes to the last modification date by connectin to the
     * notify::modified sinal on `annot`.
     * For the time-format used, see ev_document_misc_format_date().
     * @param utime a #GTime
     * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
     */
    set_modified_from_time(utime: GLib.Time): boolean
    /**
     * Set the name of `annot`.
     * You can monitor changes of the annotation name by connecting
     * to the notify::name signal on `annot`.
     * @param name 
     * @returns %TRUE when the name has been changed, %FALSE otherwise.
     */
    set_name(name: string | null): boolean
    /**
     * Set the color of the annotation to `rgba`.
     * @param rgba a #GdkRGBA
     * @returns %TRUE if the color has been changed, %FALSE otherwise
     */
    set_rgba(rgba: Gdk.RGBA): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.Annotation

    connect(sigName: "notify::area", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Annotation extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Annotation

    static name: string
    static $gtype: GObject.GType<Annotation>

    // Constructors of XreaderDocument-1.5.XreaderDocument.Annotation

    constructor(config?: Annotation.ConstructorProperties) 
    _init(config?: Annotation.ConstructorProperties): void
}

module AnnotationAttachment {

    // Constructor properties interface

    interface ConstructorProperties extends AnnotationMarkup.ConstructorProperties, Annotation.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.AnnotationAttachment

        attachment?: Attachment | null
    }

}

interface AnnotationAttachment extends AnnotationMarkup {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationAttachment

    attachment: Attachment

    // Owm methods of XreaderDocument-1.5.XreaderDocument.AnnotationAttachment

    get_attachment(): Attachment
    set_attachment(attachment: Attachment): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.AnnotationAttachment

    connect(sigName: "notify::attachment", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attachment", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attachment", ...args: any[]): void
    connect(sigName: "notify::area", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotationAttachment extends Annotation {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationAttachment

    static name: string
    static $gtype: GObject.GType<AnnotationAttachment>

    // Constructors of XreaderDocument-1.5.XreaderDocument.AnnotationAttachment

    constructor(config?: AnnotationAttachment.ConstructorProperties) 
    constructor(page: Page, attachment: Attachment) 
    static new(page: Page, attachment: Attachment): AnnotationAttachment
    _init(config?: AnnotationAttachment.ConstructorProperties): void
}

module AnnotationText {

    // Constructor properties interface

    interface ConstructorProperties extends AnnotationMarkup.ConstructorProperties, Annotation.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.AnnotationText

        icon?: AnnotationTextIcon | null
        is_open?: boolean | null
    }

}

interface AnnotationText extends AnnotationMarkup {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationText

    icon: AnnotationTextIcon
    is_open: boolean

    // Owm methods of XreaderDocument-1.5.XreaderDocument.AnnotationText

    get_icon(): AnnotationTextIcon
    get_is_open(): boolean
    set_icon(icon: AnnotationTextIcon): boolean
    set_is_open(is_open: boolean): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.AnnotationText

    connect(sigName: "notify::icon", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-open", ...args: any[]): void
    connect(sigName: "notify::area", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotationText extends Annotation {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationText

    static name: string
    static $gtype: GObject.GType<AnnotationText>

    // Constructors of XreaderDocument-1.5.XreaderDocument.AnnotationText

    constructor(config?: AnnotationText.ConstructorProperties) 
    constructor(page: Page) 
    static new(page: Page): AnnotationText
    _init(config?: AnnotationText.ConstructorProperties): void
}

module AnnotationTextMarkup {

    // Constructor properties interface

    interface ConstructorProperties extends AnnotationMarkup.ConstructorProperties, Annotation.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.AnnotationTextMarkup

        type?: AnnotationTextMarkupType | null
    }

}

interface AnnotationTextMarkup extends AnnotationMarkup {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationTextMarkup

    type: AnnotationTextMarkupType

    // Owm methods of XreaderDocument-1.5.XreaderDocument.AnnotationTextMarkup

    get_markup_type(): AnnotationTextMarkupType
    set_markup_type(markup_type: AnnotationTextMarkupType): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.AnnotationTextMarkup

    connect(sigName: "notify::type", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::area", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotationTextMarkup extends Annotation {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationTextMarkup

    static name: string
    static $gtype: GObject.GType<AnnotationTextMarkup>

    // Constructors of XreaderDocument-1.5.XreaderDocument.AnnotationTextMarkup

    constructor(config?: AnnotationTextMarkup.ConstructorProperties) 
    static highlight_new(page: Page): AnnotationTextMarkup
    static squiggly_new(page: Page): AnnotationTextMarkup
    static strike_out_new(page: Page): AnnotationTextMarkup
    static underline_new(page: Page): AnnotationTextMarkup
    _init(config?: AnnotationTextMarkup.ConstructorProperties): void
}

module Attachment {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.Attachment

        ctime?: number | null
        data?: any | null
        description?: string | null
        mtime?: number | null
        name?: string | null
        size?: number | null
    }

}

interface Attachment {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Attachment

    readonly ctime: number
    readonly data: any
    readonly description: string | null
    readonly mtime: number
    readonly name: string | null
    readonly size: number

    // Own fields of XreaderDocument-1.5.XreaderDocument.Attachment

    base_instance: GObject.Object
    priv: AttachmentPrivate

    // Owm methods of XreaderDocument-1.5.XreaderDocument.Attachment

    get_creation_date(): GLib.Time
    get_description(): string | null
    get_mime_type(): string | null
    get_modification_date(): GLib.Time
    get_name(): string | null
    open(screen: Gdk.Screen, timestamp: number): boolean
    save(file: Gio.File): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.Attachment

    connect(sigName: "notify::ctime", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ctime", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ctime", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::mtime", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mtime", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Attachment extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Attachment

    static name: string
    static $gtype: GObject.GType<Attachment>

    // Constructors of XreaderDocument-1.5.XreaderDocument.Attachment

    constructor(config?: Attachment.ConstructorProperties) 
    constructor(name: string | null, description: string | null, mtime: GLib.Time, ctime: GLib.Time, size: number, data: any | null) 
    static new(name: string | null, description: string | null, mtime: GLib.Time, ctime: GLib.Time, size: number, data: any | null): Attachment
    _init(config?: Attachment.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

module Document {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Document {

    // Own fields of XreaderDocument-1.5.XreaderDocument.Document

    base: GObject.Object
    priv: DocumentPrivate
    iswebdocument: boolean

    // Owm methods of XreaderDocument-1.5.XreaderDocument.Document

    check_add_night_sheet(): void
    check_dimensions(): boolean
    find_page_by_label(page_label: string | null, page_index: number): boolean
    get_backend_info(info: DocumentBackendInfo): boolean
    get_info(): DocumentInfo
    get_max_label_len(): number
    get_max_page_size(width: number, height: number): void
    get_min_page_size(width: number, height: number): void
    get_modified(): boolean
    get_n_pages(): number
    get_page_label(page_index: number): string | null
    get_page_size(page_index: number, width: number, height: number): void
    get_title(): string | null
    get_uri(): string | null
    has_synctex(): boolean
    has_text_page_labels(): boolean
    is_page_size_uniform(): boolean
    /**
     * Loads `document` from `uri`.
     * 
     * On failure, %FALSE is returned and `error` is filled in.
     * If the document is encrypted, EV_DEFINE_ERROR_ENCRYPTED is returned.
     * If the backend cannot load the specific document, EV_DOCUMENT_ERROR_INVALID
     * is returned. Other errors are possible too, depending on the backend
     * used to load the document and the URI, e.g. #GIOError, #GFileError, and
     * #GConvertError.
     * @param uri the document's URI
     * @returns %TRUE on success, or %FALSE on failure.
     */
    load(uri: string | null): boolean
    render(rc: RenderContext): cairo.Surface
    /**
     * Saves `document` to `uri`.
     * @param uri the target URI
     * @returns %TRUE on success, or %FALSE on error with @error filled in
     */
    save(uri: string | null): boolean
    set_modified(modified: boolean): void
    /**
     * Peforms a Synctex backward search to obtain the TeX input file, line and
     * (possibly) column  corresponding to the  position (`x,``y)` (in 72dpi
     * coordinates) in the  `page` of `document`.
     * @param page_index 
     * @param x 
     * @param y 
     * @returns A pointer to the EvSourceLink structure that holds the result. @NULL if synctex is not enabled for the document or no result is found. The EvSourceLink pointer should be freed with g_free after it is used.
     */
    synctex_backward_search(page_index: number, x: number, y: number): SourceLink
    toggle_night_mode(night: boolean): void

    // Own virtual methods of XreaderDocument-1.5.XreaderDocument.Document

    vfunc_check_add_night_sheet(): void
    vfunc_get_backend_info(info: DocumentBackendInfo): boolean
    vfunc_get_info(): DocumentInfo
    vfunc_get_n_pages(): number
    vfunc_get_page_label(page: Page): string | null
    vfunc_get_page_size(page: Page, width: number, height: number): void
    /**
     * Loads `document` from `uri`.
     * 
     * On failure, %FALSE is returned and `error` is filled in.
     * If the document is encrypted, EV_DEFINE_ERROR_ENCRYPTED is returned.
     * If the backend cannot load the specific document, EV_DOCUMENT_ERROR_INVALID
     * is returned. Other errors are possible too, depending on the backend
     * used to load the document and the URI, e.g. #GIOError, #GFileError, and
     * #GConvertError.
     * @virtual 
     * @param uri the document's URI
     * @returns %TRUE on success, or %FALSE on failure.
     */
    vfunc_load(uri: string | null): boolean
    vfunc_render(rc: RenderContext): cairo.Surface
    /**
     * Saves `document` to `uri`.
     * @virtual 
     * @param uri the target URI
     * @returns %TRUE on success, or %FALSE on error with @error filled in
     */
    vfunc_save(uri: string | null): boolean
    vfunc_support_synctex(): boolean
    vfunc_toggle_night_mode(night: boolean): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.Document

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Document extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of XreaderDocument-1.5.XreaderDocument.Document

    constructor(config?: Document.ConstructorProperties) 
    _init(config?: Document.ConstructorProperties): void
    static doc_mutex_lock(): void
    static doc_mutex_trylock(): boolean
    static doc_mutex_unlock(): void
    /**
     * Adds some file filters to `chooser`.
     *  
     * Always add a "All documents" format.
     * 
     * If `document` is not %NULL, adds a #GtkFileFilter for `document'`s MIME type.
     * 
     * If `document` is %NULL, adds a #GtkFileFilter for each document type that xreader
     * can handle.
     * @param chooser a #GtkFileChooser
     * @param document a #EvDocument, or %NULL
     */
    static factory_add_filters(chooser: Gtk.Widget, document: Document): void
    /**
     * Creates a #EvDocument for the document at `uri;` or, if no backend handling
     * the document's type is found, or an error occurred on opening the document,
     * returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * @param uri an URI
     * @returns a new #EvDocument, or %NULL.
     */
    static factory_get_document(uri: string | null): Document
    static fc_mutex_lock(): void
    static fc_mutex_trylock(): boolean
    static fc_mutex_unlock(): void
    static misc_format_date(utime: GLib.Time): string | null
    static misc_get_page_border_size(page_width: number, page_height: number, border: Gtk.Border): void
    static misc_get_pointer_position(widget: Gtk.Widget, x: number, y: number): void
    static misc_get_screen_dpi(screen: Gdk.Screen, monitor: Gdk.Monitor): number
    static misc_get_screen_dpi_at_window(window: Gtk.Window): number
    static misc_invert_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    static misc_invert_surface(surface: cairo.Surface): void
    static misc_paint_one_page(cr: cairo.Context, widget: Gtk.Widget, area: Gdk.Rectangle, border: Gtk.Border, highlight: boolean, inverted_colors: boolean): void
    static misc_surface_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface
    static misc_surface_rotate_and_scale(surface: cairo.Surface, dest_width: number, dest_height: number, dest_rotation: number): cairo.Surface
}

module FormField {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FormField {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormField

    parent: GObject.Object
    id: number
    is_read_only: boolean
    font_size: number
    page: Page
    changed: boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.FormField

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormField extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormField

    static name: string
    static $gtype: GObject.GType<FormField>

    // Constructors of XreaderDocument-1.5.XreaderDocument.FormField

    constructor(config?: FormField.ConstructorProperties) 
    _init(config?: FormField.ConstructorProperties): void
}

module FormFieldButton {

    // Constructor properties interface

    interface ConstructorProperties extends FormField.ConstructorProperties {
    }

}

interface FormFieldButton {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormFieldButton

    partent: FormField
    type: FormFieldButtonType
    state: boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.FormFieldButton

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormFieldButton extends FormField {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormFieldButton

    static name: string
    static $gtype: GObject.GType<FormFieldButton>

    // Constructors of XreaderDocument-1.5.XreaderDocument.FormFieldButton

    constructor(config?: FormFieldButton.ConstructorProperties) 
    constructor(id: number, type: FormFieldButtonType) 
    static new(id: number, type: FormFieldButtonType): FormFieldButton
    _init(config?: FormFieldButton.ConstructorProperties): void
}

module FormFieldChoice {

    // Constructor properties interface

    interface ConstructorProperties extends FormField.ConstructorProperties {
    }

}

interface FormFieldChoice {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormFieldChoice

    partent: FormField
    type: FormFieldChoiceType
    multi_select: boolean
    is_editable: boolean
    do_spell_check: boolean
    commit_on_sel_change: boolean
    selected_items: any[]
    text: string | null

    // Class property signals of XreaderDocument-1.5.XreaderDocument.FormFieldChoice

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormFieldChoice extends FormField {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormFieldChoice

    static name: string
    static $gtype: GObject.GType<FormFieldChoice>

    // Constructors of XreaderDocument-1.5.XreaderDocument.FormFieldChoice

    constructor(config?: FormFieldChoice.ConstructorProperties) 
    constructor(id: number, type: FormFieldChoiceType) 
    static new(id: number, type: FormFieldChoiceType): FormFieldChoice
    _init(config?: FormFieldChoice.ConstructorProperties): void
}

module FormFieldSignature {

    // Constructor properties interface

    interface ConstructorProperties extends FormField.ConstructorProperties {
    }

}

interface FormFieldSignature {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormFieldSignature

    partent: FormField

    // Class property signals of XreaderDocument-1.5.XreaderDocument.FormFieldSignature

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormFieldSignature extends FormField {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormFieldSignature

    static name: string
    static $gtype: GObject.GType<FormFieldSignature>

    // Constructors of XreaderDocument-1.5.XreaderDocument.FormFieldSignature

    constructor(config?: FormFieldSignature.ConstructorProperties) 
    constructor(id: number) 
    static new(id: number): FormFieldSignature
    _init(config?: FormFieldSignature.ConstructorProperties): void
}

module FormFieldText {

    // Constructor properties interface

    interface ConstructorProperties extends FormField.ConstructorProperties {
    }

}

interface FormFieldText {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormFieldText

    partent: FormField
    type: FormFieldTextType
    do_spell_check: boolean
    do_scroll: boolean
    comb: boolean
    is_rich_text: boolean
    is_password: boolean
    max_len: number
    text: string | null

    // Class property signals of XreaderDocument-1.5.XreaderDocument.FormFieldText

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormFieldText extends FormField {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormFieldText

    static name: string
    static $gtype: GObject.GType<FormFieldText>

    // Constructors of XreaderDocument-1.5.XreaderDocument.FormFieldText

    constructor(config?: FormFieldText.ConstructorProperties) 
    constructor(id: number, type: FormFieldTextType) 
    static new(id: number, type: FormFieldTextType): FormFieldText
    _init(config?: FormFieldText.ConstructorProperties): void
}

module Image {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Image {

    // Own fields of XreaderDocument-1.5.XreaderDocument.Image

    base_instance: GObject.Object
    priv: ImagePrivate

    // Owm methods of XreaderDocument-1.5.XreaderDocument.Image

    get_id(): number
    get_page(): number
    get_tmp_uri(): string | null
    save_tmp(pixbuf: GdkPixbuf.Pixbuf): string | null

    // Class property signals of XreaderDocument-1.5.XreaderDocument.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Image extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of XreaderDocument-1.5.XreaderDocument.Image

    constructor(config?: Image.ConstructorProperties) 
    constructor(page: number, img_id: number) 
    static new(page: number, img_id: number): Image
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image
    _init(config?: Image.ConstructorProperties): void
}

module Layer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Layer {

    // Own fields of XreaderDocument-1.5.XreaderDocument.Layer

    base_instance: GObject.Object
    priv: LayerPrivate

    // Owm methods of XreaderDocument-1.5.XreaderDocument.Layer

    get_rb_group(): number
    is_parent(): boolean

    // Class property signals of XreaderDocument-1.5.XreaderDocument.Layer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Layer extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Layer

    static name: string
    static $gtype: GObject.GType<Layer>

    // Constructors of XreaderDocument-1.5.XreaderDocument.Layer

    constructor(config?: Layer.ConstructorProperties) 
    constructor(is_parent: boolean, rb_group: number) 
    static new(is_parent: boolean, rb_group: number): Layer
    _init(config?: Layer.ConstructorProperties): void
}

module Link {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.Link

        action?: LinkAction | null
        title?: string | null
    }

}

interface Link {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Link

    readonly action: LinkAction
    readonly title: string | null

    // Owm methods of XreaderDocument-1.5.XreaderDocument.Link

    get_title(): string | null

    // Class property signals of XreaderDocument-1.5.XreaderDocument.Link

    connect(sigName: "notify::action", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Link extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Link

    static name: string
    static $gtype: GObject.GType<Link>

    // Constructors of XreaderDocument-1.5.XreaderDocument.Link

    constructor(config?: Link.ConstructorProperties) 
    constructor(title: string | null, action: LinkAction) 
    static new(title: string | null, action: LinkAction): Link
    _init(config?: Link.ConstructorProperties): void
}

module LinkAction {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.LinkAction

        dest?: LinkDest | null
        filename?: string | null
        hide_list?: any | null
        name?: string | null
        params?: string | null
        show_list?: any | null
        toggle_list?: any | null
        type?: LinkActionType | null
        uri?: string | null
    }

}

interface LinkAction {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkAction

    readonly dest: LinkDest
    readonly filename: string | null
    readonly hide_list: any
    readonly name: string | null
    readonly params: string | null
    readonly show_list: any
    readonly toggle_list: any
    readonly type: LinkActionType
    readonly uri: string | null

    // Owm methods of XreaderDocument-1.5.XreaderDocument.LinkAction

    equal(b: LinkAction): boolean
    get_action_type(): LinkActionType
    get_filename(): string | null
    get_name(): string | null
    get_params(): string | null
    get_uri(): string | null

    // Class property signals of XreaderDocument-1.5.XreaderDocument.LinkAction

    connect(sigName: "notify::dest", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dest", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dest", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::hide-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-list", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::params", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::params", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::params", ...args: any[]): void
    connect(sigName: "notify::show-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-list", ...args: any[]): void
    connect(sigName: "notify::toggle-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toggle-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::toggle-list", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LinkAction extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkAction

    static name: string
    static $gtype: GObject.GType<LinkAction>

    // Constructors of XreaderDocument-1.5.XreaderDocument.LinkAction

    constructor(config?: LinkAction.ConstructorProperties) 
    static new_dest(dest: LinkDest): LinkAction
    static new_external_uri(uri: string | null): LinkAction
    static new_launch(filename: string | null, params: string | null): LinkAction
    static new_named(name: string | null): LinkAction
    static new_remote(dest: LinkDest, filename: string | null): LinkAction
    _init(config?: LinkAction.ConstructorProperties): void
}

module LinkDest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.LinkDest

        bottom?: number | null
        change?: number | null
        left?: number | null
        named?: string | null
        page?: number | null
        page_label?: string | null
        right?: number | null
        top?: number | null
        type?: LinkDestType | null
        zoom?: number | null
    }

}

interface LinkDest {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkDest

    readonly bottom: number
    readonly change: number
    readonly left: number
    readonly named: string | null
    readonly page: number
    readonly page_label: string | null
    readonly right: number
    readonly top: number
    readonly type: LinkDestType
    readonly zoom: number

    // Owm methods of XreaderDocument-1.5.XreaderDocument.LinkDest

    equal(b: LinkDest): boolean
    get_bottom(): number
    get_dest_type(): LinkDestType
    get_left(change_left: boolean): number
    get_named_dest(): string | null
    get_page(): number
    get_page_label(): string | null
    get_right(): number
    get_top(change_top: boolean): number
    get_zoom(change_zoom: boolean): number

    // Class property signals of XreaderDocument-1.5.XreaderDocument.LinkDest

    connect(sigName: "notify::bottom", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom", ...args: any[]): void
    connect(sigName: "notify::change", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::change", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::change", ...args: any[]): void
    connect(sigName: "notify::left", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left", ...args: any[]): void
    connect(sigName: "notify::named", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::named", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::named", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::page-label", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-label", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-label", ...args: any[]): void
    connect(sigName: "notify::right", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right", ...args: any[]): void
    connect(sigName: "notify::top", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::zoom", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LinkDest extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkDest

    static name: string
    static $gtype: GObject.GType<LinkDest>

    // Constructors of XreaderDocument-1.5.XreaderDocument.LinkDest

    constructor(config?: LinkDest.ConstructorProperties) 
    static new_fit(page: number): LinkDest
    static new_fith(page: number, top: number, change_top: boolean): LinkDest
    static new_fitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest
    static new_fitv(page: number, left: number, change_left: boolean): LinkDest
    static new_hlink(hlink: string | null, page: number): LinkDest
    static new_named(named_dest: string | null): LinkDest
    static new_page(page: number): LinkDest
    static new_page_label(page_label: string | null): LinkDest
    static new_xyz(page: number, left: number, top: number, zoom: number, change_left: boolean, change_top: boolean, change_zoom: boolean): LinkDest
    _init(config?: LinkDest.ConstructorProperties): void
}

module Page {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Page {

    // Own fields of XreaderDocument-1.5.XreaderDocument.Page

    base_instance: GObject.Object
    index: number
    backend_page: BackendPage
    backend_destroy_func: BackendPageDestroyFunc

    // Class property signals of XreaderDocument-1.5.XreaderDocument.Page

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Page extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Page

    static name: string
    static $gtype: GObject.GType<Page>

    // Constructors of XreaderDocument-1.5.XreaderDocument.Page

    constructor(config?: Page.ConstructorProperties) 
    constructor(index: number) 
    static new(index: number): Page
    _init(config?: Page.ConstructorProperties): void
}

module RenderContext {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RenderContext {

    // Own fields of XreaderDocument-1.5.XreaderDocument.RenderContext

    parent: GObject.Object
    page: Page
    rotation: number
    scale: number

    // Owm methods of XreaderDocument-1.5.XreaderDocument.RenderContext

    set_page(page: Page): void
    set_rotation(rotation: number): void
    set_scale(scale: number): void

    // Class property signals of XreaderDocument-1.5.XreaderDocument.RenderContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RenderContext extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.RenderContext

    static name: string
    static $gtype: GObject.GType<RenderContext>

    // Constructors of XreaderDocument-1.5.XreaderDocument.RenderContext

    constructor(config?: RenderContext.ConstructorProperties) 
    constructor(page: Page, rotation: number, scale: number) 
    static new(page: Page, rotation: number, scale: number): RenderContext
    _init(config?: RenderContext.ConstructorProperties): void
}

module TransitionEffect {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of XreaderDocument-1.5.XreaderDocument.TransitionEffect

        alignment?: TransitionEffectAlignment | null
        angle?: number | null
        direction?: TransitionEffectDirection | null
        duration?: number | null
        rectangular?: boolean | null
        scale?: number | null
        type?: TransitionEffectType | null
    }

}

interface TransitionEffect {

    // Own properties of XreaderDocument-1.5.XreaderDocument.TransitionEffect

    alignment: TransitionEffectAlignment
    angle: number
    direction: TransitionEffectDirection
    duration: number
    rectangular: boolean
    scale: number
    type: TransitionEffectType

    // Own fields of XreaderDocument-1.5.XreaderDocument.TransitionEffect

    parent_instance: GObject.Object

    // Class property signals of XreaderDocument-1.5.XreaderDocument.TransitionEffect

    connect(sigName: "notify::alignment", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::angle", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::angle", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::angle", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::rectangular", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangular", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangular", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TransitionEffect extends GObject.Object {

    // Own properties of XreaderDocument-1.5.XreaderDocument.TransitionEffect

    static name: string
    static $gtype: GObject.GType<TransitionEffect>

    // Constructors of XreaderDocument-1.5.XreaderDocument.TransitionEffect

    constructor(config?: TransitionEffect.ConstructorProperties) 
    _init(config?: TransitionEffect.ConstructorProperties): void
}

interface AnnotationAttachmentClass {
}

abstract class AnnotationAttachmentClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationAttachmentClass

    static name: string
}

interface AnnotationClass {
}

abstract class AnnotationClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationClass

    static name: string
}

interface AnnotationMarkupInterface {
}

abstract class AnnotationMarkupInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationMarkupInterface

    static name: string
}

interface AnnotationTextClass {
}

abstract class AnnotationTextClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationTextClass

    static name: string
}

interface AnnotationTextMarkupClass {
}

abstract class AnnotationTextMarkupClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AnnotationTextMarkupClass

    static name: string
}

interface AsyncRendererInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.AsyncRendererInterface

    base_iface: GObject.TypeInterface
    render_finished: (renderer: AsyncRenderer, pixbuf: GdkPixbuf.Pixbuf) => void
    render_pixbuf: (renderer: AsyncRenderer, page: number, scale: number, rotation: number) => void
}

abstract class AsyncRendererInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AsyncRendererInterface

    static name: string
}

interface AttachmentClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.AttachmentClass

    base_class: GObject.ObjectClass
}

abstract class AttachmentClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AttachmentClass

    static name: string
}

interface AttachmentPrivate {
}

class AttachmentPrivate {

    // Own properties of XreaderDocument-1.5.XreaderDocument.AttachmentPrivate

    static name: string
}

interface DocumentAnnotationsInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentAnnotationsInterface

    base_iface: GObject.TypeInterface
    document_is_modified: (document_annots: DocumentAnnotations) => boolean
    add_annotation: (document_annots: DocumentAnnotations, annot: Annotation, rect: Rectangle) => void
    save_annotation: (document_annots: DocumentAnnotations, annot: Annotation, mask: AnnotationsSaveMask) => void
    remove_annotation: (document_annots: DocumentAnnotations, annot: Annotation) => void
}

abstract class DocumentAnnotationsInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentAnnotationsInterface

    static name: string
}

interface DocumentAttachmentsInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentAttachmentsInterface

    base_iface: GObject.TypeInterface
    has_attachments: (document_attachments: DocumentAttachments) => boolean
}

abstract class DocumentAttachmentsInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentAttachmentsInterface

    static name: string
}

interface DocumentBackendInfo {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentBackendInfo

    name: string | null
    version: string | null
}

class DocumentBackendInfo {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentBackendInfo

    static name: string
}

interface DocumentClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentClass

    base_class: GObject.ObjectClass
    load: (document: Document, uri: string | null) => boolean
    save: (document: Document, uri: string | null) => boolean
    get_n_pages: (document: Document) => number
    get_page_size: (document: Document, page: Page, width: number, height: number) => void
    get_page_label: (document: Document, page: Page) => string | null
    render: (document: Document, rc: RenderContext) => cairo.Surface
    get_info: (document: Document) => DocumentInfo
    get_backend_info: (document: Document, info: DocumentBackendInfo) => boolean
    support_synctex: (document: Document) => boolean
    toggle_night_mode: (document: Document, night: boolean) => void
    check_add_night_sheet: (document: Document) => void
}

abstract class DocumentClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentClass

    static name: string
}

interface DocumentFindInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentFindInterface

    base_iface: GObject.TypeInterface
    check_for_hits: (document_find: DocumentFind, page: Page, text: string | null, case_sensitive: boolean) => number
}

abstract class DocumentFindInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentFindInterface

    static name: string
}

interface DocumentFontsInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentFontsInterface

    base_iface: GObject.TypeInterface
    scan: (document_fonts: DocumentFonts, n_pages: number) => boolean
    get_progress: (document_fonts: DocumentFonts) => number
    fill_model: (document_fonts: DocumentFonts, model: Gtk.TreeModel) => void
}

abstract class DocumentFontsInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentFontsInterface

    static name: string
}

interface DocumentFormsInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentFormsInterface

    base_iface: GObject.TypeInterface
    document_is_modified: (document_forms: DocumentForms) => boolean
    form_field_text_get_text: (document_forms: DocumentForms, field: FormField) => string | null
    form_field_text_set_text: (document_forms: DocumentForms, field: FormField, text: string | null) => void
    form_field_button_get_state: (document_forms: DocumentForms, field: FormField) => boolean
    form_field_button_set_state: (document_forms: DocumentForms, field: FormField, state: boolean) => void
    form_field_choice_get_item: (document_forms: DocumentForms, field: FormField, index: number) => string | null
    form_field_choice_get_n_items: (document_forms: DocumentForms, field: FormField) => number
    form_field_choice_is_item_selected: (document_forms: DocumentForms, field: FormField, index: number) => boolean
    form_field_choice_select_item: (document_forms: DocumentForms, field: FormField, index: number) => void
    form_field_choice_toggle_item: (document_forms: DocumentForms, field: FormField, index: number) => void
    form_field_choice_unselect_all: (document_forms: DocumentForms, field: FormField) => void
    form_field_choice_set_text: (document_forms: DocumentForms, field: FormField, text: string | null) => void
    form_field_choice_get_text: (document_forms: DocumentForms, field: FormField) => string | null
}

abstract class DocumentFormsInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentFormsInterface

    static name: string
}

interface DocumentImagesInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentImagesInterface

    base_iface: GObject.TypeInterface
}

abstract class DocumentImagesInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentImagesInterface

    static name: string
}

interface DocumentInfo {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentInfo

    title: string | null
    format: string | null
    author: string | null
    subject: string | null
    keywords: string | null
    creator: string | null
    producer: string | null
    linearized: string | null
    security: string | null
    creation_date: GLib.Time
    modified_date: GLib.Time
    layout: DocumentLayout
    mode: DocumentMode
    ui_hints: number
    permissions: number
    n_pages: number
    paper_height: number
    paper_width: number
    license: DocumentLicense
    fields_mask: number

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentInfo

    copy(): DocumentInfo
    free(): void
}

class DocumentInfo {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentInfo

    static name: string
}

interface DocumentLayersInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentLayersInterface

    base_iface: GObject.TypeInterface
    has_layers: (document_layers: DocumentLayers) => boolean
    show_layer: (document_layers: DocumentLayers, layer: Layer) => void
    hide_layer: (document_layers: DocumentLayers, layer: Layer) => void
    layer_is_visible: (document_layers: DocumentLayers, layer: Layer) => boolean
}

abstract class DocumentLayersInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentLayersInterface

    static name: string
}

interface DocumentLicense {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentLicense

    text: string | null
    uri: string | null
    web_statement: string | null

    // Owm methods of XreaderDocument-1.5.XreaderDocument.DocumentLicense

    copy(): DocumentLicense
    free(): void
    get_text(): string | null
    get_uri(): string | null
    get_web_statement(): string | null
}

class DocumentLicense {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentLicense

    static name: string

    // Constructors of XreaderDocument-1.5.XreaderDocument.DocumentLicense

    constructor() 
    static new(): DocumentLicense
}

interface DocumentLinksInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentLinksInterface

    base_iface: GObject.TypeInterface
    has_document_links: (document_links: DocumentLinks) => boolean
    find_link_page: (document_links: DocumentLinks, link_name: string | null) => number
}

abstract class DocumentLinksInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentLinksInterface

    static name: string
}

interface DocumentPrintInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentPrintInterface

    base_iface: GObject.TypeInterface
    print_page: (document_print: DocumentPrint, page: Page, cr: cairo.Context) => void
}

abstract class DocumentPrintInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentPrintInterface

    static name: string
}

interface DocumentPrivate {
}

class DocumentPrivate {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentPrivate

    static name: string
}

interface DocumentSecurityInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentSecurityInterface

    base_iface: GObject.TypeInterface
    has_document_security: (document_security: DocumentSecurity) => boolean
    set_password: (document_security: DocumentSecurity, password: string | null) => void
}

abstract class DocumentSecurityInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentSecurityInterface

    static name: string
}

interface DocumentTextInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentTextInterface

    base_iface: GObject.TypeInterface
    get_text_mapping: (document_text: DocumentText, page: Page) => cairo.Region
    get_text: (document_text: DocumentText, page: Page) => string | null
    get_text_layout: (document_text: DocumentText, page: Page, areas: Rectangle, n_areas: number) => boolean
}

abstract class DocumentTextInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentTextInterface

    static name: string
}

interface DocumentThumbnailsInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentThumbnailsInterface

    base_iface: GObject.TypeInterface
    get_dimensions: (document: DocumentThumbnails, rc: RenderContext, width: number, height: number) => void
}

abstract class DocumentThumbnailsInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentThumbnailsInterface

    static name: string
}

interface DocumentTransitionInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.DocumentTransitionInterface

    base_iface: GObject.TypeInterface
    get_page_duration: (document_trans: DocumentTransition, page: number) => number
}

abstract class DocumentTransitionInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.DocumentTransitionInterface

    static name: string
}

interface FileExporterContext {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FileExporterContext

    format: FileExporterFormat
    filename: string | null
    first_page: number
    last_page: number
    paper_width: number
    paper_height: number
    duplex: boolean
    pages_per_sheet: number
}

class FileExporterContext {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FileExporterContext

    static name: string
}

interface FileExporterInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FileExporterInterface

    base_iface: GObject.TypeInterface
    begin: (exporter: FileExporter, fc: FileExporterContext) => void
    begin_page: (exporter: FileExporter) => void
    do_page: (exporter: FileExporter, rc: RenderContext) => void
    end_page: (exporter: FileExporter) => void
    end: (exporter: FileExporter) => void
    get_capabilities: (exporter: FileExporter) => FileExporterCapabilities
}

abstract class FileExporterInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FileExporterInterface

    static name: string
}

interface FormFieldButtonClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormFieldButtonClass

    partent_class: FormFieldClass
}

abstract class FormFieldButtonClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormFieldButtonClass

    static name: string
}

interface FormFieldChoiceClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormFieldChoiceClass

    partent_class: FormFieldClass
}

abstract class FormFieldChoiceClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormFieldChoiceClass

    static name: string
}

interface FormFieldClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormFieldClass

    parent_class: GObject.ObjectClass
}

abstract class FormFieldClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormFieldClass

    static name: string
}

interface FormFieldSignatureClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormFieldSignatureClass

    partent_class: FormFieldClass
}

abstract class FormFieldSignatureClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormFieldSignatureClass

    static name: string
}

interface FormFieldTextClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.FormFieldTextClass

    partent_class: FormFieldClass
}

abstract class FormFieldTextClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.FormFieldTextClass

    static name: string
}

interface ImageClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.ImageClass

    base_class: GObject.ObjectClass
}

abstract class ImageClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.ImageClass

    static name: string
}

interface ImagePrivate {
}

class ImagePrivate {

    // Own properties of XreaderDocument-1.5.XreaderDocument.ImagePrivate

    static name: string
}

interface LayerClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.LayerClass

    base_class: GObject.ObjectClass
}

abstract class LayerClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LayerClass

    static name: string
}

interface LayerPrivate {
}

class LayerPrivate {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LayerPrivate

    static name: string
}

interface LinkActionClass {
}

abstract class LinkActionClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkActionClass

    static name: string
}

interface LinkActionPrivate {
}

class LinkActionPrivate {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkActionPrivate

    static name: string
}

interface LinkClass {
}

abstract class LinkClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkClass

    static name: string
}

interface LinkDestClass {
}

abstract class LinkDestClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkDestClass

    static name: string
}

interface LinkDestPrivate {
}

class LinkDestPrivate {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkDestPrivate

    static name: string
}

interface LinkPrivate {
}

class LinkPrivate {

    // Own properties of XreaderDocument-1.5.XreaderDocument.LinkPrivate

    static name: string
}

interface Mapping {

    // Own fields of XreaderDocument-1.5.XreaderDocument.Mapping

    area: Rectangle
    data: any
}

class Mapping {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Mapping

    static name: string
}

interface MappingList {

    // Owm methods of XreaderDocument-1.5.XreaderDocument.MappingList

    get_data(x: number, y: number): any | null
    get_page(): number
    length(): number
    remove(mapping: Mapping): void
    unref(): void
}

class MappingList {

    // Own properties of XreaderDocument-1.5.XreaderDocument.MappingList

    static name: string
}

interface PageClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.PageClass

    base_class: GObject.ObjectClass
}

abstract class PageClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.PageClass

    static name: string
}

interface Point {

    // Own fields of XreaderDocument-1.5.XreaderDocument.Point

    x: number
    y: number
}

class Point {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Point

    static name: string
}

interface Rectangle {

    // Own fields of XreaderDocument-1.5.XreaderDocument.Rectangle

    x1: number
    y1: number
    x2: number
    y2: number

    // Owm methods of XreaderDocument-1.5.XreaderDocument.Rectangle

    copy(): Rectangle
    free(): void
}

class Rectangle {

    // Own properties of XreaderDocument-1.5.XreaderDocument.Rectangle

    static name: string

    // Constructors of XreaderDocument-1.5.XreaderDocument.Rectangle

    constructor() 
    static new(): Rectangle
}

interface RenderContextClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.RenderContextClass

    klass: GObject.ObjectClass
}

abstract class RenderContextClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.RenderContextClass

    static name: string
}

interface SelectionInterface {

    // Own fields of XreaderDocument-1.5.XreaderDocument.SelectionInterface

    base_iface: GObject.TypeInterface
    render_selection: (selection: Selection, rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color) => void
    get_selected_text: (selection: Selection, page: Page, style: SelectionStyle, points: Rectangle) => string | null
    get_selection_region: (selection: Selection, rc: RenderContext, style: SelectionStyle, points: Rectangle) => cairo.Region
}

abstract class SelectionInterface {

    // Own properties of XreaderDocument-1.5.XreaderDocument.SelectionInterface

    static name: string
}

interface SourceLink {

    // Own fields of XreaderDocument-1.5.XreaderDocument.SourceLink

    filename: string | null
    line: number
    col: number

    // Owm methods of XreaderDocument-1.5.XreaderDocument.SourceLink

    copy(): SourceLink
    free(): void
}

class SourceLink {

    // Own properties of XreaderDocument-1.5.XreaderDocument.SourceLink

    static name: string

    // Constructors of XreaderDocument-1.5.XreaderDocument.SourceLink

    constructor(filename: string | null, line: number, col: number) 
    static new(filename: string | null, line: number, col: number): SourceLink
}

interface TransitionEffectClass {

    // Own fields of XreaderDocument-1.5.XreaderDocument.TransitionEffectClass

    parent_class: GObject.ObjectClass
}

abstract class TransitionEffectClass {

    // Own properties of XreaderDocument-1.5.XreaderDocument.TransitionEffectClass

    static name: string
}

interface TypeInfo {

    // Own fields of XreaderDocument-1.5.XreaderDocument.TypeInfo

    desc: string | null
    mime_types: string | null
}

class TypeInfo {

    // Own properties of XreaderDocument-1.5.XreaderDocument.TypeInfo

    static name: string
}

    type BackendPage = any
    type BackendPageDestroyFunc = GLib.DestroyNotify
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

export default XreaderDocument;
// END