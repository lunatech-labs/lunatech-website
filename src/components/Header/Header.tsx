import React, { Component } from 'react';
import Hamburger from '@components/Hamburger/Hamburger';
import Navigation from '@components/Navigation/Navigation';
import lunatechLogo from '/lunatech-logo.svg';
import "./Header.scss";
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navigation');
        hamburger?.classList.toggle('hamburger--active');
        nav?.classList.toggle('navigation--active');
    }

    render() {
        return (
            <header className="header">
                <Link className="header__logo" to="/">
                    <img src={lunatechLogo} className="header__img" alt="Lunatech logo" />
                </Link>
                <div>
                    <Hamburger onClick={this.handleClick} />
                    <Navigation onClick={this.handleClick} />
                </div>
            </header>
        );
    }
}

export default Header;
