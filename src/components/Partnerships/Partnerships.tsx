import { useTranslation, Trans } from 'react-i18next';

import Category from '@components/Category/Category';
import Title from '@components/Title/Title';
import { partnerships } from '@/constants';

import "./Partnerships.scss";

const Partnerships = () => {
    const { t } = useTranslation();

    return (
        <div className="partnership">
            <div className="blog__top">
                <Category content={<Trans i18nKey="partners.subtitle" />} />
                <Title level={2}>{t("partners.title")}<span>{t("partners.titleImp")}</span></Title>
            </div>
            
            <div className="partnership__partners">
                {partnerships.map((value, index) => (
                    <img key={index} src={value.icon} className="partnership__logo" />
                ))}
            </div>
        </div>
    )
}

export default Partnerships;
