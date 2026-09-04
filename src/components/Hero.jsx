import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import photo from '../assets/nikhil-profile.webp'

export default function Hero() {
  const reduce = useReducedMotion()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-violet/10 blur-3xl" />
        <div className="absolute right-[8%] top-40 h-64 w-64 rounded-full bg-accent-cyan/10 blur-3xl" />
      </div>

      <div className="section-shell grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Experienced AI/ML engineer</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent-blue sm:text-xl">{profile.title}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-mist-400">{profile.stackLine}</p>
          <h2 className="mt-6 max-w-xl font-display text-2xl font-semibold leading-snug text-mist-50 sm:text-[1.85rem]">
            {profile.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist-300">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-accent-cyan px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
            >
              View Projects
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </button>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent-violet/50 hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-mist-200 transition hover:text-white"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-mist-400">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-accent-cyan">
              <Mail size={16} />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[400px]"
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="absolute inset-8 rounded-[2.2rem] bg-gradient-to-br from-accent-cyan/25 via-accent-violet/15 to-transparent blur-2xl" />
          <div className="gradient-border relative overflow-hidden rounded-[2rem] bg-ink-800 p-3 shadow-card">
            <div className="group overflow-hidden rounded-[1.55rem]">
              <img
                src={photo}
                alt="Professional photograph of Nikhil, AI/ML Full Stack Developer"
                width="1254"
                height="1254"
                className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
