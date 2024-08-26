import React, { useEffect, useState } from 'react'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Select,
} from '@chakra-ui/react'
import useFetchAntelopeData from '../hooks/useFetchAntelopeData'
import { Antelope } from '../models'

const AntelopeTable: React.FC = () => {
  const { antelopeData, error } = useFetchAntelopeData()
  const [filteredData, setFilteredData] = useState<Antelope[]>([])
  const [filterCriteria, setFilterCriteria] = useState({
    continent: '',
    horns: '',
    weight: '',
    height: '',
  })

  useEffect(() => {
    setFilteredData(antelopeData)
  }, [antelopeData, error])

  useEffect(() => {
    const filtered = antelopeData.filter((antelope) => {
      const matchesContinent = filterCriteria.continent
        ? antelope.continent === filterCriteria.continent
        : true
      const matchesHorns = filterCriteria.horns
        ? antelope.horns === filterCriteria.horns
        : true
      const matchesWeight = filterCriteria.weight
        ? antelope.weight.toString() === filterCriteria.weight
        : true
      const matchesHeight = filterCriteria.height
        ? antelope.height.toString() === filterCriteria.height
        : true

      return matchesContinent && matchesHorns && matchesWeight && matchesHeight
    })

    setFilteredData(filtered)
  }, [filterCriteria, antelopeData])

  const handleFilterChange = (
    key: keyof typeof filterCriteria,
    value: string
  ) => {
    setFilterCriteria({
      ...filterCriteria,
      [key]: value,
    })
  }

  const uniqueContinents = Array.from(
    new Set(antelopeData.map((antelope) => antelope.continent))
  )
  const uniqueHorns = Array.from(
    new Set(antelopeData.map((antelope) => antelope.horns))
  )
  const uniqueWeights = Array.from(
    new Set(antelopeData.map((antelope) => antelope.weight.toString()))
  ).sort((a, b) => parseFloat(a) - parseFloat(b))
  const uniqueHeights = Array.from(
    new Set(antelopeData.map((antelope) => antelope.height.toString()))
  ).sort((a, b) => parseFloat(a) - parseFloat(b))

  return (
    <Box p="4" bg="white" boxShadow="md" borderRadius="lg" overflowX="auto">
      <Box mb="4" display="flex" justifyContent="space-between" flexWrap="wrap">
        <Select
          placeholder="Filter by Continent"
          value={filterCriteria.continent}
          onChange={(e) => handleFilterChange('continent', e.target.value)}
          width="200px"
          mr="4"
          mb="2"
        >
          {uniqueContinents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </Select>

        <Select
          placeholder="Filter by Weight"
          value={filterCriteria.weight}
          onChange={(e) => handleFilterChange('weight', e.target.value)}
          width="200px"
          mr="4"
          mb="2"
        >
          {uniqueWeights.map((weight) => (
            <option key={weight} value={weight}>
              {weight} kg
            </option>
          ))}
        </Select>
        <Select
          placeholder="Filter by Height"
          value={filterCriteria.height}
          onChange={(e) => handleFilterChange('height', e.target.value)}
          width="200px"
          mb="2"
        >
          {uniqueHeights.map((height) => (
            <option key={height} value={height}>
              {height} cm
            </option>
          ))}
        </Select>
        <Select
          placeholder="Filter by Horns"
          value={filterCriteria.horns}
          onChange={(e) => handleFilterChange('horns', e.target.value)}
          width="200px"
          mr="4"
          mb="2"
        >
          {uniqueHorns.map((horns) => (
            <option key={horns} value={horns}>
              {horns}
            </option>
          ))}
        </Select>
      </Box>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Continent</Th>
              <Th>Weight (kg)</Th>
              <Th>Height (cm)</Th>
              <Th>Horns</Th>
              <Th>Picture</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((antelope) => (
              <Tr key={antelope.name}>
                <Td>{antelope.name}</Td>
                <Td>{antelope.continent}</Td>
                <Td>{antelope.weight}</Td>
                <Td>{antelope.height}</Td>
                <Td>{antelope.horns}</Td>
                <Td>
                  <Image
                    src={antelope.picture}
                    alt={antelope.name}
                    boxSize="100px"
                    objectFit="cover"
                    borderRadius="lg"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default AntelopeTable
