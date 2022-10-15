import {Wrap, WrapItem} from "@chakra-ui/react";
import {BossShuffleTag} from "../Gameplay/BossShuffle";
import {DungeonItemsTag} from "../Gameplay/DungeonItems.jsx";
import {DungeonShuffleTag} from "../Gameplay/DungeonShuffle";
import {EntranceRandomizerTag} from "../Gameplay/EntranceRandomizer.jsx";
import {GoalTag} from "../Gameplay/Goal";
import {HardModeTag} from "../Gameplay/HardMode";
import {HealthModeTag} from "../Gameplay/HealthMode";
import {ItemPoolTag} from "../Gameplay/ItemPool";
import {MiniBossShuffleTag} from "../Gameplay/MiniBossShuffle";
import {RandomStartLocationTag} from "../Gameplay/RandomStartLocation";
import {StealingTag} from "../Gameplay/Stealing";
import {AddRoosterTag} from "../Items/AddRooster";
import {BoomerangTradeTag} from "../Items/BoomerangTrade";
import {HeartContainersTag} from "../Items/HeartContainers";
import {HeartPiecesTag} from "../Items/HeartPieces";
import {HiddenSeaShellsTag} from "../Items/HiddenSeaShells";
import {InstrumentsTag} from "../Items/Instruments";
import {TradeQuestTag} from "../Items/TradeQuest";
import {WitchItemTag} from "../Items/WitchItem";
import {AccessibilityTag} from "./Accessibility";
import {LogicTag} from "./Logic";
import {RaceModeTag} from "./RaceMode";
import {SpoilerFormatTag} from "./SpoilerFormat";
import {GraphicsTag} from "../Options/Graphics";
import {LinkColorTag} from "../Options/LinkColor";
import {LowHpBeepsTag} from "../Options/LowHpBeeps";
import {MusicTag} from "../Options/Music";
import {QuickSwapTag} from "../Options/QuickSwap";
import {ShowNagMessagesTag} from "../Options/ShowNagMessages.jsx";
import {RemoveFlashingLightsTag} from "../Options/RemoveFlashingLights.jsx";
import {TextModeTag} from "../Options/TextMode";
import {EnableSuperWeaponsTag} from "../Special/EnableSuperWeapons.jsx";
import {GoodBoyModeTag} from "../Special/GoodBoyMode";
import {OverworldTag} from "../Special/Overworld";
import {OwlStatuesTag} from "../Special/OwlStatues";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";


const TagBar = () => {

    const randoCtx = useContext(RandoContext);

    return <Wrap m={3} spacing='5px'>
        {!randoCtx.isDefault('accessibility') && <WrapItem><AccessibilityTag/></WrapItem>}
        {!randoCtx.isDefault('add_rooster') && <WrapItem><AddRoosterTag/></WrapItem>}
        {!randoCtx.isDefault('boomerang_trade') && <WrapItem><BoomerangTradeTag/></WrapItem>}
        {!randoCtx.isDefault('boss_shuffle') && <WrapItem><BossShuffleTag/></WrapItem> }
        {!randoCtx.isDefault('dungeon_items') && <WrapItem><DungeonItemsTag/></WrapItem>}
        {!randoCtx.isDefault('dungeon_shuffle') && <WrapItem><DungeonShuffleTag/></WrapItem>}
        {!randoCtx.isDefault('entrance_randomizer') && <WrapItem><EntranceRandomizerTag/></WrapItem>}
        {!randoCtx.isDefault('goal') && <WrapItem><GoalTag/></WrapItem>}
        {!randoCtx.isDefault('hard_mode') && <WrapItem><HardModeTag/></WrapItem>}
        {!randoCtx.isDefault('health_mode') && <WrapItem><HealthModeTag/></WrapItem>}
        {!randoCtx.isDefault('heart_containers') && <WrapItem><HeartContainersTag/></WrapItem>}
        {!randoCtx.isDefault('heart_pieces') && <WrapItem><HeartPiecesTag/></WrapItem>}
        {!randoCtx.isDefault('hidden_seashells') && <WrapItem><HiddenSeaShellsTag/></WrapItem>}
        {!randoCtx.isDefault('instruments') && <WrapItem><InstrumentsTag/></WrapItem>}
        {!randoCtx.isDefault('item_pool') && <WrapItem><ItemPoolTag/></WrapItem>}
        {!randoCtx.isDefault('logic') && <WrapItem><LogicTag/></WrapItem>}
        {!randoCtx.isDefault('miniboss_shuffle') && <WrapItem><MiniBossShuffleTag/></WrapItem>}
        {!randoCtx.isDefault('race_mode') && <WrapItem><RaceModeTag/></WrapItem>}
        {!randoCtx.isDefault('random_start_location') && <WrapItem><RandomStartLocationTag/></WrapItem>}
        {!randoCtx.isDefault('shop_stealing') && <WrapItem><StealingTag/></WrapItem>}
        {!randoCtx.isDefault('trade_quest') && <WrapItem><TradeQuestTag/></WrapItem>}
        {!randoCtx.isDefault('witch_item') && <WrapItem><WitchItemTag/></WrapItem>}
        {!randoCtx.isDefault('spoiler_format') && <WrapItem><SpoilerFormatTag/></WrapItem>}
        {!randoCtx.isDefault('graphics') && <WrapItem><GraphicsTag/></WrapItem>}
        {!randoCtx.isDefault('link_color') && <WrapItem><LinkColorTag/></WrapItem>}
        {!randoCtx.isDefault('low_hp_beeps') && <WrapItem><LowHpBeepsTag/></WrapItem>}
        {!randoCtx.isDefault('music') && <WrapItem><MusicTag/></WrapItem>}
        {!randoCtx.isDefault('quickswap') && <WrapItem><QuickSwapTag/></WrapItem>}
        {!randoCtx.isDefault('remove_flashing_lights') && <WrapItem><RemoveFlashingLightsTag/></WrapItem>}
        {!randoCtx.isDefault('show_nag_messages') && <WrapItem><ShowNagMessagesTag/></WrapItem>}
        {!randoCtx.isDefault('text_mode') && <WrapItem><TextModeTag/></WrapItem>}
        {!randoCtx.isDefault('enable_super_weapons') && <WrapItem><EnableSuperWeaponsTag/></WrapItem>}
        {!randoCtx.isDefault('good_boy_mode') && <WrapItem><GoodBoyModeTag/></WrapItem>}
        {!randoCtx.isDefault('overworld') && <WrapItem><OverworldTag/></WrapItem>}
        {!randoCtx.isDefault('owl_statues') && <WrapItem><OwlStatuesTag/></WrapItem>}
    </Wrap>
}

export default TagBar;