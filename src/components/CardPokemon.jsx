import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { PokemonContext } from '../contexts/PokemonContext';
import { Container, Spinner, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Paginator from './Paginator';

export const CardPokemon = () => {
  const { pokemonList } = useContext(PokemonContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // ajusta el número de cards que muestro
  const [filterName, setFilterName] = useState(''); // estado para almacenar el valor del filtro de nombre
  const [filterByAlphabet, setFilterByAlphabet] = useState(false); // estado para almacenar el valor del filtro de orden alfabético

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNameFilterChange = (event) => {
    setFilterName(event.target.value);
    setCurrentPage(1); // reinicia la página al cambiar el filtro de nombre
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filterName.toLowerCase())
  );

  let sortedPokemonList = filteredPokemonList;
  if (filterByAlphabet) {
    sortedPokemonList = filteredPokemonList.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePokemonList = sortedPokemonList.slice(startIndex, endIndex);

  // Verificar si existen datos de pokémon
  if (!pokemonList || pokemonList.length === 0) {
    return (
      <div className="text-center d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <Spinner animation="border" role="status" variant="warning" size="lg">
          <span className="visually-hidden text-white"></span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container>
      <Container className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center align-items-md-start p-2 gap-3">
        
        <div>
          <Form.Check
            variant='warning'
            type="checkbox"
            id="alphabetFilter"
            label="Filtrar por orden alfabético"
            checked={filterByAlphabet}
            onChange={(e) => setFilterByAlphabet(e.target.checked)}
            style={{color:'yellow',fontFamily: 'monospace' }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Buscar Pokemon"
            value={filterName}
            onChange={handleNameFilterChange}
            style={{ borderRadius: '10px', fontFamily: 'monospace',height:'40px' }}
          />
        </div>
      </Container>
      <Row xs={1} sm={2} lg={4} className="g-4">
        {visiblePokemonList.map((pokemon) => (
          <Col key={pokemon.id} className="d-flex justify-content-center align-items-center">
            <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none' }}>
              <Card
                as="div"
                className="card-pokemon"
                style={{
                  backgroundColor: 'rgba(0, 217, 255, 0.1)',
                  color: 'smoke',
                  border: '1px solid #fff',
                  width: '200px',
                  marginBottom: '20px',
                  textDecoration: 'none',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  fontFamily: "'Press Start 2P', cursive",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 0 10px yellow';
                  e.currentTarget.style.borderColor = 'yellow';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'white';
                }}
              >
                <Card.Img
                  variant="top"
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="mx-auto p-2"
                  style={{ width: '100%' }}
                />
                <Card.Body>
                  <Card.Title
                    className="text-center border p-1"
                    style={{
                      color: 'yellow',
                      textTransform: 'capitalize',
                      borderColor: 'yellow',
                      fontSize: '15px',
                    }}
                  >
                    <strong>{pokemon.name}</strong>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Paginator
        totalPages={Math.ceil(sortedPokemonList.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};
