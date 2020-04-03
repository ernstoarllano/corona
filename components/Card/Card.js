import styled from 'styled-components'
import { forwardRef } from 'react'

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
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(100%)'};
  transition: all 0.35s ease-in-out;
  transition-delay: ${({ delay }) => `${delay}s` || '0s'};

  @media (min-width: 1024px) {
    width: ${({ width }) => `calc(${width}% - 30px)` || '100%'};
    margin-left: 15px;
    margin-right: 15px;

    &:nth-child(4),
    &:nth-child(5) {
      margin-bottom: 0;
    }
  }

  p {
    margin-bottom: 0;
  }

  span {
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  }
`

// TODO: Need to find out why component returns as Anonymous in DevTools
const Card = forwardRef(({ width, color, visible, delay, children }, ref) => {
  return (
    <CardContainer
      width={width}
      color={color}
      visible={visible}
      delay={delay}
      ref={ref}
    >
      {children}
    </CardContainer>
  )
})

export default Card
