import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const Logic = props => {

    const randoCtx = useContext(RandoContext);

    const logicChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'logic', value: event.target.value});
    }

    const options = [{value: 'CASUAL', text:'Casual'},{value: 'NORMAL', text:'Normal'}, {value: 'HARD', text: 'Hard'}, {value: 'GLITCHED', text: 'Glitched'}, {value: 'HELL', text: 'Hell'}];
    const tooltip = <Stack>
        <Text as='span'>Affects where items are allowed to be placed.</Text>
        <Text as='span'>[Casual] Same as normal, except that a few more complex options are removed, like removing bushes with powder and killing enemies with powder or bombs.</Text>
        <Text as='span'>[Normal] playable without using any tricks or glitches. Requires nothing to be done outside of normal item usage.</Text>
        <Text as='span'>[Hard] More advanced techniques may be required, but glitches are not. Examples include tricky jumps, killing enemies with only pots and skipping keys with smart routing.</Text>
        <Text as='span'>[Glitched] Advanced glitches and techniques may be required, but extremely difficult or tedious tricks are not required. Examples include Bomb Triggers, Super Jumps and Jesus Jumps.</Text>
        <Text as='span'>[Hell] Obscure and hard techniques may be required. Examples include featherless jumping with boots and/or hookshot, sequential pit buffers and unclipped superjumps. Things in here can be extremely hard to do or very time consuming. Only insane people go for this.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label='Logic:' value={randoCtx.logic} options={options} tooltip={tooltip} onChange={logicChangeHandler}/>
    </StyledBox>
}

export default Logic;