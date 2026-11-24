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
    <article className="relative flex min-h-[8.5rem] min-w-0 gap-3 rounded-xl border border-[#d1d5db] bg-white p-3 shadow-[0_2px_0_#d1d5db] md:min-h-0 md:flex-col md:gap-0 md:p-2 lg:min-h-[19rem]">
      <div className="relative grid min-h-[6.5rem] w-[5.25rem] min-w-[5.25rem] place-items-center overflow-hidden rounded-lg border border-[#60a5fa] bg-[#dbeafe] text-[0.8rem] font-bold tracking-[0.06em] text-[#2563eb] md:aspect-[1.65] md:min-h-32 md:w-full md:min-w-0 lg:min-h-32" role="img" aria-label={`Imagem ilustrativa de ${game.name}`}>
        {!imageFailed && <img src={game.cover} alt={`Capa de ${game.name}`} className="absolute inset-0 block h-full w-full object-cover" onError={() => setImageFailed(true)} />}
        IMG
      </div>
      <button
        className={`absolute right-2 top-2 grid h-8 w-8 cursor-pointer place-items-center rounded-full border p-0 text-[1.2rem] leading-none md:right-3 md:top-3 ${isFavorite ? 'border-[#2563eb] bg-[#2563eb] text-white' : 'border-[#60a5fa] bg-white text-[#2563eb]'}`}
        type="button"
        aria-label={`${isFavorite ? 'Remover dos' : 'Adicionar aos'} favoritos: ${game.name}`}
        aria-pressed={isFavorite}
        onClick={onToggleFavorite}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
      <div className="flex min-w-0 flex-1 flex-col items-start pt-0 md:min-h-28 md:px-1 md:pb-1 md:pt-2 lg:min-h-32">
        <h3 className="max-w-[10rem] overflow-hidden text-ellipsis text-base font-bold leading-[1.3] text-[#1f2937] wrap-anywhere md:text-[0.95rem] lg:text-base">{game.name}</h3>
        <p className="my-0 mt-1 mb-2 text-[0.75rem] text-[#6b7280]">{game.genre} <span>·</span> ★ {game.rating}</p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 md:mt-auto lg:w-full lg:justify-between lg:gap-1">
          <span className="static inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#2563eb] px-2 py-1 text-[0.7rem] font-bold text-white md:absolute md:bottom-auto md:left-3 md:top-3">{game.discount}</span>
          <span className="text-[0.75rem] text-[#6b7280] line-through">{game.oldPrice}</span>
          <strong className="text-[1.2rem] leading-[1.2] text-[#2563eb] lg:text-[1.1rem]">{game.price}</strong>
        </div>
        <button className="mt-2 inline-flex min-h-8 cursor-pointer items-center justify-center self-end rounded-lg border border-transparent bg-[#2563eb] px-3 py-1 text-[0.9rem] font-bold text-white md:min-h-9" type="button" onClick={onBuy}>Comprar</button>
      </div>
    </article>
  )
}

export default GameCard
