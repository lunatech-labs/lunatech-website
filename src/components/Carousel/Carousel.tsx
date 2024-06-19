import { technologiesPage } from "@/constants";
import TechnologieCardCarousel from "../TechnologieCardCarousel/TechnologieCardCarousel";
import Icon from "../Icon/Icon";
import "./Carousel.scss";
import { arrowChevronLeft, arrowChevronRight, arrowRight } from "@/assets";
import Category from "@components/Category/Category";
import Title from "@components/Title/Title";
import Text from "@components/Text/Text";
import { Trans, useTranslation } from "react-i18next";
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";

const Carousel = () => {   
    const carousel = document.querySelector('.technologies-carousel__carousel');
    const arrowBtns = document.querySelectorAll('.technologies-carousel__buttons button');
    const firstCardWidth = carousel?.querySelector('.technologies-carousel__card')?.clientWidth ?? 0;

    let isDragging = false, startX: number, startLeftScroll: number;

    if (carousel) {
        const changeButtonColor = () => {
            if (carousel?.scrollLeft === 0) {
                arrowBtns.forEach(arrowBtn => {
                    arrowBtn.id === 'left' ? arrowBtn.classList.add('disabled') : arrowBtn.classList.remove('disabled');
                });
            } else if (Math.ceil(carousel.scrollLeft) === (carousel.scrollWidth ?? 0) - (carousel.clientWidth ?? 0)) {
                arrowBtns.forEach(arrowBtn => {
                    arrowBtn.id === 'right' ? arrowBtn.classList.add('disabled') : arrowBtn.classList.remove('disabled');
                });
            } else {
                arrowBtns.forEach(arrowBtn => arrowBtn.classList.remove('disabled'));
            }
        };

        arrowBtns.forEach(arrowBtn => {
            arrowBtn.addEventListener('click', () => {
                carousel.scrollLeft += arrowBtn.id === 'left' ? -firstCardWidth : firstCardWidth;
                changeButtonColor();
            });
        });
    } else {
        console.error('Carousel element not found');
    }
    
    const dragStart = (e: MouseEvent): void => {
        isDragging = true;
        carousel?.classList.add('active');
        startX = e.pageX;
        if (carousel)
            startLeftScroll = carousel.scrollLeft;
    }
    
    const dragging = (e: MouseEvent): void => {
        if (!isDragging) return;
        if (carousel)
            carousel.scrollLeft = startLeftScroll - (e.pageX - startX);
    }

    const dragStop = (): void => {
        isDragging = false;
        carousel?.classList.remove('active');
    }
    
    if (carousel) {
        carousel.addEventListener('mousedown', (e) => dragStart(e as MouseEvent));
        carousel.addEventListener('mousemove', (e) => dragging(e as MouseEvent));
        carousel.addEventListener('mouseup', () => isDragging = false);
        carousel.addEventListener('mouseleave', () => isDragging = false);
        document.addEventListener('mouseup', dragStop);
    }

    const { t } = useTranslation();
    
    return (
        <div className="technologies-carousel">
            <div className='technologies-carousel__desc'>
                <Category content={<Trans i18nKey="technologies.category2" />} />
                <Title level={2}>{t('technologies.carouselTitle')}<span>{t('technologies.carouselTitleImp')}</span></Title>
                <Text size="large" className="mgb32">{t('technologies.carouselText')}</Text>
                <ButtonSecondary iconUrl={arrowRight} size='large' to='/technologies'>{<Trans i18nKey="buttonDetails" />}</ButtonSecondary>
            </div>
            <div className="technologies-carousel__wrapper">
                <ul className="technologies-carousel__carousel">
                    {technologiesPage[0].secondBlock.map((technology, index) =>
                        <li className="technologies-carousel__card" key={index}>
                            <TechnologieCardCarousel title={t(technology.title)} text={t(technology.text)}>
                                <Icon imageUrl={technology.imageUrl} size="medium" />
                            </TechnologieCardCarousel>
                        </li>
                    )}
                </ul>
                <div className='technologies-carousel__buttons'>
                    <button id="left"><img src={arrowChevronLeft} alt="Scroll Left" /></button>
                    <button id="right"><img src={arrowChevronRight} alt="Scroll Right" /></button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
