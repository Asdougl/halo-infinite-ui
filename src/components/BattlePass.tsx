import { useSelector } from 'react-redux'
import { selectBattlePass } from '../redux/slices/battlepass'
import { FrameElements } from './FrameElements'
import { Indicator } from './Indicator'

export const BattlePass = () => {
  const battlepass = useSelector(selectBattlePass)

  return (
    <button className="group relative">
      <div className="p-2">
        <div className="relative flex w-[660px] gap-6 bg-slate-800/60 p-10 text-white">
          <div className="absolute top-0 left-0 hidden h-full w-full bg-white/20 group-hover:block"></div>
          <div className="border border-white p-1">
            <div className="border-2 border-sky-400 py-3 px-10 text-4xl font-bold">
              {battlepass.level}
            </div>
          </div>
          <div className="flex flex-grow flex-col text-xl">
            <div className="flex-grow text-left font-bold uppercase leading-5 tracking-widest">
              Season{' '}
              {battlepass.season < 10
                ? `0${battlepass.season}`
                : battlepass.season}
            </div>
            <div className="flex-grow">
              <div className="w-full border border-white p-1">
                <div
                  className="h-2 bg-gradient-to-r from-sky-400 to-sky-200"
                  style={{ width: `${battlepass.progress * 100}%` }}
                ></div>
              </div>
            </div>
            <div className=" text-left italic leading-5 tracking-widest">
              {battlepass.premium ? (
                <>
                  <span className="text-sky-400">Premium</span> Battle Pass
                </>
              ) : (
                'Battle Pass'
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-full top-1/2 -translate-y-1/2 px-4">
        <Indicator controller="x" keyboard="R" />
      </div>
      <FrameElements />
    </button>
  )
}
