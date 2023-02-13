import {Link} from 'react-router-dom';

export const datasOfEvent = [
    {
        nameOfEvent: "Hydraload",
        desc: "Issue with mass manufacturing operations or steering of cars? Well, A Hydraulic Arm can resolve this. This task requires you to design a Hydraulic Arm capable of performing various operations. Participate in our event and win handsome cash prizes.",
        register: (<span><Link to={"/underConstruction"} rel='noopener noreferrer' href='https://www.google.com/' style={{ textDecoration: "none", color: "white" }}>Register Now</Link></span>),
        schedule: (<span><a rel='noopener noreferrer' target='_blank' href='https://drive.google.com/file/d/1GeaQlOScA43g1NpPQQsRLTN0U6SlfjFr/view?usp=share_link' style={{ textDecoration: "none", color: "white" }}>Problem Statement</a></span>),
        prizeMoney: "₹ 14,000",
        dateBefore: "11/03",
        coor: [{
        img: require('../../dummy.jpg'),
        nameOfEventCoordinator: "Kishan Kashyap",
        phoneNo: (<span><a href="tel:9473064576" style={{ textDecoration: "none", color: "white" }}> 9473064576 </a></span>),
        mail: (<span><a href='mailto:kishan551kashyap@gmail.com' style={{ textDecoration: "none", color: "white" }}> kishan551kashyap@gmail.com
        </a></span>)}]
    },
    {
        nameOfEvent: "Trussload",
        desc: "Less Input, More output is what defines Smart Work. Isn't it? Then why not design a bridge that follows the same principle. Participate in our event to avail worthy cash prizes.",
        register: (<span><Link to={"/underConstruction"} rel='noopener noreferrer' href='https://www.wikipedia.com/' style={{ textDecoration: "none", color: "white" }}>Register Now</Link></span>),
        schedule: (<span><a rel='noopener noreferrer' target='_blank' href='https://drive.google.com/file/d/1XoAEhkNAr5ZfANSlbJj-rGf5tCcHQWxK/view?usp=sharing' style={{ textDecoration: "none", color: "white" }}>Problem Statement</a></span>),
        prizeMoney: "₹ 14,000",
        dateBefore: "15/03",
        coor: [{
        img: require('../../dummy.jpg'),
        nameOfEventCoordinator: "Utkarsh Kumar Mishra",
        phoneNo: (<span><a href="tel:9315533675" style={{ textDecoration: "none", color: "white" }}> 9315533675 </a></span>),
        mail: (<span><a href='mailto:2236024@sliet.ac.in' style={{ textDecoration: "none", color: "white" }}> 2236024@sliet.ac.in
        </a></span>)}]
    },
    {
        nameOfEvent: "Fabriquer",
        desc: "The best way to test your knowledge is to implement it practically. Drill through your brains and weld your knowledge. This event demands from you to fabricate a machine making use of your workshop knowledge. Participate in our event and win worthy cash prizes.",
        register: (<span><Link to={"/underConstruction"} rel='noopener noreferrer' href='https://www.google.com/' style={{ textDecoration: "none", color: "white" }}>Register Now</Link></span>),
        schedule: (<span><a  rel='noopener noreferrer' target='_blank' href='https://drive.google.com/file/d/1E9BgX9IdhxCHiDvBfXUjQ9__5v1hq9a6/view?usp=sharing' style={{ textDecoration: "none", color: "white" }}>Problem Statement</a></span>),
        prizeMoney: "₹ 8,000",
        dateBefore: "1/03",
        coor: [{
        img: require('../../dummy.jpg'),
        nameOfEventCoordinator: "Sazid Ahmad",
        phoneNo: (<span><a href="tel:7979766525" style={{ textDecoration: "none", color: "white" }}> 7979766525 </a></span>),
        mail: (<span><a href='mailto:sazidahmadsliet@gmail.com' style={{ textDecoration: "none", color: "white" }}> sazidahmadsliet@gmail.com
        </a></span>)}]
    },
    {
        nameOfEvent: "Designare",
        desc: "A picture is worthy a thousand words. And so does the design. A efficient design of any system requires analytical thinking and a CAD provides a wholesome idea of it. Participate in our event Designare and win worthy cash prizes.",
        register: (<span><Link to={"/underConstruction"} rel='noopener noreferrer' href='https://www.google.com/' style={{ textDecoration: "none", color: "white" }}>Register Now</Link></span>),
        schedule: (<span><a rel='noopener noreferrer' target='_blank' href='https://drive.google.com/file/d/1I11xKR8hZ_TtgRxdjRyjoWrtcwLksM0j/view?usp=sharing' style={{ textDecoration: "none", color: "white" }}>Problem Statement</a></span>),
        prizeMoney: "₹ 9,000",
        dateBefore: "1/03",
        coor: [{
        img: require('../../dummy.jpg'),
        nameOfEventCoordinator: "Ram kumar",
        phoneNo: (<span><a href="tel:6203884073 " style={{ textDecoration: "none", color: "white" }}> 6203884073  </a></span>),
        mail: (<span><a href='mailto:2040367@sliet.ac.in' style={{ textDecoration: "none", color: "white" }}> 2040367@sliet.ac.in
        </a></span>)}]
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
                nameOfDomainCoordinator: "Shahab Mahfooz",
                phoneNoOfDomainCoordinator: (<span><a href="tel:9536043431" style={{ textDecoration: "none", color: "white" }}> 9536043431 </a></span>),
                mailOfDomainCoordinator: (<span><a href='mailto: 2130311@sliet.ac.in' > 2130311@sliet.ac.in</a></span>)
            }
        ]
    }
]