import React from "react";
//Styles
import "./SearchField.css"; 
//Components
import Button1 from "../../Buttons/Button1.js"


class SearchField extends React.Component{
    render(){
        const{
            placeholder="Location",
        }=this.props
        return(
            <div className="SearchField">
                <form>
                    <input type="text" placeholder={placeholder}/>
                </form>
                <Button1 />
            </div>
        )
    }
}

export default SearchField;