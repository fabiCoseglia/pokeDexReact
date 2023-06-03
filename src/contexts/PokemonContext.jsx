import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const { data: { count } } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        
        const allPokemonData = [];
        const limit = 100;
        const totalPages = Math.ceil(count / limit); // Calcular el número de páginas
        
        // Recorrer todas las páginas y obtener los Pokémon
        for (let i = 1; i <= totalPages; i++) {
          const { data: { results } } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(i - 1) * limit}&limit=${limit}`);
          //Mapeo el resultado de la API para obtener otro objeto con lo que voy a usar en el front
          const pokemonDataPromises = results.map(async result => {
            const { data } = await axios.get(result.url);
            return {
              id: data.id,
              name: data.name,
              image: data.sprites.front_default,
              weight: data.weight,
              abilities: data.abilities.map(ability => ability.ability.name),
            };
          });
          const pokemonData = await Promise.all(pokemonDataPromises);
          allPokemonData.push(...pokemonData);
        }

        //seteo pokemonList con el nuevo objeto mapeado (donde cada pokemon ahora es un object que tiene id,name,weight y ab)
        setPokemonList(allPokemonData);
      } catch (error) {
        console.log('Error al traer la lista de Pokemons', error);
      }
    };

    fetchAllPokemon();
  }, []);

  return (
    //creo el provider para encapsular toda la app. luego utilizo useContext donde lo necesite.
    <PokemonContext.Provider value={{ pokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
