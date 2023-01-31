import { useState } from "react";
import styles from './Signin.module.css'
import axios from "axios";
import logo from "../../images/techFEST '23.webp";
import { localUrl } from "../../API/api";
import ErrorModel from "../UI/ErrorModel/ErrorModel";
import { Link, useNavigate } from "react-router-dom";
// import vectorLogo from "../../images/Vector-Logo.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorsMade, setErrorsMade] = useState();
  const navigate = useNavigate();

  const PostData = async (e) => {
    e.preventDefault();
    // console.log(user);
    const user = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    console.log(user);
    await axios
    .post(`${localUrl}/auth/signIn`, user)
    .then((result) => {
      setIsLoading(false);
      if ( result.status !== 200 ||
        (result.status !== 201 && result.data.isError) ) {
          setErrorsMade({
            title: result.data.title,
            message: result.data.message,
          });
          setTimeout(() => {
            navigate("/signIn");
          }, 3000);
          return;
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
            <label htmlFor="email" className={styles.signin__label}>
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

            <button className={styles.signin__button} value="signIn" type="button" onClick={PostData} disabled={isLoading}>
              Sign In
            </button>
            {/* </div> */}
          </form>
          <p className={styles.signin__text}>
            Already have an account?{" "}
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