import React from "react"
import {
  FolderGit2, Mail, User,
  GraduationCap, Briefcase, Target, MapPin,
  Code2, Globe, ArrowRight, Sparkles,
} from "lucide-react"
import { profileData, experiencesData, projectsData, skillsCategories } from "@/data/portfolioData"
import type { NavTab } from "./Sidebar"
import { SectionHeading } from "./SectionHeading"
import { CountUp } from "./CountUp"
import { Reveal } from "./Reveal"
import { SpotlightCard } from "./SpotlightCard"

interface AboutSectionProps {
  setActiveTab?: (tab: NavTab) => void
}

export const AboutSection: React.FC<AboutSectionProps> = ({ setActiveTab }) => {
  const totalSkills = skillsCategories.reduce((acc, cat) => acc + cat.items.length, 0)

  const stats = [
    { value: projectsData.length, suffix: "", label: "Proyek Website" },
    { value: experiencesData.length, suffix: "", label: "Pengalaman" },
    { value: totalSkills, suffix: "+", label: "Skill & Tools" },
  ]

  const infoItems = [
    { label: "Nama", value: profileData.name, icon: User },
    { label: "Pendidikan", value: profileData.education, icon: GraduationCap },
    { label: "Bidang", value: profileData.field, icon: Briefcase },
    { label: "Fokus", value: profileData.focus, icon: Target },
    { label: "Lokasi", value: profileData.location, icon: MapPin },
    { label: "Email", value: profileData.email, icon: Mail, href: `mailto:${profileData.email}` },
    { label: "GitHub", value: "github.com/rezadesky", icon: Code2, href: profileData.github },
    { label: "LinkedIn", value: "linkedin.com/in/reza-saputra", icon: Globe, href: profileData.linkedin },
  ]

  return (
    <div className="space-y-8 sm:space-y-12 pb-4">

      {/* ── Section Header ── */}
      <h1 className="sr-only">Reza Saputra (Reza Desky) — Full Stack Web Developer dari Banda Aceh, Indonesia</h1>
      <SectionHeading
        script="A"
        rest="bout"
        ariaLabel="Tentang"
        index="01"
        description={profileData.bioShort}
      />

      {/* ── Stats Strip — satu permukaan, dibagi hairline, angka mono besar ── */}
      <Reveal>
        <SpotlightCard className="grid grid-cols-3 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden">
          {stats.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className={`group relative px-3 py-4 sm:px-6 sm:py-6 text-center transition-colors duration-200 hover:bg-rose-950/20 ${i > 0 ? "border-l border-white/[0.06]" : ""}`}
            >
              <div className="font-mono text-2xl sm:text-4xl font-bold text-white tabular-nums leading-none group-hover:text-rose-300 transition-colors">
                <CountUp value={value} />{suffix}
              </div>
              <div className="text-[9px] sm:text-[10px] text-muted-foreground mt-2 sm:mt-3 font-mono uppercase tracking-[0.18em]">{label}</div>
            </div>
          ))}
        </SpotlightCard>
      </Reveal>

      {/* ── Bio Cards ── */}
      <Reveal delay={0.06}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Long bio */}
        <div className="lg:col-span-3 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-5 sm:p-7 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-rose-400" />
            <span className="text-[10px] sm:text-[11px] font-bold text-rose-400 uppercase tracking-[0.18em] font-mono">Profil &amp; Background</span>
          </div>
          <div className="space-y-3 sm:space-y-4 text-[13px] sm:text-sm leading-[1.8] text-muted-foreground">
            <p>{profileData.bioMain1}</p>
            <p>{profileData.bioMain2}</p>
          </div>
          {/* Tanda tangan */}
          <div className="pt-2 flex items-center gap-3">
            <span aria-hidden="true" className="font-imperial text-3xl text-rose-400/90 leading-none select-none">
              {profileData.name}
            </span>
            <span aria-hidden="true" className="flex-1 h-px bg-gradient-to-r from-rose-800/40 to-transparent" />
          </div>
        </div>

        {/* Quick snapshot */}
        <div className="lg:col-span-2 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-5 sm:p-7 flex flex-col gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span className="text-[10px] sm:text-[11px] font-bold text-rose-400 uppercase tracking-[0.18em] font-mono">Quick Snapshot</span>
          </div>
          <div className="space-y-0 flex-1 divide-y divide-white/5">
            {[
              { k: "Status", v: "Open to Opportunities" },
              { k: "Role Target", v: "Web Developer" },
              { k: "Tersedia", v: "Magang · Freelance · Kolaborasi" },
            ].map(({ k, v }) => (
              <div key={k} className="flex flex-col gap-0.5 py-3">
                <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/70 uppercase tracking-[0.18em]">{k}</span>
                <span className="text-[13px] sm:text-sm font-semibold text-white">{v}</span>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-900/30 text-[10px] sm:text-[11px] text-rose-300 font-mono leading-relaxed">
            Stack: HTML · CSS · JS · PHP · Laravel · MySQL
          </div>
        </div>
      </div>
      </Reveal>

      {/* ── Info Grid ── */}
      <Reveal delay={0.08}>
      <div className="space-y-3">
        <span className="text-[10px] sm:text-[11px] font-mono text-muted-foreground/70 uppercase tracking-[0.28em]">Detail Informasi</span>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5">
          {infoItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-rose-900/50 hover:bg-white/[0.035] transition-all duration-200 space-y-1.5"
              >
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-muted-foreground/70 uppercase tracking-[0.14em]">
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500/70 shrink-0 group-hover:text-rose-400 transition-colors" />
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12px] sm:text-[13px] font-semibold text-foreground hover:text-rose-400 transition-colors block truncate"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-[12px] sm:text-[13px] font-semibold text-foreground truncate">{item.value}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      </Reveal>

      {/* ── CTA Banner ── */}
      <Reveal delay={0.08}>
      <div className="relative rounded-2xl border border-rose-900/40 bg-rose-950/20 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden">
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-rose-600/80 via-rose-800/40 to-transparent" />
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">Tertarik Berkolaborasi?</h3>
          <p className="text-[13px] text-muted-foreground">Lihat proyek saya atau hubungi saya langsung.</p>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab?.("projects")}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-600 text-white text-[13px] font-bold transition-all cursor-pointer shadow-[0_10px_24px_-10px_rgba(225,29,72,0.55)] hover:-translate-y-px"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            Proyek
          </button>
          <button
            onClick={() => setActiveTab?.("contact")}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-[13px] font-bold transition-all cursor-pointer hover:-translate-y-px"
          >
            <Mail className="w-3.5 h-3.5" />
            Kontak
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
      </Reveal>

    </div>
  )
}
