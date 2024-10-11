import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem('inotebook-token');
    navigate('/login');
  };

  return (
    <Navbar
      bg='dark'
      data-bs-theme='dark'
      expand='lg'
      className='bg-body-tertiary'
    >
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
          i-Notebook
        </Navbar.Brand>
        {location.pathname === '/' && (
          <Nav>
            <Button as='div' className='me-3 bg-light'>
              <Link to={'/create-note'} className='btn-link'>
                <i className='bi bi-plus'></i>
              </Link>
            </Button>
            <Button onClick={logout} className='me-3 bg-light'>
              <i className='bi bi-box-arrow-right'></i>
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
