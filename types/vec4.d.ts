/** @noSelfInFile */

/**
 * 4D Vector memory access and constructor API
 */
declare namespace vec4 {
    /**
     * Reads a Vec4 from memory (float precision).
     * @param address Memory address to read from.
     */
    function read_float(address: number): Vec4;

    /**
     * Reads a Vec4 from memory (double precision).
     * @param address Memory address to read from.
     */
    function read_double(address: number): Vec4;

    /**
     * Writes a Vec4 to memory (float precision).
     * @param address Memory address to write to.
     * @param v The Vec4 value to write.
     */
    function write_float(address: number, v: Vec4): void;

    /**
     * Writes a Vec4 to memory (double precision).
     * @param address Memory address to write to.
     * @param v The Vec4 value to write.
     */
    function write_double(address: number, v: Vec4): void;
}

/**
 * Represents a 4D vector with x, y, z, and w components.
 */
declare class Vec4 {
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

    static __add(a: Vec4, b: Vec4): Vec4;

    static __sub(a: Vec4, b: Vec4): Vec4;

    static __mul(v: Vec4, scalar: number): Vec4;

    static __div(v: Vec4, scalar: number): Vec4;

    static __unm(v: Vec4): Vec4;

    static __len(v: Vec4): number;

    static __eq(a: Vec4, b: Vec4): boolean;

    /** @returns The vector's length. */
    length(): number;

    /** @returns A normalized copy of the vector. */
    normalize(): Vec4;

    /**
     * Computes the dot product with another vector.
     * @param v The other Vec4.
     */
    dot(v: Vec4): number;

    /** @returns A new copy of the vector. */
    clone(): Vec4;

    /**
     * Linearly interpolates toward another vector.
     * @param v Target vector.
     * @param t Interpolation factor.
     */
    lerp(v: Vec4, t: number): Vec4;

    /**
     * Clamps the length of the vector.
     * @param min Minimum length.
     * @param max Maximum length.
     */
    clamp_length(min: number, max: number): Vec4;

    /**
     * Projects this vector onto another.
     * @param v The vector to project onto.
     */
    project_onto(v: Vec4): Vec4;

    /**
     * Reflects the vector off a surface normal.
     * @param normal The surface normal.
     */
    reflect(normal: Vec4): Vec4;
}
