import { useRef, useState } from 'react'
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
  const [name, setName] = useState<string | null>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const { pokemons, previous, next } = usePokemons(offset, name)

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

  return (
    <>
      <div className="mx-auto mt-5 max-w-screen-2xl px-5">
        <div className="mb-5">
          <form className="flex gap-2">
            <input
              className="w-36 rounded-md bg-theme-3 px-2 py-1 text-sm sm:w-auto sm:text-base"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Name..."
              ref={nameRef}
            />
            <button
              className="rounded-md bg-theme-1 px-2 text-sm text-theme-3 hover:brightness-150 sm:text-base"
              type="submit"
              onClick={event => {
                event.preventDefault()
                setName(nameRef.current?.value ?? null)
              }}
            >
              Search
            </button>
          </form>
        </div>
        {!pokemons && (
          <div className="flex w-full justify-center">
            <Loader className="h-10 w-10 animate-spin stroke-theme-1" />
          </div>
        )}
        {pokemons?.length === 0 && (
          <div className="flex w-full justify-center">
            <p className="text-theme-1">No Pokémons found</p>
          </div>
        )}
        {(pokemons?.length ?? 0) > 0 && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {pokemons?.map(pokemon => (
                <Pokemon
                  name={pokemon.name}
                  url={pokemon.url}
                  key={pokemon.name}
                />
              ))}
            </div>
            <Pagination
              previous={previous}
              next={next}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </>
        )}
      </div>
    </>
  )
}
