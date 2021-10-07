import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Icono from "../../assets/ico.png";
import Logout from "../../assets/logout.png";

export const NavBar = ({ email, logout }) => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <img
            alt="Icono"
            src={Icono}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          {`Notas de ${email}`}
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="justify-content-end" onClick={logout}>
            <img
              alt="logout"
              src={Logout}
              width="20"
              height="20"
              className="d-inline-block align-top"
            />{" "}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
