import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
import "./BusinessCard.scss";
import { technologiesPage } from "@/constants";
import { useTranslation } from "react-i18next";

const BusinessCard = () => {
    const { t } = useTranslation();

    return (
    <>
        {technologiesPage[0].firstBlock.map((business, index) => (
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