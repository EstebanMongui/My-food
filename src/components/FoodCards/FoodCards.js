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
                                <Tag />
                                <h3>{card.ProductName}</h3>
                                <h4>{card.Description}</h4>
                            </div>
                            <figure className="FoodCards__Product">
                                <figcaption>
                                    <Tag value={"$" + card.Price}/>
                                </figcaption>
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