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
                        <Link to="/domains" className='dropdown__animation'>About <i className="arrow down">&#32;</i></Link>
                        <ul className='dropdown'>
                            <li><Link to="/faq">Help!</Link></li>
                        </ul>
                    </li>
                    <li className="domains">
                        <Link to="/domains" className='dropdown__animation'>Domains<i className="arrow down">&#32;</i></Link>
                        {/*-- DROPDOWN MENU */}
                        <ul className="dropdown">
                            <li><Link to="/events/chemfor">Chemfor</Link></li>
                            <li><Link to="/events/electrica">Electrica</Link></li>
                            <li><Link to="/events/genesis">Genesis</Link></li>
                            <li><Link to="/events/karyarachna">Karyarachna</Link></li>
                            <li><Link to="/events/kermis">Kermis</Link></li>
                            <li><Link to="/events/mechanica">Mechanica</Link></li>
                            <li><Link to="/events/plexus">Plexus</Link></li>
                            <li><Link to="/events/robozar">Robozar</Link></li>
                        </ul>
                    </li>
                    {/* <Link to="/signIn" className='signInButton'>Sign In</Link> */}
                </ul>
            </div>
            

        </header>

        </navbar>
        
  )
}

