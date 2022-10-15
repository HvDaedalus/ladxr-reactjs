import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

const options = [{value: 'NEVER', text: 'Never'},
    {value: 'DUNGEONS', text: 'In dungeons'},
    {value: 'OVERWORLD', text: 'On the overworld'},
    {value: 'BOTH', text: 'Dungeons and Overworld'}];

const OwlStatues = props => {

    const randoCtx = useContext(RandoContext);
    const owlStatuesChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'owl_statues', value: event.target.value});

    }
    const tooltip = <Stack>
        <Text>Replaces the hints from owl statues with additional randomized items</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Owl statues:</Text>} value={randoCtx.owl_statues}
                        options={options} tooltip={tooltip} onChange={owlStatuesChangeHandler}/>
    </StyledBox>
}

export const OwlStatuesTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('owl_statues');
    }

    return <ZeldaTag label={`Owl statues: ${options.filter(option => option.value === randoCtx.owl_statues)[0].text}`} onClose={onCloseTagHandler}/>
}

export default OwlStatues;