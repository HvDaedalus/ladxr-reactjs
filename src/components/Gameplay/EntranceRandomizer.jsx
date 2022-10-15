import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

const options = [{value: 'DEFAULT', text: 'Default'},{value: 'SIMPLE', text:'Simple'},{value: 'ADVANCED', text:'Advanced'},{value: 'EXPERT', text:'Expert'},{value: 'INSANITY', text:'Insanity'}];

const EntranceRandomizer = props => {

    const randoCtx = useContext(RandoContext);
    const entranceRandomizerChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'entrance_randomizer', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>Randomizes where overworld entrances lead to.</Text>
        <Text>[Simple] single entrance caves that contain items are randomized</Text>
        <Text>[Advanced] Connector caves are also randomized</Text>
        <Text>[Expert] Caves/houses without items are also randomized</Text>
        <Text>[Insanity] A few very annoying entrances will be randomized as well.</Text>
        <Text>If random start location and/or dungeon shuffle is enabled, then these will be shuffled with all the entrances.</Text>
        <Text>Note, some entrances can lead into water, use the warp-to-home from the save&quit menu to escape this.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Entrance randomizer:</Text>} value={randoCtx.entrance_randomizer} options={options} tooltip={tooltip} onChange={entranceRandomizerChangeHandler}/>
    </StyledBox>
}

export const EntranceRandomizerTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('entrance_randomizer');
    }

    return <ZeldaTag label={`Entrances: ${options.filter(option => option.value === randoCtx.entrance_randomizer)[0].text}`} onClose={onCloseTagHandler}/>
}

export default EntranceRandomizer;