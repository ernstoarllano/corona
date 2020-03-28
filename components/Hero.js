import styled from 'styled-components'
import Coronavirus from '../components/Coronavirus'

const HeroContainer = styled.section`
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 120px;
  }
`

const HeroContent = styled.div`
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

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h5>COVID-19</h5>
        <h1>Slow the Spread</h1>
        <h2>Stay at Home</h2>
        <p>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          new virus.
        </p>
        <p>
          The disease causes respiratory illness (like the flu) with symptoms
          such as a cough, fever, and in more severe cases, difficulty
          breathing. You can protect yourself by washing your hands frequently,
          avoiding touching your face, and avoiding close contact (1 meter or 3
          feet) with people who are unwell.
        </p>
      </HeroContent>
      <Coronavirus />
    </HeroContainer>
  )
}

export default Hero
