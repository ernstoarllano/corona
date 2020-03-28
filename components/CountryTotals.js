import styled from 'styled-components'
import useCountries from '../hooks/useCountries'

const CountriesList = styled.ul`
  margin-top: 30px;
  margin-bottom: 0;
  padding-left: 0;
  height: 500px;
  list-style-type: none;
  overflow-y: scroll;
  scrollbar-color: dark;

  @media (min-width: 1024px) {
    height: 800px;
  }
`

const CountriesListItem = styled.li`
  + li {
    margin-top: 15px;
  }

  span:first-child {
    display: inline-block;
    width: 60px;
    font-weight: 600;
    color: #1a1053;
  }

  span + span {
    margin-left: 10px;
    text-align: right;
  }
`

const CountryTotals = () => {
  const { countries } = useCountries('cases')

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
