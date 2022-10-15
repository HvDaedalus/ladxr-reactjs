import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];

const WitchItem = props => {

    const randoCtx = useContext(RandoContext);
    const witchItemChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'witch_item', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Adds both the toadstool and the reward for giving the toadstool to the witch to the item pool</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Randomize item given by the witch:</Text>} value={randoCtx.witch_item} options={options} tooltip={tooltip} onChange={witchItemChangeHandler}/>
    </StyledBox>
}

export const WitchItemTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('witch_item');
    }

    return <ZeldaTag label={`Witch Item: ${options.filter(option => option.value === randoCtx.witch_item)[0].text}`} onClose={onCloseTagHandler}/>
}

export default WitchItem;