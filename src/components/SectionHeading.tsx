import React from "react"

interface SectionHeadingProps {
  /** Huruf inisial bergaya tulisan tangan — identitas utama heading */
  script: string
  /** Sisa kata dalam kapital */
  rest: string
  /** Label aria yang dapat dibaca screen reader, mis. "Tentang" */
  ariaLabel: string
  /** Nomor urut section, mis. "01" */
  index: string
  description?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  script, rest, ariaLabel, index, description,
}) => (
  <div className="space-y-3 sm:space-y-4">
    <div className="flex items-end justify-between gap-4">
      <h2
        aria-label={ariaLabel}
        className="flex items-baseline gap-1 select-none"
      >
        <span aria-hidden="true" className="font-imperial text-6xl sm:text-7xl text-rose-500 leading-[0.75]">{script}</span>
        <span aria-hidden="true" className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">{rest}</span>
      </h2>
      <span aria-hidden="true" className="hidden sm:block pb-1 font-mono text-[10px] font-medium text-muted-foreground/45 tracking-[0.35em] whitespace-nowrap">
        {index} <span className="text-rose-800/80">/</span> 05
      </span>
    </div>
    {description && (
      <p className="text-[13px] sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
        {description}
      </p>
    )}
    <div aria-hidden="true" className="flex items-center gap-1.5">
      <span className="w-10 h-px bg-gradient-to-r from-rose-600 to-rose-800/40 rounded-full" />
      <span className="w-1.5 h-1.5 rotate-45 border border-rose-700/50" />
      <span className="w-8 h-px bg-white/5" />
    </div>
  </div>
)
