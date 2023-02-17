import { Email } from '@mui/icons-material'
import React from 'react'
import './feedback.css'

const Feedback = () => {
  return (
   
<div className='container'>
     <div className='feedbacktfimage'>
     
     <form className='feedbackform'>
     <p className='feedbackp'>Write Us!</p>
      <input placeholder='Enter Your Name'  className='feedbackinput1'></input>
      <input type={Email} placeholder='Enter Your E-mail Address'  className='feedbackinput2'></input>
      <br></br>
      <input placeholder='Enter Your Phone Number'  className='feedbackinput3'></input>
      <br></br>
      <textarea className='feedbacktextarea' rows="10" cols="65">Submit your feedback.</textarea>
      <br></br>
      <div className='feedbacksubmitbtn'>Submit</div>
    </form>

     </div>
    </div>
  )
}

export default Feedback
