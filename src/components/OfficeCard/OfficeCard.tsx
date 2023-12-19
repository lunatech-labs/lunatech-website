import "./OfficeCard.scss";

interface CardProps {
    title: string;
    children: JSX.Element;
}

const OfficeCard = (props: CardProps) => {
    return (
        <div className="office-card">
            {props.children}
            <h3 className="office-card__title">{props.title}</h3>
        </div>
    );
};

export default OfficeCard;