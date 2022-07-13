import { useState } from 'react'
import { MainLink } from '../../components/MainLink'
import { Scrolls } from '../../components/Scrolls'
import { playlists } from '../../util/playlists'

export const ChooseView = () => {
  const [focusedPlaylist, setFocusedPlaylist] = useState(playlists[0])

  return (
    <>
      <div className="flex flex-grow items-center">
        <div className="border border-white/40 p-2">
          <img
            src={focusedPlaylist.imgSrc}
            alt={focusedPlaylist.label}
            className="aspect-video"
          />
        </div>
      </div>
      <Scrolls className="h-[348px]">
        <div className="flex flex-col gap-2 p-2">
          {playlists.map((playlist) => (
            <MainLink
              key={playlist.id}
              to={`playlist?name=${playlist.id}`}
              onHighlight={() => setFocusedPlaylist(playlist)}
            >
              {playlist.label}
            </MainLink>
          ))}
        </div>
      </Scrolls>
    </>
  )
}
