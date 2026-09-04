import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!project) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Close project details"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-ink-900 p-5 shadow-card sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <p className="pr-10 text-xs uppercase tracking-[0.18em] text-accent-cyan">
              {project.client}
              {project.extraClients?.length ? ` · ${project.extraClients.join(' · ')}` : ''}
            </p>
            <h3 id="project-modal-title" className="mt-2 font-display text-3xl text-white">
              {project.name}
            </h3>
            <p className="mt-1 text-mist-400">{project.subtitle}</p>
            <p className="mt-2 text-sm text-mist-400">Category: {project.category}</p>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-white">Overview</h4>
            <p className="mt-2 leading-relaxed text-mist-200">{project.overview}</p>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-white">Responsibilities</h4>
            <ul className="mt-3 space-y-2 text-sm text-mist-300">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                  {item}
                </li>
              ))}
            </ul>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-white">Technologies</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mist-200">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
