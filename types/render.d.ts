/** @noSelfInFile */

declare namespace render {
    /**
     * Creates a font with the specified file path and size.
     * If only a name is provided instead of a filepath, it attempts to create the font from c:/windows/fonts/.
     * @param fontNameOrPath Font file path or font name.
     * @param size Font size.
     * @returns A handle representing the created font.
     */
    function create_font(fontNameOrPath: string, size: number): number;

    /**
     * Creates a font from a buffer created via m.alloc.
     * @param label Font label.
     * @param size Font size.
     * @param buffer_handle Buffer handle.
     * @returns A handle representing the created font.
     */
    function create_font_from_buffer(label: string, size: number, buffer_handle: number): number;

    /**
     * Retrieves the screen viewport size.
     * @returns The width and height of the viewport as [width, height].
     */
    function get_viewport_size(): [number, number];

    /**
     * Draws a diagonal line.
     * @param x1 Start X coordinate.
     * @param y1 Start Y coordinate.
     * @param x2 End X coordinate.
     * @param y2 End Y coordinate.
     * @param r Red color (0-255).
     * @param g Green color (0-255).
     * @param b Blue color (0-255).
     * @param a Alpha (0-255).
     * @param thickness Line thickness.
     */
    function draw_line(
        x1: number, y1: number, x2: number, y2: number,
        r: number, g: number, b: number, a: number,
        thickness: number
    ): void;

    /**
     * Draws a rectangle.
     * @param x X coordinate.
     * @param y Y coordinate.
     * @param width Width of rectangle.
     * @param height Height of rectangle.
     * @param r Red color (0-255).
     * @param g Green color (0-255).
     * @param b Blue color (0-255).
     * @param a Alpha (0-255).
     * @param thickness Border thickness.
     * @param filled Whether rectangle is filled.
     * @param rounding Corner rounding radius (optional).
     */
    function draw_rectangle(
        x: number, y: number, width: number, height: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean, rounding?: number
    ): void;

    /**
     * Draws a circle.
     * @param x Center X coordinate.
     * @param y Center Y coordinate.
     * @param radius Radius of the circle.
     * @param r Red color (0-255).
     * @param g Green color (0-255).
     * @param b Blue color (0-255).
     * @param a Alpha (0-255).
     * @param thickness Circle border thickness.
     * @param filled Whether circle is filled.
     */
    function draw_circle(
        x: number, y: number, radius: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean
    ): void;

    /**
     * Draws text.
     * @param font Font handle.
     * @param text Text string to draw.
     * @param x X coordinate.
     * @param y Y coordinate.
     * @param r Red color (0-255).
     * @param g Green color (0-255).
     * @param b Blue color (0-255).
     * @param a Alpha (0-255).
     * @param outline_thickness Outline thickness.
     * @param o_r Outline red color.
     * @param o_g Outline green color.
     * @param o_b Outline blue color.
     * @param o_a Outline alpha.
     */
    function draw_text(
        font: number, text: string,
        x: number, y: number,
        r: number, g: number, b: number, a: number,
        outline_thickness: number,
        o_r: number, o_g: number, o_b: number, o_a: number
    ): void;

    /**
     * Draws a triangle.
     * @param x1 First vertex X coordinate.
     * @param y1 First vertex Y coordinate.
     * @param x2 Second vertex X coordinate.
     * @param y2 Second vertex Y coordinate.
     * @param x3 Third vertex X coordinate.
     * @param y3 Third vertex Y coordinate.
     * @param r Red color (0-255).
     * @param g Green color (0-255).
     * @param b Blue color (0-255).
     * @param a Alpha (0-255).
     * @param thickness Border thickness.
     * @param filled Whether triangle is filled.
     */
    function draw_triangle(
        x1: number, y1: number, x2: number, y2: number, x3: number, y3: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean
    ): void;

    /**
     * Gets the overlay FPS.
     * @returns Current FPS.
     */
    function get_fps(): number;

    /**
     * Creates a bitmap from a URL.
     * @param url URL of the image.
     * @returns Handle to the bitmap.
     */
    function create_bitmap_from_url(url: string): number;

    /**
     * Creates a bitmap from a buffer handle.
     * @param buffer_handle Buffer handle.
     * @returns Handle to the bitmap.
     */
    function create_bitmap_from_buffer(buffer_handle: number): number;

    /**
     * Creates a bitmap from a file.
     * @param file_name Path to the file.
     * @returns Handle to the bitmap.
     */
    function create_bitmap_from_file(file_name: string): number;

    /**
     * Begins a clipping region restricting subsequent rendering.
     * @param x X coordinate of clipping rectangle.
     * @param y Y coordinate of clipping rectangle.
     * @param width Width of clipping rectangle.
     * @param height Height of clipping rectangle.
     */
    function clip_start(x: number, y: number, width: number, height: number): void;

    /**
     * Ends the active clipping region.
     */
    function clip_end(): void;

    /**
     * Draws a rectangle filled with a four-corner gradient.
     * @param x X coordinate.
     * @param y Y coordinate.
     * @param width Width of rectangle.
     * @param height Height of rectangle.
     * @param r1 Top-left red color (0-255).
     * @param g1 Top-left green color.
     * @param b1 Top-left blue color.
     * @param r2 Top-right red color.
     * @param g2 Top-right green color.
     * @param b2 Top-right blue color.
     * @param r3 Bottom-left red color.
     * @param g3 Bottom-left green color.
     * @param b3 Bottom-left blue color.
     * @param r4 Bottom-right red color.
     * @param g4 Bottom-right green color.
     * @param b4 Bottom-right blue color.
     */
    function draw_four_corner_gradient(
        x: number, y: number, width: number, height: number,
        r1: number, g1: number, b1: number,
        r2: number, g2: number, b2: number,
        r3: number, g3: number, b3: number,
        r4: number, g4: number, b4: number
    ): void;

    /**
     * Draws a polygon with the given points.
     * @param points_table Array of points {x: number, y: number} (minimum 3).
     * @param r Red color (0-255).
     * @param g Green color (0-255).
     * @param b Blue color (0-255).
     * @param a Alpha (0-255).
     * @param thickness Border thickness.
     * @param filled Whether polygon is filled.
     */
    function draw_polygon(
        points_table: Array<{ x: number; y: number }>,
        r: number, g: number, b: number, a: number,
        thickness: number,
        filled: boolean
    ): void;

    /**
     * Draws an ellipse.
     * @param x Center X coordinate.
     * @param y Center Y coordinate.
     * @param rx Radius along X-axis.
     * @param ry Radius along Y-axis.
     * @param r Red color (0-255).
     * @param g Green color (0-255).
     * @param b Blue color (0-255).
     * @param a Alpha (0-255).
     * @param thickness Border thickness.
     * @param filled Whether ellipse is filled.
     */
    function draw_ellipse(
        x: number, y: number, rx: number, ry: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean
    ): void;

    /**
     * Draws an arc or pie slice.
     * @param x Center X coordinate.
     * @param y Center Y coordinate.
     * @param rx Radius along X-axis.
     * @param ry Radius along Y-axis.
     * @param start_angle Start angle in radians.
     * @param sweep_angle Sweep angle in radians.
     * @param r Red color (0-255).
     * @param g Green color (0-255).
     * @param b Blue color (0-255).
     * @param a Alpha (0-255).
     * @param thickness Border thickness.
     * @param filled Whether arc is filled.
     */
    function draw_arc(
        x: number, y: number, rx: number, ry: number,
        start_angle: number, sweep_angle: number,
        r: number, g: number, b: number, a: number,
        thickness: number, filled: boolean
    ): void;

    /**
     * Draws a gradient line.
     * @param x1 Start X coordinate.
     * @param y1 Start Y coordinate.
     * @param x2 End X coordinate.
     * @param y2 End Y coordinate.
     * @param color_table Array of colors for the gradient.
     * @param thickness Line thickness.
     */
    function draw_gradient_line(
        x1: number, y1: number, x2: number, y2: number,
        color_table: Array<{ r: number; g: number; b: number; a: number }>,
        thickness: number
    ): void;

    /**
     * Draws a gradient filled rectangle.
     * @param x X coordinate.
     * @param y Y coordinate.
     * @param width Width of rectangle.
     * @param height Height of rectangle.
     * @param color_table Array of colors for gradient.
     * @param rounding Corner rounding radius.
     */
    function draw_gradient_rectangle(
        x: number, y: number, width: number, height: number,
        color_table: Array<{ r: number; g: number; b: number; a: number }>,
        rounding: number
    ): void;
}
