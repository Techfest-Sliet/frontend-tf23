import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../API/api";
import "./workshopbox.css";
import { FaRegCalendar, FaRegClock, FaUnity } from "react-icons/fa";
import ErrorModel from "../components/ErrorPopup/ErrorModel";
import AuthContext from "../auth/authContext";

function WorkshopBox({ props }) {
  const [errorMade, setErrorMade] = useState();
  const authContext = useContext(AuthContext);
  const onErrorMadeHandle = () => {
    setErrorMade(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [eventName, setEventName] = useState(null);
  const [user, setUser] = useState(null);
  const handleClick = (event) => {
    setEventName(event.target.value);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  function HandleRegister() {
    if (!authContext.isUserLoggedIn) {
      setErrorMade({
        title: "Login Error",
        message: "Please login to register for the event",
      });
      return;
    }
    axios
      .post(
        `${baseUrl}/user/registerworkshop`,
        { workshopId: props._id },
        {
          headers: {
            Authorization: "Bearer " + authContext.token,
          },
        },
      )
      .then((result) => {
        setErrorMade({
          title: result.data.title,
          message: result.data.message,
        });
        return;
      });
  }

  useEffect(() => {
    axios
      .get(`${baseUrl}/user/getUserById`, {
        headers: {
          Authorization: "Bearer " + authContext.token,
        },
      })
      .then((result) => {
        if (
          result.status !== 200 ||
          (result.status !== 201 && result.data.isError)
        ) {
          authContext.logout();
          return result.status(208).json({
            title: "Auth Error",
            message: "Wrong user auth!",
          });
        }
        setUser(result.data.user);
      });
    //   .catch((err) => {
    //     return res.status(208).json({
    //       title: "Auth Error",
    //       message: "Wrong user auth!",
    //     });
    //   });
  }, [authContext, authContext.login]);

  return (
    <>
      {errorMade && (
        <ErrorModel
          title={errorMade.title}
          message={errorMade.message}
          onErrorClick={onErrorMadeHandle}
        />
      )}

      <div className="eventBoxSingle" key={props._id}>
        <div className="LeftOfEventBox">
          <div className="evntDesc" style={{ float: "left" }}>
            <h1 style={{ textAlign: "left" }}>{props && props.workshopName}</h1>
            <p className="eventDesc">{props && props.workshopDescription}</p>
            <div style={{ float: "left" }}>
              <button className="registerNowEvent" onClick={HandleRegister}>
                Register Now
              </button>
              {/* <button className='problemStat' > {props?.schedule} </button> */}
            </div>
            <div style={{ float: "left" }}>
              <p style={{ fontSize: "14px", textAlign: "left" }}>
                <FaRegCalendar /> Register Before 17 March<br></br>
                <FaRegClock /> 11:59 P.M.
              </p>
              <p style={{ fontSize: "14px", textAlign: "left" }}>
                Venue: {props && props.workshopVenue}
              </p>
              <p style={{ fontSize: "14px", textAlign: "left" }}>
                Time: {props && props.workshopTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkshopBox;
