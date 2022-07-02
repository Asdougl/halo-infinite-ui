import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { selectInput } from '../redux/slices/input'

interface IndicatorProps {
  keyboard: string
  controller: string
}

export const Indicator = ({ keyboard, controller }: IndicatorProps) => {
  const input = useSelector(selectInput)

  return (
    <div
      className={classNames(
        'flex h-6 w-6 items-center justify-center bg-white text-xs font-bold uppercase text-black',
        input === 'keyboard' ? 'rounded-sm' : 'rounded-full'
      )}
    >
      {input === 'keyboard' ? keyboard : controller}
    </div>
  )
}
