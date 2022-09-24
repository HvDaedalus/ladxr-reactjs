import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";

const TradeQuest = props => {

    const randoCtx = useContext(RandoContext);

    const tradeQuestChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'trade_quest', value: event.target.value });
    }

    const options = [{value: false, text: 'No'},{value: true, text:'Yes'}];
    const tooltip = <Stack>
        <Text>Trade quest items are randomized, each NPC takes its normal trade quest item, but gives a random item</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Randomize trade quest:</Text>} value={randoCtx.trade_quest} options={options} tooltip={tooltip} onChange={tradeQuestChangeHandler}/>
    </StyledBox>
}

export default TradeQuest;