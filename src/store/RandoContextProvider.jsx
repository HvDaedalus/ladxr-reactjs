import RandoContext from "./rando-context.jsx";
import {useReducer} from "react";

const defaultRandoState = {
    seed: "",
    logic: "NORMAL",
    accessibility: "ALL_LOCATIONS",
    race_mode: false,
    spoiler_format: "NONE",
    heart_pieces: true,
    hidden_seashells: true,
    heart_containers: true,
    instruments: true,
    trade_quest: true,
    witch_item: true,
    add_rooster: true,
    boomerang_trade: "GIFT",
    dungeon_items: "STANDARD",
    random_start_location: false,
    dungeon_shuffle: false,
    entrance_randomizer: "DEFAULT",
    boss_shuffle: "NORMAL",
    miniboss_shuffle: "NORMAL",
    goal: "8_INSTRUMENTS",
    item_pool: "NORMAL",
    health_mode: "NORMAL",
    hard_mode: "DISABLED",
    shop_stealing: "NORMAL",
    good_boy_mode: "DISABLED",
    overworld: "NORMAL",
    owl_statues: "NEVER",
    enable_super_weapons: false,
    quickswap: "DISABLED",
    text_mode: "FAST",
    low_hp_beeps: "SLOW",
    remove_flashing_lights: true,
    show_nag_messages: false,
    graphics: "DEFAULT",
    link_color: "NORMAL",
    music: "DEFAULT"
};

const randoReducer = (state, action) => {
    if(action.type === 'UPDATE'){
        let newState = {...state};
        let newValue = action.value;
        if(newValue === 'true' || newValue === 'false'){
            newValue = newValue === 'true';
        }
        if(action.setting === 'race_mode' && newValue){
            newState.spoiler_format = 'NONE';
        }
        if(action.setting === 'spoiler_format'){
            newState.spoiler_format = newState.race_mode ? 'NONE' : newValue;
        }
        newState[action.setting] = newValue;
        console.log(JSON.stringify(newState));
        return newState;
    }
    return defaultRandoState;
}

const RandoContextProvider = (props) => {

    const [randoState, dispatchRandoAction] = useReducer(randoReducer, defaultRandoState, (context) => {return context});

    const updateSettingHandler = updateSetting => {
        dispatchRandoAction({type: 'UPDATE', setting: updateSetting.name, value: updateSetting.value});
    }

    const randoProviderContext = {
        //main settings
        seed: randoState.seed,
        logic: randoState.logic,
        accessibility: randoState.accessibility,
        race_mode: randoState.race_mode,
        spoiler_format: randoState.spoiler_format,
        //item settings
        heart_pieces: randoState.heart_pieces,
        hidden_seashells: randoState.hidden_seashells,
        heart_containers: randoState.heart_containers,
        instruments: randoState.instruments,
        trade_quest: randoState.trade_quest,
        witch_item: randoState.witch_item,
        add_rooster: randoState.add_rooster,
        boomerang_trade: randoState.boomerang_trade,
        //gameplay settings
        dungeon_items: randoState.dungeon_items,
        random_start_location: randoState.random_start_location,
        dungeon_shuffle: randoState.dungeon_shuffle,
        entrance_randomizer: randoState.entrance_randomizer,
        boss_shuffle: randoState.boss_shuffle,
        miniboss_shuffle: randoState.miniboss_shuffle,
        goal: randoState.goal,
        item_pool: randoState.item_pool,
        health_mode: randoState.health_mode,
        hard_mode: randoState.hard_mode,
        shop_stealing: randoState.shop_stealing,
        //special settings
        good_boy_mode: randoState.good_boy_mode,
        overworld: randoState.overworld,
        owl_statues: randoState.owl_statues,
        enable_super_weapons: randoState.enable_super_weapons,
        //user_options
        quickswap: randoState.quickswap,
        text_mode: randoState.text_mode,
        low_hp_beeps: randoState.low_hp_beeps,
        remove_flashing_lights: randoState.remove_flashing_lights,
        show_nag_messages: randoState.show_nag_messages,
        graphics: randoState.graphics,
        link_color: randoState.link_color,
        music: randoState.music,
        updateSetting: updateSettingHandler
    };
    return <RandoContext.Provider value={randoProviderContext}>{props.children}</RandoContext.Provider>
}

export default RandoContextProvider;