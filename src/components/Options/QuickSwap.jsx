import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'none', text: 'Disabled'},
    {value: 'a', text:'Swap A button'},
    {value: 'b', text:'Swap B button'}];

const QuickSwap = props => {

    const randoCtx = useContext(RandoContext);

    const quickSwapChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'quickswap', value: event.target.value });
    }

    const tooltip = <Stack>
        <Text>Adds that the select button swaps with either A or B. The item is swapped with the top inventory slot. The map is not available when quickswap is enabled.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Quickswap:</Text>} value={randoCtx.quickswap} options={options} tooltip={tooltip} onChange={quickSwapChangeHandler}/>
    </StyledBox>
}

export const QuickSwapTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('quickswap');
    }

    return <ZeldaTag label={`Quickswap: ${options.filter(option => option.value === randoCtx.quickswap)[0].text}`} onClose={onCloseTagHandler}/>
}

export default QuickSwap;