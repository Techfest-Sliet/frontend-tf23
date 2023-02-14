import React from "react";
import "./Genesis.css";
import EventBox from "../EventBox";
import EventBottom from "../EventBottom";
import { datasOfEvent } from "./data";
import { datasOfEventCoordinator } from "./data";
import TechFestT from "../techFEST23kaT.webp";
import Genesisevent from "../GENESIS1_11zon.png";

const Genesis = () => {
  return (
    <>
      <div className="background-of-EventsPage">
        <div className="eventContainer">
          <div className="insideCntiner">
            <div className="techFestTCont">
              <img src={TechFestT} className="techFestT" alt=".." />
            </div>
            <img src={Genesisevent} className="event_Genesis" alt="..." />
            <span className="whiteLine"></span>
            <button id="exploreEvents">Explore Events</button>
            <p>
              The outstanding ones are those who do not limit themselves to a
              point and keep on triggering to create better. Make yourself a
              part of Genesis Domain and witness young yet second to none
              entrepreneurs presenting extraordinary ideas.
            </p>
          </div>
        </div>
      </div>
      <div className="events">
        <h1 className="evnts">EVENTS</h1>
      </div>

      {/* EVENTS */}
      {datasOfEvent.map((item, index) => (
        <div className="eventsBackgroundBottom" key={index}>
          <EventBox props={item} index={index} />
        </div>
      ))}

      {/* Faculty Advisor */}

      {datasOfEventCoordinator.map((item) => (
        <EventBottom props={item} />
      ))}
    </>
  );
};

export default Genesis;
