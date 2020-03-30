import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  padding: 40px 30px;
  font-weight: 500;
  color: #1a1053;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  @media (min-width: 1024px) {
    width: ${({ width }) => `calc(${width}% - 30px)` || '100%'};
    margin-left: 15px;
    margin-right: 15px;

    &:nth-child(4),
    &:nth-child(5) {
      margin-bottom: 0;
    }
  }

  span {
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  }
`

const Card = ({ width, color, children }) => {
  return (
    <CardContainer width={width} color={color}>
      {children}
    </CardContainer>
  )
}

export default Card
