import {Link} from 'react-router-dom';

export const datasOfEvent = [
    {
        nameOfEvent: "Hackathon",
        desc: "Let yourself dive in the world of Programming and seize the opportunity to win handsome cash prizes.",
        register: (<span><Link to={"/underConstruction"} rel='noopener noreferrer' href='https://www.google.com/' style={{ textDecoration: "none", color: "white" }}>Register Now</Link></span>),
        schedule: (<span><a rel='noopener noreferrer' target='_blank' href='https://drive.google.com/file/d/1BuWJZYlFQ6V6oiH2Vv4LcXTkzA7R0Bjl/view?usp=share_link' style={{ textDecoration: "none", color: "white" }}>Problem Statement</a></span>),
        prizeMoney: "₹ 20,000",
        dateBefore: "11/03",
        coor: [
            {
                img: require('../../dummy.jpg'),
                nameOfEventCoordinator: "Sagar Guney",
                phoneNo: (<span><a href="tel:8112622076" style={{ textDecoration: "none", color: "white" }}> 8112622076 </a></span>),
                mail: (<span><a href='mailto:2140104@sliet.ac.in' style={{ textDecoration: "none", color: "white" }}> 2140104@sliet.ac.in
                </a></span>)
            }
        ]
    },
    {
        nameOfEvent: "Kritrim",
        desc: "Having ideas for betterment in agriculture? Here's an opportunity for you. Present your innovations through working/non-working models and grab the chance to win fancy prizes.",
        register: (<span><Link to={"/underConstruction"} rel='noopener noreferrer' href='https://www.wikipedia.com/' style={{ textDecoration: "none", color: "white" }}>Register Now</Link></span>),
        schedule: (<span><a rel='noopener noreferrer' target='_blank' href='https://drive.google.com/file/d/1B8s2AdjVFEGn17lbR6GHHzkqZXSP-CGK/view?usp=share_link' style={{ textDecoration: "none", color: "white" }}>Problem Statement</a></span>),
        prizeMoney: "₹ 40,000",
        dateBefore: "15/03",
        coor: [
            {
                img: require('../../dummy.jpg'),
                nameOfEventCoordinator: "Saksham Gupta",
                phoneNo: (<span><a href="tel:6232686660" style={{ textDecoration: "none", color: "white" }}> 6232686660 </a></span>),
                mail: (<span><a href='mailto:2236082@sliet.ac.in' style={{ textDecoration: "none", color: "white" }}> 2236082@sliet.ac.in
                </a></span>)
            },
            {
                img: require('../../dummy.jpg'),
                nameOfEventCoordinator: "Pulkit Pushp",
                phoneNo: (<span><a href="tel:91287 69557" style={{ textDecoration: "none", color: "white" }}> 9128769557 </a></span>),
                mail: (<span><a href='mailto: 2130608@sliet.ac.in' style={{ textDecoration: "none", color: "white" }}> 2130608@sliet.ac.in
                </a></span>)
            },
        ]
    },
    {
        nameOfEvent: "Cod2tech",
        desc: "Pull out the tech savvy in you and present your revolutionary ideas. Participate in our event and win worth cash prizes",
        register: (<span><Link to={"/underConstruction"} rel='noopener noreferrer' href='https://www.google.com/' style={{ textDecoration: "none", color: "white" }}>Register Now</Link></span>),
        schedule: (<span><a  rel='noopener noreferrer' target='_blank' href='https://drive.google.com/file/d/1X9BppwFp-Ja6GqVK9Pdfzq4netUMA3OG/view?usp=sharing' style={{ textDecoration: "none", color: "white" }}>Problem Statement</a></span>),
        prizeMoney: "₹ 15,000",
        dateBefore: "11/03",
        coor: [
            {
                img: require('../../dummy.jpg'),
                nameOfEventCoordinator: "Ankit",
                phoneNo: (<span><a href="tel:7766866193" style={{ textDecoration: "none", color: "white" }}> 7766866193 </a></span>),
                mail: (<span><a href='mailto: 2236067@sliet.ac.in' style={{ textDecoration: "none", color: "white" }}> 2236067@sliet.ac.in
                </a></span>)
            }
        ]
    }
]

export const datasOfEventCoordinator = [
    {
        photoOfFaculty: require('../../dummy.jpg'),
        nameOfFaculty: "Name of Faculty",
        facultyAdvisor: "Faculty Advisor",
        domainCoordinator: [
            {
                photoOfdomainCoordinator: require('../../dummy.jpg'),
                nameOfDomainCoordinator: "Adarsh Kumar",
                phoneNoOfDomainCoordinator: (<span><a href="tel:9927588504" style={{ textDecoration: "none", color: "white" }}> 9927588504
                </a></span>),
                mailOfDomainCoordinator: (<span><a href='mailto: at37057@gmail.com' > at37057@gmail.com</a></span>)
            },
            {
                photoOfdomainCoordinator: require('../../dummy.jpg'),
                nameOfDomainCoordinator: " Aditee Pankaj",
                phoneNoOfDomainCoordinator: (<span><a href="tel:8968342101" style={{ textDecoration: "none", color: "white" }}> 8968342101 </a></span>),
                mailOfDomainCoordinator: (<span><a href='mailto: 2130555@sliet.ac.in' > 2130555@sliet.ac.in</a></span>)
            }
        ]
    }
]