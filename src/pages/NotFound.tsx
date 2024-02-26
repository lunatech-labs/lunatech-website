import Container from "@components/Container/Container";
import Text from "@components/Text/Text";
import ButtonPrimary from "@components/ButtonPrimary/ButtonPrimary";
import HomeIcon from '/home.svg';

const NotFound = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    
    return (
        <div className="page">
            <Container>
                <div className="not-found">
                    <p className="not-found__title">404</p>
                    <h1 className="hero__title">Look like you're lost in <span>space!</span></h1>
                    <Text className="mgb64">Oops the spaceship left without you...<br />The page you requested could not be found.</Text>
                    <ButtonPrimary to={"/"} iconUrl={HomeIcon} size="large"><Trans i18nKey="buttonHomePage" /></ButtonPrimary>
                </div>
            </Container>
            <div className="circle">
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
            </div>
        </div>
    );
};

export default NotFound;