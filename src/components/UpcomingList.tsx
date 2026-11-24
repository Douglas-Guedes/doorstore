import type { UpcomingGame } from '../data/types'
import UpcomingCard from './UpcomingCard'

type UpcomingListProps = {
  games: UpcomingGame[]
}

function UpcomingList({ games }: UpcomingListProps) {
  return (
    <div className="upcoming-list">
      {games.map((game) => <UpcomingCard game={game} key={game.id} />)}
    </div>
  )
}

export default UpcomingList
