import styled from 'styled-components'
import Section from '../Section/Section'
import WashHands from '../Icons/WashHands'
import Quarantine from '../Icons/Quarantine'
import SocialDistance from '../Icons/SocialDistance'
import Mask from '../Icons/Mask'

const PreventionGrid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
`

const PreventionCard = styled.div`
  text-align: left;

  svg {
    width: 300px;
  }

  p {
    font-size: 18px;
  }
`

const Prevention = () => {
  return (
    <Section id="prevention" align="center">
      <h2>Take Steps to Protect Yourself & Others</h2>
      <p>
        There is currently no vaccine to prevent Coronavirus disease (COVID-19).
        The best way to prevent illness is to avoid being exposed to this virus
        & protect yourself.
      </p>
      <PreventionGrid>
        <PreventionCard>
          <WashHands />
          <h4>Hand Hygiene</h4>
          <p>
            Wash your hands regularly for 20 seconds, with soap and water or
            alcohol-based hand rub
          </p>
        </PreventionCard>
        <PreventionCard>
          <Quarantine />
          <h4>Stay home if you are sick</h4>
          <p>
            Stay home and self-isolate from others in the household if you feel
            unwell
          </p>
        </PreventionCard>
        <PreventionCard>
          <SocialDistance />
          <h4>Social Distance</h4>
          <p>
            Avoid close contact (1 meter or 3 feet) with people who are unwell
          </p>
        </PreventionCard>
        <PreventionCard>
          <Mask />
          <h4>Wear a facemask if you are sick</h4>
          <p>
            Cover your nose and mouth with a disposable tissue or flexed elbow
            when you cough or sneeze
          </p>
        </PreventionCard>
      </PreventionGrid>
    </Section>
  )
}

export default Prevention
