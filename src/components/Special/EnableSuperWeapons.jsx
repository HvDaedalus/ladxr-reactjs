import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const EnableSuperWeapons = props => {

    const randoCtx = useContext(RandoContext);

    const superWeaponsChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'enable_super_weapons', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>All items will be more powerful, faster, harder, bigger stronger. You name it.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Enable super weapons:</Text>} value={randoCtx.enable_super_weapons} options={options} tooltip={tooltip} onChange={superWeaponsChangeHandler}/>
    </StyledBox>
}

export default EnableSuperWeapons;