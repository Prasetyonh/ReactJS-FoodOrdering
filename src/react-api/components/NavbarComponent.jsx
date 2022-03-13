import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faBurger} /> <strong>Food Ordering</strong>{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
