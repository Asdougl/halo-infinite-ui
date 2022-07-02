import { numberWithCommas } from '../util/format'

type Rarity = 'common' | 'rare' | 'heroic' | 'legendary'
type Size = 'wide' | 'tall' | 'standard' | 'small'

interface StoreItem {
  price: number
  name: string
  rarity: Rarity
  imgSrc?: string
  bundle?: boolean
}

interface StoreCardProps {
  item: StoreItem
  size?: Size
}

const getRarityColor = (rarity: Rarity) => {
  switch (rarity) {
    case 'legendary':
      return {
        bg: 'bg-amber-400',
        border: 'border-amber-400',
        text: 'text-amber-600',
      }
    case 'heroic':
      return {
        bg: 'bg-purple-800',
        border: 'border-purple-800',
        text: 'text-purple-500',
      }
    case 'rare':
      return {
        bg: 'bg-sky-800',
        border: 'border-sky-800',
        text: 'text-sky-500',
      }
    default:
      return {
        bg: 'bg-gray-600',
        border: 'border-gray-600',
        text: 'text-gray-500',
      }
  }
}

const getSize = (size: Size) => {
  switch (size) {
    case 'tall':
      return 'row-span-4'
    case 'wide':
      return 'col-span-2 row-span-2'
    case 'standard':
      return 'row-span-2'
    default:
      return ''
  }
}

export const StoreCard = ({ item, size = 'small' }: StoreCardProps) => {
  const { bg, border, text } = getRarityColor(item.rarity)

  return (
    <button
      className={`group relative h-full w-full border-2 border-transparent transition-all hover:border-0 ${getSize(
        size
      )}`}
    >
      <div className="h-full w-full p-[6px] transition-all group-hover:p-2">
        <div
          className={`${bg} relative grid h-full w-full px-6 pt-4 shadow-inner ${
            size === 'tall' || size === 'standard'
              ? 'grid-rows-2'
              : 'grid-cols-2'
          }`}
        >
          {/* actual content goes here */}
          {item.bundle && (
            <div
              className={`absolute top-0 left-0 px-3 py-2 font-bold italic tracking-wide ${text}`}
            >
              Bundle
            </div>
          )}
          <div
            className={`flex flex-col items-center justify-center text-white ${
              size === 'small' ? 'text-xs' : 'text-sm'
            }`}
          >
            <div className="text-center font-bold uppercase tracking-[0.2em]">
              {item.name}
            </div>
            <div className="text-2xl font-bold italic tracking-[0.2em]">
              ${numberWithCommas(item.price)}
            </div>
          </div>
        </div>
      </div>
      {/* top border */}
      <div className={`absolute top-0 w-full`}>
        <div
          className={`absolute left-0 top-0 h-3 border-l-[3px] border-white transition-all group-hover:border-l-4`}
        ></div>
        <div
          className={`absolute right-0 top-0 h-3 border-r-[3px] border-white transition-all group-hover:border-r-4`}
        ></div>
        <div className="absolute top-0 left-0 w-full border-t-[3px] border-white transition-all group-hover:border-t-4"></div>
      </div>
      {/* right border */}
      <div
        className={`absolute top-0 right-0 h-full py-4 transition-all group-hover:pt-0 group-hover:pb-4`}
      >
        <div className="h-full border-r-[3px] border-gray-500 transition-all group-hover:border-r-4 group-hover:border-white"></div>
      </div>
      {/* bottom border */}
      <div className={`absolute bottom-0 w-full`}>
        <div
          className={`absolute left-0 bottom-0 h-3 border-l-[3px] group-hover:border-l-4 ${border} transition-all`}
        ></div>
        <div
          className={`absolute right-0 bottom-0 h-3 border-r-[3px] group-hover:border-r-4 ${border} transition-all`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-full border-b-[3px] group-hover:border-b-4 ${border} transition-all`}
        ></div>
      </div>
      {/* left border */}
      <div
        className={`absolute top-0 left-0 h-full py-4 transition-all group-hover:pt-0 group-hover:pb-4`}
      >
        <div className="h-full border-l-[3px] border-gray-500 transition-all group-hover:border-l-4 group-hover:border-white"></div>
      </div>
    </button>
  )
}
