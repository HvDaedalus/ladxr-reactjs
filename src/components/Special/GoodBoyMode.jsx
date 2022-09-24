import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const GoodBoyMode = props => {

    const randoCtx = useContext(RandoContext);

    const goodBoyChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'good_boy_mode', value: event.target.value });
    }

    const options = [{value: 'DISABLED', text: 'Disabled'},{value: 'ENABLED', text:'Enabled'},{value: 'ENABLED_SWORDLESS', text:'Enabled (swordless)'}];
    const tooltip = <Stack>
        <Text>Allows BowWow to be taken into any area, damage bosses and more enemies. If enabled you always start with bowwow. Swordless option removes the swords from the game and requires you to beat the game without a sword and just bowwow.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Good Boy Mode:</Text>} value={randoCtx.good_boy_mode} options={options} tooltip={tooltip} onChange={goodBoyChangeHandler}/>
    </StyledBox>
}

export default GoodBoyMode;