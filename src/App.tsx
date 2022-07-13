import { Route, Routes, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { CommunityView } from './views/CommunityView'
import { CustomizeView } from './views/CustomizeView'
import { PlayView } from './views/PlayView'
import { ShopView } from './views/ShopView'
import { StartView } from './views/StartView'
import InfiniteBg from './assets/infinitebg.png'
import { MultiplayerView } from './views/multiplayer/MultiplayerView'

function App() {
  const { pathname } = useLocation()

  return (
    <div
      className={classNames(
        'h-screen w-screen bg-cover bg-center bg-no-repeat',
        {
          'bg-black/80 bg-blend-darken': !pathname.match(
            /^\/(play|community)?$/
          ),
        }
      )}
      style={{ backgroundImage: `url(${InfiniteBg})` }}
    >
      <Routes>
        <Route path="/" element={<StartView />} />
        <Route path="shop" element={<ShopView />} />
        <Route path="customize" element={<CustomizeView />} />
        <Route path="community" element={<CommunityView />} />
        <Route path="play">
          <Route path="" element={<PlayView />} />
          <Route path="multiplayer/*" element={<MultiplayerView />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
