import quote from '/quote.svg';
import "./TestimonialCard.scss";

interface TestimonialProps {
    text: string;
    picture: any;
    name: string;
    job: string;
}
const Testimonial = (props: TestimonialProps) => {
    return (
        <div className="testimonial__card">
            <img className="testimonial__icon" src={quote} alt="Quote" />
            <p className="testimonial__text">{props.text}</p>
            <div className="testimonial__user">
                <img src={props.picture} className="testimonial__picture" alt="User picture" />
                <p className="testimonial__name">{props.name}</p>
                <p className="testimonial__job">{props.job}</p>
            </div>
        </div>
    );
};

export default Testimonial;