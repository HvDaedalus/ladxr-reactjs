import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];

const RaceMode = props => {

    const randoCtx = useContext(RandoContext);
    const raceModeChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'race_mode', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Spoiler logs can not be generated for ROMs generated with race mode enabled, and seed generation is slightly different.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Race mode:</Text>} value={randoCtx.race_mode} options={options} tooltip={tooltip} onChange={raceModeChangeHandler}/>
    </StyledBox>
}

export const RaceModeTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('race_mode');
    }

    return <ZeldaTag color='red' label={`Race mode: ${options.filter(option => option.value === randoCtx.race_mode)[0].text}`} onClose={onCloseTagHandler}/>
}

export default RaceMode;