import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const RemoveFlashingLights = props => {

    const randoCtx = useContext(RandoContext);

    const removeFlashingLightsChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'remove_flashing_lights', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Remove the flashing light effects from Mamu, shopkeeper and MadBatter. Useful for capture cards and people that are sensitive for these things.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Remove flashing lights:</Text>} value={randoCtx.remove_flashing_lights} options={options} tooltip={tooltip} onChange={removeFlashingLightsChangeHandler}/>
    </StyledBox>
}

export default RemoveFlashingLights;