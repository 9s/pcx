/** @noSelfInFile */

declare namespace engine {
    /**
     * Registers a callback function to be called when the script is unloaded.
     * @param callback The function to call on unload.
     */
    function register_onunload(callback: () => void): void;

    /**
     * Registers a callback function to be called every engine tick.
     * @param callback The function to call every tick.
     */
    function register_on_engine_tick(callback: () => void): void;

    /**
     * Registers a callback function to handle network responses.
     * @param callback The function called with the response data as a string.
     */
    function register_on_network_callback(callback: (response_data: string) => void): void;

    /**
     * Logs a message to the console with RGBA color.
     * @param message The message string to log.
     * @param r Red channel (0-255).
     * @param g Green channel (0-255).
     * @param b Blue channel (0-255).
     * @param a Alpha channel (0-255).
     */
    function log(message: string, r: number, g: number, b: number, a: number): void;

    /**
     * Returns the username of the currently logged-in user.
     * @returns Username string.
     */
    function get_username(): string;
}
