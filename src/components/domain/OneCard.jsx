import React from "react";
import "./OneCard.css";
function OneCard({ pic, des, title}) {
  return (
    <div className="domainRing">
      <div className="outerring ">
        <div className="innerRing">
          <div className="flip-card-back">
            <span className="span">{des}</span>
          </div>

          <div className="flip-card-front">
            <img className="ringImage" src={pic} alt=""/>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCard;