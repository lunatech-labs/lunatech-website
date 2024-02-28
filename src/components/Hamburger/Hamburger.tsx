import React from 'react';
import "./Hamburger.scss";

interface HamburgerProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({onClick}) => {
    return (
        <button className="hamburger" onClick={onClick}>
            <p className="hamburger__text">menu</p>
            <div className="hamburger__icon">
                <span className="hamburger__dot"> </span>
                <span className="hamburger__dot"> </span>
                <span className="hamburger__dot"> </span>
            </div>
        </button>
    );
}

export default Hamburger;
