import { Trans } from 'react-i18next';

import { expertiseBlock } from '@/constants';
import Category from "@components/Category/Category";
import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import { arrowRight } from '@/assets';

import "./ExpertisesPart.scss";

interface ExpertisesPartProps {
    children: React.ReactNode;
}

const ExpertisesPart = (props: ExpertisesPartProps) => {
  return (
    <div className="expertises-part">
        <div className="expertises-part__top">
            <div className="expertises-part__desc">
                <Category content={<Trans i18nKey={expertiseBlock[0].breadcrumb} />} />
                <Title level={2}><Trans i18nKey={expertiseBlock[0].title} /> <span><Trans i18nKey={expertiseBlock[0].titleImp} /></span></Title>
                <Text size="large"><Trans i18nKey="expertise.text" /></Text>
            </div>
            <ButtonSecondary iconUrl={arrowRight} size='large' to='/expertises'><Trans i18nKey="buttonDetails" /></ButtonSecondary>
        </div>
        {props.children}
    </div>
  )
}

export default ExpertisesPart;