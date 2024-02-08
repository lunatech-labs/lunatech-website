import Category from "@components/Category/Category";
import Container from "@components/Container/Container";
import Icon from "@components/Icon/Icon";
import Text from '@components/Text/Text';
import WorkCard from "@components/WorkCard/WorkCard";

import Example from '/github.svg';

const Works = () => {
    return (
        <div className="page">
            <Container>
                <div className="mgb128">
                    <Category content="Index / Works" />
                    <h1 className="hero__title">Let&apos;s work <span>together</span>!</h1>
                    <Text>Let us help you become even greater at what you do. Fill out the following form and we will get back to you in the next 24 hours.</Text>
                </div>

                <div className="works">
                    <div className="works__content">
                        <WorkCard title="Automotive" desc="Scala Expertise & Consultancy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image='blog'>
                            <Icon imageUrl={Example} size="small" />
                        </WorkCard>
                        <WorkCard title="Insurance" desc="Custom software development" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image='blog'>
                            <Icon imageUrl={Example} size="small" />
                        </WorkCard>
                        <WorkCard title="Energy" desc="Java Expertise & Consultancy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image='blog'>
                            <Icon imageUrl={Example} size="small" />
                        </WorkCard>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Works;