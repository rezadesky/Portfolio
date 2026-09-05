import React, { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

interface CountUpProps {
  value: number
  className?: string
}

/** Angka yang menghitung naik dari 0 saat pertama kali terlihat. */
export const CountUp: React.FC<CountUpProps> = ({ value, className }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reducedMotion) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, reducedMotion])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
