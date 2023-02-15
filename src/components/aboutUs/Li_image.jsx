import React from "react";
import "./Li_image.css";
function Li_image(props) {
  return (
    <div className="Li_image_Container">
      <div className="Li_image_ContainerImg">
        <img src={props?.img} alt="" />
      </div>
      <div className="Li_ImageTexT">
        <div className="Li_textWrap">
          <h1
            style={{ fontFamily: "monumentExtended" }}
            className="Li_imageHeading"
          >
            {props.heading}
          </h1>
          <h4 style={{ fontFamily: "productSansBold" }} className="tagline">
            <i>{props?.tagline}</i>
          </h4>
          <p style={{ fontFamily: "productSans" }} className="Li_imageDetail">
            {props?.detail}
          </p>
        </div>
      </div>
      <div className="tfDivider">
        <img src="/about-us/stats-sec.svg" alt="" />
      </div>
    </div>
  );
}

export default Li_image;
