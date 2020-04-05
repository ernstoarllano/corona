import styled from 'styled-components'

const HeroContentContainer = styled.div`
  @media (min-width: 1024px) {
    width: 66.6666666667%;
  }

  h1 {
    margin-bottom: 10px;
    line-height: 1;

    @media (min-width: 1024px) {
      margin-bottom: 0;
    }
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
