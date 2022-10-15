import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];

const ShowNagMessages = props => {

    const randoCtx = useContext(RandoContext);
    const nagMessagesChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'show_nag_messages', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Enables the nag messages normally shown when touching stones and crystals</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Show nag messages:</Text>} value={randoCtx.show_nag_messages} options={options} tooltip={tooltip} onChange={nagMessagesChangeHandler}/>
    </StyledBox>
}

export const ShowNagMessagesTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('show_nag_messages');
    }

    return <ZeldaTag label={`Nag Messages: ${options.filter(option => option.value === randoCtx.show_nag_messages)[0].text}`} onClose={onCloseTagHandler}/>
}

export default ShowNagMessages;