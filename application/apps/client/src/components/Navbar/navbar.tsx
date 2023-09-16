import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../../contexts/auth/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles'

export const NavBar = () => {

	const auth = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <>
      
	  {['xl'].map((expand) => (
        <styled.NavBar key={expand} expand={expand} className=" ">
          <Container fluid>
            <Navbar.Brand href="#" >
				      <span style={{fontWeight: 'bold', fontSize: '30px'}}>H</span>elpcife
			      </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ color: '#eee', height:'100%'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
              <p style={{color: 'black', marginTop: '10px'}}>{auth?.user && auth?.user.name}</p>
				      <styled.UserIcon/>
              </div>
			      </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
			        style={{backgroundColor: '#eee'}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  HelpCife
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Início</Nav.Link>
                  <Nav.Link href="/about">Sobre</Nav.Link>
                  <Nav.Link href="/contact">Contatos</Nav.Link>
                  <Nav.Link href="/UserPage">Perfil</Nav.Link>
				 
                  <NavDropdown
                    title="Mais"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
					          {/* Se o usuário extiver logado, permita ele acessar o recurso */}
                    {auth?.user &&  <NavDropdown.Item href="/UserPage">Criar Iniciativa</NavDropdown.Item>}
                    {!auth?.user &&  <NavDropdown.Item href="/login">Criar Iniciativa</NavDropdown.Item>}
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                    {auth?.user && <div style={{border: 'none' , color: 'red', backgroundColor: 'rgb(255, 255, 255, 0.7)'}} onClick={auth.signOut}>Sair</div>}
                    {!auth?.user && <a href='/login'  style={{textDecoration: 'none', color: 'none'}}>Entrar</a>}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex" >
                  <Form.Control
				            style={{width: '250px'}}
                    type="search"
                    placeholder="Buscar..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </styled.NavBar>
      ))}
    
    </>
  );
}
