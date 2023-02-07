import { useState } from "react";
import styles from './Signin.module.css'
import axios from "axios";
import logo from "../../images/techFEST '23.webp";
import { localUrl } from "../../API/api";
import { Link, useNavigate } from "react-router-dom";
// import vectorLogo from "../../images/Vector-Logo.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorsMade, setErrorsMade] = useState();
  const [fieldErr, setFieldErr] = useState(null);
  const [mailErr, setMailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const navigate = useNavigate();

  const PostData = async (e) => {
    e.preventDefault();
    if (
      email.trim().length === 0 ||
      password.trim().length === 0
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
    // console.log(user);
    const user = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    // console.log(user);
    await axios
    .post(`${localUrl}/auth/signIn`, user)
    .then((result) => {
      const res = (result);
      alert(res.data.token)
      setIsLoading(false);
      if( res.status === 204) {
        setMailErr(res.data.message);
        setTimeout(() => {
          navigate("/signUp");
        }, 3000);
      } else if ( res.status === 208) {
        setPasswordErr(res.data.message);
        setTimeout(() => {
          setPasswordErr(null);
        }, 3000);
        return;
      } else if( res.status ===200 ) {
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          navigate('/');
        }, 1000)
      } else {
        setErrorsMade(res.data.message);
      }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(isLoading);
        throw new Error(err.data.message);
      });
  };


  return (
    <>
    {errorsMade && <p style={{ color: "red" }}>{errorsMade}</p>}
      <div className={styles.signin__content}>
        <div>
          <img src={logo} alt="techFest'23" className={styles.signin__logo} />
        </div>
        <div className={styles.signin__page}>
          <form
            method="post"
            onSubmit="return myFormValidation()"
            className={styles.signin__inputFields}
            action=""
          >
            <h1 className={styles.signin__title}>Welcome Back!</h1>
            <p className={styles.signin__text}>Sign in to continue</p>
            {fieldErr && <p style={{ color: "red" }}>
              {fieldErr}
            </p>}
              {password && <p style={{ color: "red" }}>{passwordErr}</p>}
            <label htmlFor="email" className={styles.signin__label}>
            {mailErr && <p style={{ color: "red" }}>{mailErr}</p>}
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
              autoFocus
            />
            <label htmlFor="password" className={styles.signin__label}>
              Password
            </label>
            <input
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <div className={styles.signin__div}>
            <button className={styles.signin__button} value="signIn" type="button" onClick={PostData} disabled={isLoading}>
              Sign In
            </button>
            <Link to="/forgotPassword">Forgot Password?</Link>
            </div>
            {/* </div> */}
          </form>
          <p className={styles.signin__text}>
            Don't have an account?
            <Link to={"/signUp"}>
              <span className={styles.signin__link}>
                 Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Signin;