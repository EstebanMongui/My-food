import React from "react";

//Styles
import "./Logo.css"

class Header extends React.Component{
    render(){
        return(
            <div className="Logo">
                <h3> <span>My</span>Food</h3>
            </div>
        )
    }
}

export default Header;