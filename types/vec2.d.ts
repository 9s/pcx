/** @noSelfInFile */

/**
 * 2D Vector memory access and constructor API
 */
declare namespace vec2 {
    /**
     * Reads a vec2 from memory (float precision).
     * @param address Memory address to read from.
     * @returns The read Vec2.
     */
    function read_float(address: number): Vec2;

    /**
     * Reads a vec2 from memory (double precision).
     * @param address Memory address to read from.
     * @returns The read Vec2.
     */
    function read_double(address: number): Vec2;

    /**
     * Writes a vec2 to memory (float precision).
     * @param address Memory address to write to.
     * @param v The Vec2 to write.
     */
    function write_float(address: number, v: Vec2): void;

    /**
     * Writes a vec2 to memory (double precision).
     * @param address Memory address to write to.
     * @param v The Vec2 to write.
     */
    function write_double(address: number, v: Vec2): void;
}

/**
 * Represents a 2D vector with x and y components.
 */
declare class Vec2 {
    /**
     * Constructs a 2D vector.
     * @param x The x component.
     * @param y The y component.
     */
    constructor(x: number, y: number);

    x: number;
    y: number;

    static __add(a: Vec2, b: Vec2): Vec2;

    static __sub(a: Vec2, b: Vec2): Vec2;

    static __mul(v: Vec2, scalar: number): Vec2;

    static __div(v: Vec2, scalar: number): Vec2;

    static __unm(v: Vec2): Vec2;

    static __len(v: Vec2): number;

    static __eq(a: Vec2, b: Vec2): boolean;

    /** @returns The vector's length. */
    length(): number;

    /** @returns The squared length. */
    length_squared(): number;

    /** @returns A normalized copy of the vector. */
    normalize(): Vec2;

    /**
     * Computes the dot product with another vector.
     * @param v The other vector.
     */
    dot(v: Vec2): number;

    /**
     * Computes the distance to another vector.
     * @param v The other vector.
     */
    distance(v: Vec2): number;

    /** @returns A new copy of the vector. */
    clone(): Vec2;

    /** @returns A perpendicular vector. */
    perpendicular(): Vec2;

    /** @returns The angle in radians from the X-axis. */
    angle(): number;

    /**
     * Rotates the vector by the specified angle.
     * @param radians Angle in radians.
     */
    rotate(radians: number): Vec2;

    /**
     * Linearly interpolates toward another vector.
     * @param v Target vector.
     * @param t Interpolation factor.
     */
    lerp(v: Vec2, t: number): Vec2;

    /**
     * Projects this vector onto another.
     * @param v The vector to project onto.
     */
    project_onto(v: Vec2): Vec2;

    /**
     * Clamps the vector's length.
     * @param min Minimum length.
     * @param max Maximum length.
     */
    clamp_length(min: number, max: number): Vec2;

    /**
     * Reflects the vector off a normal.
     * @param normal The normal vector.
     */
    reflect(normal: Vec2): Vec2;
}
