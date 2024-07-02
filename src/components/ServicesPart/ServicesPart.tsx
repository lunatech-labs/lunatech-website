import { Trans } from 'react-i18next';

import { serviceBlock } from '@/constants';
import Category from "@components/Category/Category";
import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import { arrowRight } from '@/assets';

import "./ServicesPart.scss";

interface ServicesPartProps {
    children: React.ReactNode;
}

const ServicesPart = (props: ServicesPartProps) => {
  return (
    <div className="services-part">
        <div className="services-part__top">
            <div className="services-part__desc">
                <Category content={<Trans i18nKey={serviceBlock[0].breadcrumb} />} />
                <Title level={2}><Trans i18nKey={serviceBlock[0].title} /> <span><Trans i18nKey={serviceBlock[0].titleImp} /></span></Title>
                <Text size="large"><Trans i18nKey="service.text" /></Text>
            </div>
            <ButtonSecondary iconUrl={arrowRight} size='large' to='/services'><Trans i18nKey="buttonDetails" /></ButtonSecondary>
        </div>
        {props.children}
    </div>
  )
}

export default ServicesPart;