import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 font-mono text-xs text-muted-foreground md:flex-row md:px-6">
          <span>{'// Built by Gabriel Miles F. Cañete'}</span>
          <span>REV. 2026 · Tacloban City, PH</span>
        </div>
      </footer>
    </>
  )
}
