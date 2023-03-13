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
                  <Link to="/addteam">
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
            {teamMembers.map((member) => (
              <tr key={member.id} className="TableRow">
                <td>{member.teamName}</td>
                <td>{member.leaderName}</td>
                <td className="memberLi">
                  {member.membersName.map((eachMember) => (
                    <tr
                      key={eachMember.idd}
                      className={
                        eachMember.isVerified ? "verifiedTxt" : "notVerifiedTxt"
                      }
                    >
                      <td>{eachMember.memberName} - </td>
                      <td>
                        {eachMember.isVerified ? "Verified" : "Not Verified"}
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
                <td>{member.eventName}</td>
                <td>
                  <button
                    onClick={() => handleDelete(member.id)}
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
