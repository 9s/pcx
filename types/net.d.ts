/** @noSelfInFile **/
declare namespace net {
    // Sends an HTTP request with optional headers and POST data.
    function send_request(url: string, headers: string, post_fields: string): void;

    // Looks up the first IPv4 or IPv6 address for hostname. Example: "google.com"
    function resolve(hostname: string): string | null;

    // Opens a TCP connection and returns a socket table
    function create_socket(ip: string, port: number): Socket | [null, string];

    // Returns encoded lstring
    function base64_encode(data: string): string;

    // Returns decoded lstring
    function base64_decode(data: string): string;
}

interface Socket {
    // Sends the raw string "data" on the socket and returns number of bytes sent
    send(data: string): number | [null, string];

    // Reads up to "maxlen" bytes from the socket. Returns the received string or nil plus an error message if the connection closed or an error occurred.
    receive(maxlen: number): string | [null, string];

    // Immediately closes the socket.
    close(): void;
}
