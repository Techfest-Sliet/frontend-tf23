import "./Signin.css";
import logo from "../../images/techFEST '23.webp";
import {Link} from 'react-router-dom';

const signIn = () => {
  return (
	  <div className="signin__body">
    <div className="signin__content">
      <div className="signin__img-container">
        <img src={logo} alt="techFest'23" className="signin__logo signin__img" />
      </div>
      <div className="signin__page">
        <h1>Welcome back!</h1>
        <p className="signin__text">Sign in to continue</p>
        <div className="signin__input">
          <label for="name" className="signin__label">
            E-mail{" "}
          </label>
          <br />
          <input
	    className="signin__label"
            type="text"
            id="name"
            name="email"
            placeholder="Enter your email"
          />
          <br />
          <label for="password" className="signin__label">
            Password{" "}
          </label>
          <br />
          <input
            className="signin__label"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <br />
          <div className="signin__button">
            <button className="signin__button" type="submit">Sign In</button>
            <Link to="/auth/forgotPassword">Forgot Password?</Link>
          </div>
        </div>
        <p>
          Don't have an account? 
          <Link to="/auth/Signup" className="signup__link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
	  </div>
  );
}

export default signIn;
