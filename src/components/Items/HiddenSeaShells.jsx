import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];

const HiddenSeaShells = props => {

    const randoCtx = useContext(RandoContext);
    const hiddenSeashellsChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'hidden_seashells', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Randomizes the secret sea shells hiding in the ground/trees. (chest are always randomized)</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Randomize hidden seashells:</Text>} value={randoCtx.hidden_seashells} options={options} tooltip={tooltip} onChange={hiddenSeashellsChangeHandler}/>
    </StyledBox>
}

export const HiddenSeaShellsTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('hidden_seashells');
    }

    return <ZeldaTag label={`Hidden seashells: ${options.filter(option => option.value === randoCtx.hidden_seashells)[0].text}`} onClose={onCloseTagHandler}/>
}

export default HiddenSeaShells;