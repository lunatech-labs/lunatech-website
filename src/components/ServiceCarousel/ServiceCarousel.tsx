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
                <Title content={<>Meet your needs with our <span>services</span></>} />
                <Text className="">Test</Text>
                <ButtonSecondary iconUrl={ArrowRight} size='large' to='/services'>{<Trans i18nKey="buttonDetails" />}</ButtonSecondary>
            </div>
            <div className='service-carousel__content'>
                <div className="service-carousel__slider" ref={wrapperRef}>
                    <ServiceCardCarousel title="Java expertise & Consultancy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Frontend Development" text="Lorm ipsum dolor sit amet, consectetur adipiscing elit."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Backend Development" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Mobile Development" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
                    <ServiceCardCarousel title="Cloud Services" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."><Icon imageUrl={Buildings1} size="small" /></ServiceCardCarousel>
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
