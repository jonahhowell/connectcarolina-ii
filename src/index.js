import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Home() {
    return (
        <h1>Connect Carolina II!</h1>
    );
}

function CCNavBar() {
    return (
        
        <Navbar variant="dark" bg="dark">
            <Container>
                <Navbar.Brand>Home</Navbar.Brand>
            </Container>

        </Navbar>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CCNavBar />);