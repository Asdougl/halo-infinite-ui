import { useState } from 'react'
import { BattlePass } from '../components/BattlePass'
import { MainLink } from '../components/MainLink'
import { HomeLayout } from '../layout/HomeLayout'

const bottomTexts = {
  campaign: 'Unravel the mysteries of Zeta Halo.',
  multiplaer: 'Play matches against other online players.',
  academy: 'Being your own legend, Spartan.',
  'custom-game': 'Create a local or online match with community content.',
}

export const PlayView = () => {
  const [bottomText, setBottomText] = useState(bottomTexts.campaign)

  return (
    <HomeLayout>
      <div className="grid w-full grid-cols-2">
        <div className="flex flex-col justify-end">
          <div className="flex w-[600px] flex-col gap-4">
            <MainLink
              to="campaign"
              onHighlight={() => setBottomText(bottomTexts.campaign)}
            >
              Campaign
            </MainLink>
            <MainLink
              to="multiplayer"
              onHighlight={() => setBottomText(bottomTexts.multiplaer)}
            >
              Multiplayer
            </MainLink>
            <MainLink
              to="academy"
              onHighlight={() => setBottomText(bottomTexts.academy)}
            >
              Academy
            </MainLink>
            <MainLink
              to="custom-game"
              onHighlight={() => setBottomText(bottomTexts['custom-game'])}
            >
              Custom Game
            </MainLink>
          </div>
          <div className="px-10 pt-16 pb-24 text-xl italic tracking-wider text-white/60">
            {bottomText}
          </div>
        </div>
        <div className="flex items-start justify-end">
          <BattlePass />
        </div>
      </div>
    </HomeLayout>
  )
}
