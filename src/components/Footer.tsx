function Footer() {
  return (
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
  )
}

export default Footer
