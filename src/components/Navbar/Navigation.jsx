
import React, { useState } from "react";
import Navbar1 from "./Navbar1";
import { routes } from "./constant";
import styled from "styled-components";
import Drawer from "./Drawer";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar1 routes={routes} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;

