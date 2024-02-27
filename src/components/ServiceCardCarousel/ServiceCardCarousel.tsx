import "./ServiceCardCarousel.scss";

interface CardProps {
    title: string;
    text: string;
    children: JSX.Element;
}

const ServiceCardCarousel = (props: CardProps) => {    
    return (
        <div className="service-card-carousel">
            {props.children}
            <h3 className="service-card-carousel__title">{props.title}</h3>
            <p className="service-card-carousel__text">{props.text}</p>
        </div>
    );
};

export default ServiceCardCarousel;





