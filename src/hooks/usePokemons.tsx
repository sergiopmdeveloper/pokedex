import { useEffect, useState } from 'react'
import type { Pokemon, PokemonResponse } from '../types/pokemon'

/**
 * Custom hook to fetch a list of Pokemons from the PokeAPI.
 * @param {number} offset The offset value for pagination.
 * @returns An array of Pokemon objects.
 */
export default function usePokemons(offset: number) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`)
      .then(response => response.json())
      .then((data: PokemonResponse) => {
        setPokemons(data.results)
      })
  }, [offset])

  return pokemons
}
