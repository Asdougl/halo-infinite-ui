export const FrameElements = () => {
  return (
    <>
      {/* top border */}
      <div className={`absolute top-0 w-full`}>
        <div
          className={`absolute left-0 top-0 h-3 border-l-[3px] border-white`}
        ></div>
        <div
          className={`absolute right-0 top-0 h-3 border-r-[3px] border-white`}
        ></div>
        <div className="absolute top-0 left-0 w-full border-t-[3px] border-white"></div>
      </div>
      {/* right border */}
      <div className={`absolute top-0 right-0 h-full py-4`}>
        <div className="h-full border-r-[3px] border-white/40"></div>
      </div>
      {/* bottom border */}
      <div className={`absolute bottom-0 w-full`}>
        <div
          className={`absolute left-0 bottom-0 h-3 border-l-[3px] border-white`}
        ></div>
        <div
          className={`absolute right-0 bottom-0 h-3 border-r-[3px] border-white`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-full border-b-[3px] border-white`}
        ></div>
      </div>
      {/* left border */}
      <div className={`absolute top-0 left-0 h-full py-4`}>
        <div className="h-full border-l-[3px] border-white/40"></div>
      </div>
    </>
  )
}
