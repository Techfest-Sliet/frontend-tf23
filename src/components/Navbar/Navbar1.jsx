import React,{useContext,useState} from "react";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { TbAlignLeft} from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
// import Menu from "./Menu";
import Button from "./Button";
import logo from "./logo.png";
import AuthContext from '../../auth/authContext';

const Navbar1 = ({ toggleDrawer }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const logOutHandler = async () => {
    authContext.logout();
    navigate("/");
  };

  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <TbAlignLeft />
        </DrawerButton>
        <Image src={logo} alt="" />
        <RightNav>     
          {/* <NavRoutes>
          <NavRoute
                  to="/"
                  key="Home"
                >
                  Home
                </NavRoute>
                <NavRoute
                  to="/under-construction"
                  key="Workshops"
                >
                  Workshops
                </NavRoute>
                <NavRoute
                  to="/about"
                  key="About Us"
                >
                  About Us
                </NavRoute>
                <NavRoute
                  to="/faq"
                  key="faq"
                >
                  FAQ
                </NavRoute>
                <NavRoute
                  to="/our-team"
                  key="our-team"
                >
                  Our Team
                </NavRoute>   
                <Menu/>
                {authContext.isUserLoggedIn && (
                <NavRoute
                  to="/dashboard"
                  key="dashboard"
                >
                  Dashboard
                </NavRoute>
                )}
          </NavRoutes> */}
          {/* {!authContext.isUserLoggedIn && (
              <Link to="/sign-in" className="signInButton">
                <LoginButton>Login</LoginButton>
              </Link>
            )}
            
            {authContext.isUserLoggedIn && (
              <Link to="/" className="signInButton" onClick={logOutHandler}>
                <LoginButton>Logout</LoginButton>
              </Link>
            )} */}
          {!authContext.isUserLoggedIn && 
          <Button/>
          }
          {authContext.isUserLoggedIn && 
            <MenuButton onClick={toggleMenu}>
            <VscAccount/>
          </MenuButton>
          
          }
          <SubRoutesContainer isOpen={isMenuOpen}>
          <SubRoute 
          onClick={function() {toggleDrawer();toggleMenu()}}
          to= "/events/Aarambh" 
          key="Arambh">
            Arambh
          </SubRoute>
          <SubRoute 
          to= "/events/plexus" 
          key="plexus">
            Plexus
          </SubRoute>
      </SubRoutesContainer>

        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar1;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  // color: #68fe04;
  z-index:1;
  @media (max-width: 780px) {
    font-size: 2rem;
  }
`;

const MenuButton = styled.div`
font-size: 1.5rem;
padding: 0.5rem;
display: flex;
align-items: center;
justify-content: space-between;

`;
const SubRoute = styled(Link)`
text-decoration: none;
  color: white;
  padding: .5rem;
  font-size: 1.2rem; 
   &:hover {
    transition: 0.3s ease-in;
    color: black;
    background-color: #68fe04;
  }`
const SubRoutesContainer = styled.div`
display: ${(props) => (props.isOpen ? "flex" : "none")};
flex-direction: column;
padding: 0.3rem;
`;

const SNavbar = styled.nav`
      background-color: black;

  @media (max-width: 780px){
      opacity:100%;
    }
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 80px;
  max-width: 1400px; 
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const Image = styled.img`
    width:20%;
    @media (max-width: 600px) {
      width: 50%;
    }
`;
const RightNav = styled.div`
  display: flex;
  gap: 1rem;
`;
// const NavRoutes = styled.div`
//   @media (max-width: 900px) {
//     display: none;
//   }
//   display: flex;
//   gap: 1rem;
//   font-size: 1rem;
//    z-index:1;
//   align-items: center;

// `;
// const NavRoute = styled(Link)`
//   text-decoration: none;
//   color: white;
//   padding: 0.5rem;
//   transition: 0.5s ease;
//   &:hover {
//     transition: 0.3s ease-in;
//     color: black;
//     border-radius: 10px;
//     background-color: #68fe04;
//   }
// `;

