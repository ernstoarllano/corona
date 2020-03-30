import styled from 'styled-components'

const HeroContentContainer = styled.div`
  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 60px;
  }

  p {
    font-size: 18px;
  }
`

const HeroContent = ({ children }) => {
  return <HeroContentContainer>{children}</HeroContentContainer>
}

export default HeroContent
