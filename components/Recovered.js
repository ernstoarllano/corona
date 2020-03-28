import styled from 'styled-components'
import Card from './Card'

const Span = styled.span`
  color: #1cb142;
`

const Recovered = ({ data }) => {
  const { recovered } = data

  return (
    <Card>
      <p>Recovered</p>
      <Span>{recovered.toLocaleString()}</Span>
    </Card>
  )
}

export default Recovered
