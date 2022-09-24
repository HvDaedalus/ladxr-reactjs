import {Box} from "@chakra-ui/react";

const StyledBox = props => {
    return <Box boxShadow='md' rounded='md' padding={3} width='100%' maxWidth={props.maxWidth !== undefined ? props.maxWidth : ''} minHeight={58} border='1px solid #9F9F9F'>
        {props.children}
    </Box>
}

export default StyledBox;