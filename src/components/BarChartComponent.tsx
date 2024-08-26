import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Antelope } from '../models'
import { Heading, Text } from '@chakra-ui/react'

type BarChartComponentProps = {
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

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const { name, weight, continent } = payload[0].payload
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
        <p>Weight: {weight}</p>
        <p>Continent: {continent}</p>
      </div>
    )
  }

  return null
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
  const transformedData = data
    .map((antelope) => ({
      name: antelope.name,
      weight: antelope.weight,
      continent: antelope.continent,
    }))
    .sort((a, b) => b.weight - a.weight)

  return (
    <>
      <Heading mb={6} textAlign={'center'}>
        Weight Comparison of Various Antelope Species
      </Heading>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={transformedData}>
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={80}
            fontSize={12}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="weight" fill="#3182ce" />
        </BarChart>
      </ResponsiveContainer>
      <Text fontSize={'x-small'}>
        This bar chart provides a visual comparison of the weight of different
        antelope species. Each bar represents an individual species, with the
        height of the bar corresponding to its average weight in kilograms. The
        chart also includes a custom tooltip feature that displays additional
        information about the species, such as its continent of origin, when you
        hover over a bar. The X-axis lists the names of the antelope species,
        while the Y-axis indicates their weight. The chart offers an insightful
        look into the diversity in size among antelope species.
      </Text>
    </>
  )
}

export default BarChartComponent
