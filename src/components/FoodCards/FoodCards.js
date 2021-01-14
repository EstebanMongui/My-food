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
            Price="$0.0",
            imageUrl="https://revistapym.com.co/wp-content/uploads/2016/10/las-comidas-rapidas-1.png"
        }=this.props
        return(
            <div className="FoodCards">
                <div className="FoodCards__Description">
                    <Tag />
                    <h3>{ProductName}</h3>
                    <h4>{Description}</h4>
                </div>
                <figure className="FoodCards__Product">
                    <figcaption>
                        <Tag value={Price}/>
                    </figcaption>
                    <img src={imageUrl} alt=""/>
                </figure>
            </div>
        )
    }
}

export default FoodCards;