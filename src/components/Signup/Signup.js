import { useState } from "react";
import "./Signup.css";
import axios from "axios";
import logo from "../../images/techFEST '23.webp";
import { Link } from "react-router-dom";
// import vectorLogo from "../../images/Vector-Logo.png";

const Signup = () => {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   cpassword: "",
  //   phoneNumber: "",
  //   course: "",
  // });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("0");
  const [confirm_err, setConfirmErr] = useState(null);

  // const handleInputs = async(e) => {
  //   console.log(e.target.name);
  //   name = e.target.name;
  //   value = e.target.value;
  //  const res= await setUser({ ...user, [name]: value });
  //   console.log("res",user);
  // };
  const handleConfirm = (value) => {
    setCPassword(value);
    if (!(value === password)) {
      setConfirmErr("Password should match");
    } else {
      setConfirmErr(null);
      return true;
    }
    return false;
  };
  const PostData = async (e) => {
    e.preventDefault();
    // console.log(user);
    const user = {
      name: name,
      email: email,
      password: password,
      phone: Number(phone),
      course: course,
    };
    console.log(user);
    return axios
      .post(`http://localhost:4000/auth/signUp`, user)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.data.message);
      });
    // const res = await fetch("http://localhost:4000/auth/signUp", {
    //   method: "POST",
    //   mode: "no-cors",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json ",
    //   },
    // body: JSON.stringify(user),
    // });

    // const data = res.json();
    // console.log(data);
    // if (data.status === 208 || !data) {
    //   window.alert("Invalid Registration");
    // } else {
    //   window.alert("Registration Succesfull");
    // }
  };
  return (
    <>
      {/* <img
        src={vectorLogo}
        alt="Vector Pattern"
        className="signup__vectorPattern"
      /> */}

      <div className="signup__content">
        <div className="signup__img-container">
          <img src={logo} alt="techFest'23" className="signup__logo" />
        </div>
        <div className="signup__page">
          <form
            method="post"
            onSubmit={PostData}
            className="signup__inputFields"
          >
            <h1 className="signup__title">Welcome!</h1>
            {/* <div className="signup__front"> */}
            <label htmlFor="name" className="signup__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email" className="signup__label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password" className="signup__label">
              Password
            </label>
            <input
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />

            <label htmlFor="cpassword" className="signup__label">
              Confirm Password
            </label>
            <input
              value={cPassword}
              placeholder="Please Confirm your password"
              variant="standard"
              onChange={(e) => handleConfirm(e.target.value)}
              type="password"
            />
            <p style={{ color: "red" }}>{confirm_err}</p>
            {/* <input
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm your password"
              value={cPassword}
              onChange={handleConfirm}
              required
            /> */}
            {/* <div className="signup__flip">Next</div> */}
            {/* </div> */}
            {/* <div className="signup__back"> */}
            <label htmlFor="phoneNumber" className="signup__label">
              Phone
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <select
              className="signup__select"
              onChange={(e) => setCourse(e.target.value)}
              id="course"
              name="course"
              value={course}
              required
            >
              <option value="0">Course Enrolled</option>
              <option value="Aeronautical Engineering">
                Aeronautical Engineering
              </option>
              <option value="Aerospace Engineering">
                Aerospace Engineering
              </option>
              <option value="Automobile Engineering">
                Automobile Engineering
              </option>
              <option value="Biomedical Engineering">
                Biomedical Engineering
              </option>
              <option value="Biotechnology Engineering">
                Biotechnology Engineering
              </option>
              <option value="Ceramic Engineering">Ceramic Engineering</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Communications Engineering">
                Communications Engineering
              </option>
              <option value="Computer Science Engineering">
                Computer Science Engineering
              </option>
              <option value="Construction Engineering">
                Construction Engineering
              </option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Electronics & Communication Engineering">
                Electronics & Communication Engineering
              </option>
              <option value="Electronics Engineering">
                Electronics Engineering
              </option>
              <option value="Environmental Engineering">
                Environmental Engineering
              </option>
              <option value="Industrial Engineering">
                Industrial Engineering
              </option>
              <option value="Marine Engineering">Marine Engineering</option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Mechatronics Engineering">
                Mechatronics Engineering
              </option>
              <option value="Metallurgical Engineering">
                Metallurgical Engineering
              </option>
              <option value="Mining Engineering">Mining Engineering</option>
              <option value="Petroleum Engineering">
                Petroleum Engineering
              </option>
              <option value="Power Engineering">Power Engineering</option>
              <option value="Production Engineering">
                Production Engineering
              </option>
              <option value="Robotics Engineering">Robotics Engineering</option>
              <option value="Structural Engineering">
                Structural Engineering
              </option>
              <option value="Telecommunication Engineering">
                Telecommunication Engineering
              </option>
              <option value="Textile Engineering">Textile Engineering</option>
              <option value="Tool Engineering">Tool Engineering</option>
              <option value="Transportation Engineering">
                Transportation Engineering
              </option>
            </select>
            <button className="signup__button" value="signUp" type="submit">
              Sign Up
            </button>
            {/* </div> */}
          </form>
          <p className="signup__text">
            Already have an account?{" "}
            <Link to={"/signIn"}>
              <span className="signin__link">
                <i>Sign In</i>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Signup;
