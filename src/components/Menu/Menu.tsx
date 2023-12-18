import { Link } from 'react-router-dom';
import "./Menu.scss";

const Menu = () => {
    return (
        <ul className="menu">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/works">Works</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    );
};

export default Menu;
