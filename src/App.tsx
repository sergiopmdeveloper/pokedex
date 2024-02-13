import Pokemon from './components/Pokemon'
import usePokemons from './hooks/usePokemons'

/**
 * Renders the main application component.
 * @returns The main application component.
 */
export default function App() {
  const pokemons = usePokemons(0)

  if (pokemons.length > 0) {
    return pokemons.map(pokemon => (
      <Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.name} />
    ))
  }
}
