import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Trans } from 'react-i18next';
import '../../i18n';
import MouseScroll from '@components/MouseScroll/MouseScroll';
import Stars from "../Stars/Stars";
import Container from "../Container/Container";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Title from "../Title/Title";
import Text from "../Text/Text";
import { Link } from "react-router-dom";
import { arrowRight, messageIcon } from '@/assets';
import { preLoaderAnim } from "../../animations";

const Parallax = () => {
    const [background, setBackground] = useState(20)
    const parallaxRef = useRef(null);
    const telescope = useRef(null);
    const grass = useRef(null);
    const mountains = useRef(null);
    const cloudsBottom = useRef(null);
    const cloudsLeft = useRef(null);
    const cloudsRight = useRef(null);
    const stars = useRef(null);
    const moon = useRef(null);
    const copy = useRef(null);
    const btn = useRef(null);

    /* Second UseEffect permettant de gérer la dernière étape -> parallax des éléments au scroll */
    /*
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "2000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(telescope.current, {y: "-=80",}, 0);
            tl.to(grass.current, {y: "-=30",}, 0);
            tl.to(mountains.current, {y: "+=50",}, 0);
            tl.to(stars.current, {top: 0,}, 0.5);
            tl.to(cloudsBottom.current, {opacity: 0, duration: 0.5}, 0);
            tl.to(cloudsLeft.current, {x: "-20%", opacity: 0,}, 0);
            tl.to(cloudsRight.current, {x: "20%", opacity: 0,}, 0);
            tl.to(moon.current, {x: "300%", y: "-260%", width: "220px",}, 0);
            tl.to(copy.current, {y: "100%", opacity: 0,}, 0);
            tl.to(btn.current, {opacity: 1,}, 1.5);
        });
        return () => ctx.revert();
    }, []);
    */

    return (
        <div className="parallax-outer">
            <div ref={parallaxRef} style={{ background: `linear-gradient(#061C45, #062149, #063256 ${background}%, #064E6C, #06748A, #068A9C)` }} className='parallax'>
                <img ref={telescope} className="telescope" src="/parallax/telescope2.svg" />
                <img ref={grass} className="grass" src="/parallax/grass.svg" />
                <img ref={mountains} className="mountains" src="/parallax/mountains.svg" />
                <div ref={copy} className="copy">
                    <Container>
                        <Title level={1}><Trans i18nKey="hero.title1" /> <br /><span><Trans i18nKey="hero.titleImp" /></span> <br /><Trans i18nKey="hero.title2" /></Title>
                        <Text size="large" className="mgb32"><Trans i18nKey="hero.text" /></Text>
                        <div ref={btn} className="dflex">
                            <ButtonPrimary to={"/contact"} iconUrl={messageIcon} size="large">
                                <Trans i18nKey="hero.button1" />
                            </ButtonPrimary>
                            <Link className="hero__link" to="/about"><Trans i18nKey="hero.button2" /><img src={arrowRight} alt="Arrow" /></Link>
                        </div>
                    </Container>
                </div>
                <Stars />
                <img ref={moon} className='moon' src="/parallax/moon.svg" />
                <img ref={cloudsBottom} className='clouds-bottom' src="/parallax/cloud-bottom.svg" />
                <img ref={cloudsLeft} className='clouds-left' src="/parallax/clouds-left.svg" />
                <img ref={cloudsRight} className='clouds-right' src="/parallax/clouds-right.svg" />
                <MouseScroll />
            </div>
        </div>
    )
}

export default Parallax