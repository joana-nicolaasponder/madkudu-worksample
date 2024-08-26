import React from 'react'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Antelope } from '../models'
import { Heading, Text } from '@chakra-ui/react'

type ScatterPlotComponentProps = {
  data: Antelope[]
}

type CustomTooltipProps = {
  active?: boolean
  payload?: {
    payload: {
      name: string
      weight: number
      height: number
      continent: string
    }
  }[]
}


const CustomTooltip = ({ active, payload}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const { name, weight, height, continent } = payload[0].payload
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: '#fff',
          padding: '10px',
          border: '1px solid #ccc',
        }}
      >
        <p className="label">
          <strong>{name}</strong>
        </p>
        <p>Weight: {weight} kg</p>
        <p>Height: {height} cm</p>
        <p>Continent: {continent}</p>
      </div>
    )
  }

  return null
}

const ScatterPlotComponent: React.FC<ScatterPlotComponentProps> = ({
  data,
}) => {
  const transformedData = data.map((antelope) => ({
    name: antelope.name,
    weight: antelope.weight,
    height: antelope.height,
    continent: antelope.continent, 
  }))

  return (
    <>
      <Heading mb={6} textAlign={'center'}>
        Correlation Between Weight and Height of Antelope Species
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <XAxis type="number" dataKey="weight" name="Weight" unit="kg" />
          <YAxis type="number" dataKey="height" name="Height" unit="cm" />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ strokeDasharray: '3 3' }}
          />
          <Scatter name="Antelopes" data={transformedData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      <Text fontSize={'x-small'}>
        This scatterplot chart explores the relationship between the weight and
        height of various antelope species. Each point on the chart represents
        an individual species, plotted based on its average weight (in
        kilograms) on the X-axis and its average height (in centimeters) on the
        Y-axis. The chart helps visualize how the size metrics of antelopes vary
        across species, potentially revealing trends or clusters. Hovering over
        a point displays additional details about the species, including its
        name and the continent it is native to. This chart provides an
        insightful look into the physical characteristics of antelopes.
      </Text>
    </>
  )
}

export default ScatterPlotComponent
