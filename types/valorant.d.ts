/** @noSelfInFile **/
declare namespace valorant {
    // Returns a table containing the class fields for the specified class pointer in Valorant.
    function get_class_dump(pointer: number): ClassDumpEntry[] | null;
}

// Structure for class dump entries
interface ClassDumpEntry {
    // The name of the class field.
    name: string;

    // The memory offset associated with the field.
    offset: number;
}
