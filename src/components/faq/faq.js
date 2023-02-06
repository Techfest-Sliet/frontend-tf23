import React, { useState } from 'react'
import './faq.css';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import dummy from '../dummy.jpg'
import contactUsImage from '../contact_us_img.webp'

const ContactUs = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i);
    };

    return (
        <>
            <div className='wholePage'>
                <div className='background-of-contactUsPage'>

                    <div style={{ position: "relative" }}>
                        <h1 className='faqs'>Frequently Asked Questions </h1>
                    </div>


                    <div className='faqs_container'>
                        <div className='accordion'>
                            {data.map((item) => (

                                <div className='rowOfAccordion' key={item.id} onClick={() => toggle(item.id)}>
                                    <div className='questionOfAccordion'>
                                        {/* What does TechFest23 has to offer you? */}

                                        {item.question}
                                        {selected === item.id ? <FaAngleUp className="arrowDown" /> : <FaAngleDown className="arrowDown" />}

                                    </div>
                                    <div className={selected === item.id ? 'answerOfAccordion show' : "answerOfAccordion"}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>

                    <div className='faqs_container'>
                        <div>
                            <h1 className='Dial_In'>Don't Think Twice, Simply Dial In </h1>

                            <div className='faqs_coordinators'>

                                <div className='responsive_div'>
                                    <div className='faqs_domain_coordinator'>
                                        <img src={dummy} className="dummy_img" alt='...' />
                                        <p>Sudhanshu Kumar </p>
                                        <a className='faqs_number' href="tel:7488078452">
                                            7488078452
                                        </a>
                                    </div>
                                    <div className='faqs_domain_coordinator'>
                                        <img src={dummy} className="dummy_img" alt='...' />
                                        <p>Prasant Shahi</p>
                                        <a className='faqs_number' href="tel:8877515552">
                                        8877515552
                                        </a>
                                    </div>
                                </div>

                                <div className='responsive_div'>
                                    <div className='faqs_domain_coordinator'>
                                        <img src={dummy} className="dummy_img" alt='...' />
                                        <p>Aniket Mihir </p>
                                        <a className='faqs_number' href="tel:8873013224">
                                        8873013224
                                        </a>
                                    </div>
                                    {/* <div className='faqs_domain_coordinator'>
                                        <img src={dummy} className="dummy_img" alt='...' />
                                        <p>Lavanya</p>
                                        <a className='faqs_number' href="tel:9878990772">
                                        9878990772
                                        </a>
                                    </div> */}
                                </div>
                            </div>


                            <p className='faqs_support'>or write us at  <a href="/contactUs" style={{ textDecoration: "none", color: "DodgerBlue" }}>support@techfestsliet.com</a></p>
                            <p className='faqs_footer'> Stay Updated Here !</p>

                        </div>
                    </div>

                </div>
                <div className='imgDiv'>
                    <img src={contactUsImage} className="contactUsImg" alt='...' />
                </div>

            </div>
        </>
    )

}

const data = [
    {
        id: 1,
        question: "How to register on the website?",
        answer: (<span>You can enter your details and sign up at <a href='https://www.techfestsliet.org/' style={{ textDecoration: "none", color: "DodgerBlue" }}> https://www.techfestsliet.org/</a></span>)

    },
    {
        id: 2,
        question: "When is techFEST'23?",
        answer: "The techfest is scheduled to be held on 17th-18th March."
    },
    {
        id: 3,
        question: "Do I need to pay any fee for registration?",
        answer: (<span>There is no registration fee for candidates enrolled in SLIET. For participants from other institutes the registration fee is: <li>Rs 299 for online events</li> <li>Rs 599 for offline events</li> </span>)
    },
    {
        id: 4,
        question: "How many teams can I be a part of for an event?",
        answer: "For a given event, a participant can be a part of only one team."
    },
    {
        id: 5,
        question: "Can I participate in multiple events?",
        answer: "Yes, you are encouraged to participate in as many events as you like. Also there are no departmental constraints i.e. students of a department can participate in of the other domains. "
    },
    {
        id: 6,
        question: "What is the registration process?",
        answer: "All members have to register themselves on the website. The team leader will then for a team and add the remaining members. "
    },
    {
        id: 7,
        question: "Can students of institutes other than SLIET participate in the events?",
        answer: "Yes, students enrolled in diploma and degree programs in any technical institute can participate."
    }
]

export default ContactUs;
