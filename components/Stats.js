import useStats from '../utils/useStats'
import Loading from './Loading'
import Error from './Error'
import Grid from './Grid'
import Confirmed from './Confirmed'
import Deaths from './Deaths'
import Recovered from './Recovered'
import RecoveryRate from './RecoveryRate'
import DeathRate from './DeathRate'

const Stats = ({ endpoint = 'https://covid19.mathdro.id/api' }) => {
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
