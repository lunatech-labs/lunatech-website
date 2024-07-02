import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from '@components/Hamburger/Hamburger';
import Navigation from '@components/Navigation/Navigation';
import { lunatechLogo } from '@/assets';

import "./Header.scss";

interface HeaderProps {
    changeLanguage: (lng: string) => void;
}

interface HeaderState {
    isScrollBlocked: boolean;
}

class Header extends Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            isScrollBlocked: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleScroll = this.toggleScroll.bind(this);
    }

    toggleScroll() {
        const hamburger = document.querySelector('.hamburger');

        this.setState(prevState => ({
            isScrollBlocked: !prevState.isScrollBlocked
        }), () => {
            if (this.state.isScrollBlocked && hamburger?.classList.contains('hamburger--active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    handleClick(event: React.MouseEvent<HTMLLIElement | HTMLAnchorElement | HTMLButtonElement, MouseEvent>) {
        const isLogoClick = event.currentTarget.closest('.header__logo');
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
                    <Navigation changeLanguage={this.props.changeLanguage} onClick={(event: React.MouseEvent<HTMLLIElement>) => this.handleClick(event)} />
                </div>
            </header>
        );
    }
}

export default Header;
