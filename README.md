## Fase 4: Dados externos e Tailwind CSS

**Tema do projeto:** DoorStore, uma vitrine de chaves de jogos digitais para PC com foco em promoções.

**Vídeo explicativo:** a ser adicionado

### O que foi feito nesta fase
- A listagem principal (Promoções) passou a ser carregada de um JSON externo (`public/games.json`) com `fetch` dentro de `useEffect`, por meio da função `fetchGames` (`src/data/api.ts`).
- Estado de carregando ("Carregando ofertas...") e estado de erro com mensagem compreensível para o usuário.
- A listagem secundária (Em breve), o banner e o filtro por gênero continuam funcionando com dados locais e `useState`.
- Estado dos dados externos tipado (`useState<Game[]>([])`).
- Migração dos estilos do CSS para o Tailwind CSS: `App.css` removido, `index.css` só com `@import "tailwindcss";`, e media queries convertidas para os breakpoints `md:` e `lg:`, mantendo o layout fiel ao wireframe.
- README atualizado com instruções de execução e fonte dos dados.
- Extras fora do escopo mínimo: capas dos jogos, janela da lista de desejos, aba de compra de demonstração (sem pagamento) e nome do fundador no rodapé.

### Decisões técnicas
- Fonte dos dados: arquivo JSON local em `public/`, que o `fetch` lê por `/games.json`, sem depender de serviços externos.
- O acesso aos dados fica em `src/data/api.ts`, separado dos componentes, e o `App.tsx` só controla os estados `games`, `loading` e `error`.
- A migração foi feita em commits separados: instalação do Tailwind, conversão dos componentes e remoção do `App.css`.
- Responsividade mobile first mantida: classes base para o mobile, `md:` para o tablet e `lg:` para o desktop.
- As capas usam `object-fit: cover` e, se uma imagem falhar, o placeholder "IMG" continua visível.
- A lista de desejos e a aba de compra são janelas sobre a própria página, controladas por `useState`, sem trocar de rota.

### Desafios bonificados entregues nesta fase (se houver)
- Nenhum.

### Dependências adicionadas e justificativa (se houver)
- `tailwindcss` e `@tailwindcss/vite`: previstos no escopo da Fase 4, instalados como feito em aula.

#Autor:
Douglas Robeto dos S. Guedes
