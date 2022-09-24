import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const HiddenSeaShells = props => {

    const randoCtx = useContext(RandoContext);

    const hiddenSeashellsChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'hidden_seashells', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Randomizes the secret sea shells hiding in the ground/trees. (chest are always randomized)</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Randomize hidden seashells:</Text>} value={randoCtx.hidden_seashells} options={options} tooltip={tooltip} onChange={hiddenSeashellsChangeHandler}/>
    </StyledBox>
}

export default HiddenSeaShells;