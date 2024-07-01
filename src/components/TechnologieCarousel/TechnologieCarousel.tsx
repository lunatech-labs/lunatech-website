import { useEffect, useState } from 'react';
import { technologiesPage } from "@/constants";
import TechnologieCardCarousel from "../TechnologieCardCarousel/TechnologieCardCarousel";
import "./TechnologieCarousel.scss";
import { arrowChevronLeft, arrowChevronRight, arrowRight } from "@/assets";
import Category from "@components/Category/Category";
import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
import { Trans, useTranslation } from "react-i18next";
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import Icon from "@components/Icon/Icon";

const TechnologieCarousel = () => {
    const { t } = useTranslation();
    const [isStart, setIsStart] = useState(true);

    useEffect(() => {
        const carousel = document.querySelector('.technologies-carousel__carousel');
        const arrowBtns = document.querySelectorAll('.technologies-carousel__buttons button');
        const firstCardWidth = carousel?.querySelector('.technologies-carousel__card')?.clientWidth ?? 0;

        const updateButtonStatus = () => {
            if (carousel) {
                setIsStart(carousel.scrollLeft === 0);
            }
        };

        arrowBtns.forEach(arrowBtn => {
            arrowBtn.addEventListener('click', () => {
                if (carousel) {
                    if (arrowBtn.id === 'left') {
                        carousel.scrollLeft -= firstCardWidth;
                    } else {
                        if (Math.ceil(carousel.scrollLeft + carousel.clientWidth) >= carousel.scrollWidth) {
                            carousel.scrollLeft = 0;
                        } else {
                            carousel.scrollLeft += firstCardWidth;
                        }
                    }
                    updateButtonStatus();
                }
            });
        });

        const handleScroll = () => {
            updateButtonStatus();
        };

        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
        }

        updateButtonStatus();

        return () => {
            if (carousel) {
                carousel.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="technologies-carousel">
            <div className="technologies-carousel__top">
                <div className="technologies-carousel__desc">
                    <Category content={<Trans i18nKey="technologies.category2" />} />
                    <Title level={2}>{t('technologies.carouselTitle')}<span>{t('technologies.carouselTitleImp')}</span></Title>
                    <Text size="large">{t('technologies.carouselText')}</Text>
                </div>
                <ButtonSecondary iconUrl={arrowRight} size='large' to='/technologies'>{<Trans i18nKey="buttonDetails" />}</ButtonSecondary>
            </div>
            <div className="technologies-carousel__wrapper">
                <ul className="technologies-carousel__carousel">
                    {technologiesPage[0].secondBlock.map((technology, index) => (
                        <li className="technologies-carousel__card" key={index}>
                            <TechnologieCardCarousel title={t(technology.title)} text={t(technology.text)}>
                                <Icon image={technology.image} size="medium" />
                            </TechnologieCardCarousel>
                        </li>
                    ))}
                </ul>
                <div className='technologies-carousel__buttons'>
                    <button id="left" className={isStart ? 'disabled' : ''}><img src={arrowChevronLeft} alt="Scroll Left" /></button>
                    <button id="right"><img src={arrowChevronRight} alt="Scroll Right" /></button>
                </div>
            </div>
        </div>
    );
};

export default TechnologieCarousel;
