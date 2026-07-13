import { Code2, Database, Network, Wrench, FileText, Layers } from 'lucide-react'
import { SectionHeading } from './section-heading'

const skillGroups = [
  {
    icon: Code2,
    category: 'Languages & Web',
    skills: ['Python', 'Java', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: Database,
    category: 'Databases',
    skills: ['Database Management Systems (DBMS)', 'SQL'],
  },
  {
    icon: Network,
    category: 'Networking',
    skills: ['Networking Fundamentals', 'Network Configuration'],
  },
  {
    icon: Wrench,
    category: 'IT Support',
    skills: ['Hardware & Software Troubleshooting', 'Technical Support', 'IT Maintenance'],
  },
  {
    icon: FileText,
    category: 'Data & Documentation',
    skills: ['Accurate Data Encoding', 'Digital Records Management', 'Report Preparation'],
  },
  {
    icon: Layers,
    category: 'Systems & Tools',
    skills: ['System Analysis', 'Documentation', 'Computer Configuration', 'MS Office Suite'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading index="03" title="Tech Stack" command="" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <group.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-mono text-sm font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
