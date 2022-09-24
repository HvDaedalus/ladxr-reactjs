import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const WitchItem = props => {

    const randoCtx = useContext(RandoContext);

    const witchItemChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'witch_item', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Adds both the toadstool and the reward for giving the toadstool to the witch to the item pool</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Randomize item given by the witch:</Text>} value={randoCtx.witch_item} options={options} tooltip={tooltip} onChange={witchItemChangeHandler}/>
    </StyledBox>
}

export default WitchItem;