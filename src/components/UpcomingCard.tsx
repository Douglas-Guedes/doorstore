import type { UpcomingGame } from '../data/types'

type UpcomingCardProps = {
  game: UpcomingGame
}

function UpcomingCard({ game }: UpcomingCardProps) {
  return (
    <article className="flex min-w-[8.75rem] flex-[0_0_8.75rem] flex-col gap-2 rounded-xl border border-[#d1d5db] bg-white p-2 shadow-[0_2px_0_#d1d5db] md:min-w-0 md:flex-initial lg:flex-row lg:items-center lg:gap-3">
      <div className="grid min-h-[5.75rem] place-items-center overflow-hidden rounded-lg border border-[#60a5fa] bg-[#dbeafe] text-[0.8rem] font-bold tracking-[0.06em] text-[#2563eb] md:aspect-[1.8] md:min-h-24 lg:aspect-square lg:h-[5.5rem] lg:min-h-[5.5rem] lg:w-20 lg:min-w-20" role="img" aria-label={`Imagem ilustrativa de ${game.name}`}>IMG</div>
      <div className="min-w-0">
        <h3 className="max-w-full overflow-hidden text-ellipsis text-base font-bold leading-[1.3] text-[#1f2937] lg:text-[0.95rem]">{game.name}</h3>
        <p className="my-1 text-[0.75rem] font-bold text-[#2563eb] lg:text-[0.7rem]">Lança em {game.releaseDate}</p>
        <p className="m-0 text-[0.75rem] text-[#6b7280] lg:text-[0.7rem]">{game.platform}</p>
      </div>
    </article>
  )
}

export default UpcomingCard
