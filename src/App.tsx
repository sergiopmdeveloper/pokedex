import clsx from 'clsx'
import { useState } from 'react'
import Pokemon from './components/Pokemon'
import usePokemons from './hooks/usePokemons'

/**
 * Renders the main application component.
 * @returns The main application component.
 */
export default function App() {
  const [offset, setOffset] = useState(0)
  const { pokemons, previous, next } = usePokemons(offset)

  /**
   * Decreases the offset by 100
   * if there is a previous value.
   */
  const handlePrevious = () => {
    if (previous) {
      setOffset(offset - 100)
    }
  }

  /**
   * Increases the offset by 100
   * if there is a next value.
   */
  const handleNext = () => {
    if (next) {
      setOffset(offset + 100)
    }
  }

  if (pokemons.length > 0) {
    return (
      <>
        {pokemons.map(pokemon => (
          <Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.name} />
        ))}
        <div className="flex gap-2">
          <button
            className={clsx('bg-theme-1 text-theme-3', {
              'opacity-50': !previous,
            })}
            onClick={handlePrevious}
            disabled={!previous}
          >
            Previous
          </button>
          <button
            className={clsx('bg-theme-1 text-theme-3', { 'opacity-50': !next })}
            onClick={handleNext}
            disabled={!next}
          >
            Next
          </button>
        </div>
      </>
    )
  }
}
