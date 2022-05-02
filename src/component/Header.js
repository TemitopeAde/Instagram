import React from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { FormControl, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="brand-title" href="/">BNF.Sale</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Instagram Extension</Nav.Link>
              <Nav.Link href="#action2">Store Category</Nav.Link>

              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
