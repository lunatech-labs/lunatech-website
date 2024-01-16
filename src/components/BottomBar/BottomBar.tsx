import { useTranslation } from 'react-i18next';
import '../../i18n';

import Sound from '/sound.svg';
import "./BottomBar.scss";

const BottomBar = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="bottom-bar">
            <div className="lang">
                <button type="button" className="lang__text" onClick={() => changeLanguage('en')}>en</button>
                <span className="lang__split"></span>
                <button type="button" className="lang__text" onClick={() => changeLanguage('fr')}>fr</button>
            </div>
            <div className="sound">
                <img className="sound__icon" src={Sound} alt="Sound" />
                <p className="sound__text">sound off</p>
            </div>
        </div>
    )
}

export default BottomBar
