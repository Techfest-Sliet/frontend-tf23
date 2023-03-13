import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Popover } from "@mui/material";
import { baseUrl } from "../API/api";
import Register from '../components/Team/Main_Page'
import '../components/Events/EventBox.css'
import { FaRegCalendar, FaRegClock, FaUnity } from "react-icons/fa";
import ErrorModel from "../components/ErrorPopup/ErrorModel";
import Razorpay from 'react-razorpay';
import AuthContext from "../auth/authContext";
import './WorkshopBox.css'

function WorkshopBox({ props, index }) {
    const [errorMade, setErrorMade] = useState();
    const authContext = useContext(AuthContext);
    const onErrorMadeHandle = () => {
        setErrorMade(null);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const [eventName, setEventName] = useState(null)
    const [user, setUser] = useState(null);
    const handleClick = (event) => {
        setEventName(event.target.value);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    function HandleRegister(e) {
        // alert(e.target.value)
        setErrorMade({ title: "Coming Soon", message: 'Coming Soon' });
        // if (authContext.isUserLoggedIn) {
        //   if (!user.isVerified) {
        //       		setErrorMade({ title: "Register Now", message: "Please verify your email" })
        //   } else if (!user.isPaid) {
        //       		setErrorMade({ title: "Register Now", message: "Please Pay your registeration fee" })
        //   } else {
        // 		InitiateUserPayment();
        //   }
        // } else {

        //       		setErrorMade({ title: "Register Now", message: "Please Login" })
    }

    function InitiateUserPayment() {
        console.log(props);
        axios.post(`${baseUrl}/payment/eventPaymentLink`, { userId: user._id }, {
            headers: { "content-type": "multipart/form-data" },
        }).then(
            (order) => {
                const options = {
                    key: "rzp_test_Th21vVpHqDNa1v", // Enter the Key ID generated from the Dashboard
                    currency: "INR",
                    name: "techFEST SLIET",
                    description: "Fee for registeration for techFEST",
                    image: "https://www.techfestsliet.org/tf23.webp",
                    order_id: order.data.orderId,
                    handler: function (response) {
                        console.log(response);
                        axios.post(`${baseUrl}/payment/userPaymentVerify`, {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            userId: user._id,
                            eventId: props?._id,
                        }, { headers: { "content-type": "multipart/form-data" } }).then((
                            resp,
                        ) => console.log(resp));
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
            },
        );
    }

    useEffect(() => {
        axios
            .get(`${baseUrl}/user/getUserById`, {
                headers: {
                    Authorization: "Bearer " + authContext.token,
                },
            })
            .then((result) => {
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
    const coor_len = (props?.coor).length;
    const onErrorHappen = () => {
        setErrorMade({ title: "Register Now", message: "Coming Soon" })
    }

    return (
        <>
            {errorMade &&
                <ErrorModel
                    title={errorMade.title}
                    message={errorMade.message}
                    onErrorClick={onErrorMadeHandle}
                />
            }
            <div className='eventBoxSingle' key={index}>
                <div className='LeftOfEventBox'>
                    <div className='evntDesc' style={{ float: "left" }}>

                        <h1 style={{ textAlign: "left" }}>{props?.nameOfEvent}</h1>
                        <p className='eventDesc'>{props?.desc}</p>
                        <div style={{ float: "left" }}>
                            <button className='registerNowEvent' onClick={HandleRegister} value={props.nameOfEvent}> Register Now </button>
                        </div>
                        <div style={{ float: "left" }}>
                            <h2 style={{ textAlign: "left" }}>Venue : {props?.venue} </h2>
                            <p style={{ fontSize: "14px", margin: "0.5rem 0" }}>
                                <FaUnity /> Event Mode : {props?.eventMode} </p>
                            <p style={{ fontSize: "14px", textAlign: "left" }}>
                                <FaRegCalendar /> Register Before {props?.dateBefore}<br></br>
                                <FaRegClock /> 11:59 P.M.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='RightOfEventBox'>
                    <div className='objOfEventBox'>

                        {
                            (coor_len === 1) ? (props?.coor)?.map((cor) => {
                                return <div className='boxImage'>
                                    <img src={cor.img} className='boxImgSingleWorkshop' alt='.' />
                                    <div className='event__coordinator'> <span> {cor.nameOfEventCoordinator} </span><br></br> <span> {cor.designation} </span></div>
                                </div>
                            }
                            ) :
                                (props?.coor)?.map((cor) => {
                                    return <div className='boxImage'>
                                        <img src={cor.img} className='boxImgDouble' alt='.' />
                                        <div className='event__coordinator'> <span> {cor.nameOfEventCoordinator} </span><br></br> <span> {cor.designation} </span></div>
                                    </div>
                                })
                        }

                    </div>
                </div>

            </div>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
            >
                <Register
                    eventName={eventName}
                    user={user}
                    eventMode={props.eventMode}
                />
            </Popover>
        </>

    )
}

export default WorkshopBox;
