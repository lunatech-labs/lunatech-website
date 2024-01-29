import Container from "../Container/Container";
import dhlLogo from '/dhl-logo.svg';
import ingLogo from '/ing-logo.svg';
import msAmlinLogo from '/ms-amlin-logo.svg';
import audiLogo from '/audi-logo.svg';
import upsLogo from '/ups-logo.svg';
import enecogenLogo from '/enecogen-logo.svg';
import "./Client.scss";

const Client = () => {
    return (
        <section className="client">
            {/* <Container> */}
                <img src={dhlLogo} className="client__logo" alt="DHL logo" />
                <img src={ingLogo} className="client__logo" alt="ING logo" />
                <img src={msAmlinLogo} className="client__logo" alt="MS Amlin logo" />
                <img src={audiLogo} className="client__logo" alt="Audi logo" />
                <img src={upsLogo} className="client__logo" alt="UPS logo" />
                <img src={enecogenLogo} className="client__logo" alt="Enecogen logo" />
            {/* </Container> */}
        </section>
    );
};

export default Client;