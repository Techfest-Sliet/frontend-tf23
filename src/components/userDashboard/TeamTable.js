import React, { useState } from "react";
import "./TeamTable.css";
import { MdDelete } from "react-icons/md";

const TeamTable = (props) => {
  const [teamMembers, setTeamMembers] = useState(props.teamMembers);
  const handleDelete = (id) => {
    const updatedTeamMembers = teamMembers.filter((member) => member.id !== id);
    setTeamMembers(updatedTeamMembers);
  };

  return (
    <>
      <div className="teamcont">
        <table className="teamTable">
          <thead>
            <tr className="TableRow">
              <th className="teamHeader">Team Name</th>
              <th className="teamHeader">Member Name</th>
              <th className="teamHeader">Member Email</th>
              <th className="teamHeader">Status</th>
              <th className="teamHeader">Action</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr key={member.id} className="TableRow">
                <td>{member.teamName}</td>
                <td>{member.memberName}</td>
                <td>{member.memberEmail}</td>
                <td>{member.isVerified ? "Verified" : "Not Verified"}</td>
                <td>
                  <button onClick={() => handleDelete(member.id)} className="teamDelIcon">
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
