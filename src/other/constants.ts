export const pokemonTypeColors = {
  normal: '#a8a878',
  fire: '#f08030',
  water: '#6890f0',
  electric: '#f8d030',
  grass: '#78c850',
  ice: '#98d8d8',
  fighting: '#c03028',
  poison: '#a040a0',
  ground: '#e0c068',
  flying: '#a890f0',
  psychic: '#f85888',
  bug: '#a8b820',
  rock: '#b8a038',
  ghost: '#705898',
  dragon: '#7038f8',
  dark: '#705848',
  steel: '#b8b8d0',
  fairy: '#ee99ac',
}

type MaxStats = {
  [key: string]: number
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export const maxStats: MaxStats = {
  hp: 255,
  attack: 190,
  defense: 250,
  specialAttack: 194,
  specialDefense: 250,
  speed: 180,
}
