import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../API/api";
import AuthContext from "../../auth/authContext";
import "./userDash.css";
import ErrorModel from "../ErrorPopup/ErrorModel";
import { Link, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import Loader from "../Loader/Loader";

const User_dasbord = () => {
  const authContext = useContext(AuthContext);
  const [errorMade, setErrorMade] = useState();
  const onErrorMadeHandle = () => {
    setErrorMade(null);
  };
  const [user, setUser] = useState(null);
  function HandlePay() {
    console.log(authContext);
    console.log(user);
    setErrorMade({ title: "Coming Soon", message: "Coming Soon" });
  }
  const navigate = useNavigate();
  const Razorpay = useRazorpay();
  function InitiateUserPayment() {
    axios
      .post(
        `${baseUrl}/payment/userPaymentLink`,
        { userId: user._id },
        {
          headers: { "content-type": "multipart/form-data" },
        }
      )
      .then((order) => {
        const options = {
          key: "rzp_test_Th21vVpHqDNa1v", // Enter the Key ID generated from the Dashboard
          currency: "INR",
          name: "techFEST SLIET",
          description: "Fee for registeration for techFEST",
          image: "https://www.techfestsliet.org/tf23.webp",
          order_id: order.data.orderId,
          handler: function (response) {
            console.log(response);
            axios
              .post(
                `${baseUrl}/payment/userPaymentVerify`,
                {
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  userId: user._id,
                },
                { headers: { "content-type": "multipart/form-data" } }
              )
              .then((resp) => console.log(resp));
          },
          prefill: {
            name: user.name,
            email: user.email,
            contact: user.phone,
          },
          //          notes: {
          //            address: "Razorpay Corporate Office",
          //          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });

        rzp1.open();
      });
  }
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    navigate("/updateuser");
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/user/getUserById`, {
        headers: {
          Authorization: "Bearer " + authContext.token,
        },
      })
      .then((result) => {
        setIsLoading(false);
        if (
          result.status !== 200 ||
          (result.status !== 201 && result.data.isError)
        ) {
          authContext.logout();
          return result.status(208).json({
            title: "Auth Error",
            message: "Wrong user auth!",
          });
        }
        setUser(result.data.user);
      })
      .catch((err) => {
        return err.status(208).json({
          title: "Auth Error",
          message: "Wrong user auth!",
        });
      });
  }, [authContext, authContext.login]);
  return (
    <>
      <div className="Dashboard__body">
        {isLoading && <Loader />}
        {errorMade && (
          <ErrorModel
            title={errorMade.title}
            message={errorMade.message}
            onErrorClick={onErrorMadeHandle}
          />
        )}
        <div className="row_justify-content-around" style={{ height: "100vh" }}>
          <div className="userdashbord_body">
            <div className="user__header">Namaste! {user && user.name}</div>
            <p className="blockquote-footer">
              {/* Your Unique tF ID is {user && user.userId} */}
            </p>
          </div>
          {
            <div className="flex_topbox">
              <div className="card-bodytop">
                <h3 className="card-title text-light text-center">
                  <img
                    className="idea"
                    src="https://img.icons8.com/fluency-systems-regular/48/000000/idea.png"
                    alt=""
                  />
                  Events Registered
                </h3>

                <div className="collapse1 p-4 mt-4 mb-2">
                  <div class="scrollbar" id="scrollbar-custom">
                    <table className="table_text-light">
                      <tbody>
                        <tr>
                          <td>{user && user.events}</td>
                          {/* <td>Date</td> */}
                        </tr>
                        {/*<tr>
                      <td>Name of Event</td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Event</td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Event</td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Event</td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Event</td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Event</td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Event</td>
                      <td>Date</td>
                    </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card-bodytop">
                <h3 className="card-title text-light text-center">
                  <img
                    className="maintenance"
                    src="https://img.icons8.com/ios/50/000000/maintenance.png"
                    alt=""
                  />
                  Workshops Registered
                </h3>
                <div className="collapse1 p-4 mt-4 mb-2">
                  <div class="scrollbar" id="scrollbar-custom">
                    <table className="table_text-light">
                      <tbody>
                        {/* <tr>
                      <td>Name of Worshop</td>
                      <td></td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Worshop</td>
                      <td></td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Worshop</td>
                      <td></td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Worshop</td>
                      <td></td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Worshop</td>
                      <td></td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Worshop</td>
                      <td></td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Worshop</td>
                      <td></td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Name of Worshop</td>
                      <td></td>
                      <td>Date</td>
                    </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          }

          <div className="card-payment">
            <div className="card-heading">
              <h1>Pay for event mode</h1>
            </div>
            <div className="card-details">
              <p>For online mode: 299</p>
              <p>For offline mode: 599</p>
            </div>
            <div className="card-paybtn">
              {user && user.isPaid ? (
                "Paid"
              ) : (
                <button
                  type="button"
                  // onClick={InitiateUserPayment}
                  value="Pay"
                  className="userDash__button"
                  onClick={HandlePay}
                >
                  Online Mode
                </button>
              )}
              {user && user.isPaid ? (
                "Paid"
              ) : (
                <button
                  type="button"
                  // onClick={InitiateUserPayment}
                  value="Pay"
                  className="userDash__button"
                  onClick={HandlePay}
                >
                  Offline Mode
                </button>
              )}
            </div>
          </div>

          <div className="card-bodymid">
            <div className="dashboard_profile_container">
              <table className="profiletable">
                <tr>
                  {/* <td>
                  <div className="personal ">Personal Information</div>
                </td> */}
                  <td colspan="2">
                    <b>Personal Information</b>
                  </td>
                </tr>
                <tr className="TableRow">
                  <td>Name</td>
                  <td className="TableRow__res ">{user && user.name}</td>
                </tr>
                <tr className="TableRow">
                  <td>College Name</td>

                  <td className="TableRow__res">{user && user.collegeName}</td>
                </tr>
                <tr className="TableRow ">
                  <td>Branch</td>
                  <td className="TableRow__res">{user && user.branch}</td>
                </tr>

                <tr className="TableRow"></tr>
                {/* <tr className="TableRow ">
                <td>Year Of Study</td>
                <td className="TableRow__res">3</td>
              </tr> */}
                <tr className="TableRow  ">
                  <td>Date of Birth</td>

                  <td className="TableRow__res">
                    {user && user.dob.slice(0, 10)}
                  </td>
                </tr>

                {/* <!-------------------Contact Information-------------> */}

                <tr className="TableRow">
                  <td className="" colspan="2">
                    <b className="contactInfo">Contact Information</b>
                  </td>
                </tr>
                <tr className="TableRow">
                  <td className="">E-mail</td>
                  <td className="TableRow__res">{user && user.email}</td>
                </tr>
                {/* <tr className="TableRow">
                <td>Phone Number</td>
                <td className="TableRow__res">{user && user.phone}</td>
              </tr> */}
                <tr className="TableRow">
                  <td>Whatsapp Number</td>
                  <td className="TableRow__res">{user && user.phone}</td>
                </tr>
                <tr className="TableRow">
                  <td>Payment Status</td>
                  <td className="TableRow__res">
                    {user && user.isPaid ? (
                      "Paid"
                    ) : (
                      <button
                        type="button"
                        // onClick={InitiateUserPayment}
                        value="Pay"
                        className="userDash__button"
                        onClick={HandlePay}
                      >
                        Pay
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Edit </div>
                  </td>

                  <td colspan="2">
                    <img
                      className="editlogo"
                      src="https://img.icons8.com/external-others-inmotus-design/1x/external-Edit-virtual-keyboard-others-inmotus-design-3.png"
                      alt=""
                      onClick={handleClick}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            {/* <div className="flex_bottombox">
            <div className="card-bodybottom">
              <h3 className="CertificatesRewards">Certificates & Rewards</h3>
              <div className="certificate_colleps">
                <div className="asdfghjkl">
                  <b className="card-title text-light text-center">
                    Events Certificates
                  </b>
                </div>
                <div class="scrollbar_certificate" id="scrollbar-custom">
                  <table className="table_text-light_event">
                    <tbody>
                      <tr className="workshoptablepad">
                        <td>Name of Event</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="workshoptablepad">
                        <td>Name of Event</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="workshoptablepad">
                        <td>Name of Event</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="workshoptablepad">
                        <td>Name of Event</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="workshoptablepad">
                        <td>Name of Event</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="workshoptablepad">
                        <td>Name of Event</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="workshoptablepad">
                        <td>Name of Event</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="workshoptablepad">
                        <td>Name of Event</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bottomboxcollaps">
                <div className="asdfghjkl">
                  <b className="card-title text-light text-center">
                    Workshop Certificates
                  </b>
                </div>
                <div class="scrollbar_certificate" id="scrollbar-custom">
                  <table className="table_text-light_workshop">
                    <tbody>
                      <tr>
                        <td>Name of Worshop</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Name of Worshop</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Name of Worshop</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Name of Worshop</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Name of Worshop</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Name of Worshop</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Name of Worshop</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Name of Worshop</td>
                        <td>Date</td>
                        <td>
                          <div data-tooltip="" class="button">
                            <div class="button-wrapper">
                              <div class="text">Download</div>
                              <span class="icon">
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  height="2em"
                                  width="2em"
                                  role="img"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default User_dasbord;
