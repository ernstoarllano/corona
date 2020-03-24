import { useState } from 'react'
import useCountries from '../utils/useCountries'
import Stats from '../components/Stats'

const CountrySelector = () => {
  const { countries } = useCountries('https://covid19.mathdro.id/api/countries')
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
            {countries.map(({ name, iso2 }) => {
              return (
                <option key={name} value={iso2}>
                  {name}
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
    </>
  )
}

export default CountrySelector
