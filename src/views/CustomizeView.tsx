import { useState } from 'react'
import { MainLink } from '../components/MainLink'
import { HomeLayout } from '../layout/HomeLayout'

const bottomTexts = {
  armor: 'Customize your armor for multiplayer.',
  weapons: 'Customize your weapon accessories for multiplayer.',
  vehicles: 'Customize your vehicle accessories for multiplayer.',
  body: 'Customize how your Spartan and AI appear in multiplayer.',
  id: 'Customize your nameplate, stance and more.',
}

export const CustomizeView = () => {
  const [bottomText, setBottomText] = useState(bottomTexts.armor)

  return (
    <HomeLayout>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-end">
          <div className="flex w-[600px] flex-col gap-4">
            <MainLink
              to="armor"
              onHighlight={() => setBottomText(bottomTexts.armor)}
            >
              Armor Hall
            </MainLink>
            <MainLink
              to="weapons"
              onHighlight={() => setBottomText(bottomTexts.weapons)}
            >
              Weapons Bench
            </MainLink>
            <MainLink
              to="vehicles"
              onHighlight={() => setBottomText(bottomTexts.vehicles)}
            >
              Vehicle Bay
            </MainLink>
            <MainLink
              to="body"
              onHighlight={() => setBottomText(bottomTexts.body)}
            >
              Body &amp; AI
            </MainLink>
            <MainLink to="id" onHighlight={() => setBottomText(bottomTexts.id)}>
              Spartan ID
            </MainLink>
          </div>
          <div className="px-10 pt-16 pb-24 text-xl italic tracking-wider text-white/60">
            {bottomText}
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
