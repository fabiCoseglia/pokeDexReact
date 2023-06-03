import React from 'react';
import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#24292f', color: 'yellow', textAlign: 'center', height: '10vh' }}>
      <Container className="d-flex justify-content-center align-items-center h-100">
        Desarrollado por @fabiCoseglia
      </Container>
    </footer>
  );
};
