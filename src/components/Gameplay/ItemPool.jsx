import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const ItemPool = props => {

    const randoCtx = useContext(RandoContext);

    const itemPoolChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'item_pool', value: event.target.value});
    }

    const options = [{value: 'NORMAL', text: 'Normal'},
        {value: 'CASUAL', text: 'Casual'},
        {value: 'PAIN', text: 'Path of Pain'},
        {value: 'MORE_KEYS', text: 'More keys'}];
    const tooltip = <Stack>
        <Text>Effects which items are shuffled.</Text>
        <Text>[Casual] places more inventory and key items so the seed is easier.</Text>
        <Text>[More keys] adds more small keys and extra nightmare keys so dungeons are easier.</Text>
        <Text>[Path of pain]... just find out yourself.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Item pool:</Text>} value={randoCtx.item_pool}
                        options={options} tooltip={tooltip} onChange={itemPoolChangeHandler}/>
    </StyledBox>
}

export default ItemPool;