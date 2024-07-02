import { useState } from "react";

import Title from "@components/Title/Title";
import Text from "@components/Text/Text";

import "./TechnologieCard.scss";

interface CardProps {
    title: string;
    text: string;
    children: JSX.Element;
}

const TechnologieCard = (props: CardProps) => {
    const [isFrontVisible, setIsFrontVisible] = useState(true);

    const handleClick = () => {
        setIsFrontVisible(prevState => !prevState);
    };

    return (
        <div className="technologie-card" onClick={handleClick}>
            <div className={`front ${isFrontVisible ? 'visible' : 'hidden'}`}>
                {props.children}
                <Title level={3}>{props.title}</Title>
            </div>
            <div className={`back ${isFrontVisible ? 'hidden' : 'visible'}`}>
                <Text size="medium" className="mgb24">{props.text}</Text>
            </div>
            <div className="toggle-button">
                <div className="icon-plus">
                    <div className={`icon-plus-bar ${isFrontVisible ? 'is-vertical' : 'is-vertical open'}`}></div>
                    <div className="icon-plus-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default TechnologieCard;
