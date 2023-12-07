import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Stars from "../components/Stars/Stars";

const Home = () => {

    return (
        <>
            <div className="hero">
                <Parallax pages={4}>
                    <ParallaxLayer offset={0} speed={.01}>
                        <Stars />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={.09}>
                        <div className="landscape__clouds"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={.2}>
                        <div className="landscape__mountains"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={.4}>
                        <div className="landscape__grass"></div>
                    </ParallaxLayer>
                </Parallax>
                <div className="layer__header">
                    <h1>Modernize your <span>digital products</span> for tomorrow's future.</h1>
                    <p>We think and design unique experiences for tomorrow's innovative digital products.</p>
                </div>
            </div>

            <article className="main-article">
                <div className="main-article__content">
                    <h2 className="main-article__header">To be continued</h2>
                    <p className="main-article__paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error provident dignissimos facere. Repellendus tempore autem qui! Quia magnam tempora esse id necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta laboriosam!</p>
                </div>
            </article>
        </>
    );
};

export default Home;