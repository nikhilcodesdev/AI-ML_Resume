import { useEffect, useState } from 'react'
import { personJsonLd } from './data/portfolio'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sectionIds = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact']

export default function App() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.15, 0.35, 0.6] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
