import type { Game } from '../data/types'

type GameCardProps = {
  game: Game
}

function GameCard({ game }: GameCardProps) {
  return (
    <article className="game-card">
      <div className="image-placeholder card-image" role="img" aria-label={`Imagem ilustrativa de ${game.name}`}>IMG</div>
      <button className="favorite-button" type="button" aria-label={`Favoritar ${game.name}`}>♡</button>
      <div className="game-card-content">
        <h3>{game.name}</h3>
        <p className="game-meta">{game.genre} <span>·</span> ★ {game.rating}</p>
        <div className="game-prices"><span className="discount-badge card-discount">{game.discount}</span><span className="old-price">{game.oldPrice}</span><strong>{game.price}</strong></div>
        <button className="button button-primary buy-button" type="button">Comprar</button>
      </div>
    </article>
  )
}

export default GameCard
