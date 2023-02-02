import React from 'react';
import './Mechanica.css';
import EventBox from "../EventBox";
import EventBottom from '../EventBottom';
import { datasOfEvent } from "./data";
import { datasOfEventCoordinator } from "./data"
import TechFestT from "../techFEST23kaT.webp";

const Mechanica = () => {
    return (
        <>
            <div className='background-of-EventsPage'>
                <div className='eventContainer'>
                    <div className='insideCntiner'>
                        <div className='techFestTCont'>
                            <img src={TechFestT} className='techFestT' alt=".." />
                        </div>
                        <h1> MECHANICA </h1>
                        <span className='whiteLine'></span>
                        <button id='exploreEvents'>Explore Events</button>
                        <p>This domain welcomes all mechanical engineers to challenge their skills in CAD/CAM designing, details about fabrication, knowledge about trusses and fluid mechanics.</p>

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

export default Mechanica;