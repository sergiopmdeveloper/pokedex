import { useEffect, useState } from 'react'
import type { Pokemon, PokemonResponse } from '../types/pokemon'

/**
 * Custom hook to fetch a list of Pokemons from the PokeAPI.
 * @param {number} offset The offset value for pagination.
 * @returns An array of Pokemon objects.
 */
export default function usePokemons(offset: number) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [previous, setPrevious] = useState<string | null>(null)
  const [next, setNext] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`)
      .then(response => response.json())
      .then((data: PokemonResponse) => {
        setPokemons(data.results)
        setPrevious(data.previous)
        setNext(data.next)
      })
  }, [offset])

  return { pokemons, previous, next }
}
