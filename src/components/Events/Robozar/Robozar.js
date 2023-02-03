import React from 'react';
import './Robozar.css';
import EventBox from "../EventBox";
import EventBottom from '../EventBottom';
import { datasOfEvent, datasOfEventCoordinator } from "./data";
import TechFestT from "../techFEST23kaT.webp";

const Robozar = () => {
    return (
        <>
            <div className='background-of-EventsPage'>
                <div className='eventContainer'>
                    <div className='insideCntiner'>
                        <div className='techFestTCont'>
                            <img src={TechFestT} className='techFestT' alt=".." />
                        </div>
                        <h1> ROBOZAR </h1>
                        <span className='whiteLine'></span>
                        <button id='exploreEvents'>Explore Events</button>
                        <p>Ever captivated by versatile activities carried out by bots nowadays?
                            Ever witnessed how robots today perform it all innovating our agriculture?
                            Here's to the exciting opportunities to showcase your skills, design a robot, enhance your skills and win worth cash prizes,All at the same place!
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

export default Robozar;