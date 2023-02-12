// import React from "react";
//  import "./card.css"
 import Card from './card'
  import './card.css'
import Details from "./data.js";
import WebDetails from "./webteamdata.js";
function  team() {
  return (
    <div className="card__collection  clear-fix ">
    
           <p className='team-names'>Core Team</p>
        {Details.map(detail => (
          <Card
          image={detail.image}
            name={detail.name}
        position={detail.position}
        linkedin={detail.linkedin}
          />
        ))}

        <p className='team-names'>Web Development Team</p>

        {WebDetails.map(WebDetail => (
          <Card
          image={WebDetail.image}
            name={WebDetail.name}
        position={WebDetail.position}
        linkedin={WebDetail.linkedin}
          />
        ))}

    
      

    </div>
  );
}

export default team;

