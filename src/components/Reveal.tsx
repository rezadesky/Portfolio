import React from "react"
import { motion } from "motion/react"

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Jeda dalam detik untuk efek stagger */
  delay?: number
  /** Jarak geser vertikal awal (px) */
  y?: number
}

/**
 * Pembungkus animasi masuk: memudar + naik saat elemen pertama kali
 * terlihat di viewport. Aman untuk section yang di-toggle `hidden` —
 * animasi baru jalan saat tab dibuka.
 */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, y = 14 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)
