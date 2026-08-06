import { useEffect, useState, type ReactNode } from "react"
import { MotionConfig, motion } from "motion/react"
import { Sidebar, type NavTab, navItems } from "@/components/Sidebar"
import { AboutSection } from "@/components/AboutSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ContactSection } from "@/components/ContactSection"

const VALID_TABS: NavTab[] = ["about", "skills", "projects", "experience", "contact"]

const TAB_TITLES: Record<NavTab, string> = {
  about: "Tentang",
  skills: "Keahlian",
  projects: "Proyek",
  experience: "Pengalaman",
  contact: "Kontak",
}

function getTabFromHash(): NavTab {
  const hash = window.location.hash.replace(/^#\/?/, "")
  return (VALID_TABS as string[]).includes(hash) ? (hash as NavTab) : "about"
}

const sections: Record<NavTab, () => ReactNode> = {
  about: () => <AboutSection setActiveTab={(tab) => navigateTo(tab)} />,
  skills: () => <SkillsSection />,
  projects: () => <ProjectsSection />,
  experience: () => <ExperienceSection />,
  contact: () => <ContactSection />,
}

function navigateTo(tab: NavTab) {
  if (tab !== getTabFromHash()) {
    window.location.hash = tab
  }
  const main = document.getElementById("main-scroll")
  if (main) main.scrollTop = 0
}

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>(getTabFromHash)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  useEffect(() => {
    const onHashChange = () => setActiveTab(getTabFromHash())
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    document.title = `${TAB_TITLES[activeTab]} — Reza Saputra | Web Developer Indonesia`
  }, [activeTab])

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab)
    navigateTo(tab)
  }

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="flex h-[100dvh] overflow-hidden text-foreground relative"
        style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, #1a0308 0%, #0b0103 40%, #050001 100%)" }}
      >
        {/* Skip link */}
        <a
          href="#main-scroll"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-rose-700 focus:text-white focus:font-bold"
        >
          Lewati ke konten
        </a>

        {/* Ambient glow */}
        <div aria-hidden="true" className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-rose-950/20 blur-[200px] rounded-full pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-rose-900/10 blur-[180px] rounded-full pointer-events-none" />

        {/* ── Desktop Sidebar ── */}
        <div className="hidden md:block shrink-0 z-30">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>

        {/* ── Main content ── */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">

          {/* Mobile top bar */}
          <header className="md:hidden flex items-center justify-center px-4 h-12 border-b border-white/[0.05] bg-[#0b0103]/80 backdrop-blur-md shrink-0 z-20">
            <div className="flex items-baseline gap-0 select-none">
              <span className="font-imperial text-2xl text-rose-500 leading-none">P</span>
              <span className="text-sm font-black text-white uppercase tracking-tight">ortfolio&nbsp;</span>
              <span className="font-imperial text-2xl text-rose-500 leading-none">R</span>
              <span className="text-sm font-black text-white uppercase tracking-tight">eza&nbsp;</span>
              <span className="font-imperial text-2xl text-rose-500 leading-none">S</span>
              <span className="text-sm font-black text-white uppercase tracking-tight">aputra</span>
            </div>
          </header>

          {/* Scrollable content */}
          <main
            id="main-scroll"
            className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10"
          >
            <div className="max-w-4xl mx-auto pb-20 md:pb-0" aria-live="polite">
              {VALID_TABS.map((tab) => (
                <div
                  key={tab}
                  hidden={activeTab !== tab}
                  className={activeTab === tab ? "animate-fade-in" : undefined}
                >
                  {sections[tab]()}
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* ── Mobile Bottom Nav ── */}
        <nav aria-label="Navigasi utama" className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.07] bg-[#090102]/95 backdrop-blur-xl safe-bottom">
          <div className="flex items-center justify-around px-2 py-1.5">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabChange(item.id)
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className="relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-150 cursor-pointer flex-1 max-w-[72px]"
                >
                  {/* Active glow bg */}
                  {isActive && (
                    <motion.span
                      layoutId="bottomNavActive"
                      className="absolute inset-0 bg-rose-950/60 rounded-xl border border-rose-800/40"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`relative w-[18px] h-[18px] transition-colors ${
                    isActive ? "text-rose-400" : "text-muted-foreground/60"
                  }`} />
                  <span className={`relative text-[9px] font-semibold font-mono uppercase tracking-wide transition-colors ${
                    isActive ? "text-white" : "text-muted-foreground/50"
                  }`}>
                    {item.label}
                  </span>
                  {item.count && isActive && (
                    <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-rose-600 text-white text-[8px] font-bold flex items-center justify-center">
                      {item.count}
                    </span>
                  )}
                </a>
              )
            })}
          </div>
          {/* Safe area spacer for iOS */}
          <div className="h-[env(safe-area-inset-bottom)]" />
        </nav>
      </div>
    </MotionConfig>
  )
}
