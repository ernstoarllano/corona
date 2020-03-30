import styled from 'styled-components'
import useStats from '../../hooks/useStats'
import Loading from '../Global/Loading'
import Error from '../Global/Error'
import Section from '../Section/Section'
import Confirmed from './Confirmed'
import Recovered from './Recovered'
import Deaths from './Deaths'
import RecoveryRate from './RecoveryRate'
import MortalityRate from './MortalityRate'

const CenterCards = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`

const WorldwideStats = () => {
  const endpoint = 'https://corona.lmao.ninja/all'

  const { stats, loading, error } = useStats(endpoint)

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      {stats && (
        <Section id="worldwide" align="center">
          <h2>Worldwide Statistics</h2>
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
