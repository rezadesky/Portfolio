import React from "react"
import {
  FolderGit2, Mail, User,
  GraduationCap, Briefcase, Target, MapPin,
  Code2, Globe, ArrowRight, Sparkles,
} from "lucide-react"
import { profileData } from "@/data/portfolioData"
import type { NavTab } from "./Sidebar"

interface AboutSectionProps {
  setActiveTab?: (tab: NavTab) => void
}

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-3 sm:p-4 rounded-xl border border-white/6 bg-white/[0.025]">
    <div className="text-lg sm:text-xl font-extrabold text-white">{value}</div>
    <div className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5 font-mono uppercase tracking-wider">{label}</div>
  </div>
)

export const AboutSection: React.FC<AboutSectionProps> = ({ setActiveTab }) => {
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
    <div className="space-y-7 sm:space-y-10 pb-4">

      {/* ── Section Header ── */}
      <h1 className="sr-only">Reza Saputra — Full Stack Web Developer</h1>
      <div className="space-y-2 sm:space-y-3">
        <h2 aria-label="Tentang" className="flex items-baseline gap-1.5 select-none">
          <span aria-hidden="true" className="font-imperial text-6xl sm:text-7xl text-rose-500 leading-none">A</span>
          <span aria-hidden="true" className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">bout</span>
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
          {profileData.bioShort}
        </p>
        <div className="w-10 h-[2px] bg-gradient-to-r from-rose-600 to-rose-900/0 rounded-full" />
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <StatCard value="2023" label="Mulai Belajar" />
        <StatCard value="4+" label="Proyek" />
        <StatCard value="6+" label="Teknologi" />
      </div>

      {/* ── Bio Cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Long bio */}
        <div className="lg:col-span-3 rounded-2xl border border-white/6 bg-white/[0.025] p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
            <span className="text-[10px] sm:text-xs font-bold text-rose-400 uppercase tracking-wider font-mono">Profil &amp; Background</span>
          </div>
          <div className="space-y-2.5 sm:space-y-3 text-[12px] sm:text-[13px] leading-[1.75] text-muted-foreground">
            <p>{profileData.bioMain1}</p>
            <p>{profileData.bioMain2}</p>
          </div>
        </div>

        {/* Quick snapshot */}
        <div className="lg:col-span-2 rounded-2xl border border-white/6 bg-white/[0.025] p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
            <span className="text-[10px] sm:text-xs font-bold text-rose-400 uppercase tracking-wider font-mono">Quick Snapshot</span>
          </div>
          <div className="space-y-0 flex-1 divide-y divide-white/5">
            {[
              { k: "Status", v: "Open to Opportunities" },
              { k: "Role Target", v: "Web Developer" },
              { k: "Tersedia", v: "Magang · Freelance · Kolaborasi" },
            ].map(({ k, v }) => (
              <div key={k} className="flex flex-col gap-0.5 py-2.5">
                <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{k}</span>
                <span className="text-[12px] sm:text-[13px] font-semibold text-white">{v}</span>
              </div>
            ))}
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-rose-950/40 border border-rose-900/30 text-[10px] sm:text-[11px] text-rose-300 font-mono">
            Stack: HTML · CSS · JS · PHP · Laravel · MySQL
          </div>
        </div>
      </div>

      {/* ── Info Grid ── */}
      <div className="space-y-2.5 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] font-mono text-muted-foreground uppercase tracking-[0.2em]">Detail Informasi</span>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5">
          {infoItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group p-3 sm:p-3.5 rounded-xl border border-white/6 bg-white/[0.025] hover:border-rose-900/40 hover:bg-white/[0.04] transition-all duration-200 space-y-1.5"
              >
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500/70 shrink-0" />
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] sm:text-[12px] font-semibold text-foreground hover:text-rose-400 transition-colors block truncate"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-[11px] sm:text-[12px] font-semibold text-foreground truncate">{item.value}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="rounded-2xl border border-rose-900/30 bg-gradient-to-r from-rose-950/50 via-rose-950/30 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="space-y-0.5 sm:space-y-1">
          <h3 className="text-sm sm:text-base font-extrabold text-white">Tertarik Berkolaborasi?</h3>
          <p className="text-[12px] sm:text-[13px] text-muted-foreground">Lihat proyek saya atau hubungi saya langsung.</p>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab?.("projects")}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-700 hover:bg-rose-600 text-white text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            Proyek
          </button>
          <button
            onClick={() => setActiveTab?.("contact")}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            Kontak
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

    </div>
  )
}
