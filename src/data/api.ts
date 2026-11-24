import type { Game } from './types'

export async function fetchGames(): Promise<Game[]> {
  const response = await fetch('/games.json')

  if (!response.ok) {
    throw new Error('Não foi possível carregar as ofertas.')
  }

  return response.json() as Promise<Game[]>
}
