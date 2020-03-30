import styled from 'styled-components'
import theme from '../../theme'

const SectionContainer = styled.section`
  padding: 30px 15px;
  text-align: ${({ align }) => align || 'left'};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.white};

  @media (min-width: 1024px) {
    padding: 60px 90px;
  }
`

const Section = ({ id, align, background, children }) => {
  return (
    <SectionContainer id={id} align={align} background={background}>
      {children}
    </SectionContainer>
  )
}

export default Section
