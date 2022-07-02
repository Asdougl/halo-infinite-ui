import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavButtonProps {
  children: React.ReactNode
  to: string
}

export const NavButton = ({ children, to }: NavButtonProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `w-72 px-6 py-2 text-left ${
          isActive
            ? 'border-4 border-white text-white'
            : 'border-2 border-white/70 text-white/70'
        } flex items-center text-2xl uppercase tracking-widest`
      }
    >
      {children}
    </NavLink>
  )
}
