import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Brain, Layout, Server, Sparkles, Timer } from 'lucide-react'
import AnimatedSection, { Stagger } from './AnimatedSection'
import { fadeItem } from '../lib/motionVariants'
import { highlights, profile, stats } from '../data/portfolio'
import photo from '../assets/nikhil-profile.webp'

const icons = { Timer, Brain, Layout, Server, Sparkles }

function Counter({ value, suffix = '', active }) {
  const [n, setN] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!active) return
    if (reduce) {
      setN(value)
      return
    }
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 900)
      setN(Math.round(value * p))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, reduce, value])

  return (
    <span>
      {n}
      {suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection>
          <p className="eyebrow">About</p>
          <h2 className="display mt-3">A full-stack builder of intelligent software</h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="gradient-border mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:mx-0">
                <img
                  src={photo}
                  alt="Nikhil, AI/ML Full Stack Developer"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-mist-400">{profile.title}</p>
                <p className="mt-3 text-base leading-relaxed text-mist-200">{profile.about}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-mist-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Stagger className="grid gap-3">
            {stats.map((stat) => {
              const Icon = icons[stat.icon]
              return (
                <motion.article
                  key={stat.id}
                  variants={fadeItem}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition duration-300 hover:-translate-y-1 hover:border-accent-cyan/35 hover:shadow-glow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-mist-400">{stat.label}</p>
                      <p className="mt-2 font-display text-xl font-semibold text-white" ref={stat.numeric === false ? undefined : ref}>
                        {stat.numeric === false ? (
                          stat.value
                        ) : (
                          <Counter value={stat.value} suffix={stat.suffix} active={inView} />
                        )}
                      </p>
                    </div>
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-accent-cyan transition duration-300 group-hover:rotate-6 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mist-400">{stat.detail}</p>
                </motion.article>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
