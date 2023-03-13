import React, { useState } from "react";
import "./TeamTable.css";
import { MdDelete, MdAdd } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TeamTable = (props) => {

  const [teamMembers, setTeamMembers] = useState(props.teamMembers);  

  const handleDeleteTeam = (id) => {

    const deleteTeam = (id) => {
      // Delete the team
      const updatedTeamMembers = teamMembers.filter((member) => member.id !== id);
      setTeamMembers(updatedTeamMembers);
      toast.success('Team deleted successfully!');
    };

    toast.warn(
      <div>
        <p>Are you sure you want to delete this team?</p>
        <label>
          <input type="checkbox" />
          <span>Yes, I'm sure</span>
        </label>
        <button onClick={() => toast.dismiss()}>Cancel</button>
        <button onClick={deleteTeam(id)}>Delete</button>
      </div>,
      {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  };
  

  // DELETE A MEMBER

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
                      <td className="isVeriTxt">
                        {eachMember.isVerified ? "Verified" : "Not Verified"}
                      </td>
                      <td className="removeMembBttn">
                        <button
                          className="membDelIcon"
                        // onClick={() => handleDeleteMember(eachMember.idd)}
                        >
                          <FaTimes title="delete member"/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </td>
                <td>{member.eventName}</td>
                <td>
                  <button
                    onClick={() => handleDeleteTeam(member.id)}
                    className="teamDelIcon"
                  >
                    <MdDelete title="delete team"/>
                  </button>
                  <ToastContainer />
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
