
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './xreaderview-1.5-import.d.ts';
/**
 * XreaderView-1.5
 */

import type XreaderDocument from './xreaderdocument-1.5.js';
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

export namespace XreaderView {

enum JobPriority {
    PRIORITY_URGENT,
    PRIORITY_HIGH,
    PRIORITY_LOW,
    PRIORITY_NONE,
    N_PRIORITIES,
}
enum JobRunMode {
    THREAD,
    MAIN_LOOP,
}
enum SizingMode {
    BEST_FIT,
    FIT_WIDTH,
    FREE,
}
enum ViewSelectionMode {
    TEXT,
    RECTANGLE,
}
enum JobPageDataFlags {
    NONE,
    LINKS,
    TEXT,
    TEXT_MAPPING,
    TEXT_LAYOUT,
    IMAGES,
    FORMS,
    ANNOTS,
    ALL,
}
const STOCK_ATTACHMENT: string | null
const STOCK_CLOSE: string | null
const STOCK_INVERTED_COLORS: string | null
const STOCK_RESIZE_SE: string | null
const STOCK_RESIZE_SW: string | null
const STOCK_ROTATE_LEFT: string | null
const STOCK_ROTATE_RIGHT: string | null
const STOCK_RUN_PRESENTATION: string | null
const STOCK_VIEW_CONTINUOUS: string | null
const STOCK_VIEW_DUAL: string | null
const STOCK_VISIBLE: string | null
const STOCK_ZOOM: string | null
const STOCK_ZOOM_PAGE: string | null
const STOCK_ZOOM_WIDTH: string | null
/**
 * Creates a new icon factory, adding the base stock icons to it.
 */
function stock_icons_init(): void
function stock_icons_set_screen(screen: Gdk.Screen): void
function stock_icons_shutdown(): void
module DocumentModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `page-changed`
     */
    interface PageChangedSignalCallback {
        ($obj: DocumentModel, object: number, p0: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of XreaderView-1.5.XreaderView.DocumentModel

        continuous?: boolean | null
        document?: XreaderDocument.Document | null
        dual_odd_left?: boolean | null
        dual_page?: boolean | null
        fullscreen?: boolean | null
        inverted_colors?: boolean | null
        page?: number | null
        rotation?: number | null
        rtl?: boolean | null
        scale?: number | null
        sizing_mode?: SizingMode | null
    }

}

interface DocumentModel {

    // Own properties of XreaderView-1.5.XreaderView.DocumentModel

    continuous: boolean
    document: XreaderDocument.Document
    dual_odd_left: boolean
    dual_page: boolean
    fullscreen: boolean
    inverted_colors: boolean
    page: number
    rotation: number
    rtl: boolean
    scale: number
    sizing_mode: SizingMode

    // Owm methods of XreaderView-1.5.XreaderView.DocumentModel

    get_continuous(): boolean
    /**
     * Returns the #EvDocument referenced by the model.
     * @returns a #EvDocument
     */
    get_document(): XreaderDocument.Document
    get_dual_page(): boolean
    get_dual_page_odd_pages_left(): boolean
    get_fullscreen(): boolean
    get_inverted_colors(): boolean
    get_max_scale(): number
    get_min_scale(): number
    get_page(): number
    get_rotation(): number
    get_rtl(): boolean
    get_scale(): number
    get_sizing_mode(): SizingMode
    set_continuous(continuous: boolean): void
    set_document(document: XreaderDocument.Document): void
    set_dual_page(dual_page: boolean): void
    set_dual_page_odd_pages_left(odd_left: boolean): void
    set_fullscreen(fullscreen: boolean): void
    set_inverted_colors(inverted_colors: boolean): void
    set_max_scale(max_scale: number): void
    set_min_scale(min_scale: number): void
    set_page(page: number): void
    set_page_by_label(page_label: string | null): void
    set_rotation(rotation: number): void
    set_rtl(rtl: boolean): void
    set_scale(scale: number): void
    set_sizing_mode(mode: SizingMode): void

    // Own signals of XreaderView-1.5.XreaderView.DocumentModel

    connect(sigName: "page-changed", callback: DocumentModel.PageChangedSignalCallback): number
    connect_after(sigName: "page-changed", callback: DocumentModel.PageChangedSignalCallback): number
    emit(sigName: "page-changed", object: number, p0: number, ...args: any[]): void

    // Class property signals of XreaderView-1.5.XreaderView.DocumentModel

    connect(sigName: "notify::continuous", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continuous", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::continuous", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::dual-odd-left", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dual-odd-left", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dual-odd-left", ...args: any[]): void
    connect(sigName: "notify::dual-page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dual-page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dual-page", ...args: any[]): void
    connect(sigName: "notify::fullscreen", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreen", ...args: any[]): void
    connect(sigName: "notify::inverted-colors", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverted-colors", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inverted-colors", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::rtl", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtl", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rtl", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::sizing-mode", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sizing-mode", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sizing-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentModel extends GObject.Object {

    // Own properties of XreaderView-1.5.XreaderView.DocumentModel

    static name: string
    static $gtype: GObject.GType<DocumentModel>

    // Constructors of XreaderView-1.5.XreaderView.DocumentModel

    constructor(config?: DocumentModel.ConstructorProperties) 
    constructor() 
    static new(): DocumentModel
    static new_with_document(document: XreaderDocument.Document): DocumentModel
    _init(config?: DocumentModel.ConstructorProperties): void
}

module Job {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancelled`
     */
    interface CancelledSignalCallback {
        ($obj: Job): void
    }

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: Job): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Job {

    // Own fields of XreaderView-1.5.XreaderView.Job

    parent: GObject.Object
    document: XreaderDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number

    // Owm methods of XreaderView-1.5.XreaderView.Job

    cancel(): void
    failed_from_error(error: GLib.Error): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void

    // Own virtual methods of XreaderView-1.5.XreaderView.Job

    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean

    // Own signals of XreaderView-1.5.XreaderView.Job

    connect(sigName: "cancelled", callback: Job.CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: Job.CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "finished", callback: Job.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: Job.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of XreaderView-1.5.XreaderView.Job

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Job extends GObject.Object {

    // Own properties of XreaderView-1.5.XreaderView.Job

    static name: string
    static $gtype: GObject.GType<Job>

    // Constructors of XreaderView-1.5.XreaderView.Job

    constructor(config?: Job.ConstructorProperties) 
    _init(config?: Job.ConstructorProperties): void
}

module JobAnnots {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobAnnots {

    // Own fields of XreaderView-1.5.XreaderView.JobAnnots

    parent: Job & GObject.Object
    annots: any[]

    // Class property signals of XreaderView-1.5.XreaderView.JobAnnots

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobAnnots extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobAnnots

    static name: string
    static $gtype: GObject.GType<JobAnnots>

    // Constructors of XreaderView-1.5.XreaderView.JobAnnots

    constructor(config?: JobAnnots.ConstructorProperties) 
    constructor(document: XreaderDocument.Document) 
    static new(document: XreaderDocument.Document): JobAnnots
    _init(config?: JobAnnots.ConstructorProperties): void
}

module JobAttachments {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobAttachments {

    // Own fields of XreaderView-1.5.XreaderView.JobAttachments

    parent: Job & GObject.Object
    attachments: any[]

    // Class property signals of XreaderView-1.5.XreaderView.JobAttachments

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobAttachments extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobAttachments

    static name: string
    static $gtype: GObject.GType<JobAttachments>

    // Constructors of XreaderView-1.5.XreaderView.JobAttachments

    constructor(config?: JobAttachments.ConstructorProperties) 
    constructor(document: XreaderDocument.Document) 
    static new(document: XreaderDocument.Document): JobAttachments
    _init(config?: JobAttachments.ConstructorProperties): void
}

module JobExport {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobExport {

    // Own fields of XreaderView-1.5.XreaderView.JobExport

    parent: Job & GObject.Object
    page: number
    rc: XreaderDocument.RenderContext

    // Owm methods of XreaderView-1.5.XreaderView.JobExport

    set_page(page: number): void

    // Class property signals of XreaderView-1.5.XreaderView.JobExport

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobExport extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobExport

    static name: string
    static $gtype: GObject.GType<JobExport>

    // Constructors of XreaderView-1.5.XreaderView.JobExport

    constructor(config?: JobExport.ConstructorProperties) 
    constructor(document: XreaderDocument.Document) 
    static new(document: XreaderDocument.Document): JobExport
    _init(config?: JobExport.ConstructorProperties): void
}

module JobFind {

    // Signal callback interfaces

    /**
     * Signal callback interface for `updated`
     */
    interface UpdatedSignalCallback {
        ($obj: JobFind, object: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobFind {

    // Own fields of XreaderView-1.5.XreaderView.JobFind

    parent: Job & GObject.Object
    start_page: number
    current_page: number
    n_pages: number
    total_count: number
    pages: any[]
    results: number
    text: string | null
    case_sensitive: boolean
    has_results: boolean

    // Owm methods of XreaderView-1.5.XreaderView.JobFind

    get_n_results(pages: number): number
    get_progress(): number
    get_text(): string | null

    // Own virtual methods of XreaderView-1.5.XreaderView.JobFind

    vfunc_updated(page: number): void

    // Own signals of XreaderView-1.5.XreaderView.JobFind

    connect(sigName: "updated", callback: JobFind.UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: JobFind.UpdatedSignalCallback): number
    emit(sigName: "updated", object: number, ...args: any[]): void

    // Class property signals of XreaderView-1.5.XreaderView.JobFind

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobFind extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobFind

    static name: string
    static $gtype: GObject.GType<JobFind>

    // Constructors of XreaderView-1.5.XreaderView.JobFind

    constructor(config?: JobFind.ConstructorProperties) 
    constructor(document: XreaderDocument.Document, start_page: number, n_pages: number, text: string | null, case_sensitive: boolean) 
    static new(document: XreaderDocument.Document, start_page: number, n_pages: number, text: string | null, case_sensitive: boolean): JobFind
    _init(config?: JobFind.ConstructorProperties): void
}

module JobFonts {

    // Signal callback interfaces

    /**
     * Signal callback interface for `updated`
     */
    interface UpdatedSignalCallback {
        ($obj: JobFonts, object: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobFonts {

    // Own fields of XreaderView-1.5.XreaderView.JobFonts

    parent: Job & GObject.Object
    scan_completed: boolean

    // Own virtual methods of XreaderView-1.5.XreaderView.JobFonts

    vfunc_updated(progress: number): void

    // Own signals of XreaderView-1.5.XreaderView.JobFonts

    connect(sigName: "updated", callback: JobFonts.UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: JobFonts.UpdatedSignalCallback): number
    emit(sigName: "updated", object: number, ...args: any[]): void

    // Class property signals of XreaderView-1.5.XreaderView.JobFonts

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobFonts extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobFonts

    static name: string
    static $gtype: GObject.GType<JobFonts>

    // Constructors of XreaderView-1.5.XreaderView.JobFonts

    constructor(config?: JobFonts.ConstructorProperties) 
    constructor(document: XreaderDocument.Document) 
    static new(document: XreaderDocument.Document): JobFonts
    _init(config?: JobFonts.ConstructorProperties): void
}

module JobLayers {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobLayers {

    // Own fields of XreaderView-1.5.XreaderView.JobLayers

    parent: Job & GObject.Object
    model: Gtk.TreeModel

    // Class property signals of XreaderView-1.5.XreaderView.JobLayers

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobLayers extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobLayers

    static name: string
    static $gtype: GObject.GType<JobLayers>

    // Constructors of XreaderView-1.5.XreaderView.JobLayers

    constructor(config?: JobLayers.ConstructorProperties) 
    constructor(document: XreaderDocument.Document) 
    static new(document: XreaderDocument.Document): JobLayers
    _init(config?: JobLayers.ConstructorProperties): void
}

module JobLinks {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobLinks {

    // Own fields of XreaderView-1.5.XreaderView.JobLinks

    parent: Job & GObject.Object
    model: Gtk.TreeModel

    // Class property signals of XreaderView-1.5.XreaderView.JobLinks

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobLinks extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobLinks

    static name: string
    static $gtype: GObject.GType<JobLinks>

    // Constructors of XreaderView-1.5.XreaderView.JobLinks

    constructor(config?: JobLinks.ConstructorProperties) 
    constructor(document: XreaderDocument.Document) 
    static new(document: XreaderDocument.Document): JobLinks
    _init(config?: JobLinks.ConstructorProperties): void
}

module JobLoad {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobLoad {

    // Own fields of XreaderView-1.5.XreaderView.JobLoad

    parent: Job & GObject.Object
    uri: string | null
    password: string | null

    // Owm methods of XreaderView-1.5.XreaderView.JobLoad

    set_password(password: string | null): void
    set_uri(uri: string | null): void

    // Class property signals of XreaderView-1.5.XreaderView.JobLoad

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobLoad extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobLoad

    static name: string
    static $gtype: GObject.GType<JobLoad>

    // Constructors of XreaderView-1.5.XreaderView.JobLoad

    constructor(config?: JobLoad.ConstructorProperties) 
    constructor(uri: string | null) 
    static new(uri: string | null): JobLoad
    _init(config?: JobLoad.ConstructorProperties): void
}

module JobPageData {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobPageData {

    // Own fields of XreaderView-1.5.XreaderView.JobPageData

    parent: Job & GObject.Object
    page: number
    flags: JobPageDataFlags
    link_mapping: XreaderDocument.MappingList
    image_mapping: XreaderDocument.MappingList
    form_field_mapping: XreaderDocument.MappingList
    annot_mapping: XreaderDocument.MappingList
    text_mapping: cairo.Region
    text: string | null
    text_layout: XreaderDocument.Rectangle
    text_layout_length: number

    // Class property signals of XreaderView-1.5.XreaderView.JobPageData

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobPageData extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobPageData

    static name: string
    static $gtype: GObject.GType<JobPageData>

    // Constructors of XreaderView-1.5.XreaderView.JobPageData

    constructor(config?: JobPageData.ConstructorProperties) 
    constructor(document: XreaderDocument.Document, page: number, flags: JobPageDataFlags) 
    static new(document: XreaderDocument.Document, page: number, flags: JobPageDataFlags): JobPageData
    _init(config?: JobPageData.ConstructorProperties): void
}

module JobPrint {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobPrint {

    // Own fields of XreaderView-1.5.XreaderView.JobPrint

    parent: Job & GObject.Object
    page: number
    cr: cairo.Context

    // Owm methods of XreaderView-1.5.XreaderView.JobPrint

    set_cairo(cr: cairo.Context): void
    set_page(page: number): void

    // Class property signals of XreaderView-1.5.XreaderView.JobPrint

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobPrint extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobPrint

    static name: string
    static $gtype: GObject.GType<JobPrint>

    // Constructors of XreaderView-1.5.XreaderView.JobPrint

    constructor(config?: JobPrint.ConstructorProperties) 
    constructor(document: XreaderDocument.Document) 
    static new(document: XreaderDocument.Document): JobPrint
    _init(config?: JobPrint.ConstructorProperties): void
}

module JobRender {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobRender {

    // Own fields of XreaderView-1.5.XreaderView.JobRender

    parent: Job & GObject.Object
    page: number
    rotation: number
    scale: number
    page_ready: boolean
    target_width: number
    target_height: number
    surface: cairo.Surface
    include_selection: boolean
    selection: cairo.Surface
    selection_region: cairo.Region
    selection_points: XreaderDocument.Rectangle
    selection_style: XreaderDocument.SelectionStyle
    base: Gdk.Color
    text: Gdk.Color

    // Owm methods of XreaderView-1.5.XreaderView.JobRender

    set_selection_info(selection_points: XreaderDocument.Rectangle, selection_style: XreaderDocument.SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Class property signals of XreaderView-1.5.XreaderView.JobRender

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobRender extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobRender

    static name: string
    static $gtype: GObject.GType<JobRender>

    // Constructors of XreaderView-1.5.XreaderView.JobRender

    constructor(config?: JobRender.ConstructorProperties) 
    constructor(document: XreaderDocument.Document, page: number, rotation: number, scale: number, width: number, height: number) 
    static new(document: XreaderDocument.Document, page: number, rotation: number, scale: number, width: number, height: number): JobRender
    _init(config?: JobRender.ConstructorProperties): void
}

module JobSave {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobSave {

    // Own fields of XreaderView-1.5.XreaderView.JobSave

    parent: Job & GObject.Object
    uri: string | null
    document_uri: string | null

    // Class property signals of XreaderView-1.5.XreaderView.JobSave

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobSave extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobSave

    static name: string
    static $gtype: GObject.GType<JobSave>

    // Constructors of XreaderView-1.5.XreaderView.JobSave

    constructor(config?: JobSave.ConstructorProperties) 
    constructor(document: XreaderDocument.Document, uri: string | null, document_uri: string | null) 
    static new(document: XreaderDocument.Document, uri: string | null, document_uri: string | null): JobSave
    _init(config?: JobSave.ConstructorProperties): void
}

module JobThumbnail {

    // Constructor properties interface

    interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

interface JobThumbnail {

    // Own fields of XreaderView-1.5.XreaderView.JobThumbnail

    parent: Job & GObject.Object
    page: number
    rotation: number
    scale: number
    surface: cairo.Surface
    thumbnail: GdkPixbuf.Pixbuf

    // Class property signals of XreaderView-1.5.XreaderView.JobThumbnail

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobThumbnail extends Job {

    // Own properties of XreaderView-1.5.XreaderView.JobThumbnail

    static name: string
    static $gtype: GObject.GType<JobThumbnail>

    // Constructors of XreaderView-1.5.XreaderView.JobThumbnail

    constructor(config?: JobThumbnail.ConstructorProperties) 
    constructor(document: XreaderDocument.Document, page: number, rotation: number, scale: number) 
    static new(document: XreaderDocument.Document, page: number, rotation: number, scale: number): JobThumbnail
    _init(config?: JobThumbnail.ConstructorProperties): void
}

module PrintOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-print`
     */
    interface BeginPrintSignalCallback {
        ($obj: PrintOperation): void
    }

    /**
     * Signal callback interface for `done`
     */
    interface DoneSignalCallback {
        ($obj: PrintOperation, object: Gtk.PrintOperationResult): void
    }

    /**
     * Signal callback interface for `status-changed`
     */
    interface StatusChangedSignalCallback {
        ($obj: PrintOperation): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of XreaderView-1.5.XreaderView.PrintOperation

        document?: XreaderDocument.Document | null
    }

}

interface PrintOperation {

    // Own properties of XreaderView-1.5.XreaderView.PrintOperation

    readonly document: XreaderDocument.Document

    // Owm methods of XreaderView-1.5.XreaderView.PrintOperation

    cancel(): void
    get_embed_page_setup(): boolean
    get_error(): void
    get_job_name(): string | null
    get_progress(): number
    get_status(): string | null
    run(parent: Gtk.Window): void
    set_current_page(current_page: number): void
    set_default_page_setup(page_setup: Gtk.PageSetup): void
    set_embed_page_setup(embed: boolean): void
    set_job_name(job_name: string | null): void
    set_print_settings(print_settings: Gtk.PrintSettings): void

    // Own signals of XreaderView-1.5.XreaderView.PrintOperation

    connect(sigName: "begin-print", callback: PrintOperation.BeginPrintSignalCallback): number
    connect_after(sigName: "begin-print", callback: PrintOperation.BeginPrintSignalCallback): number
    emit(sigName: "begin-print", ...args: any[]): void
    connect(sigName: "done", callback: PrintOperation.DoneSignalCallback): number
    connect_after(sigName: "done", callback: PrintOperation.DoneSignalCallback): number
    emit(sigName: "done", object: Gtk.PrintOperationResult, ...args: any[]): void
    connect(sigName: "status-changed", callback: PrintOperation.StatusChangedSignalCallback): number
    connect_after(sigName: "status-changed", callback: PrintOperation.StatusChangedSignalCallback): number
    emit(sigName: "status-changed", ...args: any[]): void

    // Class property signals of XreaderView-1.5.XreaderView.PrintOperation

    connect(sigName: "notify::document", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PrintOperation extends GObject.Object {

    // Own properties of XreaderView-1.5.XreaderView.PrintOperation

    static name: string
    static $gtype: GObject.GType<PrintOperation>

    // Constructors of XreaderView-1.5.XreaderView.PrintOperation

    constructor(config?: PrintOperation.ConstructorProperties) 
    constructor(document: XreaderDocument.Document) 
    static new(document: XreaderDocument.Document): PrintOperation
    _init(config?: PrintOperation.ConstructorProperties): void
    static exists_for_document(document: XreaderDocument.Document): boolean
}

module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    interface ActivateSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `annot-added`
     */
    interface AnnotAddedSignalCallback {
        ($obj: View, object: XreaderDocument.Annotation): void
    }

    /**
     * Signal callback interface for `annot-removed`
     */
    interface AnnotRemovedSignalCallback {
        ($obj: View, object: XreaderDocument.Annotation): void
    }

    /**
     * Signal callback interface for `binding-activated`
     */
    interface BindingActivatedSignalCallback {
        ($obj: View, object: Gtk.ScrollType, p0: boolean): void
    }

    /**
     * Signal callback interface for `external-link`
     */
    interface ExternalLinkSignalCallback {
        ($obj: View, object: GObject.Object): void
    }

    /**
     * Signal callback interface for `handle-link`
     */
    interface HandleLinkSignalCallback {
        ($obj: View, object: GObject.Object): void
    }

    /**
     * Signal callback interface for `layers-changed`
     */
    interface LayersChangedSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `popup`
     */
    interface PopupSignalCallback {
        ($obj: View, object: any | null): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    interface SelectionChangedSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `sync-source`
     */
    interface SyncSourceSignalCallback {
        ($obj: View, object: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Container.ConstructorProperties {
    }

}

interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Owm methods of XreaderView-1.5.XreaderView.View

    autoscroll_start(): void
    autoscroll_stop(): void
    begin_add_annotation(annot_type: XreaderDocument.AnnotationType): void
    can_zoom_in(): boolean
    can_zoom_out(): boolean
    cancel_add_annotation(): void
    copy(): void
    copy_link_address(action: XreaderDocument.LinkAction): void
    /**
     * Disconnect all signal handlers from the model, to ensure error free operation of the webview,
     * we have an equivalent function for the webview.
     */
    disconnect_handlers(): void
    find_cancel(): void
    find_next(): void
    find_previous(): void
    find_search_changed(): void
    find_set_highlight_search(value: boolean): void
    focus_annotation(annot_mapping: XreaderDocument.Mapping): void
    get_has_selection(): boolean
    get_page_extents(page: number, page_area: Gdk.Rectangle, border: Gtk.Border): boolean
    handle_link(link: XreaderDocument.Link): void
    hide_cursor(): void
    highlight_forward_search(link: XreaderDocument.SourceLink): void
    next_page(): boolean
    previous_page(): boolean
    reload(): void
    remove_annotation(annot: XreaderDocument.Annotation): void
    scroll(scroll: Gtk.ScrollType, horizontal: boolean): void
    select_all(): void
    set_loading(loading: boolean): void
    set_model(model: DocumentModel): void
    /**
     * Sets the maximum size in bytes that will be used to cache
     * rendered pages. Use 0 to disable caching rendered pages.
     * 
     * Note that this limit doesn't affect the current visible page range,
     * which will always be rendered. In order to limit the total memory used
     * you have to use ev_document_model_set_max_scale() too.
     * @param cache_size 
     */
    set_page_cache_size(cache_size: number): void
    show_cursor(): void
    zoom_in(): void
    zoom_out(): void

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

    // Own signals of XreaderView-1.5.XreaderView.View

    connect(sigName: "activate", callback: View.ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: View.ActivateSignalCallback): number
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "annot-added", callback: View.AnnotAddedSignalCallback): number
    connect_after(sigName: "annot-added", callback: View.AnnotAddedSignalCallback): number
    emit(sigName: "annot-added", object: XreaderDocument.Annotation, ...args: any[]): void
    connect(sigName: "annot-removed", callback: View.AnnotRemovedSignalCallback): number
    connect_after(sigName: "annot-removed", callback: View.AnnotRemovedSignalCallback): number
    emit(sigName: "annot-removed", object: XreaderDocument.Annotation, ...args: any[]): void
    connect(sigName: "binding-activated", callback: View.BindingActivatedSignalCallback): number
    connect_after(sigName: "binding-activated", callback: View.BindingActivatedSignalCallback): number
    emit(sigName: "binding-activated", object: Gtk.ScrollType, p0: boolean, ...args: any[]): void
    connect(sigName: "external-link", callback: View.ExternalLinkSignalCallback): number
    connect_after(sigName: "external-link", callback: View.ExternalLinkSignalCallback): number
    emit(sigName: "external-link", object: GObject.Object, ...args: any[]): void
    connect(sigName: "handle-link", callback: View.HandleLinkSignalCallback): number
    connect_after(sigName: "handle-link", callback: View.HandleLinkSignalCallback): number
    emit(sigName: "handle-link", object: GObject.Object, ...args: any[]): void
    connect(sigName: "layers-changed", callback: View.LayersChangedSignalCallback): number
    connect_after(sigName: "layers-changed", callback: View.LayersChangedSignalCallback): number
    emit(sigName: "layers-changed", ...args: any[]): void
    connect(sigName: "popup", callback: View.PopupSignalCallback): number
    connect_after(sigName: "popup", callback: View.PopupSignalCallback): number
    emit(sigName: "popup", object: any | null, ...args: any[]): void
    connect(sigName: "selection-changed", callback: View.SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: View.SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void
    connect(sigName: "sync-source", callback: View.SyncSourceSignalCallback): number
    connect_after(sigName: "sync-source", callback: View.SyncSourceSignalCallback): number
    emit(sigName: "sync-source", object: any | null, ...args: any[]): void

    // Class property signals of XreaderView-1.5.XreaderView.View

    connect(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class View extends Gtk.Container {

    // Own properties of XreaderView-1.5.XreaderView.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of XreaderView-1.5.XreaderView.View

    constructor(config?: View.ConstructorProperties) 
    constructor() 
    static new(): View
    _init(config?: View.ConstructorProperties): void
}

module ViewPresentation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `change-page`
     */
    interface ChangePageSignalCallback {
        ($obj: ViewPresentation, object: Gtk.ScrollType): void
    }

    /**
     * Signal callback interface for `external-link`
     */
    interface ExternalLinkSignalCallback {
        ($obj: ViewPresentation, object: GObject.Object): void
    }

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: ViewPresentation): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of XreaderView-1.5.XreaderView.ViewPresentation

        current_page?: number | null
        document?: XreaderDocument.Document | null
        inverted_colors?: boolean | null
        rotation?: number | null
    }

}

interface ViewPresentation extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of XreaderView-1.5.XreaderView.ViewPresentation

    readonly current_page: number
    readonly document: XreaderDocument.Document
    readonly inverted_colors: boolean
    rotation: number

    // Owm methods of XreaderView-1.5.XreaderView.ViewPresentation

    get_current_page(): number
    get_rotation(): number
    next_page(): void
    previous_page(): void
    set_rotation(rotation: number): void
    set_rtl(rtl: boolean): void

    // Own signals of XreaderView-1.5.XreaderView.ViewPresentation

    connect(sigName: "change-page", callback: ViewPresentation.ChangePageSignalCallback): number
    connect_after(sigName: "change-page", callback: ViewPresentation.ChangePageSignalCallback): number
    emit(sigName: "change-page", object: Gtk.ScrollType, ...args: any[]): void
    connect(sigName: "external-link", callback: ViewPresentation.ExternalLinkSignalCallback): number
    connect_after(sigName: "external-link", callback: ViewPresentation.ExternalLinkSignalCallback): number
    emit(sigName: "external-link", object: GObject.Object, ...args: any[]): void
    connect(sigName: "finished", callback: ViewPresentation.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: ViewPresentation.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of XreaderView-1.5.XreaderView.ViewPresentation

    connect(sigName: "notify::current-page", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-page", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-page", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::inverted-colors", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverted-colors", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inverted-colors", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ViewPresentation extends Gtk.Widget {

    // Own properties of XreaderView-1.5.XreaderView.ViewPresentation

    static name: string
    static $gtype: GObject.GType<ViewPresentation>

    // Constructors of XreaderView-1.5.XreaderView.ViewPresentation

    constructor(config?: ViewPresentation.ConstructorProperties) 
    constructor(document: XreaderDocument.Document, current_page: number, rotation: number, inverted_colors: boolean) 
    static new(document: XreaderDocument.Document, current_page: number, rotation: number, inverted_colors: boolean): ViewPresentation
    _init(config?: ViewPresentation.ConstructorProperties): void
}

module WebView {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {
    }

}

interface WebView extends Atk.ImplementorIface, Gtk.Buildable {

    // Owm methods of XreaderView-1.5.XreaderView.WebView

    copy(): void
    /**
     * This function call will disconnect all model signal handlers from the webview, to ensure smooth operation of the Xreader-view.
     * Equivalent to function  ev_view_disconnect_handlers in ev-view.c
     */
    disconnect_handlers(): void
    find_cancel(): void
    find_changed(results: number, text: string | null, case_sensitive: boolean): void
    find_next(): void
    find_previous(): void
    find_search_changed(): void
    find_set_highlight_search(visible: boolean): void
    get_has_selection(): boolean
    handle_link(link: XreaderDocument.Link): void
    next_page(): boolean
    previous_page(): boolean
    reload(): void
    reload_page(page: number): void
    select_all(): void
    set_handler(visible: boolean): void
    set_model(model: DocumentModel): void
    zoom_in(): boolean
    zoom_out(): boolean
    zoom_reset(): boolean

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

    // Class property signals of XreaderView-1.5.XreaderView.WebView

    connect(sigName: "notify::border-width", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebView extends Gtk.Container {

    // Own properties of XreaderView-1.5.XreaderView.WebView

    static name: string
    static $gtype: GObject.GType<WebView>

    // Constructors of XreaderView-1.5.XreaderView.WebView

    constructor(config?: WebView.ConstructorProperties) 
    constructor() 
    static new(): WebView
    _init(config?: WebView.ConstructorProperties): void
}

interface DocumentModelClass {
}

abstract class DocumentModelClass {

    // Own properties of XreaderView-1.5.XreaderView.DocumentModelClass

    static name: string
}

interface JobAnnotsClass {

    // Own fields of XreaderView-1.5.XreaderView.JobAnnotsClass

    parent_class: JobClass
}

abstract class JobAnnotsClass {

    // Own properties of XreaderView-1.5.XreaderView.JobAnnotsClass

    static name: string
}

interface JobAttachmentsClass {

    // Own fields of XreaderView-1.5.XreaderView.JobAttachmentsClass

    parent_class: JobClass
}

abstract class JobAttachmentsClass {

    // Own properties of XreaderView-1.5.XreaderView.JobAttachmentsClass

    static name: string
}

interface JobClass {

    // Own fields of XreaderView-1.5.XreaderView.JobClass

    parent_class: GObject.ObjectClass
    run: (job: Job) => boolean
    cancelled: (job: Job) => void
    finished: (job: Job) => void
}

abstract class JobClass {

    // Own properties of XreaderView-1.5.XreaderView.JobClass

    static name: string
}

interface JobExportClass {

    // Own fields of XreaderView-1.5.XreaderView.JobExportClass

    parent_class: JobClass
}

abstract class JobExportClass {

    // Own properties of XreaderView-1.5.XreaderView.JobExportClass

    static name: string
}

interface JobFindClass {

    // Own fields of XreaderView-1.5.XreaderView.JobFindClass

    parent_class: JobClass
    updated: (job: JobFind, page: number) => void
}

abstract class JobFindClass {

    // Own properties of XreaderView-1.5.XreaderView.JobFindClass

    static name: string
}

interface JobFontsClass {

    // Own fields of XreaderView-1.5.XreaderView.JobFontsClass

    parent_class: JobClass
    updated: (job: JobFonts, progress: number) => void
}

abstract class JobFontsClass {

    // Own properties of XreaderView-1.5.XreaderView.JobFontsClass

    static name: string
}

interface JobLayersClass {

    // Own fields of XreaderView-1.5.XreaderView.JobLayersClass

    parent_class: JobClass
}

abstract class JobLayersClass {

    // Own properties of XreaderView-1.5.XreaderView.JobLayersClass

    static name: string
}

interface JobLinksClass {

    // Own fields of XreaderView-1.5.XreaderView.JobLinksClass

    parent_class: JobClass
}

abstract class JobLinksClass {

    // Own properties of XreaderView-1.5.XreaderView.JobLinksClass

    static name: string
}

interface JobLoadClass {

    // Own fields of XreaderView-1.5.XreaderView.JobLoadClass

    parent_class: JobClass
}

abstract class JobLoadClass {

    // Own properties of XreaderView-1.5.XreaderView.JobLoadClass

    static name: string
}

interface JobPageDataClass {

    // Own fields of XreaderView-1.5.XreaderView.JobPageDataClass

    parent_class: JobClass
}

abstract class JobPageDataClass {

    // Own properties of XreaderView-1.5.XreaderView.JobPageDataClass

    static name: string
}

interface JobPrintClass {

    // Own fields of XreaderView-1.5.XreaderView.JobPrintClass

    parent_class: JobClass
}

abstract class JobPrintClass {

    // Own properties of XreaderView-1.5.XreaderView.JobPrintClass

    static name: string
}

interface JobRenderClass {

    // Own fields of XreaderView-1.5.XreaderView.JobRenderClass

    parent_class: JobClass
}

abstract class JobRenderClass {

    // Own properties of XreaderView-1.5.XreaderView.JobRenderClass

    static name: string
}

interface JobSaveClass {

    // Own fields of XreaderView-1.5.XreaderView.JobSaveClass

    parent_class: JobClass
}

abstract class JobSaveClass {

    // Own properties of XreaderView-1.5.XreaderView.JobSaveClass

    static name: string
}

interface JobThumbnailClass {

    // Own fields of XreaderView-1.5.XreaderView.JobThumbnailClass

    parent_class: JobClass
}

abstract class JobThumbnailClass {

    // Own properties of XreaderView-1.5.XreaderView.JobThumbnailClass

    static name: string
}

interface JobWebThumbnail {
}

class JobWebThumbnail {

    // Own properties of XreaderView-1.5.XreaderView.JobWebThumbnail

    static name: string
}

interface JobWebThumbnailClass {
}

class JobWebThumbnailClass {

    // Own properties of XreaderView-1.5.XreaderView.JobWebThumbnailClass

    static name: string
}

interface PrintOperationClass {
}

abstract class PrintOperationClass {

    // Own properties of XreaderView-1.5.XreaderView.PrintOperationClass

    static name: string
}

interface ViewClass {
}

abstract class ViewClass {

    // Own properties of XreaderView-1.5.XreaderView.ViewClass

    static name: string
}

interface ViewPresentationClass {
}

abstract class ViewPresentationClass {

    // Own properties of XreaderView-1.5.XreaderView.ViewPresentationClass

    static name: string
}

interface WebViewClass {
}

abstract class WebViewClass {

    // Own properties of XreaderView-1.5.XreaderView.WebViewClass

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

export default XreaderView;
// END