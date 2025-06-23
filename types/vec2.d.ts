/** @noSelfInFile */

/**
 * 2D Vector memory access and constructor API
 */
declare namespace vec2 {
    /**
     * Reads a vec2 from memory (float precision).
     * @param address Memory address to read from.
     * @returns The read vec2.
     */
    function read_float(address: number): vec2;

    /**
     * Reads a vec2 from memory (double precision).
     * @param address Memory address to read from.
     * @returns The read vec2.
     */
    function read_double(address: number): vec2;

    /**
     * Writes a vec2 to memory (float precision).
     * @param address Memory address to write to.
     * @param v The vec2 to write.
     */
    function write_float(address: number, v: vec2): void;

    /**
     * Writes a vec2 to memory (double precision).
     * @param address Memory address to write to.
     * @param v The vec2 to write.
     */
    function write_double(address: number, v: vec2): void;
}

/**
 * Represents a 2D vector with x and y components.
 */
declare class vec2 {
    /**
     * Constructs a 2D vector.
     * @param x The x component.
     * @param y The y component.
     */
    constructor(x: number, y: number);

    x: number;
    y: number;

    static __add(a: vec2, b: vec2): vec2;

    static __sub(a: vec2, b: vec2): vec2;

    static __mul(v: vec2, scalar: number): vec2;

    static __div(v: vec2, scalar: number): vec2;

    static __unm(v: vec2): vec2;

    static __len(v: vec2): number;

    static __eq(a: vec2, b: vec2): boolean;

    /** @returns The vector's length. */
    length(): number;

    /** @returns The squared length. */
    length_squared(): number;

    /** @returns A normalized copy of the vector. */
    normalize(): vec2;

    /**
     * Computes the dot product with another vector.
     * @param v The other vector.
     */
    dot(v: vec2): number;

    /**
     * Computes the distance to another vector.
     * @param v The other vector.
     */
    distance(v: vec2): number;

    /** @returns A new copy of the vector. */
    clone(): vec2;

    /** @returns A perpendicular vector. */
    perpendicular(): vec2;

    /** @returns The angle in radians from the X-axis. */
    angle(): number;

    /**
     * Rotates the vector by the specified angle.
     * @param radians Angle in radians.
     */
    rotate(radians: number): vec2;

    /**
     * Linearly interpolates toward another vector.
     * @param v Target vector.
     * @param t Interpolation factor.
     */
    lerp(v: vec2, t: number): vec2;

    /**
     * Projects this vector onto another.
     * @param v The vector to project onto.
     */
    project_onto(v: vec2): vec2;

    /**
     * Clamps the vector's length.
     * @param min Minimum length.
     * @param max Maximum length.
     */
    clamp_length(min: number, max: number): vec2;

    /**
     * Reflects the vector off a normal.
     * @param normal The normal vector.
     */
    reflect(normal: vec2): vec2;
}
