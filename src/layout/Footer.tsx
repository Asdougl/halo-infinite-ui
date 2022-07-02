import { useLocation } from 'react-router-dom'
import { Indicator } from '../components/Indicator'

export const Footer = () => {
  const location = useLocation()

  return (
    <footer className="flex h-16 items-center justify-between bg-black/40 px-8 text-white">
      <div className="flex items-center gap-2">
        {location.pathname.match(/\/(customize|community|shop)?/) ? (
          <>
            <Indicator keyboard="f" controller="x" />
            Something
          </>
        ) : (
          <>
            <Indicator keyboard="esc" controller="b" />
            Back
          </>
        )}
      </div>
      <div className="flex h-full items-center divide-x divide-white/40 bg-white/20 p-2">
        <div className="px-4">
          <div className="rounded bg-black/30 px-4 py-2 italic">Asdougl</div>
        </div>
        <div className="px-4">
          <Indicator keyboard="Y" controller="Menu" />
        </div>
        <div className="px-4">
          <Indicator keyboard="TAB" controller="VIEW" />
        </div>
        <div className="px-4">
          <Indicator keyboard="F1" controller="MENU" />
        </div>
      </div>
    </footer>
  )
}
