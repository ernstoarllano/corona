import styled from 'styled-components'
import WashHands from './WashHands'
import Quarantine from './Quarantine'
import SocialDistance from './SocialDistance'
import Mask from './Mask'

const PreventionContainer = styled.section`
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: 1024px) {
    margin-bottom: 120px;
  }

  h3 {
    margin-bottom: 0;
  }
`

const PreventionGrid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
`

const PreventionCard = styled.div`
  p {
    font-size: 18px;
  }
`

const Prevention = () => {
  return (
    <PreventionContainer>
      <h2>Take Steps to Protect Yourself</h2>
      <PreventionGrid>
        <PreventionCard>
          <WashHands />
          <p>
            Wash your hands regularly for 20 seconds, with soap and water or
            alcohol-based hand rub
          </p>
        </PreventionCard>
        <PreventionCard>
          <Quarantine />
          <p>
            Stay home and self-isolate from others in the household if you feel
            unwell
          </p>
        </PreventionCard>
        <PreventionCard>
          <SocialDistance />
          <p>
            Avoid close contact (1 meter or 3 feet) with people who are unwell
          </p>
        </PreventionCard>
        <PreventionCard>
          <Mask />
          <p>
            Cover your nose and mouth with a disposable tissue or flexed elbow
            when you cough or sneeze
          </p>
        </PreventionCard>
      </PreventionGrid>
    </PreventionContainer>
  )
}

export default Prevention
