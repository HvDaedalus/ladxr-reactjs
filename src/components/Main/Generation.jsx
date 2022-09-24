import {Button, HStack} from "@chakra-ui/react";


const Generation = props => {
    return (
        <HStack margin={3}>
            <Button width='100%'>Select input ROM</Button>
            <Button disabled={true} width='100%'>Randomize!</Button>
        </HStack>
    );
}

export default Generation;