import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'NONE', text:'None'},{value: 'TEXT', text:'Text'},{value: 'JSON', text:'JSON'}];

const SpoilerFormat = props => {

    const randoCtx = useContext(RandoContext);
    const spoilerFormatChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'spoiler_format', value: event.target.value});

    }
    const tooltip = <Stack>
        <Text>Affects how the spoiler log is generated.</Text>
        <Text>[None] No spoiler log is generated. One can still be manually dumped later.</Text>
        <Text>[Text] Creates a .txt file meant for a human to read.</Text>
        <Text>[JSON] Creates a .json file with a little more information and meant for a computer to read.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Spoiler format:</Text>} value={randoCtx.spoiler_format} options={options} tooltip={tooltip} onChange={spoilerFormatChangeHandler} disabled={randoCtx.race_mode}/>
    </StyledBox>
}

export const SpoilerFormatTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('spoiler_format');
    }

    return <ZeldaTag label={`Spoiler format: ${options.filter(option => option.value === randoCtx.spoiler_format)[0].text}`} onClose={onCloseTagHandler}/>
}

export default SpoilerFormat;