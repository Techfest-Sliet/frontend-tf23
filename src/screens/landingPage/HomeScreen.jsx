import { Button } from "@mui/material";
import React from "react";
import "./HomeScreen.css";
import SponsorImageSlider from "../../components/slider/SponsorImageSlider.js";
import SliderContent from "../../components/slider/SliderContent";
import Arrows from "../../components/slider/Arrows";
import { useState, useEffect } from "react";
const leng = SponsorImageSlider.length - 1;
const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeIndexPrev, setActiveIndexPrev] = useState(0);
  const [activeIndexNext, setActiveIndexNext] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex( (activeIndex===leng)? 0 : activeIndex + 1);
      setActiveIndexPrev(activeIndex);
      setActiveIndexNext((activeIndexNext===leng)?0: activeIndexNext+1)
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex,activeIndexPrev,activeIndexNext]);


  const gotoTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  return (
    <div className="homePage">
      <div className="landingPageCover">
        <div className="landingPage">
          <div className="logoContainer">
            <img src="/tf23.webp" alt="" className="main_img" />
          </div>
          <div className="innovationIn">
            <div className="innovation">
              <h1 id="inn">INN</h1>
              <div className="O"></div>
              <h1 id="vation">VATION</h1>
            </div>
            <h1 id="in">in</h1>
          </div>
          <h1 id="agriculture">AGRICULTURE</h1>
          <p className="landingText">
            Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra
            vitae congue eu consequat ac felis donec et odio pellentesque diam
            volutpat commodo sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate sapien nec sagittis
            aliquam
          </p>
          <div
            className="landingButtons"
            style={{ marginTop: 10, color: "white", marginBottom: 1 }}
          >
            <Button variant="contained" id="signUpButton" sx={{ mr: 2, mt: 3 }}>
              Sign Up Now
            </Button>
            <Button
              variant="contained"
              id="aboutUsButton"
              sx={{ mr: 2, mt: 3 }}
            >
              About Us
            </Button>
          </div>
        </div>
      </div>
      {/* expanded landing page */}
    <div className="extendedPage">
    <div className="main_container">
        <div className="containerDomain">
          <img src="domain.webp" height={250} width={250} alt="" />
          <h1 style={{ color: "#fff" }} className="containerHeading">
            Domains
          </h1>
          <p className="containerText" style={{ color: "#fff" }}>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc
          </p>
          <Button
            sx={{ color: "#fff", mt: 3, borderRadius: 6, width: 150, mb: 5 }}
            className="learnMoreButton"
          >
            Learn More
          </Button>
        </div>
        <div className="containerWorkshops">
          <img src="/workshop.webp" height={250} width={250} alt="" />
          <h1 style={{ color: "#fff" }} className="containerHeading">
            Workshops
          </h1>
          <p className="containerText" style={{ color: "#fff" }}>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc
          </p>
          <Button
            sx={{ color: "#fff", mt: 3, borderRadius: 6, width: 150, mb: 5 }}
            className="learnMoreButton"
          >
            Learn More
          </Button>
        </div>
      </div>
      {/* trailer*/}
      <div style={{ marginTop: 14 }} className="trailer">
        <h1 id="trailer">TRAILER</h1>
        <div className="trailerBox" style={{ marginTop: 4 }}>
          <iframe
            className="trailerVid"
            src="https://www.youtube.com/embed/Nt58vSQqBU8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* sponsor */}
      <div className="sponsor">
        <h1 id="sponsor" style={{ color: "#74EB76" }}>
          <span style={{ color: "white" }}>OUR</span> SPONSORS
        </h1>
        <div className="sponsorImages">
          <div className="prevSlide">
            <SliderContent
              activeIndex={activeIndexPrev}
              imageSlider={SponsorImageSlider}
            />
          </div>

          <div className="mainSlide">
            <SliderContent
              activeIndex={activeIndex}
              imageSlider={SponsorImageSlider}
            />
            <Arrows
              prevSlide={() => {
                setActiveIndex( activeIndex < 1 ? leng : activeIndex - 1);
                setActiveIndexNext( activeIndex)
                setActiveIndexPrev((activeIndexPrev<1)?leng:  activeIndexPrev-1);
              }}
              nextSlide={() =>{
                setActiveIndex( (activeIndex===leng)? 0 : activeIndex + 1);
                setActiveIndexPrev(activeIndex);
                setActiveIndexNext((activeIndexNext===leng)?0: activeIndexNext+1)
              }}
            />
           
          </div>

          <div className="nextSlide">
            <SliderContent
              activeIndex={activeIndexNext}
              imageSlider={SponsorImageSlider}
            />
          </div>
        </div>
      <div className="backToTop">
        <h4 onClick={gotoTop} style={{textDecoration:"none"}}>Back To Top ^</h4>
      </div>
      </div>
    </div>




    </div>
  );
};

export default HomeScreen;
