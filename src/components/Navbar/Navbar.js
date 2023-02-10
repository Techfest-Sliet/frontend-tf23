import React, {useContext} from 'react';
import "./Navbar.css";
import logo from './logo.png';
import {Link, useNavigate} from 'react-router-dom';
import AuthContext from '../../auth/authContext';

export const Navbar = (props) => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const logOutHandler = async () => {
        authContext.logout();
        navigate('/');
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/underConstruction">Workshops</Link></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    {authContext.isUserLoggedIn && <li><Link to="/userDashboard">Dashboard</Link></li>}
                    <li className="domains">
                        <Link to="/domains" className='dropdown__animation'>Domains<i className="arrow down">&#32;</i></Link>
                        {/*-- DROPDOWN MENU */}
                        <ul className="dropdown">
                            <li><Link to="/events/plexus">Plexus</Link></li>
                            <li><Link to="/events/chemfor">Chemfor</Link></li>
                            <li><Link to="/events/electrica">Electrica</Link></li>
                            <li><Link to="/events/genesis">Genesis</Link></li>
                            <li><Link to="/events/karyarachna">Karyarachna</Link></li>
                            <li><Link to="/events/kermis">Kermis</Link></li>
                            <li><Link to="/events/mechanica">Mechanica</Link></li>
                            <li><Link to="/events/robozar">Robozar</Link></li>
                        </ul>
                    </li>
                    {!authContext.isUserLoggedIn && (<Link to='/signIn' className='signInButton'>Sign In</Link>)}
                    {authContext.isUserLoggedIn && (
                        <Link to='/' className='signInButton' onClick={logOutHandler}>Logout</Link>
                    )}
                    
                    
                </ul>
            </div>
            

        </header>

        </navbar>
        
  )
}

