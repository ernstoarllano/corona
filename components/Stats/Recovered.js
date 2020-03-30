import styled from 'styled-components'
import useIcrement from '../../hooks/useIncrement'
import Card from '../Card/Card'

const Span = styled.span`
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`

const Recovered = ({ data: { recovered } }) => {
  const number = useIcrement(recovered)

  return (
    <Card width={33.3333333333} color="recovered">
      <p>Recovered</p>
      <Span>{recovered.toLocaleString()}</Span>
    </Card>
  )
}

export default Recovered
