import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export default function TechBadge({ skill }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const tooltipId = useId()

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        className="group w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:bg-white/[0.06] hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70"
        aria-describedby={open ? tooltipId : undefined}
      >
        <span className="block text-sm font-semibold text-mist-50 transition group-hover:scale-[1.02]">
          {skill.name}
        </span>
        <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-mist-400">
          {skill.category}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: reduce ? 0 : 0.18 }}
            className="pointer-events-none absolute left-0 z-30 mt-2 w-[min(18rem,70vw)] rounded-xl border border-white/15 bg-ink-800/95 p-3.5 text-sm text-mist-100 shadow-card backdrop-blur-xl"
          >
            <p className="font-semibold text-white">
              {skill.name} — {skill.category}
            </p>
            <p className="mt-1.5 leading-relaxed text-mist-300">{skill.summary}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
