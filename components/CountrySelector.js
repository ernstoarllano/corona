import useCountries from '../utils/useCountries'

const CountrySelector = () => {
  const countries = useCountries('https://covid19.mathdro.id/api/countries')

  return (
    <>
      {countries ? (
        <>
          <select>
            <option>Select Country</option>
            {Object.entries(countries).map(([key, value]) => (
              <option value={value}>{key}</option>
            ))}
          </select>
        </>
      ) : (
        <span>Waiting</span>
      )}
    </>
  )
}

export default CountrySelector
