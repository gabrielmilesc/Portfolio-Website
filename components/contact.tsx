import { Mail, Phone, MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.093.682-.219.682-.487 0-.24-.009-.876-.014-1.72-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .27.18.585.688.486A10.02 10.02 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.451 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  )
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.926-1.956 1.875v2.251h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading index="04" title="Get In Touch" command="" />

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I&apos;m open to IT support roles, web development work, and system-building
              projects. Whether you have a question, an opportunity, or just want to
              connect my inbox is always open. I&apos;ll get back to you as soon as I can.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:gabrielmilesc@gmail.com"
                className="flex items-center gap-3 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                gabrielmilesc@gmail.com
              </a>
              <p className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                (0917) 323-4682
              </p>
              <p className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                Tacloban City, Philippines
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="mailto:gabrielmilesc@gmail.com"
                aria-label="Email Gabriel"
                className="inline-flex size-11 items-center justify-center rounded border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Mail className="size-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/gabrielmilesc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex size-11 items-center justify-center rounded border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielmilescanete/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex size-11 items-center justify-center rounded border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a  
                href="https://www.facebook.com/Milescanete01/"
                target="_blank"
                 rel="noopener noreferrer"
                aria-label="Facebook profile"
                className="inline-flex size-11 items-center justify-center rounded border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                 <FacebookIcon className="size-5" />
              </a>
              
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}
