

type CScreensaver10 = typeof import('./cscreensaver-1.0.js').default;

declare global {
    export interface GjsGiImports {
        CScreensaver: CScreensaver10;
    }
}

export default GjsGiImports;


