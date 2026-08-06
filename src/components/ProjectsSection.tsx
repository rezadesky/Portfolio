import React from "react"
import { ExternalLink, CheckCircle2 } from "lucide-react"
import { projectsData } from "@/data/portfolioData"
import { TechLogo } from "./TechLogos"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export const ProjectsSection: React.FC = () => (
  <div className="space-y-7 sm:space-y-10 pb-4">

    {/* ── Header ── */}
    <div className="space-y-2 sm:space-y-3">
        <h2 aria-label="Proyek" className="flex items-baseline gap-1.5 select-none">
          <span aria-hidden="true" className="font-imperial text-6xl sm:text-7xl text-rose-500 leading-none">P</span>
          <span aria-hidden="true" className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">rojects</span>
        </h2>
      <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
        Beberapa proyek yang telah saya kerjakan selama masa studi dan pembelajaran mandiri.
      </p>
      <div className="w-10 h-[2px] bg-gradient-to-r from-rose-600 to-rose-900/0 rounded-full" />
    </div>

    {/* ── Cards ── */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="group rounded-2xl border border-white/6 bg-white/[0.025] hover:border-rose-900/40 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col"
        >
          {/* Image */}
          <div className="relative h-36 sm:h-40 overflow-hidden bg-rose-950/30">
            <img
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0103] via-transparent to-transparent" />
            <span className="absolute bottom-2 left-3 text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/60 text-rose-300 border border-rose-900/40 backdrop-blur-sm uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-5 flex flex-col gap-3 sm:gap-4 flex-1">
            <div>
              <h3 className="font-bold text-[14px] sm:text-[15px] text-white group-hover:text-rose-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-muted-foreground leading-relaxed mt-1.5">
                {project.description}
              </p>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg border border-white/6 bg-white/[0.03] text-[10px] sm:text-[11px] font-semibold text-muted-foreground"
                >
                  <TechLogo name={tag} className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Features — hidden on very small screens to save space */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-1 mt-auto">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <CheckCircle2 className="w-3 h-3 text-rose-500/70 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>

            {/* Features compact for mobile */}
            <div className="sm:hidden flex flex-wrap gap-x-3 gap-y-1 mt-auto">
              {project.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <CheckCircle2 className="w-2.5 h-2.5 text-rose-500/70 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-5 py-3 border-t border-white/5 flex items-center gap-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-rose-700 hover:bg-rose-600 text-white text-[11px] sm:text-[12px] font-bold transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] text-foreground text-[11px] sm:text-[12px] font-bold transition-colors cursor-pointer"
            >
              <GithubIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Source
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
)
