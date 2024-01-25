import React from 'react';
import "./Hamburger.scss";

class Hamburger extends React.Component {
    render() {
        const { onClick } = this.props;
        return (
            <div className="hamburger">
                <p className="hamburger__text">menu</p>
                <button className="hamburger__icon" onClick={onClick}>
                    <span className="hamburger__dot"> </span>
                    <span className="hamburger__dot"> </span>
                    <span className="hamburger__dot"> </span>
                </button>
            </div>
        );
    }
}

export default Hamburger;




