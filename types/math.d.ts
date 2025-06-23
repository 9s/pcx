/** @noSelfInFile */

declare namespace math {
    /**
     * Clamps a value between a minimum and maximum.
     * @param x The value to clamp.
     * @param min The minimum bound.
     * @param max The maximum bound.
     * @returns The clamped value.
     */
    function clamp(x: number, min: number, max: number): number;

    /**
     * Linearly interpolates between a and b by t.
     * @param a Start value.
     * @param b End value.
     * @param t Interpolation factor [0-1].
     * @returns The interpolated value.
     */
    function lerp(a: number, b: number, t: number): number;

    /**
     * Rounds x to the nearest integer.
     * @param x The number to round.
     */
    function round(x: number): number;

    /**
     * Rounds x upward (ceiling).
     * @param x The number to round up.
     */
    function round_up(x: number): number;

    /**
     * Rounds x downward (floor).
     * @param x The number to round down.
     */
    function round_down(x: number): number;

    /**
     * Rounds x to the nearest multiple of step.
     * @param x The value to round.
     * @param step The step to round to.
     */
    function round_to_nearest(x: number, step: number): number;

    /**
     * Returns the sign of x as -1, 0, or 1.
     * @param x The input number.
     */
    function sign(x: number): -1 | 0 | 1;

    /**
     * Maps x from one range to another.
     * @param x The value to map.
     * @param in_min Input range minimum.
     * @param in_max Input range maximum.
     * @param out_min Output range minimum.
     * @param out_max Output range maximum.
     */
    function map(
        x: number,
        in_min: number,
        in_max: number,
        out_min: number,
        out_max: number
    ): number;

    /**
     * Clamps x between 0 and 1.
     * @param x The value to saturate.
     */
    function saturate(x: number): number;

    /**
     * Returns true if x is NaN.
     * @param x The number to check.
     */
    function is_nan(x: number): boolean;

    /**
     * Returns true if x is infinite.
     * @param x The number to check.
     */
    function is_inf(x: number): boolean;

    /**
     * Smooth Hermite interpolation between edge0 and edge1.
     * @param edge0 Lower edge of the curve.
     * @param edge1 Upper edge of the curve.
     * @param x The value to interpolate.
     */
    function smoothstep(edge0: number, edge1: number, x: number): number;

    /**
     * Computes normalized parameter t where x lies between a and b.
     * @param a Start of range.
     * @param b End of range.
     * @param x Value to inverse-interpolate.
     */
    function inverse_lerp(a: number, b: number, x: number): number;

    /**
     * Returns the fractional part of x.
     * @param x The number to process.
     */
    function fract(x: number): number;

    /**
     * Wraps x within the range min to max.
     * @param x The value to wrap.
     * @param min Minimum of the range.
     * @param max Maximum of the range.
     */
    function wrap(x: number, min: number, max: number): number;
}
