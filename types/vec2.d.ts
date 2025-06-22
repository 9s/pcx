/** @noSelfInFile **/

class vec2 {
    x: number;
    y: number;

    constructor(x: number, y: number);

    // Memory access
    static read_float(address: number): vec2;

    static read_double(address: number): vec2;

    static write_float(address: number, v: vec2): void;

    static write_double(address: number, v: vec2): void;

    // Returns the vector's length.
    length(): number;

    // Returns the squared length.
    length_squared(): number;

    // Returns a normalized copy.
    normalize(): vec2;

    // Returns the dot product with another vector.
    dot(v: vec2): number;

    // Returns distance to another vector.
    distance(v: vec2): number;

    // Returns a new copy of the vector.
    clone(): vec2;

    // Returns a perpendicular vector.
    perpendicular(): vec2;

    // Returns the angle in radians from the X-axis.
    angle(): number;

    // Rotates the vector by angle in radians.
    rotate(radians: number): vec2;

    // Linearly interpolates toward vector v by factor t.
    lerp(v: vec2, t: number): vec2;

    // Projects this vector onto vector v.
    project_onto(v: vec2): vec2;

    // Clamps the vector's length between min and max.
    clamp_length(min: number, max: number): vec2;

    // Reflects the vector off the given normal.
    reflect(normal: vec2): vec2;
}
