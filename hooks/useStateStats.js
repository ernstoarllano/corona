import { useState, useEffect } from 'react'
import axios from 'axios'

const useStateStats = countryState => {
  const [state, setState] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchState = async () => {
      setLoading(true)
      setError()

      await axios
        .get('https://corona.lmao.ninja/states')
        .then(res => setState(res.data.find(o => o.state === countryState)))
        .catch(err => setError(err))

      setLoading(false)
    }

    fetchState()
  }, [countryState])

  return {
    state,
    loading,
    error
  }
}

export default useStateStats
