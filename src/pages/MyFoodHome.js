import React from "react";
//Components
import Header from "../components/Header/Header.js";
import Hero from "../components/Hero/Hero.js";

import "./MyFoodHome.css"

class MyFoodHome extends React.Component{
    render(){
        const{
            //props
        }=this.props
        return(
            <div className="MyFoodHome">
                <section className="MyFoodHome__Container">
                    <Header />
                    <Hero />
                </section>
            </div>
        )
    }
}

export default MyFoodHome;