import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../contexts/PokemonContext';
import { Header } from '../components/Header';
import { Container,Card, Spinner } from 'react-bootstrap';

import detailBackground from '../assets/detailBackground.jpg'
import { Footer } from '../components/Footer';

export const DetailPokemon = () => {
  const { id } = useParams();
  const { pokemonList } = useContext(PokemonContext);

  const pokemonId = +id;

  const selectedPokemon = pokemonList.find((pokemon) => pokemon.id === pokemonId);

  if (!selectedPokemon) {
    return (
      <>
      <Header/>
      <div className="text-center d-flex justify-content-center align-items-center" style={{height:'400px'}}>
        <Spinner animation="border" role="status" variant='warning' size='lg'>
          <span className="visually-hidden text-white"></span>
        </Spinner>
      </div>
      </>
      
    );
  }

  return (
    <>
      <Header />
      <Container
        fluid
        style={{
          backgroundImage: `url(${detailBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
         <Card
          as="div"
          className="card-pokemon d-flex flex-column align-items-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'smoke',
            border: '4px solid yellow',
            width: '300px',
            marginBottom: '30px',
            textDecoration: 'none',
            transition: 'transform 0.3s, box-shadow 0.3s',
            fontFamily: "'Press Start 2P'"
          }}
        >
          <Card.Img
            variant="top"
            src={selectedPokemon.image}
            alt={selectedPokemon.name}
            className="mx-auto p-2"
            style={{ width: '100%' }}
          />
          <Card.Body>
            <Card.Title
              className="card-title text-center border p-1"
              style={{ color: 'yellow', textTransform: 'capitalize', borderColor: 'yellow',fontSize:'25px' }}
            >
              <strong>{selectedPokemon.name}</strong>
            </Card.Title>
            <Card.Text className='text-white'>
              <strong>Weight:</strong> {selectedPokemon.weight}
            </Card.Text>
            <Card.Text className='text-white'>
              <strong>Abilities:</strong> {selectedPokemon.abilities.join(', ')}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Footer/>
    </>
  );
};
