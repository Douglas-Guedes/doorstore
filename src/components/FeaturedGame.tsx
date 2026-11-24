import type { Game } from '../data/types'

type FeaturedGameProps = {
  game: Game
}

function FeaturedGame({ game }: FeaturedGameProps) {
  return (
    <section className="featured-game" aria-labelledby="featured-title">
      <div className="featured-copy">
        <p className="eyebrow">Jogo da semana</p>
        <h1 id="featured-title">{game.name}</h1>
        <p className="featured-meta">{game.genre} <span aria-hidden="true">·</span> ★ {game.rating} <span className="featured-platform">· PC · Steam</span></p>
        <div className="featured-price">
          <span className="discount-badge featured-discount">{game.discount}</span>
          <div className="price-stack">
            <span className="old-price">{game.oldPrice}</span>
            <strong className="current-price">{game.price}</strong>
          </div>
        </div>
        <button className="button button-light" type="button">Ver oferta</button>
      </div>
      <div className="image-placeholder featured-image" role="img" aria-label={`Imagem ilustrativa do jogo ${game.name}`}>IMG</div>
    </section>
  )
}

export default FeaturedGame
