import React from 'react';
import './Loading.css';
import techFestLogo from "./techFEST '23.webp";
import logo from "./SLIET's techFEST '23.webp";

const Loading = () => {
    return (
        <>
            <div className='loading_bg'>
                <div className='techFest'>
                    <img src={logo} className="cmingSoon_logo" alt=".."/>
                </div>

                <div className='loadingContainer'>
                    <img src={techFestLogo} className='techFestLogo' alt=".." />
                    <div className='techFest2'>
                        <img src={logo} className="cmingSoon_logo2" alt=".."/>
                    </div>

                    <h1>COMING THIS <span style={{ color: "rgb(30, 190, 30)" }}>MARCH</span></h1>
                    <p><i>Just getting ready to blow your mind !</i></p>
                </div>
            </div>
        </>
    )
}

export default Loading
