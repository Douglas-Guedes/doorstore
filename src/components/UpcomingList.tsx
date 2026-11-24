import type { UpcomingGame } from '../data/types'
import UpcomingCard from './UpcomingCard'

type UpcomingListProps = {
  games: UpcomingGame[]
}

function UpcomingList({ games }: UpcomingListProps) {
  return (
    <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 md:m-0 md:grid md:grid-cols-3 md:gap-3 md:overflow-visible md:p-0 lg:flex lg:flex-col">
      {games.map((game) => <UpcomingCard game={game} key={game.id} />)}
    </div>
  )
}

export default UpcomingList
