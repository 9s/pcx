/** @noSelfInFile **/
declare namespace proc {
    // Returns true if a process is currently attached.
    function is_attached(): boolean;

    // Returns true if the attached process has exited.
    function did_exit(): boolean;

    // Returns the process ID of the attached process.
    function pid(): number;

    // Returns the PEB (Process Environment Block) address.
    function peb(): number;

    // Returns the process's base address.
    function base_address(): number;

    // Returns the base module's address and size.
    function get_base_module(): [number, number];

    // Finds a module by name and returns its base address and size.
    function find_module(module_name: string): [number, number] | null;

    // Searches for a memory pattern within a module.
    function find_signature(base_address: number, size: number, signature: string): number | null;

    // Reads a double from memory.
    function read_double(address: number): number;

    // Reads a float from memory.
    function read_float(address: number): number;

    // Reads a 64-bit integer from memory.
    function read_int64(address: number): number;

    // Reads a 32-bit integer from memory.
    function read_int32(address: number): number;

    // Reads a 16-bit integer from memory.
    function read_int16(address: number): number;

    // Reads an 8-bit integer from memory.
    function read_int8(address: number): number;

    // Reads a string from memory.
    function read_string(address: number, size: number): string;

    // Reads a wide (UTF-16) string from memory.
    function read_wide_string(address: number, size: number): string;

    // Reads memory into a buffer handle (from m.alloc()).
    function read_to_memory_buffer(address: number, buffer: number, size: number): void;

    // Writes a double to memory.
    function write_double(address: number, value: number): void;

    // Writes a float to memory.
    function write_float(address: number, value: number): void;

    // Writes a 64-bit integer to memory.
    function write_int64(address: number, value: number): void;

    // Writes a 32-bit integer to memory.
    function write_int32(address: number, value: number): void;

    // Writes a 16-bit integer to memory.
    function write_int16(address: number, value: number): void;

    // Writes an 8-bit integer to memory.
    function write_int8(address: number, value: number): void;

    // Writes a string to memory.
    function write_string(address: number, text: string): void;

    // Writes a wide (UTF-16) string to memory.
    function write_wide_string(address: number, text: string): void;

    // Writes memory from a buffer handle (from m.alloc()).
    function write_from_memory_buffer(address: number, buffer: number, size: number): void;
}
