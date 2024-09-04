import React from 'react';
import i18n from '../../i18n';
//import { useTranslation } from 'react-i18next';
import { redirect } from 'react-router-dom';

import "./Language.scss";

interface LanguageProps {
    changeLanguage: (lng: string) => void;
}

const Language: React.FC<LanguageProps> = ({ changeLanguage }) => {
    
    const isActiveLanguage = (lng: string) => {
        return i18n.language.startsWith(lng);
    };

    const handleLanguageChange = (lng: string) => {
        changeLanguage(lng);

        const currentPath = window.location.href;
        let newUrl = '';

        if (lng === 'en') {
            newUrl = currentPath.replace('\.fr', '\.com');
        } else {
            newUrl = currentPath.replace('\.com', '\.fr');
        }

        redirect(newUrl);
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
