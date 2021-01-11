import React from "react";

import "./DetailImageCard.css"

class DetailImageCard extends React.Component{
    render(){
        const{
            imageUrl
        }=this.props
        return(
            <figure className="DetailImageCard">
                <img src={imageUrl} alt=""/>
            </figure>
        )
    }
}

export default DetailImageCard;