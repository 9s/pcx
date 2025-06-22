/** @noSelfInFile **/
declare namespace m {
    // Allocates a memory block of the given size and returns a buffer handle.
    function alloc(size: number): number | null;

    // Frees a previously allocated memory block.
    function free(handle: number): void;

    // Reads a double at offset from the buffer.
    function read_double(handle: number, offset: number): number;

    // Reads a float at offset from the buffer.
    function read_float(handle: number, offset: number): number;

    // Reads a 64-bit integer.
    function read_int64(handle: number, offset: number): number;

    // Reads a 32-bit integer.
    function read_int32(handle: number, offset: number): number;

    // Reads a 16-bit integer.
    function read_int16(handle: number, offset: number): number;

    // Reads an 8-bit integer.
    function read_int8(handle: number, offset: number): number;

    // Reads a null-terminated string from offset.
    function read_string(handle: number, offset: number): string;

    // Reads a wide (UTF-16) string from offset.
    function read_wide_string(handle: number, offset: number): string;

    // Writes a double at the specified offset.
    function write_double(handle: number, offset: number, value: number): void;

    // Writes a float.
    function write_float(handle: number, offset: number, value: number): void;

    // Writes a 64-bit integer.
    function write_int64(handle: number, offset: number, value: number): void;

    // Writes a 32-bit integer.
    function write_int32(handle: number, offset: number, value: number): void;

    // Writes a 16-bit integer.
    function write_int16(handle: number, offset: number, value: number): void;

    // Writes an 8-bit integer.
    function write_int8(handle: number, offset: number, value: number): void;

    // Writes a null-terminated string.
    function write_string(handle: number, offset: number, str: string): void;

    // Writes a wide (UTF-16) string.
    function write_wide_string(handle: number, offset: number, str: string): void;

    // Returns the total size (in bytes) of the last allocated buffer.
    function get_size(handle: number): number;
}
