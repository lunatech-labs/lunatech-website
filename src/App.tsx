import { useEffect, useState } from "react";
import useScrollListener from "@components/Header/useScrollListener";
import { useTranslation } from 'react-i18next';

import Header from "@components/Header/Header";
import Footer from '@components/Footer/Footer';
import RoutesMap from './RoutesMap';
import "./App.scss";

function App() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    useEffect(() => {
        const _classList = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
            _classList.push("nav-bar--hidden");
        
            setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    return (
        <>
            <nav className={navClassList.join(" ")}>
                <Header changeLanguage={changeLanguage} />
            </nav>
            <RoutesMap />
            <Footer changeLanguage={changeLanguage} />
        </>
    );
}

export default App;
