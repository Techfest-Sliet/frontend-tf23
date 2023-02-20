import { Popover } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddMember from "./AddMember";
import "./mainPage.css";
import img from "./user.png";
import {members} from './members.js';
function Main_Page() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [membersList,setMembersList]=useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
   const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  useEffect(() => {
    setMembersList(members)
  }, [membersList])
  
  return (
    <div>
      <div className="Mainlist-father">
        <div className="Mainlist-son">
          <span className="Mainlist-content">
            <div className="Mainlist-top2"></div>
            <div className="Mainlist-topheding">
              <p className="Mainlist-contentheading">Domain Name</p>
              <input className="Mainlist-forminput" type="text" />
              <div className="Mainlist-line"></div>
              <br />
            </div>

            <div className="Mainlist-topheding">
              <p className="Mainlist-contentheading">Competition Name</p>
              <input className="Mainlist-forminput" type="text" />
              <div className="Mainlist-line"></div>
              <br />
            </div>
          </span>

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
                <AddMember/>
              </Popover>
            </div>
          </div>
          {membersList?.map(item=>(
          <div className="Mainlist-listelements">
            <span className="Mainlist-list">
              <p className="Mainlist-listname">{item?.name}</p>
              <p className="Mainlist-listid">{item.tfId}</p>
            </span>
            <div className="Mainlist-lstline"></div>
          </div>
          ))}

        </div>
      </div>
    </div>
  );
}
export default Main_Page;
