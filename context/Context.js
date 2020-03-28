import { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({
    country: 'USA'
  })

  const setCountry = country => {
    setState({ ...state, country })
  }

  return (
    <AppContext.Provider value={{ state, setCountry }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
