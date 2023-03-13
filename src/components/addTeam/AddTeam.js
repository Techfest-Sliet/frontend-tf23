import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./AddTeam.css";
import axios from "axios";
import { baseUrl } from "../../API/api";

const AddTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([{ id: "", name: "", email: "" }]);
  const [memberResults, setMemberResults] = useState();

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };
  const searchUsers = async (data) => {
    await axios.post(`${baseUrl}/user/searchByName`, {name: data}).then((e) => {setMemberResults(e.data)});
  }

  const SetFields = (event, index) => {
    const { name, value } = event.target;
    const list = [...members];
    list[index]["id"] = memberResults[0]["_id"];
    list[index]["email"] = memberResults[0]["email"];
    console.log(list[index]);
    setMembers(list);
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
    var form = new FormData(document.querySelector('form'))
    let formData = {teamName: form.teamName, members: []};
    let member = {};
    for (const e of form) {
        console.log(e);
        switch (e[0]) {
            case "id":
                member.memberId = e[1];
		break;
            case "email":
                member.email = e[1];
		break;
	    case "teamName":
		formData.teamName = e[1];
	        break;
            default:
		continue;
        }
        if (Object.keys(member).length == 2) {
	    formData.members.push(member);
	    member = {};
        }
    }
    console.log(formData);
    axios
      .post(`${baseUrl}/team/create`, formData)
      .then(console.log);
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
                {members?.map((member, index) => (
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
                      onChange={(e) => searchUsers(e.target.value)}
                      placeholder="Member Name"
                      onBlur={(e) => SetFields(e, index)}
                      list="members"
                  className="addTeamInput"
                    />
		    <datalist id="members">
		    {memberResults?.map((m) => {return <option value={m.name} />})}
		    </datalist>
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
