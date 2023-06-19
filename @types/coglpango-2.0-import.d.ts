

type CoglPango20 = typeof import('./coglpango-2.0.js').default;

declare global {
    export interface GjsGiImports {
        CoglPango: CoglPango20;
    }
}

export default GjsGiImports;


