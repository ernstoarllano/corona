import { useState, useEffect } from 'react'
import axios from 'axios'

const useCountries = endpoint => {
  const [countries, setCountries] = useState()

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await axios(endpoint)

      setCountries(res.data.countries)
    }

    fetchCountries()
  }, [])

  return countries
}

export default useCountries
