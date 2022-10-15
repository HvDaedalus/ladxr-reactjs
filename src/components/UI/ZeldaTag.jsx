import {Tag, TagCloseButton, TagLabel} from "@chakra-ui/react";

const ZeldaTag = (props) => {
    return <Tag size='md' borderRadius='full' colorScheme={props.color || 'green'}><TagLabel>{props.label}</TagLabel>
        <TagCloseButton onClick={props.onClose}/></Tag>
}

export default ZeldaTag;