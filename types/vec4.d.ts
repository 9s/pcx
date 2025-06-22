/** @noSelfInFile **/
export default class vec4 {
    x: number;
    y: number;
    z: number;
    w: number;

    constructor(x: number, y: number, z: number, w: number);

    static read_float(address: number): vec4;

    static read_double(address: number): vec4;

    static write_float(address: number, v: vec4): void;

    static write_double(address: number, v: vec4): void;

    length(): number;

    normalize(): vec4;

    dot(v: vec4): number;

    clone(): vec4;

    lerp(v: vec4, t: number): vec4;

    clamp_length(min: number, max: number): vec4;

    project_onto(v: vec4): vec4;

    reflect(normal: vec4): vec4;
}
