import React from 'react';
import "./Hamburger.scss";

class Hamburger extends React.Component {
    constructor (props) {
        super (props);
        this.handleClick = this.handleClick.bind(this); 
    }
      
    handleClick() {
        const hamburger = document.querySelector('.hamburger__icon');
        const nav = document.querySelector('.navigation');
        hamburger.classList.toggle('active');
        nav.classList.toggle('navigation--active');
    }

    render() {
        return (
            <div className="hamburger">
                <p className="hamburger__text">menu</p>
                <button className="hamburger__icon" onClick={this.handleClick}>
                    <span className="hamburger__dot"> </span>
                    <span className="hamburger__dot"> </span>
                    <span className="hamburger__dot"> </span>
                </button>
            </div>
        );
    }
}

export default Hamburger;




