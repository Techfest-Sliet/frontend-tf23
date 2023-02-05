import "./error404.css";
import logo from "../images/techFEST23.webp";
export default function error404() {
  return (
    <>
      <div>
        <img src={logo} alt="techFestSLIET'23 logo" className="error404__bg" />
      </div>
      <div className="error_body">
        <div className="error404__content">
          <div className="error404__text">
            <h1 className="error404__title">Error 404</h1>
            <span>Oops! Lost your way?</span>
            <br />
            <div>Sorry, we can't find the page you are looking for.</div>
          </div>
          <button className="error404__button">Home</button>
        </div>
      </div>
    </>
  );
}
