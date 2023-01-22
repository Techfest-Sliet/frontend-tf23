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
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/workshops">Workshops</Link></li>
                    <li className="domains">
                        <Link to="/domains">Domains &#32;<i className="arrow down"></i></Link>
                        {/*-- DROPDOWN MENU */}
                        <ul className="dropdown">
                            <li><Link href="/">Karyarachna</Link></li>
                            <li><Link to="/">Plexus</Link></li>
                            <li><Link to="/">Chemfor</Link></li>
                            <li><Link to="/">Electrica</Link></li>
                            <li><Link to="/">Domain 5</Link></li>
                        </ul>
                    </li>
                    <Link to="/signIn" className='signInButton'>Sign In</Link>
                </ul>
            </div>
            

        </header>

        </navbar>
        
  )
}

