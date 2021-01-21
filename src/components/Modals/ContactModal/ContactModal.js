import React from "react"
import ReactDOM from "react-dom";
//Styles
import "./ContactModal.css"
//Components
import Logo from "../../../icons/Logo/Logo.js"
function ContactModal(props){
    const info = {
        cellphone:"+37 552 35 70",
        email:"myfood@email.com",
        address:"Av 17 location 202",
        message:"Toda la información utilizada en este proyecto es ficticia, si quiere contactar con su realizador lo puede hacer enviando un correo a esteban.mongui@hotmail.com"
    }
    if (!props.isOpen){
        return null;
    };
    return ReactDOM.createPortal(
        <div className="ContactModal">
            <div className="ContactModal__Info">
                <button onClick={props.onClose} className="CloseModal">x</button>
                <div className="Info__Container">
                    <div className="Logo"><Logo /></div>
                    <div className="ContactData">
                        <h3>{info.cellphone}</h3> 
                        <h3>{info.email}</h3> 
                        <h3>{info.address}</h3>
                    </div>
                    <h4>{info.message}</h4>
                </div> 
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default ContactModal;