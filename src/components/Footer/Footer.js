import React from "react";
import "./Footer.css"
class Foother extends React.Component{
    render(){
        return(
            <figure className="Foother">
                <figcaption>
                    <div className="logo">
                        <span>My</span>Food
                    </div>
                    <div className="credits"><h3>Redisigned by <span>Esteban Monguí</span></h3></div>
                </figcaption>
                <img src="../../icons/foother.svg" alt=""/>
            </figure>
        )
    }
}

export default Foother;