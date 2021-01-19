import React from "react";

//Styles
import "./FoodCards.css";
//Components
import Tag from "./components/Tag.js"

class FoodCards extends React.Component{
    render(){
        return(
            <div className="FoodCards__Container">
                {this.props.cardInformation.map(card => {
                    return(
                        <div key={card.id} className="FoodCards">
                            <div className="FoodCards__Description">
                                <div className="Tags">
                                    <Tag value={"$" + card.Price}/>
                                </div>
                                <h3>{card.ProductName}</h3>
                                <div className="Description">
                                    <h4>{card.Description}</h4>
                                </div>
                            </div>
                            <figure className="FoodCards__Product">
                                <img src={card.ImageUrl} alt=""/>
                            </figure>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default FoodCards;