import styled from 'styled-components'
import Section from '../Section/Section'
import CountrySelector from '../Country/CountrySelector'
import CountryTotals from '../Country/CountryTotals'
import CasesChart from '../Charts/CasesChart'
import DeathsChart from '../Charts/DeathsChart'
import StateSelector from '../State/StateSelector'
import StateStats from './StateStats'

const CardGrid = styled.section`
  padding: 30px;
  background-color: white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  overflow: hidden;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 60px;
    padding: 60px;
  }
`

const Aside = styled.aside`
  @media (min-width: 1024px) {
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      height: 150px;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      background-repeat: no-repeat;
    }
  }
`

const ChartsGrid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
`

const CountryStats = ({ country, countryState }) => {
  return (
    <Section id="countries" background="confirmed">
      <h2 style={{ color: '#ffffff' }}>Flatten the Curve</h2>
      <p style={{ marginBottom: 30, color: '#ffffff' }}>
        Countries around the world are working to “flatten the curve” of the
        coronavirus pandemic. Flattening the curve involves reducing the number
        of new COVID-19 cases from one day to the next. This helps prevent
        healthcare systems from becoming overwhelmed. When a country has fewer
        new COVID-19 cases emerging today than it did on a previous day, that’s
        a sign that the country is flattening the curve.
      </p>
      <CardGrid>
        <Aside>
          <CountrySelector />
          <CountryTotals />
        </Aside>
        <div>
          <h3>{country} Statistics</h3>
          <ChartsGrid>
            <CasesChart country={country} />
            <DeathsChart country={country} />
          </ChartsGrid>
          {country === 'USA' && (
            <>
              <StateSelector />
              <StateStats countryState={countryState} />
            </>
          )}
        </div>
      </CardGrid>
    </Section>
  )
}

export default CountryStats
