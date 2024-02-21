import { useEffect, useState } from 'react'
import type { Pokemon, PokemonResponse } from '../types/pokemon'

/**
 * Custom hook to fetch a list of Pokemons from the PokeAPI.
 * @param {number} offset The offset value for pagination.
 * @param {string | null} name The name of the Pokemon to search for.
 * @returns An array of Pokemon objects and pagination information.
 */
export default function usePokemons(offset: number, name: string | null) {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null)
  const [previous, setPrevious] = useState<boolean>(false)
  const [next, setNext] = useState<boolean>(false)

  useEffect(() => {
    let url = 'https://pokeapi.co/api/v2/pokemon'

    if (!name) {
      url += `?limit=100&offset=${offset}`
    } else {
      url += '?limit=1302'
    }

    fetch(url)
      .then(response => response.json())
      .then((data: PokemonResponse) => {
        if (name) {
          const filtered = data.results.filter(pokemon =>
            pokemon.name.toLowerCase().includes(name.toLowerCase())
          )
          setPokemons(filtered)
          setPrevious(false)
          setNext(false)
          return
        }
        setPokemons(data.results)
        setPrevious(!!data.previous)
        setNext(!!data.next)
      })
  }, [offset, name])

  return { pokemons, previous, next }
}
