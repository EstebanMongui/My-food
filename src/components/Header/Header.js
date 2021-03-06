import React from "react";

//Styles
import "./Header.css"

class Header extends React.Component{
    render(){
        return(
            <section className="Header">
                <h3 className="Header__Logo"> <span>My</span>Food</h3>
                <nav>
                    <ul className="Header__Items">
                        <li> <a href="">Menu</a> </li>
                        <li> <a href="">How it work</a> </li>
                        <li> <a href="">About</a> </li>
                        <li> <a href="">Contact</a> </li>
                    </ul>
                </nav>
                <div className="Header__Icons">
                    <i className="icon-heart"></i>
                    <i className="icon-profile"></i>
                    <i className="icon-shopping-bag"></i>
                </div>
            </section>
        )
    }
}

export default Header;