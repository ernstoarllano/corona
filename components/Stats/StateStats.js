import styled from 'styled-components'
import useStateStats from '../../hooks/useStateStats'
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

const StateStats = ({ countryState }) => {
  const { state, loading, error } = useStateStats(countryState)

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      <StatsContainer>
        {state && (
          <CenterCards>
            <Confirmed data={state} />
            <Deaths data={state} />
            <MortalityRate data={state} />
          </CenterCards>
        )}
      </StatsContainer>
    </>
  )
}

export default StateStats
