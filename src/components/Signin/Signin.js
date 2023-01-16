import "./Signin.css";
import logo from "../../images/techFEST '23.webp";

export default function signUp() {
  return (
    <div className="signin__content">
      <div className="signin__img-container">
        <img src={logo} alt="techFest'23" className="signin__logo" />
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
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <br />
          <div className="signin__button">
            <button type="submit">Sign In</button>
            <a href="/auth/forgotPassword">Forgot Password?</a>
          </div>
        </div>
        <p>
          Don't have an account? 
          <a href="/auth/Signup" className="signup__link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
