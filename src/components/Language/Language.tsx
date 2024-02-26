import { useTranslation } from 'react-i18next';
import '../../i18n';
import "./Language.scss";

const Language = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
    };

    const isActiveLanguage = (lng: string) => {
        return i18n.language.startsWith(lng);
    };

    return (
        <div className="language">
            <button
                type="button"
                className={`language__text${isActiveLanguage('en') ? '__active' : ''}`}
                onClick={() => changeLanguage('en')}
            >
                en
            </button>
            <span className="language__split"></span>
            <button
                type="button"
                className={`language__text${isActiveLanguage('fr') ? '__active' : ''}`}
                onClick={() => changeLanguage('fr')}
            >
                fr
            </button>
        </div>
    )
}

export default Language;
