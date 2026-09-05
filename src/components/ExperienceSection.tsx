import React from "react"
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { experiencesData } from "@/data/portfolioData"
import { TechLogo } from "./TechLogos"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"

export const ExperienceSection: React.FC = () => (
  <div className="space-y-8 sm:space-y-12 pb-4">

    {/* ── Header ── */}
    <SectionHeading
      script="E"
      rest="xperience"
      ariaLabel="Pengalaman"
      index="04"
      description="Perjalanan akademik, organisasi, dan pengalaman yang telah membentuk kemampuan saya."
    />

    {/* ── Timeline ── */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-rose-800/60 via-rose-900/30 to-transparent" />

      <div className="space-y-4 sm:space-y-6 pl-9 sm:pl-12">
        {experiencesData.map((exp, idx) => (
          <Reveal key={exp.id || idx} delay={Math.min(idx * 0.05, 0.25)}>
          <div className="relative group">

            {/* Timeline dot */}
            <div className="absolute -left-[25px] sm:-left-[34px] top-5 sm:top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-rose-700 bg-[#0b0103] group-hover:border-rose-500 group-hover:shadow-[0_0_12px_rgba(244,63,94,0.45)] transition-all duration-200 flex items-center justify-center">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-rose-600 group-hover:bg-rose-400 transition-colors" />
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-rose-900/50 transition-all duration-300 p-5 sm:p-6 space-y-3 sm:space-y-4">

              {/* Header */}
              <div className="flex flex-col gap-2">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-[15px] text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-rose-400 shrink-0" />
                    {exp.role}
                  </h3>
                  <p className="text-[13px] font-semibold text-rose-400/80 ml-6">{exp.company}</p>
                </div>

                {/* Period + Location pills */}
                <div className="flex flex-wrap items-center gap-1.5 ml-6">
                  <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-muted-foreground bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-lg">
                    <Calendar className="w-3 h-3 text-rose-500/70 shrink-0" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-muted-foreground bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-lg">
                    <MapPin className="w-3 h-3 text-rose-500/70 shrink-0" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              {/* Descriptions */}
              <ul className="space-y-2">
                {exp.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-600/60 shrink-0 mt-0.5" />
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
                      className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg border border-white/[0.06] bg-white/[0.03] text-[10px] sm:text-[11px] font-semibold text-muted-foreground"
                    >
                      <TechLogo name={item} className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
)
