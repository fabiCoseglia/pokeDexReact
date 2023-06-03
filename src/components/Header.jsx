
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/header.png'




export const Header = () => {

  const titlePokemon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'

  return (
    <Container fluid  style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'center',
        backgroundRepeat: "no-repeat",
    }}
    className='shadow-lg'
    >
   <Link to={'/'}>
      <Container className='d-flex justify-content-center'>
        <img src={titlePokemon} alt="Pokemons-title" width={300} />
      </Container>
      </Link>
    </Container>
  );
};
