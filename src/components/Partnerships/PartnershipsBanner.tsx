import { useTranslation } from 'react-i18next';
import Container from "@components/Container/Container";
import { partnershipsBanner } from '@/constants';

import "./PartnershipsBanner.scss";
import Title from '@components/Title/Title';

const PartnershipsBanner = () => {
    const { t } = useTranslation();

    return (
        <div className="partnership__banner">
            <Container>
                <div className='partnership__container'>
                    <Title className='partnership__title' level={2}>{t("partners.title")}<span>{t("partners.titleImp")}</span></Title>
                    <div className="partnership__partners">
                        {partnershipsBanner.map((value, index) => {
                            let logoClass = "";
                            if (index === 0) {
                                logoClass = "partnership__partner--logo1";
                            } else if (index === 1) {
                                logoClass = "partnership__partner--logo2";
                            } else if (index === 2) {
                                logoClass = "partnership__partner--logo3";
                            }

                            return <img key={index} src={value.icon} className={logoClass} />;
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PartnershipsBanner;
