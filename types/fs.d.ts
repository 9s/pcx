/** @noSelfInFile **/
declare namespace fs {
    // Checks if the file exists.
    function does_file_exist(file_name: string): boolean;

    // Reads data from a file.
    function read_from_file(file_name: string): string;

    // Writes data to a file.
    function write_to_file(file_name: string, data: string): void;

    // Deletes the specified file.
    function delete_file(file_name: string): void;

    // Writes all contents of a buffer to a file
    function write_to_file_from_buffer(file_name: string, buffer_handle: number): void;

    // Reads all file contents into a buffer
    function read_from_file_to_buffer(file_name: string, buffer_handle: number): void;

    // Get size of a file in bytes
    function get_file_size(file_name: string): number;

    // Compress a Lua string
    function compress(data: string): string;

    // Decompress a previously compressed string
    function decompress(data: string): string;
}
