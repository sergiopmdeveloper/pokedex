import usePokemonDetail from '../hooks/usePokemonDetail'
import { pokemonTypeColors } from '../other/constants'
import type { Pokemon } from '../types/pokemon'
import { capitalizeFirstLetter } from '../utils/formatting'

type PokemonProps = Pokemon

/**
 * Renders a Pokemon component.
 * @param {PokemonProps} props - The component props.
 * @param {string} props.name - The name of the Pokemon.
 * @param {string} props.url - The URL of the Pokemon.
 * @returns The rendered Pokemon component.
 */
export default function Pokemon({ name, url }: PokemonProps) {
  const { pokemonTypes } = usePokemonDetail(url)

  return (
    <div className="relative rounded bg-theme-1 p-4 text-lg font-medium text-theme-3">
      <h1>{capitalizeFirstLetter(name)}</h1>
      {pokemonTypes && (
        <div className="absolute right-2 top-2 flex gap-1 text-xs">
          {pokemonTypes.map((type, index) => (
            <span
              className={`rounded px-1 py-0.5`}
              style={{
                backgroundColor:
                  pokemonTypeColors[type as keyof typeof pokemonTypeColors],
              }}
              key={index}
            >
              {capitalizeFirstLetter(type)}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
