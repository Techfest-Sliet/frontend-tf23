import React from "react";
import "./Chemfor.css";
import EventBox from "../EventBox";
import EventBottom from "../EventBottom";
import { datasOfEvent } from "./data";
import { datasOfEventCoordinator } from "./data";
import TechFestT from "../techFEST23kaT.webp";
import Chemforevent from "../CHEMFOR1_11zon.png";

const Chemfor = () => {
  return (
    <>
      <div className="background-of-EventsPage">
        <div className="eventContainer">
          <div className="insideCntiner">
            <div className="techFestTCont">
              <img src={TechFestT} className="techFestT" alt=".." />
            </div>

            <img src={Chemforevent} className="event_chemfor" alt="..." />

            <span className="whiteLine"></span>
            <button id="exploreEvents" className="explore__events">
              Explore Events
            </button>
            <p>
              From disinfectants to vehicles' fuels, from electrical batteries
              to agricultural products, everything's on chemical and chemical
              technology. Make yourself a part of Chemfor domain and witness
              engrossing events happening.
            </p>
          </div>
        </div>
      </div>
      <div className="events">
        <h1 className="evnts">EVENTS</h1>
      </div>
      {datasOfEvent.map((item, index) => (
        <div className="eventsBackgroundBottom" key={index}>
          <EventBox props={item} index={index} />
        </div>
      ))}
      {datasOfEventCoordinator.map((item) => (
        <EventBottom props={item} />
      ))}
    </>
  );
};

export default Chemfor;
