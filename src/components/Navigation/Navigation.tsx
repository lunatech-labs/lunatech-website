import { NavLink, Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import Language from '@components/Language/Language';
import Github from '/github.svg';
import Instagram from '/instagram.svg';
import Linkedin from '/linkedin.svg';
import Twitter from '/twitter.svg';

import "./Navigation.scss";
import { useEffect, useState } from 'react';

interface NavigationProps {
    onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
    changeLanguage: (lng: string) => void;
}


const Navigation: React.FC<NavigationProps> = ({ onClick, changeLanguage }) => {
    useTranslation();
    const [pathTitle, setPathTitle] = useState('Case studies');
    const [pathDesc, setPathDesc] = useState('Selected projects by Lunatech.')

    const handleMouseEnter = (title: string,desc: string) => () => {
        setPathTitle(title);
        setPathDesc(desc);
    };
    const handleMouseLeave = () => {
        setPathTitle('Case studies');
        setPathDesc('Selected projects by Lunatech.')
    };

    const parts = pathDesc.split(" ");
    const lastWord = parts.pop();
    const initialText = parts.join(" ");

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);
    
    return (
        <div className="navigation">
            <div className="navigation__main">
                <ul className="navigation__social">
                    <li onMouseEnter={handleMouseEnter("Github", "Take a look at our work.")} className="navigation__social-item"><Link to="https://github.com/lunatech-labs" target="_blank"><img src={Github} alt="Github logo" />Github</Link></li>
                    <li onMouseEnter={handleMouseEnter("Instagram", "Follow our news.")} className="navigation__social-item"><Link to="https://www.instagram.com/lunatech_nl/" target="_blank"><img src={Instagram} alt="Instagram logo" />Instagram</Link></li>
                    <li onMouseEnter={handleMouseEnter("Linkedin", "Follow our news.")} className="navigation__social-item"><Link to="https://www.linkedin.com/company/lunatech-research" target="_blank"><img src={Linkedin} alt="Linkedin logo" />Linkedin</Link></li>
                    <li onMouseEnter={handleMouseEnter("X / Twitter", "Follow our news.")} className="navigation__social-item"><Link to="https://twitter.com/lunatechlabs" target="_blank"><img src={Twitter} alt="Twitter logo" />X / Twitter</Link></li>
                </ul>
                <ul className="navigation__menu">
                    <li onClick={onClick} onMouseEnter={handleMouseEnter("home", "Return at the start")} onMouseLeave={handleMouseLeave} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/"><Trans i18nKey="navigation.home" /></NavLink></li>
                    <li onClick={onClick} onMouseEnter={handleMouseEnter("about", "About us page")} onMouseLeave={handleMouseLeave} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about"><Trans i18nKey="navigation.about" /></NavLink></li>
                    <li onClick={onClick} onMouseEnter={handleMouseEnter("services", "Services page")} onMouseLeave={handleMouseLeave} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/services">Services</NavLink></li>
                    <li onClick={onClick} onMouseEnter={handleMouseEnter("technlogies", "Technologies page")} onMouseLeave={handleMouseLeave} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/technologies">Technologies</NavLink></li>
                    <li onClick={onClick} onMouseEnter={handleMouseEnter("blog", "Blog page")} onMouseLeave={handleMouseLeave} className="navigation__menu-item"><NavLink to="https://blog.lunatech.com/" target="_blank">Blog</NavLink></li>
                    <li onClick={onClick} onMouseEnter={handleMouseEnter("careers", "Careers page")} onMouseLeave={handleMouseLeave} className="navigation__menu-item"><NavLink to="https://recruitment.lunatech.com/" target="_blank"><Trans i18nKey="navigation.careers" /></NavLink></li>
                    <li onClick={onClick} onMouseEnter={handleMouseEnter("contact", "Contact page")} onMouseLeave={handleMouseLeave} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/contact">Contact</NavLink></li>
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