import React from 'react';
import "./Navbar.css";
import logo from './logo.png';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
        <navbar>
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src = {logo} alt = "No Internet"/>
                </Link>
            </div>

            <div className="navigation">

                <input type="checkbox" className='toggle-menu'/>
                <div className="hamburger"></div>

                <ul className="navbar-items">
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/workshops">Workshops</Link></li> */}
                    <li className='aboutUs'>
                        <Link to="/domains">About Us &#32;<i className="arrow down"></i></Link>
                        <ul className='dropdown'>
                            <li><Link to="/faq">FAQs</Link></li>
                            <li><Link to="/contactUs">Contact Us</Link></li>
                        </ul>
                    </li>
                    <li className="domains">
                        <Link to="/domains">Domains &#32;<i className="arrow down"></i></Link>
                        {/*-- DROPDOWN MENU */}
                        <ul className="dropdown">
                            <li><Link to="/">Chemfor</Link></li>
                            <li><Link to="/">Electrica</Link></li>
                            <li><Link to="/">Genesis</Link></li>
                            <li><Link href="/">Karyarachna</Link></li>
                            <li><Link href="/">Kermis</Link></li>
                            <li><Link href="/">Mechanica</Link></li>
                            <li><Link to="/">Plexus</Link></li>
                            <li><Link to="/">Robozar</Link></li>
                        </ul>
                    </li>
                    {/* <Link to="/signIn" className='signInButton'>Sign In</Link> */}
                </ul>
            </div>
            

        </header>

        </navbar>
        
  )
}

