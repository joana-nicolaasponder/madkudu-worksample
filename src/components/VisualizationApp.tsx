import React, { useState } from 'react'
import { Box, Select, Text } from '@chakra-ui/react'

import BarChartComponent from './BarChartComponent'
import PieChartComponent from './PieChartComponent'
import ScatterPlotComponent from './ScatterPlotComponent'

import { Antelope } from '../models'
type VisualizationAppProps = {
  data: Antelope[]
}
const VisualizationApp: React.FC<VisualizationAppProps> = ({ data }) => {
  const [chartType, setChartType] = useState<string>('bar')

  // const { antelopeData } = useFetchAntelopeData()

  const handleChartTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setChartType(event.target.value)
  }

  return (
    <Box p="4" bg="white" boxShadow="md" borderRadius="lg">
      <Text fontSize="xl" mb="4" textAlign="center">
        Choose Visualization Type
      </Text>
      <Select onChange={handleChartTypeChange} mb="4" value={chartType}>
        <option value="bar">Weight Comparison</option>
        <option value="pie">Geographical Distribution</option>
        <option value="scatter">Correlation Between Weight and Height</option>
      </Select>
      {chartType === 'bar' && <BarChartComponent data={data} />}
      {chartType === 'pie' && <PieChartComponent data={data} />}
      {chartType === 'scatter' && <ScatterPlotComponent data={data} />}
    </Box>
  )
}

export default VisualizationApp
