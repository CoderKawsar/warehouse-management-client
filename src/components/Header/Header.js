import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Navbar sticky="top" className="header-nav" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          Stackhouse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/inventory" as={Link}>
              Inventory
            </Nav.Link>
            <Nav.Link to="/blog" as={Link}>
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            {!user && (
              <>
                <Nav.Link to="/login" as={Link}>
                  Login
                </Nav.Link>
                <Nav.Link to="/signup" as={Link}>
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link to="/manage-inventory" as={Link}>
                  Manage Items
                </Nav.Link>
                <Nav.Link to="/add-inventory-item" as={Link}>
                  Add Item
                </Nav.Link>
                <Nav.Link to="/my-inventory-items" as={Link}>
                  My Items
                </Nav.Link>
                <Nav.Link to="/login" as={Link} onClick={() => signOut(auth)}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
