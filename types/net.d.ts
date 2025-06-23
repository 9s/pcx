/** @noSelfInFile */

declare namespace net {
    /**
     * Sends an HTTP request.
     * @param url The request URL.
     * @param headers Optional HTTP headers as a string.
     * @param post_fields Optional POST data as a string.
     */
    function send_request(url: string, headers?: string, post_fields?: string): void;

    /**
     * Resolves a hostname to an IP address (IPv4 or IPv6).
     * @param hostname The hostname to resolve.
     * @returns The resolved IP address as a string, or null if resolution failed.
     */
    function resolve(hostname: string): string | null;

    /**
     * Creates a TCP socket connected to the specified IP and port.
     * @param ip IP address to connect to.
     * @param port Port number.
     * @returns A socket object or null and an error message if connection failed.
     */
    function create_socket(ip: string, port: number): [Socket, null] | [null, string];

    /**
     * Base64 encodes a Lua string.
     * @param lstring The input string.
     * @returns The base64 encoded string.
     */
    function base64_encode(lstring: string): string;

    /**
     * Base64 decodes a Lua string.
     * @param lstring The base64 encoded string.
     * @returns The decoded string.
     */
    function base64_decode(lstring: string): string;
}

interface Socket {
    /**
     * Sends raw data over the socket.
     * @param data The string data to send.
     * @returns The number of bytes sent or null and an error message if failed.
     */
    send(data: string): [number, null] | [null, string];

    /**
     * Receives up to maxlen bytes from the socket.
     * @param maxlen Maximum number of bytes to receive.
     * @returns The received string or null and an error message if failed.
     */
    receive(maxlen: number): [string, null] | [null, string];

    /**
     * Closes the socket immediately.
     */
    close(): void;
}
