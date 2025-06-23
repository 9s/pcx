/** @noSelfInFile */

declare namespace m {
    /**
     * Allocates a memory block of the given size.
     * @param size Number of bytes to allocate.
     * @returns A handle representing the allocated memory buffer, or null if allocation failed.
     */
    function alloc(size: number): number | null;

    /**
     * Frees a previously allocated memory block.
     * @param handle The memory buffer handle to free.
     */
    function free(handle: number): void;

    /**
     * Reads a double at the specified offset from the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @returns The double value read.
     */
    function read_double(handle: number, offset: number): number;

    /**
     * Reads a float at the specified offset from the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @returns The float value read.
     */
    function read_float(handle: number, offset: number): number;

    /**
     * Reads a 64-bit integer at the specified offset from the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @returns The 64-bit integer read.
     */
    function read_int64(handle: number, offset: number): number;

    /**
     * Reads a 32-bit integer at the specified offset from the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @returns The 32-bit integer read.
     */
    function read_int32(handle: number, offset: number): number;

    /**
     * Reads a 16-bit integer at the specified offset from the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @returns The 16-bit integer read.
     */
    function read_int16(handle: number, offset: number): number;

    /**
     * Reads an 8-bit integer at the specified offset from the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @returns The 8-bit integer read.
     */
    function read_int8(handle: number, offset: number): number;

    /**
     * Reads a null-terminated string starting at the specified offset from the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @returns The string read.
     */
    function read_string(handle: number, offset: number): string;

    /**
     * Reads a wide (UTF-16) null-terminated string starting at the specified offset from the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @returns The wide string read.
     */
    function read_wide_string(handle: number, offset: number): string;

    /**
     * Writes a double value at the specified offset in the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @param value Double value to write.
     */
    function write_double(handle: number, offset: number, value: number): void;

    /**
     * Writes a float value at the specified offset in the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @param value Float value to write.
     */
    function write_float(handle: number, offset: number, value: number): void;

    /**
     * Writes a 64-bit integer value at the specified offset in the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @param value 64-bit integer value to write.
     */
    function write_int64(handle: number, offset: number, value: number): void;

    /**
     * Writes a 32-bit integer value at the specified offset in the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @param value 32-bit integer value to write.
     */
    function write_int32(handle: number, offset: number, value: number): void;

    /**
     * Writes a 16-bit integer value at the specified offset in the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @param value 16-bit integer value to write.
     */
    function write_int16(handle: number, offset: number, value: number): void;

    /**
     * Writes an 8-bit integer value at the specified offset in the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @param value 8-bit integer value to write.
     */
    function write_int8(handle: number, offset: number, value: number): void;

    /**
     * Writes a null-terminated string starting at the specified offset in the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @param str String to write.
     */
    function write_string(handle: number, offset: number, str: string): void;

    /**
     * Writes a wide (UTF-16) null-terminated string starting at the specified offset in the buffer.
     * @param handle Memory buffer handle.
     * @param offset Offset in bytes.
     * @param str Wide string to write.
     */
    function write_wide_string(handle: number, offset: number, str: string): void;

    /**
     * Returns the total size (in bytes) of the last allocated buffer.
     * @param handle Memory buffer handle.
     * @returns The size in bytes.
     */
    function get_size(handle: number): number;
}
