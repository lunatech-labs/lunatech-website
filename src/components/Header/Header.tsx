import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';
import lunatechLogo from '/lunatech-logo.svg';
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <a className="header__logo" href="#" target="_blank"><img src={lunatechLogo} className="header__image" alt="Lunatech logo" /></a>
            <div>
                <Hamburger />
                <Navigation />
            </div>
        </header>
    );
};

export default Header;