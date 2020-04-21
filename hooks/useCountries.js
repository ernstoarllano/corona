import { useState, useEffect } from 'react'
import axios from 'axios'

const useCountries = (sort) => {
  const [countries, setCountries] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const endpoint = sort
    ? `https://corona.lmao.ninja/v2/countries?sort=${sort}`
    : 'https://corona.lmao.ninja/v2/countries'

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true)
      setError()

      await axios
        .get(endpoint)
        .then((res) => setCountries(res.data))
        .catch((err) => setError(err))

      setLoading(false)
    }

    fetchCountries()
  }, [])

  return {
    countries,
    loading,
    error,
  }
}

export default useCountries
