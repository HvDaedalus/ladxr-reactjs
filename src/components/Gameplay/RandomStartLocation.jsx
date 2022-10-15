import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];

const RandomStartLocation = props => {

    const randoCtx = useContext(RandoContext);
    const randomStartChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'random_start_location', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Randomize where your starting house is located.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Random start location:</Text>} value={randoCtx.random_start_location} options={options} tooltip={tooltip} onChange={randomStartChangeHandler}/>
    </StyledBox>
}

export const RandomStartLocationTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('random_start_location');
    }

    return <ZeldaTag label={`Random start: ${options.filter(option => option.value === randoCtx.random_start_location)[0].text}`} onClose={onCloseTagHandler}/>
}

export default RandomStartLocation;