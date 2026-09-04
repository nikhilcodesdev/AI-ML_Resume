import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { experience } from '../data/experience'

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0]?.id)
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection>
          <p className="eyebrow">Experience</p>
          <h2 className="display mt-3">Professional timeline</h2>
        </AnimatedSection>

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-accent-cyan via-accent-violet/50 to-transparent sm:left-[15px]" />
          <div className="space-y-6">
            {experience.map((job) => {
              const open = openId === job.id
              return (
                <AnimatedSection key={job.id} className="relative pl-10 sm:pl-12">
                  <span className="absolute left-0 top-7 h-6 w-6 rounded-full border border-accent-cyan/50 bg-ink-900 shadow-glow" />
                  <article className="card overflow-hidden">
                    <button
                      type="button"
                      className="flex w-full flex-col gap-3 p-5 text-left sm:flex-row sm:items-start sm:justify-between sm:p-7"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : job.id)}
                    >
                      <div>
                        <p className="text-sm text-accent-cyan">{job.period}</p>
                        <h3 className="mt-1 font-display text-2xl text-white">{job.role}</h3>
                        <p className="mt-1 text-mist-300">{job.company}</p>
                        <p className="mt-1 text-sm text-mist-400">{job.extendedRole}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm text-mist-400">
                        <MapPin size={14} />
                        {job.location}
                        <ChevronDown className={`transition ${open ? 'rotate-180' : ''}`} size={18} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={reduce ? { height: 'auto' } : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/8 px-5 pb-6 sm:px-7">
                            <p className="pt-5 text-mist-200">{job.summary}</p>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-mist-300">
                              {job.responsibilities.map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6 flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mist-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
