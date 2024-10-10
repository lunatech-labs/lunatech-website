import { useTranslation, Trans } from 'react-i18next';
import Category from '@components/Category/Category';
import Title from '@components/Title/Title';
import { partnerships } from '@/constants';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import { arrowRight } from '@/assets';

import "./Partnerships.scss";

const Partnerships = () => {
    const { t } = useTranslation();

    return (
        <div className="partnership">
            <div className="ta-c ">
                <Category content={<Trans i18nKey="partners.subtitle" />} />
                <Title level={2}>{t("partners.title")}<span>{t("partners.titleImp")}</span></Title>
            </div>
            
            <div className="partnership__partners">
                {partnerships.concat(partnerships).map((value, index) => (
                    <img key={index} src={value.icon} className="partnership__logo" alt="Partner logo" />
                ))}
            </div>
            <div className="dflex jc-c">
                <ButtonSecondary iconUrl={arrowRight} size="large" to='/partners'><Trans i18nKey="buttonDetails" /></ButtonSecondary>
            </div>
        </div>
    );
}

export default Partnerships;
