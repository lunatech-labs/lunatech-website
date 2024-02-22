import React, { Component } from 'react';
import Hamburger from '@components/Hamburger/Hamburger';
import Navigation from '@components/Navigation/Navigation';
import lunatechLogo from '/lunatech-logo.svg';
import "./Header.scss";
import { Link } from 'react-router-dom';

interface HeaderState {
    isScrollBlocked: boolean;
}

class Header extends Component<object, HeaderState> {
    constructor(props: object) {
        super(props);
        this.state = {
            isScrollBlocked: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleScroll = this.toggleScroll.bind(this);
    }

    toggleScroll() {
        this.setState(prevState => ({
            isScrollBlocked: !prevState.isScrollBlocked
        }), () => {
            if (this.state.isScrollBlocked) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    handleClick(event) {
        const isLogoClick = event.target.closest('.header__logo');
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navigation');

        if (isLogoClick && nav?.classList.contains('navigation--active')) {
            nav?.classList.remove('navigation--active');
            hamburger?.classList.remove('hamburger--active');
        } else if (!isLogoClick) {
            hamburger?.classList.toggle('hamburger--active');
            nav?.classList.toggle('navigation--active');
        }

        this.toggleScroll();
    }

    render() {
        return (
            <header className="header">
                <Link onClick={this.handleClick} className="header__logo" to="/">
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
