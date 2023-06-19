

type St10 = typeof import('./st-1.0.js').default;

declare global {
    export interface GjsGiImports {
        St: St10;
    }
}

export default GjsGiImports;


