import React from 'react';
import "./Navbar.css";
import logo from './logo.png';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    function unCheck() {
        let x = document.getElementsByClassName("checkbox");
        for(let i=0; i<=x.length; i++) {
           x[i].checked = false;
         }   
      }
  return (
        <navbar>
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src = {logo} alt = "techFEST'23"/>
                </Link>
            </div>

            <div className="navigation">

                <input type="checkbox" className='toggle-menu'/>
                <div className="hamburger"></div>

                <ul className="navbar-items">
                    <li><Link to="/" onClick={unCheck}>Home</Link></li>
                    <li><Link to="/underConstruction" onClick={unCheck}>Workshops</Link></li>
                    <li><Link to="/aboutUs" onClick={unCheck}>About Us</Link></li>
                    <li><Link to="/faq" onClick={unCheck}>FAQ</Link></li>
                    <li className="domains">
                        <Link to="/domains" className='dropdown__animation' onClick={unCheck}>Domains<i className="arrow down">&#32;</i></Link>
                        {/*-- DROPDOWN MENU */}
                        <ul className="dropdown">
                            <li><Link to="/events/plexus" onClick={unCheck}>Plexus</Link></li>
                            <li><Link to="/events/chemfor" onClick={unCheck}>Chemfor</Link></li>
                            <li><Link to="/events/electrica" onClick={unCheck}>Electrica</Link></li>
                            <li><Link to="/events/genesis" onClick={unCheck}>Genesis</Link></li>
                            <li><Link to="/events/karyarachna" onClick={unCheck}>Karyarachna</Link></li>
                            <li><Link to="/events/kermis" onClick={unCheck}>Kermis</Link></li>
                            <li><Link to="/events/mechanica" onClick={unCheck}>Mechanica</Link></li>
                            <li><Link to="/events/robozar" onClick={unCheck}>Robozar</Link></li>
                        </ul>
                    </li>
                    {/* <Link to="/signIn" className='signInButton'>Sign In</Link> */}
                </ul>
            </div>
            

        </header>

        </navbar>
        
  )
}

