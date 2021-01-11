import React from "react"
import "./Button1.css"
class Button1 extends React.Component{
    render(){
        const{
            buttonText="Search"
        }=this.props
        return(
            <div className="Button1">
                {buttonText}
            </div>
        )
    }
}

export default Button1;