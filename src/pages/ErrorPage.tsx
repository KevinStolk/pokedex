import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      <h1 className='text-6xl font-bold text-gray-900'>404</h1>
      <p className='text-xl font-semibold text-gray-700 mt-4'>
        Sorry, the page you are looking for could not be found.
      </p>
      <Link
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8'
        to='/'
      >
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
