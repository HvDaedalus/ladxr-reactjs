import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const DungeonShuffle = props => {

    const randoCtx = useContext(RandoContext);

    const dungeonShuffleChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'dungeon_shuffle', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Randomizes the dungeon that each dungeon entrance leads to</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Dungeon shuffle:</Text>} value={randoCtx.dungeon_shuffle} options={options} tooltip={tooltip} onChange={dungeonShuffleChangeHandler}/>
    </StyledBox>
}

export default DungeonShuffle;