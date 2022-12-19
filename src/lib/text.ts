import { ColorType } from './background';

export default function text(type: ColorType) {
  const colors = {
    unknown: 'text-teal-900',
    fairy: 'text-pink-900',
    dark: 'text-amber-100',
    dragon: 'text-purple-50',
    ice: 'text-cyan-900',
    psychic: 'text-pink-700',
    electric: 'text-yellow-700',
    grass: 'text-green-900',
    water: 'text-blue-900',
    fire: 'text-orange-900',
    steel: 'text-violet-700',
    ghost: 'text-violet-100',
    bug: 'text-lime-900',
    rock: 'text-yellow-900',
    ground: 'text-amber-900',
    poison: 'text-fuchsia-100',
    flying: 'text-purple-900',
    fighting: 'text-red-900',
    normal: 'text-warmGray-900',
  };
  return colors[type] ?? 'text-blue-900';
}
