import { useState } from 'react'
import useCountries from '../utils/useCountries'
import useArchives from '../utils/useArchives'
import Stats from '../components/Stats'
import Chart from '../components/Chart'

const CountrySelector = () => {
  const { countries } = useCountries('https://corona.lmao.ninja/countries')
  const { archives, loading, error } = useArchives()
  const [state, setState] = useState({
    country: '',
    slug: ''
  })

  return (
    <>
      {countries ? (
        <>
          <select
            onChange={e =>
              setState({
                ...state,
                country: e.target.selectedOptions[0].innerHTML,
                slug: e.target.value
              })
            }
          >
            <option>Select Country</option>
            {countries.map(({ country }) => {
              return (
                <option key={country} value={country}>
                  {country}
                </option>
              )
            })}
          </select>
          {state.country && state.slug && (
            <>
              <h2>Currently Showing {state.country} Stats</h2>
              <Stats
                endpoint={`https://covid19.mathdro.id/api/countries/${state.slug}`}
              />
            </>
          )}
        </>
      ) : (
        <span>Waiting</span>
      )}
      <Chart data={archives} />
    </>
  )
}

export default CountrySelector
