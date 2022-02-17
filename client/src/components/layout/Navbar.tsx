import {Navbar,Container} from 'react-bootstrap';
import MERN from '../../images/mern.png';
export default function NavBar() {
    return (
        <Navbar className='navigation-bar'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={MERN}
          width="200"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      
      </Navbar.Brand>
    </Container>
  </Navbar>
    )
}