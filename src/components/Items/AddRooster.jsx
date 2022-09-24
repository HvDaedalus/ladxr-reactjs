import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const AddRooster = props => {

    const randoCtx = useContext(RandoContext);

    const addRoosterChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'add_rooster', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Adds the rooster to the item pool. Without this option, the rooster spot is still a check giving an item. But you will never find the rooster. Any rooster spot is accessible without rooster by other means.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Add the rooster:</Text>} value={randoCtx.add_rooster} options={options} tooltip={tooltip} onChange={addRoosterChangeHandler}/>
    </StyledBox>
}

export default AddRooster;