import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Spinner from "../Spinner/Spinner";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Spinner></Spinner>;
  }

  let errorMessage;
  if (error) {
    errorMessage = error.message;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2 className="center-title">Login</h2>
      </div>
      <Form className="w-50 mx-auto" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        {errorMessage && (
          <p className="text-danger">{errorMessage} Try again.</p>
        )}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="w-50 mx-auto mt-3">
        Not registered yet? Register here:
        <Button
          variant="danger"
          className="ms-2"
          onClick={() => navigate("/signup")}
        >
          Signup
        </Button>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
