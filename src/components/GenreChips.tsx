type GenreChipsProps = {
  genres: string[]
  selectedGenre: string
  onSelectGenre: (genre: string) => void
}

function GenreChips({ genres, selectedGenre, onSelectGenre }: GenreChipsProps) {
  return (
    <div className="genre-chips" aria-label="Filtrar por gênero">
      {genres.map((genre) => (
        <button
          className={`genre-chip${selectedGenre === genre ? ' is-selected' : ''}`}
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
