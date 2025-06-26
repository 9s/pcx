/** @noSelfInFile */

/**
 * Keybind mode constants used with keybind widgets.
 */
declare namespace key_mode {
    /** Active while the key is held down */
    const onhotkey: "onhotkey";
    /** Active while the key is not held down */
    const offhotkey: "offhotkey";
    /** Toggles between active and inactive states when the key is pressed */
    const toggle: "toggle";
    /** Active for one frame when the key is pressed */
    const singlepress: "singlepress";
    /** Always active regardless of key state */
    const always_on: "always_on";
}

/**
 * Union type of all allowed keybind mode strings.
 */
type KeyMode =
    | "onhotkey"
    | "offhotkey"
    | "toggle"
    | "singlepress"
    | "always_on";
