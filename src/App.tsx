import { useEffect, useState } from 'react'
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
    <div className="min-h-screen overflow-x-clip bg-[#f3f4f6] font-[Arial,Helvetica,sans-serif] leading-[1.5] text-[#1f2937]">
      <Header
        wishlistCount={wishlist.length}
        onOpenWishlist={() => {
          setSelectedGame(null)
          setIsWishlistOpen(true)
        }}
      />
      <main className="mx-auto w-full p-4 md:px-6 md:py-5 lg:max-w-[80rem] lg:p-6" id="inicio">
        <FeaturedGame
          game={featuredGame}
          onBuy={() => {
            setIsWishlistOpen(false)
            setSelectedGame(featuredGame)
          }}
        />
        <div className="mt-8 flex flex-col gap-8 md:gap-8 lg:grid lg:grid-cols-[13.75rem_minmax(0,1fr)_16.25rem] lg:items-start lg:gap-x-6 lg:gap-y-0">
          <FilterSidebar
            genres={genres}
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
          />
          <section className="min-w-0" id="promocoes" aria-labelledby="promotions-title">
            <div className="mb-4 flex items-center justify-between gap-3 lg:mb-5">
              <h2 id="promotions-title" className="m-0 border-l-4 border-[#2563eb] pl-3 font-[Arial,Helvetica,sans-serif] text-[1.35rem] font-bold leading-[1.2] text-[#0f2354]">Promoções</h2>
              <span className="whitespace-nowrap text-[0.8rem] font-bold text-[#2563eb] md:hidden lg:inline">Ordenar ▾</span>
            </div>
            <GenreChips
              genres={genres}
              selectedGenre={selectedGenre}
              onSelectGenre={setSelectedGenre}
            />
            {loading ? (
              <p className="m-0 mt-4 text-center text-[0.75rem] text-[#6b7280]">Carregando ofertas...</p>
            ) : error ? (
              <p className="m-0 mt-4 text-center text-[0.75rem] text-[#991b1b]" role="alert">Não foi possível carregar as ofertas. Tente novamente mais tarde.</p>
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
                <p className="m-0 mt-4 text-center text-[0.75rem] text-[#6b7280]">
                  Mostrando {visibleGames.length} ofertas especiais. Preços, notas e descontos ilustrativos, apenas para fins acadêmicos.
                </p>
              </>
            )}
          </section>
          <section className="min-w-0" id="em-breve" aria-labelledby="upcoming-title">
            <div className="mb-4 flex items-center justify-between gap-3 lg:mb-5">
              <h2 id="upcoming-title" className="m-0 border-l-4 border-[#2563eb] pl-3 font-[Arial,Helvetica,sans-serif] text-[1.35rem] font-bold leading-[1.2] text-[#0f2354]">Em breve</h2>
              <span className="hidden text-[0.8rem] font-bold text-[#2563eb]">Lançamentos</span>
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
