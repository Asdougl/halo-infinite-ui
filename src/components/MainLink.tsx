import React from 'react'
import { Link } from 'react-router-dom'

interface MainLinkProps {
  children: React.ReactNode
  to: string
}

export const MainLink = ({ to, children }: MainLinkProps) => {
  return (
    <Link
      to={to}
      className="group relative uppercase text-white focus:outline-none"
    >
      <div className="relative transition-transform group-hover:-translate-x-2 group-hover:-translate-y-1 group-focus:-translate-x-2 group-focus:-translate-y-1">
        <div className="p-1">
          <div
            className={`h-full w-full px-5 py-3 text-left text-xl uppercase tracking-widest group-focus:bg-white group-focus:text-black`}
          >
            {children}
          </div>
        </div>
        {/* Border top */}
        <div
          className={`absolute top-0 hidden w-full border-t-2 border-white/70 group-hover:block group-focus:block`}
        >
          <div className="absolute left-0 top-0 h-1 border-r-2 border-white/70"></div>
          <div className="absolute right-0 top-0 h-1 border-l-2 border-white/70"></div>
        </div>
        {/* Border right */}
        <div
          className={`absolute right-0 top-0 hidden h-full border-white/70 py-2 group-hover:block group-focus:block`}
        >
          <div className="h-full border-r-2 border-white/30"></div>
        </div>
        {/* Border bottom */}
        <div
          className={`absolute bottom-0 hidden w-full border-b-2 border-white/70 group-hover:block group-focus:block`}
        >
          <div className="absolute left-0 bottom-0 h-1 border-r-2 border-white/70"></div>
          <div className="absolute right-0 bottom-0 h-1 border-l-2 border-white/70"></div>
        </div>
        {/* Border left */}
        <div
          className={`absolute left-0 top-0 hidden h-full border-white/70 py-2 group-hover:block group-focus:block`}
        >
          <div className="h-full border-r-2 border-white/30"></div>
        </div>
      </div>
      {/* Border bottom */}
      <div className=" absolute bottom-0 w-full">
        <div
          className={`absolute left-0 bottom-[2px] h-1 border-r-2 border-white/50`}
        ></div>
        <div
          className={`absolute right-0 bottom-[2px] h-1 border-l-2 border-white/50`}
        ></div>
        <div
          className={`absolute bottom-0 w-full border-b-2 border-white/50`}
        ></div>
      </div>
    </Link>
  )
}
