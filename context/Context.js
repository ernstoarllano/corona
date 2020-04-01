import { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({
    country: 'USA',
    countryState: 'California'
  })

  const setCountry = country => {
    setState({ ...state, country })
  }

  const setCountryState = countryState => {
    setState({ ...state, countryState })
  }

  return (
    <AppContext.Provider value={{ state, setCountry, setCountryState }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
