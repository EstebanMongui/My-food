import React from "react";
//Components
import Header from "../components/Header/Header.js";
import Hero from "../components/Hero/Hero.js";
import FoodCards from "../components/FoodCards/FoodCards.js"
import Footer from "../components/Footer/Footer.js"
import ContactButton from "../components/Buttons/ContactButton/ContactButton.js"
import ContactModal from "../components/Modals/ContactModal/ContactModal"
//Styles
import "./MyFoodHome.css"
//data
import data from "../data/food_data.json"

class MyFoodHome extends React.Component{
    state={
        status:null,
    }
    render(){
        return(
            <div className="MyFoodHome">
                <section className="MyFoodHome__Container">
                    <Header />
                    <Hero />
                    <ContactButton Open={() => this.setState({status:true})}/>
                    <div className="ContactModal__Container">
                        <ContactModal isOpen={this.state.status} onClose={()=>this.setState({status:false})}/>
                    </div>
                    <h1 className="MyFoodHome__SectionTitle"> Delicious Food</h1>
                    <div className="FoodCards__Container">
                        <FoodCards cardInformation={data.cardInformation}/>
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