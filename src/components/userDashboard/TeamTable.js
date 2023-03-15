import React, { useState } from "react";
import "./TeamTable.css";
import { MdDelete, MdAdd } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamTable = (props) => {
  const [teamMembers, setTeamMembers] = useState(props.teamMembers);
  const handleDelete = (id) => {
    const updatedTeamMembers = teamMembers.filter((member) => member.id !== id);
    setTeamMembers(updatedTeamMembers);
  };

  // const [membersName, setMembersName] = useState(props.teamMembers.membersName);
  // const handleDeleteMember = (idd) => {
  //   const updatedMembers = membersName.filter(
  //     (eachMember) => eachMember.idd !== idd
  //   );
  //   setMembersName(updatedMembers);
  // };

  return (
    <>
      <div className="teamcont">
        <table className="teamTable">
          <thead>
            <tr>
              <th className="teamHeader">Add Team</th>
              <th className="teamHeader">
                <button className="teamaddBtn">
                  <Link to="/addteam" state={{leaderId: props?.leaderId}}>
                    <MdAdd className="AddBttn" />
                  </Link>
                </button>
              </th>
            </tr>
            <tr className="TableRow">
              <th className="teamHeader">Team Name</th>
              <th className="teamHeader">Leader Name</th>
              <th className="teamHeader">Member Name - Status</th>
              <th className="teamHeader">Event</th>
              <th className="teamHeader">Action</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((team) => (
              <tr key={team._id} className="TableRow">
                <td>{team.teamName}</td>
                <td>{team.leaderName}</td>
                <td className="memberLi">
                  {team.members.map((eachMember) => (
                    <tr
                      key={eachMember.memberId}
                      className={
                        eachMember.status ? "verifiedTxt" : "notVerifiedTxt"
                      }
                    >
                      <td>{eachMember.email} - </td>
                      <td>
                        {eachMember.status ? "Verified" : "Not Verified"}
                      </td>
                      <td className="removeMembBttn">
                        <button
                          className="membDelIcon"
                          // onClick={() => handleDeleteMember(eachMember.idd)}
                        >
                          <FaTimes />
                        </button>
                      </td>
                    </tr>
                  ))}
                </td>
                <td>{team.eventName}</td>
                {team.events && team.events.length === 0 && <td>Not yet registered</td>}
                {team.events && team.events.map((event) => {
                  return (
                    <td>{event.eventName}</td>
                  )
                })}
                <td>
                  <button
                    onClick={() => handleDelete(team.memberId)}
                    className="teamDelIcon"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeamTable;
