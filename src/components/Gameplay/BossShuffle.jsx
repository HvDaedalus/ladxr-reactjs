import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const BossShuffle = props => {

    const randoCtx = useContext(RandoContext);

    const bossShuffleChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'boss_shuffle', value: event.target.value });
    }

    const options = [{value: 'NORMAL', text: 'Normal'},{value: 'SHUFFLE', text:'Shuffle'},{value: 'RANDOMIZE', text:'Randomize'}];
    const tooltip = <Stack>
        <Text>Randomizes the dungeon bosses that each dungeon has</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Boss shuffle:</Text>} value={randoCtx.boss_shuffle} options={options} tooltip={tooltip} onChange={bossShuffleChangeHandler}/>
    </StyledBox>
}

export default BossShuffle;