import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  PieLabelRenderProps,
} from 'recharts'
import { Antelope } from '../models'
import { Heading, Text } from '@chakra-ui/react'

type PieChartComponentProps = {
  data: Antelope[]
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  const aggregatedData = data.reduce(
    (acc: { [key: string]: number }, antelope) => {
      const continent = antelope.continent
      if (!acc[continent]) {
        acc[continent] = 0
      }
      acc[continent] += 1
      return acc
    },
    {}
  )

  const transformedData = Object.keys(aggregatedData).map((key) => ({
    name: key,
    value: aggregatedData[key],
  }))

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EFF']

  return (
    <>
      <Heading mb={6} textAlign={'center'}>
        Geographical Distribution of Antelope Species
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={transformedData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={(entry: PieLabelRenderProps) => entry.name}
          >
            {transformedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                name={entry.name}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <Text fontSize={'x-small'}>
        This pie chart illustrates the distribution of antelope species across
        various continents. Each segment of the pie represents a different
        continent, with the size of the segment indicating the proportion of
        antelope species found there. The chart visually breaks down the global
        presence of antelope species, highlighting which continents have the
        highest and lowest diversity. Hovering over each segment reveals a
        tooltip with the exact number of species represented. This chart
        provides a clear and colorful representation of how antelope species are
        distributed around the world.
      </Text>
    </>
  )
}

export default PieChartComponent
