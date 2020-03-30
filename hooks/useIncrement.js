import { useState, useEffect } from 'react'

const useIncrement = endNumber => {
  let [startNumber, setNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (startNumber <= endNumber) {
        setNumber(startNumber++)
      }
    }, 0)

    return () => clearInterval(interval)
  }, [])

  return startNumber
}

export default useIncrement
