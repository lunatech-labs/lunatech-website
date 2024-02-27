import "./BusinessCard.scss";

interface BusinessProps {
    imageUrl: string;
    title: string;
    text: string;
}

const BusinessCard = (props: BusinessProps) => {
    return (
        <div className="businessCard">
            <div className="businessCard__icon">
                <img className="icon__img" src={props.imageUrl} alt="" />
            </div>
            <div className="businessCard__content">
                <p className="businessCard__title">{props.title}</p>
                <p className="businessCard__text">{props.text}</p>
            </div>
        </div>

        
    )
}

export default BusinessCard