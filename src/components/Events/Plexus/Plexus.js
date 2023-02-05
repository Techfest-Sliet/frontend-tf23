import React from 'react';
import './Plexus.css';
import EventBox from '../EventBox';
import { datasOfEvent, datasOfEventCoordinator } from "./data";
import EventBottom from '../EventBottom';
import TechFestT from "../techFEST23kaT.webp";

const Plexus = () => {
    return (
        <>
            <div className='background-of-EventsPage'>
                <div className='eventContainer'>
                    <div className='insideCntiner'>
                        <div className='techFestTCont'>
                            <img src={TechFestT} className='techFestT' alt=".." />
                        </div>
                        <h1> PLEXUS </h1>
                        <span className='whiteLine'></span>
                        <button id='exploreEvents'>Explore Events</button>
                        <p>As Plexus is connection of nerves, our participants are stack of codes.
                            Make yourself a member of Plexus Domain to analyze your programming skills.
                        </p>

                    </div>
                </div>
            </div>
            <div className='events'>
                <h1 className='evnts'>EVENTS</h1>
            </div>

            {/* EVENTS */}
            {datasOfEvent.map((item, index) => (

                <div className='eventsBackgroundBottom' key={index}>
                    <EventBox props={item} index={index} />
                </div>
            ))}


            {/* Faculty Advisor */}

            {datasOfEventCoordinator.map((item) => (
                <EventBottom props={item} />

            ))}
        </>
    )
}

export default Plexus;