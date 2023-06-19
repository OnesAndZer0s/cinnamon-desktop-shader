

type Shell01 = typeof import('./shell-0.1.js').default;

declare global {
    export interface GjsGiImports {
        Shell: Shell01;
    }
}

export default GjsGiImports;


