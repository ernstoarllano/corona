import { useState, useEffect } from 'react'
import axios from 'axios'

const useStateStats = (countryState) => {
  const [state, setState] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchState = async () => {
      setLoading(true)
      setError()

      await axios
        .get(`https://corona.lmao.ninja/v2/states/${countryState}`)
        .then((res) => setState(res.data))
        .catch((err) => setError(err))

      setLoading(false)
    }

    fetchState()
  }, [countryState])

  return {
    state,
    loading,
    error,
  }
}

export default useStateStats
