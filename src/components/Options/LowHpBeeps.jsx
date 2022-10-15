import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'none', text: 'Disabled'},
    {value: 'slow', text:'Slow'},
    {value: 'default', text:'Normal'}];

const LowHpBeeps = props => {

    const randoCtx = useContext(RandoContext);
    const linkColorChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'low_hp_beeps', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Slows or disables the low health beeping sound</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Low HP beeps:</Text>} value={randoCtx.low_hp_beeps} options={options} tooltip={tooltip} onChange={linkColorChangeHandler}/>
    </StyledBox>
}

export const LowHpBeepsTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('low_hp_beeps');
    }

    return <ZeldaTag label={`Low HP beeps: ${options.filter(option => option.value === randoCtx.low_hp_beeps)[0].text}`} onClose={onCloseTagHandler}/>
}

export default LowHpBeeps;