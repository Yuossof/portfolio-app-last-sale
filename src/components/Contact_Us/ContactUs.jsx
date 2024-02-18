import React from "react";
import "./contactus.css";
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from "@mui/icons-material/Email";


import Lottie from "lottie-react";
import animationEmail from '../../../public/animation/contactUsAnimat.json'

const ContactUs = () => {
  return (
<div > 
  <div style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
        <div className="contactUs"  id="cn">
          <div className="title-of-contactus">
            <h1>
              <span>
                <EmailIcon />
              </span>
              <span>Contact Us</span>
            </h1>
            <p>
              
              Contact us for more information and Get notified when I publish
              something<br /> new.
            </p>
          </div>
    
          <div className="forms">
            <form className="form-email">
              <div className="email-address">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" placeholder="Email Adress" />
              </div>
    
              <div className="message-sec">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
    
              <button className="SendBtn" onClick={(eo)=>{
                eo.preventDefault()
              }}>
                <span>Send</span>
                <span><SendIcon /></span>
              </button>
    
            </form>
            <div  className="animation-forms"><Lottie loop={true} animationData={animationEmail}/></div>
          </div>
        </div>
  </div>
</div>
  );
};

export default ContactUs;
