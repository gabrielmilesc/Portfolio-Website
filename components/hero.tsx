import Image from 'next/image'
import { MapPin, Phone, Mail, ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:px-6">
        <div>
          <p className="mb-4 font-mono text-sm text-primary">
            {'> whoami'}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Hi, I'm Gabriel Miles
            <br />
            F. Cañete
          </h1>
          <p className="mt-3 font-mono text-base text-primary md:text-lg">
            IT Systems Builder · Web Developer
          </p>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I build reliable IT systems and modern web applications from troubleshooting
            hardware in the field to shipping role-based platforms with real-time features.
            Turning ideas into secure, efficient, and user-friendly digital solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-primary" aria-hidden="true" />
              Tacloban City, PH
            </span>
            <span className="inline-flex items-center gap-2 rounded border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <Phone className="size-3.5 text-primary" aria-hidden="true" />
              (0917) 323-4682
            </span>
            <span className="inline-flex items-center gap-2 rounded border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <Mail className="size-3.5 text-primary" aria-hidden="true" />
              gabrielmilesc@gmail.com
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get-in-touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowDown className="size-4" aria-hidden="true" />
              scroll to explore
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-2 rounded border border-primary/30" aria-hidden="true" />
          <div className="relative overflow-hidden rounded border border-border bg-card">
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
              <span className="size-2.5 rounded-full bg-destructive/70" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-primary/50" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-primary" aria-hidden="true" />
            </div>
            <Image
              src="/images/miles1.png"
              alt="Gabriel Miles F. Cañete"
              width={400}
              height={440}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
