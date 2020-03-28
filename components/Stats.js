import useStats from '../hooks/useStats'
import Loading from './Loading'
import Error from './Error'
import Grid from './Grid'
import Confirmed from './Confirmed'
import Deaths from './Deaths'
import Recovered from './Recovered'
import RecoveryRate from './RecoveryRate'
import DeathRate from './DeathRate'

const Stats = ({ country }) => {
  const endpoint = country
    ? `https://corona.lmao.ninja/countries/${country}`
    : 'https://corona.lmao.ninja/all'

  console.log(country)

  const { stats, loading, error } = useStats(endpoint)

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      {stats && (
        <Grid>
          <Confirmed data={stats} />
          <Deaths data={stats} />
          <Recovered data={stats} />
          <RecoveryRate data={stats} />
          <DeathRate data={stats} />
        </Grid>
      )}
    </>
  )
}

export default Stats
