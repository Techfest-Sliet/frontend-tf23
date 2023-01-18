import "./forgotPassword.css";
import logo from "../../images/techFEST '23.webp";
import reset from "../../images/reset.png";

const forgotPassword = () => {
  return (
    <div className="forgotPassword">
      <div>
        <img src={logo} alt="techFestSLIET'23 logo"  className="forgotPassword__bg"/>
      </div>
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
        ></input>
        <button type="submit" className="forgotPassword__button">
          Send Request
        </button>
      </div>
    </div>
  );
}

export default forgotPassword;