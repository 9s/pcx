/** @noSelfInFile */

declare namespace winapi {
    /**
     * Returns the system uptime in milliseconds as a 64-bit integer.
     */
    function get_tickcount64(): bigint;

    /**
     * Plays a sound file (supports .wav and .mp3).
     * The file can be a full path or a file located in the My Games directory.
     * @param file_name The path to the sound file.
     */
    function play_sound(file_name: string): void;

    /**
     * Returns a window handle (HWND) as an integer.
     * Both parameters can be nil to perform a broad match.
     * @param class_name The window class name or null.
     * @param window_name The window name or null.
     * @returns HWND as an integer.
     */
    function get_hwnd(
        class_name: string | null,
        window_name: string | null
    ): number;

    /**
     * Sends a Windows message to the given hwnd.
     * All arguments must be integers. Returns a boolean indicating success.
     * @param hwnd Window handle.
     * @param msg Message ID.
     * @param wparam WPARAM.
     * @param lparam LPARAM.
     * @returns Whether the message was successfully posted.
     */
    function post_message(
        hwnd: number,
        msg: number,
        wparam: number,
        lparam: number
    ): boolean;

    /**
     * Returns the handle (hwnd) of the foreground window.
     * @returns HWND as an integer.
     */
    function get_foreground_window(): number;

    /**
     * Returns window position and size: left, top, right, bottom.
     *
     * Example:
     * ```lua
     * local rect = winapi.get_window_rect(some_window)
     * local width = rect.right - rect.left
     * local height = rect.bottom - rect.top
     * ```
     * @param hwnd Window handle.
     */
    function get_window_rect(
        hwnd: number
    ): {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };

    /**
     * Returns tid (thread ID) and pid (process ID).
     *
     * Example:
     * ```lua
     * local info = winapi.get_window_thread_process_id(some_window)
     * local tid = info.tid
     * local pid = info.pid
     * ```
     * @param hwnd Window handle.
     */
    function get_window_thread_process_id(
        hwnd: number
    ): {
        tid: number;
        pid: number;
    };

    /**
     * Returns the window style value as an integer.
     * @param hwnd Window handle.
     */
    function get_window_style(hwnd: number): number;

    /**
     * Returns true if the window is visible.
     * @param hwnd Window handle.
     */
    function is_window_visible(hwnd: number): boolean;

    /**
     * Returns true if the window is enabled (accepts input).
     * @param hwnd Window handle.
     */
    function is_window_enabled(hwnd: number): boolean;
}
