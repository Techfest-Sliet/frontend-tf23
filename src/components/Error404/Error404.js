import "./Error404.css";
import logo from "../../images/techFEST '23.webp";

const error404 = () => {
  return (
    <>
      <div>
        <img src={logo} alt="techFestSLIET'23 logo"  className="error404__bg"/>
      </div>
      <div className="error404__content">
        <h1 className="error404__title">Error 404!</h1>
        <div className="error404__text">
          <span>Oops! Lost your way?</span>
          <br />
          Sorry, we can't find the page you are looking for.
        </div>
        <button className="error404__button">Home</button>
      </div>
    </>
  );
}

export default error404;