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
    <div>
      <h1>{name}</h1>
    </div>
  )
}
