import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Signup.css";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2 className="center-title">Signup</h2>
      </div>
      <Form className="w-50 mx-auto" onSubmit={handleSignup}>
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
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
      <p className="w-50 mx-auto mt-3">
        Already registered? Login here:
        <Button
          variant="danger"
          className="ms-2"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Signup;
