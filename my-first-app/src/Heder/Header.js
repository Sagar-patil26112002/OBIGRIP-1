import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/pizzalogo.jpg';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Account } from '../Mypages/Account';
import { Home } from '../Mypages/Home';
import './header.css';
import { Order } from '../Mypages/Order';
import { Payment } from '../Mypages/Payment';

export const Header = () => {
    return (
        <div>
        <Navbar bg="primary" expand="lg" className='headercss'>
          <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="180"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='text-white' href="#/home">Home</Nav.Link>
                <Nav.Link className='text-white' href="#/order">Order</Nav.Link>
                <Nav.Link className='text-white' href="#/account">Account</Nav.Link>
                <Nav.Link className='text-white' href="#action2">Log out</Nav.Link>

              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className='text-white' variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <HashRouter>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/order' element={<Order/>}/>
                <Route path='/buy' element={<Payment/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<Navigate to='/home'/>}/>
            </Routes>
        </HashRouter>
        </div>
      );
}
