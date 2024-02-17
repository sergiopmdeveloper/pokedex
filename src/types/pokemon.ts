// Types for the endpoint https://pokeapi.co/api/v2/pokemon

export type PokemonResponse = {
  count: number
  next: string
  previous: string
  results: Pokemon[]
}

export type Pokemon = {
  name: string
  url: string
}

export type PokemonDetailResponse = {
  types: PokemonDetailType[]
}

export type PokemonDetailType = {
  type: {
    name: string
  }
}
