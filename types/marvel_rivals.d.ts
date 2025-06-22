/** @noSelfInFile **/
declare namespace marvel_rivals {
    // Returns a table with local player properties.
    function get_local_player(): MarvelRivalsPlayer | null;

    // Returns a list of all player entities.
    function get_player_list(): MarvelRivalsPlayer[] | null;

    // Returns uintptr_t of UWorld.
    function get_world(): number;

    // Returns uintptr_t of UGameInstance.
    function get_game_instance(): number;

    // Returns uintptr_t of AGameStateBase.
    function get_game_state(): number;

    // Converts world coordinates to screen space.
    function world_to_screen(x: number, y: number, z: number): [number, number] | null;

    // Returns the world position of the specified bone.
    function get_bone_position(skeletal_mesh: number, bone_id: number): [number, number, number];

    // Returns a string or nil.
    function get_fname(key: number): string | null;

    // Returns a string from a pointer to FText.
    function get_ftext(ptr: number): string;

    // Returns a table of class fields with names and memory offsets.
    function get_class_dump(pointer: number): ClassDumpEntry[] | null;
}

// Marvel Rivals player structure
interface MarvelRivalsPlayer {
    player_controller?: number;
    skeletal_mesh: number;
    root_component: number;
    child_actor_component: number;
    child_actor: number;
    bone_array: number;
    health_component: number;
    player_state: number;
    pawn: number;
    hero_name: string;

    // Bone IDs
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

// Structure for class dump entries
interface ClassDumpEntry {
    name: string;
    offset: number;
}
