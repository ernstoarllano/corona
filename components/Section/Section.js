import styled from 'styled-components'
import theme from '../../theme'

const SectionContainer = styled.section`
  position: relative;
  padding: 30px 15px;
  text-align: ${({ align }) => align || 'left'};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.white};
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 60px 90px;
  }

  h2,
  p {
    position: relative;
    z-index: 10;
  }

  h2 {
    margin-bottom: 15px;
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
