import React, { Component } from 'react';
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello guests"
      }
    }

    handleclick = () => {
        console.log("Button was clicked")
    }


    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <span>{this.state.message}</span>
            <button onClick={() => this.handleclick()}>log in</button>
        </div>
        )
    }
}

export default NavBarSimple;