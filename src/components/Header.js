import {Container, Nav, Navbar} from 'react-bootstrap';

function Header() {
  return (
    <header>
        <Navbar className='py-3 fixed-top bg-dark' collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Cocktail Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Feature beings</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>                        
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More details</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    </header>
  )
}

export default Header