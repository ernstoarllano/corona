import styled from 'styled-components'
import Section from '../Section/Section'
import HeroContent from './HeroContent'
import Coronavirus from '../Icons/Coronavirus'
import Button from '../Global/Button'
import Down from '../Icons/Down'

const HeroFlexContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

const SVGContainer = styled.div`
  @media (min-width: 1024px) {
    width: 33.3333333333%;
  }
`

const Hero = () => {
  return (
    <Section id="hero">
      <HeroFlexContainer>
        <HeroContent>
          <h5>COVID-19</h5>
          <h1>Slow the Spread</h1>
          <h2>#StayatHome</h2>
          <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            new virus.
          </p>
          <p>
            The disease causes respiratory illness (like the flu) with symptoms
            such as a cough, fever, and in more severe cases, difficulty
            breathing. You can protect yourself by washing your hands
            frequently, avoiding touching your face, and avoiding close contact
            (1 meter or 3 feet) with people who are unwell.
          </p>
          <Button href="#">Learn More</Button>
        </HeroContent>
        <SVGContainer>
          <Coronavirus />
        </SVGContainer>
      </HeroFlexContainer>
      <Down width={50} />
    </Section>
  )
}

export default Hero
