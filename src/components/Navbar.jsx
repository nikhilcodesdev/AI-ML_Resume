import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar({ activeId }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`section-shell flex items-center justify-between py-3 transition-all duration-500 ${
          scrolled ? 'mt-3' : 'mt-0'
        }`}
        aria-label="Primary"
      >
        <div
          className={`flex w-full items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled ? 'glass shadow-card' : 'bg-transparent'
          }`}
        >
          <a
            href="#home"
            className="font-display text-sm font-bold tracking-[0.18em] text-white"
            onClick={(e) => {
              e.preventDefault()
              go('home')
            }}
          >
            {profile.shortLogo}
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      go(link.id)
                    }}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition ${
                      active ? 'text-white' : 'text-mist-400 hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId={reduce ? undefined : 'nav-pill'}
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              go('contact')
            }}
            className="hidden rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-2 text-sm font-semibold text-accent-cyan transition hover:border-accent-cyan/60 hover:bg-accent-cyan/20 lg:inline-flex"
          >
            Contact
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,88vw)] flex-col border-l border-white/10 bg-ink-900/96 p-6 shadow-card backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="font-display text-sm tracking-[0.18em] text-white">{profile.shortLogo}</p>
              <button type="button" className="rounded-lg p-2 text-white" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.04 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    className={`block rounded-xl px-4 py-3 text-lg ${
                      activeId === link.id ? 'bg-white/10 text-white' : 'text-mist-300'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      go(link.id)
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          aria-label="Close navigation overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  )
}
