import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'ALL_LOCATIONS', text:'100% Locations'},{value: 'BEATABLE', text:'Beatable'}];

const Accessibility = props => {

    const randoCtx = useContext(RandoContext);
    const accessibilityChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'accessibility', value: event.target.value});

    }
    const tooltip = <Stack>
        <Text>[100% Locations] guaranteed that every single item can be reached and gained.</Text>
        <Text>[Beatable] only guarantees that the game is beatable. Certain items/chests might never be reachable.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label='Accessibility:' value={randoCtx.accessibility} options={options} tooltip={tooltip} onChange={accessibilityChangeHandler}/>
    </StyledBox>
}

export const AccessibilityTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('accessibility');
    }

    return <ZeldaTag label={`Accessibility: ${options.filter(option => option.value === randoCtx.accessibility)[0].text}`} onClose={onCloseTagHandler}/>
}

export default Accessibility;