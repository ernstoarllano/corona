import { useState, useEffect } from 'react'
import axios from 'axios'

const useArchives = () => {
  const [archives, setArchives] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchArchives = async () => {
      setLoading(true)
      setError()

      await axios
        .get('https://corona.lmao.ninja/v2/historical/usa')
        .then(res => {
          const confirmedCases = []
          const confirmedDeaths = []

          const { cases, deaths } = res.data.timeline

          // TODO: Need to combine data sets in a simpler way
          Object.entries(cases).map(([date, value]) => {
            confirmedCases.push({
              date: date,
              cases: value
            })
          })

          Object.entries(deaths).map(([date, value]) => {
            confirmedDeaths.push({
              date: date,
              deaths: value
            })
          })

          const mergedData = () => {
            const data = []

            confirmedCases.map(confirmedCase => {
              const findDeaths = confirmedDeaths.find(
                confirmedDeath => confirmedDeath.date === confirmedCase.date
              )

              data.push(
                Object.assign(confirmedCase, { deaths: findDeaths.deaths })
              )
            })

            return data
          }

          setArchives(mergedData())
        })
        .catch(err => setError(err))

      setLoading(false)
    }

    fetchArchives()
  }, [])

  return {
    archives,
    loading,
    error
  }
}

export default useArchives
