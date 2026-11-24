import type { Game } from '../data/types'

type WishlistModalProps = {
  games: Game[]
  onClose: () => void
  onRemove: (id: number) => void
}

function WishlistModal({ games, onClose, onRemove }: WishlistModalProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Lista de desejos"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-heading">
          <h2>Lista de desejos</h2>
          <button className="modal-close-button" type="button" aria-label="Fechar lista de desejos" onClick={onClose}>✕</button>
        </div>
        {games.length === 0 ? (
          <p className="wishlist-empty">Sua lista de desejos está vazia.</p>
        ) : (
          <ul className="wishlist-items">
            {games.map((game) => (
              <li className="wishlist-item" key={game.id}>
                <img className="wishlist-thumbnail" src={game.cover} alt={`Capa de ${game.name}`} />
                <div className="wishlist-game-details">
                  <h3>{game.name}</h3>
                  <strong>{game.price}</strong>
                </div>
                <button className="wishlist-remove-button" type="button" onClick={() => onRemove(game.id)}>
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
