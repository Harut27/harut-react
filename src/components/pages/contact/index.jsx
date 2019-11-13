import React from "react";
import imgContact from "../../../img/Contact-Us-PNG.png"


const Contact = ()=>{
    return(
        <div className="contact-page">
            <span>Mobile Number: +374-98-91-67-78</span>
            <span>Email Adress: Agayanharut1@gmail.com</span>
            <img src={imgContact}/>
        </div>
    )
}


export default Contact;