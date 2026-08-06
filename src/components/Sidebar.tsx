import React from "react"
import {
  User, Cpu, FolderGit2, Briefcase, Mail,
  ChevronLeft, ChevronRight, BadgeCheck, Phone, MapPin,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { profileData } from "@/data/portfolioData"

/* ── Inline SVG icons ── */
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

/* ── Types ── */
export type NavTab = "about" | "skills" | "projects" | "experience" | "contact"
interface NavItem {
  id: NavTab
  label: string
  icon: React.ComponentType<{ className?: string }>
  count?: string
}
interface SidebarProps {
  activeTab: NavTab
  setActiveTab: (tab: NavTab) => void
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

export const navItems: NavItem[] = [
  { id: "about",      label: "About",      icon: User       },
  { id: "skills",     label: "Skills",     icon: Cpu        },
  { id: "projects",   label: "Projects",   icon: FolderGit2, count: "4" },
  { id: "experience", label: "Experience", icon: Briefcase  },
  { id: "contact",    label: "Contact",    icon: Mail       },
]

const socialLinks = [
  { href: (d: typeof profileData) => d.github,  icon: GithubIcon,  label: "GitHub",    color: "hover:text-white" },
  { href: (d: typeof profileData) => d.linkedin, icon: LinkedinIcon, label: "LinkedIn",  color: "hover:text-sky-400" },
  { href: (d: typeof profileData) => `mailto:${d.email}`, icon: Mail, label: "Email",   color: "hover:text-rose-400" },
  { href: (d: typeof profileData) => `https://wa.me/${d.whatsapp.replace(/[^0-9]/g, "")}`, icon: Phone, label: "WhatsApp", color: "hover:text-emerald-400" },
]

/* ── Imperial-style name: "R"eza "S"aputra ── */
const StyledName = ({ name }: { name: string }) => (
  <span className="flex items-baseline gap-0 select-none leading-none">
    {name.split(" ").map((word, i, arr) => (
      <span key={i} className="flex items-baseline">
        <span className="font-imperial text-[22px] text-rose-500 leading-none">{word[0]}</span>
        <span className="font-bold text-white text-[13px] tracking-tight">
          {word.slice(1)}{i < arr.length - 1 ? "\u00a0" : ""}
        </span>
      </span>
    ))}
  </span>
)

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab, setActiveTab, isCollapsed, setIsCollapsed,
}) => (
  <aside
    className={cn(
      "relative flex flex-col h-screen border-r border-white/[0.06] transition-all duration-300 z-30",
      "bg-[#090102]",
      isCollapsed ? "w-[64px]" : "w-[240px]"
    )}
  >
    {/* Right edge glow */}
    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-rose-900/20 to-transparent pointer-events-none" />

    {/* ═══ HEADER ═══ */}
    <div className={cn(
      "flex items-center h-14 px-4 border-b border-white/[0.05] shrink-0",
      isCollapsed ? "justify-center" : "justify-between"
    )}>
      {!isCollapsed ? (
        <div className="flex items-baseline gap-0.5 select-none">
          <span className="font-imperial text-[28px] text-rose-500 leading-none">P</span>
          <span className="text-[13px] font-black text-white tracking-tight uppercase">ortfolio</span>
        </div>
      ) : (
        <span className="font-imperial text-[24px] text-rose-500 leading-none">P</span>
      )}

      {!isCollapsed && (
        <button
          onClick={() => setIsCollapsed(true)}
          aria-label="Perkecil menu samping"
          className="hidden md:flex w-6 h-6 items-center justify-center rounded-md text-muted-foreground/50 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      )}
      {isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          aria-label="Perluas menu samping"
          className="hidden md:flex absolute -right-3 top-[52px] w-6 h-6 items-center justify-center rounded-full border border-white/10 bg-[#090102] text-muted-foreground hover:text-white transition-colors cursor-pointer shadow-lg z-50"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      )}
    </div>

    {/* ═══ PROFILE ═══ */}
    {!isCollapsed ? (
      <div className="mx-3 mt-4 mb-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        {/* Subtle top accent stripe */}
        <div className="h-[2px] bg-gradient-to-r from-rose-900/0 via-rose-700/50 to-rose-900/0" />

        <div className="p-4 flex flex-col items-center text-center gap-3">
          {/* Avatar */}
          <div className="relative mt-1">
            <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-rose-900 via-rose-800 to-zinc-900 flex items-center justify-center text-white font-black text-lg ring-2 ring-rose-700/30 ring-offset-2 ring-offset-[#090102] shadow-lg">
              RZ
            </div>
            <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#090102]" />
          </div>

          {/* Name */}
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1">
              <StyledName name={profileData.name} />
              <BadgeCheck className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            </div>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
              {profileData.title}
            </p>
          </div>

          {/* Location pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.03] text-[10px] text-muted-foreground font-mono">
            <MapPin className="w-2.5 h-2.5 text-rose-500/60 shrink-0" />
            <span className="truncate max-w-[140px]">{profileData.location}</span>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            Open to Work
          </div>
        </div>
      </div>
    ) : (
      <div className="flex justify-center py-4">
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-900 to-zinc-900 flex items-center justify-center text-white font-black text-[11px] ring-1 ring-rose-800/30">
            RZ
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-[1.5px] ring-[#090102]" />
        </div>
      </div>
    )}

    {/* ═══ NAV ═══ */}
    <nav className="flex-1 px-2 py-2 space-y-0.5 overflow-y-auto mt-2">
      {!isCollapsed && (
        <p className="px-3 pb-1.5 text-[9px] font-mono text-muted-foreground/40 uppercase tracking-[0.3em]">
          Menu
        </p>
      )}

      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.id
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab(item.id)
            }}
            title={isCollapsed ? item.label : undefined}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "w-full flex items-center gap-3 rounded-xl text-[13px] font-medium transition-all duration-150 group cursor-pointer",
              isCollapsed ? "justify-center px-0 py-2.5" : "px-3 py-2.5",
              isActive
                ? "bg-rose-950/70 text-white border border-rose-800/40"
                : "text-muted-foreground hover:text-white hover:bg-white/[0.04]"
            )}
          >
            {/* Active indicator stripe */}
            {isActive && !isCollapsed && (
              <span className="absolute left-0 w-0.5 h-5 bg-rose-500 rounded-r-full" />
            )}

            <Icon className={cn(
              "w-4 h-4 shrink-0 transition-transform duration-150",
              isActive ? "text-rose-400" : "text-muted-foreground/70 group-hover:text-white group-hover:scale-105"
            )} />

            {!isCollapsed && (
              <>
                <span className="flex-1 text-left">{item.label}</span>
                {item.count && (
                  <span className={cn(
                    "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md",
                    isActive ? "bg-rose-800/50 text-rose-300" : "bg-white/[0.05] text-muted-foreground/60"
                  )}>
                    {item.count}
                  </span>
                )}
              </>
            )}
          </a>
        )
      })}
    </nav>

    {/* ═══ FOOTER ═══ */}
    <div className="border-t border-white/[0.05] p-3 space-y-3 shrink-0">
      {/* Social links */}
      <div className={cn(
        "flex gap-1.5",
        isCollapsed ? "flex-col items-center" : "items-center justify-center"
      )}>
        {(isCollapsed ? socialLinks.slice(0, 2) : socialLinks).map(({ href, icon: Icon, label, color }) => (
          <a
            key={label}
            href={href(profileData)}
            target="_blank"
            rel="noreferrer"
            title={label}
            aria-label={label}
            className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-150 cursor-pointer",
              "text-muted-foreground/60 border-white/[0.05] bg-white/[0.02]",
              "hover:border-white/10 hover:bg-white/[0.06]",
              color
            )}
          >
            <Icon className="w-[14px] h-[14px]" />
          </a>
        ))}
      </div>

      {/* Version */}
      {!isCollapsed && (
        <p className="text-[9px] font-mono text-center text-muted-foreground/30 tracking-widest uppercase">
          v1.0.0 · Portfolio Reza
        </p>
      )}
    </div>
  </aside>
)
