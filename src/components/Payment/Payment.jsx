import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="paymentwrapper">
      <div className="mainpayment">
        <div className="leftcard">
          <p className="cardcontent">Online ₹.349</p>
          <ul className="cardul">
            <li>size M</li>
            <li>colour black</li>
            <li>colour black</li>
            <li>colour black</li>
          </ul>

          <div className="paybtn paybtnleft">Pay</div>
        </div>
        <div className="rightcard">
          <p className="cardcontent">Ofline ₹.399</p>
          <ul className="cardul">
            <li>size M</li>
            <li>colour black</li>
            <li>colour black</li>
            <li>colour black</li>
          </ul>

          <div className="paybtn paybtnright">Pay</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
