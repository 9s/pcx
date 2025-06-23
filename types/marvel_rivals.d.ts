/** @noSelfInFile */

declare namespace marvel_rivals {
    /**
     * Represents the player data returned by get_local_player or in player lists.
     */
    interface PlayerData {
        player_controller: number;
        skeletal_mesh: number;
        root_component: number;
        child_actor_component: number;
        child_actor: number;
        bone_array: number;
        health_component: number;
        player_state: number;
        pawn: number;
        hero_name: string;

        bone_id_upper_head?: number;
        bone_id_head?: number;
        bone_id_neck?: number;
        bone_id_chest?: number;
        bone_id_stomach?: number;
        bone_id_pelvis?: number;

        bone_id_left_shoulder?: number;
        bone_id_left_elbow?: number;
        bone_id_left_hand?: number;

        bone_id_right_shoulder?: number;
        bone_id_right_elbow?: number;
        bone_id_right_hand?: number;

        bone_id_left_hip?: number;
        bone_id_left_knee?: number;
        bone_id_left_foot?: number;

        bone_id_right_hip?: number;
        bone_id_right_knee?: number;
        bone_id_right_foot?: number;
    }

    /**
     * Returns data of the local player.
     * @returns Player data or null if unavailable.
     */
    function get_local_player(): PlayerData | null;

    /**
     * Returns a list of players.
     * @returns Array of player data.
     */
    function get_player_list(): PlayerData[];

    /**
     * Returns the UWorld pointer.
     * @returns Memory pointer to UWorld.
     */
    function get_world(): number;

    /**
     * Returns the UGameInstance pointer.
     * @returns Memory pointer to UGameInstance.
     */
    function get_game_instance(): number;

    /**
     * Returns the AGameStateBase pointer.
     * @returns Memory pointer to AGameStateBase.
     */
    function get_game_state(): number;

    /**
     * Converts world coordinates to screen space.
     * @param x World X coordinate.
     * @param y World Y coordinate.
     * @param z World Z coordinate.
     * @returns Screen space X and Y coordinates.
     */
    function world_to_screen(x: number, y: number, z: number): [number, number];

    /**
     * Gets the world position of a bone.
     * @param skeletal_mesh The skeletal mesh pointer.
     * @param bone_id The bone ID.
     * @returns World position [x, y, z].
     */
    function get_bone_position(skeletal_mesh: number, bone_id: number): [number, number, number];

    /**
     * Returns a string for the given key, or null.
     * @param key Key identifier.
     */
    function get_fname(key: number): string | null;

    /**
     * Returns a string from a string pointer.
     * @param string_ptr Pointer to the string.
     */
    function get_ftext(string_ptr: number): string;

    /**
     * Represents a single field in a class dump.
     */
    interface ClassField {
        /** The name of the class field. */
        name: string;
        /** The memory offset associated with the field. */
        offset: number;
    }

    /**
     * Returns a table containing the class fields for the specified class pointer in Marvel Rivals.
     * Returns null and logs an error if argument is missing, pointer is null, or dump is empty.
     * @param pointer Memory address of the class.
     * @returns Array of class fields or null on failure.
     */
    function get_class_dump(pointer: number): ClassField[] | null;
}
