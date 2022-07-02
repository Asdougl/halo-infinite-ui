import { Button } from '../components/Button'
import { StoreCard } from '../components/StoreCard'
import { HomeLayout } from '../layout/HomeLayout'

export const ShopView = () => {
  return (
    <HomeLayout>
      <div className="grid w-full grid-cols-4 px-8 pb-24">
        <div className="col-span-1 grid grid-rows-2 gap-3 py-1 px-3">
          <div className="flex h-full w-full flex-col justify-end gap-4 bg-slate-400 p-6">
            <div className="flex items-center">
              <div className="flex-grow border-b border-white"></div>
              <div className="px-2 uppercase tracking-widest text-white">
                Season 1
              </div>
              <div className="flex-grow border-b border-white"></div>
            </div>
            <div className="border-b-2 border-white/20 text-center uppercase tracking-widest text-white">
              Heroes of Reach
            </div>
            <Button>Battle Pass</Button>
          </div>
          <div className="flex h-full w-full flex-col justify-end gap-4 bg-gray-500 p-6">
            <div className="text-center text-lg uppercase leading-tight tracking-widest text-white">
              Visit the Halo campionship series store
            </div>
            <Button>HCS Offers</Button>
            <Button>Buy Credits</Button>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 grid-rows-4 gap-2">
          <StoreCard
            size="tall"
            item={{
              price: 2000,
              name: 'Fire and Frost',
              rarity: 'legendary',
              bundle: true,
            }}
          />
          <StoreCard
            size="wide"
            item={{
              price: 1500,
              name: 'Maltese Mayhem Weapon Set',
              rarity: 'heroic',
              bundle: true,
            }}
          />
          <StoreCard
            size="standard"
            item={{
              price: 1000,
              name: 'Cat Lovers',
              rarity: 'heroic',
              bundle: true,
            }}
          />
          <StoreCard
            item={{
              price: 700,
              name: 'Chow Down',
              rarity: 'rare',
              bundle: true,
            }}
          />
          <StoreCard
            item={{
              price: 200,
              name: 'Boost and swap pack',
              rarity: 'common',
              bundle: true,
            }}
          />
        </div>
      </div>
    </HomeLayout>
  )
}
