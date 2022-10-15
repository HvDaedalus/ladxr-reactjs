import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];

const HeartPieces = props => {

    const randoCtx = useContext(RandoContext);

    const heartPiecesChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'heart_pieces', value: event.target.value });
    }

    const tooltip = <Stack>
        <Text>Includes heart pieces in the item pool</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Randomize heart pieces:</Text>} value={randoCtx.heart_pieces} options={options} tooltip={tooltip} onChange={heartPiecesChangeHandler}/>
    </StyledBox>
}

export const HeartPiecesTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('heart_pieces');
    }

    return <ZeldaTag label={`Heart pieces: ${options.filter(option => option.value === randoCtx.heart_pieces)[0].text}`} onClose={onCloseTagHandler}/>
}

export default HeartPieces;