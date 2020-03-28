import styled from 'styled-components'
import { AppContext } from '../context/Context'
import CountrySelector from './CountrySelector'
import CountryTotals from './CountryTotals'
import CasesChart from './CasesChart'
import DeathsChart from './DeathsChart'

const FilterContainer = styled.section`
  margin-bottom: 30px;
  padding: 30px;
  background-color: white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 20px;

  @media (min-width: 1024px) {
    margin-bottom: 60px;
    padding: 60px;
  }
`

const FilterGrid = styled.section`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 0.8fr 3fr;
    grid-gap: 60px;
  }
`

const ChartsContainer = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
`

const CountryOverview = () => {
  return (
    <FilterContainer>
      <h2>Filter By Country</h2>
      <FilterGrid>
        <div>
          <CountrySelector />
          <CountryTotals />
        </div>
        <div>
          <AppContext.Consumer>
            {({ state }) => (
              <>
                <h3>{state.country}</h3>
                <ChartsContainer>
                  <CasesChart country={state.country} />
                  <DeathsChart country={state.country} />
                </ChartsContainer>
              </>
            )}
          </AppContext.Consumer>
        </div>
      </FilterGrid>
    </FilterContainer>
  )
}

export default CountryOverview
