/** @noSelfInFile */

/**
 * 4x4 Matrix memory access and constructors
 */
declare namespace mat4 {
    /**
     * Reads a mat4 from memory.
     * @param address Memory address to read from.
     */
    function read(address: number): mat4;

    /**
     * Constructs a matrix from a nested number table.
     * @param table A 4x4 nested array of numbers.
     */
    function from_table(table: number[][]): mat4;

    /**
     * Creates a perspective projection matrix.
     * @param fov_y Vertical field of view in radians.
     * @param aspect Aspect ratio.
     * @param near Near clipping plane.
     * @param far Far clipping plane.
     */
    function perspective(fov_y: number, aspect: number, near: number, far: number): mat4;

    /**
     * Creates an orthographic projection matrix.
     * @param left Left plane.
     * @param right Right plane.
     * @param bottom Bottom plane.
     * @param top Top plane.
     * @param near Near clipping plane.
     * @param far Far clipping plane.
     */
    function orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): mat4;

    /**
     * Creates a transformation matrix from position, rotation (quaternion), and scale.
     * @param position Translation vector.
     * @param rotation_quat Rotation as a quaternion.
     * @param scale Scale vector.
     */
    function trs(position: vec3, rotation_quat: vec4, scale: vec3): mat4;

    /**
     * Creates a view matrix looking from eye to target.
     * @param eye Camera position.
     * @param target Target position.
     * @param up Up direction vector.
     */
    function look_at(eye: vec3, target: vec3, up: vec3): mat4;
}

/**
 * Represents a 4x4 transformation matrix.
 */
declare class mat4 {
    constructor();

    static __mul(a: mat4, b: mat4): mat4;
    static __mul(a: mat4, v: vec4): vec4;

    /**
     * Gets a matrix element.
     * @param row Row index (1-4).
     * @param col Column index (1-4).
     */
    get(row: number, col: number): number;

    /**
     * Sets a matrix element.
     * @param row Row index (1-4).
     * @param col Column index (1-4).
     * @param value Value to set.
     */
    set(row: number, col: number, value: number): void;

    /**
     * Returns a matrix row.
     * @param index Row index (1-4).
     */
    row(index: number): vec4;

    /**
     * Returns a matrix column.
     * @param index Column index (1-4).
     */
    column(index: number): vec4;

    /** @returns A copy of this matrix. */
    clone(): mat4;

    /** @returns A nested number array of matrix values. */
    to_table(): number[][];

    /** @returns The transposed matrix. */
    transpose(): mat4;

    /** @returns The inverse of this matrix. */
    inverse(): mat4;

    /** @returns The matrix determinant. */
    determinant(): number;

    /**
     * Applies scaling.
     * @param vec Scale vector.
     */
    scale(vec: vec3): mat4;

    /**
     * Applies translation.
     * @param vec Translation vector.
     */
    translate(vec: vec3): mat4;

    /**
     * Applies rotation.
     * @param angle Rotation angle in radians.
     * @param axis Rotation axis vector.
     */
    rotate(angle: number, axis: vec3): mat4;

    /**
     * Transforms a vec3 with this matrix.
     * @param vec The vector to transform.
     */
    apply_to_vec3(vec: vec3): vec3;

    /** @returns Decomposed position, rotation, and scale. */
    decompose(): [vec3, vec4, vec3];

    /**
     * Compares this matrix to another.
     * @param other The matrix to compare with.
     * @param tolerance Optional epsilon.
     */
    equals(other: mat4, tolerance?: number): boolean;

    /** @returns True if this matrix is an identity matrix. */
    is_identity(): boolean;
}
