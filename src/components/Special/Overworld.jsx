import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const Overworld = props => {

    const randoCtx = useContext(RandoContext);

    const overworldChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'overworld', value: event.target.value});
    }

    const options = [{value: 'NEVER', text: 'Never'},
        {value: 'DUNGEON_DIVE', text: 'Dungeon dive'},
        {value: 'NO_DUNGEONS', text: 'No dungeons'}];
    const tooltip = <Stack>
        <Text>[Dungeon Dive] Create a different overworld where all the dungeons are directly accessible and almost no chests are located in the overworld.</Text>
        <Text>[No dungeons] All dungeons only consist of a boss fight and a instrument reward. Rest of the dungeon is removed.</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Overworld:</Text>} value={randoCtx.overworld}
                        options={options} tooltip={tooltip} onChange={overworldChangeHandler}/>
    </StyledBox>
}

export default Overworld;