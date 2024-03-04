import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
import "./TechnologieCardCarousel.scss";

interface CardProps {
    className?: string;
    title: string;
    text: string;
    children: JSX.Element;
}

const TechnologieCardCarousel = (props: CardProps) => {    
    return (
        <div className={`technologie-card-carousel ${props.className}`}>
            {props.children}
            <Title level={3}>{props.title}</Title>
            <Text size="medium" className="mgb24">{props.text}</Text>
        </div>
    );
};

export default TechnologieCardCarousel;
