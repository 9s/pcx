declare namespace rust {
    /**
     * Retrieves world-space transform position from a transform address
     * @param address Pointer to the transform component
     * @returns x, y, z – World position coordinates
     */
    function get_transform_position(address: number): [number, number, number];
}
