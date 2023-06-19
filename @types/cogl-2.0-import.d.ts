

type Cogl20 = typeof import('./cogl-2.0.js').default;

declare global {
    export interface GjsGiImports {
        Cogl: Cogl20;
    }
}

export default GjsGiImports;


