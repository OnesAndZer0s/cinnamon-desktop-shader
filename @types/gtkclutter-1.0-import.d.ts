

type GtkClutter10 = typeof import('./gtkclutter-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GtkClutter: GtkClutter10;
    }
}

export default GjsGiImports;


