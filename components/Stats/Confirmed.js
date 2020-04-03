import styled from 'styled-components'
import useVisible from '../../hooks/useVisible'
import useIcrement from '../../hooks/useIncrement'
import Card from '../Card/Card'

const Span = styled.span`
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`

const Confirmed = ({ data: { cases } }) => {
  const [ref, isVisble] = useVisible()
  const number = useIcrement(cases, isVisble)

  return (
    <Card
      width={33.3333333333}
      color="confirmed"
      ref={ref}
      visible={isVisble}
      delay={0}
    >
      <p>Confirmed</p>
      <Span>{cases.toLocaleString()}</Span>
    </Card>
  )
}

export default Confirmed
