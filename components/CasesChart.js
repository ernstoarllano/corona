import styled from 'styled-components'
import useArchives from '../hooks/useArchives'
import Loading from './Loading'
import Error from './Error'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

const ChartContainer = styled.div`
  padding: 30px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
`

const CasesChart = ({ country }) => {
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
      <h4>Total Cases</h4>
      <ResponsiveContainer height={200}>
        <AreaChart data={archives} barSize={3}>
          <defs>
            <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f9345e" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f9345e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            axisLine={false}
            dataKey="date"
            minTickGap={15}
            tickFormatter={formateDate}
            tickMargin={15}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            minTickGap={15}
            tickFormatter={formatCases}
            tickLine={false}
          />
          <CartesianGrid
            vertical={false}
            strokeDasharray={4}
            strokeOpacity={0.5}
          />
          <Tooltip
            formatter={(value, name) => formatTooltip(value, name)}
            contentStyle={{
              border: 0,
              boxShadow:
                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            }}
          />
          <Area
            type="monotone"
            dataKey="cases"
            stroke="#f9345e"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorCases)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default CasesChart
