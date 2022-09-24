import {Fragment, useContext} from "react";
import RandoContext from "../../store/rando-context.jsx";
import {Editable, EditableInput, EditablePreview, HStack, Stack, Text, Tooltip} from "@chakra-ui/react";
import StyledBox from "../UI/StyledBox.jsx";

const Seed = props => {
    const randoCtx = useContext(RandoContext);

    const seedSubmitHandler = (value) => {
        randoCtx.updateSetting({name: 'seed', value: value});
    }

    return (<StyledBox>

        <Tooltip label={<Stack><Text>For multiple people to generate the same randomization result, enter the generated seed number here.</Text>
                <Text>Note, not all strings are valid seeds.</Text></Stack>} hasArrow>
                <HStack>
                <Text>Seed:</Text>
                <Editable defaultValue='' placeholder='Leave empty for random seed' onSubmit={seedSubmitHandler} display='inline' width='100%' size='sm'>
                    <EditablePreview color='#9A9A9A' border='1px solid' width='100%' textAlign='center'/>
                    <EditableInput value={randoCtx.seed} width='100%' textAlign='center'/>
                </Editable>
                </HStack>
            </Tooltip>
    </StyledBox>);
}

export default Seed;