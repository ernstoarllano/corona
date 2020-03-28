import styled from 'styled-components'
import Card from './Card'

const Span = styled.span`
  color: #f9345e;
`
const Confirmed = ({ data }) => {
  const { cases } = data

  return (
    <Card>
      <p>Confirmed</p>
      <Span>{cases.toLocaleString()}</Span>
    </Card>
  )
}

export default Confirmed
