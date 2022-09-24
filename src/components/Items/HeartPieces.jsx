import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const HeartPieces = props => {

    const randoCtx = useContext(RandoContext);

    const heartPiecesChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'heart_pieces', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Includes heart pieces in the item pool</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Randomize heart pieces:</Text>} value={randoCtx.heart_pieces} options={options} tooltip={tooltip} onChange={heartPiecesChangeHandler}/>
    </StyledBox>
}

export default HeartPieces;