import "./OfficeCard.scss";

interface CardProps {
    icon: any;
    title: string;
}

const OfficeCard = (props: CardProps) => {
    return (
        <div className="office-card">
            <img src={props.icon} className="office-card__icon" alt="Car" />
            <h3 className="office-card__title">{props.title}</h3>
        </div>
    );
};

export default OfficeCard;