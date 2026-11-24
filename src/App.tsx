import { useEffect, useState } from 'react'
import './App.css'
import FeaturedGame from './components/FeaturedGame'
import FilterSidebar from './components/FilterSidebar'
import Footer from './components/Footer'
import GameGrid from './components/GameGrid'
import GenreChips from './components/GenreChips'
import Header from './components/Header'
import PurchasePanel from './components/PurchasePanel'
import UpcomingList from './components/UpcomingList'
import WishlistModal from './components/WishlistModal'
import { fetchGames } from './data/api'
import { featuredGame, genres } from './data/games'
import type { Game } from './data/types'
import { upcomingGames } from './data/upcomingGames'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>('Todos')
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [wishlist, setWishlist] = useState<number[]>([])
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false)
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)

  useEffect(() => {
    fetchGames()
      .then((data) => setGames(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const visibleGames = selectedGenre === 'Todos'
    ? games
    : games.filter((game) => game.genre === selectedGenre)
  const wishlistGames = games.filter((game) => wishlist.includes(game.id))

  function toggleWishlist(id: number) {
    setWishlist((currentWishlist) => currentWishlist.includes(id)
      ? currentWishlist.filter((gameId) => gameId !== id)
      : [...currentWishlist, id])
  }

  return (
    <div className="site-shell">
      <Header
        wishlistCount={wishlist.length}
        onOpenWishlist={() => {
          setSelectedGame(null)
          setIsWishlistOpen(true)
        }}
      />
      <main className="page-content" id="inicio">
        <FeaturedGame
          game={featuredGame}
          onBuy={() => {
            setIsWishlistOpen(false)
            setSelectedGame(featuredGame)
          }}
        />
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
            {loading ? (
              <p className="listing-note">Carregando ofertas...</p>
            ) : error ? (
              <p className="listing-note error-message" role="alert">Não foi possível carregar as ofertas. Tente novamente mais tarde.</p>
            ) : (
              <>
                <GameGrid
                  games={visibleGames}
                  wishlist={wishlist}
                  onToggleFavorite={toggleWishlist}
                  onBuy={(game) => {
                    setIsWishlistOpen(false)
                    setSelectedGame(game)
                  }}
                />
                <p className="listing-note">
                  Mostrando {visibleGames.length} ofertas especiais. Preços, notas e descontos ilustrativos, apenas para fins acadêmicos.
                </p>
              </>
            )}
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
      {isWishlistOpen && (
        <WishlistModal
          games={wishlistGames}
          onClose={() => setIsWishlistOpen(false)}
          onRemove={toggleWishlist}
        />
      )}
      {selectedGame && (
        <PurchasePanel
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  )
}

export default App
