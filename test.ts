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
import { Antelope } from '../models'

const AntelopeTable: React.FC = () => {
  const [antelopeData, setAntelopeData] = useState<Antelope[]>([])
  const [filterCriteria, setFilterCriteria] = useState({
    continent: '',
    horns: '',
    weight: '',
    height: '',
  })

  useEffect(() => {
    const query = new URLSearchParams(filterCriteria).toString()
    fetch(`/api/antelopes?${query}`)  // Fetch filtered data
      .then((response) => response.json())
      .then((data) => setAntelopeData(data))
      .catch((error) => console.error('Error fetching filtered data: ', error))
  }, [filterCriteria])

  const handleFilterChange = (
    key: keyof typeof filterCriteria,
    value: string
  ) => {
    setFilterCriteria({
      ...filterCriteria,
      [key]: value,
    })
  }

  // Generating unique filter options and rendering them remains the same

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
          {/* Render unique continents */}
        </Select>

        {/* Other filter Selects */}

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
            {antelopeData.map((antelope) => (
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
