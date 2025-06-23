/** @noSelfInFile */

declare namespace input {
    /**
     * Simulates mouse input.
     * @param dx The change in X coordinate.
     * @param dy The change in Y coordinate.
     * @param flag The input flag.
     */
    function simulate_mouse(dx: number, dy: number, flag: number): void;

    /**
     * Simulates keyboard input.
     * @param key The virtual key code.
     * @param flag The input flag.
     */
    function simulate_keyboard(key: number, flag: number): void;

    /**
     * Detects if a key is pressed once.
     * @param key The virtual key code.
     * @returns True if the key was pressed once.
     */
    function is_key_pressed(key: number): boolean;

    /**
     * Detects if a key is currently held down.
     * @param key The virtual key code.
     * @returns True if the key is being held down.
     */
    function is_key_down(key: number): boolean;

    /**
     * Checks if a key’s toggle state is active (e.g., Caps Lock).
     * @param key The virtual key code.
     * @returns True if the toggle is active.
     */
    function is_key_toggled(key: number): boolean;

    /**
     * Returns the current mouse position.
     * @returns The [x, y] coordinates of the mouse cursor.
     */
    function get_mouse_position(): [number, number];

    /**
     * Returns the mouse movement delta since the last call.
     * @returns The [dx, dy] movement delta.
     */
    function get_mouse_move_delta(): [number, number];

    /**
     * Returns the mouse scroll wheel delta.
     * @returns The scroll delta value.
     */
    function get_scroll_delta(): number;

    /**
     * Retrieves the current clipboard content.
     * @returns The clipboard text.
     */
    function get_clipboard(): string;

    /**
     * Sets new text content to the clipboard.
     * @param text The text to set in the clipboard.
     */
    function set_clipboard(text: string): void;

    /**
     * Checks if the menu is currently open.
     * @returns True if the menu is open.
     */
    function is_menu_open(): boolean;

    /**
     * Forces the overlay cursor to be active or inactive.
     * @param state True to force cursor active, false to disable.
     */
    function set_overlay_force_cursor_active(state: boolean): void;
}
