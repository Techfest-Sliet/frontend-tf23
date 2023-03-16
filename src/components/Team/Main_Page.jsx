import { Popover } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AddMember from "./AddMember";
import "./mainPage.css";
import img from "./user.png";
import { members } from "./members.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorModel from "../ErrorPopup/ErrorModel";
import { Link } from "react-router-dom";

import { baseUrl } from "../../API/api.js";
import AuthContext from "../../auth/authContext.js";
const Main_Page = (props) => {
  const [errorMade, setErrorMade] = useState();
  const onErrorMadeHandle = () => {
    setErrorMade(null);
  };
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState("");
  const [toggle, setToggle] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState();
  let eventId = "";
  const [membersList, setMembersList] = useState([]);
  const handleClick = () => {
    navigate('/user-dashboard')
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const showHide = (event) => {
    setToggle(event.target.value);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  useEffect(() => {
    setMembersList(members);
  }, [membersList]);

  useEffect(() => {
    getProperTeam();
  }, []);

  const getProperTeam = async () => {
    await axios
      .get(`${baseUrl}/team/properteam`, {
        headers: {
          Authorization: "Bearer " + authContext.token,
        },
      })
      .then((result) => {
        setTeams(result.data.teams);
        return;
      });
  };

  const PostData = async () => {
    await axios
      .post(
        `${baseUrl}/user/addevent`,
        {
          eventId: props.eventId,
          type: type,
        },
        {
          headers: {
            Authorization: "Bearer " + authContext.token,
          },
        }
      )
      .then((result) => {
        // setErrorMade({
        //   title: result.data.title,
        //   message: result.data.message,
        // });
        alert(JSON.stringify(result.data.title, result.data.message));
        return;
      });
  };

  return (
    <div>
      {errorMade && (
        <ErrorModel
          title={errorMade.title}
          message={errorMade.message}
          onErrorClick={onErrorMadeHandle}
        />
      )}
      <div className="Mainlist-father">
        <div className="Mainlist-son">
          {/* <span className="crossButton">X</span> */}
          <span className="Mainlist-content">
            <div className="Mainlist-top2">
              <select
                className="Mainlist_select"
                onChange={(e) => {
                  setType(e.target.value);
                  showHide(e);
                }}
              >
                <option value="0">Choose Participation Type</option>

                {props &&
                  (props.eventParticipationType === "Individual" ||
                    props.eventParticipationType === "Hybrid") && (
                    <option value="Individual">Individual</option>
                  )}
                {props &&
                  (props.eventParticipationType === "Hybrid" ||
                    props.eventParticipationType === "Team") &&
                  teams &&
                  teams?.map((team) => {
                    return <option value={team._id}>{team.teamName}</option>;
                  })}
              </select>
            </div>
          </span>
          <div>
          </div>

          <div className="addTEamDiv">
            <span style={{ padding: "10px" }}>Add Team</span>
            <Link to="/addteam">
              <img
                className="Mainlist-addmemberimg"
                src={img}
                alt=""
                width="50"
                height="50"
                cursor="pointer"
                onClick={handleClick}
              ></img>
            </Link>
          </div>

          
          <button type="button" className="Mainlist-button" onClick={PostData}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main_Page;
