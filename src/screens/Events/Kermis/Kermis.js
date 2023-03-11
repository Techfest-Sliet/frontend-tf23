import React from "react";
import "./Kermis.css";
import EventBox from "../EventBox";
import EventBottom from "../EventBottom";
import { datasOfEvent } from "./data";
import { datasOfEventCoordinator } from "./data";
import TechFestT from "../techFEST23kaT.webp";
import Kermisevent from "../KERMIS1_11zon.png";

const Kermis = () => {
  return (
    <>
      <div className="background-of-EventsPage">
        <div className="eventContainer">
          <div className="insideCntiner">
            <div className="techFestTCont">
              <img src={TechFestT} className="techFestT" alt=".." />
            </div>
            <img src={Kermisevent} className="event_kermis" alt="..." />
            <span className="whiteLine"></span>
            <button id="exploreEvents"><a href="#events">Explore Events</a></button>
            <p>
              Game is all fun and technology is all knowledge! What a perfect
              and fascinating blend they together make. Right? Participate in
              our gaming event and win fancy cash prizes.
            </p>
          </div>
        </div>
      </div>
      <div className="events" id="events">
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

export default Kermis;
