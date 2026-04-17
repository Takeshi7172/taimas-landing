interface SectionDividerProps {
  reversed?: boolean
}

export function SectionDivider({ reversed = false }: SectionDividerProps) {
  void reversed
  return <div className="h-8 md:h-12" aria-hidden />
}
