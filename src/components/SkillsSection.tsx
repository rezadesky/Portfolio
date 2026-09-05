import React from "react"
import { motion } from "motion/react"
import { Cpu, Code2, Server, Database, Wrench, HeartHandshake } from "lucide-react"
import { profileData, skillsCategories } from "@/data/portfolioData"
import { TechLogo } from "./TechLogos"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Database": Database,
  "Tools & Technologies": Wrench,
  "Soft Skills": HeartHandshake,
}

export const SkillsSection: React.FC = () => (
  <div className="space-y-8 sm:space-y-12 pb-4">

    {/* ── Header ── */}
    <SectionHeading
      script="S"
      rest="kills"
      ariaLabel="Keahlian"
      index="02"
      description={profileData.skillsDescription}
    />

    {/* ── Grid ── */}
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
      {skillsCategories.map((cat, catIdx) => {
        const Icon = categoryIconMap[cat.category] ?? Cpu
        const hasLevels = cat.items.some((i) => i.level !== undefined)

        return (
          <Reveal key={catIdx} delay={(catIdx % 2) * 0.07}>
          <div
            className="h-full rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-5 sm:p-6 space-y-4 sm:space-y-5"
          >
            {/* Category header */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-900/30 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{cat.category}</h3>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground/70 font-mono uppercase tracking-[0.18em]">
                  {cat.items.length} {hasLevels ? "teknologi" : "item"}
                </p>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            {hasLevels ? (
              <div className="space-y-3.5 sm:space-y-4">
                {cat.items.map((skill, idx) => (
                  <div key={idx} className="group space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
                        <TechLogo name={skill.name} className="w-4 h-4 shrink-0" />
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-rose-400/90 font-bold tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="relative w-full h-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.9, delay: 0.08 * idx, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #9f1239, #fb7185)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.03] hover:border-rose-900/50 hover:bg-white/[0.05] transition-all text-[12px] font-semibold text-foreground cursor-default"
                  >
                    <TechLogo name={skill.name} className="w-3.5 h-3.5 shrink-0" />
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>
          </Reveal>
        )
      })}
    </div>
  </div>
)
