import { Github, Mail } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-accent-blue">{profile.title}</p>
          <p className="mt-3 text-sm text-mist-400">{profile.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm text-mist-300">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-3 text-sm">
          <a href={profile.github} className="inline-flex items-center gap-2 text-mist-300 hover:text-white" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-mist-300 hover:text-white">
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
      <p className="section-shell mt-8 text-sm text-mist-400">© 2026 Nikhil. All rights reserved.</p>
    </footer>
  )
}
