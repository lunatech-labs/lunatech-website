import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import lunatechLogo from '/lunatech-logo.svg';
import Github from '/github.svg';
import Instagram from '/instagram.svg';
import Linkedin from '/linkedin.svg';
import Twitter from '/twitter.svg';
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__top">
                    <Grid>
                        <div className="footer__part first">
                            <a href="https://vitejs.dev" target="_blank"><img src={lunatechLogo} className="footer__logo" alt="Lunatech logo" /></a>
                            <p className="footer__text">Managed by Lunatech Labs.</p>
                            <div className="footer__social">
                                <a href="#" target="_blank"><img src={Github} className="footer__icon" alt="Github logo" /></a>
                                <a href="#" target="_blank"><img src={Instagram} className="footer__icon" alt="Instagram logo" /></a>
                                <a href="#" target="_blank"><img src={Linkedin} className="footer__icon" alt="Linkedin logo" /></a>
                                <a href="#" target="_blank"><img src={Twitter} className="footer__icon" alt="Twitter logo" /></a>
                            </div>
                        </div>

                        <div className="footer__part second">
                            <div className="footer__category">
                                <p className="footer__title">Works</p>
                                <ul className="footer__list">
                                    <li className="footer__item"><a href="#">Business sectors</a></li>
                                    <li className="footer__item"><a href="#">Case studies</a></li>
                                </ul>
                            </div>
                            <div className="footer__category">
                                <p className="footer__title">About</p>
                                <ul className="footer__list">
                                    <li className="footer__item"><a href="#">Lifestyle</a></li>
                                    <li className="footer__item"><a href="#">offices</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__part third">
                            <div className="footer__category">
                                <p className="footer__title">Services</p>
                                <ul className="footer__list">
                                    <li className="footer__item"><a href="#">Scala Expertise</a></li>
                                    <li className="footer__item"><a href="#">Java Expertises</a></li>
                                    <li className="footer__item"><a href="#">Custom software development</a></li>
                                    <li className="footer__item"><a href="#">System integration</a></li>
                                    <li className="footer__item"><a href="#">Legacy transformation</a></li>
                                    <li className="footer__item"><a href="#">Evolutive maintenance</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__part fourth">
                            <div className="footer__category">
                                <p className="footer__title">Careers</p>
                                <ul className="footer__list">
                                    <li className="footer__item"><a href="#">See offers</a></li>
                                </ul>
                            </div>
                            <div className="footer__category">
                                <p className="footer__title">Blog</p>
                                <ul className="footer__list">
                                    <li className="footer__item"><a href="#">Read our articles</a></li>
                                </ul>
                            </div>
                            <div className="footer__category">
                                <p className="footer__title">Contact</p>
                                <ul className="footer__list">
                                    <li className="footer__item"><a href="#">Let’s talk together</a></li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                </div>
                
                <div className="footer__bottom">
                    <p>© 2023 Lunatech. All rights reserved.</p>
                    <div className="footer__link">
                        <a href="#">Terms</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;