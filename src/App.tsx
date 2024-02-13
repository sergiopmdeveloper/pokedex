import { useState } from 'react'
import Pagination from './components/Pagination'
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
        <Pagination
          previous={previous}
          next={next}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </>
    )
  }
}
