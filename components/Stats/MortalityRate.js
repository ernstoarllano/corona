import styled from 'styled-components'
import useVisible from '../../hooks/useVisible'
import Card from '../Card/Card'

const Span = styled.span`
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`

const MortalityRate = ({ data: { cases, deaths } }) => {
  const [ref, isVisble] = useVisible()

  return (
    <Card
      width={33.3333333333}
      color="deaths"
      ref={ref}
      visible={isVisble}
      delay={0.2}
    >
      <p>Mortality Rate</p>
      <Span>{parseFloat((deaths / cases) * 100).toFixed(2)}%</Span>
    </Card>
  )
}

export default MortalityRate
