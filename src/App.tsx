import { useEffect, useState } from "react";
import useScrollListener from "@components/Header/useScrollListener";

import Header from "@components/Header/Header";
import Footer from '@components/Footer/Footer';
import RoutesMap from './RoutesMap';
import "./App.scss";

function App() {

    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
            _classList.push("nav-bar--hidden");
        
            setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    return (
        <>
            <nav className={navClassList.join(" ")}>
                <Header />
            </nav>
            <RoutesMap />
            <Footer />
        </>
    );
}

export default App;
