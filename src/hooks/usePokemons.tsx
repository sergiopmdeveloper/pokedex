import { useEffect, useState } from 'react'
import type { Pokemon, PokemonResponse } from '../types/pokemon'

/**
 * Custom hook to fetch a list of Pokemons from the PokeAPI.
 * @param {number} offset The offset value for pagination.
 * @returns An array of Pokemon objects and pagination information.
 */
export default function usePokemons(offset: number) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [previous, setPrevious] = useState<boolean>(false)
  const [next, setNext] = useState<boolean>(false)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`)
      .then(response => response.json())
      .then((data: PokemonResponse) => {
        setPokemons(data.results)
        setPrevious(!!data.previous)
        setNext(!!data.next)
      })
  }, [offset])

  return { pokemons, previous, next }
}
