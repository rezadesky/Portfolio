import React, { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { profileData } from "@/data/portfolioData"
import { TechLogo } from "./TechLogos"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"
import { SpotlightCard } from "./SpotlightCard"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const inputCls = "w-full px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-[13px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-rose-600/60 focus:bg-white/[0.045] focus:ring-2 focus:ring-rose-900/40 transition-all"

const contactCards = [
  { href: (d: typeof profileData) => `mailto:${d.email}`, icon: <Mail className="w-4 h-4" />, iconColor: "text-rose-400", label: "Email", value: (d: typeof profileData) => d.email },
  { href: (d: typeof profileData) => `https://wa.me/${d.whatsapp.replace(/[^0-9]/g, "")}`, icon: <Phone className="w-4 h-4" />, iconColor: "text-emerald-400", label: "WhatsApp", value: (d: typeof profileData) => d.whatsapp },
  { href: (d: typeof profileData) => d.github, icon: <GithubIcon className="w-4 h-4" />, iconColor: "text-foreground", label: "GitHub", value: () => "github.com/rezadesky" },
  { href: (d: typeof profileData) => d.linkedin, icon: <TechLogo name="LinkedIn" className="w-4 h-4" />, iconColor: "text-sky-400", label: "LinkedIn", value: () => "linkedin.com/in/reza-saputra" },
  { href: (d: typeof profileData) => d.instagram, icon: <InstagramIcon className="w-4 h-4" />, iconColor: "text-pink-400", label: "Instagram", value: () => "@reza_dsky" },
  { noLink: true, href: () => "#", icon: <MapPin className="w-4 h-4" />, iconColor: "text-rose-400", label: "Lokasi", value: (d: typeof profileData) => d.location },
]

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    const subject = encodeURIComponent(formData.subject || `Pesan dari ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name}\n${formData.email}`)
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 4000)
  }

  return (
    <div className="space-y-8 sm:space-y-12 pb-4">

      {/* ── Header ── */}
      <SectionHeading
        script="C"
        rest="ontact"
        ariaLabel="Kontak"
        index="05"
        description={profileData.contactDescription}
      />

      {/* ── Contact Cards ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        {contactCards.map((card, idx) => (
          <Reveal key={card.label} delay={Math.min(idx * 0.05, 0.3)}>
            <SpotlightCard
              className="group h-full p-4 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-rose-900/50 hover:bg-white/[0.045] transition-all duration-200 space-y-2.5"
              href={card.noLink ? undefined : card.href(profileData)}
              target={card.noLink ? undefined : "_blank"}
              rel={card.noLink ? undefined : "noreferrer"}
            >
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 group-hover:border-rose-900/40 transition-all flex items-center justify-center ${card.iconColor}`}>
                  {card.icon}
                </div>
                {card.noLink ? null : (
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                )}
              </div>
              <div>
                <div className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/70 uppercase tracking-[0.18em]">{card.label}</div>
                <div className="text-[12px] sm:text-[13px] font-semibold text-foreground mt-0.5 truncate">{card.value(profileData)}</div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      {/* ── Form ── */}
      <Reveal delay={0.06}>
      <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-900/30 flex items-center justify-center shrink-0">
            <MessageSquare className="w-4 h-4 text-rose-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Kirim Pesan Langsung</h3>
            <p className="text-[11px] text-muted-foreground/70">Respons dalam 1-2 hari kerja</p>
          </div>
        </div>

        <div className="h-px bg-white/5" />

        {formSubmitted ? (
          <div role="status" className="py-8 sm:py-10 text-center space-y-2 sm:space-y-3">
            <div className="w-14 h-14 rounded-full bg-rose-950/60 border border-rose-700/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-rose-400" />
            </div>
            <h4 className="text-base font-extrabold text-white">Pesan Terkirim!</h4>
            <p className="text-[13px] text-muted-foreground">Terima kasih! Saya akan segera merespons.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-[10px] font-semibold font-mono text-muted-foreground/70 uppercase tracking-[0.18em]">Nama *</label>
                <input id="contact-name" type="text" required placeholder="Nama lengkap" value={formData.name}
                  autoComplete="name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputCls} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-[10px] font-semibold font-mono text-muted-foreground/70 uppercase tracking-[0.18em]">Email *</label>
                <input id="contact-email" type="email" required placeholder="email@contoh.com" value={formData.email}
                  autoComplete="email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputCls} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className="text-[10px] font-semibold font-mono text-muted-foreground/70 uppercase tracking-[0.18em]">Subjek</label>
              <input id="contact-subject" type="text" placeholder="Diskusi Proyek / Kolaborasi" value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={inputCls} />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="text-[10px] font-semibold font-mono text-muted-foreground/70 uppercase tracking-[0.18em]">Pesan *</label>
              <textarea id="contact-message" required rows={4} placeholder="Tuliskan pesan Anda..." value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputCls} resize-none`} />
            </div>

            <button type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-600 text-white text-[13px] font-bold transition-all cursor-pointer w-full sm:w-auto justify-center sm:justify-start shadow-[0_10px_24px_-12px_rgba(225,29,72,0.6)] hover:shadow-[0_12px_28px_-10px_rgba(225,29,72,0.7)] hover:-translate-y-px">
              <Send className="w-3.5 h-3.5" />
              Kirim Pesan
            </button>
          </form>
        )}
      </div>
      </Reveal>

      {/* ── CTA Banner ── */}
      <Reveal delay={0.08}>
      <div className="relative rounded-2xl border border-rose-900/40 bg-rose-950/20 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden">
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-rose-600/80 via-rose-800/40 to-transparent" />
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">{profileData.contactCtaHeading}</h3>
          <p className="text-[13px] text-muted-foreground">{profileData.contactCtaBody}</p>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {[
            { href: profileData.github, icon: <GithubIcon className="w-3.5 h-3.5" />, label: "GitHub" },
            { href: profileData.linkedin, icon: <TechLogo name="LinkedIn" className="w-3.5 h-3.5" />, label: "LinkedIn" },
            { href: `mailto:${profileData.email}`, icon: <Mail className="w-3.5 h-3.5" />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white text-[12px] font-bold transition-all cursor-pointer hover:-translate-y-px">
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
      </Reveal>

    </div>
  )
}
