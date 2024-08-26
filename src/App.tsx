import { useEffect, useState } from "react";
import i18n from './i18n';

import Header from "@components/Header/Header";
import Footer from '@components/Footer/Footer';
import useScrollListener from "@components/Header/useScrollListener";
import RoutesMap from './RoutesMap';
import ScrollToTop from "@components/ScrollToTop";

import "./App.scss";

function App() {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const [navClassList, setNavClassList] = useState<string[]>([]);
    const scroll = useScrollListener();

    useEffect(() => {
        const _classList: string[] = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
            _classList.push("nav-bar--hidden");
        
            setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    return (
        <>
            <ScrollToTop />
            <nav className={navClassList.join(" ")}>
                <Header changeLanguage={changeLanguage} />
            </nav>
            <RoutesMap />
            <Footer changeLanguage={changeLanguage} />
        </>
    );
}

export default App;
