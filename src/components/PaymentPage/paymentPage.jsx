 import { display } from '@mui/system';
import React from 'react'
 import "./paymentPage.css"

  const paymentPage = () => {
   return (
<>

<div className='container'>
     <div className='feedbacktfimage'>
     
     <div className='feedbackform'>
     <h2 className='feedbackp'>Payment Details</h2>
     <div style={{display:"flex" , flexDirection:"column" }}>
       <h6  className='feedbackinput1' style={{marginTop:"20px"}}> Account No: 5355598179</h6>
       <h6  className='feedbackinput1'> IFSC Code : CBIN0283105</h6>
      <h6  className='feedbackinput1'>Account Holder Name : SANT LONGOWAL INSTITUTE OF ENGG AND TECHNOLOGY</h6>
     </div>

      <div className='paymentForm'>
      {/* <h6  className='feedbackinput1'>Account Holder Name : SANT LONGOWAL INSTITUTE OF ENGG AND TECHNOLOGY</h6> */}

      <div  style={{display:"flex"}}>
        <p  className='feedbackinput1 ' style={{ fontSize:'16px'}}> Amount:</p>
        <input  type=" text"  className='tl'></input>
      </div>
        <p  style={{ fontSize:'16px'}}> Payment ScreenShort:</p>
        <input  className='tf'  type="file" ></input>
    
       

      </div>

      <div className='feedbacksubmitbtn'>Submit</div>
    </div>

     </div>
    </div>
     
    </>
   )
 }
 
 export default paymentPage;
