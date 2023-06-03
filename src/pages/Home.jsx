import React from 'react';
import { PokemonGallery } from '../components/PokemonGallery';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


export const Home = () => {
  return (
    <>
      <Header />
      <PokemonGallery />
      <Footer/>
    </>
  );
};
