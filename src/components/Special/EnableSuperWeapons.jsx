import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];

const EnableSuperWeapons = props => {

    const randoCtx = useContext(RandoContext);
    const superWeaponsChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'enable_super_weapons', value: event.target.value });

    }
    const tooltip = <Stack>
        <Text>All items will be more powerful, faster, harder, bigger stronger. You name it.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Enable super weapons:</Text>} value={randoCtx.enable_super_weapons} options={options} tooltip={tooltip} onChange={superWeaponsChangeHandler}/>
    </StyledBox>
}

export const EnableSuperWeaponsTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('enable_super_weapons');
    }

    return <ZeldaTag label={`Super weapons: ${options.filter(option => option.value === randoCtx.enable_super_weapons)[0].text}`} onClose={onCloseTagHandler}/>
}

export default EnableSuperWeapons;