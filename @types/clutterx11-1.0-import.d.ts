

type ClutterX1110 = typeof import('./clutterx11-1.0.js').default;

declare global {
    export interface GjsGiImports {
        ClutterX11: ClutterX1110;
    }
}

export default GjsGiImports;


