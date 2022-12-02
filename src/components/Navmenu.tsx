import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Navmenu = () => {
  return (
    <Navbar className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button variant="outline-primary" className="cart-btn">
          <FaCartPlus />
          <span className="cart-number">3</span>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navmenu;
