import React, { useEffect, useState } from "react";
import OneCard from "../../components/domain/OneCard.jsx";
import data, { domainSlider } from "./dummyData.js";
import SliderContent from "../../components/slider/SliderContent";
import Arrows from "../../components/slider/Arrows.js";
import Dots from "../../components/slider/Dots.js";
const leng = domainSlider.length - 1;
function DomainScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === leng ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  return (
  //  <div className="domainPage">
  //    <div className="domainScreen">
  //     <div className="DomainScroll">
  //     {/* <div className="domainSlider"> */}
  //       {/* <SliderContent activeIndex={activeIndex} imageSlider={domainSlider} id='domainSlide' />
  //       <Arrows
  //         prevSlide={() => {
  //           setActiveIndex(activeIndex < 1 ? leng : activeIndex - 1);
  //         }}
  //         nextSlide={() => {
  //           setActiveIndex(activeIndex === leng ? 0 : activeIndex + 1);
  //         }}
  //       />
  //       <Dots
  //         activeIndex={activeIndex}
  //         imageSlider={domainSlider}
  //         onClick={(activeIndex) => setActiveIndex(activeIndex)}
  //       /> */}
  //     {/* </div> */}
  //     <div class="domainheading">
  //       <h2>DOMAINS</h2>
  //       <p>Unleash your skills and test yourselves on National Battlegrounds with 8 Domains</p>
  //     </div>
  //     </div>
  //   </div>
  //   <div className="flex-container">
  //       {data?.map((item) => (
  //         <OneCard pic={item.pic} des={item.des} title={item.title} />
  //       ))}
  //     </div>
  //  </div>
  <div className="domainPage">
    COMING SOON
  </div>
  );
}

export default DomainScreen;
