import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

const options = [{value: 'ALWAYS', text: 'Always'},
    {value: 'NEVER', text: 'Never'},
    {value: 'NORMAL', text: 'Normal'}];

const Stealing = props => {

    const randoCtx = useContext(RandoContext);
    const stealingChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'shop_stealing', value: event.target.value});

    }
    const tooltip = <Stack>
        <Text>Effects when you can steal from the shop. Stealing is bad and never in logic.</Text>
        <Text>[Normal] requires the sword before you can steal.</Text>
        <Text>[Always] you can always steal from the shop</Text>
        <Text>[Never] you can never steal from the shop.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Health Mode:</Text>} value={randoCtx.shop_stealing}
                        options={options} tooltip={tooltip} onChange={stealingChangeHandler}/>
    </StyledBox>
}

export const StealingTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('shop_stealing');
    }

    return <ZeldaTag label={`Stealing: ${options.filter(option => option.value === randoCtx.shop_stealing)[0].text}`} onClose={onCloseTagHandler}/>
}

export default Stealing;