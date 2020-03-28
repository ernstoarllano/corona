import styled from 'styled-components'

const LayoutContainer = styled.main`
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 15px;

  @media (min-width: 1024px) {
    padding: 120px 30px;
  }
`

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

export default Layout
