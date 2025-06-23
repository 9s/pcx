/** @noSelfInFile */

declare namespace str {
    /**
     * Removes leading and trailing whitespace.
     * @param s The input string.
     * @returns The trimmed string.
     */
    function trim(s: string): string;

    /**
     * Removes leading whitespace.
     * @param s The input string.
     * @returns The left-trimmed string.
     */
    function ltrim(s: string): string;

    /**
     * Removes trailing whitespace.
     * @param s The input string.
     * @returns The right-trimmed string.
     */
    function rtrim(s: string): string;

    /**
     * Pads the string from the left with the specified character up to the given length.
     * @param s The input string.
     * @param len The desired total length.
     * @param char The padding character (optional, defaults to space).
     * @returns The padded string.
     */
    function pad_left(s: string, len: number, char?: string): string;

    /**
     * Pads the string from the right with the specified character up to the given length.
     * @param s The input string.
     * @param len The desired total length.
     * @param char The padding character (optional, defaults to space).
     * @returns The padded string.
     */
    function pad_right(s: string, len: number, char?: string): string;

    /**
     * Removes the specified prefix from the string if present.
     * @param s The input string.
     * @param prefix The prefix to remove.
     * @returns The string without the prefix if it was present.
     */
    function strip_prefix(s: string, prefix: string): string;

    /**
     * Removes the specified suffix from the string if present.
     * @param s The input string.
     * @param suffix The suffix to remove.
     * @returns The string without the suffix if it was present.
     */
    function strip_suffix(s: string, suffix: string): string;

    /**
     * Returns true if the string starts with the given prefix.
     * @param s The input string.
     * @param prefix The prefix to check.
     */
    function startswith(s: string, prefix: string): boolean;

    /**
     * Returns true if the string ends with the given suffix.
     * @param s The input string.
     * @param suffix The suffix to check.
     */
    function endswith(s: string, suffix: string): boolean;

    /**
     * Returns true if the substring is found within the string.
     * @param s The input string.
     * @param substring The substring to find.
     */
    function contains(s: string, substring: string): boolean;

    /**
     * Returns the first index (1-based) of the substring in the string.
     * @param s The input string.
     * @param substr The substring to find.
     * @param start The starting index (optional, 1-based).
     * @returns The first index of the substring or 0 if not found.
     */
    function indexof(s: string, substr: string, start?: number): number;

    /**
     * Returns the last index (1-based) of the substring in the string.
     * @param s The input string.
     * @param substr The substring to find.
     * @returns The last index of the substring or 0 if not found.
     */
    function last_indexof(s: string, substr: string): number;

    /**
     * Counts the occurrences of the substring in the string.
     * @param s The input string.
     * @param substr The substring to count.
     */
    function count(s: string, substr: string): number;

    /**
     * Returns true if the string is empty.
     * @param s The input string.
     */
    function empty(s: string): boolean;

    /**
     * Compares two strings for equality.
     * @param a First string.
     * @param b Second string.
     */
    function equals(a: string, b: string): boolean;

    /**
     * Replaces all occurrences of a substring with another string.
     * @param s The input string.
     * @param from The substring to replace.
     * @param to The replacement string.
     * @returns The resulting string.
     */
    function replace(s: string, from: string, to: string): string;

    /**
     * Repeats the string a specified number of times.
     * @param s The input string.
     * @param count The number of repetitions.
     * @returns The repeated string.
     */
    function repeat_str(s: string, count: number): string;

    /**
     * Reverses the string.
     * @param s The input string.
     * @returns The reversed string.
     */
    function reverse(s: string): string;

    /**
     * Inserts a substring into the string at the specified position (1-based).
     * @param s The input string.
     * @param pos The position to insert at.
     * @param substr The substring to insert.
     * @returns The modified string.
     */
    function insert(s: string, pos: number, substr: string): string;

    /**
     * Removes characters from start to end (1-based inclusive).
     * @param s The input string.
     * @param start The start position.
     * @param end The end position.
     * @returns The resulting string.
     */
    function remove(s: string, start: number, end: number): string;

    /**
     * Replaces `{key}` occurrences in the string with values from a table.
     * @param s The input string.
     * @param table A key-value map for replacements.
     * @returns The substituted string.
     */
    function substitute(s: string, table: Record<string, string>): string;

    /**
     * Converts the string to uppercase.
     * @param s The input string.
     */
    function upper(s: string): string;

    /**
     * Converts the string to lowercase.
     * @param s The input string.
     */
    function lower(s: string): string;

    /**
     * Splits the string by a delimiter into a Lua table (array).
     * @param s The input string.
     * @param delimiter The delimiter string.
     * @returns An array of split substrings.
     */
    function split(s: string, delimiter: string): string[];

    /**
     * Returns a substring of the input string (1-based inclusive).
     * @param s The input string.
     * @param start The starting index.
     * @param end The ending index.
     * @returns The substring.
     */
    function slice(s: string, start: number, end: number): string;

    /**
     * Returns the number of UTF-8 characters in the string.
     * @param s The input string.
     */
    function utf8len(s: string): number;

    /**
     * Returns a UTF-8 safe substring (1-based inclusive).
     * @param s The input string.
     * @param start The starting character index.
     * @param end The ending character index.
     * @returns The UTF-8 safe substring.
     */
    function utf8sub(s: string, start: number, end: number): string;
}
