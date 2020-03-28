import styled from 'styled-components'
import Card from './Card'

const Span = styled.span`
  color: #6236ff;
`

const Deaths = ({ data }) => {
  const { deaths } = data

  return (
    <Card>
      <p>Deaths</p>
      <Span>{deaths.toLocaleString()}</Span>
    </Card>
  )
}

export default Deaths
