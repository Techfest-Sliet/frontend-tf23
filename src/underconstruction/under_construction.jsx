import "./under_construction.css";
import logo from "../images/techFEST23.webp";
export default function underconstruction() {
  return (
    <>
      <div>
        <img src={logo} alt="techFestSLIET'23 logo" className="underconstruction__bg" />
      </div>
      <div className="underconstruction_body">
        <div className="underconstruction__content">
          <div className="underconstruction__text">
            <span>Sorry, this page is </span>
            <h1 className="underconstruction__title">Under Construction !</h1>
            <div>Please come back  later</div>
          </div>
          <button className="underconstruction__button">Home</button>
        </div>
      </div>
    </>
  );
}
