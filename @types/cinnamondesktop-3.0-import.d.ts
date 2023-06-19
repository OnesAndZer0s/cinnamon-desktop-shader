

type CinnamonDesktop30 = typeof import('./cinnamondesktop-3.0.js').default;

declare global {
    export interface GjsGiImports {
        CinnamonDesktop: CinnamonDesktop30;
    }
}

export default GjsGiImports;


