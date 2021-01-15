import React from "react";

import "./DetailImageCard.css"

class DetailImageCard extends React.Component{
    render(){
        const{
            imageUrl
        }=this.props
        return(
            <div className="DetailImage__Container">
                {this.props.DetailImage.map(image => { 
                    return(
                        <figure key={image.id} className="DetailImageCard">
                            <img src={image.imageUrl} alt=""/>
                        </figure>
                    )
                    })}
            </div>
        )
    }
}

export default DetailImageCard;