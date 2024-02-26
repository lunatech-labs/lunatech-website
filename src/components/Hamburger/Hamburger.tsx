import React from 'react';
import "./Hamburger.scss";

interface HamburgerProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({onClick}) => {
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

export default Hamburger;




