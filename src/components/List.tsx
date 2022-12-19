import React from 'react';
import { Link } from 'react-router-dom';

interface IListProps {
  name: string;
  url: string;
}

const List = ({ pokemons }: any) => {
  return (
    <div className='grid justify-items-center sm:grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-24 px-8 py-4'>
      {pokemons.map((p: IListProps, i: number) => (
        <Link to={`${p.name}`} className='w-full' key={i}>
          <div className='border grid justify-items-center shadow-md bg-white shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <img
              className='h-32 w-44 my-2 object-contain'
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                p.url.split('/').reverse()[1]
              }.png`}
              onError={(e) =>
                ((e.target as HTMLImageElement).src =
                  'https://pngimg.com/uploads/question_mark/question_mark_PNG1.png')
              }
            />
            <span className='text-center capitalize h-8 my-2 '>{p.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
