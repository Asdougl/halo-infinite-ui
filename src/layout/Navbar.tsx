import { Indicator } from '../components/Indicator'
import { NavButton } from '../components/NavButton'

export const Navbar = () => {
  return (
    <div className="flex items-center gap-4 py-8 px-12">
      <Indicator keyboard="q" controller="rb" />
      <NavButton to="/play">Play</NavButton>
      <NavButton to="/customize">Customize</NavButton>
      <NavButton to="/community">Community</NavButton>
      <NavButton to="/shop">Shop</NavButton>
      <Indicator keyboard="e" controller="lb" />
    </div>
  )
}
