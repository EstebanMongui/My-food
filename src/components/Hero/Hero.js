import React from "react";
//Styles
import "./Hero.css";
//Components
import SearchField from "./SearchField/SearchField.js";
import DetailImageCard from "./DetailImageCard/DetailImageCard.js"

class Hero extends React.Component{
    state={
        DetailImage:[
            {   
                "id":1,
                "imageUrl":"https://media-cdn.tripadvisor.com/media/photo-s/1a/e4/9a/3a/porfirio-s-guadalajara.jpg"
            },
            {   
                "id":2,
                "imageUrl":"https://www.gentleman.excelsior.com.mx/wp-content/uploads/2020/01/PORTADAWEB-1.jpg"
            },
        ]
    }
    render(){
        const{
            title="Quick food delivery to your door",
            content="Delivery has a fresh look. Keep it local By getting your takeaways from Cambrige’s Best independent restaurants with zero emissions.",
            heroImage="https://cutt.ly/ljkUDkS"
        }=this.props
        return(
            <section className="Hero">
                <div className="Hero__Texts item">
                    <h1 className="Hero__Title">{title}</h1>
                    <h3>{content}</h3>
                </div>
                <figure className="Hero__Image item">
                    <img src={heroImage} alt=""/>
                </figure>
                <div className="item">
                    <SearchField className="Hero__SearchField"/> 
                    <DetailImageCard DetailImage={this.state.DetailImage}/>
                </div>
            </section>
        )
    }
}

export default Hero;