
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './fontconfig-2.0-import.d.ts';
/**
 * fontconfig-2.0
 */

import type GObject from './gobject-2.0.js';

export namespace fontconfig {

function init(): void
interface Pattern {
}

class Pattern {

    // Own properties of fontconfig-2.0.fontconfig.Pattern

    static name: string
}

interface CharSet {
}

class CharSet {

    // Own properties of fontconfig-2.0.fontconfig.CharSet

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default fontconfig;
// END