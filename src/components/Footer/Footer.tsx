import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Grid>
                    <div className="footer__category">
                        <p className="footer__title">Works</p>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#">Business sectors</a></li>
                            <li className="footer__item"><a href="#">Case studies</a></li>
                        </ul>
                    </div>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;