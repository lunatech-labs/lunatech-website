import { Trans, useTranslation } from 'react-i18next';
import Value from "@components/Value/Value";
import Container from "@components/Container/Container";
import Grid from "@components/Grid/Grid";

import "./ValuesBanner.scss";

const ValuesBanner = () => {
    useTranslation();

    return (
        <div className="values__banner">
            <Container>
                <Grid>
                    <Value number={30} content={<Trans i18nKey="banner.first" />} />
                    <Value number={90} content={<Trans i18nKey="banner.second" />} />
                    <Value number={10} content={<Trans i18nKey="banner.third" />} />
                    <Value number={25} content={<Trans i18nKey="banner.fourth" />} />
                </Grid>
            </Container>
        </div>
    )
}

export default ValuesBanner