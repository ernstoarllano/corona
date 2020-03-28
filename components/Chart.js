import styled from 'styled-components'
import useArchives from '../hooks/useArchives'
import Loading from './Loading'
import Error from './Error'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  Legend
} from 'recharts'

const ChartContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`

const Chart = ({ country }) => {
  const endpoint = country
    ? `https://corona.lmao.ninja/v2/historical/${country}`
    : 'https://corona.lmao.ninja/v2/historical'

  const { archives, loading, error } = useArchives(endpoint)

  const formatCases = number => {
    return number.toLocaleString()
  }

  const formateDate = date => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short'
    })
  }

  const formatTooltip = (value, name) => {
    return [
      value.toLocaleString(),
      name.charAt(0).toUpperCase() + name.slice(1)
    ]
  }

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <ChartContainer>
      <ResponsiveContainer minHeight={500}>
        <BarChart data={archives} barSize={3}>
          <XAxis
            dataKey="date"
            minTickGap={15}
            tickFormatter={formateDate}
            tickMargin={15}
            tickLine={false}
          />
          <YAxis minTickGap={30} tickFormatter={formatCases} tickLine={false} />
          <Tooltip formatter={(value, name) => formatTooltip(value, name)} />
          <Legend verticalAlign="top" />
          <Bar dataKey="cases" fill="#f9345e" />
          <Bar dataKey="deaths" fill="#6236ff" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart
