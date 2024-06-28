import { NavLink, Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import Language from '@components/Language/Language';

import "./Navigation.scss";
import { useState } from 'react';
import { navLinks, socialLinks } from '@/constants';

interface NavigationProps {
    onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
    changeLanguage: (lng: string) => void;
}


const Navigation: React.FC<NavigationProps> = ({ onClick, changeLanguage }) => {
    const { t } = useTranslation();
    const [pathTitle, setPathTitle] = useState('Case studies');
    const [pathDesc, setPathDesc] = useState('navigation.project')

    const handleMouseEnter = (title: string,desc: string) => () => {
        setPathTitle(title);
        setPathDesc(desc);
    };
    const handleMouseLeave = () => {
        setPathTitle('Case studies');
        setPathDesc('Selected projects by Lunatech.')
    };

    const parts = t(pathDesc).split(" ");
    const lastWord = parts.pop();
    const initialText = parts.join(" ");
    
    return (
        <div className="navigation">
            <div className="navigation__main">
                <ul className="navigation__social">
                    {socialLinks.map((link, index) => (
                        <li key={index} onMouseEnter={handleMouseEnter(link.mouseEnterTitle, link.mouseEnterDesc)} className="navigation__social-item"><Link to={link.url} target={link.blank ? "_blank" : ""}><img src={link.icon} alt={link.alt} />{link.title}</Link></li>   
                    ))}
                </ul>
                <ul className="navigation__menu">
                    {navLinks.map((link, index) => (
                        <li key={index} onClick={onClick} onMouseEnter={handleMouseEnter(link.mouseEnterTitle, link.mouseEnterDesc)} onMouseLeave={handleMouseLeave} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={link.url}><Trans i18nKey={link.title} /></NavLink></li>
                    ))}
                </ul>
            </div>
            <div className="navigation__footer">
                <div className="navigation__left">
                    <Language changeLanguage={changeLanguage} />
                </div>
                <div className="navigation__right">
                    <div className="navigation__way">
                        <p>/{pathTitle}</p>
                        <span className="navigation__border"></span>
                        <p>{initialText} <span className="navigation__red">{lastWord}</span></p>
                    </div>
                </div>
            </div>
      </div>
    )
  }

export default Navigation;