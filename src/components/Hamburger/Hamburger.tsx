import React from 'react';
import "./Hamburger.scss";

class Hamburger extends React.Component {
    render() {
        const { onClick } = this.props;
        return (
            <button className="hamburger" onClick={onClick}>
                menu
                <span className="hamburger__box">
                    <span className="hamburger__inner"></span>
                </span>
            </button>
        );
    }
}

export default Hamburger;
