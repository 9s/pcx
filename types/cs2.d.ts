/** @noSelfInFile */

declare namespace cs2 {
    /**
     * Retrieves an interface pointer from a given module.
     * @param module_name The name of the module.
     * @param interface_name The interface name.
     * @returns Pointer as an integer.
     */
    function get_interface(module_name: string, interface_name: string): number;

    /**
     * Gets a console variable (cvar) pointer by name.
     * @param cvar_name The name of the cvar.
     * @returns Pointer as an integer.
     */
    function get_cvar(cvar_name: string): number;

    /**
     * Returns the pointer to the entity list.
     * @returns Pointer as an integer.
     */
    function get_entity_list(): number;

    /**
     * Returns the pointer to the entity system.
     * @returns Pointer as an integer.
     */
    function get_entity_system(): number;

    /**
     * Returns the highest entity index.
     * @returns Highest entity index as an integer.
     */
    function get_highest_entity_index(): number;

    /**
     * Returns a pointer to global variables.
     * @returns Pointer as an integer.
     */
    function get_global_vars(): number;

    /**
     * Returns a pointer to game rules.
     * @returns Pointer as an integer.
     */
    function get_game_rules(): number;

    /**
     * Returns a pointer to the planted C4.
     * @returns Pointer as an integer.
     */
    function get_planted_c4(): number;

    /**
     * Returns a pointer to the view matrix.
     * @returns Pointer as an integer.
     */
    function get_view_matrix(): number;

    /**
     * Converts world coordinates to screen space.
     * @param x World X coordinate.
     * @param y World Y coordinate.
     * @param z World Z coordinate.
     * @returns Screen space coordinates as [x, y].
     */
    function world_to_screen(x: number, y: number, z: number): [number, number];

    /**
     * Gets the world position of a bone.
     * @param bone_array Pointer to the bone array.
     * @param boneid ID of the bone.
     * @returns World position coordinates as [x, y, z].
     */
    function get_bone_position(bone_array: number, boneid: number): [number, number, number];

    /**
     * Represents a player entity.
     */
    interface Player {
        /** Pointer to the player controller. */
        controller: number;
        /** Pointer to the player's pawn. */
        pawn: number;
        /** Pointer to the currently clipping weapon. */
        clipping_weapon: number;
        /** Pointer to the bone array. */
        bone_array: number;
        /** Whether the player is a teammate (optional). */
        is_teammate?: boolean;
    }

    /**
     * Returns a list of players.
     * @returns Array of Player objects or null if unavailable.
     */
    function get_player_list(): Player[] | null;

    /**
     * Returns the local player.
     * @returns Player object or null if unavailable.
     */
    function get_local_player(): Player | null;

    /**
     * Represents a single schema field.
     */
    interface SchemaField {
        /** The schema field name. */
        name: string;
        /** Memory offset of the field. */
        offset: number;
    }

    /**
     * Returns a table containing the dumped schema fields for Counter-Strike 2.
     * @returns Array of SchemaField or null if dump unavailable.
     */
    function get_schema_dump(): SchemaField[] | null;
}
