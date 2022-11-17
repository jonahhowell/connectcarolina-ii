import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav, NavLink } from "react-bootstrap";

function Home() {
    return (
        <h1>Connect Carolina II!</h1>
    );
}

function CCNavBar() {
    return (
        <Navbar variant="dark" bg="dark">
            <Container>
                <Navbar.Brand>ConnectCarolina</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink>Home</NavLink>
                    <NavLink>Register</NavLink>
                    <NavLink>Profile</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CCNavBar />);