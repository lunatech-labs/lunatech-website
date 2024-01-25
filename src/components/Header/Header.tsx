import React, { Component } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';
import lunatechLogo from '/lunatech-logo.svg';
import "./Header.scss";

class Header extends Component {
    constructor(props) {
        super(props);
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
            <header className="header">
                <a className="header__logo" href="#" target="_blank">
                    <img src={lunatechLogo} className="header__img" alt="Lunatech logo" />
                </a>
                <div>
                    <Hamburger onClick={this.handleClick} />
                    <Navigation onClick={this.handleClick} />
                </div>
            </header>
        );
    }
}

export default Header;
