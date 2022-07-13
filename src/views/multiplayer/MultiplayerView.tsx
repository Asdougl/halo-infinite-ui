import { Route, Routes } from 'react-router-dom'
import { BattlePass } from '../../components/BattlePass'
import { NestedLayout } from '../../layout/NestedLayout'
import { ChooseView } from './ChooseView'
import { StartQueueView } from './StartQueueView'

export const MultiplayerView = () => {
  return (
    <NestedLayout path={['play', 'multiplayer']}>
      <div className="grid flex-grow grid-cols-2">
        <div className="flex h-full w-[750px] flex-col">
          <Routes>
            <Route path="playlist" element={<StartQueueView />} />
            <Route path="*" element={<ChooseView />} />
          </Routes>
        </div>
        <div className="flex items-start justify-end">
          <BattlePass />
        </div>
      </div>
    </NestedLayout>
  )
}
