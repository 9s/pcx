/** @noSelfInFile */

/**
 * 3D Vector memory access and constructor API
 */
declare namespace vec3 {
    /**
     * Reads a vec3 from memory (float precision).
     * @param address Memory address to read from.
     */
    function read_float(address: number): vec3;

    /**
     * Reads a vec3 from memory (double precision).
     * @param address Memory address to read from.
     */
    function read_double(address: number): vec3;

    /**
     * Writes a vec3 to memory (float precision).
     * @param address Memory address to write to.
     * @param v The vec3 value to write.
     */
    function write_float(address: number, v: vec3): void;

    /**
     * Writes a vec3 to memory (double precision).
     * @param address Memory address to write to.
     * @param v The vec3 value to write.
     */
    function write_double(address: number, v: vec3): void;

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
    function from_qangle(pitch: number, yaw: number): vec3;
}

/**
 * Represents a 3D vector with x, y, and z components.
 */
declare class vec3 {
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

    static __add(a: vec3, b: vec3): vec3;

    static __sub(a: vec3, b: vec3): vec3;

    static __mul(v: vec3, scalar: number): vec3;

    static __div(v: vec3, scalar: number): vec3;

    static __unm(v: vec3): vec3;

    static __len(v: vec3): number;

    static __eq(a: vec3, b: vec3): boolean;

    length(): number;
    length_2d(): number;
    length_2d_squared(): number;

    normalize(): vec3;

    /**
     * Clamps the length of the vector.
     * @param min Minimum length.
     * @param max Maximum length.
     */
    clamp_length(min: number, max: number): vec3;

    /**
     * Computes the dot product with another vector.
     * @param v The other vector.
     */
    dot(v: vec3): number;

    /**
     * Computes the cross product with another vector.
     * @param v The other vector.
     */
    cross(v: vec3): vec3;

    /**
     * Computes the distance to another vector.
     * @param v The other vector.
     */
    distance(v: vec3): number;

    /**
     * Computes the angle in radians between this vector and another.
     * @param v The other vector.
     */
    angle_between(v: vec3): number;

    /**
     * Reflects the vector off a surface normal.
     * @param normal The surface normal.
     */
    reflect(normal: vec3): vec3;

    /**
     * Projects this vector onto another vector.
     * @param v The vector to project onto.
     */
    project_onto(v: vec3): vec3;

    /**
     * Rotates this vector around an axis by a given angle.
     * @param angle The rotation angle in radians.
     * @param axis The axis to rotate around.
     */
    rotate_axis(angle: number, axis: vec3): vec3;

    clone(): vec3;

    /**
     * Linearly interpolates toward another vector.
     * @param v Target vector.
     * @param t Interpolation factor.
     */
    lerp(v: vec3, t: number): vec3;

    /**
     * Spherically interpolates toward another vector.
     * @param v Target vector.
     * @param t Interpolation factor.
     */
    slerp(v: vec3, t: number): vec3;

    to_forward(): vec3;

    to_right(): vec3;

    to_up(): vec3;

    to_qangle(): vec3;

    normalize_angles(): vec3;

    clamp_angles(): vec3;
}
