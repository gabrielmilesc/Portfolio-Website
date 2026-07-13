import { GraduationCap, Briefcase } from 'lucide-react'
import { SectionHeading } from './section-heading'

const experiences = [
  {
    role: 'IT Intern',
    org: 'Police Regional Office 8 (PRO-8)',
    meta: '2026 · Palo, Leyte',
    points: [
      'Provided technical support for office computers, printers, and software — hardware and software troubleshooting, routine maintenance, and system updates.',
      'Encoded, maintained, and organized digital records and IT documentation with a high degree of accuracy.',
      'Supported network setup, computer configuration, and day-to-day office technology operations, collaborating with staff to diagnose and resolve technical issues.',
    ],
    ref: 'REF — PCPT Jackeron Canuday',
  },
  {
    role: 'Project Manager',
    org: 'INTERNMATCH — AI-Powered Internship Placement System',
    meta: 'Capstone Project',
    points: [
      'Led INTERNMATCH, an AI-powered system built to scan and verify student requirements for internship and apprenticeship placement.',
      'Acted as the main point of contact for clients and stakeholders while guiding the team to keep tasks on track.',
      'Oversaw requirements gathering, system analysis, and testing — delivering and defending the completed system with academic panel approval.',
    ],
  },
  {
    role: 'Project Manager',
    org: 'PRO8 Internal Web Systems',
    meta: 'Internal Platform',
    points: [
      'Led development of an internal IT operations platform with role-based access for SuperAdmin, Admin, IT Personnel, and Staff.',
      'Delivered core modules for IT ticketing, task management, team messaging, and event coordination with real-time updates.',
      'Implemented AI-powered face detection for secure login authentication.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading index="" title="Experience" command="" />

        <div className="relative space-y-8 border-l border-border pl-6 md:pl-10">
          {experiences.map((exp) => (
            <article key={exp.org} className="relative rounded border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8">
              <span
                className="absolute -left-[29px] top-8 size-3 rounded-full border-2 border-primary bg-background md:-left-[45px]"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Briefcase className="size-4 text-primary" aria-hidden="true" />
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.org}</p>
                </div>
                <span className="rounded border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
                  {exp.meta}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-0.5 font-mono text-primary" aria-hidden="true">{'>'}</span>
                    {point}
                  </li>
                ))}
              </ul>
              {exp.ref && (
                <p className="mt-4 font-mono text-xs text-muted-foreground/70">{exp.ref}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
