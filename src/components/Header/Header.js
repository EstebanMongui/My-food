import React from "react";

//Styles
import "./Header.css"

class Header extends React.Component{
    render(){
        const{
            //Props
        }=this.props
        return(
            <section className="Header">
                <h3> <span>My</span>Food</h3>
                <nav>
                    <ul>
                        <li> <a href="">Menu</a> </li>
                        <li> <a href="">How it work</a> </li>
                        <li> <a href="">About</a> </li>
                        <li> <a href="">Contact</a> </li>
                    </ul>
                </nav>
                <div>
                    <i className="icon-heart"></i>
                    <i className="icon-profile"></i>
                    <i className="icon-shopping-bag"></i>
                </div>
            </section>
        )
    }
}

export default Header;