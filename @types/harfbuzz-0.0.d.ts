
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './harfbuzz-0.0-import.d.ts';
/**
 * HarfBuzz-0.0
 */

import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';

export namespace HarfBuzz {

/**
 * The selectors defined for specifying AAT feature settings.
 */
enum aat_layout_feature_selector_t {
    /**
     * Initial, unset feature selector
     */
    INVALID,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC
     */
    ALL_TYPE_FEATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC
     */
    ALL_TYPE_FEATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REQUIRED_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REQUIRED_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    COMMON_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    COMMON_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    RARE_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    RARE_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    LOGOS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    LOGOS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REBUS_PICTURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REBUS_PICTURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    DIPHTHONG_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    DIPHTHONG_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SQUARED_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SQUARED_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    ABBREV_SQUARED_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    ABBREV_SQUARED_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SYMBOL_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SYMBOL_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    CONTEXTUAL_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    CONTEXTUAL_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    HISTORICAL_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    HISTORICAL_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    UNCONNECTED,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    PARTIALLY_CONNECTED,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    CURSIVE,
    /**
     * Deprecated
     */
    UPPER_AND_LOWER_CASE,
    /**
     * Deprecated
     */
    ALL_CAPS,
    /**
     * Deprecated
     */
    ALL_LOWER_CASE,
    /**
     * Deprecated
     */
    SMALL_CAPS,
    /**
     * Deprecated
     */
    INITIAL_CAPS,
    /**
     * Deprecated
     */
    INITIAL_CAPS_AND_SMALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION
     */
    SUBSTITUTE_VERTICAL_FORMS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION
     */
    SUBSTITUTE_VERTICAL_FORMS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT
     */
    LINGUISTIC_REARRANGEMENT_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT
     */
    LINGUISTIC_REARRANGEMENT_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    MONOSPACED_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    PROPORTIONAL_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    THIRD_WIDTH_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    QUARTER_WIDTH_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_INITIAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_INITIAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_FINAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_FINAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_INITIAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_INITIAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_FINAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_FINAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    NON_FINAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    NON_FINAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
     */
    SHOW_DIACRITICS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
     */
    HIDE_DIACRITICS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
     */
    DECOMPOSE_DIACRITICS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    NORMAL_POSITION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    SUPERIORS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    INFERIORS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    ORDINALS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    SCIENTIFIC_INFERIORS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
     */
    NO_FRACTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
     */
    VERTICAL_FRACTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
     */
    DIAGONAL_FRACTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE
     */
    PREVENT_OVERLAP_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE
     */
    PREVENT_OVERLAP_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHENS_TO_EM_DASH_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHENS_TO_EM_DASH_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHEN_TO_EN_DASH_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHEN_TO_EN_DASH_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SLASHED_ZERO_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SLASHED_ZERO_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    FORM_INTERROBANG_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    FORM_INTERROBANG_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SMART_QUOTES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SMART_QUOTES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    PERIODS_TO_ELLIPSIS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    PERIODS_TO_ELLIPSIS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    HYPHEN_TO_MINUS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    HYPHEN_TO_MINUS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    ASTERISK_TO_MULTIPLY_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    ASTERISK_TO_MULTIPLY_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    SLASH_TO_DIVIDE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    SLASH_TO_DIVIDE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    INEQUALITY_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    INEQUALITY_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    EXPONENTS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    EXPONENTS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    MATHEMATICAL_GREEK_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    MATHEMATICAL_GREEK_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    NO_ORNAMENTS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    DINGBATS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    PI_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    FLEURONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    DECORATIVE_BORDERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    INTERNATIONAL_SYMBOLS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    MATH_SYMBOLS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_ALTERNATIVES
     */
    NO_ALTERNATES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL1,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL2,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL3,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL4,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL5,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    NO_STYLE_OPTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    DISPLAY_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    ENGRAVED_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    ILLUMINATED_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    TITLING_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    TALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    SIMPLIFIED_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS1978_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS1983_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS1990_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_FOUR,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_FIVE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    EXPERT_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS2004_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    HOJO_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    NLCCHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_NAMES_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE
     */
    LOWER_CASE_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE
     */
    UPPER_CASE_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    PROPORTIONAL_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    MONOSPACED_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    HALF_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    THIRD_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    QUARTER_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    ALT_PROPORTIONAL_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    ALT_HALF_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    NO_TRANSLITERATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HIRAGANA_TO_KATAKANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    KATAKANA_TO_HIRAGANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    KANA_TO_ROMANIZATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    ROMANIZATION_TO_HIRAGANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    ROMANIZATION_TO_KATAKANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    NO_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    ROUNDED_BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    CIRCLE_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    INVERTED_CIRCLE_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    PARENTHESIS_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    PERIOD_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    ROMAN_NUMERAL_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    DIAMOND_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    INVERTED_BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    INVERTED_ROUNDED_BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE
     */
    FULL_WIDTH_KANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE
     */
    PROPORTIONAL_KANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
     */
    FULL_WIDTH_IDEOGRAPHS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
     */
    PROPORTIONAL_IDEOGRAPHS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
     */
    HALF_WIDTH_IDEOGRAPHS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    CANONICAL_COMPOSITION_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    CANONICAL_COMPOSITION_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    COMPATIBILITY_COMPOSITION_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    COMPATIBILITY_COMPOSITION_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    TRANSCODING_COMPOSITION_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    TRANSCODING_COMPOSITION_OFF,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_OFF instead
     */
    NO_RUBY_KANA,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_ON instead
     */
    RUBY_KANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA
     */
    RUBY_KANA_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA
     */
    RUBY_KANA_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    NO_CJK_SYMBOL_ALTERNATIVES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_FOUR,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_FIVE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    NO_IDEOGRAPHIC_ALTERNATIVES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_FOUR,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_FIVE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE
     */
    CJK_VERTICAL_ROMAN_CENTERED,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE
     */
    CJK_VERTICAL_ROMAN_HBASELINE,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_OFF instead
     */
    NO_CJK_ITALIC_ROMAN,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_ON instead
     */
    CJK_ITALIC_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN
     */
    CJK_ITALIC_ROMAN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN
     */
    CJK_ITALIC_ROMAN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_LAYOUT_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_LAYOUT_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_SPACING_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_SPACING_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_HORIZ_KANA_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_HORIZ_KANA_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_VERT_KANA_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_VERT_KANA_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    NO_STYLISTIC_ALTERNATES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ONE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ONE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWO_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWO_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THREE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THREE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOUR_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOUR_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIVE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIVE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIX_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIX_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHT_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHT_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ELEVEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ELEVEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWELVE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWELVE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THIRTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THIRTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOURTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOURTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIFTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIFTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIXTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIXTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVENTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVENTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINETEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINETEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWENTY_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWENTY_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_ALTERNATES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_ALTERNATES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    SWASH_ALTERNATES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    SWASH_ALTERNATES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_SWASH_ALTERNATES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_SWASH_ALTERNATES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
     */
    DEFAULT_LOWER_CASE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
     */
    LOWER_CASE_SMALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
     */
    LOWER_CASE_PETITE_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
     */
    DEFAULT_UPPER_CASE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
     */
    UPPER_CASE_SMALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
     */
    UPPER_CASE_PETITE_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    HALF_WIDTH_CJK_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    PROPORTIONAL_CJK_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    DEFAULT_CJK_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    FULL_WIDTH_CJK_ROMAN,
}
/**
 * The possible feature types defined for AAT shaping.
 */
enum aat_layout_feature_type_t {
    /**
     * Initial, unset feature type
     */
    INVALID,
    ALL_TYPOGRAPHIC,
    LIGATURES,
    CURISVE_CONNECTION,
    LETTER_CASE,
    VERTICAL_SUBSTITUTION,
    LINGUISTIC_REARRANGEMENT,
    NUMBER_SPACING,
    SMART_SWASH_TYPE,
    DIACRITICS_TYPE,
    VERTICAL_POSITION,
    FRACTIONS,
    OVERLAPPING_CHARACTERS_TYPE,
    TYPOGRAPHIC_EXTRAS,
    MATHEMATICAL_EXTRAS,
    ORNAMENT_SETS_TYPE,
    CHARACTER_ALTERNATIVES,
    DESIGN_COMPLEXITY_TYPE,
    STYLE_OPTIONS,
    CHARACTER_SHAPE,
    NUMBER_CASE,
    TEXT_SPACING,
    TRANSLITERATION,
    ANNOTATION_TYPE,
    KANA_SPACING_TYPE,
    IDEOGRAPHIC_SPACING_TYPE,
    UNICODE_DECOMPOSITION_TYPE,
    RUBY_KANA,
    CJK_SYMBOL_ALTERNATIVES_TYPE,
    IDEOGRAPHIC_ALTERNATIVES_TYPE,
    CJK_VERTICAL_ROMAN_PLACEMENT_TYPE,
    ITALIC_CJK_ROMAN,
    CASE_SENSITIVE_LAYOUT,
    ALTERNATE_KANA,
    STYLISTIC_ALTERNATIVES,
    CONTEXTUAL_ALTERNATIVES,
    LOWER_CASE,
    UPPER_CASE,
    LANGUAGE_TAG_TYPE,
    CJK_ROMAN_SPACING_TYPE,
}
/**
 * Data type for holding HarfBuzz's clustering behavior options. The cluster level
 * dictates one aspect of how HarfBuzz will treat non-base characters
 * during shaping.
 * 
 * In `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES,` non-base
 * characters are merged into the cluster of the base character that precedes them.
 * 
 * In `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_CHARACTERS,` non-base characters are initially
 * assigned their own cluster values, which are not merged into preceding base
 * clusters. This allows HarfBuzz to perform additional operations like reorder
 * sequences of adjacent marks.
 * 
 * `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES` is the default, because it maintains
 * backward compatibility with older versions of HarfBuzz. New client programs that
 * do not need to maintain such backward compatibility are recommended to use
 * `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_CHARACTERS` instead of the default.
 */
enum buffer_cluster_level_t {
    /**
     * Return cluster values grouped by graphemes into
     *   monotone order.
     */
    MONOTONE_GRAPHEMES,
    /**
     * Return cluster values grouped into monotone order.
     */
    MONOTONE_CHARACTERS,
    /**
     * Don't group cluster values.
     */
    CHARACTERS,
    /**
     * Default cluster level,
     *   equal to `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES`.
     */
    DEFAULT,
}
enum buffer_content_type_t {
    /**
     * Initial value for new buffer.
     */
    INVALID,
    /**
     * The buffer contains input characters (before shaping).
     */
    UNICODE,
    /**
     * The buffer contains output glyphs (after shaping).
     */
    GLYPHS,
}
/**
 * The buffer serialization and de-serialization format used in
 * hb_buffer_serialize_glyphs() and hb_buffer_deserialize_glyphs().
 */
enum buffer_serialize_format_t {
    /**
     * a human-readable, plain text format.
     */
    TEXT,
    /**
     * a machine-readable JSON format.
     */
    JSON,
    /**
     * invalid format.
     */
    INVALID,
}
/**
 * The direction of a text segment or buffer.
 * 
 * A segment can also be tested for horizontal or vertical
 * orientation (irrespective of specific direction) with
 * HB_DIRECTION_IS_HORIZONTAL() or HB_DIRECTION_IS_VERTICAL().
 */
enum direction_t {
    /**
     * Initial, unset direction.
     */
    INVALID,
    /**
     * Text is set horizontally from left to right.
     */
    LTR,
    /**
     * Text is set horizontally from right to left.
     */
    RTL,
    /**
     * Text is set vertically from top to bottom.
     */
    TTB,
    /**
     * Text is set vertically from bottom to top.
     */
    BTT,
}
/**
 * `HB_MEMORY_MODE_DUPLICATE`
 * `HB_MEMORY_MODE_READONLY`
 * `HB_MEMORY_MODE_WRITABLE`
 * `HB_MEMORY_MODE_READONLY_MAY_MAKE_WRITABLE`
 * Data type holding the memory modes available to
 * client programs.
 * 
 * Regarding these various memory-modes:
 * 
 * - In no case shall the HarfBuzz client modify memory
 *   that is passed to HarfBuzz in a blob.  If there is
 *   any such possibility, `HB_MEMORY_MODE_DUPLICATE` should be used
 *   such that HarfBuzz makes a copy immediately,
 * 
 * - Use `HB_MEMORY_MODE_READONLY` otherwise, unless you really really
 *   really know what you are doing,
 * 
 * - `HB_MEMORY_MODE_WRITABLE` is appropriate if you really made a
 *   copy of data solely for the purpose of passing to
 *   HarfBuzz and doing that just once (no reuse!),
 * 
 * - If the font is mmap()ed, it's okay to use
 *   `HB_MEMORY_READONLY_MAY_MAKE_WRITABLE,` however, using that mode
 *   correctly is very tricky.  Use `HB_MEMORY_MODE_READONLY` instead.
 */
enum memory_mode_t {
    DUPLICATE,
    READONLY,
    WRITABLE,
    READONLY_MAY_MAKE_WRITABLE,
}
/**
 * Baseline tags from https://docs.microsoft.com/en-us/typography/opentype/spec/baselinetags
 */
enum ot_layout_baseline_tag_t {
    /**
     * The baseline used by alphabetic scripts such as Latin, Cyrillic and Greek.
     * In vertical writing mode, the alphabetic baseline for characters rotated 90 degrees clockwise.
     * (This would not apply to alphabetic characters that remain upright in vertical writing mode, since these
     * characters are not rotated.)
     */
    ROMAN,
    /**
     * The hanging baseline. In horizontal direction, this is the horizontal
     * line from which syllables seem, to hang in Tibetan and other similar scripts. In vertical writing mode,
     * for Tibetan (or some other similar script) characters rotated 90 degrees clockwise.
     */
    HANGING,
    /**
     * Ideographic character face bottom or left edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_FACE_BOTTOM_OR_LEFT,
    /**
     * Ideographic character face top or right edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_FACE_TOP_OR_RIGHT,
    /**
     * Ideographic em-box bottom or left edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_EMBOX_BOTTOM_OR_LEFT,
    /**
     * Ideographic em-box top or right edge baseline,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_EMBOX_TOP_OR_RIGHT,
    /**
     * The baseline about which mathematical characters are centered.
     * In vertical writing mode when mathematical characters rotated 90 degrees clockwise, are centered.
     */
    MATH,
}
/**
 * The GDEF classes defined for glyphs.
 */
enum ot_layout_glyph_class_t {
    /**
     * Glyphs not matching the other classifications
     */
    UNCLASSIFIED,
    /**
     * Spacing, single characters, capable of accepting marks
     */
    BASE_GLYPH,
    /**
     * Glyphs that represent ligation of multiple characters
     */
    LIGATURE,
    /**
     * Non-spacing, combining glyphs that represent marks
     */
    MARK,
    /**
     * Spacing glyphs that represent part of a single character
     */
    COMPONENT,
}
/**
 * The 'MATH' table constants specified at
 * https://docs.microsoft.com/en-us/typography/opentype/spec/math
 */
enum ot_math_constant_t {
    SCRIPT_PERCENT_SCALE_DOWN,
    SCRIPT_SCRIPT_PERCENT_SCALE_DOWN,
    DELIMITED_SUB_FORMULA_MIN_HEIGHT,
    DISPLAY_OPERATOR_MIN_HEIGHT,
    MATH_LEADING,
    AXIS_HEIGHT,
    ACCENT_BASE_HEIGHT,
    FLATTENED_ACCENT_BASE_HEIGHT,
    SUBSCRIPT_SHIFT_DOWN,
    SUBSCRIPT_TOP_MAX,
    SUBSCRIPT_BASELINE_DROP_MIN,
    SUPERSCRIPT_SHIFT_UP,
    SUPERSCRIPT_SHIFT_UP_CRAMPED,
    SUPERSCRIPT_BOTTOM_MIN,
    SUPERSCRIPT_BASELINE_DROP_MAX,
    SUB_SUPERSCRIPT_GAP_MIN,
    SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT,
    SPACE_AFTER_SCRIPT,
    UPPER_LIMIT_GAP_MIN,
    UPPER_LIMIT_BASELINE_RISE_MIN,
    LOWER_LIMIT_GAP_MIN,
    LOWER_LIMIT_BASELINE_DROP_MIN,
    STACK_TOP_SHIFT_UP,
    STACK_TOP_DISPLAY_STYLE_SHIFT_UP,
    STACK_BOTTOM_SHIFT_DOWN,
    STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN,
    STACK_GAP_MIN,
    STACK_DISPLAY_STYLE_GAP_MIN,
    STRETCH_STACK_TOP_SHIFT_UP,
    STRETCH_STACK_BOTTOM_SHIFT_DOWN,
    STRETCH_STACK_GAP_ABOVE_MIN,
    STRETCH_STACK_GAP_BELOW_MIN,
    FRACTION_NUMERATOR_SHIFT_UP,
    FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP,
    FRACTION_DENOMINATOR_SHIFT_DOWN,
    FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN,
    FRACTION_NUMERATOR_GAP_MIN,
    FRACTION_NUM_DISPLAY_STYLE_GAP_MIN,
    FRACTION_RULE_THICKNESS,
    FRACTION_DENOMINATOR_GAP_MIN,
    FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN,
    SKEWED_FRACTION_HORIZONTAL_GAP,
    SKEWED_FRACTION_VERTICAL_GAP,
    OVERBAR_VERTICAL_GAP,
    OVERBAR_RULE_THICKNESS,
    OVERBAR_EXTRA_ASCENDER,
    UNDERBAR_VERTICAL_GAP,
    UNDERBAR_RULE_THICKNESS,
    UNDERBAR_EXTRA_DESCENDER,
    RADICAL_VERTICAL_GAP,
    RADICAL_DISPLAY_STYLE_VERTICAL_GAP,
    RADICAL_RULE_THICKNESS,
    RADICAL_EXTRA_ASCENDER,
    RADICAL_KERN_BEFORE_DEGREE,
    RADICAL_KERN_AFTER_DEGREE,
    RADICAL_DEGREE_BOTTOM_RAISE_PERCENT,
}
/**
 * The math kerning-table types defined for the four corners
 * of a glyph.
 */
enum ot_math_kern_t {
    TOP_RIGHT,
    TOP_LEFT,
    BOTTOM_RIGHT,
    BOTTOM_LEFT,
}
/**
 * Known metadata tags from https://docs.microsoft.com/en-us/typography/opentype/spec/meta
 */
enum ot_meta_tag_t {
    /**
     * Design languages. Text, using only
     * Basic Latin (ASCII) characters. Indicates languages and/or scripts
     * for the user audiences that the font was primarily designed for.
     */
    DESIGN_LANGUAGES,
    /**
     * Supported languages. Text, using
     * only Basic Latin (ASCII) characters. Indicates languages and/or scripts
     * that the font is declared to be capable of supporting.
     */
    SUPPORTED_LANGUAGES,
}
/**
 * From https://docs.microsoft.com/en-us/typography/opentype/spec/mvar#value-tags
 */
enum ot_metrics_tag_t {
    /**
     * horizontal ascender.
     */
    HORIZONTAL_ASCENDER,
    /**
     * horizontal descender.
     */
    HORIZONTAL_DESCENDER,
    /**
     * horizontal line gap.
     */
    HORIZONTAL_LINE_GAP,
    /**
     * horizontal clipping ascent.
     */
    HORIZONTAL_CLIPPING_ASCENT,
    /**
     * horizontal clipping descent.
     */
    HORIZONTAL_CLIPPING_DESCENT,
    /**
     * vertical ascender.
     */
    VERTICAL_ASCENDER,
    /**
     * vertical descender.
     */
    VERTICAL_DESCENDER,
    /**
     * vertical line gap.
     */
    VERTICAL_LINE_GAP,
    /**
     * horizontal caret rise.
     */
    HORIZONTAL_CARET_RISE,
    /**
     * horizontal caret run.
     */
    HORIZONTAL_CARET_RUN,
    /**
     * horizontal caret offset.
     */
    HORIZONTAL_CARET_OFFSET,
    /**
     * vertical caret rise.
     */
    VERTICAL_CARET_RISE,
    /**
     * vertical caret run.
     */
    VERTICAL_CARET_RUN,
    /**
     * vertical caret offset.
     */
    VERTICAL_CARET_OFFSET,
    /**
     * x height.
     */
    X_HEIGHT,
    /**
     * cap height.
     */
    CAP_HEIGHT,
    /**
     * subscript em x size.
     */
    SUBSCRIPT_EM_X_SIZE,
    /**
     * subscript em y size.
     */
    SUBSCRIPT_EM_Y_SIZE,
    /**
     * subscript em x offset.
     */
    SUBSCRIPT_EM_X_OFFSET,
    /**
     * subscript em y offset.
     */
    SUBSCRIPT_EM_Y_OFFSET,
    /**
     * superscript em x size.
     */
    SUPERSCRIPT_EM_X_SIZE,
    /**
     * superscript em y size.
     */
    SUPERSCRIPT_EM_Y_SIZE,
    /**
     * superscript em x offset.
     */
    SUPERSCRIPT_EM_X_OFFSET,
    /**
     * superscript em y offset.
     */
    SUPERSCRIPT_EM_Y_OFFSET,
    /**
     * strikeout size.
     */
    STRIKEOUT_SIZE,
    /**
     * strikeout offset.
     */
    STRIKEOUT_OFFSET,
    /**
     * underline size.
     */
    UNDERLINE_SIZE,
    /**
     * underline offset.
     */
    UNDERLINE_OFFSET,
}
/**
 * Data type for scripts. Each #hb_script_t's value is an #hb_tag_t corresponding
 * to the four-letter values defined by [ISO 15924](https://unicode.org/iso15924/).
 * 
 * See also the Script (sc) property of the Unicode Character Database.
 */
enum script_t {
    /**
     * HB_TAG ('Z','y','y','y')
     */
    COMMON,
    /**
     * HB_TAG ('Z','i','n','h')
     */
    INHERITED,
    /**
     * HB_TAG ('Z','z','z','z')
     * `HB_SCRIPT_ARABIC`
     * `HB_SCRIPT_ARMENIAN`
     * `HB_SCRIPT_BENGALI`
     * `HB_SCRIPT_CYRILLIC`
     * `HB_SCRIPT_DEVANAGARI`
     * `HB_SCRIPT_GEORGIAN`
     * `HB_SCRIPT_GREEK`
     * `HB_SCRIPT_GUJARATI`
     * `HB_SCRIPT_GURMUKHI`
     * `HB_SCRIPT_HANGUL`
     * `HB_SCRIPT_HAN`
     * `HB_SCRIPT_HEBREW`
     * `HB_SCRIPT_HIRAGANA`
     * `HB_SCRIPT_KANNADA`
     * `HB_SCRIPT_KATAKANA`
     * `HB_SCRIPT_LAO`
     * `HB_SCRIPT_LATIN`
     * `HB_SCRIPT_MALAYALAM`
     * `HB_SCRIPT_ORIYA`
     * `HB_SCRIPT_TAMIL`
     * `HB_SCRIPT_TELUGU`
     * `HB_SCRIPT_THAI`
     * `HB_SCRIPT_TIBETAN`
     * `HB_SCRIPT_BOPOMOFO`
     * `HB_SCRIPT_BRAILLE`
     * `HB_SCRIPT_CANADIAN_SYLLABICS`
     * `HB_SCRIPT_CHEROKEE`
     * `HB_SCRIPT_ETHIOPIC`
     * `HB_SCRIPT_KHMER`
     * `HB_SCRIPT_MONGOLIAN`
     * `HB_SCRIPT_MYANMAR`
     * `HB_SCRIPT_OGHAM`
     * `HB_SCRIPT_RUNIC`
     * `HB_SCRIPT_SINHALA`
     * `HB_SCRIPT_SYRIAC`
     * `HB_SCRIPT_THAANA`
     * `HB_SCRIPT_YI`
     * `HB_SCRIPT_DESERET`
     * `HB_SCRIPT_GOTHIC`
     * `HB_SCRIPT_OLD_ITALIC`
     * `HB_SCRIPT_BUHID`
     * `HB_SCRIPT_HANUNOO`
     * `HB_SCRIPT_TAGALOG`
     * `HB_SCRIPT_TAGBANWA`
     * `HB_SCRIPT_CYPRIOT`
     * `HB_SCRIPT_LIMBU`
     * `HB_SCRIPT_LINEAR_B`
     * `HB_SCRIPT_OSMANYA`
     * `HB_SCRIPT_SHAVIAN`
     * `HB_SCRIPT_TAI_LE`
     * `HB_SCRIPT_UGARITIC`
     * `HB_SCRIPT_BUGINESE`
     * `HB_SCRIPT_COPTIC`
     * `HB_SCRIPT_GLAGOLITIC`
     * `HB_SCRIPT_KHAROSHTHI`
     * `HB_SCRIPT_NEW_TAI_LUE`
     * `HB_SCRIPT_OLD_PERSIAN`
     * `HB_SCRIPT_SYLOTI_NAGRI`
     * `HB_SCRIPT_TIFINAGH`
     * `HB_SCRIPT_BALINESE`
     * `HB_SCRIPT_CUNEIFORM`
     * `HB_SCRIPT_NKO`
     * `HB_SCRIPT_PHAGS_PA`
     * `HB_SCRIPT_PHOENICIAN`
     * `HB_SCRIPT_CARIAN`
     * `HB_SCRIPT_CHAM`
     * `HB_SCRIPT_KAYAH_LI`
     * `HB_SCRIPT_LEPCHA`
     * `HB_SCRIPT_LYCIAN`
     * `HB_SCRIPT_LYDIAN`
     * `HB_SCRIPT_OL_CHIKI`
     * `HB_SCRIPT_REJANG`
     * `HB_SCRIPT_SAURASHTRA`
     * `HB_SCRIPT_SUNDANESE`
     * `HB_SCRIPT_VAI`
     * `HB_SCRIPT_AVESTAN`
     * `HB_SCRIPT_BAMUM`
     * `HB_SCRIPT_EGYPTIAN_HIEROGLYPHS`
     * `HB_SCRIPT_IMPERIAL_ARAMAIC`
     * `HB_SCRIPT_INSCRIPTIONAL_PAHLAVI`
     * `HB_SCRIPT_INSCRIPTIONAL_PARTHIAN`
     * `HB_SCRIPT_JAVANESE`
     * `HB_SCRIPT_KAITHI`
     * `HB_SCRIPT_LISU`
     * `HB_SCRIPT_MEETEI_MAYEK`
     * `HB_SCRIPT_OLD_SOUTH_ARABIAN`
     * `HB_SCRIPT_OLD_TURKIC`
     * `HB_SCRIPT_SAMARITAN`
     * `HB_SCRIPT_TAI_THAM`
     * `HB_SCRIPT_TAI_VIET`
     * `HB_SCRIPT_BATAK`
     * `HB_SCRIPT_BRAHMI`
     * `HB_SCRIPT_MANDAIC`
     * `HB_SCRIPT_CHAKMA`
     * `HB_SCRIPT_MEROITIC_CURSIVE`
     * `HB_SCRIPT_MEROITIC_HIEROGLYPHS`
     * `HB_SCRIPT_MIAO`
     * `HB_SCRIPT_SHARADA`
     * `HB_SCRIPT_SORA_SOMPENG`
     * `HB_SCRIPT_TAKRI`
     * `HB_SCRIPT_BASSA_VAH`
     * `HB_SCRIPT_CAUCASIAN_ALBANIAN`
     * `HB_SCRIPT_DUPLOYAN`
     * `HB_SCRIPT_ELBASAN`
     * `HB_SCRIPT_GRANTHA`
     * `HB_SCRIPT_KHOJKI`
     * `HB_SCRIPT_KHUDAWADI`
     * `HB_SCRIPT_LINEAR_A`
     * `HB_SCRIPT_MAHAJANI`
     * `HB_SCRIPT_MANICHAEAN`
     * `HB_SCRIPT_MENDE_KIKAKUI`
     * `HB_SCRIPT_MODI`
     * `HB_SCRIPT_MRO`
     * `HB_SCRIPT_NABATAEAN`
     * `HB_SCRIPT_OLD_NORTH_ARABIAN`
     * `HB_SCRIPT_OLD_PERMIC`
     * `HB_SCRIPT_PAHAWH_HMONG`
     * `HB_SCRIPT_PALMYRENE`
     * `HB_SCRIPT_PAU_CIN_HAU`
     * `HB_SCRIPT_PSALTER_PAHLAVI`
     * `HB_SCRIPT_SIDDHAM`
     * `HB_SCRIPT_TIRHUTA`
     * `HB_SCRIPT_WARANG_CITI`
     * `HB_SCRIPT_AHOM`
     * `HB_SCRIPT_ANATOLIAN_HIEROGLYPHS`
     * `HB_SCRIPT_HATRAN`
     * `HB_SCRIPT_MULTANI`
     * `HB_SCRIPT_OLD_HUNGARIAN`
     * `HB_SCRIPT_SIGNWRITING`
     * `HB_SCRIPT_ADLAM`
     * `HB_SCRIPT_BHAIKSUKI`
     * `HB_SCRIPT_MARCHEN`
     * `HB_SCRIPT_OSAGE`
     * `HB_SCRIPT_TANGUT`
     * `HB_SCRIPT_NEWA`
     * `HB_SCRIPT_MASARAM_GONDI`
     * `HB_SCRIPT_NUSHU`
     * `HB_SCRIPT_SOYOMBO`
     * `HB_SCRIPT_ZANABAZAR_SQUARE`
     * `HB_SCRIPT_DOGRA`
     * `HB_SCRIPT_GUNJALA_GONDI`
     * `HB_SCRIPT_HANIFI_ROHINGYA`
     * `HB_SCRIPT_MAKASAR`
     * `HB_SCRIPT_MEDEFAIDRIN`
     * `HB_SCRIPT_OLD_SOGDIAN`
     * `HB_SCRIPT_SOGDIAN`
     * `HB_SCRIPT_ELYMAIC`
     * `HB_SCRIPT_NANDINAGARI`
     * `HB_SCRIPT_NYIAKENG_PUACHUE_HMONG`
     * `HB_SCRIPT_WANCHO`
     */
    UNKNOWN,
    ARABIC,
    ARMENIAN,
    BENGALI,
    CYRILLIC,
    DEVANAGARI,
    GEORGIAN,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HANGUL,
    HAN,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    LAO,
    LATIN,
    MALAYALAM,
    ORIYA,
    TAMIL,
    TELUGU,
    THAI,
    TIBETAN,
    BOPOMOFO,
    BRAILLE,
    CANADIAN_SYLLABICS,
    CHEROKEE,
    ETHIOPIC,
    KHMER,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    RUNIC,
    SINHALA,
    SYRIAC,
    THAANA,
    YI,
    DESERET,
    GOTHIC,
    OLD_ITALIC,
    BUHID,
    HANUNOO,
    TAGALOG,
    TAGBANWA,
    CYPRIOT,
    LIMBU,
    LINEAR_B,
    OSMANYA,
    SHAVIAN,
    TAI_LE,
    UGARITIC,
    BUGINESE,
    COPTIC,
    GLAGOLITIC,
    KHAROSHTHI,
    NEW_TAI_LUE,
    OLD_PERSIAN,
    SYLOTI_NAGRI,
    TIFINAGH,
    BALINESE,
    CUNEIFORM,
    NKO,
    PHAGS_PA,
    PHOENICIAN,
    CARIAN,
    CHAM,
    KAYAH_LI,
    LEPCHA,
    LYCIAN,
    LYDIAN,
    OL_CHIKI,
    REJANG,
    SAURASHTRA,
    SUNDANESE,
    VAI,
    AVESTAN,
    BAMUM,
    EGYPTIAN_HIEROGLYPHS,
    IMPERIAL_ARAMAIC,
    INSCRIPTIONAL_PAHLAVI,
    INSCRIPTIONAL_PARTHIAN,
    JAVANESE,
    KAITHI,
    LISU,
    MEETEI_MAYEK,
    OLD_SOUTH_ARABIAN,
    OLD_TURKIC,
    SAMARITAN,
    TAI_THAM,
    TAI_VIET,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
    ADLAM,
    BHAIKSUKI,
    MARCHEN,
    OSAGE,
    TANGUT,
    NEWA,
    MASARAM_GONDI,
    NUSHU,
    SOYOMBO,
    ZANABAZAR_SQUARE,
    DOGRA,
    GUNJALA_GONDI,
    HANIFI_ROHINGYA,
    MAKASAR,
    MEDEFAIDRIN,
    OLD_SOGDIAN,
    SOGDIAN,
    ELYMAIC,
    NANDINAGARI,
    NYIAKENG_PUACHUE_HMONG,
    WANCHO,
    CHORASMIAN,
    DIVES_AKURU,
    KHITAN_SMALL_SCRIPT,
    YEZIDI,
    /**
     * #HB_TAG_NONE
     */
    INVALID,
}
/**
 * Data type for the Canonical_Combining_Class (ccc) property
 * from the Unicode Character Database.
 * 
 * <note>Note: newer versions of Unicode may add new values.
 * Client programs should be ready to handle any value in the 0..254 range
 * being returned from hb_unicode_combining_class().</note>
 */
enum unicode_combining_class_t {
    /**
     * Spacing and enclosing marks; also many vowel and consonant signs, even if nonspacing
     */
    NOT_REORDERED,
    /**
     * Marks which overlay a base letter or symbol
     */
    OVERLAY,
    /**
     * Diacritic nukta marks in Brahmi-derived scripts
     */
    NUKTA,
    /**
     * Hiragana/Katakana voicing marks
     */
    KANA_VOICING,
    /**
     * Viramas
     */
    VIRAMA,
    /**
     * [Hebrew]
     */
    CCC10,
    /**
     * [Hebrew]
     */
    CCC11,
    /**
     * [Hebrew]
     */
    CCC12,
    /**
     * [Hebrew]
     */
    CCC13,
    /**
     * [Hebrew]
     */
    CCC14,
    /**
     * [Hebrew]
     */
    CCC15,
    /**
     * [Hebrew]
     */
    CCC16,
    /**
     * [Hebrew]
     */
    CCC17,
    /**
     * [Hebrew]
     */
    CCC18,
    /**
     * [Hebrew]
     */
    CCC19,
    /**
     * [Hebrew]
     */
    CCC20,
    /**
     * [Hebrew]
     */
    CCC21,
    /**
     * [Hebrew]
     */
    CCC22,
    /**
     * [Hebrew]
     */
    CCC23,
    /**
     * [Hebrew]
     */
    CCC24,
    /**
     * [Hebrew]
     */
    CCC25,
    /**
     * [Hebrew]
     */
    CCC26,
    /**
     * [Arabic]
     */
    CCC27,
    /**
     * [Arabic]
     */
    CCC28,
    /**
     * [Arabic]
     */
    CCC29,
    /**
     * [Arabic]
     */
    CCC30,
    /**
     * [Arabic]
     */
    CCC31,
    /**
     * [Arabic]
     */
    CCC32,
    /**
     * [Arabic]
     */
    CCC33,
    /**
     * [Arabic]
     */
    CCC34,
    /**
     * [Arabic]
     */
    CCC35,
    /**
     * [Syriac]
     */
    CCC36,
    /**
     * [Telugu]
     */
    CCC84,
    /**
     * [Telugu]
     */
    CCC91,
    /**
     * [Thai]
     */
    CCC103,
    /**
     * [Thai]
     */
    CCC107,
    /**
     * [Lao]
     */
    CCC118,
    /**
     * [Lao]
     */
    CCC122,
    /**
     * [Tibetan]
     */
    CCC129,
    /**
     * [Tibetan]
     */
    CCC130,
    /**
     * [Tibetan]
     */
    CCC133,
    /**
     * Marks attached at the bottom left
     */
    ATTACHED_BELOW_LEFT,
    /**
     * Marks attached directly below
     */
    ATTACHED_BELOW,
    /**
     * Marks attached directly above
     */
    ATTACHED_ABOVE,
    /**
     * Marks attached at the top right
     */
    ATTACHED_ABOVE_RIGHT,
    /**
     * Distinct marks at the bottom left
     */
    BELOW_LEFT,
    /**
     * Distinct marks directly below
     */
    BELOW,
    /**
     * Distinct marks at the bottom right
     */
    BELOW_RIGHT,
    /**
     * Distinct marks to the left
     */
    LEFT,
    /**
     * Distinct marks to the right
     */
    RIGHT,
    /**
     * Distinct marks at the top left
     */
    ABOVE_LEFT,
    /**
     * Distinct marks directly above
     */
    ABOVE,
    /**
     * Distinct marks at the top right
     */
    ABOVE_RIGHT,
    /**
     * Distinct marks subtending two bases
     */
    DOUBLE_BELOW,
    /**
     * Distinct marks extending above two bases
     */
    DOUBLE_ABOVE,
    /**
     * Greek iota subscript only
     */
    IOTA_SUBSCRIPT,
    /**
     * Invalid combining class
     */
    INVALID,
}
/**
 * Data type for the "General_Category" (gc) property from
 * the Unicode Character Database.
 */
enum unicode_general_category_t {
    /**
     * [Cc]
     */
    CONTROL,
    /**
     * [Cf]
     */
    FORMAT,
    /**
     * [Cn]
     */
    UNASSIGNED,
    /**
     * [Co]
     */
    PRIVATE_USE,
    /**
     * [Cs]
     */
    SURROGATE,
    /**
     * [Ll]
     */
    LOWERCASE_LETTER,
    /**
     * [Lm]
     */
    MODIFIER_LETTER,
    /**
     * [Lo]
     */
    OTHER_LETTER,
    /**
     * [Lt]
     */
    TITLECASE_LETTER,
    /**
     * [Lu]
     */
    UPPERCASE_LETTER,
    /**
     * [Mc]
     */
    SPACING_MARK,
    /**
     * [Me]
     */
    ENCLOSING_MARK,
    /**
     * [Mn]
     */
    NON_SPACING_MARK,
    /**
     * [Nd]
     */
    DECIMAL_NUMBER,
    /**
     * [Nl]
     */
    LETTER_NUMBER,
    /**
     * [No]
     */
    OTHER_NUMBER,
    /**
     * [Pc]
     */
    CONNECT_PUNCTUATION,
    /**
     * [Pd]
     */
    DASH_PUNCTUATION,
    /**
     * [Pe]
     */
    CLOSE_PUNCTUATION,
    /**
     * [Pf]
     */
    FINAL_PUNCTUATION,
    /**
     * [Pi]
     */
    INITIAL_PUNCTUATION,
    /**
     * [Po]
     */
    OTHER_PUNCTUATION,
    /**
     * [Ps]
     */
    OPEN_PUNCTUATION,
    /**
     * [Sc]
     */
    CURRENCY_SYMBOL,
    /**
     * [Sk]
     */
    MODIFIER_SYMBOL,
    /**
     * [Sm]
     */
    MATH_SYMBOL,
    /**
     * [So]
     */
    OTHER_SYMBOL,
    /**
     * [Zl]
     */
    LINE_SEPARATOR,
    /**
     * [Zp]
     */
    PARAGRAPH_SEPARATOR,
    /**
     * [Zs]
     */
    SPACE_SEPARATOR,
}
enum buffer_diff_flags_t {
    EQUAL,
    CONTENT_TYPE_MISMATCH,
    LENGTH_MISMATCH,
    NOTDEF_PRESENT,
    DOTTED_CIRCLE_PRESENT,
    CODEPOINT_MISMATCH,
    CLUSTER_MISMATCH,
    GLYPH_FLAGS_MISMATCH,
    POSITION_MISMATCH,
}
enum buffer_flags_t {
    /**
     * the default buffer flag.
     */
    DEFAULT,
    /**
     * flag indicating that special handling of the beginning
     *                      of text paragraph can be applied to this buffer. Should usually
     *                      be set, unless you are passing to the buffer only part
     *                      of the text without the full context.
     */
    BOT,
    /**
     * flag indicating that special handling of the end of text
     *                      paragraph can be applied to this buffer, similar to
     *                      `HB_BUFFER_FLAG_BOT`.
     */
    EOT,
    /**
     * flag indication that character with Default_Ignorable
     *                      Unicode property should use the corresponding glyph
     *                      from the font, instead of hiding them (done by
     *                      replacing them with the space glyph and zeroing the
     *                      advance width.)  This flag takes precedence over
     *                      `HB_BUFFER_FLAG_REMOVE_DEFAULT_IGNORABLES`.
     */
    PRESERVE_DEFAULT_IGNORABLES,
    /**
     * flag indication that character with Default_Ignorable
     *                      Unicode property should be removed from glyph string
     *                      instead of hiding them (done by replacing them with the
     *                      space glyph and zeroing the advance width.)
     *                      `HB_BUFFER_FLAG_PRESERVE_DEFAULT_IGNORABLES` takes
     *                      precedence over this flag. Since: 1.8.0
     */
    REMOVE_DEFAULT_IGNORABLES,
    /**
     * flag indicating that a dotted circle should
     *                      not be inserted in the rendering of incorrect
     *                      character sequences (such at <0905 093E>). Since: 2.4
     */
    DO_NOT_INSERT_DOTTED_CIRCLE,
}
/**
 * Flags that control what glyph information are serialized in hb_buffer_serialize_glyphs().
 * @bitfield 
 */
enum buffer_serialize_flags_t {
    /**
     * serialize glyph names, clusters and positions.
     */
    DEFAULT,
    /**
     * do not serialize glyph cluster.
     */
    NO_CLUSTERS,
    /**
     * do not serialize glyph position information.
     */
    NO_POSITIONS,
    /**
     * do no serialize glyph name.
     */
    NO_GLYPH_NAMES,
    /**
     * serialize glyph extents.
     */
    GLYPH_EXTENTS,
    /**
     * serialize glyph flags. Since: 1.5.0
     */
    GLYPH_FLAGS,
    /**
     * do not serialize glyph advances,
     *  glyph offsets will reflect absolute glyph positions. Since: 1.8.0
     */
    NO_ADVANCES,
}
enum glyph_flags_t {
    /**
     * Indicates that if input text is broken at the
     * 				   beginning of the cluster this glyph is part of,
     * 				   then both sides need to be re-shaped, as the
     * 				   result might be different.  On the flip side,
     * 				   it means that when this flag is not present,
     * 				   then it's safe to break the glyph-run at the
     * 				   beginning of this cluster, and the two sides
     * 				   represent the exact same result one would get
     * 				   if breaking input text at the beginning of
     * 				   this cluster and shaping the two sides
     * 				   separately.  This can be used to optimize
     * 				   paragraph layout, by avoiding re-shaping
     * 				   of each line after line-breaking, or limiting
     * 				   the reshaping to a small piece around the
     * 				   breaking point only.
     */
    UNSAFE_TO_BREAK,
    /**
     * All the currently defined flags.
     */
    DEFINED,
}
enum ot_color_palette_flags_t {
    /**
     * Default indicating that there is nothing special
     *   to note about a color palette.
     */
    DEFAULT,
    /**
     * Flag indicating that the color
     *   palette is appropriate to use when displaying the font on a light background such as white.
     */
    USABLE_WITH_LIGHT_BACKGROUND,
    /**
     * Flag indicating that the color
     *   palette is appropriate to use when displaying the font on a dark background such as black.
     */
    USABLE_WITH_DARK_BACKGROUND,
}
/**
 * Flags for math glyph parts.
 * @bitfield 
 */
enum ot_math_glyph_part_flags_t {
    EXTENDER,
}
enum ot_var_axis_flags_t {
    /**
     * The axis should not be exposed directly in user interfaces.
     */
    HIDDEN,
}
/**
 * Used when getting or setting AAT feature selectors. Indicates that
 * there is no selector index corresponding to the selector of interest.
 */
const AAT_LAYOUT_NO_SELECTOR_INDEX: number
/**
 * The default code point for replacing invalid characters in a given encoding.
 * Set to U+FFFD REPLACEMENT CHARACTER.
 */
const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number
const FEATURE_GLOBAL_START: number
const LANGUAGE_INVALID: language_t
const MAP_VALUE_INVALID: codepoint_t
const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number
const OT_LAYOUT_NO_FEATURE_INDEX: number
const OT_LAYOUT_NO_SCRIPT_INDEX: number
const OT_LAYOUT_NO_VARIATIONS_INDEX: number
const OT_MAX_TAGS_PER_LANGUAGE: number
const OT_MAX_TAGS_PER_SCRIPT: number
const OT_VAR_NO_AXIS_INDEX: number
const SET_VALUE_INVALID: codepoint_t
const UNICODE_MAX: number
/**
 * See Unicode 6.1 for details on the maximum decomposition length.
 */
const UNICODE_MAX_DECOMPOSITION_LEN: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
const VERSION_STRING: string | null
/**
 * Makes a writable copy of `blob`.
 * @param blob A blob.
 * @returns The new blob, or nullptr if allocation failed
 */
function blob_copy_writable_or_fail(blob: blob_t): blob_t
/**
 * Creates a new blob containing the data from the
 * specified binary font file.
 * @param file_name A font filename
 * @returns An #hb_blob_t pointer with the content of the file
 */
function blob_create_from_file(file_name: string | null): blob_t
/**
 * Returns a blob that represents a range of bytes in `parent`.  The new
 * blob is always created with %HB_MEMORY_MODE_READONLY, meaning that it
 * will never modify data in the parent blob.  The parent data is not
 * expected to be modified, and will result in undefined behavior if it
 * is.
 * 
 * Makes `parent` immutable.
 * @param parent Parent blob.
 * @param offset Start offset of sub-blob within `parent,` in bytes.
 * @param length Length of sub-blob.
 * @returns New blob, or the empty blob if something failed or if @length is zero or @offset is beyond the end of @parent's data.  Destroy with hb_blob_destroy().
 */
function blob_create_sub_blob(parent: blob_t, offset: number, length: number): blob_t
/**
 * Fetches the data from a blob.
 * @param blob a blob.
 * @returns the byte data of @blob.
 */
function blob_get_data(blob: blob_t): string[]
/**
 * Tries to make blob data writable (possibly copying it) and
 * return pointer to data.
 * 
 * Fails if blob has been made immutable, or if memory allocation
 * fails.
 * @param blob a blob.
 * @returns Writable blob data, or %NULL if failed.
 */
function blob_get_data_writable(blob: blob_t): string[]
/**
 * Returns the singleton empty blob.
 * 
 * See TODO:link object types for more information.
 * @returns The empty blob.
 */
function blob_get_empty(): blob_t
/**
 * Fetches the length of a blob's data.
 * @param blob a blob.
 * @returns the length of @blob data in bytes.
 */
function blob_get_length(blob: blob_t): number
/**
 * Tests whether a blob is immutable.
 * @param blob a blob.
 * @returns %true if @blob is immutable, false otherwise
 */
function blob_is_immutable(blob: blob_t): bool_t
/**
 * Makes a blob immutable.
 * @param blob a blob
 */
function blob_make_immutable(blob: blob_t): void
/**
 * Appends a character with the Unicode value of `codepoint` to `buffer,` and
 * gives it the initial cluster value of `cluster`. Clusters can be any thing
 * the client wants, they are usually used to refer to the index of the
 * character in the input text stream and are output in
 * #hb_glyph_info_t.cluster field.
 * 
 * This function does not check the validity of `codepoint,` it is up to the
 * caller to ensure it is a valid Unicode code point.
 * @param buffer An #hb_buffer_t
 * @param codepoint A Unicode code point.
 * @param cluster The cluster value of `codepoint`.
 */
function buffer_add(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void
/**
 * Appends characters from `text` array to `buffer`. The `item_offset` is the
 * position of the first character from `text` that will be appended, and
 * `item_length` is the number of character. When shaping part of a larger text
 * (e.g. a run of text from a paragraph), instead of passing just the substring
 * corresponding to the run, it is preferable to pass the whole
 * paragraph and specify the run start and length as `item_offset` and
 * `item_length,` respectively, to give HarfBuzz the full context to be able,
 * for example, to do cross-run Arabic shaping or properly handle combining
 * marks at stat of run.
 * 
 * This function does not check the validity of `text,` it is up to the caller
 * to ensure it contains a valid Unicode code points.
 * @param buffer a #hb_buffer_t to append characters to.
 * @param text an array of Unicode code points to append.
 * @param item_offset the offset of the first code point to add to the `buffer`.
 * @param item_length the number of code points to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated).
 */
function buffer_add_codepoints(buffer: buffer_t, text: codepoint_t[], item_offset: number, item_length: number): void
/**
 * Similar to hb_buffer_add_codepoints(), but allows only access to first 256
 * Unicode code points that can fit in 8-bit strings.
 * 
 * <note>Has nothing to do with non-Unicode Latin-1 encoding.</note>
 * @param buffer An #hb_buffer_t
 * @param text an array of UTF-8               characters to append
 * @param item_offset the offset of the first character to add to the `buffer`
 * @param item_length the number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated)
 */
function buffer_add_latin1(buffer: buffer_t, text: Uint8Array, item_offset: number, item_length: number): void
/**
 * See hb_buffer_add_codepoints().
 * 
 * Replaces invalid UTF-16 characters with the `buffer` replacement code point,
 * see hb_buffer_set_replacement_codepoint().
 * @param buffer An #hb_buffer_t
 * @param text An array of UTF-16 characters to append
 * @param item_offset The offset of the first character to add to the `buffer`
 * @param item_length The number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated)
 */
function buffer_add_utf16(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
/**
 * See hb_buffer_add_codepoints().
 * 
 * Replaces invalid UTF-32 characters with the `buffer` replacement code point,
 * see hb_buffer_set_replacement_codepoint().
 * @param buffer An #hb_buffer_t
 * @param text An array of UTF-32 characters to append
 * @param item_offset The offset of the first character to add to the `buffer`
 * @param item_length The number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated)
 */
function buffer_add_utf32(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
/**
 * See hb_buffer_add_codepoints().
 * 
 * Replaces invalid UTF-8 characters with the `buffer` replacement code point,
 * see hb_buffer_set_replacement_codepoint().
 * @param buffer An #hb_buffer_t
 * @param text An array of UTF-8               characters to append.
 * @param item_offset The offset of the first character to add to the `buffer`.
 * @param item_length The number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated).
 */
function buffer_add_utf8(buffer: buffer_t, text: Uint8Array, item_offset: number, item_length: number): void
/**
 * Check if allocating memory for the buffer succeeded.
 * @param buffer An #hb_buffer_t
 * @returns %true if @buffer memory allocation succeeded, %false otherwise.
 */
function buffer_allocation_successful(buffer: buffer_t): bool_t
/**
 * Append (part of) contents of another buffer to this buffer.
 * @param buffer An #hb_buffer_t
 * @param source source #hb_buffer_t
 * @param start start index into source buffer to copy.  Use 0 to copy from start of buffer.
 * @param end end index into source buffer to copy.  Use `HB_FEATURE_GLOBAL_END` to copy to end of buffer.
 */
function buffer_append(buffer: buffer_t, source: buffer_t, start: number, end: number): void
/**
 * Similar to hb_buffer_reset(), but does not clear the Unicode functions and
 * the replacement code point.
 * @param buffer An #hb_buffer_t
 */
function buffer_clear_contents(buffer: buffer_t): void
/**
 * Creates a new #hb_buffer_t with all properties to defaults.
 * @returns  A newly allocated #hb_buffer_t with a reference count of 1. The initial reference count should be released with hb_buffer_destroy() when you are done using the #hb_buffer_t. This function never returns %NULL. If memory cannot be allocated, a special #hb_buffer_t object will be returned on which hb_buffer_allocation_successful() returns %false.
 */
function buffer_create(): buffer_t
function buffer_deserialize_glyphs(buffer: buffer_t, buf: string[], font: font_t, format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* end_ptr */ string | null ]
function buffer_deserialize_unicode(buffer: buffer_t, buf: string[], format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* end_ptr */ string | null ]
/**
 * If dottedcircle_glyph is (hb_codepoint_t) -1 then %HB_BUFFER_DIFF_FLAG_DOTTED_CIRCLE_PRESENT
 * and %HB_BUFFER_DIFF_FLAG_NOTDEF_PRESENT are never returned.  This should be used by most
 * callers if just comparing two buffers is needed.
 * @param buffer a buffer.
 * @param reference other buffer to compare to.
 * @param dottedcircle_glyph glyph id of U+25CC DOTTED CIRCLE, or (hb_codepont_t) -1.
 * @param position_fuzz allowed absolute difference in position values.
 */
function buffer_diff(buffer: buffer_t, reference: buffer_t, dottedcircle_glyph: codepoint_t, position_fuzz: number): buffer_diff_flags_t
/**
 * Fetches the cluster level of a buffer. The #hb_buffer_cluster_level_t
 * dictates one aspect of how HarfBuzz will treat non-base characters
 * during shaping.
 * @param buffer An #hb_buffer_t
 * @returns The cluster level of @buffer
 */
function buffer_get_cluster_level(buffer: buffer_t): buffer_cluster_level_t
/**
 * Fetches the type of `buffer` contents. Buffers are either empty, contain
 * characters (before shaping), or contain glyphs (the result of shaping).
 * @param buffer An #hb_buffer_t
 * @returns The type of @buffer contents
 */
function buffer_get_content_type(buffer: buffer_t): buffer_content_type_t
/**
 * See hb_buffer_set_direction()
 * @param buffer An #hb_buffer_t
 * @returns The direction of the @buffer.
 */
function buffer_get_direction(buffer: buffer_t): direction_t
/**
 * Fetches an empty #hb_buffer_t.
 * @returns The empty buffer
 */
function buffer_get_empty(): buffer_t
/**
 * Fetches the #hb_buffer_flags_t of `buffer`.
 * @param buffer An #hb_buffer_t
 * @returns The @buffer flags
 */
function buffer_get_flags(buffer: buffer_t): buffer_flags_t
/**
 * Returns `buffer` glyph information array.  Returned pointer
 * is valid as long as `buffer` contents are not modified.
 * @param buffer An #hb_buffer_t
 * @returns  The @buffer glyph information array. The value valid as long as buffer has not been modified.
 */
function buffer_get_glyph_infos(buffer: buffer_t): glyph_info_t[]
/**
 * Returns `buffer` glyph position array.  Returned pointer
 * is valid as long as `buffer` contents are not modified.
 * @param buffer An #hb_buffer_t
 * @returns  The @buffer glyph position array. The value valid as long as buffer has not been modified.
 */
function buffer_get_glyph_positions(buffer: buffer_t): glyph_position_t[]
/**
 * See hb_buffer_set_invisible_glyph().
 * @param buffer An #hb_buffer_t
 * @returns The @buffer invisible #hb_codepoint_t
 */
function buffer_get_invisible_glyph(buffer: buffer_t): codepoint_t
/**
 * See hb_buffer_set_language().
 * @param buffer An #hb_buffer_t
 * @returns  The #hb_language_t of the buffer. Must not be freed by the caller.
 */
function buffer_get_language(buffer: buffer_t): language_t
/**
 * Returns the number of items in the buffer.
 * @param buffer An #hb_buffer_t
 * @returns The @buffer length. The value valid as long as buffer has not been modified.
 */
function buffer_get_length(buffer: buffer_t): number
/**
 * Fetches the #hb_codepoint_t that replaces invalid entries for a given encoding
 * when adding text to `buffer`.
 * @param buffer An #hb_buffer_t
 * @returns The @buffer replacement #hb_codepoint_t
 */
function buffer_get_replacement_codepoint(buffer: buffer_t): codepoint_t
/**
 * Fetches the script of `buffer`.
 * @param buffer An #hb_buffer_t
 * @returns The #hb_script_t of the @buffer
 */
function buffer_get_script(buffer: buffer_t): script_t
/**
 * Sets `props` to the #hb_segment_properties_t of `buffer`.
 * @param buffer An #hb_buffer_t
 */
function buffer_get_segment_properties(buffer: buffer_t): /* props */ segment_properties_t
/**
 * Fetches the Unicode-functions structure of a buffer.
 * @param buffer An #hb_buffer_t
 * @returns The Unicode-functions structure
 */
function buffer_get_unicode_funcs(buffer: buffer_t): unicode_funcs_t
/**
 * Sets unset buffer segment properties based on buffer Unicode
 * contents.  If buffer is not empty, it must have content type
 * %HB_BUFFER_CONTENT_TYPE_UNICODE.
 * 
 * If buffer script is not set (ie. is %HB_SCRIPT_INVALID), it
 * will be set to the Unicode script of the first character in
 * the buffer that has a script other than %HB_SCRIPT_COMMON,
 * %HB_SCRIPT_INHERITED, and %HB_SCRIPT_UNKNOWN.
 * 
 * Next, if buffer direction is not set (ie. is %HB_DIRECTION_INVALID),
 * it will be set to the natural horizontal direction of the
 * buffer script as returned by hb_script_get_horizontal_direction().
 * If hb_script_get_horizontal_direction() returns %HB_DIRECTION_INVALID,
 * then %HB_DIRECTION_LTR is used.
 * 
 * Finally, if buffer language is not set (ie. is %HB_LANGUAGE_INVALID),
 * it will be set to the process's default language as returned by
 * hb_language_get_default().  This may change in the future by
 * taking buffer script into consideration when choosing a language.
 * Note that hb_language_get_default() is NOT threadsafe the first time
 * it is called.  See documentation for that function for details.
 * @param buffer An #hb_buffer_t
 */
function buffer_guess_segment_properties(buffer: buffer_t): void
/**
 * Returns whether `buffer` has glyph position data.
 * A buffer gains position data when hb_buffer_get_glyph_positions() is called on it,
 * and cleared of position data when hb_buffer_clear_contents() is called.
 * @param buffer an #hb_buffer_t.
 * @returns %true if the @buffer has position array, %false otherwise.
 */
function buffer_has_positions(buffer: buffer_t): bool_t
/**
 * Reorders a glyph buffer to have canonical in-cluster glyph order / position.
 * The resulting clusters should behave identical to pre-reordering clusters.
 * 
 * <note>This has nothing to do with Unicode normalization.</note>
 * @param buffer An #hb_buffer_t
 */
function buffer_normalize_glyphs(buffer: buffer_t): void
/**
 * Pre allocates memory for `buffer` to fit at least `size` number of items.
 * @param buffer An #hb_buffer_t
 * @param size Number of items to pre allocate.
 * @returns %true if @buffer memory allocation succeeded, %false otherwise
 */
function buffer_pre_allocate(buffer: buffer_t, size: number): bool_t
/**
 * Resets the buffer to its initial status, as if it was just newly created
 * with hb_buffer_create().
 * @param buffer An #hb_buffer_t
 */
function buffer_reset(buffer: buffer_t): void
/**
 * Reverses buffer contents.
 * @param buffer An #hb_buffer_t
 */
function buffer_reverse(buffer: buffer_t): void
/**
 * Reverses buffer clusters.  That is, the buffer contents are
 * reversed, then each cluster (consecutive items having the
 * same cluster number) are reversed again.
 * @param buffer An #hb_buffer_t
 */
function buffer_reverse_clusters(buffer: buffer_t): void
/**
 * Reverses buffer contents between `start` and `end`.
 * @param buffer An #hb_buffer_t
 * @param start start index
 * @param end end index
 */
function buffer_reverse_range(buffer: buffer_t, start: number, end: number): void
/**
 * Serializes `buffer` into a textual representation of its content, whether
 * Unicode codepoints or glyph identifiers and positioning information. This is
 * useful for showing the contents of the buffer, for example during debugging.
 * See the documentation of hb_buffer_serialize_unicode() and
 * hb_buffer_serialize_glyphs() for a description of the output format.
 * @param buffer an #hb_buffer_t buffer.
 * @param start the first item in `buffer` to serialize.
 * @param end the last item in `buffer` to serialize.
 * @param font the #hb_font_t used to shape this buffer, needed to        read glyph names and extents. If %NULL, and empty font will be used.
 * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
 * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
 * @returns The number of serialized items.
 */
function buffer_serialize(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number ]
/**
 * Parses a string into an #hb_buffer_serialize_format_t. Does not check if
 * `str` is a valid buffer serialization format, use
 * hb_buffer_serialize_list_formats() to get the list of supported formats.
 * @param str a string to parse
 * @returns The parsed #hb_buffer_serialize_format_t.
 */
function buffer_serialize_format_from_string(str: Uint8Array): buffer_serialize_format_t
/**
 * Converts `format` to the string corresponding it, or %NULL if it is not a valid
 * #hb_buffer_serialize_format_t.
 * @param format an #hb_buffer_serialize_format_t to convert.
 * @returns  A %NULL terminated string corresponding to @format. Should not be freed.
 */
function buffer_serialize_format_to_string(format: buffer_serialize_format_t): string | null
/**
 * Serializes `buffer` into a textual representation of its glyph content,
 * useful for showing the contents of the buffer, for example during debugging.
 * There are currently two supported serialization formats:
 * 
 * ## text
 * A human-readable, plain text format.
 * The serialized glyphs will look something like:
 * 
 * ```
 * [uni0651=0`5`18,0+0|uni0628=0+1897]
 * ```
 * 
 * - The serialized glyphs are delimited with `[` and `]`.
 * - Glyphs are separated with `|`
 * - Each glyph starts with glyph name, or glyph index if
 *   #HB_BUFFER_SERIALIZE_FLAG_NO_GLYPH_NAMES flag is set. Then,
 *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set, `=` then #hb_glyph_info_t.cluster.
 *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_POSITIONS is not set, the #hb_glyph_position_t in the format:
 *     - If both #hb_glyph_position_t.x_offset and #hb_glyph_position_t.y_offset are not 0, ``x_offset,`y_offset`. Then,
 *     - `+x_advance`, then `,y_advance` if #hb_glyph_position_t.y_advance is not 0. Then,
 *   - If #HB_BUFFER_SERIALIZE_FLAG_GLYPH_EXTENTS is set, the #hb_glyph_extents_t in the format `<x_bearing,y_bearing,width,height>`
 * 
 * ## json
 * A machine-readable, structured format.
 * The serialized glyphs will look something like:
 * 
 * ```
 * [{"g":"uni0651","cl":0,"dx":518,"dy":0,"ax":0,"ay":0},
 * {"g":"uni0628","cl":0,"dx":0,"dy":0,"ax":1897,"ay":0}]
 * ```
 * 
 * Each glyph is a JSON object, with the following properties:
 * - `g`: the glyph name or glyph index if
 *   #HB_BUFFER_SERIALIZE_FLAG_NO_GLYPH_NAMES flag is set.
 * - `cl`: #hb_glyph_info_t.cluster if
 *   #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set.
 * - `dx`,`dy`,`ax`,`ay`: #hb_glyph_position_t.x_offset, #hb_glyph_position_t.y_offset,
 *    #hb_glyph_position_t.x_advance and #hb_glyph_position_t.y_advance
 *    respectively, if #HB_BUFFER_SERIALIZE_FLAG_NO_POSITIONS is not set.
 * - `xb`,`yb`,`w`,`h`: #hb_glyph_extents_t.x_bearing, #hb_glyph_extents_t.y_bearing,
 *    #hb_glyph_extents_t.width and #hb_glyph_extents_t.height respectively if
 *    #HB_BUFFER_SERIALIZE_FLAG_GLYPH_EXTENTS is set.
 * @param buffer an #hb_buffer_t buffer.
 * @param start the first item in `buffer` to serialize.
 * @param end the last item in `buffer` to serialize.
 * @param font the #hb_font_t used to shape this buffer, needed to        read glyph names and extents. If %NULL, and empty font will be used.
 * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
 * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
 * @returns The number of serialized items.
 */
function buffer_serialize_glyphs(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number ]
/**
 * Returns a list of supported buffer serialization formats.
 * @returns  A string array of buffer serialization formats. Should not be freed.
 */
function buffer_serialize_list_formats(): string[]
/**
 * Serializes `buffer` into a textual representation of its content,
 * when the buffer contains Unicode codepoints (i.e., before shaping). This is
 * useful for showing the contents of the buffer, for example during debugging.
 * There are currently two supported serialization formats:
 * 
 * ## text
 * A human-readable, plain text format.
 * The serialized codepoints will look something like:
 * 
 * ```
 *  <U+0651=0|U+0628=1>
 * ```
 * 
 * - Glyphs are separated with `|`
 * - Unicode codepoints are expressed as zero-padded four (or more)
 *   digit hexadecimal numbers preceded by `U+`
 * - If #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set, the cluster
 *   will be indicated with a `=` then #hb_glyph_info_t.cluster.
 * 
 * ## json
 * A machine-readable, structured format.
 * The serialized codepoints will be a list of objects with the following
 * properties:
 * - `u`: the Unicode codepoint as a decimal integer
 * - `cl`: #hb_glyph_info_t.cluster if
 *   #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set.
 * 
 * For example:
 * 
 * ```
 * [{u:1617,cl:0},{u:1576,cl:1}]
 * ```
 * @param buffer an #hb_buffer_t buffer.
 * @param start the first item in `buffer` to serialize.
 * @param end the last item in `buffer` to serialize.
 * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
 * @param flags 
 * @returns The number of serialized items.
 */
function buffer_serialize_unicode(buffer: buffer_t, start: number, end: number, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number ]
/**
 * Sets the cluster level of a buffer. The #hb_buffer_cluster_level_t
 * dictates one aspect of how HarfBuzz will treat non-base characters
 * during shaping.
 * @param buffer An #hb_buffer_t
 * @param cluster_level The cluster level to set on the buffer
 */
function buffer_set_cluster_level(buffer: buffer_t, cluster_level: buffer_cluster_level_t): void
/**
 * Sets the type of `buffer` contents. Buffers are either empty, contain
 * characters (before shaping), or contain glyphs (the result of shaping).
 * @param buffer An #hb_buffer_t
 * @param content_type The type of buffer contents to set
 */
function buffer_set_content_type(buffer: buffer_t, content_type: buffer_content_type_t): void
/**
 * Set the text flow direction of the buffer. No shaping can happen without
 * setting `buffer` direction, and it controls the visual direction for the
 * output glyphs; for RTL direction the glyphs will be reversed. Many layout
 * features depend on the proper setting of the direction, for example,
 * reversing RTL text before shaping, then shaping with LTR direction is not
 * the same as keeping the text in logical order and shaping with RTL
 * direction.
 * @param buffer An #hb_buffer_t
 * @param direction the #hb_direction_t of the `buffer`
 */
function buffer_set_direction(buffer: buffer_t, direction: direction_t): void
/**
 * Sets `buffer` flags to `flags`. See #hb_buffer_flags_t.
 * @param buffer An #hb_buffer_t
 * @param flags The buffer flags to set
 */
function buffer_set_flags(buffer: buffer_t, flags: buffer_flags_t): void
/**
 * Sets the #hb_codepoint_t that replaces invisible characters in
 * the shaping result.  If set to zero (default), the glyph for the
 * U+0020 SPACE character is used.  Otherwise, this value is used
 * verbatim.
 * @param buffer An #hb_buffer_t
 * @param invisible the invisible #hb_codepoint_t
 */
function buffer_set_invisible_glyph(buffer: buffer_t, invisible: codepoint_t): void
/**
 * Sets the language of `buffer` to `language`.
 * 
 * Languages are crucial for selecting which OpenType feature to apply to the
 * buffer which can result in applying language-specific behaviour. Languages
 * are orthogonal to the scripts, and though they are related, they are
 * different concepts and should not be confused with each other.
 * 
 * Use hb_language_from_string() to convert from BCP 47 language tags to
 * #hb_language_t.
 * @param buffer An #hb_buffer_t
 * @param language An hb_language_t to set
 */
function buffer_set_language(buffer: buffer_t, language: language_t): void
/**
 * Similar to hb_buffer_pre_allocate(), but clears any new items added at the
 * end.
 * @param buffer An #hb_buffer_t
 * @param length The new length of `buffer`
 * @returns %true if @buffer memory allocation succeeded, %false otherwise.
 */
function buffer_set_length(buffer: buffer_t, length: number): bool_t
function buffer_set_message_func(buffer: buffer_t, func: buffer_message_func_t): void
/**
 * Sets the #hb_codepoint_t that replaces invalid entries for a given encoding
 * when adding text to `buffer`.
 * 
 * Default is %HB_BUFFER_REPLACEMENT_CODEPOINT_DEFAULT.
 * @param buffer An #hb_buffer_t
 * @param replacement the replacement #hb_codepoint_t
 */
function buffer_set_replacement_codepoint(buffer: buffer_t, replacement: codepoint_t): void
/**
 * Sets the script of `buffer` to `script`.
 * 
 * Script is crucial for choosing the proper shaping behaviour for scripts that
 * require it (e.g. Arabic) and the which OpenType features defined in the font
 * to be applied.
 * 
 * You can pass one of the predefined #hb_script_t values, or use
 * hb_script_from_string() or hb_script_from_iso15924_tag() to get the
 * corresponding script from an ISO 15924 script tag.
 * @param buffer An #hb_buffer_t
 * @param script An #hb_script_t to set.
 */
function buffer_set_script(buffer: buffer_t, script: script_t): void
/**
 * Sets the segment properties of the buffer, a shortcut for calling
 * hb_buffer_set_direction(), hb_buffer_set_script() and
 * hb_buffer_set_language() individually.
 * @param buffer An #hb_buffer_t
 * @param props An #hb_segment_properties_t to use
 */
function buffer_set_segment_properties(buffer: buffer_t, props: segment_properties_t): void
/**
 * Sets the Unicode-functions structure of a buffer to
 * `unicode_funcs`.
 * @param buffer An #hb_buffer_t
 * @param unicode_funcs The Unicode-functions structure
 */
function buffer_set_unicode_funcs(buffer: buffer_t, unicode_funcs: unicode_funcs_t): void
/**
 * color: a #hb_color_t we are interested in its channels.
 * @param color 
 * @returns Alpha channel value of the given color
 */
function color_get_alpha(color: color_t): number
/**
 * color: a #hb_color_t we are interested in its channels.
 * @param color 
 * @returns Blue channel value of the given color
 */
function color_get_blue(color: color_t): number
/**
 * color: a #hb_color_t we are interested in its channels.
 * @param color 
 * @returns Green channel value of the given color
 */
function color_get_green(color: color_t): number
/**
 * color: a #hb_color_t we are interested in its channels.
 * @param color 
 * @returns Red channel value of the given color
 */
function color_get_red(color: color_t): number
/**
 * Converts a string to an #hb_direction_t.
 * 
 * Matching is loose and applies only to the first letter. For
 * examples, "LTR" and "left-to-right" will both return #HB_DIRECTION_LTR.
 * 
 * Unmatched strings will return #HB_DIRECTION_INVALID.
 * @param str String to convert
 * @returns The #hb_direction_t matching @str
 */
function direction_from_string(str: Uint8Array): direction_t
/**
 * Converts an #hb_direction_t to a string.
 * @param direction The #hb_direction_t to convert
 * @returns The string corresponding to @direction
 */
function direction_to_string(direction: direction_t): string | null
/**
 * Add table for `tag` with data provided by `blob` to the face.  `face` must
 * be created using hb_face_builder_create().
 * @param face A face object created with hb_face_builder_create()
 * @param tag The #hb_tag_t of the table to add
 * @param blob The blob containing the table data to add
 */
function face_builder_add_table(face: face_t, tag: tag_t, blob: blob_t): bool_t
/**
 * Creates a #hb_face_t that can be used with hb_face_builder_add_table().
 * After tables are added to the face, it can be compiled to a binary
 * font file by calling hb_face_reference_blob().
 * @returns New face.
 */
function face_builder_create(): face_t
/**
 * Collects all of the Unicode characters covered by `face` and adds
 * them to the #hb_set_t set `out`.
 * @param face A face object
 * @param out The set to add Unicode characters to
 */
function face_collect_unicodes(face: face_t, out: set_t): void
/**
 * Collects all Unicode "Variation Selector" characters covered by `face` and adds
 * them to the #hb_set_t set `out`.
 * @param face A face object
 * @param out The set to add Variation Selector characters to
 */
function face_collect_variation_selectors(face: face_t, out: set_t): void
/**
 * Collects all Unicode characters for `variation_selector` covered by `face` and adds
 * them to the #hb_set_t set `out`.
 * @param face A face object
 * @param variation_selector The Variation Selector to query
 * @param out The set to add Unicode characters to
 */
function face_collect_variation_unicodes(face: face_t, variation_selector: codepoint_t, out: set_t): void
/**
 * Fetches the number of faces in a blob.
 * @param blob a blob.
 * @returns Number of faces in @blob
 */
function face_count(blob: blob_t): number
/**
 * Constructs a new face object from the specified blob and
 * a face index into that blob. This is used for blobs of
 * file formats such as Dfont and TTC that can contain more
 * than one face.
 * @param blob #hb_blob_t to work upon
 * @param index The index of the face within `blob`
 * @returns The new face object
 */
function face_create(blob: blob_t, index: number): face_t
/**
 * Variant of hb_face_create(), built for those cases where it is more
 * convenient to provide data for individual tables instead of the whole font
 * data. With the caveat that hb_face_get_table_tags() does not currently work
 * with faces created this way.
 * 
 * Creates a new face object from the specified `user_data` and `reference_table_func,`
 * with the `destroy` callback.
 * @param reference_table_func Table-referencing function
 * @returns The new face object
 */
function face_create_for_tables(reference_table_func: reference_table_func_t): face_t
/**
 * Fetches the singleton empty face object.
 * @returns The empty face object
 */
function face_get_empty(): face_t
/**
 * Fetches the glyph-count value of the specified face object.
 * @param face A face object
 * @returns The glyph-count value of @face
 */
function face_get_glyph_count(face: face_t): number
/**
 * Fetches the face-index corresponding to the given face.
 * 
 * <note>Note: face indices within a collection are zero-based.</note>
 * @param face A face object
 * @returns The index of @face.
 */
function face_get_index(face: face_t): number
/**
 * Fetches a list of all table tags for a face, if possible. The list returned will
 * begin at the offset provided
 * @param face A face object
 * @param start_offset The index of first table tag to retrieve
 * @returns Total number of tables, or zero if it is not possible to list
 */
function face_get_table_tags(face: face_t, start_offset: number): [ /* returnType */ number, /* table_tags */ tag_t[] ]
/**
 * Fetches the units-per-em (upem) value of the specified face object.
 * @param face A face object
 * @returns The upem value of @face
 */
function face_get_upem(face: face_t): number
/**
 * Tests whether the given face object is immutable.
 * @param face A face object
 * @returns True is @face is immutable, false otherwise
 */
function face_is_immutable(face: face_t): bool_t
/**
 * Makes the given face object immutable.
 * @param face A face object
 */
function face_make_immutable(face: face_t): void
/**
 * Fetches a pointer to the binary blob that contains the
 * specified face. Returns an empty blob if referencing face data is not
 * possible.
 * @param face A face object
 * @returns A pointer to the blob for @face
 */
function face_reference_blob(face: face_t): blob_t
/**
 * Fetches a reference to the specified table within
 * the specified face.
 * @param face A face object
 * @param tag The #hb_tag_t of the table to query
 * @returns A pointer to the @tag table within @face
 */
function face_reference_table(face: face_t, tag: tag_t): blob_t
/**
 * Sets the glyph count for a face object to the specified value.
 * @param face A face object
 * @param glyph_count The glyph-count value to assign
 */
function face_set_glyph_count(face: face_t, glyph_count: number): void
/**
 * Assigns the specified face-index to `face`. Fails if the
 * face is immutable.
 * 
 * <note>Note: face indices within a collection are zero-based.</note>
 * @param face A face object
 * @param index The index to assign
 */
function face_set_index(face: face_t, index: number): void
/**
 * Sets the units-per-em (upem) for a face object to the specified value.
 * @param face A face object
 * @param upem The units-per-em value to assign
 */
function face_set_upem(face: face_t, upem: number): void
/**
 * Parses a string into a #hb_feature_t.
 * 
 * The format for specifying feature strings follows. All valid CSS
 * font-feature-settings values other than 'normal' and the global values are
 * also accepted, though not documented below. CSS string escapes are not
 * supported.
 * 
 * The range indices refer to the positions between Unicode characters. The
 * position before the first character is always 0.
 * 
 * The format is Python-esque.  Here is how it all works:
 * 
 * <informaltable pgwide='1' align='left' frame='none'>
 * <tgroup cols='5'>
 * <thead>
 * <row><entry>Syntax</entry>    <entry>Value</entry> <entry>Start</entry> <entry>End</entry></row>
 * </thead>
 * <tbody>
 * <row><entry>Setting value:</entry></row>
 * <row><entry>kern</entry>      <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>+kern</entry>     <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>-kern</entry>     <entry>0</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature off</entry></row>
 * <row><entry>kern=0</entry>    <entry>0</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature off</entry></row>
 * <row><entry>kern=1</entry>    <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>aalt=2</entry>    <entry>2</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Choose 2nd alternate</entry></row>
 * <row><entry>Setting index:</entry></row>
 * <row><entry>kern[]</entry>    <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>kern[:]</entry>   <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>kern[5:]</entry>  <entry>1</entry>     <entry>5</entry>      <entry>∞</entry>   <entry>Turn feature on, partial</entry></row>
 * <row><entry>kern[:5]</entry>  <entry>1</entry>     <entry>0</entry>      <entry>5</entry>   <entry>Turn feature on, partial</entry></row>
 * <row><entry>kern[3:5]</entry> <entry>1</entry>     <entry>3</entry>      <entry>5</entry>   <entry>Turn feature on, range</entry></row>
 * <row><entry>kern[3]</entry>   <entry>1</entry>     <entry>3</entry>      <entry>3+1</entry> <entry>Turn feature on, single char</entry></row>
 * <row><entry>Mixing it all:</entry></row>
 * <row><entry>aalt[3:5]=2</entry> <entry>2</entry>   <entry>3</entry>      <entry>5</entry>   <entry>Turn 2nd alternate on for range</entry></row>
 * </tbody>
 * </tgroup>
 * </informaltable>
 * @param str a string to parse
 * @returns %true if @str is successfully parsed, %false otherwise
 */
function feature_from_string(str: Uint8Array): [ /* returnType */ bool_t, /* feature */ feature_t ]
/**
 * Converts a #hb_feature_t into a %NULL-terminated string in the format
 * understood by hb_feature_from_string(). The client in responsible for
 * allocating big enough size for `buf,` 128 bytes is more than enough.
 * @param feature an #hb_feature_t to convert
 */
function feature_to_string(feature: feature_t): /* buf */ string[]
/**
 * Adds the origin coordinates to an (X,Y) point coordinate, in
 * the specified glyph ID in the specified font.
 * 
 * Calls the appropriate direction-specific variant (horizontal
 * or vertical) depending on the value of `direction`.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @param direction The direction of the text segment
 * @param x Input = The original X coordinate     Output = The X coordinate plus the X-coordinate of the origin
 * @param y Input = The original Y coordinate     Output = The Y coordinate plus the Y-coordinate of the origin
 */
function font_add_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): [ /* x */ position_t, /* y */ position_t ]
/**
 * Constructs a new font object from the specified face.
 * @param face a face.
 * @returns The new font object
 */
function font_create(face: face_t): font_t
/**
 * Constructs a sub-font font object from the specified `parent` font,
 * replicating the parent's properties.
 * @param parent The parent font object
 * @returns The new sub-font font object
 */
function font_create_sub_font(parent: font_t): font_t
/**
 * Creates a new #hb_font_funcs_t structure of font functions.
 * @returns The font-functions structure
 */
function font_funcs_create(): font_funcs_t
/**
 * Fetches an empty font-functions structure.
 * @returns The font-functions structure
 */
function font_funcs_get_empty(): font_funcs_t
/**
 * Tests whether a font-functions structure is immutable.
 * @param ffuncs The font-functions structure
 * @returns %true if @ffuncs is immutable, false otherwise
 */
function font_funcs_is_immutable(ffuncs: font_funcs_t): bool_t
/**
 * Makes a font-functions structure immutable.
 * @param ffuncs The font-functions structure
 */
function font_funcs_make_immutable(ffuncs: font_funcs_t): void
/**
 * Sets the implementation function for #hb_font_get_font_h_extents_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_font_h_extents_func(ffuncs: font_funcs_t, func: font_get_font_h_extents_func_t): void
/**
 * Sets the implementation function for #hb_font_get_font_v_extents_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_font_v_extents_func(ffuncs: font_funcs_t, func: font_get_font_v_extents_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_contour_point_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_contour_point_func(ffuncs: font_funcs_t, func: font_get_glyph_contour_point_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_extents_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_extents_func(ffuncs: font_funcs_t, func: font_get_glyph_extents_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_from_name_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_from_name_func(ffuncs: font_funcs_t, func: font_get_glyph_from_name_func_t): void
/**
 * Deprecated.  Use hb_font_funcs_set_nominal_glyph_func() and
 * hb_font_funcs_set_variation_glyph_func() instead.
 * @param ffuncs The font-functions structure
 * @param func callback function
 */
function font_funcs_set_glyph_func(ffuncs: font_funcs_t, func: font_get_glyph_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_h_advance_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_h_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advance_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_h_advances_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_h_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advances_func_t): void
function font_funcs_set_glyph_h_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_h_kerning_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_h_origin_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_h_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_h_origin_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_name_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_name_func(ffuncs: font_funcs_t, func: font_get_glyph_name_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_v_advance_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_v_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advance_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_v_advances_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_v_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advances_func_t): void
function font_funcs_set_glyph_v_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_v_kerning_func_t): void
/**
 * Sets the implementation function for #hb_font_get_glyph_v_origin_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_glyph_v_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_v_origin_func_t): void
/**
 * Sets the implementation function for #hb_font_get_nominal_glyph_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_nominal_glyph_func(ffuncs: font_funcs_t, func: font_get_nominal_glyph_func_t): void
/**
 * Sets the implementation function for #hb_font_get_nominal_glyphs_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_nominal_glyphs_func(ffuncs: font_funcs_t, func: font_get_nominal_glyphs_func_t): void
/**
 * Sets the implementation function for #hb_font_get_variation_glyph_func_t.
 * @param ffuncs A font-function structure
 * @param func The callback function to assign
 */
function font_funcs_set_variation_glyph_func(ffuncs: font_funcs_t, func: font_get_variation_glyph_func_t): void
/**
 * Fetches the empty font object.
 * @returns The empty font object
 */
function font_get_empty(): font_t
/**
 * Fetches the extents for a font in a text segment of the
 * specified direction.
 * 
 * Calls the appropriate direction-specific variant (horizontal
 * or vertical) depending on the value of `direction`.
 * @param font #hb_font_t to work upon
 * @param direction The direction of the text segment
 */
function font_get_extents_for_direction(font: font_t, direction: direction_t): /* extents */ font_extents_t
/**
 * Fetches the face associated with the specified font object.
 * @param font #hb_font_t to work upon
 * @returns The #hb_face_t value
 */
function font_get_face(font: font_t): face_t
/**
 * Fetches the glyph ID for a Unicode code point in the specified
 * font, with an optional variation selector.
 * 
 * If `variation_selector` is 0, calls hb_font_get_nominal_glyph();
 * otherwise calls hb_font_get_variation_glyph().
 * @param font #hb_font_t to work upon
 * @param unicode The Unicode code point to query
 * @param variation_selector A variation-selector code point
 * @returns %true if data found, false otherwise
 */
function font_get_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
/**
 * Fetches the advance for a glyph ID from the specified font,
 * in a text segment of the specified direction.
 * 
 * Calls the appropriate direction-specific variant (horizontal
 * or vertical) depending on the value of `direction`.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @param direction The direction of the text segment
 */
function font_get_glyph_advance_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
/**
 * Fetches the advances for a sequence of glyph IDs in the specified
 * font, in a text segment of the specified direction.
 * 
 * Calls the appropriate direction-specific variant (horizontal
 * or vertical) depending on the value of `direction`.
 * @param font #hb_font_t to work upon
 * @param direction The direction of the text segment
 * @param count The number of glyph IDs in the sequence queried
 * @param first_glyph The first glyph ID to query
 * @param glyph_stride The stride between successive glyph IDs
 */
function font_get_glyph_advances_for_direction(font: font_t, direction: direction_t, count: number, first_glyph: codepoint_t, glyph_stride: number): [ /* first_advance */ position_t, /* advance_stride */ number ]
/**
 * Fetches the (x,y) coordinates of a specified contour-point index
 * in the specified glyph, within the specified font.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @param point_index The contour-point index to query
 * @returns %true if data found, false otherwise
 */
function font_get_glyph_contour_point(font: font_t, glyph: codepoint_t, point_index: number): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
/**
 * Fetches the (X,Y) coordinates of a specified contour-point index
 * in the specified glyph ID in the specified font, with respect
 * to the origin in a text segment in the specified direction.
 * 
 * Calls the appropriate direction-specific variant (horizontal
 * or vertical) depending on the value of `direction`.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @param point_index The contour-point index to query
 * @param direction The direction of the text segment
 * @returns %true if data found, false otherwise
 */
function font_get_glyph_contour_point_for_origin(font: font_t, glyph: codepoint_t, point_index: number, direction: direction_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
/**
 * Fetches the #hb_glyph_extents_t data for a glyph ID
 * in the specified font.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @returns %true if data found, false otherwise
 */
function font_get_glyph_extents(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
/**
 * Fetches the #hb_glyph_extents_t data for a glyph ID
 * in the specified font, with respect to the origin in
 * a text segment in the specified direction.
 * 
 * Calls the appropriate direction-specific variant (horizontal
 * or vertical) depending on the value of `direction`.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @param direction The direction of the text segment
 * @returns %true if data found, false otherwise
 */
function font_get_glyph_extents_for_origin(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
/**
 * Fetches the glyph ID that corresponds to a name string in the specified `font`.
 * 
 * <note>Note: `len` == -1 means the name string is null-terminated.</note>
 * @param font #hb_font_t to work upon
 * @param name The name string to query
 * @returns %true if data found, false otherwise
 */
function font_get_glyph_from_name(font: font_t, name: string[]): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
/**
 * Fetches the advance for a glyph ID in the specified font,
 * for horizontal text segments.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @returns The advance of @glyph within @font
 */
function font_get_glyph_h_advance(font: font_t, glyph: codepoint_t): position_t
/**
 * Fetches the advances for a sequence of glyph IDs in the specified
 * font, for horizontal text segments.
 * @param font #hb_font_t to work upon
 * @param count The number of glyph IDs in the sequence queried
 * @param first_glyph The first glyph ID to query
 * @param glyph_stride The stride between successive glyph IDs
 */
function font_get_glyph_h_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number): [ /* first_advance */ position_t, /* advance_stride */ number ]
/**
 * Fetches the kerning-adjustment value for a glyph-pair in
 * the specified font, in horizontal text segments.
 * 
 * <note>It handles legacy kerning only (as returned by the corresponding
 * #hb_font_funcs_t function).</note>
 * @param font #hb_font_t to work upon
 * @param left_glyph The glyph ID of the left glyph in the glyph pair
 * @param right_glyph The glyph ID of the right glyph in the glyph pair
 * @returns The kerning adjustment value
 */
function font_get_glyph_h_kerning(font: font_t, left_glyph: codepoint_t, right_glyph: codepoint_t): position_t
/**
 * Fetches the (X,Y) coordinates of the origin for a glyph ID
 * in the specified font, for horizontal text segments.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @returns %true if data found, false otherwise
 */
function font_get_glyph_h_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
/**
 * Fetches the kerning-adjustment value for a glyph-pair in the specified font.
 * 
 * Calls the appropriate direction-specific variant (horizontal
 * or vertical) depending on the value of `direction`.
 * @param font #hb_font_t to work upon
 * @param first_glyph The glyph ID of the first glyph in the glyph pair to query
 * @param second_glyph The glyph ID of the second glyph in the glyph pair to query
 * @param direction The direction of the text segment
 */
function font_get_glyph_kerning_for_direction(font: font_t, first_glyph: codepoint_t, second_glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
/**
 * Fetches the glyph-name string for a glyph ID in the specified `font`.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @returns %true if data found, zero otherwise
 */
function font_get_glyph_name(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* name */ string[] ]
/**
 * Fetches the (X,Y) coordinates of the origin for a glyph in
 * the specified font.
 * 
 * Calls the appropriate direction-specific variant (horizontal
 * or vertical) depending on the value of `direction`.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @param direction The direction of the text segment
 */
function font_get_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
/**
 * Fetches the advance for a glyph ID in the specified font,
 * for vertical text segments.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @returns The advance of @glyph within @font
 */
function font_get_glyph_v_advance(font: font_t, glyph: codepoint_t): position_t
/**
 * Fetches the advances for a sequence of glyph IDs in the specified
 * font, for vertical text segments.
 * @param font #hb_font_t to work upon
 * @param count The number of glyph IDs in the sequence queried
 * @param first_glyph The first glyph ID to query
 * @param glyph_stride The stride between successive glyph IDs
 */
function font_get_glyph_v_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number): [ /* first_advance */ position_t, /* advance_stride */ number ]
/**
 * Fetches the kerning-adjustment value for a glyph-pair in
 * the specified font, in vertical text segments.
 * 
 * <note>It handles legacy kerning only (as returned by the corresponding
 * #hb_font_funcs_t function).</note>
 * @param font #hb_font_t to work upon
 * @param top_glyph The glyph ID of the top glyph in the glyph pair
 * @param bottom_glyph The glyph ID of the bottom glyph in the glyph pair
 * @returns The kerning adjustment value
 */
function font_get_glyph_v_kerning(font: font_t, top_glyph: codepoint_t, bottom_glyph: codepoint_t): position_t
/**
 * Fetches the (X,Y) coordinates of the origin for a glyph ID
 * in the specified font, for vertical text segments.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @returns %true if data found, false otherwise
 */
function font_get_glyph_v_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
/**
 * Fetches the extents for a specified font, in horizontal
 * text segments.
 * @param font #hb_font_t to work upon
 * @returns %true if data found, false otherwise
 */
function font_get_h_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
/**
 * Fetches the nominal glyph ID for a Unicode code point in the
 * specified font.
 * 
 * This version of the function should not be used to fetch glyph IDs
 * for code points modified by variation selectors. For variation-selector
 * support, user hb_font_get_variation_glyph() or use hb_font_get_glyph().
 * @param font #hb_font_t to work upon
 * @param unicode The Unicode code point to query
 * @returns %true if data found, false otherwise
 */
function font_get_nominal_glyph(font: font_t, unicode: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function font_get_nominal_glyphs(font: font_t, count: number, first_unicode: codepoint_t, unicode_stride: number, first_glyph: codepoint_t, glyph_stride: number): number
/**
 * Fetches the parent font of `font`.
 * @param font #hb_font_t to work upon
 * @returns The parent font object
 */
function font_get_parent(font: font_t): font_t
/**
 * Fetches the horizontal and vertical points-per-em (ppem) of a font.
 * @param font #hb_font_t to work upon
 */
function font_get_ppem(font: font_t): [ /* x_ppem */ number, /* y_ppem */ number ]
/**
 * Fetches the "point size" of a font. Used in CoreText to
 * implement optical sizing.
 * @param font #hb_font_t to work upon
 * @returns Point size.  A value of zero means "not set."
 */
function font_get_ptem(font: font_t): number
/**
 * Fetches the horizontal and vertical scale of a font.
 * @param font #hb_font_t to work upon
 */
function font_get_scale(font: font_t): [ /* x_scale */ number, /* y_scale */ number ]
/**
 * Fetches the extents for a specified font, in vertical
 * text segments.
 * @param font #hb_font_t to work upon
 * @returns %true if data found, false otherwise
 */
function font_get_v_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
/**
 * Fetches the list of normalized variation coordinates currently
 * set on a font.
 * 
 * Return value is valid as long as variation coordinates of the font
 * are not modified.
 * @param font #hb_font_t to work upon
 * @param length Number of coordinates retrieved
 */
function font_get_var_coords_normalized(font: font_t, length: number): number
/**
 * Fetches the glyph ID for a Unicode code point when followed by
 * by the specified variation-selector code point, in the specified
 * font.
 * @param font #hb_font_t to work upon
 * @param unicode The Unicode code point to query
 * @param variation_selector The  variation-selector code point to query
 * @returns %true if data found, false otherwise
 */
function font_get_variation_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
/**
 * Fetches the glyph ID from `font` that matches the specified string.
 * Strings of the format `gidDDD` or `uniUUUU` are parsed automatically.
 * 
 * <note>Note: `len` == -1 means the string is null-terminated.</note>
 * @param font #hb_font_t to work upon
 * @param s string to query
 * @returns %true if data found, false otherwise
 */
function font_glyph_from_string(font: font_t, s: Uint8Array): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
/**
 * Fetches the name of the specified glyph ID in `font` and returns
 * it in string `s`.
 * 
 * If the glyph ID has no name in `font,` a string of the form `gidDDD` is
 * generated, with `DDD` being the glyph ID.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 */
function font_glyph_to_string(font: font_t, glyph: codepoint_t): /* s */ string[]
/**
 * Tests whether a font object is immutable.
 * @param font #hb_font_t to work upon
 * @returns %true if @font is immutable, false otherwise
 */
function font_is_immutable(font: font_t): bool_t
/**
 * Makes `font` immutable.
 * @param font #hb_font_t to work upon
 */
function font_make_immutable(font: font_t): void
/**
 * Sets `face` as the font-face value of `font`.
 * @param font #hb_font_t to work upon
 * @param face The #hb_face_t to assign
 */
function font_set_face(font: font_t, face: face_t): void
/**
 * Replaces the font-functions structure attached to a font, updating
 * the font's user-data with `font-data` and the `destroy` callback.
 * @param font #hb_font_t to work upon
 * @param klass 
 */
function font_set_funcs(font: font_t, klass: font_funcs_t): void
/**
 * Replaces the user data attached to a font, updating the font's
 * `destroy` callback.
 * @param font #hb_font_t to work upon
 * @param font_data Data to attach to `font`
 */
function font_set_funcs_data(font: font_t, font_data: any | null): void
/**
 * Sets the parent font of `font`.
 * @param font #hb_font_t to work upon
 * @param parent The parent font object to assign
 */
function font_set_parent(font: font_t, parent: font_t): void
/**
 * Sets the horizontal and vertical pixels-per-em (ppem) of a font.
 * @param font #hb_font_t to work upon
 * @param x_ppem Horizontal ppem value to assign
 * @param y_ppem Vertical ppem value to assign
 */
function font_set_ppem(font: font_t, x_ppem: number, y_ppem: number): void
/**
 * Sets the "point size" of a font. Set to zero to unset.
 * Used in CoreText to implement optical sizing.
 * 
 * <note>Note: There are 72 points in an inch.</note>
 * @param font #hb_font_t to work upon
 * @param ptem font size in points.
 */
function font_set_ptem(font: font_t, ptem: number): void
/**
 * Sets the horizontal and vertical scale of a font.
 * @param font #hb_font_t to work upon
 * @param x_scale Horizontal scale value to assign
 * @param y_scale Vertical scale value to assign
 */
function font_set_scale(font: font_t, x_scale: number, y_scale: number): void
/**
 * Applies a list of variation coordinates (in design-space units)
 * to a font.
 * @param font #hb_font_t to work upon
 * @param coords Array of variation coordinates to apply
 */
function font_set_var_coords_design(font: font_t, coords: number[]): void
/**
 * Applies a list of variation coordinates (in normalized units)
 * to a font.
 * 
 * <note>Note: Coordinates should be normalized to 2.14.</note>
 * @param font #hb_font_t to work upon
 * @param coords Array of variation coordinates to apply
 */
function font_set_var_coords_normalized(font: font_t, coords: number[]): void
/**
 * Sets design coords of a font from a named instance index.
 * @param font a font.
 * @param instance_index named instance index.
 */
function font_set_var_named_instance(font: font_t, instance_index: number): void
/**
 * Applies a list of font-variation settings to a font.
 * @param font #hb_font_t to work upon
 * @param variations Array of variation settings to apply
 */
function font_set_variations(font: font_t, variations: variation_t[]): void
/**
 * Subtracts the origin coordinates from an (X,Y) point coordinate,
 * in the specified glyph ID in the specified font.
 * 
 * Calls the appropriate direction-specific variant (horizontal
 * or vertical) depending on the value of `direction`.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph ID to query
 * @param direction The direction of the text segment
 * @param x Input = The original X coordinate     Output = The X coordinate minus the X-coordinate of the origin
 * @param y Input = The original Y coordinate     Output = The Y coordinate minus the Y-coordinate of the origin
 */
function font_subtract_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): [ /* x */ position_t, /* y */ position_t ]
function ft_font_changed(font: font_t): void
/**
 * Fetches the FT_Load_Glyph load flags of the specified #hb_font_t.
 * 
 * For more information, see
 * https://www.freetype.org/freetype2/docs/reference/ft2-base_interface.html#ft_load_xxx
 * @param font #hb_font_t to work upon
 * @returns FT_Load_Glyph flags found
 */
function ft_font_get_load_flags(font: font_t): number
/**
 * Configures the font-functions structure of the specified
 * #hb_font_t font object to use FreeType font functions.
 * 
 * In particular, you can use this function to configure an
 * existing #hb_face_t face object for use with FreeType font
 * functions even if that #hb_face_t face object was initially
 * created with hb_face_create(), and therefore was not
 * initially configured to use FreeType font functions.
 * 
 * An #hb_face_t face object created with hb_ft_face_create()
 * is preconfigured for FreeType font functions and does not
 * require this function to be used.
 * 
 * <note>Note: Internally, this function creates an FT_Face.
 * </note>
 * @param font #hb_font_t to work upon
 */
function ft_font_set_funcs(font: font_t): void
/**
 * Sets the FT_Load_Glyph load flags for the specified #hb_font_t.
 * 
 * For more information, see
 * https://www.freetype.org/freetype2/docs/reference/ft2-base_interface.html#ft_load_xxx
 * @param font #hb_font_t to work upon
 * @param load_flags The FreeType load flags to set
 */
function ft_font_set_load_flags(font: font_t, load_flags: number): void
function ft_font_unlock_face(font: font_t): void
/**
 * Creates an #hb_blob_t blob from the specified
 * GBytes data structure.
 * @param gbytes the GBytes structure to work upon
 * @returns the new #hb_blob_t blob object
 */
function glib_blob_create(gbytes: GLib.Bytes): blob_t
/**
 * Fetches a Unicode-functions structure that is populated
 * with the appropriate GLib function for each method.
 * @returns a pointer to the #hb_unicode_funcs_t Unicode-functions structure
 */
function glib_get_unicode_funcs(): unicode_funcs_t
/**
 * Fetches the GUnicodeScript identifier that corresponds to the
 * specified #hb_script_t script.
 * @param script The #hb_script_t to query
 * @returns the GUnicodeScript identifier found
 */
function glib_script_from_script(script: script_t): GLib.UnicodeScript
/**
 * Fetches the #hb_script_t script that corresponds to the
 * specified GUnicodeScript identifier.
 * @param script The GUnicodeScript identifier to query
 * @returns the #hb_script_t script found
 */
function glib_script_to_script(script: GLib.UnicodeScript): script_t
/**
 * Returns glyph flags encoded within a #hb_glyph_info_t.
 * @param info a #hb_glyph_info_t
 * @returns The #hb_glyph_flags_t encoded within @info
 */
function glyph_info_get_glyph_flags(info: glyph_info_t): glyph_flags_t
/**
 * Converts `str` representing a BCP 47 language tag to the corresponding
 * #hb_language_t.
 * @param str a string representing       a BCP 47 language tag
 * @returns  The #hb_language_t corresponding to the BCP 47 language tag.
 */
function language_from_string(str: Uint8Array): language_t
/**
 * Fetch the default language from current locale.
 * 
 * <note>Note that the first time this function is called, it calls
 * "setlocale (LC_CTYPE, nullptr)" to fetch current locale.  The underlying
 * setlocale function is, in many implementations, NOT threadsafe.  To avoid
 * problems, call this function once before multiple threads can call it.
 * This function is only used from hb_buffer_guess_segment_properties() by
 * HarfBuzz itself.</note>
 * @returns The default language of the locale as an #hb_language_t
 */
function language_get_default(): language_t
/**
 * Converts an #hb_language_t to a string.
 * @param language The #hb_language_t to convert
 * @returns  A %NULL-terminated string representing the @language. Must not be freed by the caller.
 */
function language_to_string(language: language_t): string | null
/**
 * Tests whether memory allocation for a set was successful.
 * @param map A map
 * @returns %true if allocation succeeded, false otherwise
 */
function map_allocation_successful(map: map_t): bool_t
/**
 * Clears out the contents of `map`.
 * @param map A map
 */
function map_clear(map: map_t): void
/**
 * Creates a new, initially empty map.
 * @returns The new #hb_map_t
 */
function map_create(): map_t
/**
 * Removes `key` and its stored value from `map`.
 * @param map A map
 * @param key The key to delete
 */
function map_del(map: map_t, key: codepoint_t): void
/**
 * Fetches the value stored for `key` in `map`.
 * @param map A map
 * @param key The key to query
 */
function map_get(map: map_t, key: codepoint_t): codepoint_t
/**
 * Fetches the singleton empty #hb_map_t.
 * @returns The empty #hb_map_t
 */
function map_get_empty(): map_t
/**
 * Returns the number of key-value pairs in the map.
 * @param map A map
 * @returns The population of @map
 */
function map_get_population(map: map_t): number
/**
 * Tests whether `key` is an element of `map`.
 * @param map A map
 * @param key The key to query
 * @returns %true if @key is found in @map, false otherwise
 */
function map_has(map: map_t, key: codepoint_t): bool_t
/**
 * Tests whether `map` is empty (contains no elements).
 * @param map A map
 * @returns %true if @map is empty
 */
function map_is_empty(map: map_t): bool_t
/**
 * Stores `key:``value` in the map.
 * @param map A map
 * @param key The key to store in the map
 * @param value The value to store for `key`
 */
function map_set(map: map_t, key: codepoint_t, value: codepoint_t): void
/**
 * Fetches a list of all color layers for the specified glyph index in the specified
 * face. The list returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param glyph The glyph index to query
 * @param start_offset offset of the first layer to retrieve
 * @returns Total number of layers available for the glyph index queried
 */
function ot_color_glyph_get_layers(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* layers */ ot_color_layer_t[] | null ]
/**
 * Fetches the PNG image for a glyph. This function takes a font object, not a face object,
 * as input. To get an optimally sized PNG blob, the UPEM value must be set on the `font`
 * object. If UPEM is unset, the blob returned will be the largest PNG available.
 * @param font #hb_font_t to work upon
 * @param glyph a glyph index
 * @returns An #hb_blob_t containing the PNG image for the glyph, if available
 */
function ot_color_glyph_reference_png(font: font_t, glyph: codepoint_t): blob_t
/**
 * Fetches the SVG document for a glyph. The blob may be either plain text or gzip-encoded.
 * @param face #hb_face_t to work upon
 * @param glyph a svg glyph index
 * @returns An #hb_blob_t containing the SVG document of the glyph, if available
 */
function ot_color_glyph_reference_svg(face: face_t, glyph: codepoint_t): blob_t
/**
 * Tests whether a face includes any `COLR` color layers.
 * @param face #hb_face_t to work upon
 * @returns true if data found, false otherwise
 */
function ot_color_has_layers(face: face_t): bool_t
/**
 * Tests whether a face includes a `CPAL` color-palette table.
 * @param face #hb_face_t to work upon
 * @returns true if data found, false otherwise
 */
function ot_color_has_palettes(face: face_t): bool_t
/**
 * Tests whether a face has PNG glyph images (either in `CBDT` or `sbix` tables).
 * @param face #hb_face_t to work upon
 * @returns true if data found, false otherwise
 */
function ot_color_has_png(face: face_t): bool_t
/**
 * Tests whether a face includes any `SVG` glyph images.
 * @param face #hb_face_t to work upon.
 * @returns true if data found, false otherwise.
 */
function ot_color_has_svg(face: face_t): bool_t
/**
 * Fetches the `name` table Name ID that provides display names for
 * the specificed color in a face's `CPAL` color palette.
 * 
 * Display names can be generic (e.g., "Background") or specific
 * (e.g., "Eye color").
 * @param face #hb_face_t to work upon
 * @param color_index The index of the color
 * @returns the Name ID found for the color.
 */
function ot_color_palette_color_get_name_id(face: face_t, color_index: number): ot_name_id_t
/**
 * Fetches a list of the colors in a color palette.
 * 
 * After calling this function, `colors` will be filled with the palette
 * colors. If `colors` is NULL, the function will just return the number
 * of total colors without storing any actual colors; this can be used
 * for allocating a buffer of suitable size before calling
 * hb_ot_color_palette_get_colors() a second time.
 * @param face #hb_face_t to work upon
 * @param palette_index the index of the color palette to query
 * @param start_offset offset of the first color to retrieve
 * @returns the total number of colors in the palette
 */
function ot_color_palette_get_colors(face: face_t, palette_index: number, start_offset: number): [ /* returnType */ number, /* colors */ color_t[] | null ]
/**
 * Fetches the number of color palettes in a face.
 * @param face #hb_face_t to work upon
 * @returns the number of palettes found
 */
function ot_color_palette_get_count(face: face_t): number
/**
 * Fetches the flags defined for a color palette.
 * @param face #hb_face_t to work upon
 * @param palette_index The index of the color palette
 * @returns the #hb_ot_color_palette_flags_t of the requested color palette
 */
function ot_color_palette_get_flags(face: face_t, palette_index: number): ot_color_palette_flags_t
/**
 * Fetches the `name` table Name ID that provides display names for
 * a `CPAL` color palette.
 * 
 * Palette display names can be generic (e.g., "Default") or provide
 * specific, themed names (e.g., "Spring", "Summer", "Fall", and "Winter").
 * @param face #hb_face_t to work upon
 * @param palette_index The index of the color palette
 * @returns the Named ID found for the palette. If the requested palette has no name the result is #HB_OT_NAME_ID_INVALID.
 */
function ot_color_palette_get_name_id(face: face_t, palette_index: number): ot_name_id_t
/**
 * Sets the font functions to use when working with `font`.
 * @param font #hb_font_t to work upon
 */
function ot_font_set_funcs(font: font_t): void
/**
 * Fetches a list of all feature indexes in the specified face's GSUB table
 * or GPOS table, underneath the specified scripts, languages, and features.
 * If no list of scripts is provided, all scripts will be queried. If no list
 * of languages is provided, all languages will be queried. If no list of
 * features is provided, all features will be queried.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scripts The array of scripts to collect features for
 * @param languages The array of languages to collect features for
 * @param features The array of features to collect
 */
function ot_layout_collect_features(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* feature_indexes */ set_t
/**
 * Fetches a list of all feature-lookup indexes in the specified face's GSUB
 * table or GPOS table, underneath the specified scripts, languages, and
 * features. If no list of scripts is provided, all scripts will be queried.
 * If no list of languages is provided, all languages will be queried. If no
 * list of features is provided, all features will be queried.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scripts The array of scripts to collect lookups for
 * @param languages The array of languages to collect lookups for
 * @param features The array of features to collect lookups for
 */
function ot_layout_collect_lookups(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* lookup_indexes */ set_t
/**
 * Fetches a list of the characters defined as having a variant under the specified
 * "Character Variant" ("cvXX") feature tag.
 * @param face #hb_face_t to work upon
 * @param table_tag table tag to query, "GSUB" or "GPOS".
 * @param feature_index index of feature to query.
 * @param start_offset offset of the first character to retrieve
 * @returns Number of total sample characters in the cvXX feature.
 */
function ot_layout_feature_get_characters(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* characters */ codepoint_t[] ]
/**
 * Fetches a list of all lookups enumerated for the specified feature, in
 * the specified face's GSUB table or GPOS table. The list returned will
 * begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param feature_index The index of the requested feature
 * @param start_offset offset of the first lookup to retrieve
 */
function ot_layout_feature_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
/**
 * Fetches name indices from feature parameters for "Stylistic Set" ('ssXX') or
 * "Character Variant" ('cvXX') features.
 * @param face #hb_face_t to work upon
 * @param table_tag table tag to query, "GSUB" or "GPOS".
 * @param feature_index index of feature to query.
 * @returns %true if data found, false otherwise
 */
function ot_layout_feature_get_name_ids(face: face_t, table_tag: tag_t, feature_index: number): [ /* returnType */ bool_t, /* label_id */ ot_name_id_t, /* tooltip_id */ ot_name_id_t, /* sample_id */ ot_name_id_t, /* num_named_parameters */ number, /* first_param_id */ ot_name_id_t ]
/**
 * Fetches a list of all lookups enumerated for the specified feature, in
 * the specified face's GSUB table or GPOS table, enabled at the specified
 * variations index. The list returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param feature_index The index of the feature to query
 * @param variations_index The index of the feature variation to query
 * @param start_offset offset of the first lookup to retrieve
 */
function ot_layout_feature_with_variations_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, variations_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
/**
 * Fetches a list of all attachment points for the specified glyph in the GDEF
 * table of the face. The list returned will begin at the offset provided.
 * 
 * Useful if the client program wishes to cache the list.
 * @param face The #hb_face_t to work on
 * @param glyph The #hb_codepoint_t code point to query
 * @param start_offset offset of the first attachment point to retrieve
 */
function ot_layout_get_attach_points(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* point_array */ number[] ]
/**
 * Fetches a baseline value from the face.
 * @param font a font
 * @param baseline_tag a baseline tag
 * @param direction text direction.
 * @param script_tag script tag.
 * @param language_tag language tag.
 * @returns if found baseline value in the font.
 */
function ot_layout_get_baseline(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): [ /* returnType */ bool_t, /* coord */ position_t ]
/**
 * Fetches the GDEF class of the requested glyph in the specified face.
 * @param face The #hb_face_t to work on
 * @param glyph The #hb_codepoint_t code point to query
 * @returns The #hb_ot_layout_glyph_class_t glyph class of the given code point in the GDEF table of the face.
 */
function ot_layout_get_glyph_class(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t
/**
 * Retrieves the set of all glyphs from the face that belong to the requested
 * glyph class in the face's GDEF table.
 * @param face The #hb_face_t to work on
 * @param klass The #hb_ot_layout_glyph_class_t GDEF class to retrieve
 */
function ot_layout_get_glyphs_in_class(face: face_t, klass: ot_layout_glyph_class_t): /* glyphs */ set_t
/**
 * Fetches a list of the caret positions defined for a ligature glyph in the GDEF
 * table of the font. The list returned will begin at the offset provided.
 * @param font The #hb_font_t to work on
 * @param direction The #hb_direction_t text direction to use
 * @param glyph The #hb_codepoint_t code point to query
 * @param start_offset offset of the first caret position to retrieve
 */
function ot_layout_get_ligature_carets(font: font_t, direction: direction_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* caret_array */ position_t[] ]
/**
 * Fetches optical-size feature data (i.e., the `size` feature from GPOS). Note that
 * the subfamily_id and the subfamily name string (accessible via the subfamily_name_id)
 * as used here are defined as pertaining only to fonts within a font family that differ
 * specifically in their respective size ranges; other ways to differentiate fonts within
 * a subfamily are not covered by the `size` feature.
 * 
 * For more information on this distinction, see the [`size` feature documentation](
 * https://docs.microsoft.com/en-us/typography/opentype/spec/features_pt#tag-size).
 * @param face #hb_face_t to work upon
 * @returns %true if data found, false otherwise
 */
function ot_layout_get_size_params(face: face_t): [ /* returnType */ bool_t, /* design_size */ number, /* subfamily_id */ number, /* subfamily_name_id */ ot_name_id_t, /* range_start */ number, /* range_end */ number ]
/**
 * Tests whether a face has any glyph classes defined in its GDEF table.
 * @param face #hb_face_t to work upon
 * @returns %true if data found, false otherwise
 */
function ot_layout_has_glyph_classes(face: face_t): bool_t
function ot_layout_has_positioning(face: face_t): bool_t
/**
 * Tests whether the specified face includes any GSUB substitutions.
 * @param face #hb_face_t to work upon
 * @returns %true if data found, false otherwise
 */
function ot_layout_has_substitution(face: face_t): bool_t
/**
 * Fetches the index of a given feature tag in the specified face's GSUB table
 * or GPOS table, underneath the specified script and language.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_index The index of the requested script tag
 * @param language_index The index of the requested language tag
 * @param feature_tag #hb_tag_t of the feature tag requested
 * @returns %true if the feature is found, false otherwise
 */
function ot_layout_language_find_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number, feature_tag: tag_t): [ /* returnType */ bool_t, /* feature_index */ number ]
/**
 * Fetches a list of all features in the specified face's GSUB table
 * or GPOS table, underneath the specified script and language. The list
 * returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_index The index of the requested script tag
 * @param language_index The index of the requested language tag
 * @param start_offset offset of the first feature tag to retrieve
 */
function ot_layout_language_get_feature_indexes(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_indexes */ number[] ]
/**
 * Fetches a list of all features in the specified face's GSUB table
 * or GPOS table, underneath the specified script and language. The list
 * returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_index The index of the requested script tag
 * @param language_index The index of the requested language tag
 * @param start_offset offset of the first feature tag to retrieve
 */
function ot_layout_language_get_feature_tags(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
/**
 * Fetches the tag of a requested feature index in the given face's GSUB or GPOS table,
 * underneath the specified script and language.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_index The index of the requested script tag
 * @param language_index The index of the requested language tag
 * @returns %true if the feature is found, false otherwise
 */
function ot_layout_language_get_required_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [ /* returnType */ bool_t, /* feature_index */ number, /* feature_tag */ tag_t ]
/**
 * Fetches the index of a requested feature in the given face's GSUB or GPOS table,
 * underneath the specified script and language.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_index The index of the requested script tag
 * @param language_index The index of the requested language tag
 * @returns %true if the feature is found, false otherwise
 */
function ot_layout_language_get_required_feature_index(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [ /* returnType */ bool_t, /* feature_index */ number ]
/**
 * Fetches a list of all glyphs affected by the specified lookup in the
 * specified face's GSUB table or GPOS table.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param lookup_index The index of the feature lookup to query
 */
function ot_layout_lookup_collect_glyphs(face: face_t, table_tag: tag_t, lookup_index: number): [ /* glyphs_before */ set_t, /* glyphs_input */ set_t, /* glyphs_after */ set_t, /* glyphs_output */ set_t ]
/**
 * Fetches alternates of a glyph from a given GSUB lookup index.
 * @param face a face.
 * @param lookup_index index of the feature lookup to query.
 * @param glyph a glyph id.
 * @param start_offset starting offset.
 * @returns total number of alternates found in the specific lookup index for the given glyph id.
 */
function ot_layout_lookup_get_glyph_alternates(face: face_t, lookup_index: number, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* alternate_glyphs */ codepoint_t[] ]
/**
 * Compute the transitive closure of glyphs needed for a
 * specified lookup.
 * @param face #hb_face_t to work upon
 * @param lookup_index index of the feature lookup to query
 */
function ot_layout_lookup_substitute_closure(face: face_t, lookup_index: number): /* glyphs */ set_t
/**
 * Tests whether a specified lookup in the specified face would
 * trigger a substitution on the given glyph sequence.
 * @param face #hb_face_t to work upon
 * @param lookup_index The index of the lookup to query
 * @param glyphs The sequence of glyphs to query for substitution
 * @param glyphs_length The length of the glyph sequence
 * @param zero_context #hb_bool_t indicating whether substitutions should be context-free
 * @returns %true if a substitution would be triggered, false otherwise
 */
function ot_layout_lookup_would_substitute(face: face_t, lookup_index: number, glyphs: codepoint_t, glyphs_length: number, zero_context: bool_t): bool_t
/**
 * Compute the transitive closure of glyphs needed for all of the
 * provided lookups.
 * @param face #hb_face_t to work upon
 * @param lookups The set of lookups to query
 */
function ot_layout_lookups_substitute_closure(face: face_t, lookups: set_t): /* glyphs */ set_t
/**
 * Fetches the index of a given language tag in the specified face's GSUB table
 * or GPOS table, underneath the specified script tag.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_index The index of the requested script tag
 * @param language_tag The #hb_tag_t of the requested language
 * @param language_index The index of the requested language
 * @returns %true if the language tag is found, false otherwise
 */
function ot_layout_script_find_language(face: face_t, table_tag: tag_t, script_index: number, language_tag: tag_t, language_index: number): bool_t
/**
 * Fetches a list of language tags in the given face's GSUB or GPOS table, underneath
 * the specified script index. The list returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_index The index of the requested script tag
 * @param start_offset offset of the first language tag to retrieve
 */
function ot_layout_script_get_language_tags(face: face_t, table_tag: tag_t, script_index: number, start_offset: number): [ /* returnType */ number, /* language_tags */ tag_t[] ]
/**
 * Fetches the index of a given language tag in the specified face's GSUB table
 * or GPOS table, underneath the specified script index.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_index The index of the requested script tag
 * @param language_count The number of languages in the specified script
 * @param language_tags The array of language tags
 * @returns %true if the language tag is found, false otherwise
 */
function ot_layout_script_select_language(face: face_t, table_tag: tag_t, script_index: number, language_count: number, language_tags: tag_t): [ /* returnType */ bool_t, /* language_index */ number ]
/**
 * Deprecated since 2.0.0
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_tags Array of #hb_tag_t script tags
 */
function ot_layout_table_choose_script(face: face_t, table_tag: tag_t, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number, /* chosen_script */ tag_t ]
/**
 * Fetches a list of feature variations in the specified face's GSUB table
 * or GPOS table, at the specified variation coordinates.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param coords The variation coordinates to query
 * @param num_coords The number of variation coordinates
 */
function ot_layout_table_find_feature_variations(face: face_t, table_tag: tag_t, coords: number, num_coords: number): [ /* returnType */ bool_t, /* variations_index */ number ]
/**
 * Fetches the index if a given script tag in the specified face's GSUB table
 * or GPOS table.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param script_tag #hb_tag_t of the script tag requested
 * @returns %true if the script is found, false otherwise
 */
function ot_layout_table_find_script(face: face_t, table_tag: tag_t, script_tag: tag_t): [ /* returnType */ bool_t, /* script_index */ number ]
/**
 * Fetches a list of all feature tags in the given face's GSUB or GPOS table.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param start_offset offset of the first feature tag to retrieve
 */
function ot_layout_table_get_feature_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
/**
 * Fetches the total number of lookups enumerated in the specified
 * face's GSUB table or GPOS table.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 */
function ot_layout_table_get_lookup_count(face: face_t, table_tag: tag_t): number
/**
 * Fetches a list of all scripts enumerated in the specified face's GSUB table
 * or GPOS table. The list returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param table_tag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param start_offset offset of the first script tag to retrieve
 */
function ot_layout_table_get_script_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* script_tags */ tag_t[] ]
function ot_layout_table_select_script(face: face_t, table_tag: tag_t, script_count: number, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number, /* chosen_script */ tag_t ]
/**
 * Fetches the specified math constant. For most constants, the value returned
 * is an #hb_position_t.
 * 
 * However, if the requested constant is #HB_OT_MATH_CONSTANT_SCRIPT_PERCENT_SCALE_DOWN,
 * #HB_OT_MATH_CONSTANT_SCRIPT_SCRIPT_PERCENT_SCALE_DOWN or
 * #HB_OT_MATH_CONSTANT_SCRIPT_PERCENT_SCALE_DOWN, then the return value is
 * an integer between 0 and 100 representing that percentage.
 * @param font #hb_font_t to work upon
 * @param constant #hb_ot_math_constant_t the constant to retrieve
 * @returns the requested constant or zero
 */
function ot_math_get_constant(font: font_t, constant: ot_math_constant_t): position_t
/**
 * Fetches the GlyphAssembly for the specified font, glyph index, and direction.
 * Returned are a list of #hb_ot_math_glyph_part_t glyph parts that can be
 * used to draw the glyph and an italics-correction value (if one is defined
 * in the font).
 * 
 * <note>The `direction` parameter is only used to select between horizontal
 * or vertical directions for the construction. Even though all #hb_direction_t
 * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
 * considered.</note>
 * @param font #hb_font_t to work upon
 * @param glyph The index of the glyph to stretch
 * @param direction direction of the stretching (horizontal or vertical)
 * @param start_offset offset of the first glyph part to retrieve
 * @returns the total number of parts in the glyph assembly
 */
function ot_math_get_glyph_assembly(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* parts */ ot_math_glyph_part_t[], /* italics_correction */ position_t ]
/**
 * Fetches an italics-correction value (if one exists) for the specified
 * glyph index.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph index from which to retrieve the value
 * @returns the italics correction of the glyph or zero
 */
function ot_math_get_glyph_italics_correction(font: font_t, glyph: codepoint_t): position_t
/**
 * Fetches the math kerning (cut-ins) value for the specified font, glyph index, and
 * `kern`.
 * 
 * If the MathKern table is found, the function examines it to find a height
 * value that is greater or equal to `correction_height`. If such a height
 * value is found, corresponding kerning value from the table is returned. If
 * no such height value is found, the last kerning value is returned.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph index from which to retrieve the value
 * @param kern The #hb_ot_math_kern_t from which to retrieve the value
 * @param correction_height the correction height to use to determine the kerning.
 * @returns requested kerning value or zero
 */
function ot_math_get_glyph_kerning(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, correction_height: position_t): position_t
/**
 * Fetches a top-accent-attachment value (if one exists) for the specified
 * glyph index.
 * 
 * For any glyph that does not have a top-accent-attachment value - that is,
 * a glyph not covered by the `MathTopAccentAttachment` table (or, when
 * `font` has no `MathTopAccentAttachment` table or no `MATH` table, any
 * glyph) - the function synthesizes a value, returning the position at
 * one-half the glyph's advance width.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph index from which to retrieve the value
 * @returns the top accent attachment of the glyph or 0.5 * the advance               width of @glyph
 */
function ot_math_get_glyph_top_accent_attachment(font: font_t, glyph: codepoint_t): position_t
/**
 * Fetches the MathGlyphConstruction for the specified font, glyph index, and
 * direction. The corresponding list of size variants is returned as a list of
 * #hb_ot_math_glyph_variant_t structs.
 * 
 * <note>The `direction` parameter is only used to select between horizontal
 * or vertical directions for the construction. Even though all #hb_direction_t
 * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
 * considered.</note>
 * @param font #hb_font_t to work upon
 * @param glyph The index of the glyph to stretch
 * @param direction The direction of the stretching (horizontal or vertical)
 * @param start_offset offset of the first variant to retrieve
 * @returns the total number of size variants available or zero
 */
function ot_math_get_glyph_variants(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* variants */ ot_math_glyph_variant_t[] ]
/**
 * Fetches the MathVariants table for the specified font and returns the
 * minimum overlap of connecting glyphs that are required to draw a glyph
 * assembly in the specified direction.
 * 
 * <note>The `direction` parameter is only used to select between horizontal
 * or vertical directions for the construction. Even though all #hb_direction_t
 * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
 * considered.</note>
 * @param font #hb_font_t to work upon
 * @param direction direction of the stretching (horizontal or vertical)
 * @returns requested minimum connector overlap or zero
 */
function ot_math_get_min_connector_overlap(font: font_t, direction: direction_t): position_t
/**
 * Tests whether a face has a `MATH` table.
 * @param face #hb_face_t to test
 * @returns true if the table is found, false otherwise
 */
function ot_math_has_data(face: face_t): bool_t
/**
 * Tests whether the given glyph index is an extended shape in the face.
 * @param face #hb_face_t to work upon
 * @param glyph The glyph index to test
 * @returns true if the glyph is an extended shape, false otherwise
 */
function ot_math_is_glyph_extended_shape(face: face_t, glyph: codepoint_t): bool_t
function ot_meta_get_entry_tags(face: face_t, start_offset: number): [ /* returnType */ number, /* entries */ ot_meta_tag_t[] ]
/**
 * It fetches metadata entry of a given tag from a font.
 * @param face a #hb_face_t object.
 * @param meta_tag tag of metadata you like to have.
 * @returns A blob containing the blob.
 */
function ot_meta_reference_entry(face: face_t, meta_tag: ot_meta_tag_t): blob_t
/**
 * It fetches metrics value corresponding to a given tag from a font.
 * @param font a #hb_font_t object.
 * @param metrics_tag tag of metrics value you like to fetch.
 * @returns Whether found the requested metrics in the font.
 */
function ot_metrics_get_position(font: font_t, metrics_tag: ot_metrics_tag_t): [ /* returnType */ bool_t, /* position */ position_t ]
function ot_metrics_get_variation(font: font_t, metrics_tag: ot_metrics_tag_t): number
function ot_metrics_get_x_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
function ot_metrics_get_y_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
/**
 * Fetches a font name from the OpenType 'name' table.
 * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
 * Returns string in UTF-16 encoding.
 * @param face font face.
 * @param name_id OpenType name identifier to fetch.
 * @param language language to fetch the name for.
 * @returns full length of the requested string, or 0 if not found.
 */
function ot_name_get_utf16(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
/**
 * Fetches a font name from the OpenType 'name' table.
 * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
 * Returns string in UTF-32 encoding.
 * @param face font face.
 * @param name_id OpenType name identifier to fetch.
 * @param language language to fetch the name for.
 * @returns full length of the requested string, or 0 if not found.
 */
function ot_name_get_utf32(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
/**
 * Fetches a font name from the OpenType 'name' table.
 * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
 * Returns string in UTF-8 encoding.
 * @param face font face.
 * @param name_id OpenType name identifier to fetch.
 * @param language language to fetch the name for.
 * @returns full length of the requested string, or 0 if not found.
 */
function ot_name_get_utf8(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ string[] ]
/**
 * Enumerates all available name IDs and language combinations. Returned
 * array is owned by the `face` and should not be modified.  It can be
 * used as long as `face` is alive.
 * @param face font face.
 * @returns Array of available name entries.
 */
function ot_name_list_names(face: face_t): ot_name_entry_t[]
/**
 * Computes the transitive closure of glyphs needed for a specified
 * input buffer under the given font and feature list. The closure is
 * computed as a set, not as a list.
 * @param font #hb_font_t to work upon
 * @param buffer The input buffer to compute from
 * @param features The features enabled on the buffer
 */
function ot_shape_glyphs_closure(font: font_t, buffer: buffer_t, features: feature_t[]): /* glyphs */ set_t
function ot_tag_from_language(language: language_t): tag_t
function ot_tag_to_language(tag: tag_t): language_t
function ot_tag_to_script(tag: tag_t): script_t
function ot_tags_from_script(script: script_t, script_tag_1: tag_t, script_tag_2: tag_t): void
/**
 * Converts an #hb_script_t and an #hb_language_t to script and language tags.
 * @param script an #hb_script_t to convert.
 * @param language an #hb_language_t to convert.
 * @param script_count maximum number of script tags to retrieve (IN) and actual number of script tags retrieved (OUT)
 * @param language_count maximum number of language tags to retrieve (IN) and actual number of language tags retrieved (OUT)
 */
function ot_tags_from_script_and_language(script: script_t, language: language_t, script_count: number | null, language_count: number | null): [ /* script_tags */ tag_t, /* language_tags */ tag_t ]
/**
 * Converts a script tag and a language tag to an #hb_script_t and an
 * #hb_language_t.
 * @param script_tag a script tag
 * @param language_tag a language tag
 * @param script the #hb_script_t corresponding to `script_tag` (OUT).
 * @param language the #hb_language_t corresponding to `script_tag` and `language_tag` (OUT).
 */
function ot_tags_to_script_and_language(script_tag: tag_t, language_tag: tag_t, script: script_t | null, language: language_t | null): void
/**
 * Fetches the variation-axis information corresponding to the specified axis tag
 * in the specified face.
 * @param face #hb_face_t to work upon
 * @param axis_tag The #hb_tag_t of the variation axis to query
 * @param axis_index The index of the variation axis
 */
function ot_var_find_axis(face: face_t, axis_tag: tag_t, axis_index: number): [ /* returnType */ bool_t, /* axis_info */ ot_var_axis_t ]
/**
 * Fetches the variation-axis information corresponding to the specified axis tag
 * in the specified face.
 * @param face #hb_face_t to work upon
 * @param axis_tag The #hb_tag_t of the variation axis to query
 * @returns true if data found, false otherwise
 */
function ot_var_find_axis_info(face: face_t, axis_tag: tag_t): [ /* returnType */ bool_t, /* axis_info */ ot_var_axis_info_t ]
/**
 * Fetches a list of all variation axes in the specified face. The list returned will begin
 * at the offset provided.
 * @param face #hb_face_t to work upon
 * @param start_offset offset of the first lookup to retrieve
 */
function ot_var_get_axes(face: face_t, start_offset: number): [ /* returnType */ number, /* axes_array */ ot_var_axis_t[] ]
/**
 * Fetches the number of OpenType variation axes included in the face.
 * @param face The #hb_face_t to work on
 * @returns the number of variation axes defined
 */
function ot_var_get_axis_count(face: face_t): number
/**
 * Fetches a list of all variation axes in the specified face. The list returned will begin
 * at the offset provided.
 * @param face #hb_face_t to work upon
 * @param start_offset offset of the first lookup to retrieve
 * @returns the number of variation axes in the face
 */
function ot_var_get_axis_infos(face: face_t, start_offset: number): [ /* returnType */ number, /* axes_array */ ot_var_axis_info_t[] ]
/**
 * Fetches the number of named instances included in the face.
 * @param face The #hb_face_t to work on
 * @returns the number of named instances defined
 */
function ot_var_get_named_instance_count(face: face_t): number
/**
 * Tests whether a face includes any OpenType variation data in the `fvar` table.
 * @param face The #hb_face_t to work on
 * @returns true if data found, false otherwise
 */
function ot_var_has_data(face: face_t): bool_t
/**
 * Fetches the design-space coordinates corresponding to the given
 * named instance in the face.
 * @param face The #hb_face_t to work on
 * @param instance_index The index of the named instance to query
 * @returns the number of variation axes in the face
 */
function ot_var_named_instance_get_design_coords(face: face_t, instance_index: number): [ /* returnType */ number, /* coords */ number[] ]
/**
 * Fetches the `name` table Name ID that provides display names for
 * the "PostScript name" defined for the given named instance in the face.
 * @param face The #hb_face_t to work on
 * @param instance_index The index of the named instance to query
 * @returns the Name ID found for the PostScript name
 */
function ot_var_named_instance_get_postscript_name_id(face: face_t, instance_index: number): ot_name_id_t
/**
 * Fetches the `name` table Name ID that provides display names for
 * the "Subfamily name" defined for the given named instance in the face.
 * @param face The #hb_face_t to work on
 * @param instance_index The index of the named instance to query
 * @returns the Name ID found for the Subfamily name
 */
function ot_var_named_instance_get_subfamily_name_id(face: face_t, instance_index: number): ot_name_id_t
/**
 * Normalizes the given design-space coordinates. The minimum and maximum
 * values for the axis are mapped to the interval [-1,1], with the default
 * axis value mapped to 0.
 * 
 * Any additional scaling defined in the face's `avar` table is also
 * applied, as described at https://docs.microsoft.com/en-us/typography/opentype/spec/avar
 * @param face The #hb_face_t to work on
 * @param coords_length The length of the coordinate array
 * @param design_coords The design-space coordinates to normalize
 */
function ot_var_normalize_coords(face: face_t, coords_length: number, design_coords: number): /* normalized_coords */ number
/**
 * Normalizes all of the coordinates in the given list of variation axes.
 * @param face The #hb_face_t to work on
 * @param variations The array of variations to normalize
 * @param variations_length The number of variations to normalize
 */
function ot_var_normalize_variations(face: face_t, variations: variation_t, variations_length: number): /* coords */ number[]
/**
 * Converts an ISO 15924 script tag to a corresponding #hb_script_t.
 * @param tag an #hb_tag_t representing an ISO 15924 tag.
 * @returns An #hb_script_t corresponding to the ISO 15924 tag.
 */
function script_from_iso15924_tag(tag: tag_t): script_t
/**
 * Converts a string `str` representing an ISO 15924 script tag to a
 * corresponding #hb_script_t. Shorthand for hb_tag_from_string() then
 * hb_script_from_iso15924_tag().
 * @param str a string representing an       ISO 15924 tag.
 * @returns An #hb_script_t corresponding to the ISO 15924 tag.
 */
function script_from_string(str: Uint8Array): script_t
/**
 * Fetches the #hb_direction_t of a script when it is
 * set horizontally. All right-to-left scripts will return
 * #HB_DIRECTION_RTL. All left-to-right scripts will return
 * #HB_DIRECTION_LTR.  Scripts that can be written either
 * horizontally or vertically will return #HB_DIRECTION_INVALID.
 * Unknown scripts will return #HB_DIRECTION_LTR.
 * @param script The #hb_script_t to query
 * @returns The horizontal #hb_direction_t of @script
 */
function script_get_horizontal_direction(script: script_t): direction_t
/**
 * Converts an #hb_script_t to a corresponding ISO 15924 script tag.
 * @param script an #hb_script_t to convert.
 * @returns An #hb_tag_t representing an ISO 15924 script tag.
 */
function script_to_iso15924_tag(script: script_t): tag_t
/**
 * Checks the equality of two #hb_segment_properties_t's.
 * @param a first #hb_segment_properties_t to compare.
 * @param b second #hb_segment_properties_t to compare.
 * @returns %true if all properties of @a equal those of @b, %false otherwise.
 */
function segment_properties_equal(a: segment_properties_t, b: segment_properties_t): bool_t
/**
 * Creates a hash representing `p`.
 * @param p #hb_segment_properties_t to hash.
 * @returns A hash of @p.
 */
function segment_properties_hash(p: segment_properties_t): number
/**
 * Adds `codepoint` to `set`.
 * @param set A set
 * @param codepoint The element to add to `set`
 */
function set_add(set: set_t, codepoint: codepoint_t): void
/**
 * Adds all of the elements from `first` to `last`
 * (inclusive) to `set`.
 * @param set A set
 * @param first The first element to add to `set`
 * @param last The final element to add to `set`
 */
function set_add_range(set: set_t, first: codepoint_t, last: codepoint_t): void
/**
 * Tests whether memory allocation for a set was successful.
 * @param set A set
 * @returns %true if allocation succeeded, false otherwise
 */
function set_allocation_successful(set: set_t): bool_t
/**
 * Clears out the contents of a set.
 * @param set A set
 */
function set_clear(set: set_t): void
/**
 * Creates a new, initially empty set.
 * @returns The new #hb_set_t
 */
function set_create(): set_t
/**
 * Removes `codepoint` from `set`.
 * @param set A set
 * @param codepoint Removes `codepoint` from `set`
 */
function set_del(set: set_t, codepoint: codepoint_t): void
/**
 * Removes all of the elements from `first` to `last`
 * (inclusive) from `set`.
 * @param set A set
 * @param first The first element to remove from `set`
 * @param last The final element to remove from `set`
 */
function set_del_range(set: set_t, first: codepoint_t, last: codepoint_t): void
/**
 * Fetches the singleton empty #hb_set_t.
 * @returns The empty #hb_set_t
 */
function set_get_empty(): set_t
/**
 * Finds the largest element in the set.
 * @param set A set
 * @returns maximum of @set, or %HB_SET_VALUE_INVALID if @set is empty.
 */
function set_get_max(set: set_t): codepoint_t
/**
 * Finds the smallest element in the set.
 * @param set A set
 * @returns minimum of @set, or %HB_SET_VALUE_INVALID if @set is empty.
 */
function set_get_min(set: set_t): codepoint_t
/**
 * Returns the number of elements in the set.
 * @param set A set
 * @returns The population of @set
 */
function set_get_population(set: set_t): number
/**
 * Tests whether `codepoint` belongs to `set`.
 * @param set A set
 * @param codepoint The element to query
 * @returns %true if @codepoint is in @set, false otherwise
 */
function set_has(set: set_t, codepoint: codepoint_t): bool_t
/**
 * Makes `set` the intersection of `set` and `other`.
 * @param set A set
 * @param other Another set
 */
function set_intersect(set: set_t, other: set_t): void
/**
 * Inverts the contents of `set`.
 * @param set A set
 */
function set_invert(set: set_t): void
/**
 * Tests whether a set is empty (contains no elements).
 * @param set a set.
 * @returns %true if @set is empty
 */
function set_is_empty(set: set_t): bool_t
/**
 * Tests whether `set` and `other` are equal (contain the same
 * elements).
 * @param set A set
 * @param other Another set
 * @returns %TRUE if the two sets are equal, %FALSE otherwise.
 */
function set_is_equal(set: set_t, other: set_t): bool_t
/**
 * Tests whether `set` is a subset of `larger_set`.
 * @param set A set
 * @param larger_set Another set
 * @returns %TRUE if the @set is a subset of (or equal to) @larger_set, %FALSE otherwise.
 */
function set_is_subset(set: set_t, larger_set: set_t): bool_t
/**
 * Fetches the next element in `set` that is greater than current value of `codepoint`.
 * 
 * Set `codepoint` to %HB_SET_VALUE_INVALID to get started.
 * @param set A set
 * @param codepoint Input = Code point to query             Output = Code point retrieved
 * @returns %true if there was a next value, false otherwise
 */
function set_next(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
/**
 * Fetches the next consecutive range of elements in `set` that
 * are greater than current value of `last`.
 * 
 * Set `last` to %HB_SET_VALUE_INVALID to get started.
 * @param set A set
 * @param last Input = The current last code point in the range         Output = The last code point in the range
 * @returns %true if there was a next range, false otherwise
 */
function set_next_range(set: set_t, last: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
/**
 * Fetches the previous element in `set` that is lower than current value of `codepoint`.
 * 
 * Set `codepoint` to %HB_SET_VALUE_INVALID to get started.
 * @param set A set
 * @param codepoint Input = Code point to query             Output = Code point retrieved
 * @returns %true if there was a previous value, false otherwise
 */
function set_previous(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
/**
 * Fetches the previous consecutive range of elements in `set` that
 * are greater than current value of `last`.
 * 
 * Set `first` to %HB_SET_VALUE_INVALID to get started.
 * @param set A set
 * @param first Input = The current first code point in the range         Output = The first code point in the range
 * @returns %true if there was a previous range, false otherwise
 */
function set_previous_range(set: set_t, first: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
/**
 * Makes the contents of `set` equal to the contents of `other`.
 * @param set A set
 * @param other Another set
 */
function set_set(set: set_t, other: set_t): void
/**
 * Subtracts the contents of `other` from `set`.
 * @param set A set
 * @param other Another set
 */
function set_subtract(set: set_t, other: set_t): void
/**
 * Makes `set` the symmetric difference of `set`
 * and `other`.
 * @param set A set
 * @param other Another set
 */
function set_symmetric_difference(set: set_t, other: set_t): void
/**
 * Makes `set` the union of `set` and `other`.
 * @param set A set
 * @param other Another set
 */
function set_union(set: set_t, other: set_t): void
/**
 * Shapes `buffer` using `font` turning its Unicode characters content to
 * positioned glyphs. If `features` is not %NULL, it will be used to control the
 * features applied during shaping. If two `features` have the same tag but
 * overlapping ranges the value of the feature with the higher index takes
 * precedence.
 * @param font an #hb_font_t to use for shaping
 * @param buffer an #hb_buffer_t to shape
 * @param features an array of user    specified #hb_feature_t or %NULL
 */
function shape(font: font_t, buffer: buffer_t, features: feature_t[] | null): void
/**
 * See hb_shape() for details. If `shaper_list` is not %NULL, the specified
 * shapers will be used in the given order, otherwise the default shapers list
 * will be used.
 * @param font an #hb_font_t to use for shaping
 * @param buffer an #hb_buffer_t to shape
 * @param features an array of user    specified #hb_feature_t or %NULL
 * @param shaper_list a %NULL-terminated    array of shapers to use or %NULL
 * @returns false if all shapers failed, true otherwise
 */
function shape_full(font: font_t, buffer: buffer_t, features: feature_t[] | null, shaper_list: string[] | null): bool_t
/**
 * Retrieves the list of shapers supported by HarfBuzz.
 * @returns an array of    constant strings
 */
function shape_list_shapers(): string[]
/**
 * Constructs a shaping plan for a combination of `face,` `user_features,` `props,`
 * and `shaper_list`.
 * @param face #hb_face_t to use
 * @param props The #hb_segment_properties_t of the segment
 * @param user_features The list of user-selected features
 * @param shaper_list List of shapers to try
 * @returns The shaping plan
 */
function shape_plan_create(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
/**
 * The variable-font version of #hb_shape_plan_create.
 * Constructs a shaping plan for a combination of `face,` `user_features,` `props,`
 * and `shaper_list,` plus the variation-space coordinates `coords`.
 * @param face #hb_face_t to use
 * @param props The #hb_segment_properties_t of the segment
 * @param user_features The list of user-selected features
 * @param coords The list of variation-space coordinates
 * @param shaper_list List of shapers to try
 * @returns The shaping plan
 */
function shape_plan_create2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t
/**
 * Creates a cached shaping plan suitable for reuse, for a combination
 * of `face,` `user_features,` `props,` and `shaper_list`.
 * @param face #hb_face_t to use
 * @param props The #hb_segment_properties_t of the segment
 * @param user_features The list of user-selected features
 * @param shaper_list List of shapers to try
 * @returns The shaping plan
 */
function shape_plan_create_cached(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
/**
 * The variable-font version of #hb_shape_plan_create_cached.
 * Creates a cached shaping plan suitable for reuse, for a combination
 * of `face,` `user_features,` `props,` and `shaper_list,` plus the
 * variation-space coordinates `coords`.
 * @param face #hb_face_t to use
 * @param props The #hb_segment_properties_t of the segment
 * @param user_features The list of user-selected features
 * @param coords The list of variation-space coordinates
 * @param shaper_list List of shapers to try
 * @returns The shaping plan
 */
function shape_plan_create_cached2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t
/**
 * Executes the given shaping plan on the specified buffer, using
 * the given `font` and `features`.
 * @param shape_plan A shaping plan
 * @param font The #hb_font_t to use
 * @param buffer The #hb_buffer_t to work upon
 * @param features Features to enable
 */
function shape_plan_execute(shape_plan: shape_plan_t, font: font_t, buffer: buffer_t, features: feature_t[]): bool_t
/**
 * Fetches the singleton empty shaping plan.
 * @returns The empty shaping plan
 */
function shape_plan_get_empty(): shape_plan_t
/**
 * Fetches the shaper from a given shaping plan.
 * @param shape_plan A shaping plan
 * @returns The shaper
 */
function shape_plan_get_shaper(shape_plan: shape_plan_t): string | null
/**
 * Converts a string into an #hb_tag_t. Valid tags
 * are four characters. Shorter input strings will be
 * padded with spaces. Longer input strings will be
 * truncated.
 * @param str String to convert
 * @returns The #hb_tag_t corresponding to @str
 */
function tag_from_string(str: Uint8Array): tag_t
/**
 * Converts an #hb_tag_t to a string and returns it in `buf`.
 * Strings will be four characters long.
 * @param tag #hb_tag_t to convert
 */
function tag_to_string(tag: tag_t): /* buf */ Uint8Array
/**
 * Retrieves the Canonical Combining Class (ccc) property
 * of code point `unicode`.
 * @param ufuncs The Unicode-functions structure
 * @param unicode The code point to query
 * @returns The #hb_unicode_combining_class_t of @unicode
 */
function unicode_combining_class(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
/**
 * Composes the code point sequence `a,``b` by canonical equivalence into
 * code point `ab`.
 * @param ufuncs The Unicode-functions structure
 * @param a The first code point to compose
 * @param b The second code point to compose
 * @returns True is @a,@b composed, false otherwise
 */
function unicode_compose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [ /* returnType */ bool_t, /* ab */ codepoint_t ]
/**
 * Decomposes code point `ab` by canonical equivalence, into code points
 * `a` and `b`.
 * @param ufuncs The Unicode-functions structure
 * @param ab The code point to decompose
 * @returns True if @ab decomposed, false otherwise
 */
function unicode_decompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [ /* returnType */ bool_t, /* a */ codepoint_t, /* b */ codepoint_t ]
/**
 * Fetches the compatibility decomposition of a Unicode
 * code point. Deprecated.
 * @param ufuncs The Unicode-functions structure
 * @param u Code point to decompose
 */
function unicode_decompose_compatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [ /* returnType */ number, /* decomposed */ codepoint_t ]
function unicode_eastasian_width(ufuncs: unicode_funcs_t, unicode: codepoint_t): number
/**
 * Creates a new #hb_unicode_funcs_t structure of Unicode functions.
 * @param parent Parent Unicode-functions structure
 * @returns The Unicode-functions structure
 */
function unicode_funcs_create(parent: unicode_funcs_t | null): unicode_funcs_t
/**
 * Fetches a pointer to the default Unicode-functions structure that is used
 * when no functions are explicitly set on #hb_buffer_t.
 * @returns a pointer to the #hb_unicode_funcs_t Unicode-functions structure
 */
function unicode_funcs_get_default(): unicode_funcs_t
/**
 * Fetches the singleton empty Unicode-functions structure.
 * @returns The empty Unicode-functions structure
 */
function unicode_funcs_get_empty(): unicode_funcs_t
/**
 * Fetches the parent of the Unicode-functions structure
 * `ufuncs`.
 * @param ufuncs The Unicode-functions structure
 * @returns The parent Unicode-functions structure
 */
function unicode_funcs_get_parent(ufuncs: unicode_funcs_t): unicode_funcs_t
/**
 * Tests whether the specified Unicode-functions structure
 * is immutable.
 * @param ufuncs The Unicode-functions structure
 * @returns %true if @ufuncs is immutable, false otherwise
 */
function unicode_funcs_is_immutable(ufuncs: unicode_funcs_t): bool_t
/**
 * Makes the specified Unicode-functions structure
 * immutable.
 * @param ufuncs The Unicode-functions structure
 */
function unicode_funcs_make_immutable(ufuncs: unicode_funcs_t): void
/**
 * Sets the implementation function for #hb_unicode_combining_class_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicode_funcs_set_combining_class_func(ufuncs: unicode_funcs_t, func: unicode_combining_class_func_t): void
/**
 * Sets the implementation function for #hb_unicode_compose_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicode_funcs_set_compose_func(ufuncs: unicode_funcs_t, func: unicode_compose_func_t): void
function unicode_funcs_set_decompose_compatibility_func(ufuncs: unicode_funcs_t, func: unicode_decompose_compatibility_func_t): void
/**
 * Sets the implementation function for #hb_unicode_decompose_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicode_funcs_set_decompose_func(ufuncs: unicode_funcs_t, func: unicode_decompose_func_t): void
function unicode_funcs_set_eastasian_width_func(ufuncs: unicode_funcs_t, func: unicode_eastasian_width_func_t): void
/**
 * Sets the implementation function for #hb_unicode_general_category_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicode_funcs_set_general_category_func(ufuncs: unicode_funcs_t, func: unicode_general_category_func_t): void
/**
 * Sets the implementation function for #hb_unicode_mirroring_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicode_funcs_set_mirroring_func(ufuncs: unicode_funcs_t, func: unicode_mirroring_func_t): void
/**
 * Sets the implementation function for #hb_unicode_script_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicode_funcs_set_script_func(ufuncs: unicode_funcs_t, func: unicode_script_func_t): void
/**
 * Retrieves the General Category (gc) property
 * of code point `unicode`.
 * @param ufuncs The Unicode-functions structure
 * @param unicode The code point to query
 * @returns The #hb_unicode_general_category_t of @unicode
 */
function unicode_general_category(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
/**
 * Retrieves the Bi-directional Mirroring Glyph code
 * point defined for code point `unicode`.
 * @param ufuncs The Unicode-functions structure
 * @param unicode The code point to query
 * @returns The #hb_codepoint_t of the Mirroring Glyph for @unicode
 */
function unicode_mirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
/**
 * Retrieves the #hb_script_t script to which code
 * point `unicode` belongs.
 * @param ufuncs The Unicode-functions structure
 * @param unicode The code point to query
 * @returns The #hb_script_t of @unicode
 */
function unicode_script(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
function variation_from_string(str: string | null, len: number, variation: variation_t): bool_t
function variation_to_string(variation: variation_t, buf: string | null, size: number): void
/**
 * Returns library version as three integer components.
 */
function version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
/**
 * Tests the library version against a minimum value,
 * as three integer components.
 * @param major Library major version component
 * @param minor Library minor version component
 * @param micro Library micro version component
 * @returns True if the library is equal to or greater than the test value, false otherwise
 */
function version_atleast(major: number, minor: number, micro: number): bool_t
/**
 * Returns library version as a string with three components.
 * @returns Library version string
 */
function version_string(): string | null
interface buffer_message_func_t {
    (buffer: buffer_t, font: font_t, message: string | null): bool_t
}
interface destroy_func_t {
    (): void
}
interface font_get_font_extents_func_t {
    (font: font_t, font_data: any | null, extents: font_extents_t): bool_t
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the advance for a specified glyph. The
 * method must return an #hb_position_t.
 * @callback 
 * @param font 
 * @param font_data 
 * @param glyph 
 */
interface font_get_glyph_advance_func_t {
    (font: font_t, font_data: any | null, glyph: codepoint_t): position_t
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the advances for a sequence of glyphs.
 * @callback 
 * @param font 
 * @param font_data 
 * @param count 
 * @param first_glyph 
 * @param glyph_stride 
 * @param first_advance 
 * @param advance_stride 
 */
interface font_get_glyph_advances_func_t {
    (font: font_t, font_data: any | null, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the (X,Y) coordinates (in font units) for a
 * specified contour point in a glyph. Each coordinate must be returned as
 * an #hb_position_t output parameter.
 * @callback 
 * @param font 
 * @param font_data 
 * @param glyph 
 * @param point_index 
 * @param x 
 * @param y 
 */
interface font_get_glyph_contour_point_func_t {
    (font: font_t, font_data: any | null, glyph: codepoint_t, point_index: number, x: position_t, y: position_t): bool_t
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the extents for a specified glyph. Extents must be
 * returned in an #hb_glyph_extents output parameter.
 * @callback 
 * @param font 
 * @param font_data 
 * @param glyph 
 * @param extents 
 */
interface font_get_glyph_extents_func_t {
    (font: font_t, font_data: any | null, glyph: codepoint_t, extents: glyph_extents_t): bool_t
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the glyph ID that corresponds to a glyph-name
 * string.
 * @callback 
 * @param font 
 * @param font_data 
 * @param name 
 * @param len 
 * @param glyph 
 */
interface font_get_glyph_from_name_func_t {
    (font: font_t, font_data: any | null, name: string | null, len: number, glyph: codepoint_t): bool_t
}
interface font_get_glyph_func_t {
    (font: font_t, font_data: any | null, unicode: codepoint_t, variation_selector: codepoint_t, glyph: codepoint_t): bool_t
}
interface font_get_glyph_kerning_func_t {
    (font: font_t, font_data: any | null, first_glyph: codepoint_t, second_glyph: codepoint_t): position_t
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the glyph name that corresponds to a
 * glyph ID. The name should be returned in a string output parameter.
 * @callback 
 * @param font 
 * @param font_data 
 * @param glyph 
 * @param name 
 * @param size 
 */
interface font_get_glyph_name_func_t {
    (font: font_t, font_data: any | null, glyph: codepoint_t, name: string | null, size: number): bool_t
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the (X,Y) coordinates (in font units) of the
 * origin for a glyph. Each coordinate must be returned in an #hb_position_t
 * output parameter.
 * @callback 
 * @param font 
 * @param font_data 
 * @param glyph 
 * @param x 
 * @param y 
 */
interface font_get_glyph_origin_func_t {
    (font: font_t, font_data: any | null, glyph: codepoint_t, x: position_t, y: position_t): bool_t
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the nominal glyph ID for a specified Unicode code
 * point. Glyph IDs must be returned in a #hb_codepoint_t output parameter.
 * @callback 
 * @param font 
 * @param font_data 
 * @param unicode 
 * @param glyph 
 */
interface font_get_nominal_glyph_func_t {
    (font: font_t, font_data: any | null, unicode: codepoint_t, glyph: codepoint_t): bool_t
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the nominal glyph IDs for a sequence of
 * Unicode code points. Glyph IDs must be returned in a #hb_codepoint_t
 * output parameter.
 * @callback 
 * @param font 
 * @param font_data 
 * @param count 
 * @param first_unicode 
 * @param unicode_stride 
 * @param first_glyph 
 * @param glyph_stride 
 */
interface font_get_nominal_glyphs_func_t {
    (font: font_t, font_data: any | null, count: number, first_unicode: codepoint_t, unicode_stride: number, first_glyph: codepoint_t, glyph_stride: number): number
}
/**
 * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
 * 
 * This method should retrieve the glyph ID for a specified Unicode code point
 * followed by a specified Variation Selector code point. Glyph IDs must be
 * returned in a #hb_codepoint_t output parameter.
 * @callback 
 * @param font 
 * @param font_data 
 * @param unicode 
 * @param variation_selector 
 * @param glyph 
 */
interface font_get_variation_glyph_func_t {
    (font: font_t, font_data: any | null, unicode: codepoint_t, variation_selector: codepoint_t, glyph: codepoint_t): bool_t
}
interface reference_table_func_t {
    (face: face_t, tag: tag_t): blob_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the Canonical Combining Class (ccc)
 * property for a specified Unicode code point.
 * @callback 
 * @param ufuncs A Unicode-functions structure
 * @param unicode The code point to query
 * @returns The #hb_unicode_combining_class_t of @unicode
 */
interface unicode_combining_class_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should compose a sequence of two input Unicode code
 * points by canonical equivalence, returning the composed code
 * point in a #hb_codepoint_t output parameter (if successful).
 * The method must return an #hb_bool_t indicating the success
 * of the composition.
 * @callback 
 * @param ufuncs A Unicode-functions structure
 * @param a The first code point to compose
 * @param b The second code point to compose
 * @returns True is @a,@b composed, false otherwise
 */
interface unicode_compose_func_t {
    (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): bool_t
}
/**
 * Fully decompose `u` to its Unicode compatibility decomposition. The codepoints of the decomposition will be written to `decomposed`.
 * The complete length of the decomposition will be returned.
 * 
 * If `u` has no compatibility decomposition, zero should be returned.
 * 
 * The Unicode standard guarantees that a buffer of length %HB_UNICODE_MAX_DECOMPOSITION_LEN codepoints will always be sufficient for any
 * compatibility decomposition plus an terminating value of 0.  Consequently, `decompose` must be allocated by the caller to be at least this length.  Implementations
 * of this function type must ensure that they do not write past the provided array.
 * @callback 
 * @param ufuncs a Unicode function structure
 * @param u codepoint to decompose
 * @param decomposed address of codepoint array (of length %HB_UNICODE_MAX_DECOMPOSITION_LEN) to write decomposition into
 * @returns number of codepoints in the full compatibility decomposition of @u, or 0 if no decomposition available.
 */
interface unicode_decompose_compatibility_func_t {
    (ufuncs: unicode_funcs_t, u: codepoint_t, decomposed: codepoint_t): number
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should decompose an input Unicode code point,
 * returning the two decomposed code points in #hb_codepoint_t
 * output parameters (if successful). The method must return an
 * #hb_bool_t indicating the success of the composition.
 * @callback 
 * @param ufuncs A Unicode-functions structure
 * @param ab The code point to decompose
 * @returns True if @ab decomposed, false otherwise
 */
interface unicode_decompose_func_t {
    (ufuncs: unicode_funcs_t, ab: codepoint_t): bool_t
}
interface unicode_eastasian_width_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): number
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the General Category property for
 * a specified Unicode code point.
 * @callback 
 * @param ufuncs A Unicode-functions structure
 * @param unicode The code point to query
 * @returns The #hb_unicode_general_category_t of @unicode
 */
interface unicode_general_category_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the Bi-Directional Mirroring Glyph
 * code point for a specified Unicode code point.
 * 
 * <note>Note: If a code point does not have a specified
 * Bi-Directional Mirroring Glyph defined, the method should
 * return the original code point.</note>
 * @callback 
 * @param ufuncs A Unicode-functions structure
 * @param unicode The code point to query
 * @returns The #hb_codepoint_t of the Mirroring Glyph for @unicode
 */
interface unicode_mirroring_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the Script property for a
 * specified Unicode code point.
 * @callback 
 * @param ufuncs A Unicode-functions structure
 * @param unicode The code point to query
 * @returns The #hb_script_t of @unicode
 */
interface unicode_script_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
}
interface blob_t {
}

/**
 * Data type for blobs. A blob wraps a chunk of binary
 * data and facilitates its lifecycle management between
 * a client program and HarfBuzz.
 * @record 
 */
class blob_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.blob_t

    static name: string
}

interface buffer_t {
}

/**
 * The main structure holding the input text and its properties before shaping,
 * and output glyphs and their information after shaping.
 * @record 
 */
class buffer_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.buffer_t

    static name: string
}

interface face_t {
}

/**
 * Data type for holding font faces.
 * @record 
 */
class face_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.face_t

    static name: string
}

interface feature_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.feature_t

    /**
     * The #hb_tag_t tag of the feature
     * @field 
     */
    tag: tag_t
    /**
     * The value of the feature. 0 disables the feature, non-zero (usually
     * 1) enables the feature.  For features implemented as lookup type 3 (like
     * 'salt') the `value` is a one based index into the alternates.
     * @field 
     */
    value: number
    /**
     * the cluster to start applying this feature setting (inclusive).
     * @field 
     */
    start: number
    /**
     * the cluster to end applying this feature setting (exclusive).
     * @field 
     */
    end: number

    // Owm methods of HarfBuzz-0.0.HarfBuzz.feature_t

    /**
     * Converts a #hb_feature_t into a %NULL-terminated string in the format
     * understood by hb_feature_from_string(). The client in responsible for
     * allocating big enough size for `buf,` 128 bytes is more than enough.
     */
    _string(): /* buf */ string[]
}

/**
 * The #hb_feature_t is the structure that holds information about requested
 * feature application. The feature will be applied with the given value to all
 * glyphs which are in clusters between `start` (inclusive) and `end` (exclusive).
 * Setting start to `HB_FEATURE_GLOBAL_START` and end to `HB_FEATURE_GLOBAL_END`
 * specifies that the feature always applies to the entire buffer.
 * @record 
 */
class feature_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.feature_t

    static name: string
}

interface font_extents_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.font_extents_t

    /**
     * The height of typographic ascenders.
     * @field 
     */
    ascender: position_t
    /**
     * The depth of typographic descenders.
     * @field 
     */
    descender: position_t
    /**
     * The suggested line-spacing gap.
     * @field 
     */
    line_gap: position_t
}

/**
 * Font-wide extent values, measured in font units.
 * 
 * Note that typically `ascender` is positive and `descender`
 * negative, in coordinate systems that grow up.
 * @record 
 */
class font_extents_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.font_extents_t

    static name: string
}

interface font_funcs_t {
}

/**
 * Data type containing a set of virtual methods used for
 * working on #hb_font_t font objects.
 * 
 * HarfBuzz provides a lightweight default function for each of
 * the methods in #hb_font_funcs_t. Client programs can implement
 * their own replacements for the individual font functions, as
 * needed, and replace the default by calling the setter for a
 * method.
 * @record 
 */
class font_funcs_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.font_funcs_t

    static name: string
}

interface font_t {
}

class font_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.font_t

    static name: string
}

interface glyph_extents_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_extents_t

    /**
     * Distance from the x-origin to the left extremum of the glyph.
     * @field 
     */
    x_bearing: position_t
    /**
     * Distance from the top extremum of the glyph to the y-origin.
     * @field 
     */
    y_bearing: position_t
    /**
     * Distance from the left extremum of the glyph to the right extremum.
     * @field 
     */
    width: position_t
    /**
     * Distance from the top extremum of the glyph to the bottom extremum.
     * @field 
     */
    height: position_t
}

/**
 * Glyph extent values, measured in font units.
 * 
 * Note that `height` is negative, in coordinate systems that grow up.
 * @record 
 */
class glyph_extents_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_extents_t

    static name: string
}

interface glyph_info_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_info_t

    /**
     * either a Unicode code point (before shaping) or a glyph index
     *             (after shaping).
     * @field 
     */
    codepoint: codepoint_t
    /**
     * the index of the character in the original text that corresponds
     *           to this #hb_glyph_info_t, or whatever the client passes to
     *           hb_buffer_add(). More than one #hb_glyph_info_t can have the same
     *           `cluster` value, if they resulted from the same character (e.g. one
     *           to many glyph substitution), and when more than one character gets
     *           merged in the same glyph (e.g. many to one glyph substitution) the
     *           #hb_glyph_info_t will have the smallest cluster value of them.
     *           By default some characters are merged into the same cluster
     *           (e.g. combining marks have the same cluster as their bases)
     *           even if they are separate glyphs, hb_buffer_set_cluster_level()
     *           allow selecting more fine-grained cluster handling.
     * @field 
     */
    cluster: number
}

/**
 * The #hb_glyph_info_t is the structure that holds information about the
 * glyphs and their relation to input text.
 * @record 
 */
class glyph_info_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_info_t

    static name: string
}

interface glyph_position_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_position_t

    /**
     * how much the line advances after drawing this glyph when setting
     *             text in horizontal direction.
     * @field 
     */
    x_advance: position_t
    /**
     * how much the line advances after drawing this glyph when setting
     *             text in vertical direction.
     * @field 
     */
    y_advance: position_t
    /**
     * how much the glyph moves on the X-axis before drawing it, this
     *            should not affect how much the line advances.
     * @field 
     */
    x_offset: position_t
    /**
     * how much the glyph moves on the Y-axis before drawing it, this
     *            should not affect how much the line advances.
     * @field 
     */
    y_offset: position_t
}

/**
 * The #hb_glyph_position_t is the structure that holds the positions of the
 * glyph in both horizontal and vertical directions. All positions in
 * #hb_glyph_position_t are relative to the current point.
 * @record 
 */
class glyph_position_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_position_t

    static name: string
}

interface language_t {

    // Owm methods of HarfBuzz-0.0.HarfBuzz.language_t

    /**
     * Converts an #hb_language_t to a string.
     * @returns  A %NULL-terminated string representing the @language. Must not be freed by the caller.
     */
    _string(): string | null
}

class language_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.language_t

    static name: string
}

interface map_t {
}

/**
 * Data type for holding integer-to-integer hash maps.
 * @record 
 */
class map_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.map_t

    static name: string
}

interface ot_color_layer_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t

    glyph: codepoint_t
    color_index: number
}

/**
 * Pairs of glyph and color index.
 * @record 
 */
class ot_color_layer_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t

    static name: string
}

interface ot_math_glyph_part_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t

    /**
     * The glyph index of the variant part
     * @field 
     */
    glyph: codepoint_t
    /**
     * The length of the connector on the starting side of the variant part
     * @field 
     */
    start_connector_length: position_t
    /**
     * The length of the connector on the ending side of the variant part
     * @field 
     */
    end_connector_length: position_t
    /**
     * The total advance of the part
     * @field 
     */
    full_advance: position_t
    /**
     * #hb_ot_math_glyph_part_flags_t flags for the part
     * @field 
     */
    flags: ot_math_glyph_part_flags_t
}

/**
 * Data type to hold information for a "part" component of a math-variant glyph.
 * Large variants for stretchable math glyphs (such as parentheses) can be constructed
 * on the fly from parts.
 * @record 
 */
class ot_math_glyph_part_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t

    static name: string
}

interface ot_math_glyph_variant_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t

    /**
     * The glyph index of the variant
     * @field 
     */
    glyph: codepoint_t
    /**
     * The advance width of the variant
     * @field 
     */
    advance: position_t
}

/**
 * Data type to hold math-variant information for a glyph.
 * @record 
 */
class ot_math_glyph_variant_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t

    static name: string
}

interface ot_name_entry_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t

    /**
     * name ID
     * @field 
     */
    name_id: ot_name_id_t
    /**
     * language
     * @field 
     */
    language: language_t
}

/**
 * Structure representing a name ID in a particular language.
 * @record 
 */
class ot_name_entry_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t

    static name: string
}

interface ot_var_axis_info_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t

    /**
     * Index of the axis in the variation-axis array
     * @field 
     */
    axis_index: number
    /**
     * The #hb_tag_t tag identifying the design variation of the axis
     * @field 
     */
    tag: tag_t
    /**
     * The `name` table Name ID that provides display names for the axis
     * @field 
     */
    name_id: ot_name_id_t
    /**
     * The #hb_ot_var_axis_flags_t flags for the axis
     * @field 
     */
    flags: ot_var_axis_flags_t
    /**
     * The mininum value on the variation axis that the font covers
     * @field 
     */
    min_value: number
    /**
     * The position on the variation axis corresponding to the font's defaults
     * @field 
     */
    default_value: number
    /**
     * The maximum value on the variation axis that the font covers
     * @field 
     */
    max_value: number
}

/**
 * Data type for holding variation-axis values.
 * 
 * The minimum, default, and maximum values are in un-normalized, user scales.
 * 
 * <note>Note: at present, the only flag defined for `flags` is
 * #HB_OT_VAR_AXIS_FLAG_HIDDEN.</note>
 * @record 
 */
class ot_var_axis_info_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t

    static name: string
}

interface ot_var_axis_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t

    tag: tag_t
    name_id: ot_name_id_t
    min_value: number
    default_value: number
    max_value: number
}

class ot_var_axis_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t

    static name: string
}

interface segment_properties_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.segment_properties_t

    /**
     * the #hb_direction_t of the buffer, see hb_buffer_set_direction().
     * @field 
     */
    direction: direction_t
    /**
     * the #hb_script_t of the buffer, see hb_buffer_set_script().
     * @field 
     */
    script: script_t
    /**
     * the #hb_language_t of the buffer, see hb_buffer_set_language().
     * @field 
     */
    language: language_t
}

/**
 * The structure that holds various text properties of an #hb_buffer_t. Can be
 * set and retrieved using hb_buffer_set_segment_properties() and
 * hb_buffer_get_segment_properties(), respectively.
 * @record 
 */
class segment_properties_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.segment_properties_t

    static name: string
}

interface set_t {
}

/**
 * Data type for holding a set of integers. #hb_set_t's are
 * used to gather and contain glyph IDs, Unicode code
 * points, and various other collections of discrete
 * values.
 * @record 
 */
class set_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.set_t

    static name: string
}

interface shape_plan_t {
}

/**
 * Data type for holding a shaping plan.
 * 
 * Shape plans contain information about how HarfBuzz will shape a
 * particular text segment, based on the segment's properties and the
 * capabilities in the font face in use.
 * 
 * Shape plans can be queried about how shaping will perform, given a set
 * of specific input parameters (script, language, direction, features,
 * etc.).
 * @record 
 */
class shape_plan_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.shape_plan_t

    static name: string
}

interface unicode_funcs_t {
}

/**
 * Data type containing a set of virtual methods used for
 * accessing various Unicode character properties.
 * 
 * HarfBuzz provides a default function for each of the
 * methods in #hb_unicode_funcs_t. Client programs can implement
 * their own replacements for the individual Unicode functions, as
 * needed, and replace the default by calling the setter for a
 * method.
 * @record 
 */
class unicode_funcs_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.unicode_funcs_t

    static name: string
}

interface user_data_key_t {
}

/**
 * Data structure for holding user-data keys.
 * @record 
 */
class user_data_key_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.user_data_key_t

    static name: string
}

interface variation_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.variation_t

    /**
     * The #hb_tag_t tag of the variation-axis name
     * @field 
     */
    tag: tag_t
    /**
     * The value of the variation axis
     * @field 
     */
    value: number

    // Owm methods of HarfBuzz-0.0.HarfBuzz.variation_t

    _string(buf: string | null, size: number): void
}

/**
 * Data type for holding variation data. Registered OpenType
 * variation-axis tags are listed at
 * https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg
 * @record 
 */
class variation_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.variation_t

    static name: string
}

interface var_int_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.var_int_t

    u32: number
    i32: number
    u16: number[]
    i16: number[]
    u8: Uint8Array
    i8: Uint8Array
}

class var_int_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.var_int_t

    static name: string
}

    type bool_t = number
    type codepoint_t = number
    type color_t = number
    type font_get_font_h_extents_func_t = font_get_font_extents_func_t
    type font_get_font_v_extents_func_t = font_get_font_extents_func_t
    type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t
    type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t
    type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t
    type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t
    type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t
    type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t
    type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t
    type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t
    type mask_t = number
    type ot_name_id_t = number
    type position_t = number
    type tag_t = number
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

export default HarfBuzz;
// END