import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'DISABLED', text: 'Disabled'},
    {value: 'ORACLE', text: 'Oracle'},
    {value: 'HERO', text: 'Hero'},
    {value: 'ONE_HIT_KO', text: 'One hit KO'}];

const HardMode = props => {

    const randoCtx = useContext(RandoContext);
    const hardModeChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'hard_mode', value: event.target.value});

    }
    const tooltip = <Stack>
        <Text>[Oracle] Less iframes and heath from drops. Bombs damage yourself. Water damages you without flippers. No piece of power or acorn.</Text>
        <Text>[Hero] Switch version hero mode, double damage, no heart/fairy drops.</Text>
        <Text>[One hit KO] You die on a single hit, always.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Hard mode:</Text>} value={randoCtx.hard_mode}
                        options={options} tooltip={tooltip} onChange={hardModeChangeHandler}/>
    </StyledBox>
}

export const HardModeTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('hard_mode');
    }

    return <ZeldaTag label={`Hard mode: ${options.filter(option => option.value === randoCtx.hard_mode)[0].text}`} onClose={onCloseTagHandler}/>
}

export default HardMode;