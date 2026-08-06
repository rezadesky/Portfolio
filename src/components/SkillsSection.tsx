import React from "react"
import { motion } from "motion/react"
import { Cpu, Code2, Server, Database, Wrench, HeartHandshake } from "lucide-react"
import { profileData, skillsCategories } from "@/data/portfolioData"
import { TechLogo } from "./TechLogos"

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Database": Database,
  "Tools & Technologies": Wrench,
  "Soft Skills": HeartHandshake,
}

export const SkillsSection: React.FC = () => (
  <div className="space-y-7 sm:space-y-10 pb-4">

    {/* ── Header ── */}
    <div className="space-y-2 sm:space-y-3">
        <h2 aria-label="Keahlian" className="flex items-baseline gap-1.5 select-none">
          <span aria-hidden="true" className="font-imperial text-6xl sm:text-7xl text-rose-500 leading-none">S</span>
          <span aria-hidden="true" className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">kills</span>
        </h2>
      <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
        {profileData.skillsDescription}
      </p>
      <div className="w-10 h-[2px] bg-gradient-to-r from-rose-600 to-rose-900/0 rounded-full" />
    </div>

    {/* ── Grid ── */}
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
      {skillsCategories.map((cat, catIdx) => {
        const Icon = categoryIconMap[cat.category] ?? Cpu
        const hasLevels = cat.items.some((i) => i.level !== undefined)

        return (
          <div
            key={catIdx}
            className="rounded-2xl border border-white/6 bg-white/[0.025] p-4 sm:p-6 space-y-4 sm:space-y-5"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-950/60 border border-rose-900/30 flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
              </div>
              <div>
                <h3 className="text-[13px] sm:text-sm font-bold text-white">{cat.category}</h3>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                  {cat.items.length} {hasLevels ? "teknologi" : "item"}
                </p>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            {hasLevels ? (
              <div className="space-y-3 sm:space-y-4">
                {cat.items.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] font-semibold text-foreground">
                        <TechLogo name={skill.name} className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                        {skill.name}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-rose-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: 0.08 * idx, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #9f1239, #be123c)" }}
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
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/8 bg-white/[0.03] hover:border-rose-900/40 transition-all text-[11px] sm:text-[12px] font-semibold text-foreground cursor-default"
                  >
                    <TechLogo name={skill.name} className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  </div>
)
