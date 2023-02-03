import React from 'react';
import './Karyarachna.css';
import EventBox from "../EventBox";
import EventBottom from '../EventBottom';
import { datasOfEvent } from "./data";
import { datasOfEventCoordinator } from "./data"
import TechFestT from "../techFEST23kaT.webp";

const Karyarachna = () => {
    return (
        <>
            <div className='background-of-EventsPage'>
                <div className='eventContainer'>
                    <div className='insideCntinerKarya'>
                        <div className='techFestTCont'>
                            <img src={TechFestT} className='techFestT' alt=".." />
                        </div>
                        <h1> KARYARACHNA </h1>
                        <span className='whiteLine'></span>
                        <button id='exploreEvents'>Explore Events</button>
                        <p>The most efficient step to transformation is to start from right where you're.
                            Think of solution ideas for problems such as stubble burning, lack of proper access to technology to farmers and many more, instances of which you see observe quite often.
                            Execute these ideas and participate in our event and win worth cash prizes.
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

export default Karyarachna;