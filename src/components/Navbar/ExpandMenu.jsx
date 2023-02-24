import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const ExpandMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen}>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default ExpandMenu;
const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 0.3rem;
`;
const SMenu = styled.div``;

const MenuButton = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    color:#68fe04;
  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  font-size: 1rem; 
   &:hover {
    color:  #68fe04;
    border-bottom: solid 0.1em #68fe04; 
    transition: transform 250ms ease-in-out;
  }
  
`;