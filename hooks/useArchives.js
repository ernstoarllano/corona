import { useState, useEffect } from 'react'
import axios from 'axios'

const useArchives = endpoint => {
  const [archives, setArchives] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchArchives = async () => {
      setLoading(true)
      setError()

      await axios
        .get(endpoint)
        .then(res => {
          const { cases, deaths, recovered } = res.data.timeline

          const data = Object.entries(cases).map(([date]) => ({
            date: date,
            cases: cases[date],
            deaths: deaths[date],
            recovered: recovered[date]
          }))

          setArchives(data)
        })
        .catch(err => setError(err))

      setLoading(false)
    }

    fetchArchives()
  }, [endpoint])

  return {
    archives,
    loading,
    error
  }
}

export default useArchives
