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
            <h3 className="technologie-card-carousel__title">{props.title}</h3>
            <p className="technologie-card-carousel__text">{props.text}</p>
        </div>
    );
};

export default TechnologieCardCarousel;





