export function SectionHeading({
  index,
  title,
  command,
}: {
  index: string
  title: string
  command: string
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm text-primary">{`> ${command}`}</p>
      <h2 className="flex items-baseline gap-3 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/60 via-border to-transparent" aria-hidden="true" />
    </div>
  )
}
