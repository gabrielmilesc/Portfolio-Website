'use client'

import { useEffect, useState } from 'react'
import { Menu, X, TerminalSquare } from 'lucide-react'

const links = [
  { href: '#Home', label: 'Home', id: 'Home' },
  { href: '#Experience', label: 'Experience', id: 'Experience' },
  { href: '#Projects', label: 'Projects', id: 'Projects' },
  { href: '#Skills', label: 'Skills', id: 'Skills' },
  { href: '#Contact', label: 'Contact', id: 'Contact' },
  {
    href: './assets/Canete_CV.pdf',
    label: 'Resume',
    id: 'Resume',
    download: true,
  },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const link of links) {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
          <TerminalSquare className="size-5 text-primary" aria-hidden="true" />
          <span>
            GMC<span className="text-primary"></span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              download={link.download}
              target={link.download ? '_blank' : undefined}
              rel={link.download ? 'noopener noreferrer' : undefined}
              className={`rounded px-3 py-2 font-mono text-sm transition-colors ${
                active === link.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              
              {link.label}
              
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-2">
            {links.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 font-mono text-sm ${
                  active === link.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <span className="text-primary/60">0{i + 1}.</span> {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
