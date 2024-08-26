import {
  Box,
  Container,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Highlight,
} from '@chakra-ui/react'
import VisualizationApp from './components/VisualizationApp'
import AntelopeTable from './components/AntelopeTable'
import AntelopeView from './components/AntelopeView'

function App() {
  return (
    <>
      <Box
        as="header"
        bg="gray.100"
        color="white"
        py={3}
        px={6}
        display="flex"
        alignItems="center"
      >
        <Image src="../madkudu-logo.svg" alt="Logo" boxSize="100px" />
      </Box>
      <Container maxW="container.xl" py={10}>
        <Box mb={10} width="100%">
          <Box bg="white" p={4} borderRadius="lg" mb={6}>
            <Heading
              as="h1"
              size="4xl"
              mb={4}
              flex={3}
              fontFamily={'montserrat'}
              textAlign={'center'}
              fontWeight={'extrabold'}
              color={'navy'}
            >
              Antelope Data Dash
            </Heading>

            <Text
              textAlign={'center'}
              fontFamily={'montserrat'}
              fontSize={'lg'}
            >
              <Highlight
                query="Kudu"
                styles={{ px: '1', py: '1', bg: 'blue.100', rounded: 'md' }}
              >
                Because every Kudu needs to keep tabs on the
                competition—antelope data at your fingertips.
              </Highlight>
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          gap={6}
          width="100%"
        >
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <TabList>
              <Tab>Antelope View</Tab>
              <Tab>Antelope Data</Tab>
              <Tab>Charts</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box width="100%" bg="gray.200" p={4} borderRadius="lg" mb={10}>
                  <AntelopeView />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  flex="1"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={4}
                  bg="gray.50"
                  boxShadow="md"
                >
                  <Heading as="h2" size="lg" mb={4}>
                    Antelope Data
                  </Heading>
                  <AntelopeTable />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  flex="2"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={4}
                  bg="gray.50"
                  boxShadow="md"
                >
                  <VisualizationApp />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  )
}

export default App
