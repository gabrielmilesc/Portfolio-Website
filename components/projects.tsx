import { Monitor, ShieldCheck, Grid2x2,} from 'lucide-react'
import { SectionHeading } from './section-heading'

const projects = [
  {
    icon: Monitor,
    title: 'Point-of-Sale & Inventory System',
    desc: 'Full-featured POS platform with real-time inventory tracking, low-stock alerts, live product search, dynamic cart updates, and a sales analytics dashboard exporting to CSV/PDF. Integrates payment processing with role-based access for Admin, Cashier, and Manager.',
    tags: ['Inventory Tracking', 'Payments', 'Role-Based Access'],
  },
  {
    icon: ShieldCheck,
    title: 'PRO8 Internal Web Systems',
    desc: 'Role-based internal IT operations platform for SuperAdmin, Admin, IT Personnel, and Staff — covering ticketing, task management, team messaging, and event coordination, with real-time notifications and AI-powered face detection login.',
    tags: ['IT Ticketing', 'Face Detection Auth', 'Real-Time Updates'],
  },
  {
    icon: Grid2x2,
    title: 'INTERNMATCH',
    desc: 'AI-powered placement system that scans and verifies student requirements for internship and apprenticeship placement — built end to end from requirements gathering through panel-approved delivery.',
    tags: ['AI Verification', 'Capstone Project', 'Stakeholder Mgmt'],
  },

]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading index="02" title="Systems Built" command="" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 md:p-8"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded border border-primary/30 bg-primary/10">
                <project.icon className="size-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
