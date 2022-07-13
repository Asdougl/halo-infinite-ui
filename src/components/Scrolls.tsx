interface ScrollsProps {
  children: React.ReactNode
  className?: string
}

export const Scrolls = ({ children, className }: ScrollsProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="h-full overflow-y-auto pr-2">{children}</div>
      <div className="pointer-events-none absolute right-0 top-0 flex h-full w-2 flex-col items-center gap-2 py-4 text-white">
        <div className="absolute top-0 left-0 h-0 w-0 border-l-[4px] border-r-[4px] border-b-[6px] border-b-white border-l-transparent border-r-transparent"></div>
        <div className="relative flex-grow">
          <div className="full mx-[3px] h-full w-[2px] bg-white/50"></div>
        </div>
        <div className="absolute bottom-0 left-0 h-0 w-0 border-l-[4px] border-r-[4px] border-t-[6px] border-t-white border-l-transparent border-r-transparent"></div>
      </div>
    </div>
  )
}
