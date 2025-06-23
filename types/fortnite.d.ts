declare namespace fortnite {
    /**
     * Retrieves the decrypted player name from a known memory address
     * @param address The memory address pointing to the name structure
     * @returns Decrypted player name as a string
     */
    function get_player_name(address: number): string;
}
