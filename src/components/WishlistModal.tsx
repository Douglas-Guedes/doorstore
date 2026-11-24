import type { Game } from '../data/types'

type WishlistModalProps = {
  games: Game[]
  onClose: () => void
  onRemove: (id: number) => void
}

function WishlistModal({ games, onClose, onRemove }: WishlistModalProps) {
  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center overflow-y-auto bg-[rgba(15,35,84,0.72)] p-4" onClick={onClose}>
      <section
        className="max-h-[90vh] w-full max-w-[28rem] overflow-y-auto rounded-xl bg-white p-5 text-[#1f2937] shadow-[0_1rem_2.5rem_rgba(15,35,84,0.25)]"
        role="dialog"
        aria-modal="true"
        aria-label="Lista de desejos"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="m-0 font-[Arial,Helvetica,sans-serif] text-[1.35rem] font-bold text-[#0f2354]">Lista de desejos</h2>
          <button className="grid h-9 w-9 flex-none cursor-pointer place-items-center rounded-lg border border-[#d1d5db] bg-white p-0 text-base text-[#1f2937]" type="button" aria-label="Fechar lista de desejos" onClick={onClose}>✕</button>
        </div>
        {games.length === 0 ? (
          <p className="m-0 text-[#6b7280]">Sua lista de desejos está vazia.</p>
        ) : (
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {games.map((game) => (
              <li className="grid grid-cols-[3.75rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-[#d1d5db] pb-3" key={game.id}>
                <img className="h-[4.5rem] w-[3.75rem] rounded-lg object-cover" src={game.cover} alt={`Capa de ${game.name}`} />
                <div className="flex min-w-0 flex-col gap-1">
                  <h3 className="m-0 wrap-anywhere text-[0.9rem] text-[#1f2937]">{game.name}</h3>
                  <strong className="text-[0.9rem] text-[#2563eb]">{game.price}</strong>
                </div>
                <button className="cursor-pointer rounded-lg border border-[#d1d5db] bg-white p-2 text-[0.8rem] text-[#1f2937]" type="button" onClick={() => onRemove(game.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default WishlistModal
