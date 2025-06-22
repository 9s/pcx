/** @noSelfInFile **/
declare namespace render {
    // Creates a font with the specified file path and size. If only name is provided instead of filepath, it will try to create font from c:/windows/fonts/
    function create_font(nameOrPath: string, size: number): number;

    // Creates a font with the specified font label, size, and buffer created via m.alloc.
    function create_font_from_buffer(name: string, size: number, buffer_handle: number): number;

    // Retrieves the screen size for reference.
    function get_viewport_size(): [number, number];

    // Draws a diagonal line.
    function draw_line(
        x1: number, y1: number, x2: number, y2: number,
        r: number, g: number, b: number, a: number,
        thickness: number
    ): void;

    // Draws a rectangle.
    function draw_rectangle(
        x: number, y: number, width: number, height: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean, rounding?: number
    ): void;

    // Draws a filled circle.
    function draw_circle(
        x: number, y: number, radius: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean
    ): void;

    // Draws text.
    function draw_text(
        font: number, text: string,
        x: number, y: number,
        r: number, g: number, b: number, a: number,
        outline_thickness: number,
        o_r: number, o_g: number, o_b: number, o_a: number
    ): void;

    // Draws triangle.
    function draw_triangle(
        x1: number, y1: number, x2: number, y2: number, x3: number, y3: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean
    ): void;

    // Gets overlay FPS.
    function get_fps(): number;

    // Creates a bitmap from a URL.
    function create_bitmap_from_url(url: string): number;

    // Creates a bitmap from buffer handle.
    function create_bitmap_from_buffer(buffer_handle: number): number;

    // Creates a bitmap from a file.
    function create_bitmap_from_file(file_name: string): number;

    // Begins a clipping region. All subsequent rendering will be restricted to this rectangle until render.clip_end() is called. Useful for scrollable UI panels or constrained draw areas.
    function clip_start(x: number, y: number, width: number, height: number): void;

    // Ends the active clipping region started by render.clip_start. Restores full rendering output to the entire screen or parent context.
    function clip_end(): void;

    // Draws a rectangle filled with a four-corner gradient. Each corner has its own RGB color value (top-left, top-right, bottom-left, bottom-right), blended smoothly across the area.
    function draw_four_corner_gradient(
        x: number, y: number, width: number, height: number,
        r1: number, g1: number, b1: number,
        r2: number, g2: number, b2: number,
        r3: number, g3: number, b3: number,
        r4: number, g4: number, b4: number
    ): void;

    // Draw polygons with an array of {x, y} points (minimum 3).
    function draw_polygon(
        points_table: { x: number, y: number }[],
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean
    ): void;

    // Draw ellipses with full control over center, radii, color, thickness, and fill.
    function draw_ellipse(
        x: number, y: number, rx: number, ry: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean
    ): void;

    // Draw arcs or pie-slices with angle and color options.
    function draw_arc(
        x: number, y: number, rx: number, ry: number,
        start_angle: number, sweep_angle: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean
    ): void;

    // Draws a line with a gradient from color1 to color2.
    function draw_gradient_line(
        x1: number, y1: number, x2: number, y2: number,
        color_table: { r: number, g: number, b: number, a: number }[],
        thickness: number
    ): void;

    // Draws a gradient filled rectangle.
    function draw_gradient_rectangle(
        x: number, y: number, width: number, height: number,
        color_table: { r: number, g: number, b: number, a: number }[],
        rounding?: number
    ): void;
}
