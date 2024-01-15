import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import ContactCard from '../components/ContactCard/ContactCard';
import Icon from '../components/Icon/Icon';

import Chat from '/chat.svg';
import Wallet from '/wallet.svg';

const Contact = () => {
    return (
        <>
            <section>
                <Container>
                        <Grid>
                            <ContactCard title="Briefez-nous" text="Have a question? Speak to our expert.">
                                <Icon imageUrl={Chat} size="large" />
                            </ContactCard>
                            <ContactCard title="Rejoignez-nous" text="Consultez nos différentes offres d’emploi.">
                                <Icon imageUrl={Wallet} size="large" />
                            </ContactCard>
                        </Grid>
                </Container>
                
            </section>
        </>
    );
};

export default Contact;