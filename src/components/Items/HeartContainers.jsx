import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const HeartContainers = props => {

    const randoCtx = useContext(RandoContext);

    const heartContainersChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'heart_containers', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Includes boss heart container drops in the item pool</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Randomize heart containers:</Text>} value={randoCtx.heart_containers} options={options} tooltip={tooltip} onChange={heartContainersChangeHandler}/>
    </StyledBox>
}

export default HeartContainers;