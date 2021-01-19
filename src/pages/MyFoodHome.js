import React from "react";
//Components
import Header from "../components/Header/Header.js";
import Hero from "../components/Hero/Hero.js";
import FoodCards from "../components/FoodCards/FoodCards.js"
import Footer from "../components/Footer/Footer.js"
//Styles
import "./MyFoodHome.css"
//data
import data from "../data/food_data.json"
class MyFoodHome extends React.Component{
    state=data
    render(){
        return(
            <div className="MyFoodHome">
                <section className="MyFoodHome__Container">
                    <Header />
                    <Hero />
                    <h1 className="MyFoodHome__SectionTitle"> Delicious Food</h1>
                    <div className="FoodCards__Container">
                        <FoodCards cardInformation={this.state.cardInformation}/>
                    </div>
                    <div className="Foother">
                        <Footer/>
                    </div>
                </section>
            </div>
        )
    }
}

export default MyFoodHome;