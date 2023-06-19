

type ClutterGdk10 = typeof import('./cluttergdk-1.0.js').default;

declare global {
    export interface GjsGiImports {
        ClutterGdk: ClutterGdk10;
    }
}

export default GjsGiImports;


