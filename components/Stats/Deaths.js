import styled from 'styled-components'
import useVisible from '../../hooks/useVisible'
import useIcrement from '../../hooks/useIncrement'
import Card from '../Card/Card'

const Span = styled.span`
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`

const Deaths = ({ data: { deaths } }) => {
  const [ref, isVisble] = useVisible()
  const number = useIcrement(deaths, isVisble)

  return (
    <Card
      width={33.3333333333}
      color="deaths"
      ref={ref}
      visible={isVisble}
      delay={0.4}
    >
      <p>Deaths</p>
      <Span>{deaths.toLocaleString()}</Span>
    </Card>
  )
}

export default Deaths
