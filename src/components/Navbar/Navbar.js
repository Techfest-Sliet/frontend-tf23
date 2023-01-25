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
                    <li><Link to="/underConstruction">Workshops</Link></li>
                    <li className='aboutUs'>
                        <Link to="/faq" className='dropdown__animation'>FAQ <i className="arrow down">&#32;</i></Link>
                        <ul className='dropdown'>
                            <li><Link to="/faq">Help!</Link></li>
                        </ul>
                    </li>
                    <li className="domains">
                        <Link to="/domains" className='dropdown__animation'>Domains</Link>
                        {/*-- DROPDOWN MENU */}
                        {/* <ul className="dropdown">
                            <li><Link to="/domain/Chemfor">Chemfor</Link></li>
                            <li><Link to="/domain/Electrica">Electrica</Link></li>
                            <li><Link to="/domain/Genesis">Genesis</Link></li>
                            <li><Link to="/domain/Karyarachna">Karyarachna</Link></li>
                            <li><Link to="/domain/Kermis">Kermis</Link></li>
                            <li><Link to="/domain/Mechanica">Mechanica</Link></li>
                            <li><Link to="/domain/Plexus">Plexus</Link></li>
                            <li><Link to="/domain/Robozar">Robozar</Link></li>
                        </ul> */}
                    </li>
                    {/* <Link to="/signIn" className='signInButton'>Sign In</Link> */}
                </ul>
            </div>
            

        </header>

        </navbar>
        
  )
}

