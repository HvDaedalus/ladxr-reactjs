import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'NORMAL', text: 'Normal'},{value: 'TRADE', text:'Trade'},{value: 'GIFT', text:'Gift'}];

const BoomerangTrade = props => {

    const randoCtx = useContext(RandoContext);

    const boomerangTradeChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'boomerang_trade', value: event.target.value });
    }

    const tooltip = <Stack>
        <Text>[Normal], requires magnifier to get the boomerang.</Text>
        <Text>[Trade], allows to trade an inventory item for a random other inventory item boomerang is shuffled.</Text>
        <Text>[Gift], You get a random gift of any item, and the boomerang is shuffled.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Boomerang trade:</Text>} value={randoCtx.boomerang_trade} options={options} tooltip={tooltip} onChange={boomerangTradeChangeHandler}/>
    </StyledBox>
}

export const BoomerangTradeTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('boomerang_trade');
    }

    return <ZeldaTag label={`Boomerang trade: ${options.filter(option => option.value === randoCtx.boomerang_trade)[0].text}`} onClose={onCloseTagHandler}/>
}

export default BoomerangTrade;