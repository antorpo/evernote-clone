import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { isDefined, validarCorreo } from "../../utils/functions";
import { registerEmailAndPassword, loginEmailAndPassword } from "../../services/firebase.services";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/slices/userSlice";
import Logo from "../../assets/logo.png";
import "./styles.css";

/*
  Usamos Helmet para manejar cambios en el head del documento .html
*/
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return isDefined(email) && validarCorreo(email) && isDefined(password);
  };

  const handleLogin = async () => {
    try {
      const userCredentials = await loginEmailAndPassword(email, password);
      dispatch(signInUser({email: userCredentials.user.email, id: userCredentials.user.uid}))
      window.alert(`Bienvenido ${userCredentials.user.email}!`);
      history.push('/');
    } catch (err) {
      window.alert(`Error en el loggeo!`);
    }
  };

  const handleRegister = async () => {
    try {
      await registerEmailAndPassword(email, password);
      window.alert(`Registro correcto, ahora puede loggearse!`);
    } catch (err) {
      window.alert(`Error en el registro!`);
    }
  };

  return (
    <div className="Login">
      <Helmet bodyAttributes={{ style: "background-color : #468f5b" }}>
        <title>Login</title>
      </Helmet>

      <div className="Login__form">
        <img alt="UdeA Notes" src={Logo} className="logo__img" />
        <Form className="Login__form-group">
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
              disabled={!validateForm()}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              variant="outline-success"
              block
              size="lg"
              disabled={!validateForm()}
              onClick={handleRegister}
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
