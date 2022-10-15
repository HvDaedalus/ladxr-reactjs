import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'NORMAL', text: 'Normal'},
    {value: 'INVERTED', text: 'Inverted'},
    {value: 'ONE_HEART', text: 'Start with 1 heart'},
    {value: 'LOW_MAX', text: 'Low max'}];

const HealthMode = props => {

    const randoCtx = useContext(RandoContext);
    const healthModeChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'health_mode', value: event.target.value});

    }
    const tooltip = <Stack>
        <Text>[Normal] health works as you would expect.</Text>
        <Text>[Inverted] you start with 9 heart containers, but killing a boss will take a heartcontainer instead of giving one.</Text>
        <Text>[Start with 1] normal game, you just start with 1 heart instead of 3.</Text>
        <Text>[Low max] replace heart containers with heart pieces.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Health mode:</Text>} value={randoCtx.health_mode}
                        options={options} tooltip={tooltip} onChange={healthModeChangeHandler}/>
    </StyledBox>
}

export const HealthModeTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('health_mode');
    }

    return <ZeldaTag label={`Health mode: ${options.filter(option => option.value === randoCtx.health_mode)[0].text}`} onClose={onCloseTagHandler}/>
}

export default HealthMode;