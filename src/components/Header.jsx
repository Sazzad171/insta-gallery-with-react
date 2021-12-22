import React from 'react'

import {Navbar, Nav} from 'react-bootstrap';

import logo from '../assets/img/logo.png'

export default function Header() {
    return (
        <header>
            {/* main header */}
            <div className="main-header">
                <div className="container">
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand href="#home">
                            <img src={ logo } alt="" />
                        </Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
            </div>
            {/* bottom headline */}
            <div className="heading-area py-md-4 py-3">
                <div className="container">
                    <h1 className='text-center'>Your Picture Collections</h1>
                    <p className='text-center'>Here is your all picture collections which you are uploaded.</p>
                </div>
            </div>
        </header>
    )
}
