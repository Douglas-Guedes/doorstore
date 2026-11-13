import type { Game } from './types'

export const games: Game[] = [
  { id: 1, name: 'Red Dead Redemption 2', genre: 'Aventura', rating: 4.9, oldPrice: 'R$ 249,90', discount: '-60%', price: 'R$ 99,96' },
  { id: 2, name: 'Dark Souls II: SOTFS', genre: 'RPG', rating: 4.6, oldPrice: 'R$ 119,90', discount: '-75%', price: 'R$ 29,98' },
  { id: 3, name: 'The Witcher 3: Wild Hunt', genre: 'RPG', rating: 4.9, oldPrice: 'R$ 119,90', discount: '-70%', price: 'R$ 35,97' },
  { id: 4, name: 'Elden Ring', genre: 'RPG', rating: 4.8, oldPrice: 'R$ 229,90', discount: '-30%', price: 'R$ 160,93' },
  { id: 5, name: 'Hollow Knight', genre: 'Indie', rating: 4.9, oldPrice: 'R$ 46,90', discount: '-50%', price: 'R$ 23,45' },
  { id: 6, name: 'Cyberpunk 2077', genre: 'Ação', rating: 4.4, oldPrice: 'R$ 199,90', discount: '-50%', price: 'R$ 99,95' },
  { id: 7, name: 'Forza Horizon 5', genre: 'Corrida', rating: 4.7, oldPrice: 'R$ 249,90', discount: '-40%', price: 'R$ 149,94' },
  { id: 8, name: 'Age of Empires II: DE', genre: 'Estratégia', rating: 4.7, oldPrice: 'R$ 79,90', discount: '-50%', price: 'R$ 39,95' },
  { id: 9, name: 'Stardew Valley', genre: 'Indie', rating: 4.9, oldPrice: 'R$ 24,90', discount: '-20%', price: 'R$ 19,92' },
  { id: 10, name: 'Resident Evil 4', genre: 'Ação', rating: 4.8, oldPrice: 'R$ 199,90', discount: '-45%', price: 'R$ 109,95' },
]

export const featuredGame: Game = {
  id: 1,
  name: 'Red Dead Redemption 2',
  genre: 'Aventura',
  rating: 4.9,
  oldPrice: 'R$ 249,90',
  discount: '-60%',
  price: 'R$ 99,96',
}

export const genres: string[] = ['Todos', 'Ação', 'RPG', 'Indie', 'Corrida', 'Estratégia', 'Aventura']
