import React from "react";
//Components
import Header from "../components/Header/Header.js";
import Hero from "../components/Hero/Hero.js";

class MyFoodHome extends React.Component{
    render(){
        const{
            //props
        }=this.props
        return(
            <section>
                <Header />
                <Hero />
            </section>
        )
    }
}

export default MyFoodHome;