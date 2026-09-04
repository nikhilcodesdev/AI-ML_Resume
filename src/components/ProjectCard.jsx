import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

function ProjectVisual({ project }) {
  if (project.id === 'databeagle') {
    return (
      <svg viewBox="0 0 640 280" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="db" x1="0" x2="1">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect width="640" height="280" fill="#0c1018" />
        <circle cx="90" cy="140" r="36" fill="none" stroke="url(#db)" />
        <circle cx="320" cy="90" r="22" fill="none" stroke="#a78bfa" strokeOpacity="0.6" />
        <circle cx="520" cy="170" r="48" fill="none" stroke="#5eead4" strokeOpacity="0.45" />
        <path d="M126 140 L298 96" stroke="#5eead4" strokeOpacity="0.5" />
        <path d="M342 98 L472 160" stroke="#7dd3fc" strokeOpacity="0.45" />
        <rect x="200" y="180" width="240" height="36" rx="8" fill="#5eead4" fillOpacity="0.08" stroke="#5eead4" strokeOpacity="0.3" />
        <text x="320" y="204" textAnchor="middle" fill="#dbe7ef" fontSize="14" fontFamily="Manrope, sans-serif">
          Intelligent Search
        </text>
      </svg>
    )
  }
  if (project.id === 'content-lens') {
    return (
      <svg viewBox="0 0 640 280" className="h-full w-full" aria-hidden="true">
        <rect width="640" height="280" fill="#100e18" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={70 + i * 100}
            y={60 + (i % 2) * 20}
            width="86"
            height="140"
            rx="12"
            fill="#a78bfa"
            fillOpacity={0.08 + i * 0.03}
            stroke="#a78bfa"
            strokeOpacity="0.35"
          />
        ))}
        <circle cx="320" cy="140" r="34" fill="none" stroke="#7dd3fc" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 640 280" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="280" fill="#0b1416" />
      <rect x="90" y="90" width="140" height="90" rx="16" fill="none" stroke="#5eead4" />
      <rect x="410" y="90" width="140" height="90" rx="16" fill="none" stroke="#7dd3fc" />
      <path d="M230 135 H410" stroke="#a78bfa" strokeDasharray="6 6" />
      <circle cx="320" cy="135" r="8" fill="#5eead4" />
      <text x="320" y="220" textAnchor="middle" fill="#dbe7ef" fontSize="14" fontFamily="Manrope, sans-serif">
        Firmware Over-The-Air
      </text>
    </svg>
  )
}

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.article layout className="h-full">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group card flex h-full w-full flex-col overflow-hidden text-left transition duration-300 hover:-translate-y-1.5 hover:border-accent-cyan/40 hover:shadow-glow"
      >
        <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent}`}>
          <div className="transition duration-500 group-hover:scale-[1.04]">
            <ProjectVisual project={project} />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-accent-cyan">{project.client}</p>
          <h3 className="mt-2 font-display text-2xl text-white">{project.name}</h3>
          <p className="mt-1 text-sm text-mist-400">{project.subtitle}</p>
          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-mist-300">{project.overview}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-mist-200 transition duration-300 group-hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            View details
            <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
        </div>
      </button>
    </motion.article>
  )
}
