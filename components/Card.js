import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 30px;
  font-weight: 500;
  color: #1a1053;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  span {
    font-size: 30px;
    font-weight: 600;
  }
`

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>
}

export default Card
