

type GCalc2 = typeof import('./gcalc-2.js').default;

declare global {
    export interface GjsGiImports {
        GCalc: GCalc2;
    }
}

export default GjsGiImports;


