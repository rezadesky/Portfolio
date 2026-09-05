import React, { useCallback, useRef } from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  /** Jika diisi, kartu dirender sebagai <a> */
  href?: string
  target?: string
  rel?: string
  ariaLabel?: string
}

/**
 * Kartu dengan kilau lembut yang mengikuti kursor (spotlight).
 * Posisi kursor dikirim lewat CSS variable --mx/--my, overlay digambar
 * oleh .spotlight-overlay di index.css.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children, className, href, target, rel, ariaLabel,
}) => {
  const ref = useRef<HTMLElement | null>(null)

  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }, [])

  const inner = (
    <>
      <span aria-hidden="true" className="spotlight-overlay" />
      {children}
    </>
  )

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        className={cn("spotlight block", className)}
      >
        {inner}
      </a>
    )
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={handleMove}
      className={cn("spotlight", className)}
    >
      {inner}
    </div>
  )
}
