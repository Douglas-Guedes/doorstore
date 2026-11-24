import { useState } from 'react'
import type { Game } from '../data/types'

type FeaturedGameProps = {
  game: Game
  onBuy: () => void
}

function FeaturedGame({ game, onBuy }: FeaturedGameProps) {
  const [imageFailed, setImageFailed] = useState<boolean>(false)

  return (
    <section className="flex flex-col gap-4 rounded-xl bg-[#2563eb] p-4 text-white md:min-h-[14rem] md:flex-row md:items-center md:gap-6 md:p-5 lg:min-h-[19rem] lg:gap-8 lg:p-8" aria-labelledby="featured-title">
      <div className="flex flex-col items-start gap-2 md:flex-1 lg:gap-3">
        <p className="m-0 text-[0.75rem] font-bold uppercase tracking-[0.06em]">Jogo da semana</p>
        <h1 id="featured-title" className="m-0 font-[Arial,Helvetica,sans-serif] text-[2rem] font-bold leading-[1.15] lg:text-[2.75rem]">{game.name}</h1>
        <p className="m-0 text-[0.9rem] text-[#dbeafe] lg:text-base">{game.genre} <span aria-hidden="true">·</span> ★ {game.rating} <span className="inline md:hidden lg:inline">· PC · Steam</span></p>
        <div className="my-1 flex items-center gap-3">
          <span className="inline-flex min-w-20 items-center justify-center whitespace-nowrap rounded-lg bg-white px-3 py-2 text-xl font-bold text-[#2563eb]">{game.discount}</span>
          <div className="flex flex-col">
            <span className="text-[0.75rem] text-[#dbeafe] line-through">{game.oldPrice}</span>
            <strong className="text-xl">{game.price}</strong>
          </div>
        </div>
        <button className="inline-flex min-h-10 min-w-36 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-white px-4 py-2 text-[0.9rem] font-bold text-[#2563eb]" type="button" onClick={onBuy}>Ver oferta</button>
      </div>
      <div className="relative order-[-1] grid min-h-32 flex-1 place-items-center overflow-hidden rounded-lg border border-[#60a5fa] bg-[#dbeafe] text-[0.8rem] font-bold tracking-[0.06em] text-[#2563eb] md:min-h-48 lg:order-none lg:min-h-60" role="img" aria-label={`Imagem ilustrativa do jogo ${game.name}`}>
        {!imageFailed && <img src={game.cover} alt={`Capa de ${game.name}`} className="absolute inset-0 block h-full w-full object-cover" onError={() => setImageFailed(true)} />}
        IMG
      </div>
    </section>
  )
}

export default FeaturedGame
