import { useEffect, useRef, useState } from 'react';
import { Trans } from "react-i18next";
import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';
import TechnologieCardCarousel from "@/components/TechnologieCardCarousel/TechnologieCardCarousel";
import Icon from "@components/Icon/Icon";
import Category from "@components/Category/Category";
import Text from "@components/Text/Text";
import Title from "@components/Title/Title";
import ButtonSecondary from '@components/ButtonSecondary/ButtonSecondary';
import "./TechnologiesCarousel.scss";
import { arrowChevronLeft, arrowChevronRight, arrowRight } from '@/assets';
import { technologiesPage } from '@/constants';
import IconAnimated from '../IconAnimated/IconAnimated';

const TechnologiesCarousel = () => {
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
        <div className="technologies-carousel">
            <div className='technologies-carousel__desc'>
                <Category content={<Trans i18nKey="technologies.category2" />} />
                <Title level={2}>Browse our <span>tech services</span></Title>
                <Text size="large" className="mgb32">With 30 years' experience in IT consulting, we offer a range of technologies to meet your immediate needs and support your future growth.</Text>
                <ButtonSecondary iconUrl={arrowRight} size='large' to='/technologies'>{<Trans i18nKey="buttonDetails" />}</ButtonSecondary>
            </div>
            <div className='technologies-carousel__content'>
                <div className='technologies-carousel__buttons'>
                    <button className={`${isAtStart ? 'disabled' : ''}`} onClick={scrollLeft}><img src={arrowChevronLeft} alt="Scroll Left" /></button>
                    <button className={`${isAtEnd ? 'disabled' : ''}`} onClick={scrollRight}><img src={arrowChevronRight} alt="Scroll Right" /></button>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesCarousel;
