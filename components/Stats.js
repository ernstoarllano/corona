import useStats from '../utils/useStats'
import Confirmed from './Confirmed'
import Deaths from './Deaths'
import Recovered from './Recovered'
import RecoveryRate from './RecoveryRate'
import DeathRate from './DeathRate'

const Stats = () => {
  const stats = useStats('https://covid19.mathdro.id/api')

  return (
    <>
      {stats ? (
        <>
          <Confirmed data={stats} />
          <Deaths data={stats} />
          <Recovered data={stats} />
          <RecoveryRate data={stats} />
          <DeathRate data={stats} />
        </>
      ) : (
        <span>Loading Data</span>
      )}
    </>
  )
}

export default Stats
