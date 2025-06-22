/** @noSelfInFile **/
import vec4 from './vec4';
import vec3 from './vec3';

declare class mat4 {
    constructor();

    static from_table(table: number[][]): mat4;

    static read(address: number): mat4;

    static perspective(fov_y: number, aspect: number, near: number, far: number): mat4;

    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): mat4;

    static trs(position: vec3, rotation_quat: vec4, scale: vec3): mat4;

    static look_at(eye: vec3, target: vec3, up: vec3): mat4;

    get(row: number, col: number): number;

    set(row: number, col: number, value: number): void;

    row(index: number): vec4;

    column(index: number): vec4;

    clone(): mat4;

    to_table(): number[][];

    transpose(): mat4;

    inverse(): mat4;

    determinant(): number;

    scale(v: vec3): mat4;

    translate(v: vec3): mat4;

    rotate(angle: number, axis: vec3): mat4;

    apply_to_vec3(v: vec3): vec3;

    decompose(): { position: vec3; rotation: vec3; scale: vec3 };

    equals(other: mat4, tolerance?: number): boolean;

    is_identity(): boolean;
}
