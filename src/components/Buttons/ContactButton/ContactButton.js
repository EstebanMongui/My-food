import React from "react";
//Styles
import "./ContactButton.css";
//Icons
import Contact from "../../../icons/contact.svg"

class ContactButton extends React.Component{
    render(){
        const{
          Open,  
        }=this.props
        return(
            <button onClick={Open} className="ContactButton">
                <img src={Contact} alt=""/>
            </button>
        )
    }
}

export default ContactButton;