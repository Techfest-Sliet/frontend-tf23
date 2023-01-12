import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./HomeScreen.css";
const HomeScreen = () => {
  document.addEventListener("scroll", (event) => {
    document.querySelector(".scroll").style.display = "none";
    document.querySelector("#mobileScroll").style.display = "none";
  });
  return (
    <div className="homePage">
      <div className="landingPage">
        <Box>
          <img
            src="/tf23.webp"
            height={238}
            width={390}
            alt=""
            className="main_img"
          />
        </Box>
        <Box className="innovationIn">
          <Box className="Innovation">
            <Typography variant="h1" id="inn">
              INN
            </Typography>
            <div className="O" mb={1}></div>
            <Typography id="vation" variant="h1">
              VATION
            </Typography>
          </Box>
          <Typography id="in" variant="h3" mt={5.5} ml={2}>
            in
          </Typography>
        </Box>
        <Typography variant="h1" id="agriculture" fontSize={150}>
          AGRICULTURE
        </Typography>
        <Typography width={"75%"} color={"#fff"} textAlign={"center"}>
          Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
          tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra
          vitae congue eu consequat ac felis donec et odio pellentesque diam
          volutpat commodo sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium vulputate sapien nec sagittis
          aliquam
        </Typography>
        <Box className="landingButtons" sx={{ mt: 3, color: "white", mb: 1 }}>
          <Button variant="contained" id="signUpButton" sx={{ mr: 2 }}>
            Sign Up Now
          </Button>
          <Button variant="contained" id="aboutUsButton">
            About Us
          </Button>
        </Box>
        <Box sx={{ width: "100%", mr: 8 }} className="scroll">
          <Button sx={{ color: "#fff", height: "3vh" }}>
            Scroll Down{" "}
            <span
              style={{
                rotate: "180deg",
                fontSize: "20px",
                paddingTop: 6,
                marginLeft: 8,
                color: "#fff",
              }}
            >
              ^
            </span>
          </Button>
        </Box>
        <span
          id="mobileScroll"
          style={{ rotate: "180deg", fontSize: "40px", color: "#fff" }}
        >
          ^
        </span>
      </div>

      {/* expanded landing page */}
      <Box className="main_container">
        <Box className="containerDomain">
          <img src="/img/main_img/tf22.png" height={250} width={250} alt="" />
          <Typography variant="h3" color={"#fff"} sx={{ mt: 2 }}>
            Domains
          </Typography>
          <Typography variant="subtitle2" color={"#fff"}>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc
          </Typography>
          <Button
            sx={{ color: "#fff", mt: 3, borderRadius: 6, width: 150, mb: 5 }}
            className="learnMoreButton"
          >
            Learn More
          </Button>
        </Box>
        <Box className="containerWorkshops">
          <img src="/img/main_img/tf22.png" height={250} width={250} alt="" />
          <Typography variant="h3" color={"#fff"} sx={{ mt: 2 }}>
            Workshops
          </Typography>
          <Typography variant="subtitle2" color={"#fff"}>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc
          </Typography>
          <Button
            sx={{ color: "#fff", mt: 3, borderRadius: 6, width: 150, mb: 5 }}
            className="learnMoreButton"
          >
            Learn More
          </Button>
        </Box>
      </Box>
      {/* trailer*/}
      <Box sx={{mt:14}} className="trailer">
          <Typography id="trailer" color={"#74EB76"}>TRAILER</Typography>
          <Box className="trailerBox" sx={{mt:4}}>
            {/* <iframe id='trailervid' title="trailer"></iframe> */}
          </Box>
    </Box>
          {/* sponsor */}
          <Box className="sponsor" sx={{mt:6}} >
          <Typography id='sponsor'sx={{mt:14}} color={"#74EB76"}><span style={{color:"white"}}>OUR</span> SPONSORS</Typography>
          <Box className="sponsorImages">
            <img
              className="sponsor1"
              src="/img/main_img/tf22.png"
              alt="avatar_img"
            />
            <img
              className="sponsor2"
              src="/img/main_img/tf22.png"
              alt="avatar_img"
            />
            <img
              className="sponsor1"
              src="/img/main_img/tf22.png"
              alt="avatar_img"
            />
          </Box>
     
          </Box>
    </div>
  );
};

export default HomeScreen;
