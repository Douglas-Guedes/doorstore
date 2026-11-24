function Footer() {
  return (
    <footer className="mt-8 bg-[#0f2354] text-white" id="contato">
      <div className="mx-auto grid w-full grid-cols-1 gap-6 p-6 px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-x-8 md:p-6 lg:max-w-[80rem]">
        <div>
          <a className="inline-flex items-center gap-2 whitespace-nowrap text-[1.25rem] font-bold text-white no-underline lg:text-2xl" href="#inicio">
            <span className="inline-grid h-8 w-8 place-items-center rounded-lg border-2 border-[#60a5fa] text-base text-white" aria-hidden="true">D</span>
            <span>DoorStore</span>
          </a>
          <p className="mt-3 max-w-[15rem] text-[0.85rem] text-[#60a5fa]">Vitrine acadêmica de chaves de jogos para PC.</p>
          <p className="mt-3 max-w-[15rem] text-[0.85rem] text-[#60a5fa]">Fundador: Douglas Roberto dos S. Guedes - MK-001</p>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-4">
          <nav aria-label="Navegação do rodapé">
            <h2 className="mb-2 mt-0 text-[0.9rem] font-bold text-[#60a5fa]">Navegação</h2>
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              <li><a className="text-[0.85rem] text-white no-underline" href="#inicio">Início</a></li>
              <li><a className="text-[0.85rem] text-white no-underline" href="#promocoes">Promoções</a></li>
              <li><a className="text-[0.85rem] text-white no-underline" href="#em-breve">Em breve</a></li>
            </ul>
          </nav>
          <nav aria-label="Ajuda">
            <h2 className="mb-2 mt-0 text-[0.9rem] font-bold text-[#60a5fa]">Ajuda</h2>
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              <li><a className="text-[0.85rem] text-white no-underline" href="#contato">Suporte</a></li>
              <li><a className="text-[0.85rem] text-white no-underline" href="#contato">Termos</a></li>
              <li><a className="text-[0.85rem] text-white no-underline" href="#contato">Contato</a></li>
            </ul>
          </nav>
          <nav aria-label="Redes sociais">
            <h2 className="mb-2 mt-0 text-[0.9rem] font-bold text-[#60a5fa]">Social</h2>
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              <li><a className="text-[0.85rem] text-white no-underline" href="#contato">Instagram</a></li>
              <li><a className="text-[0.85rem] text-white no-underline" href="#contato">Discord</a></li>
              <li><a className="text-[0.85rem] text-white no-underline" href="#contato">YouTube</a></li>
            </ul>
          </nav>
        </div>
        <p className="col-span-full m-0 flex flex-wrap items-center justify-between gap-3 border-t border-[#60a5fa] pt-3 text-[0.75rem] text-[#60a5fa]">
          <span>© 2026 DoorStore · Projeto acadêmico</span>
          <span className="ml-auto whitespace-nowrap text-right">MKorp® Interactive</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
