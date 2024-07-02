import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import "./Language.scss";

interface LanguageProps {
    changeLanguage: (lng: string) => void;
}

const Language: React.FC<LanguageProps> = ({ changeLanguage }) => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const isActiveLanguage = (lng: string) => {
        return i18n.language.startsWith(lng);
    };

    const handleLanguageChange = (lng: string) => {
        changeLanguage(lng);

        const currentPath = window.location.pathname;
        let newUrl = '';

        if (lng === 'fr') {
            newUrl = currentPath.replace('myapp1', 'myapp2');
        } else {
            newUrl = currentPath.replace('myapp2', 'myapp1');
        }

        navigate(newUrl);
    };

    return (
        <div className="language">
            <button
                type="button"
                className={`language__text${isActiveLanguage('en') ? '__active' : ''}`}
                onClick={() => handleLanguageChange('en')}
            >
                en
            </button>
            <span className="language__split"></span>
            <button
                type="button"
                className={`language__text${isActiveLanguage('fr') ? '__active' : ''}`}
                onClick={() => handleLanguageChange('fr')}
            >
                fr
            </button>
        </div>
    );
}

export default Language;
