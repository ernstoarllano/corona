import AppContextProvider from '../context/Context'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import '../styles.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default MyApp
