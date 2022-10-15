import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import StyledBox from "../UI/StyledBox.jsx";
import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'fast', text: 'Fast'},{value: 'default', text:'Normal'},{value: 'none', text:'No-text'}];

const TextMode = props => {

    const randoCtx = useContext(RandoContext);
    const textModeChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'text_mode', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>[Fast] makes text appear twice as fast.</Text>
        <Text>[No-Text] removes all text from the game</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Text mode:</Text>} value={randoCtx.text_mode} options={options} tooltip={tooltip} onChange={textModeChangeHandler}/>
    </StyledBox>
}

export const TextModeTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('text_mode');
    }

    return <ZeldaTag label={`Text mode: ${options.filter(option => option.value === randoCtx.text_mode)[0].text}`} onClose={onCloseTagHandler}/>
}

export default TextMode;