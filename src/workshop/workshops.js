import React from 'react';
import './workshop.css';
import wrkshop from "./Workshop.png";
import { FaRegCalendar, FaRegClock } from "react-icons/fa";
import { datasOfWorkshop } from "./DataOfWorkshop";

const workshops = () => {
  return (
    <>

      <div className='wrkshopsBackgroundTop'>
        <div className='outer_circle'>
          <div className='inner_circle'>
            <img src={wrkshop} className='workshpImg' alt=".." />
          </div>
          <div className='explore_wrkshop'>
            <h2>WORKSHOPS</h2>
            <p style={{ marginTop: "-4px", fontSize: "small" }}>Explore Workshops</p>
            <p style={{ marginTop: "10px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </div>


      {/* Name of the Workshop */}
      {datasOfWorkshop.map((item, index) => (

        <div className='wrkshopsBackgroundBottom' key={index}>

          <div className='workshopBox'>

            <div className='LeftOfBox'>
              <h2>{item.nameOfWorkshop}</h2>
              <p>{item.desc}
              </p>
              {/* <button id='registerNow'> {item.register} </button>
              <button id='viewSchedule'> {item.schedule} </button>
              <h2 style={{ marginTop: "6px" }}>Prizes Worth <br></br> {item.prizeMoney} </h2>
              <p style={{ fontSize: "14px" }}>
                <FaRegCalendar /> Register Before {item.dateBefore}<br></br>
                <FaRegClock /> 11:59 P.M.
              </p> */}
            </div>
{/* 
            <div className='RightOfBox'>
              <div className='objOfBox'>
                <div style={{ marginRight: "10px", textAlign: "center" }}> {item.nameOfEventCoordinator} <br></br> {item.phoneNo} </div>
                <div style={{ marginLeft: "10px", textAlign: "center" }}> {item.nameOfEventCoordinator2} <br></br> {item.phoneNo2} </div>
              </div>
            </div> */}

          </div>

        </div>

      ))}
    </>
  )
}

export default workshops;
