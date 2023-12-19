import "./ServiceCard.scss";

interface CardProps {
    title: string;
    text: string;
    children: JSX.Element;
}

const ServiceCard = (props: CardProps) => {
    return (
        <div className="service-card">
            {props.children}
            <h3 className="service-card__title">{props.title}</h3>
            <p className="service-card__text">{props.text}</p>
        </div>
    );
};

export default ServiceCard;