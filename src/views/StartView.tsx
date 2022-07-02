import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/infinite.png'

export const StartView = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const onEnter = (evt: KeyboardEvent) => {
      if (evt.key === 'Enter') {
        navigate('/play')
      }
    }

    document.addEventListener('keydown', onEnter)

    return () => {
      document.removeEventListener('keydown', onEnter)
    }
  }, [navigate])

  return (
    <div className="relative min-h-screen">
      <img
        src={Logo}
        alt="Halo Infinite"
        width={600}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-16"
      />
      <div className="absolute bottom-1/4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-3 text-2xl tracking-widest text-white">
        <span className="uppercase">Press</span>
        <span className="rounded-sm bg-white px-3 py-[2px] text-sm font-bold text-gray-700">
          Enter
        </span>{' '}
        <span className="uppercase">TO PLAY</span>
      </div>
    </div>
  )
}
