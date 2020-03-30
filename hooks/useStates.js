import { useState, useEffect } from 'react'
import axios from 'axios'

const useStates = () => {
  const [states, setStates] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchStates = async () => {
      setLoading(true)
      setError()

      await axios
        .get('https://corona.lmao.ninja/states')
        .then(res => setStates(res.data))
        .catch(err => setError(err))

      setLoading(false)
    }

    fetchStates()
  }, [])

  return {
    states,
    loading,
    error
  }
}

export default useStates
