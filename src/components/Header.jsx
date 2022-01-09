import React from 'react'

import { Link } from 'react-router-dom'

import {Navbar, Nav} from 'react-bootstrap';

import logo from '../assets/img/logo.png'

export default function Header() {
    return (
        <header>
            {/* main header */}
            <div className="main-header">
                <Navbar bg="light" variant="light" expand="md">
                    <div className="container">
                        <Link className='navbar-brand' to="/">
                            <img src={ logo } alt="logo" className='logo' />
                        </Link>
                        
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/" className='nav-link'>Home</Link>
                                <Link to="/about" className='nav-link'>About</Link>
                                <Link to="/contact" className='nav-link'>Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </header>
    )
}
