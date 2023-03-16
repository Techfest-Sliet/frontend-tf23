import React from "react";
import "./paymentPage.css";

const Transaction = () => {
  return (
    <div>
      {/* <h1>vsdv</h1> */}
      <div className="transactionwrapper">
      <div className="transaction-heading">Payment Details</div>
        <div className="transactioncontainer">

          <div className="transaction-data"> Account No : 5355598179</div>
          <div className="transaction-data"> IFSC Code : CBIN0283105</div>
          <div className="transaction-data"> Bank Holder Name : SANT LONGOWAL INSTITUTE OF ENGG AND TECHNOLOGY</div>
          <div className=" inputelements transaction-data transaction-ammount">
            <div className="transaction-data transaction-data-ammount">
              Ammount Paid :
            </div>
            <div>
              <input type="text" className="transaction-ammount-input"></input>
            </div>
          </div>

          <div className="inputelements transaction-data transaction-ammount">
            <div className="transaction-data transaction-data-ammount">
              Payment Screenshot :
            </div>
            <div>
              <input className="screenshot-input" type="file" />
            </div>
          </div>
          <div className="transaction-btn">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
