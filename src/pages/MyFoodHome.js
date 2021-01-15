import React from "react";
//Components
import Header from "../components/Header/Header.js";
import Hero from "../components/Hero/Hero.js";
import FoodCards from "../components/FoodCards/FoodCards.js"

import "./MyFoodHome.css"

class MyFoodHome extends React.Component{
    state={
        cardInformation:[
            {
                "id":1,
                "ProductName":"Hamburguer",
                "Description":"Description",
                "Price":"0.0",
                "ImageUrl":"https://revistapym.com.co/wp-content/uploads/2016/10/las-comidas-rapidas-1.png"
            },
            {
                "id":2,
                "ProductName":"Hamburguer",
                "Description":"Description",
                "Price":"0.0",
                "ImageUrl":"https://revistapym.com.co/wp-content/uploads/2016/10/las-comidas-rapidas-1.png"
            },
            {
                "id":3,
                "ProductName":"Hamburguer",
                "Description":"Description",
                "Price":"0.0",
                "ImageUrl":"https://revistapym.com.co/wp-content/uploads/2016/10/las-comidas-rapidas-1.png"
            },
        ]
    }
    render(){
        const{
            //props
        }=this.props
        return(
            <div className="MyFoodHome">
                <section className="MyFoodHome__Container">
                    <Header />
                    <Hero />
                    <h1 className="MyFoodHome__SectionTitle"> Delicious Food</h1>
                    <div className="FoodCards__Container">
                        <FoodCards cardInformation={this.state.cardInformation}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default MyFoodHome;