type FilterSidebarProps = {
  genres: string[]
  selectedGenre: string
  onSelectGenre: (genre: string) => void
}

function FilterSidebar({ genres, selectedGenre, onSelectGenre }: FilterSidebarProps) {
  return (
    <aside className="filter-sidebar" aria-labelledby="filters-title">
      <h2 id="filters-title">Filtros</h2>
      <fieldset className="filter-group">
        <legend>Gênero</legend>
        {genres.map((genre) => (
          <label key={genre}>
            <input
              type="checkbox"
              checked={selectedGenre === genre}
              onChange={() => onSelectGenre(selectedGenre === genre ? 'Todos' : genre)}
            />
            {genre}
          </label>
        ))}
      </fieldset>
      <div className="filter-group">
        <label className="filter-label" htmlFor="max-price">Preço máximo</label>
        <input className="price-range" id="max-price" type="range" min="0" max="300" defaultValue="180" />
        <div className="range-values"><span>R$ 0</span><span>R$ 300</span></div>
      </div>
      <div className="filter-group">
        <h3>Nota mínima</h3>
        <p className="rating-filter" aria-label="Nota mínima: quatro estrelas">★ ★ ★ ★ ☆</p>
      </div>
      <button className="button button-outline clear-filters" type="button" onClick={() => onSelectGenre('Todos')}>Limpar filtros</button>
    </aside>
  )
}

export default FilterSidebar
