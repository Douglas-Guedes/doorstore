import type { Game } from '../data/types'
import GameCard from './GameCard'

type GameGridProps = {
  games: Game[]
}

function GameGrid({ games }: GameGridProps) {
  return (
    <div className="game-grid">
      {games.length === 0
        ? <p className="listing-note">Nenhum jogo encontrado neste gênero.</p>
        : games.map((game) => <GameCard game={game} key={game.id} />)}
    </div>
  )
}

export default GameGrid
