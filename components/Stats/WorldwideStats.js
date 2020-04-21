import styled from 'styled-components'
import useStats from '../../hooks/useStats'
import useCountries from '../../hooks/useCountries'
import useMediaQuery from '../../hooks/useMediaQuery'
import Loading from '../Global/Loading'
import Error from '../Global/Error'
import Section from '../Section/Section'
import { scaleQuantile } from 'd3-scale'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import Confirmed from './Confirmed'
import Recovered from './Recovered'
import Deaths from './Deaths'
import RecoveryRate from './RecoveryRate'
import MortalityRate from './MortalityRate'

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.2;
`

const CenterCards = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`

const WorldwideStats = () => {
  const endpoint = 'https://corona.lmao.ninja/v2/all'

  const { stats, loading, error } = useStats(endpoint)
  const { countries } = useCountries()

  const { isMediaQuery } = useMediaQuery('(min-width: 1024px)')

  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

  const formatDate = (timestamp) => {
    const time = new Date(timestamp).getTime()
    const date = new Date(time)

    return date.toLocaleString()
  }

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      {stats && countries && (
        <Section id="worldwide" align="center">
          <h2>Worldwide Statistics</h2>
          <p style={{ marginBottom: 10 }}>
            This data changes rapidly, so what’s shown may be out of date.
          </p>
          <p style={{ marginBottom: 30 }}>
            Last Updated: {formatDate(stats.updated)}
          </p>
          {isMediaQuery && (
            <MapContainer>
              <ComposableMap>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const { properties } = geo

                      const country = countries.find(
                        (o) => o.countryInfo.iso3 === properties.ISO_A3
                      )

                      const colorScale = scaleQuantile()
                        .domain(countries.map((o) => o.casesPerOneMillion))
                        .range([
                          '#ffedea',
                          '#ffcec5',
                          '#ffad9f',
                          '#ff8a75',
                          '#ff5533',
                          '#e2492d',
                          '#be3d26',
                          '#9a311f',
                          '#782618',
                        ])

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={
                            country
                              ? colorScale(country.casesPerOneMillion)
                              : '#fff'
                          }
                        />
                      )
                    })
                  }
                </Geographies>
              </ComposableMap>
            </MapContainer>
          )}
          <CenterCards>
            <Confirmed data={stats} />
            <Recovered data={stats} />
            <Deaths data={stats} />
            <RecoveryRate data={stats} />
            <MortalityRate data={stats} />
          </CenterCards>
        </Section>
      )}
    </>
  )
}

export default WorldwideStats
