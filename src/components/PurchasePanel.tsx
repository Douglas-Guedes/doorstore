import { useState } from 'react'
import type { Game } from '../data/types'

type PurchasePanelProps = {
  game: Game
  onClose: () => void
}

function PurchasePanel({ game, onClose }: PurchasePanelProps) {
  const [finished, setFinished] = useState<boolean>(false)

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="modal-panel purchase-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`Compra de ${game.name}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-heading">
          <h2>{finished ? 'Compra concluída' : 'Resumo da oferta'}</h2>
          <button className="modal-close-button" type="button" aria-label="Fechar compra" onClick={onClose}>✕</button>
        </div>
        {finished ? (
          <>
            <p className="purchase-success">
              Compra de demonstração concluída! Este site é um projeto acadêmico e nenhuma cobrança foi feita.
            </p>
            <button className="button button-primary purchase-close-button" type="button" onClick={onClose}>Fechar</button>
          </>
        ) : (
          <>
            <img className="purchase-cover" src={game.cover} alt={`Capa de ${game.name}`} />
            <h3 className="purchase-game-title">{game.name}</h3>
            <p className="game-meta">{game.genre} · ★ {game.rating}</p>
            <div className="purchase-prices">
              <span className="discount-badge card-discount">{game.discount}</span>
              <span className="old-price">{game.oldPrice}</span>
              <strong>{game.price}</strong>
            </div>
            <div className="purchase-summary">
              <p><strong>Plataforma:</strong> PC (Steam)</p>
              <p><strong>Entrega:</strong> chave digital por e-mail (demonstração)</p>
            </div>
            <button
              className="button button-primary purchase-complete-button"
              type="button"
              onClick={() => setFinished(true)}
            >
              Finalizar compra (demonstração)
            </button>
            <button className="button purchase-close-button" type="button" onClick={onClose}>Fechar</button>
          </>
        )}
      </section>
    </div>
  )
}

export default PurchasePanel
