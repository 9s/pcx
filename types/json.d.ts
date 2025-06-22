/** @noSelfInFile **/
declare namespace json {
    // Parses a JSON-encoded string data and returns a Lua table.
    function parse(data: string): any;

    // Converts a Lua table into a JSON-formatted string (with indentation).
    function stringify(lua_table: any): string;
}
