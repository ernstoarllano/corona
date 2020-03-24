import { useState, useEffect } from 'react'
import axios from 'axios'

const useCountries = endpoint => {
  const [countries, setCountries] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true)
      setError()

      await axios
        .get(endpoint)
        .then(res => setCountries(res.data.countries))
        .catch(err => setError(err))

      setLoading(false)
    }

    fetchCountries()
  }, [endpoint])

  return {
    countries,
    loading,
    error
  }
}

export default useCountries
