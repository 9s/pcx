/** @noSelfInFile **/
declare namespace trace {
    // Returns true if endpoint is hit/visible.
    function cast(startx: number, starty: number, startz: number, endx: number, endy: number, endz: number): boolean;
}

declare namespace cs2 {
    // Returns integer/pointer.
    function get_interface(module_name: string, interface_name: string): number;

    // Returns integer/pointer.
    function get_cvar(cvar_name: string): number;

    // Returns integer/pointer.
    function get_entity_list(): number;

    // Returns integer/pointer.
    function get_entity_system(): number;

    // Returns integer.
    function get_highest_entity_index(): number;

    // Returns integer/pointer.
    function get_global_vars(): number;

    // Returns integer/pointer.
    function get_game_rules(): number;

    // Returns integer/pointer.
    function get_planted_c4(): number;

    // Returns integer/pointer.
    function get_view_matrix(): number;

    // Returns x, y screen coords.
    function world_to_screen(x: number, y: number, z: number): [number, number] | null;

    // Returns x, y, z world coords.
    function get_bone_position(bone_array: number, boneid: number): [number, number, number];

    // Returns entity list table with controller, pawn, clipping_weapon, bone_array as integers/pointers and is_teammate as boolean.
    function get_player_list(): Player[] | null;

    // Returns controller, pawn, clipping_weapon, bone_array as integers/pointers for local player.
    function get_local_player(): Player | null;

    // Returns a table containing schema field names and memory offsets.
    function get_schema_dump(): SchemaEntry[] | null;
}

interface Player {
    controller: number;
    pawn: number;
    clipping_weapon: number;
    bone_array: number;
    is_teammate: boolean;
}

interface SchemaEntry {
    name: string;
    offset: number;
}
