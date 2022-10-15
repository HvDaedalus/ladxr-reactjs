import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];

const AddRooster = props => {

    const randoCtx = useContext(RandoContext);

    const addRoosterChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'add_rooster', value: event.target.value });
    }
    const tooltip = <Stack>
        <Text>Adds the rooster to the item pool. Without this option, the rooster spot is still a check giving an item. But you will never find the rooster. Any rooster spot is accessible without rooster by other means.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Add the rooster:</Text>} value={randoCtx.add_rooster} options={options} tooltip={tooltip} onChange={addRoosterChangeHandler}/>
    </StyledBox>
}

export const AddRoosterTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('add_rooster');
    }

    return <ZeldaTag label={`Add the rooster: ${options.filter(option => option.value === randoCtx.add_rooster)[0].text}`} onClose={onCloseTagHandler}/>
}

export default AddRooster;