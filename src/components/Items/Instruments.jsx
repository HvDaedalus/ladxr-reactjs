import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];

const Instruments = props => {

    const randoCtx = useContext(RandoContext);
    const instrumentsChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'instruments', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Instruments are placed on random locations, dungeon goal will just contain a random item.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Randomize Instruments:</Text>} value={randoCtx.instruments} options={options} tooltip={tooltip} onChange={instrumentsChangeHandler}/>
    </StyledBox>
}

export const InstrumentsTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('instruments');
    }

    return <ZeldaTag label={`Instruments: ${options.filter(option => option.value === randoCtx.instruments)[0].text}`} onClose={onCloseTagHandler}/>
}

export default Instruments;