/** @noSelfInFile */

declare namespace valorant {
    /**
     * Represents a single field in the class dump.
     */
    interface ClassField {
        /** The name of the class field. */
        name: string;
        /** The memory offset associated with the field. */
        offset: number;
    }

    /**
     * Returns a table (array) containing the class fields for the specified class pointer in Valorant.
     * Each entry includes the field's name and memory offset.
     *
     * Returns `null` and logs an error if:
     * - The argument is missing or not a number.
     * - The pointer is null.
     * - The dump is empty.
     *
     * @param pointer The memory address of the class you want to dump.
     * @returns An array of class fields or null on failure.
     */
    function get_class_dump(pointer: number): ClassField[] | null;
}
