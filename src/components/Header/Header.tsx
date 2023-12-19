import Menu from '../Menu/Menu';
import lunatechLogo from '/lunatech-logo.svg';
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <a href="https://vitejs.dev" target="_blank"><img src={lunatechLogo} className="header__logo" alt="Lunatech logo" /></a>
            <Menu />
        </header>
    );
};

export default Header;