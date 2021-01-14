import React from "react";
import "./Tag.css"

class Tag extends React.Component{
    render(){
        const{
            value="value",
            color
        }=this.props
        return(
            <div className="Tag">{value}</div>
        )
    }
}

export default Tag;