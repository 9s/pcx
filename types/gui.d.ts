/** @noSelfInFile */

declare namespace gui {
    /**
     * Retrieves a predefined tab ("aimbot", "visuals", "lua", "settings").
     * @param name The name of the tab.
     * @returns A Tab object.
     */
    function get_tab(name: "aimbot" | "visuals" | "lua" | "settings"): Tab;

    /**
     * Serializes the current GUI state to a Base64-encoded string.
     * @returns A Base64 string representing the current GUI state.
     */
    function get_state(): string;

    /**
     * Loads a GUI state from a Base64-encoded string.
     * @param stateString A Base64 string previously obtained from `gui.get_state()`.
     * @returns True if the state was loaded successfully, false otherwise.
     */
    function load_state(stateString: string): boolean;

    interface Tab {
        /**
         * Creates a panel inside the tab.
         * @param label Panel label.
         * @param small_panel Optional flag for small panel.
         * @returns Created Panel.
         */
        create_panel(label: string, small_panel?: boolean): Panel;

        /**
         * Creates a subtab inside the tab.
         * @param label Subtab label.
         * @returns Created Subtab.
         */
        create_subtab(label: string): Subtab;
    }

    interface Subtab {
        /**
         * Creates a panel inside the subtab.
         * @param label Panel label.
         * @param small_panel Optional flag for small panel.
         * @returns Created Panel.
         */
        create_panel(label: string, small_panel?: boolean): Panel;
    }

    interface Panel {
        /**
         * Adds a checkbox widget.
         * @param label Label for the checkbox.
         * @returns Checkbox widget.
         */
        add_checkbox(label: string): Checkbox;

        /**
         * Adds an integer slider widget.
         * @param label Label for the slider.
         * @param min Minimum value.
         * @param max Maximum value.
         * @param default_value Default value.
         * @returns Integer slider widget.
         */
        add_slider_int(label: string, min: number, max: number, default_value: number): SliderInt;

        /**
         * Adds a float slider widget.
         * @param label Label for the slider.
         * @param min Minimum value.
         * @param max Maximum value.
         * @param default_value Default value.
         * @returns Float slider widget.
         */
        add_slider_float(label: string, min: number, max: number, default_value: number): SliderFloat;

        /**
         * Adds a button widget with a callback.
         * @param label Label for the button.
         * @param callback Function called when the button is pressed.
         * @returns Button widget.
         */
        add_button(label: string, callback: () => void): Button;

        /**
         * Adds a static text label.
         * @param label Text to display.
         * @returns Text widget.
         */
        add_text(label: string): Text;

        /**
         * Adds a text input box.
         * @param label Label for the input.
         * @param default_value Initial text value.
         * @returns InputText widget.
         */
        add_input_text(label: string, default_value: string): InputText;

        /**
         * Adds a color picker widget.
         * @param label Label for the color picker.
         * @param r Initial red component.
         * @param g Initial green component.
         * @param b Initial blue component.
         * @param a Initial alpha component.
         * @returns ColorPicker widget.
         */
        add_color_picker(label: string, r: number, g: number, b: number, a: number): ColorPicker;

        /**
         * Adds a keybind widget.
         * @param label Label for the keybind.
         * @param key Initial key code.
         * @param mode Keybind mode.
         * @returns Keybind widget.
         */
        add_keybind(label: string, key: number, mode: KeyMode): Keybind;

        /**
         * Adds a single-select dropdown.
         * @param label Label for the dropdown.
         * @param list Options list.
         * @param default_index Optional default selected index.
         * @returns SingleSelect widget.
         */
        add_single_select(label: string, list: string[], default_index?: number): SingleSelect;

        /**
         * Adds a multi-select list.
         * @param label Label for the list.
         * @param list Options list.
         * @returns MultiSelect widget.
         */
        add_multi_select(label: string, list: string[]): MultiSelect;

        /**
         * Adds a single-select list widget.
         * @param label Label for the list.
         * @param list Options list.
         * @returns InputListSingle widget.
         */
        add_singleselect_list(label: string, list: string[]): InputListSingle;

        /**
         * Adds a multi-select list widget.
         * @param label Label for the list.
         * @param list Options list.
         * @returns InputListMulti widget.
         */
        add_multiselect_list(label: string, list: string[]): InputListMulti;
    }

    interface Element {
        /**
         * Shows or hides the GUI element.
         * @param active True to show, false to hide.
         */
        set_active(active: boolean): void;
    }

    interface Checkbox extends Element {
        /**
         * Gets the checkbox state.
         * @returns True if checked.
         */
        get(): boolean;

        /**
         * Sets the checkbox state.
         * @param value True to check, false to uncheck.
         */
        set(value: boolean): void;
    }

    interface SliderInt extends Element {
        /**
         * Gets the current slider value.
         * @returns Current integer value.
         */
        get(): number;

        /**
         * Sets the slider value.
         * @param value Value to set.
         */
        set(value: number): void;
    }

    interface SliderFloat extends Element {
        /**
         * Gets the current slider value.
         * @returns Current float value.
         */
        get(): number;

        /**
         * Sets the slider value.
         * @param value Value to set.
         */
        set(value: number): void;
    }

    interface Button extends Element {
        // No additional methods.
    }

    interface Text extends Element {
        /**
         * Gets the text content.
         * @returns Text string.
         */
        get(): string;

        /**
         * Sets the text content.
         * @param value New text string.
         */
        set(value: string): void;
    }

    interface InputText extends Element {
        /**
         * Gets the current input text.
         * @returns Input string.
         */
        get(): string;

        /**
         * Sets the input text.
         * @param value New input string.
         */
        set(value: string): void;
    }

    interface ColorPicker extends Element {
        /**
         * Gets RGBA color components.
         * @returns Tuple of RGBA values.
         */
        get(): [number, number, number, number];

        /**
         * Sets RGBA color components.
         * @param r Red component.
         * @param g Green component.
         * @param b Blue component.
         * @param a Alpha component.
         */
        set(r: number, g: number, b: number, a: number): void;
    }

    interface Keybind extends Element {
        /**
         * Gets the bound key code.
         * @returns Key code number.
         */
        get_key(): number;

        /**
         * Sets the bound key code.
         * @param key Key code number.
         */
        set_key(key: number): void;

        /**
         * Gets the keybind mode.
         * @returns Current keybind mode.
         */
        get_mode(): KeyMode;

        /**
         * Sets the keybind mode.
         * @param mode New keybind mode.
         */
        set_mode(mode: KeyMode): void;

        /**
         * Checks if the keybind is active.
         * @returns True if active.
         */
        is_active(): boolean;
    }

    interface SingleSelect extends Element {
        /**
         * Gets the selected index.
         * @returns Selected index.
         */
        get(): number;

        /**
         * Sets the selected index.
         * @param index Index to select.
         */
        set(index: number): void;
    }

    interface MultiSelect extends Element {
        /**
         * Gets the active state of the given index.
         * @param index Index to check.
         * @returns True if active.
         */
        get(index: number): boolean;

        /**
         * Sets the active state of the given index.
         * @param index Index to set.
         * @param value True to activate, false to deactivate.
         */
        set(index: number, value: boolean): void;
    }

    interface InputListSingle extends Element {
        /**
         * Gets the selected index.
         * @returns Selected index.
         */
        get(): number;

        /**
         * Sets the selected index.
         * @param index Index to select.
         */
        set(index: number): void;
    }

    interface InputListMulti extends Element {
        /**
         * Gets the active state of the given index.
         * @param index Index to check.
         * @returns True if active.
         */
        get(index: number): boolean;

        /**
         * Sets the active state of the given index.
         * @param index Index to set.
         * @param value True to activate, false to deactivate.
         */
        set(index: number, value: boolean): void;
    }
}
