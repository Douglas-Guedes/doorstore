type FilterSidebarProps = {
  genres: string[]
  selectedGenre: string
  onSelectGenre: (genre: string) => void
}

function FilterSidebar({ genres, selectedGenre, onSelectGenre }: FilterSidebarProps) {
  return (
    <aside className="hidden rounded-xl border border-[#d1d5db] bg-white p-5 lg:block" aria-labelledby="filters-title">
      <h2 id="filters-title" className="m-0 border-b-2 border-[#60a5fa] pb-3 font-[Arial,Helvetica,sans-serif] text-[1.2rem] font-bold leading-[1.2] text-[#0f2354]">Filtros</h2>
      <fieldset className="my-5 flex flex-col gap-2 border-0 p-0">
        <legend className="mb-2 text-[0.9rem] font-bold text-[#1f2937]">Gênero</legend>
        {genres.map((genre) => (
          <label className="flex items-center gap-2 text-[0.9rem] text-[#1f2937]" key={genre}>
            <input className="h-[1.1rem] w-[1.1rem] accent-[#2563eb]" type="checkbox" checked={selectedGenre === genre} onChange={() => onSelectGenre(selectedGenre === genre ? 'Todos' : genre)} />
            {genre}
          </label>
        ))}
      </fieldset>
      <div className="my-5 flex flex-col gap-2">
        <label className="mb-2 text-[0.9rem] font-bold text-[#1f2937]" htmlFor="max-price">Preço máximo</label>
        <input className="w-full accent-[#2563eb]" id="max-price" type="range" min="0" max="300" defaultValue="180" />
        <div className="flex justify-between text-[0.75rem] text-[#6b7280]"><span>R$ 0</span><span>R$ 300</span></div>
      </div>
      <div className="my-5 flex flex-col gap-2">
        <h3 className="m-0 mb-2 text-[0.9rem] font-bold text-[#1f2937]">Nota mínima</h3>
        <p className="m-0 tracking-[0.12em] text-[#2563eb]" aria-label="Nota mínima: quatro estrelas">★ ★ ★ ★ ☆</p>
      </div>
      <button className="inline-flex min-h-10 w-full cursor-pointer items-center justify-center rounded-lg border border-[#2563eb] bg-white px-4 py-2 text-[0.9rem] font-bold text-[#2563eb]" type="button" onClick={() => onSelectGenre('Todos')}>Limpar filtros</button>
    </aside>
  )
}

export default FilterSidebar
