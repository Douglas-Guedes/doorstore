import { useState } from 'react'
import './App.css'
import FeaturedGame from './components/FeaturedGame'
import FilterSidebar from './components/FilterSidebar'
import Footer from './components/Footer'
import GameGrid from './components/GameGrid'
import GenreChips from './components/GenreChips'
import Header from './components/Header'
import UpcomingList from './components/UpcomingList'
import { featuredGame, games, genres } from './data/games'
import { upcomingGames } from './data/upcomingGames'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>('Todos')
  const visibleGames = selectedGenre === 'Todos'
    ? games
    : games.filter((game) => game.genre === selectedGenre)

  return (
    <div className="site-shell">
      <Header />
      <main className="page-content" id="inicio">
        <FeaturedGame game={featuredGame} />
        <div className="catalog-layout">
          <FilterSidebar
            genres={genres}
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
          />
          <section className="promotions-section" id="promocoes" aria-labelledby="promotions-title">
            <div className="section-heading">
              <h2 id="promotions-title">Promoções</h2>
              <span className="sort-label">Ordenar ▾</span>
            </div>
            <GenreChips
              genres={genres}
              selectedGenre={selectedGenre}
              onSelectGenre={setSelectedGenre}
            />
            <GameGrid games={visibleGames} />
            <p className="listing-note">
              Mostrando {visibleGames.length} ofertas especiais. Preços, notas e descontos ilustrativos, apenas para fins acadêmicos.
            </p>
          </section>
          <section className="upcoming-section" id="em-breve" aria-labelledby="upcoming-title">
            <div className="section-heading">
              <h2 id="upcoming-title">Em breve</h2>
              <span className="sort-label upcoming-more">Lançamentos</span>
            </div>
            <UpcomingList games={upcomingGames} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
