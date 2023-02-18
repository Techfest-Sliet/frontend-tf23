import "./reset_password.css";
import logo from "../images/techFEST23.webp";

export default function resetPassword() {
  return (
    <div className="resetpasswordbody">
        <div>
        <img src={logo} alt="techFestSLIET'23 logo" className="resetPassword__bg"/>
      </div>
      <div className="resetPassword__content">
        <h1 className="resetPassword__title">Reset your Password !</h1>
        <div className="resetPassword__input">
            <input type='text' placeholder="New Password" />
            <br />
            <input type='text' placeholder="Confirm New Password" />
        </div>
        <button className="resetPassword__button">Reset</button>
      </div>
    </div>
  );
}