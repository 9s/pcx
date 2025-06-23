/** @noSelfInFile */

/**
 * 3D Vector memory access and constructor API
 */
declare namespace vec3 {
    /**
     * Reads a Vec3 from memory (float precision).
     * @param address Memory address to read from.
     */
    function read_float(address: number): Vec3;

    /**
     * Reads a Vec3 from memory (double precision).
     * @param address Memory address to read from.
     */
    function read_double(address: number): Vec3;

    /**
     * Writes a Vec3 to memory (float precision).
     * @param address Memory address to write to.
     * @param v The Vec3 value to write.
     */
    function write_float(address: number, v: Vec3): void;

    /**
     * Writes a Vec3 to memory (double precision).
     * @param address Memory address to write to.
     * @param v The Vec3 value to write.
     */
    function write_double(address: number, v: Vec3): void;

    /**
     * Normalizes a single angle value.
     * @param angle The angle to normalize.
     */
    function normalize_angle(angle: number): number;

    /**
     * Converts pitch and yaw into a direction vector.
     * @param pitch Pitch angle in radians.
     * @param yaw Yaw angle in radians.
     */
    function from_qangle(pitch: number, yaw: number): Vec3;
}

/**
 * Represents a 3D vector with x, y, and z components.
 */
declare class Vec3 {
    /**
     * Constructs a 3D vector.
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     */
    constructor(x: number, y: number, z: number);

    x: number;
    y: number;
    z: number;

    static __add(a: Vec3, b: Vec3): Vec3;

    static __sub(a: Vec3, b: Vec3): Vec3;

    static __mul(v: Vec3, scalar: number): Vec3;

    static __div(v: Vec3, scalar: number): Vec3;

    static __unm(v: Vec3): Vec3;

    static __len(v: Vec3): number;

    static __eq(a: Vec3, b: Vec3): boolean;

    length(): number;
    length_2d(): number;
    length_2d_squared(): number;

    normalize(): Vec3;

    /**
     * Clamps the length of the vector.
     * @param min Minimum length.
     * @param max Maximum length.
     */
    clamp_length(min: number, max: number): Vec3;

    /**
     * Computes the dot product with another vector.
     * @param v The other vector.
     */
    dot(v: Vec3): number;

    /**
     * Computes the cross product with another vector.
     * @param v The other vector.
     */
    cross(v: Vec3): Vec3;

    /**
     * Computes the distance to another vector.
     * @param v The other vector.
     */
    distance(v: Vec3): number;

    /**
     * Computes the angle in radians between this vector and another.
     * @param v The other vector.
     */
    angle_between(v: Vec3): number;

    /**
     * Reflects the vector off a surface normal.
     * @param normal The surface normal.
     */
    reflect(normal: Vec3): Vec3;

    /**
     * Projects this vector onto another vector.
     * @param v The vector to project onto.
     */
    project_onto(v: Vec3): Vec3;

    /**
     * Rotates this vector around an axis by a given angle.
     * @param angle The rotation angle in radians.
     * @param axis The axis to rotate around.
     */
    rotate_axis(angle: number, axis: Vec3): Vec3;

    clone(): Vec3;

    /**
     * Linearly interpolates toward another vector.
     * @param v Target vector.
     * @param t Interpolation factor.
     */
    lerp(v: Vec3, t: number): Vec3;

    /**
     * Spherically interpolates toward another vector.
     * @param v Target vector.
     * @param t Interpolation factor.
     */
    slerp(v: Vec3, t: number): Vec3;

    to_forward(): Vec3;

    to_right(): Vec3;

    to_up(): Vec3;

    to_qangle(): Vec3;

    normalize_angles(): Vec3;

    clamp_angles(): Vec3;
}
