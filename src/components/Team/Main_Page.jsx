import { Popover } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AddMember from "./AddMember";
import "./mainPage.css";
import img from "./user.png";
import { members } from "./members.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorModel from "../ErrorPopup/ErrorModel";

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
  const user = props.user;
  const leaderId = user._id;
  const leaderName = user.leaderName;
  let eventId = "";
  const [membersList, setMembersList] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        alert(JSON.stringify(result.data.title,result.data.message))
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
                <option value="Individual">Individual</option>
                {teams?.map((team) => {
                  return <option value={team._id}>{team.teamName}</option>;
                })}
                <option value="Team">Add Team</option>
              </select>
            </div>
          </span>

          {toggle === "Team" && (
            <div className="Mainlist-memberlist">
              <p className="Mainlist-contentheading">My Team</p>
              <div className="Mainlist-myteamline"></div>
              <div className="Mainlist-buttoncircle">
                {/* <img src=""></img> */}
                <img
                  className="Mainlist-addmemberimg"
                  src={img}
                  alt=""
                  width="500"
                  height="600"
                  onClick={handleClick}
                ></img>
                <br />
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                >
                  <AddMember
                    teamName={teamName}
                    eventType={props.eventMode}
                    leaderId={leaderId}
                    leaderName={leaderName}
                    events={eventId}
                  />
                </Popover>
              </div>
            </div>
          )}
          {toggle === "Team" &&
            membersList?.map((item) => (
              <div className="Mainlist-listelements">
                <input
                  className="Mainlist-teamName"
                  placeholder="Enter team name"
                  style={{
                    width: "80%",
                    padding: "0.6rem",
                    "margin-left": "10%",
                    background: "transparent",
                    "margin-top": "1em",
                    color: "white",
                    "font-size": "1rem",
                  }}
                  onChange={(e) => setTeamName(e.target.value)}
                />
                <span className="Mainlist-list">
                  <p className="Mainlist-listname">{item?.name}</p>
                  <p className="Mainlist-listid">{item.tfId}</p>
                </span>
                <div className="Mainlist-lstline"></div>
              </div>
            ))}
          <button type="button" className="Mainlist-button" onClick={PostData}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main_Page;
