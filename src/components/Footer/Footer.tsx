import { useTranslation, Trans } from 'react-i18next';
import Container from "@components/Container/Container";
import Grid from "@components/Grid/Grid";
import Language from "@components/Language/Language";
import lunatechLogo from '/lunatech-logo.svg';
import Github from '/github.svg';
import Instagram from '/instagram.svg';
import Linkedin from '/linkedin.svg';
import Twitter from '/twitter.svg';
import "./Footer.scss";

const Footer = () => {
    useTranslation();

    return (
        <footer className="footer">
            <Container>
                <div className="footer__top">
                    <Grid>
                        <div className="footer__part">
                            <div className="footer__brand">
                                <a href="/" target="_blank"><img src={lunatechLogo} className="footer__logo" alt="Lunatech logo" /></a>
                                <p className="footer__text"><Trans i18nKey="footer.managed" /></p>
                            </div>
                            <div className="footer__social">
                                <a href="https://github.com/lunatech-labs" target="_blank"><img src={Github} className="footer__icon" alt="Github logo" /></a>
                                <a href="https://www.instagram.com/lunatech_nl/" target="_blank"><img src={Instagram} className="footer__icon" alt="Instagram logo" /></a>
                                <a href="https://www.linkedin.com/company/lunatech-research" target="_blank"><img src={Linkedin} className="footer__icon" alt="Linkedin logo" /></a>
                                <a href="https://twitter.com/lunatechlabs" target="_blank"><img src={Twitter} className="footer__icon" alt="Twitter logo" /></a>
                            </div>
                        </div>
                        <div className="footer__part">
                            <div className="footer__category">
                                <p className="footer__title"><Trans i18nKey="footer.title1" /></p>
                                <ul className="footer__list">
                                    <li className="footer__item"><a href="/"><Trans i18nKey="navigation.home" /></a></li>
                                    <li className="footer__item"><a href="/about"><Trans i18nKey="navigation.about" /></a></li>
                                    <li className="footer__item"><a href="/services">Services</a></li>
                                    <li className="footer__item"><a href="/vision">Vision</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__part">
                            <div className="footer__category">
                                <p className="footer__title"><Trans i18nKey="footer.title2" /></p>
                                <ul className="footer__list">
                                    <li className="footer__item"><a href="https://blog.lunatech.com/" target="_blank">Blog</a></li>
                                    <li className="footer__item"><a href="https://recruitment.lunatech.com/" target="_blank">Careers</a></li>
                                    <li className="footer__item"><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__part">
                            <Language />
                        </div>
                    </Grid>
                </div>
                
                <div className="footer__bottom">
                    <p>© 2023 Lunatech. <Trans i18nKey="footer.copyright" /></p>
                    <a href="/Lunatech-General_Terms_and_Conditions.pdf" target="_blank"><Trans i18nKey="footer.terms" /></a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;