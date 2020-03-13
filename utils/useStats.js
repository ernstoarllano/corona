import { useState, useEffect } from 'react'
import axios from 'axios'

const useStats = endpoint => {
  const [stats, setStats] = useState()

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios(endpoint)

      setStats(res.data)
    }

    fetchStats()
  }, [])

  return stats
}

export default useStats
