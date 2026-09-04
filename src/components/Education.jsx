import { GraduationCap } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { education } from '../data/education'

export default function Education() {
  const item = education[0]

  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection>
          <p className="eyebrow">Education</p>
          <h2 className="display mt-3">Academic foundation</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10">
          <article className="group card flex flex-col gap-6 bg-gradient-to-r from-white/[0.04] via-transparent to-accent-violet/[0.05] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-cyan/30 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent-cyan transition duration-300 group-hover:scale-110 group-hover:border-accent-cyan/40">
                <GraduationCap />
              </span>
              <div>
                <h3 className="font-display text-2xl text-white">{item.degree}</h3>
                <p className="mt-2 text-mist-200">{item.school}</p>
                <p className="mt-1 text-sm text-mist-400">{item.location}</p>
              </div>
            </div>
            <p className="font-display text-2xl font-semibold tracking-wide text-accent-blue sm:text-right">
              {item.years}
            </p>
          </article>
        </AnimatedSection>
      </div>
    </section>
  )
}
