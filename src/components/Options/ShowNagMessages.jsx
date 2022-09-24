import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const ShowNagMessages = props => {

    const randoCtx = useContext(RandoContext);

    const nagMessagesChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'show_nag_messages', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Enables the nag messages normally shown when touching stones and crystals</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Show nag messages:</Text>} value={randoCtx.show_nag_messages} options={options} tooltip={tooltip} onChange={nagMessagesChangeHandler}/>
    </StyledBox>
}

export default ShowNagMessages;