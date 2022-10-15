

import Seed from "./components/Main/Seed.jsx";
import {
    Accordion,
    AccordionButton, AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box, Center,
    ChakraProvider, Container, Flex, Grid,
    HStack, Icon, SimpleGrid, Spacer,
    Stack, Switch, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Wrap, WrapItem
} from "@chakra-ui/react";
import Generation from "./components/Main/Generation.jsx";
import Logic from "./components/Main/Logic.jsx";
import Accessibility from "./components/Main/Accessibility.jsx";
import RaceMode from "./components/Main/RaceMode.jsx";
import SpoilerFormat from "./components/Main/SpoilerFormat.jsx";
import HeartPieces from "./components/Items/HeartPieces.jsx";
import HiddenSeaShells from "./components/Items/HiddenSeaShells.jsx";
import HeartContainers from "./components/Items/HeartContainers.jsx";
import Instruments from "./components/Items/Instruments.jsx";
import TradeQuest from "./components/Items/TradeQuest.jsx";
import WitchItem from "./components/Items/WitchItem.jsx";
import AddRooster from "./components/Items/AddRooster.jsx";
import BoomerangTrade from "./components/Items/BoomerangTrade.jsx";
import StyledBox from "./components/UI/StyledBox.jsx";
import DungeonItems from "./components/Gameplay/DungeonItems.jsx";
import RandomStartLocation from "./components/Gameplay/RandomStartLocation.jsx";
import DungeonShuffle from "./components/Gameplay/DungeonShuffle.jsx";
import EntranceRandomizer from "./components/Gameplay/EntranceRandomizer.jsx";
import BossShuffle from "./components/Gameplay/BossShuffle.jsx";
import MiniBossShuffle from "./components/Gameplay/MiniBossShuffle.jsx";
import Goal from "./components/Gameplay/Goal.jsx";
import ItemPool from "./components/Gameplay/ItemPool.jsx";
import HealthMode from "./components/Gameplay/HealthMode.jsx";
import HardMode from "./components/Gameplay/HardMode.jsx";
import Stealing from "./components/Gameplay/Stealing.jsx";
import GoodBoyMode from "./components/Special/GoodBoyMode.jsx";
import Overworld from "./components/Special/Overworld.jsx";
import OwlStatues from "./components/Special/OwlStatues.jsx";
import EnableSuperWeapons from "./components/Special/EnableSuperWeapons.jsx";
import TagBar from "./components/Main/TagBar.jsx";
import {Graphics} from "./components/Options/Graphics";
import LinkColor from "./components/Options/LinkColor.jsx";
import LowHpBeeps from "./components/Options/LowHpBeeps.jsx";
import Music from "./components/Options/Music.jsx";
import QuickSwap from "./components/Options/QuickSwap.jsx";
import RemoveFlashingLights from "./components/Options/RemoveFlashingLights.jsx";
import ShowNagMessages from "./components/Options/ShowNagMessages.jsx";
import TextMode from "./components/Options/TextMode.jsx";
import DarkModeSwitch from "./components/UI/DarkModeSwitch.jsx";

function App() {

  return (
      <ChakraProvider>
          <Center mt={5}>
              <Box maxWidth='1200px' width='100%' align='right'>
                  <Spacer/>
                  <DarkModeSwitch/>
              </Box>
          </Center>
          <Center mt={5}>
              <StyledBox maxWidth='1200px'>
                  <Generation/>
                  <TagBar/>
                  <Tabs isFitted variant='enclosed' m={3}>
                      <TabList mb='1em'>
                          <Tab>Main</Tab>
                          <Tab>Items</Tab>
                          <Tab>Gameplay</Tab>
                          <Tab>Special</Tab>
                          <Tab>User options</Tab>
                      </TabList>
                      <TabPanels>
                          <TabPanel>
                              <SimpleGrid columns={3} spacing={5} minChildWidth={365}>
                                  <Seed/>
                                  <Logic/>
                                  <Accessibility/>
                                  <RaceMode/>
                                  <SpoilerFormat/>
                              </SimpleGrid>
                          </TabPanel>
                          <TabPanel>
                              <SimpleGrid columns={3} spacing={5} minChildWidth={365}>
                                  <HeartPieces/>
                                  <HiddenSeaShells/>
                                  <HeartContainers/>
                                  <Instruments/>
                                  <TradeQuest/>
                                  <WitchItem/>
                                  <AddRooster/>
                                  <BoomerangTrade/>
                              </SimpleGrid>
                          </TabPanel>
                          <TabPanel>
                              <SimpleGrid columns={3} spacing={5} minChildWidth={365}>
                                  <DungeonItems/>
                                  <RandomStartLocation/>
                                  <DungeonShuffle/>
                                  <EntranceRandomizer/>
                                  <BossShuffle/>
                                  <MiniBossShuffle/>
                                  <Goal/>
                                  <ItemPool/>
                                  <HealthMode/>
                                  <HardMode/>
                                  <Stealing/>
                              </SimpleGrid>
                          </TabPanel>
                          <TabPanel>
                              <SimpleGrid columns={3} spacing={5} minChildWidth={365}>
                                  <GoodBoyMode/>
                                  <Overworld/>
                                  <OwlStatues/>
                                  <EnableSuperWeapons/>
                              </SimpleGrid>
                          </TabPanel>
                          <TabPanel>
                              <SimpleGrid columns={3} spacing={5} minChildWidth={365}>
                                  <QuickSwap/>
                                  <TextMode/>
                                  <LowHpBeeps/>
                                  <RemoveFlashingLights/>
                                  <ShowNagMessages/>
                                  <Graphics/>
                                  <LinkColor/>
                                  <Music/>
                              </SimpleGrid>
                          </TabPanel>
                      </TabPanels>
                  </Tabs>
              </StyledBox>

          </Center>
      </ChakraProvider>
  )
}

export default App
