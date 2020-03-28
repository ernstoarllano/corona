import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-gap: 30px;
`

const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>
}

export default Grid
