/** @noSelfInFile **/
declare namespace engine {
    // Registers a function to be called when the script is unloaded.
    function register_onunload(callback: () => void): void;

    // Registers a function to be called every engine tick.
    function register_on_engine_tick(callback: () => void): void;

    // Registers a function to handle network responses.
    function register_on_network_callback(callback: (str: string) => void): void;

    // Logs a message to the console with RGBA color.
    function log(message: string, r: number, g: number, b: number, a: number): void;

    // Returns the username of the currently logged-in user.
    function get_username(): string;
}
