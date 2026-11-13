import type { UpcomingGame } from '../data/types'

type UpcomingCardProps = {
  game: UpcomingGame
}

function UpcomingCard({ game }: UpcomingCardProps) {
  return (
    <article className="upcoming-card">
      <div className="image-placeholder upcoming-image" role="img" aria-label={`Imagem ilustrativa de ${game.name}`}>IMG</div>
      <div className="upcoming-card-content">
        <h3>{game.name}</h3>
        <p className="release-date">Lança em {game.releaseDate}</p>
        <p className="platform">{game.platform}</p>
      </div>
    </article>
  )
}

export default UpcomingCard
