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
  sprites: PokemonDetailSprite
  stats: PokemonDetailStat[]
}

export type PokemonDetailType = {
  type: {
    name: string
  }
}

export type PokemonDetailSprite = {
  other: {
    'official-artwork': {
      front_default: string
    }
  }
}

export type PokemonDetailStat = {
  base_stat: number
}

export type PokemonStats = {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}
