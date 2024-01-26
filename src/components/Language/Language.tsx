import { useTranslation } from 'react-i18next';
import '../../i18n';

import "./Language.scss";

const Language = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language">
            <button type="button" className="language__text" onClick={() => changeLanguage('en')}>en</button>
            <span className="language__split"></span>
            <button type="button" className="language__text" onClick={() => changeLanguage('fr')}>fr</button>
        </div>
    )
}

export default Language
