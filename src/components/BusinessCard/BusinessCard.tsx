import { useTranslation } from "react-i18next";

import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
import { expertisePage } from "@/constants";

import "./BusinessCard.scss";

const BusinessCard = () => {
    const { t } = useTranslation();

    return (
    <>
        {expertisePage.map((business, index) => (
                <div key={index} className="businessCard">
                    <div className="businessCard__icon">
                        {business.image()}
                    </div>
                    <div className="businessCard__content">
                        <Title level={3}>{t(business.title)}</Title>
                        <Text size="medium">{t(business.text)}</Text>
                    </div>
                </div>
            ))}
    </>
    )
}

export default BusinessCard