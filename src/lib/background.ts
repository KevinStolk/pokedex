export type ColorType =
  | 'unknown'
  | 'fairy'
  | 'dark'
  | 'dragon'
  | 'ice'
  | 'psychic'
  | 'electric'
  | 'grass'
  | 'water'
  | 'fire'
  | 'steel'
  | 'ghost'
  | 'bug'
  | 'rock'
  | 'ground'
  | 'poison'
  | 'flying'
  | 'fighting'
  | 'normal';

export default function background(type: ColorType) {
  const colors = {
    unknown: 'bg-teal-200',
    fairy: 'bg-pink-200',
    dark: 'bg-amber-700',
    dragon: 'bg-purple-500',
    ice: 'bg-cyan-100',
    psychic: 'bg-pink-100',
    electric: 'bg-yellow-100',
    grass: 'bg-green-300',
    water: 'bg-blue-300',
    fire: 'bg-orange-200',
    steel: 'bg-violet-100',
    ghost: 'bg-violet-700',
    bug: 'bg-lime-300',
    rock: 'bg-yellow-300',
    ground: 'bg-amber-200',
    poison: 'bg-fuchsia-700',
    flying: 'bg-purple-200',
    fighting: 'bg-red-200',
    normal: 'bg-warmGray-300',
  };
  return colors[type] ?? 'bg-blue-200';
}
