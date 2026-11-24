import type { Game } from '../data/types'
import GameCard from './GameCard'

type GameGridProps = {
  games: Game[]
  wishlist: number[]
  onToggleFavorite: (id: number) => void
  onBuy: (game: Game) => void
}

function GameGrid({ games, wishlist, onToggleFavorite, onBuy }: GameGridProps) {
  return (
    <div className="game-grid">
      {games.length === 0
        ? <p className="listing-note">Nenhum jogo encontrado neste gênero.</p>
        : games.map((game) => (
          <GameCard
            game={game}
            isFavorite={wishlist.includes(game.id)}
            onToggleFavorite={() => onToggleFavorite(game.id)}
            onBuy={() => onBuy(game)}
            key={game.id}
          />
        ))}
    </div>
  )
}

export default GameGrid
