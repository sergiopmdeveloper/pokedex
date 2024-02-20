import { useEffect, useState } from 'react'
import type {
  PokemonDetailResponse,
  PokemonDetailType,
  PokemonStats,
} from '../types/pokemon'

/**
 * Custom hook to fetch and retrieve Pokemon details.
 * @param url - The URL to fetch the Pokemon details from.
 * @returns An object containing the Pokemon details.
 */
export default function usePokemonDetail(url: string) {
  const [pokemonTypes, setPokemonTypes] = useState<string[] | null>(null)
  const [pokemonSprite, setPokemonSprite] = useState<string | null>(null)
  const [pokemonStats, setPokemonStats] = useState<PokemonStats | null>(null)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((data: PokemonDetailResponse) => {
        setPokemonTypes(
          data.types.map((type: PokemonDetailType) => type.type.name)
        )
        setPokemonSprite(data.sprites.other['official-artwork'].front_default)
        setPokemonStats({
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        })
      })
  }, [url])

  return { pokemonTypes, pokemonSprite, pokemonStats }
}
