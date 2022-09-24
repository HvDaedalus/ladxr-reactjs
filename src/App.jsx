

import Seed from "./components/Main/Seed.jsx";
import {
    Accordion,
    AccordionButton, AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box, Center,
    ChakraProvider,
    HStack, SimpleGrid,
    Stack, Text, Wrap, WrapItem
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

function App() {

  return (
      <ChakraProvider>
          <Center mt={5}>
              <StyledBox maxWidth='1200px'>
                  <Generation/>
                  <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                          <AccordionButton>
                              <Box flex='1' textAlign='left' fontSize={20} fontWeight={'bold'}>
                                  Main
                              </Box>
                              <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                              <SimpleGrid columns={3} spacing={5} minChildWidth={365}>
                                  <Seed/>
                                  <Logic/>
                                  <Accessibility/>
                                  <RaceMode/>
                                  <SpoilerFormat/>
                              </SimpleGrid>
                          </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionButton>
                              <Box flex='1' textAlign='left' fontSize={20} fontWeight={'bold'}>
                                  Items
                              </Box>
                              <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
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
                          </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionButton>
                              <Box flex='1' textAlign='left' fontSize={20} fontWeight={'bold'}>
                                  Gameplay
                              </Box>
                              <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
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
                          </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionButton>
                              <Box flex='1' textAlign='left' fontSize={20} fontWeight={'bold'}>
                                  Special
                              </Box>
                              <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                              <SimpleGrid columns={3} spacing={5} minChildWidth={365}>
                                  <GoodBoyMode/>
                                  <Overworld/>
                                  <OwlStatues/>
                                  <EnableSuperWeapons/>
                              </SimpleGrid>
                          </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionButton>
                              <Box flex='1' textAlign='left' fontSize={20} fontWeight={'bold'}>
                                  User options
                              </Box>
                              <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                              <SimpleGrid columns={3} spacing={5} minChildWidth={365}>
                                  <Text>Todo</Text>
                              </SimpleGrid>
                          </AccordionPanel>
                      </AccordionItem>
                  </Accordion>
              </StyledBox>
          </Center>
      </ChakraProvider>
  )
}

export default App
