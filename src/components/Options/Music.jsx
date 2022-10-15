import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

const options = [{value: '', text: 'Disabled'},
    {value: 'random', text:'Random'},
    {value: 'off', text:'Disabled'}];

const Music = props => {

    const randoCtx = useContext(RandoContext);

    const linkColorChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'music', value: event.target.value });
    }

    const tooltip = <Stack>
        <Text>[Random] Randomizes overworld and dungeon music</Text>
        <Text>[Disable] no music in the whole game</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Music:</Text>} value={randoCtx.music} options={options} tooltip={tooltip} onChange={linkColorChangeHandler}/>
    </StyledBox>
}

export const MusicTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('music');
    }

    return <ZeldaTag label={`Music: ${options.filter(option => option.value === randoCtx.music)[0].text}`} onClose={onCloseTagHandler}/>
}

export default Music;