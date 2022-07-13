import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getPlaylist, Playlist } from '../../util/playlists'

export const StartQueueView = () => {
  const [playlist, setPlaylist] = useState<Playlist | null>(null)
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const id = params.get('name')

  useEffect(() => {
    const foundPlaylist = getPlaylist(id || '')
    if (foundPlaylist) {
      setPlaylist(foundPlaylist)
    } else {
      navigate('../')
    }
  }, [id, navigate])

  if (!playlist) return null

  return (
    <>
      <div className="flex flex-grow items-center">
        <div className="border border-white/40 p-2">
          <img
            src={playlist.imgSrc}
            alt={playlist.label}
            className="aspect-video"
          />
        </div>
      </div>
    </>
  )
}
