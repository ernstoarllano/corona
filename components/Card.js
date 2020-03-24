import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 30px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>
}

export default Card
