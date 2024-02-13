import type { Pokemon } from '../types/pokemon'

type PokemonProps = Pokemon

export default function Pokemon({ name }: PokemonProps) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
