import { useState, useEffect, useRef } from 'react'

const useVisible = () => {
  const [isVisible, setVisible] = useState(false)
  const ref = useRef()

  const entries = ([entry]) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries)

    const el = ref.current

    observer.observe(el)
  }, [ref])

  return { ref }
}

export default useVisible
