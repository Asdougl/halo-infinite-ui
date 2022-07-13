interface ImageFrameProps {
  src: string
}

export const ImageFrame = ({ src }: ImageFrameProps) => {
  return (
    <div className="border border-white/40 p-2">
      <img src={src} alt="" className="aspect-video" />
    </div>
  )
}
