import { useState } from 'react'
import Pagination from './components/Pagination'
import Pokemon from './components/Pokemon'
import usePokemons from './hooks/usePokemons'
import Loader from './icons/Loader'

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

  if (pokemons.length === 0) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader className="h-10 w-10 animate-spin stroke-theme-1" />
      </div>
    )
  }

  if (pokemons.length > 0) {
    return (
      <div className="mx-auto mt-5 max-w-screen-2xl px-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pokemons.map(pokemon => (
            <Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.name} />
          ))}
        </div>
        <Pagination
          previous={previous}
          next={next}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>
    )
  }
}
