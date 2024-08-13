import "../styles/navBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Challenge from "./Conversions";
import Counter from "./Counter";


function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Gill Guimaraes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Code Challenges"
              menuVariant="dark"
            >
              {/* <Dropdown.Header>Select </Dropdown.Header> */}
              <NavDropdown.Item href='/conversions'>Conversions</NavDropdown.Item>
              <NavDropdown.Item href="/converter">Array Arithmetic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Count Vowels</NavDropdown.Item>
              <NavDropdown.Item href="/longestword">Longest Word</NavDropdown.Item>
              <NavDropdown.Item href="/counter">Counter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Object Search</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Object Search</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Object Search</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Palindrome
              </NavDropdown.Item>
              <NavDropdown.Item href="/converter">Converter UseState</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                About me 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;