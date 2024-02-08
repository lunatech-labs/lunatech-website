import Text from '../components/Text/Text';
import Category from '../components/Category/Category';
import Input from '../components/Input/Input';
import Address from '../components/Adress/Adress';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';

const Contact = () => {
    const options = [
        "Web Design",
        "Web Development",
        "App Development",
        "SEO",
        "Marketing",
        "Other"
    ];
    return (
        <div className="page">
            <Container>
                <div className="mgb128">
                    <Category content="Index / Contact" />
                    <h1 className="hero__title">Let&apos;s work <span>together</span>!</h1>
                    <Text>Let us help you become even greater at what you do. Fill out the following form and we will get back to you in the next 24 hours.</Text>
                </div>

                <section className='contact__content'>
                    <Grid>
                        <div className='contact__form'>
                            <form>
                                <Input number='01' type='text' label='What&apos;s your name?' placeHolder='Type your full name' name='fullName'>
                                </Input>
                                <Input number='02' type='email' label='What&apos;s your email address?' placeHolder='example@email.com' name='fullName'>
                                </Input>
                                <Input number='03' type='text' label='What&apos;s your phone number?' placeHolder='+11 2222 333344' name='fullName'>
                                </Input>
                                <Input number='04' type='text' label='What&apos;s your company/organization name?' placeHolder='Type your company/organisation name' name='fullName'>
                                </Input>
                                <Input number='05' type='options' options={options} label='What&apos;s services are you looking for?' placeHolder='Choose from the list here' name='fullName'>
                                </Input>
                                <Input number='06' type='textarea' label='Tell us about your project' placeHolder='Please type your project description' name='fullName'>
                                </Input>
                            </form>
                            <button className="formBtn" type="submit" form="form1" value="Submit">Send message</button>
                        </div>
                        <div className="contact__infos">
                            <Address country='Netherlands' kind='Business development' mail='info@lunatech.nl' phone='+31 10 750 2600' street='Hofplein 20' city='3032 AC Rotterdam'/>
                            <Address country='France' kind='Business development' mail='info@lunatech.fr' phone='+33 1 82 88 56 64' street='3 rue de la Galmy' city='77700 Chessy'/>
                            <Address country='United Kingdom' kind='Business development' mail='info@lunatech.uk'/>
                        </div>
                    </Grid>
                </section>
            </Container>
        </div>
    );
};

export default Contact;