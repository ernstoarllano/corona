import styled from 'styled-components'
import Card from '../Card/Card'
import useIcrement from '../../hooks/useIncrement'

const Span = styled.span`
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`

const Deaths = ({ data: { deaths } }) => {
  const number = useIcrement(deaths)

  return (
    <Card width={33.3333333333} color="deaths">
      <p>Deaths</p>
      <Span>{deaths.toLocaleString()}</Span>
    </Card>
  )
}

export default Deaths
