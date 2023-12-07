import { Link } from 'react-router-dom';
import "./Menu.scss";

const Menu = () => {
    return (
        <ul className="menu">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    );
};

export default Menu;