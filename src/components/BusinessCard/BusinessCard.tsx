import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
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
                <Title level={3}>{props.title}</Title>
                <Text size="medium">{props.text}</Text>
            </div>
        </div>

        
    )
}

export default BusinessCard