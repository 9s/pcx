/** @noSelfInFile */

declare namespace proc {
    /**
     * Attaches to a process by its Process ID (PID).
     * @param process_id The PID of the process to attach to.
     * @param has_corrupt_cr3 Optional. Set to true for processes protected by anti-cheat systems that corrupt CR3.
     * @returns True if attachment succeeded, otherwise throws an error.
     */
    function attach_by_pid(process_id: number, has_corrupt_cr3?: boolean): boolean;

    /**
     * Attaches to a process by its executable name.
     * @param process_name The name of the process executable (e.g., "notepad.exe").
     * @param has_corrupt_cr3 Optional. Set to true for processes protected by anti-cheat systems that corrupt CR3.
     * @returns True if attachment succeeded, otherwise throws an error.
     */
    function attach_by_name(process_name: string, has_corrupt_cr3?: boolean): boolean;

    /**
     * Attaches to a process by window class and window name.
     * @param window_class The window class name (can be empty string to ignore).
     * @param window_name The window title/name (can be empty string to ignore).
     * @param has_corrupt_cr3 Optional. Set to true for processes protected by anti-cheat systems that corrupt CR3.
     * @returns True if attachment succeeded, otherwise throws an error.
     */
    function attach_by_window(window_class: string, window_name: string, has_corrupt_cr3?: boolean): boolean;
}
