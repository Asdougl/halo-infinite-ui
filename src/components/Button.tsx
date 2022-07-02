import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  main?: boolean
}

export const Button = ({ children, main }: ButtonProps) => {
  return (
    <button className="group relative uppercase text-white focus:outline-none">
      <div className="relative transition-transform group-hover:-translate-x-2 group-hover:-translate-y-1 group-focus:-translate-x-2 group-focus:-translate-y-1">
        <div className="p-1">
          <div
            className={`h-full w-full px-5 py-3 text-xl uppercase tracking-widest group-focus:bg-white group-focus:text-black ${
              main ? 'text-left' : 'text-center'
            }`}
          >
            {children}
          </div>
        </div>
        {/* Border top */}
        <div
          className={`absolute top-0 w-full border-t-2 ${
            main
              ? 'hidden border-white/70 group-hover:block group-focus:block'
              : 'border-white/80'
          }`}
        >
          <div className="absolute left-0 top-0 h-1 border-r-2 border-white/70"></div>
          <div className="absolute right-0 top-0 h-1 border-l-2 border-white/70"></div>
        </div>
        {/* Border right */}
        <div
          className={`absolute right-0 top-0 h-full py-2 ${
            main
              ? 'hidden border-white/70 group-hover:block group-focus:block'
              : 'border-white/80'
          }`}
        >
          <div className="h-full border-r-2 border-white/30"></div>
        </div>
        {/* Border bottom */}
        <div
          className={`absolute bottom-0 w-full border-b-2 border-white/70 ${
            main
              ? 'hidden border-white/70 group-hover:block group-focus:block'
              : 'border-white/80'
          }`}
        >
          <div className="absolute left-0 bottom-0 h-1 border-r-2 border-white/70"></div>
          <div className="absolute right-0 bottom-0 h-1 border-l-2 border-white/70"></div>
        </div>
        {/* Border left */}
        <div
          className={`absolute left-0 top-0 h-full py-2 ${
            main
              ? 'hidden border-white/70 group-hover:block group-focus:block'
              : 'border-white/80'
          }`}
        >
          <div className="h-full border-r-2 border-white/30"></div>
        </div>
      </div>
      {/* Border bottom */}
      <div className=" absolute bottom-0 w-full">
        <div
          className={`border-r-2 ${
            main ? 'border-white/50' : 'border-white/80'
          } absolute left-0 bottom-[2px] h-1`}
        ></div>
        <div
          className={`border-l-2 ${
            main ? 'border-white/50' : 'border-white/80'
          } absolute right-0 bottom-[2px] h-1`}
        ></div>
        <div
          className={`border-b-2 ${
            main ? 'border-white/50' : 'border-white/80'
          } absolute bottom-0 w-full`}
        ></div>
      </div>
    </button>
  )
}
