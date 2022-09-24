import {Center, HStack, Select, Text, Tooltip} from "@chakra-ui/react";

const ZeldaSelectBox = props => {

    const text = <Text as='span'>{props.label}</Text>

    const select = <Select value={props.value} variant='filled' onChange={props.onChange} size='sm' disabled={props.disabled}>
        {props.options.map( option => {
            return <option key={option.value} value={option.value}>{option.text}</option>
        })}
    </Select>;

    let selectbox;
    if(props.tooltip){
        selectbox = <Tooltip hasArrow label={props.tooltip}><HStack>`${text}${select}`</HStack></Tooltip>;
    } else {
        selectbox = <HStack>`${text}${select}`</HStack>;
    }
    return selectbox;
}

export default ZeldaSelectBox;

