import { ReactNode } from 'react'
import { Dot } from '../components/Dot'
import { Footer } from './Footer'

interface NestedLayoutProps {
  children: ReactNode
  className?: string
  path: [string, string]
}

export const NestedLayout = ({
  children,
  className,
  path,
}: NestedLayoutProps) => {
  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <div className="flex items-center justify-start py-10">
        <div className="h-[2px] w-10 bg-white/40"></div>
        <div className="relative h-2 w-2 border-2 border-white/40">
          <div className="absolute top-full left-1/2 mt-[2px] h-96 w-[2px] -translate-x-1/2 bg-gradient-to-b from-white/40 to-white/0"></div>
        </div>
        <div className="h-[2px] w-1/3 bg-white/40"></div>
        <div className="h-[2px] w-64 bg-gradient-to-r from-white/40 to-white/0"></div>
      </div>
      <div className="flex flex-grow flex-col px-24 pb-16">
        <h1 className="flex items-center gap-6 pb-10 text-3xl uppercase tracking-[0.25em] text-white">
          <span className="opacity-60">{path[0]}</span>
          <Dot />
          <span>{path[1]}</span>
        </h1>
        {children}
      </div>
      <Footer />
    </div>
  )
}
