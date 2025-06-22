/** @noSelfInFile **/
export default class vec3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number);

    static normalize_angle(angle: number): number;

    static from_qangle(pitch: number, yaw: number): vec3;

    static read_float(address: number): vec3;

    static read_double(address: number): vec3;

    static write_float(address: number, v: vec3): void;

    static write_double(address: number, v: vec3): void;

    length(): number;

    length_2d(): number;

    length_2d_squared(): number;

    normalize(): vec3;

    clamp_length(min: number, max: number): vec3;

    dot(v: vec3): number;

    cross(v: vec3): vec3;

    distance(v: vec3): number;

    angle_between(v: vec3): number;

    reflect(normal: vec3): vec3;

    project_onto(v: vec3): vec3;

    rotate_axis(angle: number, axis: vec3): vec3;

    clone(): vec3;

    lerp(v: vec3, t: number): vec3;

    slerp(v: vec3, t: number): vec3;

    to_forward(): vec3;

    to_right(): vec3;

    to_up(): vec3;

    to_qangle(): vec3;

    normalize_angles(): vec3;

    clamp_angles(): vec3;
}
