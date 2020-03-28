import React from 'react'
import AppContextProvider from '../context/Context'
import '../styles.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
