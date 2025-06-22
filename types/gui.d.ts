/** @noSelfInFile **/
declare namespace gui {
    // Retrieves a predefined tab ("aimbot", "visuals", "lua", "settings").
    function get_tab(name: string): Tab;
}

interface Tab {
    // Creates a panel inside a tab.
    create_panel(label: string, small_panel?: boolean): Panel;

    // Creates a subtab inside a tab.
    create_subtab(label: string): Subtab;
}

interface Subtab {
    // Creates a panel inside a subtab.
    create_panel(label: string, small_panel?: boolean): Panel;
}

interface Panel {
    // Adds a checkbox.
    add_checkbox(label: string): Checkbox;

    // Adds an integer slider.
    add_slider_int(label: string, min: number, max: number, defaultValue: number): SliderInt;

    // Adds a float slider.
    add_slider_float(label: string, min: number, max: number, defaultValue: number): SliderFloat;

    // Adds a button with a Lua callback.
    add_button(label: string, callback: () => void): Button;

    // Adds a static text label.
    add_text(label: string): Text;

    // Adds a text input box.
    add_input_text(label: string, defaultValue: string): InputText;

    // Adds a color picker.
    add_color_picker(label: string, r: number, g: number, b: number, a: number): ColorPicker;

    // Adds a keybind.
    add_keybind(label: string, key: number, mode: KeyMode): Keybind;

    // Adds a single-select dropdown.
    add_single_select(label: string, list: string[], defaultIndex?: number): SingleSelect;

    // Adds a multi-select list.
    add_multi_select(label: string, list: string[]): MultiSelect;

    // Adds a single-select list.
    add_singleselect_list(label: string, list: string[]): SingleSelectList;

    // Adds a multi-select list.
    add_multiselect_list(label: string, list: string[]): MultiSelectList;
}

interface Element {
    // Shows or hides any GUI element.
    set_active(active: boolean): void;
}

interface Checkbox extends Element {
    // Gets the checkbox state.
    get(): boolean;

    // Sets the checkbox state.
    set(value: boolean): void;
}

interface SliderInt extends Element {
    // Gets slider value.
    get(): number;

    // Sets slider value.
    set(value: number): void;
}

interface SliderFloat extends Element {
    // Gets slider value.
    get(): number;

    // Sets slider value.
    set(value: number): void;
}

interface Text extends Element {
    // Gets the text label.
    get(): string;

    // Sets the text label.
    set(str: string): void;
}

interface InputText extends Element {
    // Gets the current input.
    get(): string;

    // Sets the input text.
    set(str: string): void;
}

interface ColorPicker extends Element {
    // Gets RGBA values.
    get(): [number, number, number, number];

    // Sets RGBA color.
    set(r: number, g: number, b: number, a: number): void;
}

interface Keybind extends Element {
    // Gets bound key code.
    get_key(): number;

    // Sets key code.
    set_key(k: number): void;

    // Gets keybind mode.
    get_mode(): KeyMode;

    // Sets keybind mode.
    set_mode(mode: KeyMode): void;

    // Checks if keybind is active.
    is_active(): boolean;
}

interface SingleSelect extends Element {
    // Gets selected index.
    get(): number;

    // Sets selected index.
    set(index: number): void;
}

interface MultiSelect extends Element {
    // Gets active state.
    get(index: number): boolean;

    // Sets active state.
    set(index: number, value: boolean): void;
}

interface SingleSelectList extends Element {
    // Gets selected index.
    get(): number;

    // Sets selected index.
    set(index: number): void;
}

interface MultiSelectList extends Element {
    // Gets active state of an item.
    get(index: number): boolean;

    // Sets active state.
    set(index: number, value: boolean): void;
}

interface Button extends Element {
}

type KeyMode =
    | 'onhotkey'
    | 'offhotkey'
    | 'toggle'
    | 'singlepress'
    | 'always_on';
