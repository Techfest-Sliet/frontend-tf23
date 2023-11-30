// import React from "react";
//  import "./card.css"
import Card from "./card";
import "./card.css";
import Details from "./data.js";
// import WebDetails from "./webteamdata.js";
import { PatronInChiefData } from "./FacultyData.js";
import { PatronData } from "./FacultyData.js";
import { ChairmanData } from "./FacultyData.js";
import { ViceChairmanData } from "./FacultyData.js";
function team() {
  return (
    <div className="card__collection  clear-fix ">
      <h1 className="team-names">Patron In-Chief</h1>
      {PatronInChiefData.map((detail) => (
        <Card
          image={detail.image}
          name={detail.name}
          position={detail.position}
          linkedin={detail.linkedin}
        />
      ))}

      <h1 className="team-names">Patron</h1>
      {PatronData.map((detail) => (
        <Card
          image={detail.image}
          name={detail.name}
          position={detail.position}
        />
      ))}

      <h1 className="team-names">Chairman</h1>
      {ChairmanData.map((detail) => (
        <Card
          image={detail.image}
          name={detail.name}
          position={detail.position}
          linkedin={detail.linkedin}
        />
      ))}

      <h1 className="team-names">Vice-Chairman</h1>
      {ViceChairmanData.map((detail) => (
        <Card
          image={detail.image}
          name={detail.name}
          position={detail.position}
          linkedin={detail.linkedin}
        />
      ))}

      {/* <h1 className="team-names">Web Development Team</h1>

      {WebDetails.map((WebDetail) => (
        <Card
          image={WebDetail.image}
          name={WebDetail.name}
          position={WebDetail.position}
          linkedin={WebDetail.linkedin}
        />
      ))} */}
    </div>
  );
}

export default team;
