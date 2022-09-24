import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const RandomStartLocation = props => {

    const randoCtx = useContext(RandoContext);

    const randomStartChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'random_start_location', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Randomize where your starting house is located.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Random start location:</Text>} value={randoCtx.random_start_location} options={options} tooltip={tooltip} onChange={randomStartChangeHandler}/>
    </StyledBox>
}

export default RandomStartLocation;