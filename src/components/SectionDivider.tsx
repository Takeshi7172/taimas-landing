interface SectionDividerProps {
  reversed?: boolean
}

export function SectionDivider({ reversed = false }: SectionDividerProps) {
  return (
    <div className={`my-4 md:my-8 section-divider${reversed ? ' section-divider-reversed' : ''}`} />
  )
}
