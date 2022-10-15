import ZeldaSelectBox from "../UI/ZeldaSelectBox.jsx";
import StyledBox from "../UI/StyledBox.jsx";
import {useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ZeldaTag from "../UI/ZeldaTag.jsx";

export const options = [{value: '8_INSTRUMENTS', text: '8 instruments'},
    {value: '7_INSTRUMENTS', text: '7 instruments'},
    {value: '6_INSTRUMENTS', text: '6 instruments'},
    {value: '5_INSTRUMENTS', text: '5 instruments'},
    {value: '4_INSTRUMENTS', text: '4 instruments'},
    {value: '3_INSTRUMENTS', text: '3 instruments'},
    {value: '2_INSTRUMENTS', text: '2 instruments'},
    {value: '1_INSTRUMENTS', text: '1 instruments'},
    {value: '0_INSTRUMENTS', text: 'No instruments'},
    {value: 'EGG_OPEN', text: 'Egg already open'},
    {value: 'RANDOM_INSTRUMETNS', text: 'Random instrument count'},
    {value: 'RANDOM_SHORT_GAME', text: 'Random short game (0-4)'},
    {value: 'RANDOM_LONG_GAME', text: 'Random long game (5-8)'},
    {value: 'SEASHELL_HUNT', text: 'Seashell hunt (20)'},
    {value: 'BINGO', text: 'Bingo!'},
    {value: 'BLACKOUTBINGO', text: 'Bingo-25!'}];

const Goal = props => {

    const randoCtx = useContext(RandoContext);
    const goalChangeHandler = (event) => {
        randoCtx.updateSetting({name: 'goal', value: event.target.value});

    }
    const tooltip = <Stack>
        <Text>Changes the goal of the game.</Text>
        <Text>[1-8 instruments], number of instruments required to open the egg.</Text>
        <Text>[No instruments] open the egg without instruments, still requires the ocarina with the balled of the windfish</Text>
        <Text>[Egg already open] the egg is already open, just head for it once you have the items needed to defeat the boss.</Text>
        <Text>[Randomized instrument count] random number of instruments required to open the egg, between 0 and 8.</Text>
        <Text>[Random short/long game] random number of instruments required to open the egg, chosen between 0-4 and 5-8 respectively.</Text>
        <Text>[Seashell hunt] egg will open once you collected 20 seashells. Instruments are replaced by seashells and shuffled.</Text>
        <Text>[Bingo] Generate a 5x5 bingo board with various goals. Complete one row/column or diagonal to win![Bingo-25] Bingo, but need to fill the whole bingo card to win!</Text>
    </Stack>


    return <StyledBox>
        <ZeldaSelectBox label={<Text whiteSpace='nowrap'>Goal:</Text>} value={randoCtx.goal}
                        options={options} tooltip={tooltip} onChange={goalChangeHandler}/>
    </StyledBox>
}

export const GoalTag = props => {
    const randoCtx = useContext(RandoContext);

    const onCloseTagHandler = () => {
        randoCtx.resetToDefault('goal');
    }

    return <ZeldaTag label={`Goal: ${options.filter(option => option.value === randoCtx.goal)[0].text}`} onClose={onCloseTagHandler}/>
}

export default Goal;