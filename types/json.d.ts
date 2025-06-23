/** @noSelfInFile */

declare namespace json {
    /**
     * Parses a JSON-encoded string `data` and returns a Lua table.
     *
     * Example:
     * ```lua
     * local raw = '{"name": "Nightlings", "version": 1.0, "features": ["gui", "overlay", "lua"]}'
     * local tbl = json.parse(raw)
     * engine.log("Project: " .. tbl.name)
     * engine.log("Version: " .. tostring(tbl.version))
     * engine.log("First feature: " .. tbl.features[1])
     * ```
     * @param data The JSON string to parse.
     * @returns A Lua table representing the parsed JSON.
     */
    function parse(data: string): any;

    /**
     * Converts a Lua table into a JSON-formatted string (with indentation).
     *
     * Example:
     * ```lua
     * tbl.debug = true
     * tbl.features[#tbl.features + 1] = "json_api"
     * local out = json.stringify(tbl)
     * engine.log("Updated JSON:")
     * engine.log(out)
     * ```
     * @param lua_table The Lua table to convert.
     * @returns A JSON string.
     */
    function stringify(lua_table: any): string;
}
