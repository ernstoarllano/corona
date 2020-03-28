import { useState, useEffect } from 'react'
import axios from 'axios'

const useStats = endpoint => {
  const [stats, setStats] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      setError()

      await axios
        .get(endpoint)
        .then(res => setStats(res.data))
        .catch(err => setError(err))

      setLoading(false)
    }

    fetchStats()
  }, [endpoint])

  return {
    stats,
    loading,
    error
  }
}

export default useStats
