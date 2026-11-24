type HeaderProps = {
  wishlistCount: number
  onOpenWishlist: () => void
}

function Header({ wishlistCount, onOpenWishlist }: HeaderProps) {
  return (
    <header className="bg-[#0f2354] text-white">
      <div className="mx-auto flex min-h-[4.5rem] w-full items-center justify-between gap-4 p-4 md:min-h-[5rem] md:px-6 lg:min-h-[5.5rem] lg:max-w-[80rem] lg:px-6">
        <a className="inline-flex items-center gap-2 whitespace-nowrap text-xl font-bold text-white no-underline lg:text-2xl" href="#inicio" aria-label="DoorStore, início">
          <span className="inline-grid h-8 w-8 place-items-center rounded-lg border-2 border-[#60a5fa] text-base text-white" aria-hidden="true">D</span>
          <span>DoorStore</span>
        </a>
        <nav className="hidden items-center gap-5 md:flex lg:gap-6" aria-label="Navegação principal">
          <a className="whitespace-nowrap text-[0.85rem] font-bold text-white no-underline lg:text-base" href="#inicio">Início</a>
          <a className="whitespace-nowrap text-[0.85rem] font-bold text-white no-underline lg:text-base" href="#promocoes">Promoções</a>
          <a className="whitespace-nowrap text-[0.85rem] font-bold text-white no-underline lg:text-base" href="#em-breve">Em breve</a>
          <a className="whitespace-nowrap text-[0.85rem] font-bold text-white no-underline lg:text-base" href="#contato">Contato</a>
        </nav>
        <label className="hidden min-w-[10rem] flex-1 lg:block">
          <span className="sr-only">Buscar jogos</span>
          <input className="min-h-[2.75rem] w-full rounded-full border-0 bg-white px-4 py-2 text-[#1f2937] placeholder:text-[#6b7280] placeholder:opacity-100" type="search" placeholder="Buscar jogos..." />
        </label>
        <button
          className="hidden min-h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border border-[#60a5fa] bg-transparent px-4 py-2 text-[0.8rem] font-bold text-white md:inline-flex"
          type="button"
          onClick={onOpenWishlist}
        >
          ♡ Lista de desejos ({wishlistCount})
        </button>
        <button
          className="inline-flex min-h-9 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border border-[#60a5fa] bg-transparent px-2 py-1 text-[0.85rem] font-bold text-white md:hidden"
          type="button"
          aria-label={`Lista de desejos (${wishlistCount})`}
          onClick={onOpenWishlist}
        >
          ♡ {wishlistCount}
        </button>
        <button className="cursor-pointer border-0 bg-transparent px-2 py-1 text-[1.75rem] leading-none text-white md:hidden" type="button" aria-label="Abrir menu">☰</button>
      </div>
    </header>
  )
}

export default Header
