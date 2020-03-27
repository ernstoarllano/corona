import {
  ResponsiveContainer,
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts'
import styled from 'styled-components'

const ChartContainer = styled.div`
  margin-top: 30px;
`

const Chart = ({ data }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer minHeight={500}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="date" />
          <Line type="monotone" dataKey="cases" stroke="#4A5568" />
          <Line type="monotone" dataKey="deaths" stroke="#E53E3E" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart
