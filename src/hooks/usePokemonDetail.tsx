import { useEffect, useState } from 'react'
import type { PokemonDetailResponse, PokemonDetailType } from '../types/pokemon'

/**
 * Custom hook to fetch and retrieve Pokemon details.
 * @param url - The URL to fetch the Pokemon details from.
 * @returns An object containing the Pokemon details.
 */
export default function usePokemonDetail(url: string) {
  const [pokemonTypes, setPokemonTypes] = useState<string[] | null>(null)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((data: PokemonDetailResponse) => {
        setPokemonTypes(
          data.types.map((type: PokemonDetailType) => type.type.name)
        )
      })
  }, [url])

  return { pokemonTypes }
}
