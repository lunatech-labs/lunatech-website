import { Trans, useTranslation } from 'react-i18next';

import Value from "@components/Value/Value";
import Container from "@components/Container/Container";
import Grid from "@components/Grid/Grid";
import { valuesBanner } from '@/constants';

import "./ValuesBanner.scss";

const ValuesBanner = () => {
    useTranslation();

    return (
        <div className="values__banner">
            <Container>
                <Grid>
                    {valuesBanner.map((value, index) => (
                        <Value key={index} number={value.number} content={<Trans i18nKey={value.title} />} />
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default ValuesBanner