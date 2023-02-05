import "./forgot_passwor.css";
import logo from "../images/techFEST23.webp";
import reset from "../images/reset.png";

export default function forgotPassword() {
  return (
    <div className="forgotpassword_body">
      {/* <div className="forgotPassword__bg" ></div> */}
      <img src={logo} alt="" className="forgotPassword__bg" />
      <div className="forgotPassword__content">
        <img
          src={reset}
          alt="reset png"
          className="forgotPassword__reset-img"
        />
        <h1 className="forgotPassword__title">Forgot Password?</h1>
        <p className="forgotPassword__text">
          No worries ! it happens, enter your E-mail and we’ll send you a reset
          link.
        </p>
        <input
          placeholder="Enter your mail!"
          className="forgotPassword__input"
          type="text"
        />
        <button type="submit" className="forgotPassword__button">
          Send Request
        </button>
      </div>
    </div>
  );
}
