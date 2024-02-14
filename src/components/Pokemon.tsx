import type { Pokemon } from '../types/pokemon'

type PokemonProps = Pokemon

/**
 * Renders a Pokemon component.
 * @param {PokemonProps} props - The component props.
 * @param {string} props.name - The name of the Pokemon.
 * @returns The rendered Pokemon component.
 */
export default function Pokemon({ name }: PokemonProps) {
  return (
    <div className="rounded bg-theme-1 p-4 text-lg font-medium text-theme-3">
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
    </div>
  )
}
