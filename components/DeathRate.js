import styled from 'styled-components'
import Card from './Card'

const Span = styled.span`
  color: #6236ff;
`

const DeathRate = ({ data }) => {
  const { cases, deaths } = data
  const rate = parseFloat((deaths / cases) * 100).toFixed(2)

  return (
    <Card>
      <p>Mortality Rate</p>
      <Span>{rate}%</Span>
    </Card>
  )
}

export default DeathRate
