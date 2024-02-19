import { NavLink, Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import Language from '@components/Language/Language';
import Github from '/github.svg';
import Instagram from '/instagram.svg';
import Linkedin from '/linkedin.svg';
import Twitter from '/twitter.svg';

import "./Navigation.scss";

const Navigation = ({ onClick }: { onClick: () => void }) => {
    useTranslation();
    
    return (
        <div className="navigation">
            <div className="navigation__main">
                <ul className="navigation__social">
                    <li className="navigation__social-item"><Link to="https://github.com/lunatech-labs" target="_blank"><img src={Github} alt="Github logo" />Github</Link></li>
                    <li className="navigation__social-item"><Link to="https://www.instagram.com/lunatech_nl/" target="_blank"><img src={Instagram} alt="Instagram logo" />Instagram</Link></li>
                    <li className="navigation__social-item"><Link to="https://www.linkedin.com/company/lunatech-research" target="_blank"><img src={Linkedin} alt="Linkedin logo" />Linkedin</Link></li>
                    <li className="navigation__social-item"><Link to="https://twitter.com/lunatechlabs" target="_blank"><img src={Twitter} alt="Twitter logo" />X / Twitter</Link></li>
                </ul>
                <ul className="navigation__menu">
                    <li onClick={onClick} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Home</NavLink></li>
                    <li onClick={onClick} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about"><Trans i18nKey="navigation.about" /></NavLink></li>
                    <li onClick={onClick} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/services">Services</NavLink></li>
                    <li onClick={onClick} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/vision">Vision</NavLink></li>
                    <li onClick={onClick} className="navigation__menu-item"><NavLink to="https://blog.lunatech.com/" target="_blank">Blog</NavLink></li>
                    <li onClick={onClick} className="navigation__menu-item"><NavLink to="https://recruitment.lunatech.com/" target="_blank">Careers</NavLink></li>
                    <li onClick={onClick} className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="navigation__footer">
                <div className="navigation__left">
                    <Language />
                </div>
                <div className="navigation__right">
                    <div className="navigation__way">
                        <p>/Case studies</p>
                        <span className="navigation__border"></span>
                        <p>Selected projects by <span className="navigation__red">Lunatech</span>.</p>
                    </div>
                </div>
            </div>
      </div>
    )
  }

export default Navigation;