import styled from 'styled-components'
import useCountries from '../../hooks/useCountries'
import Loading from '../Global/Loading'
import Error from '../Global/Error'

const CountriesList = styled.ul`
  margin-top: 30px;
  margin-bottom: 0;
  padding-left: 0;
  height: 300px;
  list-style-type: none;
  overflow-y: scroll;

  @media (max-width: 1023px) {
    display: none;
  }

  @media (min-width: 1024px) {
    height: 600px;
  }
`

const CountriesListItem = styled.li`
  + li {
    margin-top: 15px;
  }

  span:first-child {
    display: inline-block;
    width: 80px;
    font-weight: 600;
    color: #1a1053;
  }

  span + span {
    margin-left: 10px;
    text-align: right;
  }
`

const CountryTotals = () => {
  const { countries, loading, error } = useCountries('cases')

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      {countries && (
        <CountriesList>
          {countries.map(({ country, cases }) => (
            <CountriesListItem key={country}>
              <span>{cases.toLocaleString()}</span>
              <span>{country}</span>
            </CountriesListItem>
          ))}
        </CountriesList>
      )}
    </>
  )
}

export default CountryTotals
