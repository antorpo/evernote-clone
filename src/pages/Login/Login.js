import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { isDefined, validarCorreo } from "../../utils/functions";
import Logo from "../../assets/logo.png";
import "./styles.css";

/*
  Usamos Helmet para manejar cambios en el head del documento .html
*/
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return isDefined(email) && validarCorreo(email) && isDefined(password);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Helmet bodyAttributes={{ style: "background-color : #468f5b" }}>
        <title>Login</title>
      </Helmet>
      <div className="Login__form">
      <img alt="UdeA Notes" src={Logo} className='logo__img' />
        <Form className="Login__form-group" onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <ButtonGroup className="button__group">
            <Button
              variant="outline-success"
              block
              size="lg"
              type="submit"
              disabled={!validateForm()}
            >
              Login
            </Button>
            <Button
              variant="outline-success"
              block
              size="lg"
              type="submit"
              disabled={!validateForm()}
            >
              Register
            </Button>
          </ButtonGroup>
        </Form>
      </div>
    </div>
  );
};

export default Login;
