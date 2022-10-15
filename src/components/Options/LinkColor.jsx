import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: '-1', text: 'Normal'},
    {value: '0', text:'Green'},
    {value: '1', text:'Yellow'},
    {value: '2', text:'Red'},
    {value: '3', text:'Blue'},
    {value: '4', text:'?? A'},
    {value: '5', text:'?? B'},
    {value: '6', text:'?? C'},
    {value: '7', text:'?? D'}];

const LinkColor = props => {

    const randoCtx = useContext(RandoContext);
    const linkColorChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'link_color', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Allows you to force a certain color on link.</Text>
        <Text>[Normal] color of link depends on the tunic.</Text>
        <Text>[Green/Yellow/Red</Text>
        <Text>Blue] forces link into one of these colors.</Text>
        <Text>[?? A/B/C/D] colors of link are usually inverted and color depends on the area you are in.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Link Color:</Text>} value={randoCtx.link_color} options={options} tooltip={tooltip} onChange={linkColorChangeHandler}/>
    </StyledBox>
}

export const LinkColorTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('link_color');
    }

    return <ZeldaTag label={`Link's color: ${options.filter(option => option.value === randoCtx.link_color)[0].text}`} onClose={onCloseTagHandler}/>
}

export default LinkColor;