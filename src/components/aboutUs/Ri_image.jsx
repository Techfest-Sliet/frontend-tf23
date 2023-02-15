import React from 'react';
import './Ri_image.css';
function Ri_image(props) {
  return (
    <div className='Ri_image_Container'>
        <div className="Ri_ImageTexT">
           <div className="Ri_textWrap">
           <h1 style={{ fontFamily: "monumentExtended" }} className='Ri_imageHeading'>{props.heading}</h1>
            <h4 style={{ fontFamily: "productSansBold" }} className='Ri_tagline'><i>{props?.tagline}</i></h4>
            <p style={{ fontFamily: "productSans" }} className='Ri_imageDetail'>{props?.detail}</p>
           </div>
        </div>
        <div className="Ri_image_ContainerImg">
            <img src={props?.img}  alt="" />
        </div>
        <div className="tfDivider">
          <img src="/about-us/stats-sec.svg" alt="" />
         </div>
    </div>
  )
}

export default Ri_image;