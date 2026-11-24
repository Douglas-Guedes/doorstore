import { useState } from 'react'
import type { Game } from '../data/types'

type PurchasePanelProps = {
  game: Game
  onClose: () => void
}

function PurchasePanel({ game, onClose }: PurchasePanelProps) {
  const [finished, setFinished] = useState<boolean>(false)

  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center overflow-y-auto bg-[rgba(15,35,84,0.72)] p-4" onClick={onClose}>
      <section
        className="max-h-[90vh] w-full max-w-[28rem] overflow-y-auto rounded-xl bg-white p-5 text-[#1f2937] shadow-[0_1rem_2.5rem_rgba(15,35,84,0.25)]"
        role="dialog"
        aria-modal="true"
        aria-label={`Compra de ${game.name}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="m-0 font-[Arial,Helvetica,sans-serif] text-[1.35rem] font-bold text-[#0f2354]">{finished ? 'Compra concluída' : 'Resumo da oferta'}</h2>
          <button className="grid h-9 w-9 flex-none cursor-pointer place-items-center rounded-lg border border-[#d1d5db] bg-white p-0 text-base text-[#1f2937]" type="button" aria-label="Fechar compra" onClick={onClose}>✕</button>
        </div>
        {finished ? (
          <>
            <p className="m-0 leading-[1.6] text-[#1f2937]">
              Compra de demonstração concluída! Este site é um projeto acadêmico e nenhuma cobrança foi feita.
            </p>
            <button className="mt-3 inline-flex min-h-10 w-full cursor-pointer items-center justify-center rounded-lg border border-transparent bg-[#2563eb] px-4 py-2 text-[0.9rem] font-bold text-white" type="button" onClick={onClose}>Fechar</button>
          </>
        ) : (
          <>
            <img className="block max-h-56 w-full aspect-[16/9] rounded-lg object-cover" src={game.cover} alt={`Capa de ${game.name}`} />
            <h3 className="mt-3 mb-0 font-[Arial,Helvetica,sans-serif] font-bold text-[#0f2354]">{game.name}</h3>
            <p className="my-0 mt-1 mb-3 text-[0.75rem] text-[#6b7280]">{game.genre} · ★ {game.rating}</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#2563eb] px-2 py-1 text-[0.7rem] font-bold text-white">{game.discount}</span>
              <span className="text-[0.75rem] text-[#6b7280] line-through">{game.oldPrice}</span>
              <strong className="text-[1.2rem] text-[#2563eb]">{game.price}</strong>
            </div>
            <div className="mt-4 flex flex-col gap-2 rounded-lg bg-[#f3f4f6] p-3">
              <p className="m-0 text-[0.9rem]"><strong>Plataforma:</strong> PC (Steam)</p>
              <p className="m-0 text-[0.9rem]"><strong>Entrega:</strong> chave digital por e-mail (demonstração)</p>
            </div>
            <button
              className="mt-3 inline-flex min-h-10 w-full cursor-pointer items-center justify-center rounded-lg border border-transparent bg-[#2563eb] px-4 py-2 text-[0.9rem] font-bold text-white"
              type="button"
              onClick={() => setFinished(true)}
            >
              Finalizar compra (demonstração)
            </button>
            <button className="mt-3 inline-flex min-h-10 w-full cursor-pointer items-center justify-center rounded-lg border border-[#d1d5db] bg-white px-4 py-2 text-[0.9rem] font-bold text-[#1f2937]" type="button" onClick={onClose}>Fechar</button>
          </>
        )}
      </section>
    </div>
  )
}

export default PurchasePanel
