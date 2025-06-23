/** @noSelfInFile */

declare namespace trace {
    /**
     * Casts a trace from start to end coordinates.
     * @param startx Start X coordinate.
     * @param starty Start Y coordinate.
     * @param startz Start Z coordinate.
     * @param endx End X coordinate.
     * @param endy End Y coordinate.
     * @param endz End Z coordinate.
     * @returns True if the endpoint is hit/visible, false otherwise.
     */
    function cast(
        startx: number,
        starty: number,
        startz: number,
        endx: number,
        endy: number,
        endz: number
    ): boolean;
}
