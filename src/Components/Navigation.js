import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItemList } from '../appConfig';

function Navigation(props) {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg md" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/" className=''>AASHIKA LTD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                { NavItemList.map((navItem, index) => (<Nav.Item key={index}>
                    <Nav.Link eventKey="1" as={Link} to={navItem.path}>
                        {navItem.name}
                    </Nav.Link>
                    </Nav.Item>)) }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;