// import React from "react";
//  import "./card.css"
 import Card from './card'
  import './card.css'
import Details from "./data.js";
import WebDetails from "./webteamdata.js";
function  team() {
  return (
    <div className="card__collection  clear-fix ">
    
           <h1 className='team-names'>Core Team</h1>
        {Details.map(detail => (
          <Card
          image={detail.image}
            name={detail.name}
        position={detail.position}
        linkedin={detail.linkedin}
          />
        ))}

        <h1 className='team-names'>Web Development Team</h1>

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

