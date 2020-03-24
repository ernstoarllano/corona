import styled from 'styled-components'

const LayoutContainer = styled.main`
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

export default Layout
