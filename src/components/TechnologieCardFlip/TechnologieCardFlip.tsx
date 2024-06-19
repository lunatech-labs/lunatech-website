import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
import "./TechnologieCardFlip.scss";

interface CardProps {
    className?: string;
    title: string;
    text: string;
    children: JSX.Element;
}

const TechnologieCardFlip = (props: CardProps) => {    
    return (
        <div className={`technologie-card-flip ${props.className}`}>
            <div className="front">
                {props.children}
                <Title level={3}>{props.title}</Title>
            </div>
            <div className="back">
                <Text size="medium" className="mgb24">{props.text}</Text>
            </div>
        </div>
    );
};

export default TechnologieCardFlip;
