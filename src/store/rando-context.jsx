import {createContext} from "react";

const RandoContext = createContext({
    //main settings
    seed: '',
    logic: 'NORMAL',
    accessibility: 'ALL_LOCATIONS',
    race_mode: false,
    spoiler_formant: 'NONE',
    //item settings
    heart_pieces: true,
    hidden_seashells: true,
    heart_containers: true,
    instruments: true,
    trade_quest: true,
    witch_item: true,
    add_rooster: true,
    boomerang_trade: 'GIFT',
    //gameplay settings
    dungeon_items: 'STANDARD',
    random_start_location: false,
    dungeon_shuffle: false,
    entrance_randomizer: 'DEFAULT',
    boss_shuffle: 'NORMAL',
    miniboss_shuffle: 'NORMAL',
    goal: '8_INSTRUMENTS',
    item_pool: 'NORMAL',
    health_mode: 'NORMAL',
    hard_mode: 'DISABLED',
    shop_stealing: 'NORMAL',
    //special settings
    good_boy_mode: 'DISABLED',
    overworld: 'normal',
    owl_statues: 'NEVER',
    enable_super_weapons: false,
    //user_options
    quickswap: 'none',
    text_mode: 'fast',
    low_hp_beeps: 'SLOW',
    remove_flashing_lights: true,
    show_nag_messages: false,
    graphics: 'DEFAULT',
    link_color: 'NORMAL',
    music: 'DEFAULT',
    updateSetting: (setting) => {},
    isDefault: (setting) => {},
    resetToDefault: (setting) => {}
});

export default RandoContext;