import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import text from '../lib/text';
import background, { ColorType } from '../lib/background';
import axios from 'axios';

interface ITypes {
  type: {
    name: string;
  };
}

interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  sprites: {
    front_default?: string;
    other: {
      'official-artwork': {
        front_default?: string;
      };
    };
  };
  stats: Array<{ base_stat: number }>;
  types: Array<{ type: { name: string }; slot: number }>;
}

const PokemonInfoPage = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setPokemon(res.data);
    }
    fetchData();
  }, [pokemonName]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='pt-4 pl-4'>
        <Link className='hover:underline' to='/'>
          Back
        </Link>
      </div>
      <div className='pt-4'>
        <div className='grid sm:border rounded-lg bg-white max-w-md mx-auto'>
          <h1 className='px-4 capitalize text-4xl font-semibold py-4'>
            {pokemon.name}
          </h1>
          <div className='flex px-4 flex-wrap'>
            {pokemon.types.map((t: ITypes) => (
              <div
                className={`rounded-lg px-2 mx-1 py-1 ${background(
                  t.type.name as ColorType
                )}`}
                key={t.type.name}
              >
                <span
                  className={`capitalize font-medium ${text(
                    t.type.name as ColorType
                  )}`}
                >
                  {t.type.name}
                </span>
              </div>
            ))}
          </div>

          <img
            className='h-64 w-64 object-contain mx-auto cursor-pointer'
            src={
              pokemon.sprites.other['official-artwork'].front_default !== null
                ? pokemon.sprites.other['official-artwork'].front_default
                : pokemon.sprites.front_default
                ? pokemon.sprites.front_default
                : 'https://pngimg.com/uploads/question_mark/question_mark_PNG1.png'
            }
            alt={pokemon.name}
            onClick={() => {
              window.open(
                `https://pokemondb.net/pokedex/${pokemon.name}`,
                '_blank'
              );
            }}
          />
          <div className='grid grid-cols-3 divide-x divide-gray-200 px-4 py-2 '>
            <div className='grid justify-items-center'>
              <span className='text-2xl font-semibold'>
                {pokemon.base_experience}
              </span>
              <span className='text-gray-600 text-xs uppercase font-medium text-center'>
                Base XP
              </span>
            </div>
            <span className='grid justify-items-center'>
              <span className='text-2xl font-semibold'>
                {pokemon.stats[0].base_stat}
              </span>
              <span className='text-gray-600 text-xs uppercase font-medium text-center'>
                Base HP
              </span>
            </span>

            <span className='grid justify-items-center'>
              <span className='text-2xl font-semibold'>
                {pokemon.stats[1].base_stat}
              </span>
              <span className='text-gray-600 text-xs uppercase font-medium text-center'>
                Base Attack
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfoPage;
