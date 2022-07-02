import { Button } from '../components/Button'
import { HomeLayout } from '../layout/HomeLayout'

export const CommunityView = () => {
  return (
    <HomeLayout>
      <div className="grid grid-cols-2">
        <div className="flex w-[600px] flex-col justify-end gap-4">
          <Button main>Theater</Button>
          <Button main>Popular Modes</Button>
          <Button main>My Bookmarks</Button>
          <Button main>My Files</Button>
          <div className="px-10 pt-16 pb-24 text-xl italic tracking-wider text-white/60">
            View your bookmarked files
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
