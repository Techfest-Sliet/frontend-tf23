import React from "react";
import "./user_dashbord.css";

function user_dasbord() {
  return (
    <div className="Dashboard__body">
      <div className="row_justify-content-around">
        <div className="userdashbord_body">
          <h2>Namaste! username</h2>
          <p className="blockquote-footer">Your Unique tF ID is 0000</p>
        </div>
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
              <table className="table_text-light">
                <tbody>
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
                </tbody>
              </table>
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
              <table className="table_text-light">
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card-bodymid">
          <div className="dashboard_profile_container">
            <table className="profiletable">
              <tr>
                <td>
                  <h3 className="personal ">Personal Information</h3>
                </td>
                <td>
                  <img
                    className="editlogo"
                    src="https://img.icons8.com/external-others-inmotus-design/1x/external-Edit-virtual-keyboard-others-inmotus-design-3.png"
                    alt=""
                  />
                </td>
              </tr>
              <tr className="TableRow">
                <td>Profession</td>
                <td className="TableRow__res ">Student</td>
              </tr>
              <tr className="TableRow">
                <td>Organisation/College Name</td>

                <td className="TableRow__res">SLIET</td>
              </tr>
              <tr className="TableRow ">
                <td>Course</td>
                <td className="TableRow__res">B.E. (Computer Engineering)</td>
              </tr>

              <tr className="TableRow"></tr>
              <tr className="TableRow ">
                <td>Year Of Study</td>
                <td className="TableRow__res">3</td>
              </tr>
              <tr className="TableRow  ">
                <td>Date of Birth</td>

                <td className="TableRow__res">DD/MM/YYYY</td>
              </tr>
            

            {/* <!-------------------Contact Information-------------> */}
          
              <tr className="TableRow">
                <td className="" colspan="2">
                  <b>Contact Information</b>
                </td>
              </tr>
              <tr className="TableRow">
                <td className="">E-mail </td>
                <td className="TableRow__res">jha.s**@gmail.com</td>
              </tr>
              <tr className="TableRow">
                <td>Phone Number</td>
                <td className="TableRow__res">9350XXXXXX</td>
              </tr>
              <tr className="TableRow">
                <td>Whatsapp Number</td>
                <td className="TableRow__res">9350XXXXXX</td>
              </tr>
              <tr className="TableRow">
                <td>Telegram Number</td>
                <td className="TableRow__res">9350XXXXXX</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div className="flex_bottombox">
            <div className="card-bodybottom">
              <h3 className="CertificatesRewards">Certificates & Rewards</h3>

              <div className="certificate_colleps">
                <table className="table_text-light">
                  <tbody>
                    <tr>
                      <td>
                        <b className="card-title text-light text-center">
                          Events Certificates
                        </b>
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

              <div className="bottomboxcollaps">
                <table className="table_text-light">
                  <tbody>
                    <tr>
                      <td>
                        <b className="card-title text-light text-center">
                          Workshop Certificates
                        </b>
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
                    <tr >
                      <td >Name of Worshop</td>
                      <td >Date</td>
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
        </div>
      </div>
    </div>
  );
}

export default user_dasbord;
