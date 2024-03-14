import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
import "./BusinessCard.scss";
import { technologiesPage } from "@/constants";

const BusinessCard = () => {
    return (
    <>
        {technologiesPage[0].firstBlock.map((business, index) => (
                <div key={index} className="businessCard">
                    <div className="businessCard__icon">
                        {business.image()}
                    </div>
                    <div className="businessCard__content">
                        <Title level={3}>{business.title}</Title>
                        <Text size="medium">{business.text}</Text>
                    </div>
                </div>
            ))}
    </>
    )
}

export default BusinessCard