/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

    const loggedIn = false;

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/">React-Router</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                            <NavLink to="/" style={({isActive}) => ({color: isActive ? 'blue' : 'black'})} className={({isActive}) => `nav_link${isActive ? " active" : ""}`} >Home</NavLink>
                                {/* <NavLink end className='nav-link link active' to="/">Home</NavLink> */}
                            </li>
                            <li className="nav-item">
                            <NavLink to="/about" style={({isActive}) => ({color: isActive ? 'blue' : 'black'})} className={({isActive}) => `nav_link${isActive ? " active" : ""}`} >About</NavLink>
                                {/* <NavLink end className='nav-link link active' to="/about">About Us</NavLink> */}
                            </li>
                            <li className="nav-item">
                            <NavLink to="/contact" style={({isActive}) => ({color: isActive ? 'blue' : 'black'})} className={({isActive}) => `nav_link${isActive ? " active" : ""}`} >Contact</NavLink>
                                {/* <NavLink end className='nav-link link active' to="/contact">Contact Us</NavLink> */}
                            </li>
                        </ul>
                    </div>
                    <div className="login-logout-links ml-auto">
                        <button className="link btn-sm btn-primary" href="#"><span className="sign-up iconify" data-icon="mdi:account"></span>&nbsp;Sign Up</button>&nbsp;
                        { (loggedIn) ? <button className="link btn-sm btn-primary" href="#"><span className="loggedState iconify" data-icon="mdi:logout-variant"></span>&nbsp;Logout</button> : <button className="link btn-sm btn-primary" href="#"><span className="loggedState iconify" data-icon="mdi:login-variant"></span>&nbsp;Login</button> }
                    </div>
                </div>
            </nav>

        </div>
    )
}
