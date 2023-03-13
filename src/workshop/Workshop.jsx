import React, { useEffect } from 'react';
import './workshop.css';
import { datasOfWorkshop } from "../../dummy data/Workshop";
import WorkshopBox from '../../components/workshop/WorkshopBox';
import axios from 'axios';

const Workshop = () => {

  return (
    <>

      <div className='wrkshopsBackgroundTop'>
        <div className='outer_circle'>
          <div className='inner_circle'>
            <img src='/workshop/workshop.png' className='workshpImg' alt=".." />
          </div>
          <div className='explore_wrkshop'>
            <h2>WORKSHOPS</h2>
            <p style={{ marginTop: "-4px", fontSize: "small" }}>Explore Workshops</p>
            <p style={{ marginTop: "10px" }}>
            Welcome to our engineering workshops! Our workshops are designed to provide engineering students and professionals with practical knowledge and skills that they can apply in their work or studies. We offer a wide range of workshops on topics such as software development, electrical engineering, mechanical engineering, civil engineering, and more. Our workshops are led by expert engineers and trainers who guide you through the learning process and provide you with feedback and support. 
            </p>
          </div>
        </div>
      </div>


      {/* Name of the Workshop */}
      <div className='wrkshopsBackgroundBottoms'>
      {datasOfWorkshop.map((item, index) => (
       <WorkshopBox index={index} props={item}/>
      ))}
      </div>
    </>
  )
}

export default Workshop;
