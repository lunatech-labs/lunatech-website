import Add from '/pixelarticons_add.svg';
import "./OfficeCard.scss";

interface CardProps {
    title: string;
    children: JSX.Element;
}

const OfficeCard = (props: CardProps) => {
    return (
        <div className="office-card">
            <div className="dflex fd-c">
                {props.children}
                <h3 className="office-card__title">{props.title}</h3>
            </div>
            <button type="button" className="office-card__button"><img src={Add} className="" alt="Add" /></button>
        </div>
    );
};

export default OfficeCard;