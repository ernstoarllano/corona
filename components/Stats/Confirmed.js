import styled from 'styled-components'
import useIcrement from '../../hooks/useIncrement'
import Card from '../Card/Card'

const Span = styled.span`
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`

const Confirmed = ({ data: { cases } }) => {
  const number = useIcrement(cases)

  return (
    <Card width={33.3333333333} color="confirmed">
      <p>Confirmed</p>
      <Span>{cases.toLocaleString()}</Span>
    </Card>
  )
}

export default Confirmed
