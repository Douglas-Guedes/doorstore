type GenreChipsProps = {
  genres: string[]
  selectedGenre: string
  onSelectGenre: (genre: string) => void
}

function GenreChips({ genres, selectedGenre, onSelectGenre }: GenreChipsProps) {
  return (
    <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] md:mx-0 md:flex-wrap md:overflow-visible md:p-0 lg:hidden" aria-label="Filtrar por gênero">
      {genres.map((genre) => (
        <button
          className={`flex-none cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-[0.85rem] font-bold ${selectedGenre === genre ? 'border-[#2563eb] bg-[#2563eb] text-white' : 'border-[#60a5fa] bg-white text-[#2563eb]'}`}
          type="button"
          key={genre}
          onClick={() => onSelectGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}

export default GenreChips
