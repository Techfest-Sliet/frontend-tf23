import React from 'react';
import './Electrica.css';
import EventBox from "../EventBox";
import EventBottom from '../EventBottom';
import { datasOfEvent } from "./data";
import { datasOfEventCoordinator } from "./data"
import TechFestT from "../techFEST23kaT.webp";

const Electrica = () => {
    return (
        <>
            <div className='background-of-EventsPage'>
                <div className='eventContainer'>
                    <div className='insideCntiner'>
                        <div className='techFestTCont'>
                            <img src={TechFestT} className='techFestT' alt=".." />
                        </div>
                        <h1> ELECTRICA </h1>
                        <span className='whiteLine'></span>
                        <button id='exploreEvents'>Explore Events</button>
                        <p>The logic gates makes no logic until you implement it logically. Isn't it?
                            Here's to the domain Electrica that brings to you the events that demands to work on electronic devices and circuits. Participate in the events and add amazing experiences.
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

export default Electrica;