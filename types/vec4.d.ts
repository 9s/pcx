/** @noSelfInFile */

/**
 * 4D Vector memory access and constructor API
 */
declare namespace vec4 {
    /**
     * Reads a vec4 from memory (float precision).
     * @param address Memory address to read from.
     */
    function read_float(address: number): vec4;

    /**
     * Reads a vec4 from memory (double precision).
     * @param address Memory address to read from.
     */
    function read_double(address: number): vec4;

    /**
     * Writes a vec4 to memory (float precision).
     * @param address Memory address to write to.
     * @param v The vec4 value to write.
     */
    function write_float(address: number, v: vec4): void;

    /**
     * Writes a vec4 to memory (double precision).
     * @param address Memory address to write to.
     * @param v The vec4 value to write.
     */
    function write_double(address: number, v: vec4): void;
}

/**
 * Represents a 4D vector with x, y, z, and w components.
 */
declare class vec4 {
    /**
     * Constructs a 4D vector.
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     * @param w The w component.
     */
    constructor(x: number, y: number, z: number, w: number);

    x: number;
    y: number;
    z: number;
    w: number;

    static __add(a: vec4, b: vec4): vec4;

    static __sub(a: vec4, b: vec4): vec4;

    static __mul(v: vec4, scalar: number): vec4;

    static __div(v: vec4, scalar: number): vec4;

    static __unm(v: vec4): vec4;

    static __len(v: vec4): number;

    static __eq(a: vec4, b: vec4): boolean;

    /** @returns The vector's length. */
    length(): number;

    /** @returns A normalized copy of the vector. */
    normalize(): vec4;

    /**
     * Computes the dot product with another vector.
     * @param v The other vec4.
     */
    dot(v: vec4): number;

    /** @returns A new copy of the vector. */
    clone(): vec4;

    /**
     * Linearly interpolates toward another vector.
     * @param v Target vector.
     * @param t Interpolation factor.
     */
    lerp(v: vec4, t: number): vec4;

    /**
     * Clamps the length of the vector.
     * @param min Minimum length.
     * @param max Maximum length.
     */
    clamp_length(min: number, max: number): vec4;

    /**
     * Projects this vector onto another.
     * @param v The vector to project onto.
     */
    project_onto(v: vec4): vec4;

    /**
     * Reflects the vector off a surface normal.
     * @param normal The surface normal.
     */
    reflect(normal: vec4): vec4;
}
