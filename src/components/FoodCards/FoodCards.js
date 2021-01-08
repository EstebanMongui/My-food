import React from "react";

//Styles
import "./FoodCards.css";
//Components
import Tag from "./components/Tag.js"

class FoodCards extends React.Component{
    render(){
        const{
            ProductName="ProductName",
            Description="Description",
            Price="$0.0"
        }=this.props
        return(
            <div className="FoodCards">
                <div className="FoodCards__Description">
                    <Tag />
                    <h3>{ProductName}</h3>
                    <h4>{Description}</h4>
                    <h5>{Price}</h5>
                </div>
                <figure className="FoodCards__Product"></figure>
            </div>
        )
    }
}

export default FoodCards;