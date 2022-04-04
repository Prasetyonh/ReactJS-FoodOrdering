import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBurger } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const navbar = () => {
  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="fixed-top mb-5"
      >
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faBurger} /> <strong>Food Ordering</strong>{" "}
          </Navbar.Brand>

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          ></Nav>
          <Nav.Link className="text-white" href="/#keranjang">
            <span className="d-none  d-md-inline">Keranjang</span>&nbsp;&nbsp;
            <strong>
              <FontAwesomeIcon icon={faShoppingCart} />
            </strong>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
