import usePokemonDetail from '../hooks/usePokemonDetail'
import Loader from '../icons/Loader'
import { pokemonTypeColors } from '../other/constants'
import type { Pokemon } from '../types/pokemon'
import { capitalizeFirstLetter } from '../utils/formatting'
import PokemonStat from './PokemonStat'

type PokemonProps = Pokemon

/**
 * Renders a Pokemon component.
 * @param {PokemonProps} props - The component props.
 * @param {string} props.name - The name of the Pokemon.
 * @param {string} props.url - The URL of the Pokemon.
 * @returns The rendered Pokemon component.
 */
export default function Pokemon({ name, url }: PokemonProps) {
  const { pokemonTypes, pokemonSprite, pokemonStats } = usePokemonDetail(url)

  return (
    <div className="relative flex flex-col gap-5 rounded bg-theme-1 p-4 text-lg font-medium text-theme-3">
      <h1>{capitalizeFirstLetter(name)}</h1>
      {!pokemonTypes || !pokemonSprite || !pokemonStats ? (
        <Loader className="h-8 w-8 animate-spin stroke-theme-3" />
      ) : (
        <>
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
          <img
            className="mx-auto w-2/4 sm:w-3/4"
            src={pokemonSprite}
            alt={`${capitalizeFirstLetter(name)} sprite`}
          />
          <div className="flex flex-col gap-1">
            <span className="mb-2 w-fit rounded-md bg-theme-2 px-2">
              Power {''}
              {Object.values(pokemonStats).reduce((acc, stat) => acc + stat, 0)}
            </span>
            {Object.entries(pokemonStats).map(([stat, value]) => (
              <PokemonStat key={stat} stat={stat} value={value} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
