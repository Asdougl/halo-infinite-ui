import { useState } from 'react'
import { MainLink } from '../components/MainLink'
import { HomeLayout } from '../layout/HomeLayout'

const bottomTexts = {
  theatre: 'View films and post-game results of multiplayer matches.',
  'popular-modes': 'View the most played custom game modes.',
  bookmarks: 'View your bookmarked files.',
  files: 'View your files.',
}

export const CommunityView = () => {
  const [bottomText, setBottomText] = useState(bottomTexts.theatre)
  return (
    <HomeLayout>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-end">
          <div className="flex w-[600px] flex-col gap-4">
            <MainLink
              to="theatre"
              onHighlight={() => setBottomText(bottomTexts.theatre)}
            >
              Theater
            </MainLink>
            <MainLink
              to="popular-modes"
              onHighlight={() => setBottomText(bottomTexts['popular-modes'])}
            >
              Popular Modes
            </MainLink>
            <MainLink
              to="bookmarks"
              onHighlight={() => setBottomText(bottomTexts.bookmarks)}
            >
              My Bookmarks
            </MainLink>
            <MainLink
              to="files"
              onHighlight={() => setBottomText(bottomTexts.files)}
            >
              My Files
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
