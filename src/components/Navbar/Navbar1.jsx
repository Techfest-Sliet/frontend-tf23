import React, {useContext} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import logo from "./logo.png";
import AuthContext from '../../auth/authContext';

const Navbar1 = ({ toggleDrawer, routes }) => {
  const authContext = useContext(AuthContext);
  const navRoutes = routes.filter((route) =>{
    return (route.name !== "Dashboard" && route.name !== "Domains");
  } );
    const navigate = useNavigate();
    const logOutHandler = async () => {
      authContext.logout();
      navigate("/");
    };
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>

        <Image src={logo} alt="" />
        <RightNav>
        
          <NavRoutes>
            
            
              {routes.map((route) => {
              if(AuthContext.isUserLoggedIn){
                return (
                  <NavRoute to={route.link} key={route.name}>
                    {route.name}
                  </NavRoute>
                );
              } 
              }
              
            )}
            {/* {
              navRoutes.map((rout) =>{
                if(!AuthContext.isUserLoggedIn){
                console.log(rout);
                return(
                <NavRoute to={rout.link} key={rout.name}>
                      {rout.name}
              </NavRoute>
                )
              }})
            } */}
            {routes.map((route) => {
              
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                    
                  {route.name}
                </NavRoute>
              );
            })}
            {!authContext.isUserLoggedIn && (
              <Link to="/sign-in" className="signInButton">
                <LoginButton>Login</LoginButton>
              </Link>
            )}
            {authContext.isUserLoggedIn && (
              <Link to="/" className="signInButton" onClick={logOutHandler}>
                <LoginButton>Logout</LoginButton>
              </Link>
            )}
          </NavRoutes>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar1;

const DrawerButton = styled.button`
  all: unset;
  font-size: 1.8rem;
  display: grid;
  @media (min-width: 780px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: black;
  @media (max-width: 780px){
      opacity:100%;
    }
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1400px; 
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const Image = styled.img`
@media (max-width: 900px){
  width:180px;  
  
  }
    width: 200px;
`;
const RightNav = styled.div`
  display: flex;
  gap: 1rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 780px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1rem;
   z-index:1;
  align-items: center;

`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s ease;
  &:hover {
    transition: 0.3s ease-in;
    color: black;
    border-radius: 10px;
    background-color: #68fe04;
  }
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: #68fe04;
  border: 1px solid black;
  border-radius: 0.5rem;
  transition: 0.3s ease;
  
  &:hover {
    transition: 0.3s ease;
    color: #011E05;
    border: 1px solid transparent;
    box-shadow: 0px 0px 10px black;
  }
`;