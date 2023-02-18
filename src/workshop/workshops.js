import React from 'react';
import './workshop.css';
import wrkshop from "./Workshop.png";
import EventBox from '../components/Events/EventBox';
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
      <div className='wrkshopsBackgroundBottoms'>
      {datasOfWorkshop.map((item, index) => (
       <EventBox index={index} props={item}/>
      ))}
      </div>
    </>
  )
}

export default workshops;
