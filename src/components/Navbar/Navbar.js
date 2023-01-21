import React from 'react'
import "./Navbar.css"
import logo from './logo.png';

export const Navbar = () => {
  return (
        <navbar>
        <header className="header">
            <div className="logo">
                <a href="#">
                    <img src = {logo} alt = "No Internet"/>
                </a>
            </div>

            <div className="navigation">

                <input type="checkbox" className='toggle-menu'/>
                <div className="hamburger"></div>

                <ul className="navbar-items">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Workshops</a></li>
                    <li className="domains">
                        <a href="#">Domains &#32;<i className="arrow down"></i></a>
                        {/*-- DROPDOWN MENU */}
                        <ul className="dropdown">
                            <li><a href="/">Karyarachna</a></li>
                            <li><a href="/">Plexus</a></li>
                            <li><a href="/">Chemfor</a></li>
                            <li><a href="/">Electrica</a></li>
                            <li><a href="/">Domain 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">CA Program</a></li>
                    <a href="#" className='signInButton'>Sign In</a>
                </ul>
            </div>
            

        </header>

        </navbar>
        
  )
}

