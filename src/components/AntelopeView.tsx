import React, { useState } from 'react'
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Stack,
  Highlight,
} from '@chakra-ui/react'
import useFetchAntelopeData from '../hooks/useFetchAntelopeData'

const AntelopeView: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  const { antelopeData } = useFetchAntelopeData()

  const handleFlip = (name: string) => {
    setFlippedCard(flippedCard === name ? null : name)
  }

  return (
    <Box p="6" bg="gray.100" minH="100vh">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="6">
        {antelopeData.map((antelope) => (
          <Box
            key={antelope.name}
            p="4"
            bg="white"
            boxShadow="md"
            borderRadius="lg"
            overflow="hidden"
            transform={
              flippedCard === antelope.name
                ? 'rotateY(180deg)'
                : 'rotateY(0deg)'
            }
            transition="transform 0.6s"
            cursor="pointer"
            onClick={() => handleFlip(antelope.name)}
            _hover={{ transform: 'scale(1.05)' }}
          >
            {flippedCard !== antelope.name ? (
              <Stack align="center">
                <Image
                  src={antelope.picture}
                  alt={antelope.name}
                  boxSize="150px"
                />
                <Text fontWeight="bold">{antelope.name}</Text>
                <Text>{antelope.continent}</Text>
              </Stack>
            ) : (
              <Stack align="center">
                <Text fontWeight="bold" fontSize="xl">
                  <Highlight
                    query={antelope.name}
                    styles={{ px: '1', py: '1', bg: 'blue.100', rounded: 'md' }}
                  >
                    {antelope.name}
                  </Highlight>
                </Text>
                <Text>Weight: {antelope.weight} kg</Text>
                <Text>Height: {antelope.height} cm</Text>
                <Text>Horns: {antelope.horns}</Text>
              </Stack>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default AntelopeView
