import { useTranslation, Trans } from 'react-i18next';
import Container from "@components/Container/Container";
import Grid from "@components/Grid/Grid";
import Language from "@components/Language/Language";
import lunatechLogo from '/lunatech-logo.svg';
import "./Footer.scss";
import { footerLinks, socialLinks } from '@/constants/index';
import { Link } from 'react-router-dom';

interface FooterProps {
    changeLanguage: (lng: string) => void;
}

const Footer: React.FC<FooterProps> = ({ changeLanguage }) => {
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
                                {socialLinks.map((link, index) => (
                                    <a href={link.url} target="_blank" key={index}><img src={link.icon} className="footer__icon" alt={link.alt} /></a>
                                ))}
                            </div>
                        </div>
                        <div className="footer__part">
                            <div className="footer__category">
                                <p className="footer__title"><Trans i18nKey={footerLinks[0].title} /></p>
                                <ul className="footer__list">
                                    {footerLinks[0].links.map((link, index) => (
                                        <li key={index} className="footer__item"><Link to={link.url} target={link.target}><Trans i18nKey={link.title} /></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="footer__part">
                            <div className="footer__category">
                                <p className="footer__title"><Trans i18nKey={footerLinks[1].title} /></p>
                                <ul className="footer__list">
                                    {footerLinks[1].links.map((link, index) => (
                                        <li key={index} className="footer__item"><Link to={link.url} target={link.target}><Trans i18nKey={link.title} /></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="footer__part">
                            <Language changeLanguage={changeLanguage} />
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