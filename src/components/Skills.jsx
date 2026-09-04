import AnimatedSection from './AnimatedSection'
import TechBadge from './TechBadge'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection>
          <p className="eyebrow">Technical skills</p>
          <h2 className="display mt-3">Engineering stack dashboard</h2>
          <p className="mt-4 max-w-2xl text-mist-300">
            Capabilities grouped from professional experience with AI/ML-powered search, React.js interfaces, Python services, and production delivery.
          </p>
        </AnimatedSection>

        <div className="mt-10 space-y-8">
          {skillCategories.map((group, i) => (
            <AnimatedSection key={group.id} delay={i * 0.05} className="card p-5 sm:p-7">
              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-display text-xl text-white">{group.title}</h3>
                <p className="text-sm text-mist-400">{group.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {group.skills.map((skill) => (
                  <TechBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
