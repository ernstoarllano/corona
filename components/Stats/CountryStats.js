import styled from 'styled-components'
import Section from '../Section/Section'
import CountrySelector from '../Country/CountrySelector'
import CountryTotals from '../Country/CountryTotals'
import CasesChart from '../Charts/CasesChart'
import DeathsChart from '../Charts/DeathsChart'
import StatesChart from '../Charts/StatesChart'

const CardGrid = styled.section`
  padding: 30px;
  background-color: white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 20px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 60px;
    padding: 60px;
  }
`

const Aside = styled.aside`
  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }
`

const ChartsGrid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
`

const CountryStats = ({ country }) => {
  return (
    <Section id="countries" background="confirmed">
      <h2>Filter Statistics By Country</h2>
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
          <StatesChart country={country} />
        </div>
      </CardGrid>
    </Section>
  )
}

export default CountryStats
