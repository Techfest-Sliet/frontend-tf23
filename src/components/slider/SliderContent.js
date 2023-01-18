import React from "react";
import './slider.css';
function SliderContent({ activeIndex, imageSlider }) {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
            <img className="slide-image" src={slide.pic} alt=""/>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
