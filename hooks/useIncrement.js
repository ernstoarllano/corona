import { useState, useEffect } from 'react'

const useIncrement = (endNumber, isVisble) => {
  let [startNumber, setNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisble && startNumber <= endNumber) {
        setNumber(startNumber++)
      }
    }, 0)

    return () => clearInterval(interval)
  }, [isVisble])

  return startNumber
}

export default useIncrement
