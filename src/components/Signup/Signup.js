import { useState } from "react";
import styles from "./Signup.module.css";
import axios from "axios";
import logo from "../../images/techFEST '23.webp";
import { localUrl } from "../../API/api";
import { Link, useNavigate } from "react-router-dom";
// import vectorLogo from "Vector-Logo.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [course, setCourse] = useState("0");
  const [confirm_err, setConfirmErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorsMade, setErrorsMade] = useState(null);
  const [fieldErr, setFieldErr] = useState(null);
  const [mailErr, setMailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const navigate = useNavigate();

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
    if (
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      name.trim().length === 0
    ) {
      setFieldErr("Field should not be empty");
      setTimeout(() => {
        setFieldErr(null);
      },3000);
      return;
    }
    if (!email.trim().includes("@")) {
      setMailErr("Invalid mail!");
      setTimeout(() => {
        setMailErr(null);
      },3000);
      return;
    }

    // if (name.trim().length <= 3) {
    //   setErrors("Name should be 5 character long!");
    //   return;
    // }
    if (password.length < 5) {
      setPasswordErr("Atleast five characteres!");
      setTimeout(() => {
        setPasswordErr(null);
      },3000);
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
      // phone: Number(phone),
      // course: course,
    };
    setIsLoading(true);
    console.log(isLoading);
    console.log(user);
    await axios
      .post(`${localUrl}/auth/signUp`,user)
      .then((result) => {
        const res = result;
        setIsLoading(false);
        if (res.status === 200) {
          alert(
            "User Registered, Please check your inbox/spam for verification!"
          );
          setTimeout(() => {
            navigate("/signIn");
          }, 3000);
        } else if (res.status === 400 || res.status === 208) {
          setErrorsMade(res.data.message);

          setTimeout(() => {
            navigate("/signUp");
            setTimeout(() => {
              setErrorsMade(null);
            },3000);
          }, 3000);
        } 
        
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        return;
      });
  };

  // const onErrorsMadeHandle = () => {
  //   setErrorsMade(null);
  // };

  return (
    <>
      {/* {errorsMade && (
        <ErrorModel
          title={errorsMade.title}
          message={errorsMade.message}
          onErrorsClick={onErrorsMadeHandle}
        />
      )} */}

      <div className={styles.signup__content}>
        <div>
          <img src={logo} alt="techFest'23" className={styles.signup__logo} />
        </div>
        <div className={styles.signup__page}>
          <form
            method="post"
            onSubmit="return myFormValidation()"
            className={styles.signup__inputFields}
            action=""
          >
            <h1 className={styles.signup__title}>Welcome!</h1>
            <p style={{ color: "red" }}>
              {fieldErr}
            </p>
            <label htmlFor="name" className={styles.signup__label}>
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
              autoFocus
            />
            <label htmlFor="email" className={styles.signup__label}>
              E-mail
            </label>
            <p style={{ color: "red" }}>{errorsMade}</p>
            <p style={{ color: "red" }}>{mailErr}</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password" className={styles.signup__label}>
              Password
            </label>
            <p style={{ color: "red" } }>{passwordErr}</p>
            <input
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <label htmlFor="cpassword" className={styles.signup__label}>
              Confirm Password
            </label>
            <p style={{ color: "red" }}>{confirm_err}</p>
            <input
              value={cPassword}
              placeholder="Confirm your password"
              variant="standard"
              onChange={(e) => handleConfirm(e.target.value)}
              type="password"
            />

            <button
              className={styles.signup__button}
              value="signUp"
              type="button"
              onClick={PostData}
              disabled={isLoading}
            >
              Sign Up
            </button>
            {/* </div> */}
          </form>
          <p className={styles.signup__text}>
            Already have an account?{" "}
            <Link to={"/signIn"}>
              <span className={styles.signin__link}>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Signup;

// <label htmlFor="phoneNumber" className={styles.signup__label}>
//               Phone
//             </label>
//             <input
//               id="phoneNumber"
//               name="phoneNumber"
//               placeholder="Enter your phone number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//             <select
//               className={styles.signup__select}
//               onChange={(e) => setCourse(e.target.value)}
//               id="course"
//               name="course"
//               value={course}
//               required
//             >
//               <option value="0">Course Enrolled</option>
//               <option value="Aeronautical Engineering">
//                 Aeronautical Engineering
//               </option>
//               <option value="Aerospace Engineering">
//                 Aerospace Engineering
//               </option>
//               <option value="Automobile Engineering">
//                 Automobile Engineering
//               </option>
//               <option value="Biomedical Engineering">
//                 Biomedical Engineering
//               </option>
//               <option value="Biotechnology Engineering">
//                 Biotechnology Engineering
//               </option>
//               <option value="Ceramic Engineering">Ceramic Engineering</option>
//               <option value="Chemical Engineering">Chemical Engineering</option>
//               <option value="Civil Engineering">Civil Engineering</option>
//               <option value="Communications Engineering">
//                 Communications Engineering
//               </option>
//               <option value="Computer Science Engineering">
//                 Computer Science Engineering
//               </option>
//               <option value="Construction Engineering">
//                 Construction Engineering
//               </option>
//               <option value="Electrical Engineering">
//                 Electrical Engineering
//               </option>
//               <option value="Electronics & Communication Engineering">
//                 Electronics & Communication Engineering
//               </option>
//               <option value="Electronics Engineering">
//                 Electronics Engineering
//               </option>
//               <option value="Environmental Engineering">
//                 Environmental Engineering
//               </option>
//               <option value="Industrial Engineering">
//                 Industrial Engineering
//               </option>
//               <option value="Marine Engineering">Marine Engineering</option>
//               <option value="Mechanical Engineering">
//                 Mechanical Engineering
//               </option>
//               <option value="Mechatronics Engineering">
//                 Mechatronics Engineering
//               </option>
//               <option value="Metallurgical Engineering">
//                 Metallurgical Engineering
//               </option>
//               <option value="Mining Engineering">Mining Engineering</option>
//               <option value="Petroleum Engineering">
//                 Petroleum Engineering
//               </option>
//               <option value="Power Engineering">Power Engineering</option>
//               <option value="Production Engineering">
//                 Production Engineering
//               </option>
//               <option value="Robotics Engineering">Robotics Engineering</option>
//               <option value="Structural Engineering">
//                 Structural Engineering
//               </option>
//               <option value="Telecommunication Engineering">
//                 Telecommunication Engineering
//               </option>
//               <option value="Textile Engineering">Textile Engineering</option>
//               <option value="Tool Engineering">Tool Engineering</option>
//               <option value="Transportation Engineering">
//                 Transportation Engineering
//               </option>
//             </select>
