import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const MiniBossShuffle = props => {

    const randoCtx = useContext(RandoContext);

    const minibossShuffleChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'miniboss_shuffle', value: event.target.value });
    }

    const options = [{value: 'NORMAL', text: 'Normal'},{value: 'SHUFFLE', text:'Shuffle'},{value: 'RANDOMIZE', text:'Randomize'}];
    const tooltip = <Stack>
        <Text>Randomizes the dungeon minibosses that each dungeon has</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Miniboss shuffle:</Text>} value={randoCtx.miniboss_shuffle} options={options} tooltip={tooltip} onChange={minibossShuffleChangeHandler}/>
    </StyledBox>
}

export default MiniBossShuffle;