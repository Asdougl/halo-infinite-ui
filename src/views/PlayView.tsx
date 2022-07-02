import { BattlePass } from '../components/BattlePass'
import { Button } from '../components/Button'
import { HomeLayout } from '../layout/HomeLayout'

export const PlayView = () => {
  return (
    <HomeLayout>
      <div className="grid w-full grid-cols-2">
        <div className="flex w-[600px] flex-col justify-end gap-4">
          <Button main>Campaign</Button>
          <Button main>Multiplayer</Button>
          <Button main>Academy</Button>
          <Button main>Custom Game</Button>
          <div className="px-10 pt-16 pb-24 text-xl italic tracking-wider text-white/60">
            Fight hard. Die well.
          </div>
        </div>
        <div className="flex items-start justify-end">
          <BattlePass />
        </div>
      </div>
    </HomeLayout>
  )
}
