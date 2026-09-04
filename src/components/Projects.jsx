import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { engineeringFlow, profile } from '../data/portfolio'
import { projectFilters, projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)
  const reduce = useReducedMotion()

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter],
  )

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection>
          <p className="eyebrow">Projects</p>
          <h2 className="display mt-3">Selected product work</h2>
          <p className="mt-4 max-w-2xl text-mist-300">
            Production and proof-of-concept applications spanning AI/ML search, content discovery, and IoT firmware delivery.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10 card overflow-hidden p-5 sm:p-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-display text-xl text-white">AI/ML engineering stack</h3>
            <p className="text-xs text-mist-400">Visual representation of technical focus — not a project-specific architecture.</p>
          </div>
          <div className="mt-6 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {engineeringFlow.map((step, i) => (
              <div key={step.id} className="flex flex-1 items-center gap-3">
                <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-semibold text-white">
                  {step.label}
                </div>
                {i < engineeringFlow.length - 1 && (
                  <ArrowRight
                    size={16}
                    className={`hidden shrink-0 text-accent-cyan md:block ${reduce ? '' : 'animate-pulse'}`}
                  />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <LayoutGroup>
          <div className="mt-8 flex flex-wrap gap-2">
            {projectFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`relative rounded-full px-4 py-2 text-sm ${
                  filter === item ? 'text-ink-950' : 'text-mist-300 hover:text-white'
                }`}
              >
                {filter === item && (
                  <motion.span
                    layoutId={reduce ? undefined : 'filter-pill'}
                    className="absolute inset-0 rounded-full bg-accent-cyan"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                >
                  <ProjectCard project={project} onOpen={setActive} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <AnimatedSection className="mt-14 card flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="font-display text-2xl text-white">Want to know more about my experience?</h3>
            <p className="mt-2 text-sm text-mist-400">Download or view the full resume used as the source for this portfolio.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.resumePath}
              download
              className="inline-flex rounded-full bg-accent-cyan px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
            >
              Download Resume
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-cyan/40"
            >
              View Resume
            </a>
          </div>
        </AnimatedSection>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
