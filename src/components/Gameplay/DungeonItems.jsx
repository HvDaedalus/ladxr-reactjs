import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'STANDARD', text: 'Standard'},{value: 'SMALL_KEYS', text:'Small keys'},{value: 'MAP_COMPASS_BEAKS', text:'Map/Compass/Beaks'},{value: 'MAP_COMPASS_BEAKS_SMALL_KEYS', text:'MCB + Small keys'},{value: 'KEYSANITY', text:'Keysanity'},{value: 'KEYSY', text:'Keysy'}];

const DungeonItems = props => {

    const randoCtx = useContext(RandoContext);
    const dungeonItemChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'dungeon_items', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Sets if dungeon items can only be in their respective dungeon, or everywhere.</Text>
        <Text>[Standard] dungeon items are only in their dungeon.</Text>
        <Text>[Maps/.../..] specified items can be anywhere.</Text>
        <Text>[Keysanity] all dungeon items can be anywhere.</Text>
        <Text>[Keysy] no keys, key doors are already open.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Dungeon items:</Text>} value={randoCtx.dungeon_items} options={options} tooltip={tooltip} onChange={dungeonItemChangeHandler}/>
    </StyledBox>
}

export const DungeonItemsTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('dungeon_items');
    }

    return <ZeldaTag label={`Dungeon items: ${options.filter(option => option.value === randoCtx.dungeon_items)[0].text}`} onClose={onCloseTagHandler}/>
}

export default DungeonItems;