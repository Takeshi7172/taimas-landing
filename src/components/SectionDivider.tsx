interface SectionDividerProps {
  reversed?: boolean
}

export function SectionDivider({ reversed = false }: SectionDividerProps) {
  return (
    <div className="py-0">
      <div className={`h-px my-12 md:my-20 section-divider${reversed ? ' section-divider-reversed' : ''}`} />
    </div>
  )
}
