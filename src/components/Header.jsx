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
                        <Navbar.Brand href="#home">
                            <img src={ logo } alt="logo" className='logo' />
                        </Navbar.Brand>
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
            {/* bottom headline */}
            <div className="heading-area py-md-4 py-3">
                <div className="container">
                    <h1 className='text-center text-red'>Your Picture Collections</h1>
                    <p className='text-center mb-0'>Here is your all picture collections which you are uploaded.</p>
                </div>
            </div>
        </header>
    )
}
