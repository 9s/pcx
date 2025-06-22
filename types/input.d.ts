/** @noSelfInFile **/
declare namespace input {
    // Simulate mouse input using location or flags
    function simulate_mouse(dx: number, dy: number, flag: number): void;

    // Simulate keyboard input using vk and flags
    function simulate_keyboard(key: number, flag: number): void;

    // Detects if a key is pressed once.
    function is_key_pressed(key: number): boolean;

    // Detects if a key is being held down.
    function is_key_down(key: number): boolean;

    // Checks if a key’s toggle state is active
    function is_key_toggled(key: number): boolean;

    // Returns the mouse’s current position (x, y).
    function get_mouse_position(): [number, number];

    // Returns the mouse movement delta (dx, dy).
    function get_mouse_move_delta(): [number, number];

    // Returns the mouse scroll wheel delta.
    function get_scroll_delta(): number;

    // Gets the clipboard content.
    function get_clipboard(): string;

    // Sets new text to the clipboard.
    function set_clipboard(text: string): void;

    // Checks if the menu is open.
    function is_menu_open(): boolean;

    // Forces the overlay cursor to be active (true) or inactive (false).
    function set_overlay_force_cursor_active(state: boolean): void;
}
