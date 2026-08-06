import React from "react"
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { experiencesData } from "@/data/portfolioData"
import { TechLogo } from "./TechLogos"

export const ExperienceSection: React.FC = () => (
  <div className="space-y-7 sm:space-y-10 pb-4">

    {/* ── Header ── */}
    <div className="space-y-2 sm:space-y-3">
        <h2 aria-label="Pengalaman" className="flex items-baseline gap-1.5 select-none">
          <span aria-hidden="true" className="font-imperial text-6xl sm:text-7xl text-rose-500 leading-none">E</span>
          <span aria-hidden="true" className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">xperience</span>
        </h2>
      <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
        Perjalanan akademik, organisasi, dan pengalaman yang telah membentuk kemampuan saya.
      </p>
      <div className="w-10 h-[2px] bg-gradient-to-r from-rose-600 to-rose-900/0 rounded-full" />
    </div>

    {/* ── Timeline ── */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-rose-800/60 via-rose-900/30 to-transparent" />

      <div className="space-y-4 sm:space-y-6 pl-8 sm:pl-12">
        {experiencesData.map((exp, idx) => (
          <div key={exp.id || idx} className="relative group">

            {/* Timeline dot */}
            <div className="absolute -left-[22px] sm:-left-[34px] top-4 sm:top-5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-rose-700 bg-[#0b0103] group-hover:border-rose-500 group-hover:bg-rose-950 transition-all duration-200 flex items-center justify-center">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-rose-600 group-hover:bg-rose-400 transition-colors" />
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-white/6 bg-white/[0.025] hover:border-rose-900/40 hover:bg-white/[0.04] transition-all duration-300 p-4 sm:p-6 space-y-3 sm:space-y-4">

              {/* Header */}
              <div className="flex flex-col gap-2">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-[14px] sm:text-[15px] text-white flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
                    {exp.role}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] font-semibold text-rose-400/80 ml-5 sm:ml-6">{exp.company}</p>
                </div>

                {/* Period + Location pills */}
                <div className="flex flex-wrap items-center gap-1.5 ml-5 sm:ml-6">
                  <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-muted-foreground bg-white/[0.04] border border-white/6 px-2 py-0.5 rounded-lg">
                    <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-500/70 shrink-0" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-muted-foreground bg-white/[0.04] border border-white/6 px-2 py-0.5 rounded-lg">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-500/70 shrink-0" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              {/* Descriptions */}
              <ul className="space-y-1.5 sm:space-y-2">
                {exp.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-[11px] sm:text-[13px] text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-600/60 shrink-0 mt-0.5" />
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              {exp.stack && exp.stack.length > 0 && (
                <div className="pt-1 flex flex-wrap gap-1 sm:gap-1.5">
                  {exp.stack.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg border border-white/6 bg-white/[0.03] text-[10px] sm:text-[11px] font-semibold text-muted-foreground"
                    >
                      <TechLogo name={item} className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
