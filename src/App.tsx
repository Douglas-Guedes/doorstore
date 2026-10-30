import './App.css'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-content">
          <a className="brand" href="#inicio" aria-label="DoorStore, início">
            <span className="brand-mark" aria-hidden="true">D</span>
            <span>DoorStore</span>
          </a>
          <nav className="main-navigation" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#promocoes">Promoções</a>
            <a href="#em-breve">Em breve</a>
            <a href="#contato">Contato</a>
          </nav>
          <label className="search-field">
            <span className="visually-hidden">Buscar jogos</span>
            <input type="search" placeholder="Buscar jogos..." />
          </label>
          <button className="wishlist-button" type="button">♡ Lista de desejos</button>
          <button className="menu-button" type="button" aria-label="Abrir menu">☰</button>
        </div>
      </header>

      <main className="page-content" id="inicio">
        <section className="featured-game" aria-labelledby="featured-title">
          <div className="featured-copy">
            <p className="eyebrow">Jogo da semana</p>
            <h1 id="featured-title">Red Dead Redemption 2</h1>
            <p className="featured-meta">Aventura <span aria-hidden="true">·</span> ★ 4.9 <span className="featured-platform">· PC · Steam</span></p>
            <div className="featured-price">
              <span className="discount-badge featured-discount">-60%</span>
              <div className="price-stack">
                <span className="old-price">R$ 249,90</span>
                <strong className="current-price">R$ 99,96</strong>
              </div>
            </div>
            <button className="button button-light" type="button">Ver oferta</button>
          </div>
          <div className="image-placeholder featured-image" role="img" aria-label="Imagem ilustrativa do jogo Red Dead Redemption 2">IMG</div>
        </section>

        <div className="catalog-layout">
          <aside className="filter-sidebar" aria-labelledby="filters-title">
            <h2 id="filters-title">Filtros</h2>
            <fieldset className="filter-group">
              <legend>Gênero</legend>
              <label><input type="checkbox" defaultChecked /> Todos</label>
              <label><input type="checkbox" /> Ação</label>
              <label><input type="checkbox" /> RPG</label>
              <label><input type="checkbox" /> Indie</label>
              <label><input type="checkbox" /> Corrida</label>
              <label><input type="checkbox" /> Estratégia</label>
              <label><input type="checkbox" /> Aventura</label>
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
            <button className="button button-outline clear-filters" type="button">Limpar filtros</button>
          </aside>

          <section className="promotions-section" id="promocoes" aria-labelledby="promotions-title">
            <div className="section-heading">
              <h2 id="promotions-title">Promoções</h2>
              <span className="sort-label">Ordenar ▾</span>
            </div>
            <div className="genre-chips" aria-label="Filtrar por gênero">
              <button className="genre-chip is-selected" type="button">Todos</button>
              <button className="genre-chip" type="button">Ação</button>
              <button className="genre-chip" type="button">RPG</button>
              <button className="genre-chip" type="button">Indie</button>
              <button className="genre-chip" type="button">Corrida</button>
              <button className="genre-chip" type="button">Estratégia</button>
              <button className="genre-chip" type="button">Aventura</button>
            </div>

            <div className="game-grid">
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de Red Dead Redemption 2">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar Red Dead Redemption 2">♡</button>
                <div className="game-card-content">
                  <h3>Red Dead Redemption 2</h3>
                  <p className="game-meta">Aventura <span>·</span> ★ 4.9</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-60%</span><span className="old-price">R$ 249,90</span><strong>R$ 99,96</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de Dark Souls II: SOTFS">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar Dark Souls II: SOTFS">♡</button>
                <div className="game-card-content">
                  <h3>Dark Souls II: SOTFS</h3>
                  <p className="game-meta">RPG <span>·</span> ★ 4.6</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-75%</span><span className="old-price">R$ 119,90</span><strong>R$ 29,98</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de The Witcher 3: Wild Hunt">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar The Witcher 3: Wild Hunt">♡</button>
                <div className="game-card-content">
                  <h3>The Witcher 3: Wild Hunt</h3>
                  <p className="game-meta">RPG <span>·</span> ★ 4.9</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-70%</span><span className="old-price">R$ 119,90</span><strong>R$ 35,97</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de Elden Ring">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar Elden Ring">♡</button>
                <div className="game-card-content">
                  <h3>Elden Ring</h3>
                  <p className="game-meta">RPG <span>·</span> ★ 4.8</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-30%</span><span className="old-price">R$ 229,90</span><strong>R$ 160,93</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de Hollow Knight">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar Hollow Knight">♡</button>
                <div className="game-card-content">
                  <h3>Hollow Knight</h3>
                  <p className="game-meta">Indie <span>·</span> ★ 4.9</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-50%</span><span className="old-price">R$ 46,90</span><strong>R$ 23,45</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de Cyberpunk 2077">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar Cyberpunk 2077">♡</button>
                <div className="game-card-content">
                  <h3>Cyberpunk 2077</h3>
                  <p className="game-meta">Ação <span>·</span> ★ 4.4</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-50%</span><span className="old-price">R$ 199,90</span><strong>R$ 99,95</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de Forza Horizon 5">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar Forza Horizon 5">♡</button>
                <div className="game-card-content">
                  <h3>Forza Horizon 5</h3>
                  <p className="game-meta">Corrida <span>·</span> ★ 4.7</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-40%</span><span className="old-price">R$ 249,90</span><strong>R$ 149,94</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de Age of Empires II: DE">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar Age of Empires II: DE">♡</button>
                <div className="game-card-content">
                  <h3>Age of Empires II: DE</h3>
                  <p className="game-meta">Estratégia <span>·</span> ★ 4.7</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-50%</span><span className="old-price">R$ 79,90</span><strong>R$ 39,95</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de Stardew Valley">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar Stardew Valley">♡</button>
                <div className="game-card-content">
                  <h3>Stardew Valley</h3>
                  <p className="game-meta">Indie <span>·</span> ★ 4.9</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-20%</span><span className="old-price">R$ 24,90</span><strong>R$ 19,92</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
              <article className="game-card">
                <div className="image-placeholder card-image" role="img" aria-label="Imagem ilustrativa de Resident Evil 4">IMG</div>
                <button className="favorite-button" type="button" aria-label="Favoritar Resident Evil 4">♡</button>
                <div className="game-card-content">
                  <h3>Resident Evil 4</h3>
                  <p className="game-meta">Ação <span>·</span> ★ 4.8</p>
                  <div className="game-prices"><span className="discount-badge card-discount">-45%</span><span className="old-price">R$ 199,90</span><strong>R$ 109,95</strong></div>
                  <button className="button button-primary buy-button" type="button">Comprar</button>
                </div>
              </article>
            </div>
            <p className="listing-note">Preços, notas e descontos ilustrativos, apenas para fins acadêmicos.</p>
          </section>

          <section className="upcoming-section" id="em-breve" aria-labelledby="upcoming-title">
            <div className="section-heading">
              <h2 id="upcoming-title">Em breve</h2>
              <span className="sort-label upcoming-more">Lançamentos</span>
            </div>
            <div className="upcoming-list">
              <article className="upcoming-card">
                <div className="image-placeholder upcoming-image" role="img" aria-label="Imagem ilustrativa de Sky Forge">IMG</div>
                <div className="upcoming-card-content">
                  <h3>Sky Forge</h3>
                  <p className="release-date">Lança em 12/11/2026</p>
                  <p className="platform">PC · Steam</p>
                </div>
              </article>
              <article className="upcoming-card">
                <div className="image-placeholder upcoming-image" role="img" aria-label="Imagem ilustrativa de Dark Meridian">IMG</div>
                <div className="upcoming-card-content">
                  <h3>Dark Meridian</h3>
                  <p className="release-date">Lança em 28/11/2026</p>
                  <p className="platform">PC · Steam</p>
                </div>
              </article>
              <article className="upcoming-card">
                <div className="image-placeholder upcoming-image" role="img" aria-label="Imagem ilustrativa de Echo Garden">IMG</div>
                <div className="upcoming-card-content">
                  <h3>Echo Garden</h3>
                  <p className="release-date">Lança em 05/12/2026</p>
                  <p className="platform">PC · Steam</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer" id="contato">
        <div className="footer-content">
          <div className="footer-brand">
            <a className="brand" href="#inicio">
              <span className="brand-mark" aria-hidden="true">D</span>
              <span>DoorStore</span>
            </a>
            <p>Vitrine acadêmica de chaves de jogos para PC.</p>
          </div>
          <div className="footer-link-groups">
            <nav className="footer-group" aria-label="Navegação do rodapé">
              <h2>Navegação</h2>
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#promocoes">Promoções</a></li>
                <li><a href="#em-breve">Em breve</a></li>
              </ul>
            </nav>
            <nav className="footer-group" aria-label="Ajuda">
              <h2>Ajuda</h2>
              <ul>
                <li><a href="#contato">Suporte</a></li>
                <li><a href="#contato">Termos</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </nav>
            <nav className="footer-group" aria-label="Redes sociais">
              <h2>Social</h2>
              <ul>
                <li><a href="#contato">Instagram</a></li>
                <li><a href="#contato">Discord</a></li>
                <li><a href="#contato">YouTube</a></li>
              </ul>
            </nav>
          </div>
          <p className="copyright">© 2026 DoorStore · Projeto acadêmico</p>
        </div>
      </footer>
    </div>
  )
}

export default App
