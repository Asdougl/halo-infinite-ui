export interface Playlist {
  id: string
  label: string
  focus: boolean
  imgSrc: string
}

const playlistMap: Record<string, Playlist> = {
  'quick-play': {
    id: 'quick-play',
    label: 'Quick Play',
    focus: true,
    imgSrc:
      'https://wpassets.halowaypoint.com/wp-content/2021/12/Slayer_Playlist_1920x1080.jpg',
  },
  'bot-bootcamp': {
    id: 'bot-bootcamp',
    label: 'Bot Bootcamp',
    focus: false,
    imgSrc:
      'https://img.game-news24.com/2021/11/There-are-certain-types-of-players-who-want-to-choose-game-mode-instead-of-Quick-Play.jpeg',
  },
  'big-team-battle': {
    id: 'big-team-battle',
    label: 'Big Team Battle',
    focus: false,
    imgSrc:
      'https://img.game-news24.com/2021/11/There-are-certain-types-of-players-who-want-to-choose-game-mode-instead-of-Quick-Play.jpeg',
  },
  'land-grab': {
    id: 'land-grab',
    label: 'Land Grab',
    focus: false,
    imgSrc:
      'https://img.game-news24.com/2021/11/There-are-certain-types-of-players-who-want-to-choose-game-mode-instead-of-Quick-Play.jpeg',
  },
  'team-snipers': {
    id: 'team-snipers',
    label: 'Team Snipers',
    focus: false,
    imgSrc:
      'https://img.game-news24.com/2021/11/There-are-certain-types-of-players-who-want-to-choose-game-mode-instead-of-Quick-Play.jpeg',
  },
  swat: {
    id: 'swat',
    label: 'Tactical Slayer',
    focus: false,
    imgSrc:
      'https://img.game-news24.com/2021/11/There-are-certain-types-of-players-who-want-to-choose-game-mode-instead-of-Quick-Play.jpeg',
  },
  'team-slayer': {
    id: 'team-slayer',
    label: 'Team Slayer',
    focus: false,
    imgSrc:
      'https://img.game-news24.com/2021/11/There-are-certain-types-of-players-who-want-to-choose-game-mode-instead-of-Quick-Play.jpeg',
  },
  ranked: {
    id: 'ranked',
    label: 'Ranked',
    focus: false,
    imgSrc:
      'https://img.game-news24.com/2021/11/There-are-certain-types-of-players-who-want-to-choose-game-mode-instead-of-Quick-Play.jpeg',
  },
}

export const playlists = Object.values(playlistMap)

export const getPlaylist = (id: string) => {
  return playlistMap[id] || null
}
