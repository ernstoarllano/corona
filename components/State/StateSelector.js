import styled from 'styled-components'
import useStates from '../../hooks/useStates'
import Loading from '../Global/Loading'
import Error from '../Global/Error'

const StateSelectorContainer = styled.div`
  margin-top: 30px;

  @media (min-width: 1024px) {
    margin-top: 60px;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  color: #817c9b;
  background-color: #f0f3f7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z'/%3E%3C/svg%3E");
  background-position: calc(100% - 20px) center;
  background-repeat: no-repeat;
  background-size: 12px;
  border: 0;
  border-radius: 9999px;
  appearance: none;
  outline: none;
`

const StateSelector = () => {
  const { states, loading, error } = useStates()

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      {states && (
        <StateSelectorContainer>
          <h3>Filter by State</h3>
          <Select defaultValue="California">
            <option disabled>Select Country</option>
            {states.map(({ state }) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </StateSelectorContainer>
      )}
    </>
  )
}

export default StateSelector
