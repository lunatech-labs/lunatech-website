import "./ContactCard.scss";

interface CardProps {
    title: string;
    text: string;
    children: JSX.Element;
}

const ContactCard = (props: CardProps) => {
    return (
        <div className="contact-card">
            {props.children}
            <p className="contact-card__title">{props.title}</p>
            <p className="contact-card__text">{props.text}</p>
        </div>
    );
};

export default ContactCard;