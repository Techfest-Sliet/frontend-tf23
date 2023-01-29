import React from 'react';
import './Genesis.css';
import { FaRegCalendar, FaRegClock } from "react-icons/fa";
import { datasOfEvent } from "./data";
import TechFestT from "../techFEST23kaT.webp";
import dummyImg from "../../dummy.jpg";

const events = () => {
    return (
        <>
            <div className='background-of-EventsPage'>
                <div className='eventContainer'>
                    <div className='insideCntiner'>
                        <div className='techFestTCont'>
                            <img src={TechFestT} className='techFestT' alt=".." />
                        </div>
                        <h1> GENESIS </h1>
                        <span className='whiteLine'></span>
                        <button id='exploreEvents'>Explore Events</button>
                        <p>Begin your journey of a thousand miles by taking one step to represent yourself and your idea.</p>

                    </div>
                </div>
                <h1 className='evnts'>EVENTS</h1>
            </div>

            {/* EVENTS */}
            {datasOfEvent.map((item, index) => (

                <div className='eventsBackgroundBottom'key={index}>

                    <div className='eventBox'>

                        <div className='LeftOfBox'>
                            <h2>{item.nameOfEvent}</h2>
                            <p>{item.desc}
                            </p>
                            <button id='registerNow'> {item.register} </button>
                            <button id='viewSchedule'> {item.schedule} </button>
                            <h2 style={{ marginTop: "6px" }}>Prizes Worth <br></br> {item.prizeMoney} </h2>
                            <p style={{ fontSize: "14px" }}>
                                <FaRegCalendar /> Register Before {item.dateBefore}<br></br>
                                <FaRegClock /> 11:59 P.M.
                            </p>
                        </div>

                        <div className='RightOfBox'>
                            <div className='objOfBox'>
                                <div style={{ marginRight: "10px", textAlign: "center" }}> {item.nameOfEventCoordinator} <br></br> {item.phoneNo} </div>
                                <div style={{ marginLeft: "10px", textAlign: "center" }}> {item.nameOfEventCoordinator2} <br></br> {item.phoneNo2} </div>
                            </div>
                        </div>

                    </div>

                </div>
            ))}

            {/* Faculty Advisor */}
            <div className='bg_bottom'>
                <div className='fac_Container'>
                    <div style={{ textAlign: "center", color: "white" }}>
                        <img src={dummyImg} className='dummyImg' alt=".." />
                    </div>
                    <div style={{ color: "white", textAlign: "center" }}>
                        <b>Name of Faculty</b><br></br> Faculty Advisor
                    </div>
                    <div className='dmnCordintor'>
                        <div style={{ textAlign: "center", margin: "20px" }}><b> Domain Coordinator </b><br></br> <a href="tel:1234567890" style={{ textDecoration: "none", color: "white" }}> 1234567890 </a> </div>
                        <div style={{ textAlign: "center", margin: "20px" }}> <b> Domain Coordinator </b> <br></br> <a href="tel:1234567890" style={{ textDecoration: "none", color: "white" }}> 1234567890 </a> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default events;