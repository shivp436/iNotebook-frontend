import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText);
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
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Form className='d-flex' onSubmit={handleSearch}>
              <Form.Control
                type='text'
                placeholder='Search'
                className='me-2'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button type='submit' className='me-3'>
                <i className='bi bi-search' />
              </Button>
            </Form>
            <Nav.Link as={Link} to={'/'}>
              <i className='bi bi-person-circle' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
