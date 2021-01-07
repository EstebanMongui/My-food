import { render } from "@testing-library/react";
import React from "react";

//Components
import Header from "../components/Header/Header.js"
import FoodCards from "../components/FoodCards/FoodCards.js"

class MyFoodHome extends React.Component{
    render(){
        const{
            //props
        }=this.props
        return(
            <boddy className="boddy">
                <Header />
                <section>
                    <FoodCards />
                </section>
            </boddy>
        )
    }
}

export default MyFoodHome;