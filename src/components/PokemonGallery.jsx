import React from 'react';
import { CardPokemon } from './CardPokemon';
import './PokemonGallery.css';

export const PokemonGallery = () => {
  return (
    <div
      className='background'
      style={{
        padding: '40px',
        backgroundColor: 'yellow',
        animation: 'fadeAnimation 5s infinite',
      }}
    >
      <div
        style={{ backgroundColor: '#24292f', padding: '25px' }}
        className="rounded"
      >
        <CardPokemon />
      </div>
    </div>
  );
};
