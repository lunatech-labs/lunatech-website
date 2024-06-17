import { useTranslation } from 'react-i18next';
import Container from "@components/Container/Container";
import { partnershipsBanner } from '@/constants';

import "./PartnershipsBanner.scss";

const PartnershipsBanner = () => {
    useTranslation();

    return (
        <div className="partnership__banner">
            <Container>
                <div className="partnership__partners">
                    {partnershipsBanner.map((value, index) => (
                        <img key={index} src={value.icon} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default PartnershipsBanner