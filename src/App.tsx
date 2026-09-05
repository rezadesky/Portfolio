import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { MotionConfig, motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react"
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
  const [finePointer, setFinePointer] = useState(false)
  const reducedMotion = useReducedMotion()

  // Progres baca pada konten yang aktif
  const mainRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ container: mainRef })
  const progressScale = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })

  // Cahaya ambien yang mengikuti kursor (hanya pointer presisi, hormati reduced motion)
  const glowX = useMotionValue(-800)
  const glowY = useMotionValue(-800)
  const glowSpringX = useSpring(glowX, { stiffness: 55, damping: 18 })
  const glowSpringY = useSpring(glowY, { stiffness: 55, damping: 18 })

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)")
    const update = () => setFinePointer(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    glowX.set(e.clientX)
    glowY.set(e.clientY)
  }, [glowX, glowY])

  useEffect(() => {
    const onHashChange = () => setActiveTab(getTabFromHash())
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    document.title = `${TAB_TITLES[activeTab]} — Reza Saputra (Reza Desky) | Portfolio Web Developer`
  }, [activeTab])

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab)
    navigateTo(tab)
  }

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="flex h-[100dvh] overflow-hidden text-foreground relative"
        style={{ background: "radial-gradient(ellipse 90% 70% at 68% 18%, #170309 0%, #0b0103 46%, #040101 100%)" }}
        onMouseMove={handleMouseMove}
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

        {/* Film grain di atas seluruh permukaan */}
        <div aria-hidden="true" className="bg-grain absolute inset-0 z-[70] opacity-[0.05] pointer-events-none mix-blend-overlay" />

        {/* Cahaya ambien mengikuti kursor */}
        {finePointer && !reducedMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[5] h-[640px] w-[640px] rounded-full"
            style={{
              x: glowSpringX,
              y: glowSpringY,
              marginLeft: -320,
              marginTop: -320,
              background: "radial-gradient(circle, rgba(225,29,72,0.08) 0%, rgba(190,18,60,0.035) 38%, transparent 70%)",
            }}
          />
        )}

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
          {/* Progres baca */}
          <motion.div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 z-40 h-[2px] origin-left"
            style={{ scaleX: progressScale, background: "linear-gradient(90deg, #9f1239 0%, #fb7185 100%)" }}
          />
          {/* Dot grid samar, memudar ke tepi */}
          <div
            aria-hidden="true"
            className="bg-dotgrid absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ maskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, black 0%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, black 0%, transparent 75%)" }}
          />

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
            ref={mainRef}
            className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 relative"
          >
            <div className="max-w-4xl mx-auto pb-20 md:pb-0 relative" aria-live="polite">
              {VALID_TABS.map((tab) => (
                <div
                  key={tab}
                  hidden={activeTab !== tab}
                  className={activeTab === tab ? "animate-fade-in" : undefined}
                >
                  {sections[tab]()}
                </div>
              ))}

              {/* Footer — identitas konsisten untuk mesin pencari */}
              <footer className="mt-12 md:mt-16 pt-6 border-t border-white/5 pb-2 text-center space-y-1.5">
                <p className="font-imperial text-2xl text-rose-500/80 leading-none select-none">
                  Reza Saputra
                </p>
                <p className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em]">
                  Reza Saputra · Reza Desky · Reza Saputra Desky
                </p>
                <p className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-[0.18em]">
                  © {new Date().getFullYear()} — Full Stack Web Developer · Banda Aceh, Indonesia
                </p>
              </footer>
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
