import React from "react";

import "./DetailImageCard.css"

class DetailImageCard extends React.Component{
    render(){
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