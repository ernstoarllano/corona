import styled from 'styled-components'
import { AppContext } from '../context/Context'
import CountrySelector from './CountrySelector'
import CountryTotals from './CountryTotals'
import Chart from './Chart'
import Stats from './Stats'

const DashboardCountryOverview = styled.section`
  margin-top: 30px;
  padding: 30px;
  background-color: white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 20px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 0.8fr 3fr;
    grid-gap: 60px;
    margin-top: 60px;
    padding: 60px;
  }
`

const CountryOverview = () => {
  return (
    <DashboardCountryOverview>
      <div>
        <CountrySelector />
        <CountryTotals />
      </div>
      <div>
        <AppContext.Consumer>
          {({ state }) => (
            <>
              <h2>{state.country} Statistics</h2>
              <Chart country={state.country} />
              <Stats country={state.country} />
            </>
          )}
        </AppContext.Consumer>
      </div>
    </DashboardCountryOverview>
  )
}

export default CountryOverview
