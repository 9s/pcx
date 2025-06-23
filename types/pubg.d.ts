declare namespace pubg {
    /**
     * Initializes the decryption system with a given offset
     * @param offset Integer offset required for decryption initialization
     * @returns true if successful, false otherwise
     */
    function init_decrypt(offset: number): boolean;

    /**
     * Decrypts a given encrypted memory address
     * @param address Encrypted memory address as an integer
     * @returns Decrypted memory address
     */
    function xe_decrypt(address: number): number;
}
