import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExpandMenu from "./ExpandMenu";
import AuthContext from '../../auth/authContext';
const Drawer = ({ isOpen, toggleDrawer, routes }) => {

  const navRoutes = routes.filter((route) =>{
    return (route.name !== "Dashboard" && route.name !== "Domains");
  } );

  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <NavRoutes>
              {routes.map((route) => {
                if(AuthContext.isUserLoggedIn){
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              )}
            })}
            { navRoutes.map((rout) =>{
                if(!AuthContext.isUserLoggedIn){
                console.log(rout);
                return(
                <NavRoute onClick={toggleDrawer}
                to={rout.link} 
                key={rout.name}
                >
                {rout.name}
              </NavRoute>
                )
              }})
            }
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu 
                route={route}
                key={route.name} 
                onClick={toggleDrawer}
                />;
              }})}
          </NavRoutes>
          <LoginButton>Login</LoginButton>
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;
// const SNavbarBrand = styled.h2`
//   font-size: 1.5rem;
// `;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  color: white;
  height:100%;
  width: 60%;
  background-color: black;
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
  font-size: 1rem;
  padding: 1rem;
`;
const NavRoutes = styled.div`
color: white;
font-size: 1rem;
padding: 0.5rem;
`;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  &:hover {
    // border-bottom: solid 0.1em #68fe04;
    color: #68fe04;
    transition: transform 250ms ease-in-out;
  }
`;

// const LoginButton = styled.button`
//   padding: 0.7rem 3rem;
//   background-color: white;
//   border: 1px solid black;
//   border-radius: 1rem;
//   transition: 0.3s ease;
//   align-self: flex-start;
//   &:hover {
//     transition: 0.3s ease;
//     border: 1px solid transparent;
//     background-color: gray;
//      color:white;
//     box-shadow: 0px 0px 10px gray;
//   }
// `;
const LoginButton = styled.button`
  padding: 0.6rem 2.5rem;
  margin-left: 0.6rem;
  font-size: 18px;
  background-color: #68fe04;
  border: 1px solid black;
  border-radius: 0.5rem;
  transition: 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    transition: 0.3s ease;
    color: #011E05;
    border: 1px solid transparent;
    box-shadow: 0px 0px 10px black;
  }
`;