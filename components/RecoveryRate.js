import styled from 'styled-components'
import Card from './Card'

const Span = styled.span`
  color: #1cb142;
`

const RecoveryRate = ({ data }) => {
  const { cases, recovered } = data
  const rate = parseFloat((recovered / cases) * 100).toFixed(2)

  return (
    <Card>
      <p>Recovery Rate</p>
      <Span>{rate}%</Span>
    </Card>
  )
}

export default RecoveryRate
