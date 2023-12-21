import React from 'react';
import "./Hamburger.scss";

class Hamburger extends React.Component {
    constructor (props) {
        super (props);
        this.handleClick = this.handleClick.bind(this); 
    }
      
    handleClick() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navigation');
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('navigation--active');
    }

    render() {
        return (
            <button className="hamburger" onClick={this.handleClick}>
                menu
                <span className="hamburger__box">
                    <span className="hamburger__inner"></span>
                </span>
            </button>
        );
    }
}

export default Hamburger;
