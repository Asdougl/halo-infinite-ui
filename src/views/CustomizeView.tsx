import { Button } from '../components/Button'
import { HomeLayout } from '../layout/HomeLayout'

export const CustomizeView = () => {
  return (
    <HomeLayout>
      <div className="grid grid-cols-2">
        <div className="flex w-[600px] flex-col justify-end gap-4">
          <Button main>Armor Hall</Button>
          <Button main>Weapons Bench</Button>
          <Button main>Vehicle Bay</Button>
          <Button main>Body &amp; AI</Button>
          <Button main>Spartan ID</Button>
          <div className="px-10 pt-16 pb-24 text-xl italic tracking-wider text-white/60">
            Cutomise your armor for multiplayer.
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
