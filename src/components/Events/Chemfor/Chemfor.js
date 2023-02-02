import React from 'react';
import './Chemfor.css';
// import { FaRegCalendar, FaRegClock } from "react-icons/fa";
import EventBox from "../EventBox";
import EventBottom from '../EventBottom';
import { datasOfEvent } from "./data";
import { datasOfEventCoordinator } from "./data"
import TechFestT from "../techFEST23kaT.webp";
// import dummyImg from "../../dummy.jpg";

const Chemfor = () => {
    return (
        <>
            <div className='background-of-EventsPage'>
                <div className='eventContainer'>
                    <div className='insideCntiner'>
                        <div className='techFestTCont'>
                            <img src={TechFestT} className='techFestT' alt=".." />
                        </div>
                        <h1> CHEMFOR </h1>
                        <span className='whiteLine'></span>
                        <button id='exploreEvents' className='explore__events'>Explore Events</button>
                        <p>From disinfectants to vehicles' fuels, from electrical batteries to agricultural products, everything's on chemical and chemical technology. Make yourself a part of Chemfor domain and witness engrossing events happening.
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

export default Chemfor;