/** @noSelfInFile **/
declare namespace str {
    // Removes leading and trailing whitespace.
    function trim(s: string): string;

    // Removes leading whitespace.
    function ltrim(s: string): string;

    // Removes trailing whitespace.
    function rtrim(s: string): string;

    // Pads the string from the left.
    function pad_left(s: string, len: number, char: string): string;

    // Pads the string from the right.
    function pad_right(s: string, len: number, char: string): string;

    // Removes the prefix if present.
    function strip_prefix(s: string, prefix: string): string;

    // Removes the suffix if present.
    function strip_suffix(s: string, suffix: string): string;

    // Returns true if string starts with prefix.
    function startswith(s: string, prefix: string): boolean;

    // Returns true if string ends with suffix.
    function endswith(s: string, suffix: string): boolean;

    // Returns true if substring is found.
    function contains(s: string, substring: string): boolean;

    // Returns first index of substring (1-based).
    function indexof(s: string, substr: string, start?: number): number;

    // Returns last index of substring (1-based).
    function last_indexof(s: string, substr: string): number;

    // Counts occurrences of substring.
    function count(s: string, substr: string): number;

    // Returns true if string is empty.
    function empty(s: string): boolean;

    // Compares two strings for equality.
    function equals(a: string, b: string): boolean;

    // Replaces all occurrences of from with to.
    function replace(s: string, from: string, to: string): string;

    // Repeats string N times.
    function repeat_str(s: string, count: number): string;

    // Reverses the string.
    function reverse(s: string): string;

    // Inserts substring at position.
    function insert(s: string, pos: number, substr: string): string;

    // Removes characters from start to end.
    function remove(s: string, start: number, end: number): string;

    // Replaces {key} in string with values from a table.
    function substitute(s: string, table: Record<string, string>): string;

    // Converts to uppercase.
    function upper(s: string): string;

    // Converts to lowercase.
    function lower(s: string): string;

    // Splits string by delimiter into table.
    function split(s: string, delimiter: string): string[];

    // Returns a substring (1-based).
    function slice(s: string, start: number, end?: number): string;

    // Returns number of UTF-8 characters.
    function utf8len(s: string): number;

    // Returns UTF-8-safe substring.
    function utf8sub(s: string, start: number, end?: number): string;
}
