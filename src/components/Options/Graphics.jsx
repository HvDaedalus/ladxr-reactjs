import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: 'AgesGirl.bin', text: 'AgesGirl'},
    {value: 'Bowwow.bin', text: 'Bowwow'},
    {value: 'Bunny.bin', text: 'Bunny'},
    {value: 'GrandmaUlrira.bin', text: 'GrandmaUlrira'},
    {value: 'Kirby.bin', text: 'Kirby'},
    {value: 'Luigi.bin', text: 'Luigi'},
    {value: 'Marin.bin', text: 'Marin'},
    {value: 'MarinAlpha.bin', text: 'MarinAlpha'},
    {value: 'Mario.bin', text: 'Mario'},
    {value: 'Martha.bin', text: 'Martha'},
    {value: 'Meme.bin', text: 'Meme'},
    {value: 'NESLink.bin', text: 'NESLink'},
    {value: 'Richard.bin', text: 'Richard'},
    {value: 'Rooster.bin', text: 'Rooster'},
    {value: 'Subrosian.bin', text: 'Subrosian'},
    {value: 'Tarin.bin', text: 'Tarin'},
    {value: 'custom', text: 'Custom...'}];

export const Graphics = props => {

    const randoCtx = useContext(RandoContext);

    const graphicsChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'graphics', value: event.target.value});
    }


    const tooltip = <Stack>
        <Text>Generally affects at least Link's sprite, but can alter any graphics in the game</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Graphics:</Text>} value={randoCtx.graphics}
                        options={options} tooltip={tooltip} onChange={graphicsChangeHandler}/>
    </StyledBox>
}

export const GraphicsTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('graphics');
    }

    return !randoCtx.isDefault('graphics') &&
        <ZeldaTag label={`Graphics: ${options.filter(option => option.value === randoCtx.graphics)[0].text}`}
                  onClose={onCloseTagHandler}/>
}