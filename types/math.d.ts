/** @noSelfInFile **/
declare namespace math {
    // Clamps a value between a minimum and maximum.
    function clamp(x: number, min: number, max: number): number;

    // Linearly interpolates between a and b by t.
    function lerp(a: number, b: number, t: number): number;

    // Rounds x to the nearest integer.
    function round(x: number): number;

    // Rounds x upward (ceiling).
    function round_up(x: number): number;

    // Rounds x downward (floor).
    function round_down(x: number): number;

    // Rounds x to the nearest multiple of step.
    function round_to_nearest(x: number, step: number): number;

    // Returns the sign of x as -1, 0, or 1.
    function sign(x: number): -1 | 0 | 1;

    // Maps x from one range to another.
    function map(x: number, in_min: number, in_max: number, out_min: number, out_max: number): number;

    // Clamps x between 0 and 1.
    function saturate(x: number): number;

    // Returns true if x is NaN.
    function is_nan(x: number): boolean;

    // Returns true if x is infinite.
    function is_inf(x: number): boolean;

    // Smooth Hermite interpolation between edge0 and edge1.
    function smoothstep(edge0: number, edge1: number, x: number): number;

    // Computes normalized parameter t where x lies between a and b.
    function inverse_lerp(a: number, b: number, x: number): number;

    // Returns the fractional part of x.
    function fract(x: number): number;

    // Wraps x within the range min to max.
    function wrap(x: number, min: number, max: number): number;
}
