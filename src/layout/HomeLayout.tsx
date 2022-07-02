import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

interface HomeLayoutProps {
  children: ReactNode
  className?: string
}

export const HomeLayout = ({ children, className }: HomeLayoutProps) => {
  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <Navbar />
      <div className="flex flex-grow px-12">{children}</div>
      <Footer />
    </div>
  )
}
