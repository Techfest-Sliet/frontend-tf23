// import { Link } from "react-router-dom";

export const datasOfEvent = [
  {
    nameOfEvent: "Coding स्पर्धा",
    desc: "   “Codingस्पर्धा - Code and Conquer” is a hackathon organised by InternWell Club in collaboration with SLIET Software Development Club (SSDC) and TechFEST'23 for the students of Diploma, Undergraduate to Postgraduate level of Sant Longowal Institute of Engineering and Technology in the field of computer science on the college premise. This hackathon will provide an excellent opportunity for students to showcase their skills and compete with their peers in a friendly and supportive environment. It helps to build a sense of community among the students and foster their professional development.",
    register: (
      <span>
        <a
        //   to={"/underConstruction"}
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://linktr.ee/internwellclubsliet"
          style={{ textDecoration: "none", color: "white" }}
        >
          Register Now
        </a>
      </span>
    ),
    schedule: (
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1ThCLD273xzttO8TFBeqykNmZEE7Hk6DA/view?usp=drivesdk"
          style={{ textDecoration: "none", color: "white" }}
        >
          Problem Statement
        </a>
      </span>
    ),
    prizeMoney: "₹ 5,000",
    eventMode: "hybrid",
    dateBefore: "25/02",
    coor: [
      {
        img: require("../../dummy.jpg"),
        nameOfEventCoordinator: "Siddharth",
        phoneNo: (
          <span>
            <a
              href="tel:7007515466"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              7007515466{" "}
            </a>
          </span>
        ),
        mail: (
          <span>
            <a
              href="mailto:2040202@sliet.ac.in"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              2040202@sliet.ac.in
            </a>
          </span>
        ),
      },
    ],
  },
];

export const datasOfEventCoordinator = [
  {
    photoOfFaculty: require('../../dummy.jpg'),
    nameOfFaculty: "Faculty",
    facultyAdvisor: "Faculty Advisor",
    domainCoordinator: [
        {
            photoOfdomainCoordinator: require('../../dummy.jpg'),
            nameOfDomainCoordinator: "Tanu Shakya",
            phoneNoOfDomainCoordinator: (<a href="tel:8859892385" style={{ textDecoration: "none", color: "white", fontFamily: "productSans" }}> 8859892385 </a>),
            mailOfDomainCoordinator: (<a href='mailto: 2040007@sliet.ac.in' style={{fontFamily: "productSans" }}> 2040007@sliet.ac.in</a>)
        },
        {
            photoOfdomainCoordinator: require('../../dummy.jpg'),
            nameOfDomainCoordinator: "Shubham",
            phoneNoOfDomainCoordinator: (<a href="tel:7632954311" style={{ textDecoration: "none", color: "white", fontFamily: "productSans" }}> 7632954311 </a>),
            mailOfDomainCoordinator: (<a href='mailto: 2130420@sliet.ac.in' style={{fontFamily: "productSans" }}> 2130420@sliet.ac.in</a>)
        }
    ]
}
];