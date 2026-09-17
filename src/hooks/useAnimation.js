import { useCallback, useState } from 'react'

export function useAnimation(initialPlaying = true) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying)
  const [speed, setSpeed] = useState('normal')

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const cycleSpeed = useCallback(() => {
    setSpeed((prev) => {
      if (prev === 'slow') return 'normal'
      if (prev === 'normal') return 'fast'
      return 'slow'
    })
  }, [])

  return { isPlaying, toggle, speed, cycleSpeed }
}
