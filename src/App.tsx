import usePokemons from './hooks/usePokemons'

/**
 * Renders the main application component.
 * @returns The main application component.
 */
export default function App() {
  const pokemons = usePokemons(0)

  if (pokemons.length > 0) {
    return <h1>First pókemon: {pokemons[0].name}</h1>
  }
}
