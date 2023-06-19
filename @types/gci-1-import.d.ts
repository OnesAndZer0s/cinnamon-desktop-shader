

type GCi1 = typeof import('./gci-1.js').default;

declare global {
    export interface GjsGiImports {
        GCi: GCi1;
    }
}

export default GjsGiImports;


