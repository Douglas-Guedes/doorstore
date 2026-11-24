import type { Game } from './types'

export const featuredGame: Game = {
  id: 1,
  name: 'Red Dead Redemption 2',
  cover: '/covers/red-dead-redemption-2.jpg',
  genre: 'Aventura',
  rating: 4.9,
  oldPrice: 'R$ 249,90',
  discount: '-60%',
  price: 'R$ 99,96',
}

export const genres: string[] = ['Todos', 'Ação', 'RPG', 'Indie', 'Corrida', 'Estratégia', 'Aventura']
