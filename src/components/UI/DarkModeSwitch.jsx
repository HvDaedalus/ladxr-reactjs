import {MoonIcon} from "@chakra-ui/icons";
import {Fragment, useState} from "react";
import {Switch, useColorMode} from "@chakra-ui/react";

const DarkModeSwitch = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return <Fragment><MoonIcon /> <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'}/></Fragment>
}

export default DarkModeSwitch;
