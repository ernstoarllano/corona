import styled from 'styled-components'
import useStates from '../../hooks/useStates'
import Loading from '../Global/Loading'
import Error from '../Global/Error'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const StatsContainer = styled.div`
  margin-top: 30px;
  padding: 30px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
`

const StatesChart = ({ country }) => {
  const { states, loading, error } = useStates()

  const formatCases = number => {
    return number.toLocaleString()
  }

  const formateStates = state => {
    const states = {
      abbreviations: {
        'Arizona': 'AZ',
        'Alabama': 'AL',
        'Alaska': 'AK',
        'Arkansas': 'AR',
        'California': 'CA',
        'Colorado': 'CO',
        'Connecticut': 'CT',
        'Delaware': 'DE',
        'Florida': 'FL',
        'Georgia': 'GA',
        'Hawaii': 'HI',
        'Idaho': 'ID',
        'Illinois': 'IL',
        'Indiana': 'ID',
        'Iowa': 'IA',
        'Kansas': 'KS',
        'Kentucky': 'KY',
        'Louisiana': 'LA',
        'Maine': 'ME',
        'Maryland': 'MD',
        'Massachusetts': 'MA',
        'Michigan': 'MI',
        'Minnesota': 'MN',
        'Mississippi': 'MS',
        'Missouri': 'MO',
        'Montana': 'MT',
        'Nebraska': 'NE',
        'Nevada': 'NV',
        'New Hampshire': 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Pennsylvania': 'PA',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY'
      }
    }

    const { abbreviations } = states

    let abbreviation = state

    Object.entries(abbreviations).map(([stateName]) => {
      if (state === stateName) {
        abbreviation = abbreviations[state]
      }
    })

    return abbreviation
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
    <>
      {country === 'USA' && (
        <StatsContainer>
          <h3>State Statistics</h3>
          {states && (
            <ResponsiveContainer height={300}>
              <BarChart data={states}>
                <XAxis
                  axisLine={false}
                  dataKey="state"
                  minTickGap={15}
                  reversed={true}
                  tickFormatter={formateStates}
                  tickMargin={15}
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  dataKey="cases"
                  minTickGap={15}
                  tickFormatter={formatCases}
                  tickLine={false}
                />
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="4 4"
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
                <Legend />
                <Bar dataKey="cases" fill="#f9345e" />
                <Bar dataKey="deaths" fill="#6236ff" />
                <Bar dataKey="active" fill="#1cb142" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </StatsContainer>
      )}
    </>
  )
}

export default StatesChart
