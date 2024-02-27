import { useEffect, useRef, useState } from 'react';
import { Trans } from "react-i18next";
import ServiceCardCarousel from "@components/ServiceCardCarousel/ServiceCardCarousel";
import Icon from "@components/Icon/Icon";
import Buildings1 from '/buildings1.svg';
import Category from "@components/Category/Category";
import Text from "@components/Text/Text";
import Title from "@components/Title/Title";
import ArrowChevronLeft from '/arrow-chevron-left.svg';
import ArrowChevronRight from '/arrow-chevron-right.svg';
import ArrowRight from '/arrow-right.svg';
import ButtonSecondary from '@components/ButtonSecondary/ButtonSecondary';
import "./ServiceCarousel.scss";

const ServiceCarousel = () => {
    const wrapperRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const updateButtonState = () => {
        if (wrapperRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft >= (scrollWidth - clientWidth));
        }
    };

    const scrollLeft = () => {
        if (wrapperRef.current) {
            (wrapperRef.current as HTMLElement).scrollBy({ left: -300, behavior: 'smooth' });
            updateButtonState();
        }
    };

    const scrollRight = () => {
        if (wrapperRef.current) {
            (wrapperRef.current as HTMLElement).scrollBy({ left: 300, behavior: 'smooth' });
            updateButtonState();
        }
    };

    useEffect(() => {
        updateButtonState();
    }, []);

    return (
        <div className="service-carousel">
            <div className='service-carousel__desc'>
                <Category content={<Trans i18nKey="service.subtitle" />} />
                <Title content={<>Browse our <span>tech services</span></>} />
                <Text className="mgb32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at scelerisque libero. Nulla tristique lectus id auctor.</Text>
                <ButtonSecondary iconUrl={ArrowRight} size='large' to='/services'>{<Trans i18nKey="buttonDetails" />}</ButtonSecondary>
            </div>
            <div className='service-carousel__content'>
                <div className="service-carousel__slider" ref={wrapperRef}>
                    <ServiceCardCarousel title="Devops" text="We automate deployments and manage your software end to end, ensuring the quality you expect the entire way."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Scala" text="We are Scala experts and have been working with Scala and related technologies for years. We’re also active in the Scala open-source community."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Java" text="We are Java experts and have been working with it for decades. We’ve been an active part of the Java open source-community for years."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Frontend" text="Providing visualisation and interaction is key to performing systems. We build custom dashboards, websites and responsive web applications to get insights into the large systems you run."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Big Data" text="We’re experts in handling large amounts of data. From processing, to storage and beyond."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Machine Learning" text="We design and implement intelligent systems that learn and improve over time."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="UX / UI" text="To Do Text"><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Test Automation" text="From designing to automating your test scenarios we make sure your applications are covered and performant, automating as much as possible."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Agile Methodology" text="We understand and speak Scrum, SAFe, Agile, etc… We help our customers with their product vision and to be agile with their products"><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                </div>
                <div className='service-carousel__buttons'>
                    <button className={`${isAtStart ? 'disabled' : ''}`} onClick={scrollLeft}><img src={ArrowChevronLeft} alt="Scroll Left" /></button>
                    <button className={`${isAtEnd ? 'disabled' : ''}`} onClick={scrollRight}><img src={ArrowChevronRight} alt="Scroll Right" /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCarousel;
