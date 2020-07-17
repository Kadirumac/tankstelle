import React from 'react';
import data from '../data.json'
import { Navbar, Nav, Form } from "react-bootstrap";
import {Link } from 'react-router-dom';
import Liste from "./Liste/Liste";
import './Home.css';
import Karten from './Karten/Karten'

//Das ist Filterungsfunktion
//Man kann damit Data filtern und per Props zu Kinder-Komponente schicken
const filterung = () => {

} 

const Home = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Tanke in Köln</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
 
    </Nav>
    <Form inline>
        <Link to="/liste" >
        <Nav.Link href="#Liste">Liste</Nav.Link>
        </Link>


    <Link to='/karten'>
    <Nav.Link href="#Carte">Karten</Nav.Link>
    </Link>
  
    </Form>
  </Navbar.Collapse>
</Navbar>

<header >
<Form className="w-75 ml-5">
  <Form.Group controlId="formBasicEmail">
 
    <Form.Control type="text" placeholder="Bitte geben Sie hier ein Begriff zur Filterung ein" />
  
  </Form.Group>

</Form>
</header>


        </div>
    );
};

export default Home;