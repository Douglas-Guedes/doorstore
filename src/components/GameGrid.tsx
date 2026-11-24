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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {games.length === 0
        ? <p className="m-0 mt-4 text-center text-[0.75rem] text-[#6b7280]">Nenhum jogo encontrado neste gênero.</p>
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
