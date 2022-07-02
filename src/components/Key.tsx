interface KeyProps {
  keyLetter: string
}

export const Key = ({ keyLetter }: KeyProps) => {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-xs uppercase text-black">
      {keyLetter}
    </div>
  )
}
