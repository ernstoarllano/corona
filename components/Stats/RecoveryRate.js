import styled from 'styled-components'
import useVisible from '../../hooks/useVisible'
import Card from '../Card/Card'

const Span = styled.span`
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`

const RecoveryRate = ({ data: { cases, recovered } }) => {
  const [ref, isVisble] = useVisible()

  return (
    <Card
      width={33.3333333333}
      color="recovered"
      ref={ref}
      visible={isVisble}
      delay={0}
    >
      <p>Recovery Rate</p>
      <Span>{parseFloat((recovered / cases) * 100).toFixed(2)}%</Span>
    </Card>
  )
}

export default RecoveryRate
