import { maxStats } from '../other/constants'
import { splitWordsByCapitalLetter } from '../utils/formatting'

type PokemonStatProps = {
  stat: string
  value: number
}

/**
 * Renders a Pokemon stat component.
 * @param {PokemonStatProps} props - The component props.
 * @param {string} props.stat - The name of the stat.
 * @param {number} props.value - The value of the stat.
 * @returns The rendered Pokemon stat component.
 */
export default function PokemonStat({ stat, value }: PokemonStatProps) {
  return (
    <div className="relative flex h-6 items-center justify-between bg-theme-2">
      <span className="z-10 pl-2 text-sm text-theme-3">{value}</span>
      <span className="z-10 pr-2 text-sm text-theme-3">
        {splitWordsByCapitalLetter(stat)}
      </span>
      <div
        className="absolute h-full bg-green-500"
        style={{ width: `${(value / maxStats[stat]) * 100}%` }}
      ></div>
    </div>
  )
}
