import { render } from "@testing-library/react";
import React from "react";

import Header from "../components/Header/Header.js"

class MyFoodHome extends React.Component{
    render(){
        const{
            //props
        }=this.props
        return(
            <section>
                <Header />
            </section>
        )
    }
}

export default MyFoodHome;