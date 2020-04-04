import { useState, useEffect, useRef } from 'react'

const useVisible = () => {
  const [isVisible, setVisible] = useState(false)
  const ref = useRef()

  const callback = ([element]) => {
    if (element.isIntersecting) {
      setVisible(element.isIntersecting)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback)

    observer.observe(ref.current)

    return () => observer.unobserve(ref.current)
  }, [ref])

  return [ref, isVisible]
}

export default useVisible
