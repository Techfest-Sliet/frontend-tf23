import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./AddTeam.css";

const AddTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([{ id: "", name: "", email: "" }]);

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleMemberChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...members];
    list[index][name] = value;
    setMembers(list);
  };

  const handleAddMember = () => {
    setMembers([...members, { id: "", name: "", email: "" }]);
  };

  const handleRemoveMember = (index) => {
    const list = [...members];
    list.splice(index, 1);
    setMembers(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <div className="addTeamBg">
        <div className="addTeamCont">
          <div className="addTeamBox">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="teamName" className="addTeamlabel">Team Name:</label> <br></br>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={teamName}
                  onChange={handleTeamNameChange}
                  className="addTeamInput"
                />
              </div>
              <div>
                <label className="addTeamlabel">Members:</label>
                {members.map((member, index) => (
                  <div key={index}  className="memberDetails">
                    <input
                      type="text"
                      name="id"
                      value={member.id}
                      onChange={(event) => handleMemberChange(event, index)}
                      placeholder="Member ID"
                  className="addTeamInput"
                    />
                    <input
                      type="text"
                      name="name"
                      value={member.name}
                      onChange={(event) => handleMemberChange(event, index)}
                      placeholder="Member Name"
                  className="addTeamInput"
                    />
                    <input
                      type="email"
                      name="email"
                      value={member.email}
                      onChange={(event) => handleMemberChange(event, index)}
                      placeholder="Member Email"
                  className="addTeamInput"

                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(index)}
                      className="removememb"
                    >
                      <FaTimes/>
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddMember} className="addTeamBttn">
                  Add Member
                </button>
              </div>
              <button type="submit" className="addTeamBttn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTeam;