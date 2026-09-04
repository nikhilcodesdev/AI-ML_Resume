import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Github, Mail, MapPin, Phone } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { profile } from '../data/portfolio'

const initial = { name: '', email: '', subject: '', message: '' }

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const reduce = useReducedMotion()

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!isEmail(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.subject.trim()) next.subject = 'Please add a subject.'
    if (!form.message.trim() || form.message.trim().length < 12) {
      next.message = 'Please include a short message (at least 12 characters).'
    }
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      setStatus('error')
      return
    }
    setStatus('ready')
  }

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio inquiry')}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
  )}`

  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'subject', label: 'Subject', type: 'text' },
  ]

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection>
          <p className="eyebrow">Contact</p>
          <h2 className="display mt-3">Let’s build something intelligent</h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            <a href={`mailto:${profile.email}`} className="card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:border-accent-cyan/30">
              <Mail className="text-accent-cyan" size={18} />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-mist-400">Email</p>
                <p className="text-white">{profile.email}</p>
              </div>
            </a>
            <a href={profile.phoneHref} className="card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:border-accent-cyan/30">
              <Phone className="text-accent-cyan" size={18} />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-mist-400">Phone</p>
                <p className="text-white">{profile.phone}</p>
              </div>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:border-accent-cyan/30">
              <Github className="text-accent-cyan" size={18} />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-mist-400">GitHub</p>
                <p className="text-white">{profile.githubLabel}</p>
              </div>
            </a>
            <div className="card flex items-center gap-4 p-5">
              <MapPin className="text-accent-cyan" size={18} />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-mist-400">Location</p>
                <p className="text-white">{profile.location}</p>
              </div>
            </div>
          </div>

          <form className="card p-5 sm:p-7" onSubmit={onSubmit} noValidate>
            <p className="text-sm text-mist-400">
              This form is ready for an email service. Until one is configured, validated messages can be opened in your email client.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.name} className={field.name === 'subject' ? 'sm:col-span-2' : ''}>
                  <span className="text-sm text-mist-300">{field.label}</span>
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent-cyan/50"
                    autoComplete={field.name === 'name' ? 'name' : field.name}
                  />
                  {errors[field.name] && <span className="mt-1 block text-xs text-red-300">{errors[field.name]}</span>}
                </label>
              ))}
              <label className="sm:col-span-2">
                <span className="text-sm text-mist-300">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent-cyan/50"
                />
                {errors.message && <span className="mt-1 block text-xs text-red-300">{errors.message}</span>}
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-full bg-accent-cyan px-5 py-3 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Validate message
              </button>
              {status === 'ready' && (
                <a href={mailto} className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white">
                  Open in email client
                </a>
              )}
            </div>
            <AnimatePresence>
              {status === 'error' && (
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-sm text-red-300"
                >
                  Please correct the highlighted fields.
                </motion.p>
              )}
              {status === 'ready' && (
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-accent-cyan"
                >
                  Form is valid. No backend email service is configured, so nothing was sent automatically.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  )
}
