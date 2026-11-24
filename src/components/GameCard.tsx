import { useState } from 'react'
import type { Game } from '../data/types'

type GameCardProps = {
  game: Game
  isFavorite: boolean
  onToggleFavorite: () => void
  onBuy: () => void
}

function GameCard({ game, isFavorite, onToggleFavorite, onBuy }: GameCardProps) {
  const [imageFailed, setImageFailed] = useState<boolean>(false)

  return (
    <article className="game-card">
      <div className="image-placeholder card-image" role="img" aria-label={`Imagem ilustrativa de ${game.name}`}>
        {!imageFailed && <img src={game.cover} alt={`Capa de ${game.name}`} className="cover-image" onError={() => setImageFailed(true)} />}
        IMG
      </div>
      <button
        className={`favorite-button${isFavorite ? ' is-active' : ''}`}
        type="button"
        aria-label={`${isFavorite ? 'Remover dos' : 'Adicionar aos'} favoritos: ${game.name}`}
        aria-pressed={isFavorite}
        onClick={onToggleFavorite}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
      <div className="game-card-content">
        <h3>{game.name}</h3>
        <p className="game-meta">{game.genre} <span>·</span> ★ {game.rating}</p>
        <div className="game-prices"><span className="discount-badge card-discount">{game.discount}</span><span className="old-price">{game.oldPrice}</span><strong>{game.price}</strong></div>
        <button className="button button-primary buy-button" type="button" onClick={onBuy}>Comprar</button>
      </div>
    </article>
  )
}

export default GameCard
