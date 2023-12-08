import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Stars from "../components/Stars/Stars";

const Home = () => {

    return (
        <>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={0.25}>
                    <div className="hero">
                        <Stars />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.30}><div className="landscape__mist"></div></ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.2}><div className="landscape__clouds"></div></ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.5}>
                    <div className="hero-content">
                        <h1>Modernize your<br /><span>digital products</span><br />for tomorrow's future.</h1>
                        <p>We think and design unique experiences<br />for tomorrow's innovative digital products.</p>
                        <a href="#">Let's talk</a>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={.2}><div className="landscape__mountains"></div></ParallaxLayer>
                <ParallaxLayer offset={0} speed={.4}><div className="landscape__grass"></div></ParallaxLayer>
                <ParallaxLayer offset={0} speed={.4}><div className="landscape__telescope"></div></ParallaxLayer>
                <ParallaxLayer offset={1} speed={.2}>
                    <article className="main-article">
                        <div className="main-article__content">
                            <h2 className="main-article__header">To be continued</h2>
                            <p className="main-article__paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error provident dignissimos facere. Repellendus tempore autem qui! Quia magnam tempora esse id necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta laboriosam!</p>
                        </div>
                    </article>
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default Home;