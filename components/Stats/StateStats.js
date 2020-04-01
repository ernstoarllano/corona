import styled from 'styled-components'
import useStates from '../../hooks/useStates'
import Loading from '../Global/Loading'
import Error from '../Global/Error'
import Confirmed from './Confirmed'
import Deaths from './Deaths'
import MortalityRate from './MortalityRate'

const StatsContainer = styled.div`
  margin-top: 30px;
`

const CenterCards = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`

const StateStats = ({ country }) => {
  const { states, loading, error } = useStates()

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      {country === 'USA' && (
        <StatsContainer>
          <h3>State Statistics</h3>
          {states &&
            states.map(stats => {
              return (
                <>
                  <h4>{stats.state}</h4>
                  <CenterCards>
                    <Confirmed data={stats} />
                    <Deaths data={stats} />
                    <MortalityRate data={stats} />
                  </CenterCards>
                </>
              )
            })}
        </StatsContainer>
      )}
    </>
  )
}

export default StateStats
