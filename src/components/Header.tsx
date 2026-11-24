type HeaderProps = {
  wishlistCount: number
  onOpenWishlist: () => void
}

function Header({ wishlistCount, onOpenWishlist }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-content">
        <a className="brand" href="#inicio" aria-label="DoorStore, início">
          <span className="brand-mark" aria-hidden="true">D</span>
          <span>DoorStore</span>
        </a>
        <nav className="main-navigation" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#promocoes">Promoções</a>
          <a href="#em-breve">Em breve</a>
          <a href="#contato">Contato</a>
        </nav>
        <label className="search-field">
          <span className="visually-hidden">Buscar jogos</span>
          <input type="search" placeholder="Buscar jogos..." />
        </label>
        <button className="wishlist-button" type="button" onClick={onOpenWishlist}>
          ♡ Lista de desejos ({wishlistCount})
        </button>
        <button
          className="wishlist-mobile-button"
          type="button"
          aria-label={`Lista de desejos (${wishlistCount})`}
          onClick={onOpenWishlist}
        >
          ♡ {wishlistCount}
        </button>
        <button className="menu-button" type="button" aria-label="Abrir menu">☰</button>
      </div>
    </header>
  )
}

export default Header
